import React, { useState, useContext, createContext, useEffect } from "react";
import { Alert } from "react-native";
import { getDoc, doc, setDoc } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth, db } from "../../../main/firebase";

type AuthContextProps = {
  signIn: (email: string, password: string) => void;
  signUp: (params: SignupProps) => void;
  signOut: () => void;
  user: User;
  loading: boolean;
};

type User = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  password?: string;
};

type SignupProps = {
  params: User;
};

type AuthProviderProps = {
  children: React.ReactNode
}

const USER_COLLECTION = "@learn-javascript:user";

const AuthContext = createContext<AuthContextProps | null>(null);

const AuthProvider = ({children}: AuthProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({} as User);

  useEffect(() => {
    async function loadUserStorageData() {
      setLoading(true);

      const storedUser = await AsyncStorage.getItem(USER_COLLECTION);
      console.log(storedUser);

      if (storedUser) {
        const userData = JSON.parse(storedUser) as User;
        setUser(userData);
      }

      setLoading(false);
    }

    loadUserStorageData();
  }, []);

  const signIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password).then(async (account) => {
      getDoc(doc(db, "users", account.user.uid))
        .then(async (profile) => {
          if (profile.exists()) {
            const { name, email, phone } = profile.data() as User;
            const userData = {
              id: account.user.uid,
              name,
              email,
              phone,
            };

            await AsyncStorage.setItem(
              USER_COLLECTION,
              JSON.stringify(userData)
            );
            setUser(userData);
          }
        })
        .catch((error) => {
          throw new Error(error.message);
        });
    });
  };

  const signUp = async ({ params }: SignupProps) => {
    const { email, password, name, phone } = params;
    createUserWithEmailAndPassword(auth, email, password!)
      .then((account) => {
        setLoading(true);
        setDoc(doc(db, "users", account.user.uid), { email, name, phone })
          .then(async () => {
            const userData = {
              id: account.user.uid,
              name: params.name,
              email: params.email,
              phone: params.phone,
            };

            await AsyncStorage.setItem(
              USER_COLLECTION,
              JSON.stringify(userData)
            );
            setUser(userData);
            setLoading(false);
          })
          .catch(() => {
            Alert.alert("Register", "Unable to register");
            setLoading(false);
          });
      })
      .catch((error) => {
        const { code } = error;
        console.log(code);
        if (code === "auth/user-not-found" || code === "auth/wrong-password") {
          return Alert.alert("Register", "Invalid email and/or password");
        } else {
          return Alert.alert("Register", "Email already in use");
        }
      });
  };

  const signOut = async () => {
    await auth.signOut();
    await AsyncStorage.removeItem(USER_COLLECTION);
    setUser({} as User);
  };

  return (
    <AuthContext.Provider value={{ signIn, signUp, signOut, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("context does not exist");
  }

  return context;
}

export { AuthProvider, useAuth };

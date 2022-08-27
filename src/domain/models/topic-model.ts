import { ExerciseItem } from "./exercise-model";
import { ResourceItem } from "./resource-model";

export type TopicItem = {
	id: string;
	title: string;
	description?: string;
	context?: string;
	icon: string;
	level: number;
	progress: number;
	resources?: ResourceItem[];
	exercises?: ExerciseItem[];
}
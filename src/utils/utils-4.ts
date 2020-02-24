export type Todo = {
    title: string;
    description: string;
    completed: boolean;
    planDate: Date;
    factDate: Date;
}

// Изменить тип так, чтобы избежать дублирования кода
type TodoPreview = {
    title: string;
    completed: boolean;
};

const todoPreview: TodoPreview = {
    title: 'Clean room',
    completed: false,
};

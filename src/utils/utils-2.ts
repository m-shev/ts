export const enum TaskType {
    Call = 'call',
    Meeting = 'meeting',
    Outflow = 'outflow',
    ExpansionOfCooperation = 'expansion-of-cooperation'
}

type Task = {
    value: string;
    code: string;
}

/**
 * Изменить тип так, чтобы допустимыми значениями ключей словари были только значения из TaskType
 */
type TaskDictionary = {[key: string]: Task};

const taskDictionary: TaskDictionary = {
    [TaskType.Call]: {
        value: 'Звонок',
        code: '1-XYZ'
    },
    [TaskType.Meeting]: {
        value: 'Встреча',
        code: '2-XYZ'
    },
    [TaskType.Outflow]: {
        value: 'Отток',
        code: '3-XYZ'
    },
    [TaskType.ExpansionOfCooperation]: {
        value: 'Расширение сотрудничества',
        code: '4-XYZ',
    },
    'Предварительный звонок': {
        value: 'Предварительный звонок',
        code: '5-XYZ'
    }
};

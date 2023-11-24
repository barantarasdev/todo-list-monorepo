export type SignInT = {
  userEmail: string
  userPassword: string
}

export type TodoT = {
  todoId: string
  columnId: string
  todoValue: string
  todoCompleted: boolean
}

export type ColumnT = {
  columnId: string
  columnName: string
  todos: TodoT[]
  boardId: string
}

export type BoardT = {
  boardId: string
  boardName: string
}

export type RootParamList = {
  Home: undefined
  SignIn: undefined
  Columns: undefined
}

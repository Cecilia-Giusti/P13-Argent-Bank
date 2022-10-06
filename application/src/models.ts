export interface featureDataItem {
  name: string;
  img: string;
  title: string;
  content: string;
}

export interface loginInt {
  email: string;
  password: string;
}

export interface userDataInt {
  email?: string;
  firstName?: string;
  lastName?: string;
  createdAt?: string;
  updatedAt?: string;
  id?: string;
}

export interface accountDataInt {
  title: string;
  amount: number;
  description: string;
}

export interface editUserDataInt {
  firstName?: string;
  lastName?: string;
}

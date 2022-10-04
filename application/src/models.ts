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
  createdAt?: string;
  email?: string;
  firstName?: string;
  id?: string;
  lastName?: string;
  updatedAt?: string;
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

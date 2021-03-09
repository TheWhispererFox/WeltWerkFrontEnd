export interface Article {
  Title: string;
  Subtitle: string;
  Category: string;
}
export interface User {
  Id: string;
  Username: string;
  Roles: Array<Role>;
  ProfilePicture: string;
  MainRole: Role;
}

export interface Preferences {
  Language: string;
  DarkMode: boolean;
}

export interface Role {
  Id: string;
  Name: string;
  Color: string;
  Description: string;
  Permissions: Array<Permission>;
}

export interface Permission {
  Id: string;
  Name: string;
}

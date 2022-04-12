import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  SimpleShowLayout,
  Show,
  SimpleForm,
  Edit,
  TextInput,
  Create
} from "react-admin";
import {useRecordContext} from "react-admin";
import {makeStyles} from "@material-ui/core/styles";

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="isOnline" />
      <CustomUrlField source="website" />
    </Datagrid>
  </List>
);

export const CustomUrlField = ({source}) => {
  const useStyles = makeStyles({
    link: {
      textDecoration: "none",
      color: "red"
    },
    icon: {
      width: "0.5em",
      height: "0.5em",
      paddingLeft: 2
    }
  });
  const record = useRecordContext();
  const classes = useStyles();
  return (
    <a href={record[source]} className={classes.link}>
      {record[source]}
    </a>
  );
};

export const UserShow = (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="name" />
        <TextField source="work" />
        <TextField source="isOnline" />
        <TextField source="website" />
      </SimpleShowLayout>
    </Show>
  );
};

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="work" />
      <TextInput source="website" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="work" />
      <TextInput source="website" />
    </SimpleForm>
  </Create>
);

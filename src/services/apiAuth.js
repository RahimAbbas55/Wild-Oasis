/* eslint-disable no-unused-vars */
import supabase, { supabaseUrl } from "./supabase";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
export async function getCurrUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrUser({ password, fullName, avatar }) {
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  // 1.Update pass or full name
  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);
  if (!avatar) return data;

  // 2.Upload avatar
  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const { error : storageErr } = await supabase.storage
    .from("Avatars")
    .upload(fileName, avatar);

    if (storageErr) throw new Error(storageErr.message);
  // 3.Update avatar in the user
  const { data : updatedUser , error : error2 } = await supabase.auth.updateUser({
    data : {
      avatar : `${supabaseUrl}/storage/v1/object/public/Avatars/${fileName}`
    }
  })
  if (error2) throw new Error(error2.message);
  return updatedUser
}

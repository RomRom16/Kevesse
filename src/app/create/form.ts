import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { collection, addDoc } from 'firebase/firestore';
import initializeFirebaseClient  from '@/lib/initFirebase';
import { formSchema, uploadImage, FormValues } from './functions';

export function useCampaignForm() {
  const { auth, db } = initializeFirebaseClient();
  const campaignRef = collection(db, "campaigns");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      bio: "",
      type: "none",
      category: "",
      deadline: new Date(),
    },
  });

  const onSubmit = async (values: FormValues) => {
    if (!auth.currentUser) {
      console.error("User not authenticated");
      return;
    }
    const imageUrl = await uploadImage(selectedFile).catch(console.error);

    const docToSave = {
      ...values,
      imageUrl,
      owner: auth.currentUser.uid,
      payedOut: false,
      amountCollected: 0,
      dateCreated: new Date(),
      campaignStatus: 1,
    };

    return addDoc(campaignRef, docToSave);
  };

  return { form, onSubmit, setSelectedFile };
}

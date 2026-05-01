import { createProfilesStyles } from '@/assets/styles/profiles.styles';
import { getUserProfile } from '@/config/api';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Modal, Pressable, Text, TextInput, View } from 'react-native';

const ProfilesTop = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  const loadProfile = async () => {
    try {
      const data = await getUserProfile.getMyProfile();
      setName(data.name || '');
      setEmail(data.email || '');
      setBio(data.bio || '');
    } catch (err: any) {
      console.error('Failed to load profile:', err);
    }
  };

  const updateProfile = async () => {
    try {
      const data = await getUserProfile.updateUserProfile({
        name,
        email,
        bio,
      });
      console.log('Profile updated:', data);
      loadProfile(); // refresh after update
    } catch (err: any) {
      console.error('Failed to update profile:', err);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const profileStyles = createProfilesStyles();

  return (
    <View style={profileStyles.page}>
      <View style={profileStyles.topNav}>
        <Text style={profileStyles.title}>My profile</Text>

        <View style={profileStyles.InnerTopNav}>
          <Pressable onPress={() => setModalVisible(true)}>
            <MaterialCommunityIcons
              name="lead-pencil"
              size={25}
              color="black"
              style={{ backgroundColor: 'white', borderRadius: 20, padding: 8 }}
            />
          </Pressable>

          <Ionicons
            name="notifications-outline"
            size={25}
            style={{ backgroundColor: 'white', borderRadius: 20, padding: 8 }}
          />
        </View>
      </View>

      {/* Edit Profile Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <View style={{
            width: '85%',
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 20,
          }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 15 }}>
              Edit Profile
            </Text>

            <TextInput
              placeholder="Name"
              value={name}
              onChangeText={setName}
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                padding: 12,
                borderRadius: 10,
                marginBottom: 12,
              }}
            />

            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                padding: 12,
                borderRadius: 10,
                marginBottom: 12,
              }}
            />

            <TextInput
              placeholder="Bio"
              value={bio}
              onChangeText={setBio}
              multiline
              numberOfLines={3}
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                padding: 12,
                borderRadius: 10,
                marginBottom: 20,
                textAlignVertical: 'top',
              }}
            />

            {/* Buttons */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <Pressable onPress={() => setModalVisible(false)}>
                <Text style={{ color: 'red', fontSize: 16, fontWeight: '600' }}>
                  Cancel
                </Text>
              </Pressable>

              <Pressable
                onPress={async () => {
                  await updateProfile();
                  setModalVisible(false);
                }}
              >
                <Text style={{ color: 'green', fontSize: 16, fontWeight: 'bold' }}>
                  Save
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProfilesTop;
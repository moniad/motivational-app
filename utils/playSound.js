import { Audio } from 'expo';

export const playSound = async () => {
  try {
    await Audio.setIsEnabledAsync(true);
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS
    });
    this.sound = await Audio.Sound.create(
      require('../assets/Music.mp3'),
      { shouldPlay: true }
    );
  } catch (error) {
    console.error(error);
  }
}
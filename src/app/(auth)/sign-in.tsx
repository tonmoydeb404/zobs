import { useOAuth } from '@clerk/clerk-expo';
import * as Linking from 'expo-linking';
import { useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';
import { Text } from '~/components/ui/text';

// Warm up the browser for better performance
const useWarmUpBrowser = () => {
  React.useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

export default function SignInPage() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });
  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const onGoogleSignIn = React.useCallback(async () => {
    setIsLoading(true);
    setError('');

    try {
      const { createdSessionId, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/(tabs)', { scheme: 'myapp' }),
      });

      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        router.replace('/');
      } else {
        console.log('OAuth flow completed but no session created');
      }
    } catch (err: any) {
      setError(err?.errors?.[0]?.message || 'Sign in failed. Please try again.');
      console.error('OAuth error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [startOAuthFlow, router]);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 justify-center px-6">
        <Card className="border-0 p-8">
          <View className="mb-8 items-center">
            <Text className="mb-2 text-3xl font-bold text-gray-900">Welcome Back</Text>
            <Text className="text-center text-gray-600">Sign in with your Google account</Text>
          </View>

          <View className="gap-y-4">
            {error ? (
              <View className="rounded-lg bg-red-50 p-3">
                <Text className="text-sm text-red-600">{error}</Text>
              </View>
            ) : null}

            <Button
              onPress={onGoogleSignIn}
              disabled={isLoading}
              variant="outline"
              className="flex-row items-center justify-center gap-x-3 py-4">
              <Text className="font-medium text-gray-700">
                {isLoading ? 'Signing in...' : 'Continue With Google'}
              </Text>
            </Button>
          </View>
        </Card>
      </View>
    </SafeAreaView>
  );
}

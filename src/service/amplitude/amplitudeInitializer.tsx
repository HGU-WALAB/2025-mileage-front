import * as amplitude from '@amplitude/analytics-browser';

const amplitudeApiKey = process.env.VITE_AMPLITUDE_API_KEY ?? '';

const amplitudeInitializer = () => {
  const init = (userName?: string) => {
    amplitude.init(amplitudeApiKey, userName, {
      defaultTracking: {
        pageViews: false,
      },
      minIdLength: 1,
    });
  };

  return { init };
};

export default amplitudeInitializer;

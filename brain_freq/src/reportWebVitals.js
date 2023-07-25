
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      [getCLS, getFID, getFCP, getLCP, getTTFB].forEach(metric => metric(onPerfEntry));
    });
  }
};

export default reportWebVitals;
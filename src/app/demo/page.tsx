
export default function DemoPage() {
  const iframeStyle = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    border: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    zIndex: 999999,
  };

  return (
    <div>
      <iframe
        src="https://demo.casethemes.net/solarva/"
        style={iframeStyle}
        title="Solarva Demo"
      >
        Your browser doesn&apos;t support iframes
      </iframe>
    </div>
  );
}

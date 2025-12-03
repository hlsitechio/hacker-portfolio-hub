const MatrixBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-[0.15]"
        style={{ filter: 'hue-rotate(0deg)' }}
      >
        <source
          src="https://cdn.pixabay.com/video/2020/08/11/46958-449623750_large.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default MatrixBackground;

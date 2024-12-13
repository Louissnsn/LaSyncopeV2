export default function VimeoEmbed() {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://vimeo.com/864369255/e6f255dc73?share=copy&turnstile=0.EyhbP4oYZVmia3CNEsHLE0QmMzOdnDNoKuWNefu9K6L0jZmarcgKSarD6-Fje_JjvhFzjCRhvBKza0S0W6p4AVycNc2gjhF8HeSfdbUMu1SEOYATVSHeDyaA0fkB23D1KI0h6rbHfC1TuVOioWgiF5HRw3FmBbZxGHsnuYdD9eW8DpplezkKDElIahJ4oMKjAP-MXgj1a90eOwg5Jdg9o-JvZPbB-9s0YkPn4qeaI8ZqZxRkOW4qLc_PxJW6RJKsCFDT_oSeHMLSOU3jkJ-VY-NyeElhrM7VZaU2VkRwM4yvSEre2ogx02NtEzwXL2zBuoM6y5XvYdVNXvaRZ-uPyd28UGs2zdz5-tl0cINy_A1a8bzmFfz8RWXgP7bHF0ZZG5nXO9yZuwD9TQoQ5oICaVj1lQuoRcU3P7XG6cV5VdvCKyTigP2VZ7X6wVerh-rSY0eWqSCbO_6HXd3FtYT1_k4M1Pvn4QjafqYS6O_khriQwyEby0yoLglFYXgWIUWxwGRuSt0YJ5fcWZ2Fg2ID4oIH6jy49JuNUXW88ozOCRkJyfTg3elCOCnFk8Cy6Q89MkG3g5X8j3SMrkFhfIMB7DhjJ0bnWpKeGvYlSuRFDbg_cb3-5DtVXo5g2fSaxwrUnwl0LUZPld5Sx6YfQIkISYvF4LKqWE39AEgElyNfZcxQWGIePIHdtM0jCfwxPktWVbDyaSYRWCto7yTvsa6Z8Luatzmmpto-qc_wuc051BhMQinVYCm6IvuYvGLjRyNo.-uNlDiUi7qygs7sVysbvjg.3f798919114aca5099e4b866e17d46b799932a3d82c66466fe22579bea31e09f" // Remplacez par l'URL de votre vidéo
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Vimeo Video"
      ></iframe>
    </div>
  );
}

interface ImageProps {
  imageTitle: string;
}

function Image({ imageTitle }: ImageProps) {
  return (
    <img
      src={require(`../../images/${imageTitle}`)}
      alt="Worker sitting on the desk"
    />
  );
}

export default Image;

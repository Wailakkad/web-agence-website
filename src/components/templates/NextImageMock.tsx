import { forwardRef } from "react";

const Image = forwardRef(({ src, alt, fill, className, style, sizes, priority, quality, ...props }: any, ref: any) => {
  const mergedStyle = fill
    ? {
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit: 'cover',
        ...style,
      }
    : style;

  return (
    <img
      ref={ref}
      src={src}
      alt={alt || ""}
      className={className}
      style={mergedStyle}
      loading={priority ? "eager" : "lazy"}
      {...props}
    />
  );
});

Image.displayName = "Image";
export default Image;

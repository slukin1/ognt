export const convertBase64ToFile = (base64: string, fileName: string = "image") => {
  const base64Data = base64.split(",")[1];
  const binaryString = atob(base64Data);
  const uint8Array = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    uint8Array[i] = binaryString.charCodeAt(i);
  }

  const blob = new Blob([uint8Array], { type: "image/png" });

  return new File([blob], fileName, { type: blob.type });
};

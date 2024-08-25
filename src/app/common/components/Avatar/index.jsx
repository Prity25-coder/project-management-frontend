import Avatar from "@mui/material/Avatar";

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: getAvatarText(name),
  };
}

function getAvatarText(name) {
  const nameArr = name.split(" ");

  let result = "";

  if (nameArr[0]) {
    result += nameArr[0][0];
  }

  if (nameArr[1]) {
    result += nameArr[1][0];
  } else {
    result += nameArr[0][nameArr[0].length - 1];
  }

  return result;
}

// eslint-disable-next-line react/prop-types
export default function BackgroundLetterAvatars({ name = "" }) {
  return <Avatar {...stringAvatar(name)} />;
}

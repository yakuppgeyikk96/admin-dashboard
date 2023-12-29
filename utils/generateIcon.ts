import { AllInbox, Home } from "@mui/icons-material";


function generateIcon(iconName: string) {
  switch (iconName) {
    case "Home":
      return Home;
    case "Package":
      return AllInbox
  }
} 

export default generateIcon;
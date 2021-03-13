import { sortWith, prop, ascend } from "ramda";

export default sortWith([ascend(prop("startindex"))]);

import sg from '../config/singlenton';

export const useUser = () => {
    return sg.getInstance()
    .getConfiguration()
    .useUser();
};
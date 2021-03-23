import { DEV_BACKEND_URL, PROD_BACKEND_URL } from '@env';

const devEnvVariable = {
    DEV_BACKEND_URL
}

const prodEnvVariable = {
    PROD_BACKEND_URL
}

export default _DEV_ ? devEnvVariable : prodEnvVariable;
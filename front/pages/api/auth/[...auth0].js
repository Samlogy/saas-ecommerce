import { handleAuth } from '@auth0/nextjs-auth0';

console.log('AUTH0_BASE_URL env: ', process.env.AUTH0_BASE_URL);

export default handleAuth();    

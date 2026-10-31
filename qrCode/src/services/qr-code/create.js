import prompt from 'prompt';
import qrCodePromptSchema from '../../schemas/prompts/qrcode.js';
import handleQRCodeGeneration from './handle.js';

async function createQRCode() {
    prompt.get(qrCodePromptSchema, handleQRCodeGeneration);
    prompt.start();
}

export default createQRCode;
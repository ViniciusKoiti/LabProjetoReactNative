
export interface ResultImcDTO {
    imcText: String,
    imcValue: number
}

export function createResultImcDTO(imcText : String, imcValue: number){
    return {
        imcText: imcText,
        imcValue: imcValue
    }
}


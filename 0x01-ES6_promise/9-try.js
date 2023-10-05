function guardrail(mathFunction) {
    let queue = [];
    try {
        const result = mathFunction();
        queue.push(result);
    } catch (error) {
        queue.push(error.message);
    }
    queue.push('Guardrail was processed');
    return queue;
}

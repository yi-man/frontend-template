import { describe, it, expect } from 'bun:test';
import type { ModelMessage } from 'ai';
import { AIMessage, HumanMessage, SystemMessage } from '@langchain/core/messages';
import { modelMessagesToLc } from '@/lib/llm/to-lc-messages';

describe('modelMessagesToLc', () => {
  it('maps system / user / assistant to LangChain messages', () => {
    const input: ModelMessage[] = [
      { role: 'system', content: 'S' },
      { role: 'user', content: 'Hi' },
      { role: 'assistant', content: 'Hello' },
    ];
    const lc = modelMessagesToLc(input);
    expect(lc[0]).toBeInstanceOf(SystemMessage);
    expect(lc[1]).toBeInstanceOf(HumanMessage);
    expect(lc[2]).toBeInstanceOf(AIMessage);
    expect(lc[0].content).toBe('S');
    expect(lc[1].content).toBe('Hi');
    expect(lc[2].content).toBe('Hello');
  });
});

# Kotlin Agent Reviewer

Elite Kotlin production-grade AI reviewer focused on:

- idiomatic Kotlin
- coroutines
- JVM performance
- Compose
- KMP
- architecture review
- production readiness

---

# Installation

## Skills CLI

```bash
npx skills add dev-isaacmello/kotlin-code-reviewer
```

## NPX

```bash
npx @dev-isaacmello/kotlin-code-reviewer
```

---

# What It Reviews

## Kotlin Idiomaticity

- Java-style Kotlin
- scope function misuse
- nullable abuse
- sealed hierarchy design
- Flow misuse
- DSL quality
- immutability

---

## Coroutines & Concurrency

- structured concurrency
- cancellation propagation
- dispatcher misuse
- GlobalScope abuse
- Flow backpressure
- lifecycle leaks
- async misuse

---

## Architecture

- boundary violations
- god classes
- useless abstractions
- repository anti-patterns
- layering issues
- KMP portability concerns

---

## Performance

- allocation pressure
- collection inefficiencies
- eager evaluation
- boxing/unboxing
- coroutine overhead
- Compose recomposition issues

---

# Example Usage

```txt
@kotlin-code-reviewer review this Flow pipeline
```

```txt
@kotlin-code-reviewer inspect coroutine cancellation handling
```

```txt
@kotlin-code-reviewer analyze architecture boundaries
```

---

# Ecosystem Compatibility

Compatible with:

- Claude Code
- Cursor
- Windsurf
- OpenAI Agents SDK
- LangGraph
- CrewAI
- Continue.dev

---

# Philosophy

This reviewer prioritizes:

- production pragmatism
- maintainability
- architectural clarity
- operational simplicity
- concurrency safety

Avoiding:

- architecture theater
- overengineering
- Java-style Kotlin
- unnecessary abstractions

---

# License

MIT
#!/usr/bin/env python3
"""Run multiple task_wait_random coroutines concurrently and return sorted delays."""

import asyncio
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> list[float]:
    """Spawn n asyncio Tasks using task_wait_random with max_delay and return sorted results."""
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    results = await asyncio.gather(*tasks)
    return sorted(results)

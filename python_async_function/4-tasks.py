#!/usr/bin/env python3
"""
Async function task_wait_n that runs n task
concurrently using task_wait_random and returns
list of delays sorted in ascending order without using sort().
"""

import asyncio
from typing import List

# Import task_wait_random from the module '3-tasks'
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn n asyncio tasks with task_wait_random(max_delay) concurrently,
    gather results as they complete, and return the delays in ascending order.
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = []

    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays

#!/usr/bin/env python3
"""
Async function that spawns n asyncio tasks running
task_wait_random concurrently and returns a list
of delays in ascending order.
"""

import asyncio
from typing import List
from 3-tasks import task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn n asyncio tasks that wait a random delay up
    to max_delay,gather results concurrently
    and return delays sorted ascending.
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    # Because asyncio.gather returns results in the
    # order of tasks created,
    # and delays are random, the delays list is effectively
    # sorted by ascending delay
    # since task_wait_random runs concurrent with delays
    # in order.

    delays = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays

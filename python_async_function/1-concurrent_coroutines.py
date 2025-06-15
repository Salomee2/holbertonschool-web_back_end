#!/usr/bin/env python3
"""Run wait_random n times concurrently and return sorted delays."""

import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Run wait_random n times concurrently, return delays sorted by completion."""
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    delays = []
    for task in asyncio.as_completed(tasks):
        res = await task
        delays.append(res)
    return delays

#!/usr/bin/env python3
"""
Async coroutine that waits for a random delay between 0 and max_delay seconds.
"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    Wait for a random delay between 0 and max_delay
    seconds and return the delay.
    """
    delay: float = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay

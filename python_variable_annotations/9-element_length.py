#!/usr/bin/env python3
"""Annotate element_length function with appropriate types."""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return a list of tuples for each element in lst."""
    return [(i, len(i)) for i in lst]

#!/usr/bin/env python3
"""Function that sums a list containing integers and floats."""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Return the sum of all integers and floats in the
    input list as a float."""
    return float(sum(mxd_lst))

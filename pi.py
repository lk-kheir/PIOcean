import os
import time
import sys
from pathlib import Path


BEFORE_PATTERN_LENGTH = 10_000
AFTER_PATTERN_LENGTH = 1_000


class PI:
    def __init__(self, pattern: str):
        self.pattern = pattern

    def read_file(self, p: Path) -> str:
        with open(p, 'r') as file:
            data = file.read()
        return data


    def main(self) -> str:
        
        pi = self.read_file('./pi_1_b_digits.txt')


        index = pi.find(self.pattern)

        if index == -1:
            print('pattern not found')
            return "NOT FOUND"

        before = pi[index-BEFORE_PATTERN_LENGTH:index]
        exact = pi[index:index+len(self.pattern)]
        after = pi[index+len(self.pattern) + 1 :index+len(self.pattern) + 1 + AFTER_PATTERN_LENGTH]

        return f'{before},{exact},{after},{index}'
        

/**
 * Copyright 2018-2025 CREATOR Team.
 *
 * This file is part of CREATOR.
 *
 * CREATOR is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * CREATOR is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with CREATOR.  If not, see <http://www.gnu.org/licenses/>.
 */

import { assembleCreatorBase } from "../creatorAssemblerBase.mjs";
import type { AssembleResult } from "../../assembler.mts";

import { ArchitectureJS, DataCategoryJS } from "./wasm/creator_assembler.js";

/**
 * Deno-specific assembly compiler that uses ANSI color configuration
 * WASM is automatically initialized in Deno version
 * @param code Assembly code to compile
 * @param library Whether this is a library compilation
 * @returns Assemble result
 */
export function assembleCreator(
    code: string,
    library: boolean,
): AssembleResult {
    // Prepare WASM modules for the base compiler
    const wasmModules = {
        ArchitectureJS,
        DataCategoryJS,
    };

    // Call the common base implementation
    return assembleCreatorBase(code, library, wasmModules);
}

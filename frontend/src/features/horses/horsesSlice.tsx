import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";

export interface Horse {
  readonly id: string;
  readonly breed: string;
  readonly name: string;
  readonly gender: string;
  readonly dob: string;
  readonly sireId: string;
  readonly damId: string;
  readonly color: string;
  readonly height: string;
  readonly discpline: string;
  readonly owner: string;
  readonly ownerEmail: string;
  readonly breeder: string;
  readonly breederName: string;
  readonly breederEmail: string;
  readonly location: string;
  readonly regCode: string;
  readonly createdDate: string;
  readonly personality: string;
  //readonly images: { img: string };
}

export interface HorsesState {
  readonly horses: Horse[];
  readonly errorMessage: null | string;
}

const initialState: HorsesState = {
  horses: [],
  errorMessage: null,
};

export const createHorse = createAsyncThunk<
  Horse,
  {
    readonly breed: string;
    readonly name: string;
    readonly gender: string;
    readonly dob: string;
    readonly sireId: string;
    readonly damId: string;
    readonly color: string;
    readonly height: string;
    readonly discpline: string;
    readonly owner: string;
    readonly ownerEmail: string;
    readonly breeder: string;
    readonly breederName: string;
    readonly breederEmail: string;
    readonly location: string;
    readonly regCode: string;
    readonly createdDate: string;
    readonly personality: string;
    //readonly images: { img: string };
  },
  {
    readonly rejectValue: {
      readonly errorMessage: string;
      readonly horse: Horse;
    };
  }
>(
  "horses/create",

  async (arg, thunkAPI) => {
    const horse: Horse = {
      id: Date.now().toString(),
      breed: arg.breed,
      name: arg.name,
      gender: arg.gender,
      dob: arg.dob,
      sireId: arg.sireId,
      damId: arg.damId,
      color: arg.color,
      height: arg.height,
      discpline: arg.discpline,
      owner: arg.owner,
      ownerEmail: arg.ownerEmail,
      breeder: arg.breeder,
      breederName: arg.breederName,
      breederEmail: arg.breederEmail,
      location: arg.location,
      regCode: arg.regCode,
      personality: arg.personality,
      createdDate: arg.createdDate,
      //images: arg.images,
    };
    return await fetch("/api/horse/add/", {
      method: "POST",
      body: JSON.stringify(horse),
    })
      .then((response) => {
        if (response.status === 201) {
          return horse;
        } else {
          throw new Error(
            `Unexpected response from server (code ${response.status}).`
          );
        }
      })

      .catch(function (error) {
        console.error(error);
        return thunkAPI.rejectWithValue({ errorMessage: error.message, horse });
      });
  }
);

export const fetchHorses = createAsyncThunk<
  Horse[],
  void,
  { readonly rejectValue: { readonly errorMessage: string } }
>("horses/fetch", async (arg, thunkAPI) => {
  return await fetch("/api/horses/", {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(
          `Unexpected response from server (code ${response.status}).`
        );
      }
    })

    .catch(function (error) {
      console.error(error);
      return thunkAPI.rejectWithValue({ errorMessage: error.message });
    });
});


export const fetchHorse = createAsyncThunk<
  Horse[],
  { readonly horseId: any },
  { readonly rejectValue: { readonly errorMessage: string } }
>("horse/fetch", async (arg, thunkAPI) => {
  return await fetch("/api/horse?id=" + arg.horseId, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(
          `Unexpected response from server (code ${response.status}).`
        );
      }
    })

    .catch(function (error) {
      console.error(error);
      return thunkAPI.rejectWithValue({ errorMessage: error.message });
    });
});

/*
export const fetchHorse = createAsyncThunk<
  Horse[],
  void,
  { readonly rejectValue: { readonly errorMessage: string } }
>("horse/fetch", async (arg, thunkAPI) => {

  const params = useParams();

  console.log("id: " + params.horseId);

  return await fetch("/api/horse/", {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(
          `Unexpected response from server (code ${response.status}).`
        );
      }
    })

    .catch(function (error) {
      console.error(error);
      return thunkAPI.rejectWithValue({ errorMessage: error.message });
    });
});
*/

export const horsesSlice = createSlice({
  name: "horses",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(createHorse.fulfilled, (state, action) => {
      state.horses.unshift(action.payload);
      state.errorMessage = null;
    });

    builder.addCase(createHorse.rejected, (state, action) => {
      if (action.payload !== undefined) {
        state.horses.unshift(action.payload.horse);
        state.errorMessage = action.payload.errorMessage;
      }
    });

    builder.addCase(fetchHorses.fulfilled, (state, action) => {
      state.horses = action.payload;
    });

    builder.addCase(fetchHorses.rejected, (state, action) => {
      if (action.payload !== undefined) {
        state.errorMessage = action.payload.errorMessage;
      }
    });

    builder.addCase(fetchHorse.fulfilled, (state, action) => {
      state.horses = action.payload;
    });

    builder.addCase(fetchHorse.rejected, (state, action) => {
      if (action.payload !== undefined) {
        state.errorMessage = action.payload.errorMessage;
      }
    });
  },
});

export default horsesSlice.reducer;

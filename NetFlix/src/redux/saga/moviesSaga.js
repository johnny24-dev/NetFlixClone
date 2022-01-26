import { takeLatest, call, put, select, } from "redux-saga/effects";
import { showAlert, TYPE } from '../../components/Alert'
import { getData, storeData } from "../../utils/asynstorage";
import KEY_ASYNStORAGE from "../../utils/Constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TYPES,ACTIONS} from '../action/moviesAction'
import { navigate, navigateReplace } from "../../navbar/rootNavigation";
import {getLatestMovie,getListMovieTrending,getListMovieUpComing,getListPopilarMovie,getMovieCategory,getMovieDetail} from '../../api/Request'

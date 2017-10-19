/**
 * Created by easterCat on 2017/10/19.
 */
import axios from 'axios';
import $ from 'jquery';
import config from '../../app.config';

export function get(url, type) {
    return dispatch => {
        return $.ajax({
            type: 'GET',
            url: url,
            success: function (msg) {
                dispatch({
                    type: type,
                    payload: msg
                });
            }
        })
    }
}

export function post(url, data, type) {
    return dispatch => {
        return $.ajax({
            type: 'POST',
            url: url,
            data: data,
            success: function (msg) {
                dispatch({
                    type: type,
                    payload: msg
                });
            }
        })
    }
}

export function remove(url, type) {
    return dispatch => {
        return $.ajax({
            type: 'delete',
            url: url,
            success: function (msg) {
                dispatch({
                    type: type,
                    payload: msg
                });
            }
        })
    }
}

export function update(url, data, type) {
    return dispatch => {
        return $.ajax({
            type: 'put',
            url: url,
            data: data,
            success: function (msg) {
                dispatch({
                    type: type,
                    payload: msg
                });
            }
        })
    }
}
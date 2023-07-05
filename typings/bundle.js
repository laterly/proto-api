/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const cloudcats = $root.cloudcats = (() => {

    /**
     * Namespace cloudcats.
     * @exports cloudcats
     * @namespace
     */
    const cloudcats = {};

    cloudcats.Worker = (function() {

        /**
         * Constructs a new Worker service.
         * @memberof cloudcats
         * @classdesc Represents a Worker
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Worker(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Worker.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Worker;

        /**
         * Creates new Worker service using the specified rpc implementation.
         * @function create
         * @memberof cloudcats.Worker
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Worker} RPC service. Useful where requests and/or responses are streamed.
         */
        Worker.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link cloudcats.Worker#analyze}.
         * @memberof cloudcats.Worker
         * @typedef AnalyzeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {cloudcats.AnalyzeResponse} [response] AnalyzeResponse
         */

        /**
         * Calls Analyze.
         * @function analyze
         * @memberof cloudcats.Worker
         * @instance
         * @param {cloudcats.IAnalyzeRequest} request AnalyzeRequest message or plain object
         * @param {cloudcats.Worker.AnalyzeCallback} callback Node-style callback called with the error, if any, and AnalyzeResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Worker.prototype.analyze = function analyze(request, callback) {
            return this.rpcCall(analyze, $root.cloudcats.AnalyzeRequest, $root.cloudcats.AnalyzeResponse, request, callback);
        }, "name", { value: "Analyze" });

        /**
         * Calls Analyze.
         * @function analyze
         * @memberof cloudcats.Worker
         * @instance
         * @param {cloudcats.IAnalyzeRequest} request AnalyzeRequest message or plain object
         * @returns {Promise<cloudcats.AnalyzeResponse>} Promise
         * @variation 2
         */

        return Worker;
    })();

    cloudcats.AnalyzeRequest = (function() {

        /**
         * Properties of an AnalyzeRequest.
         * @memberof cloudcats
         * @interface IAnalyzeRequest
         */

        /**
         * Constructs a new AnalyzeRequest.
         * @memberof cloudcats
         * @classdesc Represents an AnalyzeRequest.
         * @implements IAnalyzeRequest
         * @constructor
         * @param {cloudcats.IAnalyzeRequest=} [properties] Properties to set
         */
        function AnalyzeRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new AnalyzeRequest instance using the specified properties.
         * @function create
         * @memberof cloudcats.AnalyzeRequest
         * @static
         * @param {cloudcats.IAnalyzeRequest=} [properties] Properties to set
         * @returns {cloudcats.AnalyzeRequest} AnalyzeRequest instance
         */
        AnalyzeRequest.create = function create(properties) {
            return new AnalyzeRequest(properties);
        };

        /**
         * Encodes the specified AnalyzeRequest message. Does not implicitly {@link cloudcats.AnalyzeRequest.verify|verify} messages.
         * @function encode
         * @memberof cloudcats.AnalyzeRequest
         * @static
         * @param {cloudcats.IAnalyzeRequest} message AnalyzeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnalyzeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified AnalyzeRequest message, length delimited. Does not implicitly {@link cloudcats.AnalyzeRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cloudcats.AnalyzeRequest
         * @static
         * @param {cloudcats.IAnalyzeRequest} message AnalyzeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnalyzeRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnalyzeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof cloudcats.AnalyzeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cloudcats.AnalyzeRequest} AnalyzeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnalyzeRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cloudcats.AnalyzeRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AnalyzeRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cloudcats.AnalyzeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cloudcats.AnalyzeRequest} AnalyzeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnalyzeRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnalyzeRequest message.
         * @function verify
         * @memberof cloudcats.AnalyzeRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnalyzeRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an AnalyzeRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cloudcats.AnalyzeRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cloudcats.AnalyzeRequest} AnalyzeRequest
         */
        AnalyzeRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.cloudcats.AnalyzeRequest)
                return object;
            return new $root.cloudcats.AnalyzeRequest();
        };

        /**
         * Creates a plain object from an AnalyzeRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cloudcats.AnalyzeRequest
         * @static
         * @param {cloudcats.AnalyzeRequest} message AnalyzeRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnalyzeRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this AnalyzeRequest to JSON.
         * @function toJSON
         * @memberof cloudcats.AnalyzeRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnalyzeRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AnalyzeRequest
         * @function getTypeUrl
         * @memberof cloudcats.AnalyzeRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AnalyzeRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cloudcats.AnalyzeRequest";
        };

        return AnalyzeRequest;
    })();

    cloudcats.AnalyzeResponse = (function() {

        /**
         * Properties of an AnalyzeResponse.
         * @memberof cloudcats
         * @interface IAnalyzeResponse
         * @property {string} url AnalyzeResponse url
         * @property {cloudcats.AnalyzeResponse.PostType} type AnalyzeResponse type
         */

        /**
         * Constructs a new AnalyzeResponse.
         * @memberof cloudcats
         * @classdesc Represents an AnalyzeResponse.
         * @implements IAnalyzeResponse
         * @constructor
         * @param {cloudcats.IAnalyzeResponse=} [properties] Properties to set
         */
        function AnalyzeResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AnalyzeResponse url.
         * @member {string} url
         * @memberof cloudcats.AnalyzeResponse
         * @instance
         */
        AnalyzeResponse.prototype.url = "";

        /**
         * AnalyzeResponse type.
         * @member {cloudcats.AnalyzeResponse.PostType} type
         * @memberof cloudcats.AnalyzeResponse
         * @instance
         */
        AnalyzeResponse.prototype.type = 0;

        /**
         * Creates a new AnalyzeResponse instance using the specified properties.
         * @function create
         * @memberof cloudcats.AnalyzeResponse
         * @static
         * @param {cloudcats.IAnalyzeResponse=} [properties] Properties to set
         * @returns {cloudcats.AnalyzeResponse} AnalyzeResponse instance
         */
        AnalyzeResponse.create = function create(properties) {
            return new AnalyzeResponse(properties);
        };

        /**
         * Encodes the specified AnalyzeResponse message. Does not implicitly {@link cloudcats.AnalyzeResponse.verify|verify} messages.
         * @function encode
         * @memberof cloudcats.AnalyzeResponse
         * @static
         * @param {cloudcats.IAnalyzeResponse} message AnalyzeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnalyzeResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified AnalyzeResponse message, length delimited. Does not implicitly {@link cloudcats.AnalyzeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cloudcats.AnalyzeResponse
         * @static
         * @param {cloudcats.IAnalyzeResponse} message AnalyzeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnalyzeResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnalyzeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof cloudcats.AnalyzeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cloudcats.AnalyzeResponse} AnalyzeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnalyzeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cloudcats.AnalyzeResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.url = reader.string();
                        break;
                    }
                case 2: {
                        message.type = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("url"))
                throw $util.ProtocolError("missing required 'url'", { instance: message });
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Decodes an AnalyzeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cloudcats.AnalyzeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cloudcats.AnalyzeResponse} AnalyzeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnalyzeResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnalyzeResponse message.
         * @function verify
         * @memberof cloudcats.AnalyzeResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnalyzeResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.url))
                return "url: string expected";
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
            return null;
        };

        /**
         * Creates an AnalyzeResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cloudcats.AnalyzeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cloudcats.AnalyzeResponse} AnalyzeResponse
         */
        AnalyzeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.cloudcats.AnalyzeResponse)
                return object;
            let message = new $root.cloudcats.AnalyzeResponse();
            if (object.url != null)
                message.url = String(object.url);
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "CAT":
            case 0:
                message.type = 0;
                break;
            case "DOG":
            case 1:
                message.type = 1;
                break;
            case "NEITHER":
            case 2:
                message.type = 2;
                break;
            case "BOTH":
            case 3:
                message.type = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from an AnalyzeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cloudcats.AnalyzeResponse
         * @static
         * @param {cloudcats.AnalyzeResponse} message AnalyzeResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnalyzeResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.url = "";
                object.type = options.enums === String ? "CAT" : 0;
            }
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.cloudcats.AnalyzeResponse.PostType[message.type] === undefined ? message.type : $root.cloudcats.AnalyzeResponse.PostType[message.type] : message.type;
            return object;
        };

        /**
         * Converts this AnalyzeResponse to JSON.
         * @function toJSON
         * @memberof cloudcats.AnalyzeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnalyzeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AnalyzeResponse
         * @function getTypeUrl
         * @memberof cloudcats.AnalyzeResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AnalyzeResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cloudcats.AnalyzeResponse";
        };

        /**
         * PostType enum.
         * @name cloudcats.AnalyzeResponse.PostType
         * @enum {number}
         * @property {number} CAT=0 CAT value
         * @property {number} DOG=1 DOG value
         * @property {number} NEITHER=2 NEITHER value
         * @property {number} BOTH=3 BOTH value
         */
        AnalyzeResponse.PostType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CAT"] = 0;
            values[valuesById[1] = "DOG"] = 1;
            values[valuesById[2] = "NEITHER"] = 2;
            values[valuesById[3] = "BOTH"] = 3;
            return values;
        })();

        return AnalyzeResponse;
    })();

    return cloudcats;
})();

export { $root as default };

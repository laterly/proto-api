import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace cloudcats. */
export namespace cloudcats {

    /** Represents a Worker */
    class Worker extends $protobuf.rpc.Service {

        /**
         * Constructs a new Worker service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Worker service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Worker;

        /**
         * Calls Analyze.
         * @param request AnalyzeRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and AnalyzeResponse
         */
        public analyze(request: cloudcats.IAnalyzeRequest, callback: cloudcats.Worker.AnalyzeCallback): void;

        /**
         * Calls Analyze.
         * @param request AnalyzeRequest message or plain object
         * @returns Promise
         */
        public analyze(request: cloudcats.IAnalyzeRequest): Promise<cloudcats.AnalyzeResponse>;
    }

    namespace Worker {

        /**
         * Callback as used by {@link cloudcats.Worker#analyze}.
         * @param error Error, if any
         * @param [response] AnalyzeResponse
         */
        type AnalyzeCallback = (error: (Error|null), response?: cloudcats.AnalyzeResponse) => void;
    }

    /** Properties of an AnalyzeRequest. */
    interface IAnalyzeRequest {
    }

    /** Represents an AnalyzeRequest. */
    class AnalyzeRequest implements IAnalyzeRequest {

        /**
         * Constructs a new AnalyzeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: cloudcats.IAnalyzeRequest);

        /**
         * Creates a new AnalyzeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnalyzeRequest instance
         */
        public static create(properties?: cloudcats.IAnalyzeRequest): cloudcats.AnalyzeRequest;

        /**
         * Encodes the specified AnalyzeRequest message. Does not implicitly {@link cloudcats.AnalyzeRequest.verify|verify} messages.
         * @param message AnalyzeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cloudcats.IAnalyzeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnalyzeRequest message, length delimited. Does not implicitly {@link cloudcats.AnalyzeRequest.verify|verify} messages.
         * @param message AnalyzeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cloudcats.IAnalyzeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnalyzeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnalyzeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cloudcats.AnalyzeRequest;

        /**
         * Decodes an AnalyzeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnalyzeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cloudcats.AnalyzeRequest;

        /**
         * Verifies an AnalyzeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnalyzeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnalyzeRequest
         */
        public static fromObject(object: { [k: string]: any }): cloudcats.AnalyzeRequest;

        /**
         * Creates a plain object from an AnalyzeRequest message. Also converts values to other types if specified.
         * @param message AnalyzeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cloudcats.AnalyzeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnalyzeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AnalyzeRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AnalyzeResponse. */
    interface IAnalyzeResponse {

        /** AnalyzeResponse url */
        url: string;

        /** AnalyzeResponse type */
        type: cloudcats.AnalyzeResponse.PostType;
    }

    /** Represents an AnalyzeResponse. */
    class AnalyzeResponse implements IAnalyzeResponse {

        /**
         * Constructs a new AnalyzeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: cloudcats.IAnalyzeResponse);

        /** AnalyzeResponse url. */
        public url: string;

        /** AnalyzeResponse type. */
        public type: cloudcats.AnalyzeResponse.PostType;

        /**
         * Creates a new AnalyzeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnalyzeResponse instance
         */
        public static create(properties?: cloudcats.IAnalyzeResponse): cloudcats.AnalyzeResponse;

        /**
         * Encodes the specified AnalyzeResponse message. Does not implicitly {@link cloudcats.AnalyzeResponse.verify|verify} messages.
         * @param message AnalyzeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cloudcats.IAnalyzeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnalyzeResponse message, length delimited. Does not implicitly {@link cloudcats.AnalyzeResponse.verify|verify} messages.
         * @param message AnalyzeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cloudcats.IAnalyzeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnalyzeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnalyzeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cloudcats.AnalyzeResponse;

        /**
         * Decodes an AnalyzeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnalyzeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cloudcats.AnalyzeResponse;

        /**
         * Verifies an AnalyzeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnalyzeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnalyzeResponse
         */
        public static fromObject(object: { [k: string]: any }): cloudcats.AnalyzeResponse;

        /**
         * Creates a plain object from an AnalyzeResponse message. Also converts values to other types if specified.
         * @param message AnalyzeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cloudcats.AnalyzeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnalyzeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AnalyzeResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AnalyzeResponse {

        /** PostType enum. */
        enum PostType {
            CAT = 0,
            DOG = 1,
            NEITHER = 2,
            BOTH = 3
        }
    }
}

// https://www.redditstatic.com/desktop2x/vendors~dashjs.ea4a5615e62a98ef98b2.js
// Retrieved at 3/3/2020, 12:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~dashjs"], {
		"./node_modules/codem-isoboxer/dist/iso_boxer.js": function(e, t, r) {
			var n = {
				parseBuffer: function(e) {
					return new s(e).parse()
				},
				addBoxProcessor: function(e, t) {
					"string" == typeof e && "function" == typeof t && (i.prototype._boxProcessors[e] = t)
				},
				createFile: function() {
					return new s
				},
				createBox: function(e, t, r) {
					var n = i.create(e);
					return t && t.append(n, r), n
				},
				createFullBox: function(e, t, r) {
					var s = n.createBox(e, t, r);
					return s.version = 0, s.flags = 0, s
				},
				Utils: {}
			};
			n.Utils.dataViewToString = function(e, t) {
				var r = t || "utf-8";
				if ("undefined" != typeof TextDecoder) return new TextDecoder(r).decode(e);
				var n = [],
					s = 0;
				if ("utf-8" === r)
					for (; s < e.byteLength;) {
						var i = e.getUint8(s++);
						i < 128 || (i < 224 ? (i = (31 & i) << 6, i |= 63 & e.getUint8(s++)) : i < 240 ? (i = (15 & i) << 12, i |= (63 & e.getUint8(s++)) << 6, i |= 63 & e.getUint8(s++)) : (i = (7 & i) << 18, i |= (63 & e.getUint8(s++)) << 12, i |= (63 & e.getUint8(s++)) << 6, i |= 63 & e.getUint8(s++))), n.push(String.fromCharCode(i))
					} else
						for (; s < e.byteLength;) n.push(String.fromCharCode(e.getUint8(s++)));
				return n.join("")
			}, n.Utils.utf8ToByteArray = function(e) {
				var t, r;
				if ("undefined" != typeof TextEncoder) t = (new TextEncoder).encode(e);
				else
					for (t = [], r = 0; r < e.length; ++r) {
						var n = e.charCodeAt(r);
						n < 128 ? t.push(n) : n < 2048 ? (t.push(192 | n >> 6), t.push(128 | 63 & n)) : n < 65536 ? (t.push(224 | n >> 12), t.push(128 | 63 & n >> 6), t.push(128 | 63 & n)) : (t.push(240 | n >> 18), t.push(128 | 63 & n >> 12), t.push(128 | 63 & n >> 6), t.push(128 | 63 & n))
					}
				return t
			}, n.Utils.appendBox = function(e, t, r) {
				if (t._offset = e._cursor.offset, t._root = e._root ? e._root : e, t._raw = e._raw, t._parent = e, -1 !== r)
					if (null != r) {
						var n, s = -1;
						if ("number" == typeof r) s = r;
						else {
							if ("string" == typeof r) n = r;
							else {
								if ("object" != typeof r || !r.type) return void e.boxes.push(t);
								n = r.type
							}
							for (var i = 0; i < e.boxes.length; i++)
								if (n === e.boxes[i].type) {
									s = i + 1;
									break
								}
						}
						e.boxes.splice(s, 0, t)
					} else e.boxes.push(t)
			}, t.parseBuffer = n.parseBuffer, t.addBoxProcessor = n.addBoxProcessor, t.createFile = n.createFile, t.createBox = n.createBox, t.createFullBox = n.createFullBox, t.Utils = n.Utils, n.Cursor = function(e) {
				this.offset = void 0 === e ? 0 : e
			};
			var s = function(e) {
				this._cursor = new n.Cursor, this.boxes = [], e && (this._raw = new DataView(e))
			};
			s.prototype.fetch = function(e) {
				var t = this.fetchAll(e, !0);
				return t.length ? t[0] : null
			}, s.prototype.fetchAll = function(e, t) {
				var r = [];
				return s._sweep.call(this, e, r, t), r
			}, s.prototype.parse = function() {
				for (this._cursor.offset = 0, this.boxes = []; this._cursor.offset < this._raw.byteLength;) {
					var e = i.parse(this);
					if (void 0 === e.type) break;
					this.boxes.push(e)
				}
				return this
			}, s._sweep = function(e, t, r) {
				for (var n in this.type && this.type == e && t.push(this), this.boxes) {
					if (t.length && r) return;
					s._sweep.call(this.boxes[n], e, t, r)
				}
			}, s.prototype.write = function() {
				var e, t = 0;
				for (e = 0; e < this.boxes.length; e++) t += this.boxes[e].getLength(!1);
				var r = new Uint8Array(t);
				for (this._rawo = new DataView(r.buffer), this.bytes = r, this._cursor.offset = 0, e = 0; e < this.boxes.length; e++) this.boxes[e].write();
				return r.buffer
			}, s.prototype.append = function(e, t) {
				n.Utils.appendBox(this, e, t)
			};
			var i = function() {
				this._cursor = new n.Cursor
			};
			i.parse = function(e) {
				var t = new i;
				return t._offset = e._cursor.offset, t._root = e._root ? e._root : e, t._raw = e._raw, t._parent = e, t._parseBox(), e._cursor.offset = t._raw.byteOffset + t._raw.byteLength, t
			}, i.create = function(e) {
				var t = new i;
				return t.type = e, t.boxes = [], t
			}, i.prototype._boxContainers = ["dinf", "edts", "mdia", "meco", "mfra", "minf", "moof", "moov", "mvex", "stbl", "strk", "traf", "trak", "tref", "udta", "vttc", "sinf", "schi", "encv", "enca"], i.prototype._boxProcessors = {}, i.prototype._procField = function(e, t, r) {
				this._parsing ? this[e] = this._readField(t, r) : this._writeField(t, r, this[e])
			}, i.prototype._procFieldArray = function(e, t, r, n) {
				var s;
				if (this._parsing)
					for (this[e] = [], s = 0; s < t; s++) this[e][s] = this._readField(r, n);
				else
					for (s = 0; s < this[e].length; s++) this._writeField(r, n, this[e][s])
			}, i.prototype._procFullBox = function() {
				this._procField("version", "uint", 8), this._procField("flags", "uint", 24)
			}, i.prototype._procEntries = function(e, t, r) {
				var n;
				if (this._parsing)
					for (this[e] = [], n = 0; n < t; n++) this[e].push({}), r.call(this, this[e][n]);
				else
					for (n = 0; n < t; n++) r.call(this, this[e][n])
			}, i.prototype._procSubEntries = function(e, t, r, n) {
				var s;
				if (this._parsing)
					for (e[t] = [], s = 0; s < r; s++) e[t].push({}), n.call(this, e[t][s]);
				else
					for (s = 0; s < r; s++) n.call(this, e[t][s])
			}, i.prototype._procEntryField = function(e, t, r, n) {
				this._parsing ? e[t] = this._readField(r, n) : this._writeField(r, n, e[t])
			}, i.prototype._procSubBoxes = function(e, t) {
				var r;
				if (this._parsing)
					for (this[e] = [], r = 0; r < t; r++) this[e].push(i.parse(this));
				else
					for (r = 0; r < t; r++) this._rawo ? this[e][r].write() : this.size += this[e][r].getLength()
			}, i.prototype._readField = function(e, t) {
				switch (e) {
					case "uint":
						return this._readUint(t);
					case "int":
						return this._readInt(t);
					case "template":
						return this._readTemplate(t);
					case "string":
						return -1 === t ? this._readTerminatedString() : this._readString(t);
					case "data":
						return this._readData(t);
					case "utf8":
						return this._readUTF8String();
					default:
						return -1
				}
			}, i.prototype._readInt = function(e) {
				var t = null,
					r = this._cursor.offset - this._raw.byteOffset;
				switch (e) {
					case 8:
						t = this._raw.getInt8(r);
						break;
					case 16:
						t = this._raw.getInt16(r);
						break;
					case 32:
						t = this._raw.getInt32(r);
						break;
					case 64:
						var n = this._raw.getInt32(r),
							s = this._raw.getInt32(r + 4);
						t = n * Math.pow(2, 32) + s
				}
				return this._cursor.offset += e >> 3, t
			}, i.prototype._readUint = function(e) {
				var t, r, n = null,
					s = this._cursor.offset - this._raw.byteOffset;
				switch (e) {
					case 8:
						n = this._raw.getUint8(s);
						break;
					case 16:
						n = this._raw.getUint16(s);
						break;
					case 24:
						n = ((t = this._raw.getUint16(s)) << 8) + (r = this._raw.getUint8(s + 2));
						break;
					case 32:
						n = this._raw.getUint32(s);
						break;
					case 64:
						t = this._raw.getUint32(s), r = this._raw.getUint32(s + 4), n = t * Math.pow(2, 32) + r
				}
				return this._cursor.offset += e >> 3, n
			}, i.prototype._readString = function(e) {
				for (var t = "", r = 0; r < e; r++) {
					var n = this._readUint(8);
					t += String.fromCharCode(n)
				}
				return t
			}, i.prototype._readTemplate = function(e) {
				return this._readUint(e / 2) + this._readUint(e / 2) / Math.pow(2, e / 2)
			}, i.prototype._readTerminatedString = function() {
				for (var e = ""; this._cursor.offset - this._offset < this._raw.byteLength;) {
					var t = this._readUint(8);
					if (0 === t) break;
					e += String.fromCharCode(t)
				}
				return e
			}, i.prototype._readData = function(e) {
				var t = e > 0 ? e : this._raw.byteLength - (this._cursor.offset - this._offset);
				if (t > 0) {
					var r = new Uint8Array(this._raw.buffer, this._cursor.offset, t);
					return this._cursor.offset += t, r
				}
				return null
			}, i.prototype._readUTF8String = function() {
				var e = this._raw.byteLength - (this._cursor.offset - this._offset),
					t = null;
				return e > 0 && (t = new DataView(this._raw.buffer, this._cursor.offset, e), this._cursor.offset += e), t ? n.Utils.dataViewToString(t) : t
			}, i.prototype._parseBox = function() {
				if (this._parsing = !0, this._cursor.offset = this._offset, this._offset + 8 > this._raw.buffer.byteLength) this._root._incomplete = !0;
				else {
					switch (this._procField("size", "uint", 32), this._procField("type", "string", 4), 1 === this.size && this._procField("largesize", "uint", 64), "uuid" === this.type && this._procFieldArray("usertype", 16, "uint", 8), this.size) {
						case 0:
							this._raw = new DataView(this._raw.buffer, this._offset, this._raw.byteLength - this._cursor.offset + 8);
							break;
						case 1:
							this._offset + this.size > this._raw.buffer.byteLength ? (this._incomplete = !0, this._root._incomplete = !0) : this._raw = new DataView(this._raw.buffer, this._offset, this.largesize);
							break;
						default:
							this._offset + this.size > this._raw.buffer.byteLength ? (this._incomplete = !0, this._root._incomplete = !0) : this._raw = new DataView(this._raw.buffer, this._offset, this.size)
					}
					this._incomplete || (this._boxProcessors[this.type] && this._boxProcessors[this.type].call(this), -1 !== this._boxContainers.indexOf(this.type) ? this._parseContainerBox() : this._data = this._readData())
				}
			}, i.prototype._parseFullBox = function() {
				this.version = this._readUint(8), this.flags = this._readUint(24)
			}, i.prototype._parseContainerBox = function() {
				for (this.boxes = []; this._cursor.offset - this._raw.byteOffset < this._raw.byteLength;) this.boxes.push(i.parse(this))
			}, i.prototype.append = function(e, t) {
				n.Utils.appendBox(this, e, t)
			}, i.prototype.getLength = function() {
				if (this._parsing = !1, this._rawo = null, this.size = 0, this._procField("size", "uint", 32), this._procField("type", "string", 4), 1 === this.size && this._procField("largesize", "uint", 64), "uuid" === this.type && this._procFieldArray("usertype", 16, "uint", 8), this._boxProcessors[this.type] && this._boxProcessors[this.type].call(this), -1 !== this._boxContainers.indexOf(this.type))
					for (var e = 0; e < this.boxes.length; e++) this.size += this.boxes[e].getLength();
				return this._data && this._writeData(this._data), this.size
			}, i.prototype.write = function() {
				switch (this._parsing = !1, this._cursor.offset = this._parent._cursor.offset, this.size) {
					case 0:
						this._rawo = new DataView(this._parent._rawo.buffer, this._cursor.offset, this.parent._rawo.byteLength - this._cursor.offset);
						break;
					case 1:
						this._rawo = new DataView(this._parent._rawo.buffer, this._cursor.offset, this.largesize);
						break;
					default:
						this._rawo = new DataView(this._parent._rawo.buffer, this._cursor.offset, this.size)
				}
				if (this._procField("size", "uint", 32), this._procField("type", "string", 4), 1 === this.size && this._procField("largesize", "uint", 64), "uuid" === this.type && this._procFieldArray("usertype", 16, "uint", 8), this._boxProcessors[this.type] && this._boxProcessors[this.type].call(this), -1 !== this._boxContainers.indexOf(this.type))
					for (var e = 0; e < this.boxes.length; e++) this.boxes[e].write();
				return this._data && this._writeData(this._data), this._parent._cursor.offset += this.size, this.size
			}, i.prototype._writeInt = function(e, t) {
				if (this._rawo) {
					var r = this._cursor.offset - this._rawo.byteOffset;
					switch (e) {
						case 8:
							this._rawo.setInt8(r, t);
							break;
						case 16:
							this._rawo.setInt16(r, t);
							break;
						case 32:
							this._rawo.setInt32(r, t);
							break;
						case 64:
							var n = Math.floor(t / Math.pow(2, 32)),
								s = t - n * Math.pow(2, 32);
							this._rawo.setUint32(r, n), this._rawo.setUint32(r + 4, s)
					}
					this._cursor.offset += e >> 3
				} else this.size += e >> 3
			}, i.prototype._writeUint = function(e, t) {
				if (this._rawo) {
					var r, n, s = this._cursor.offset - this._rawo.byteOffset;
					switch (e) {
						case 8:
							this._rawo.setUint8(s, t);
							break;
						case 16:
							this._rawo.setUint16(s, t);
							break;
						case 24:
							r = (16776960 & t) >> 8, n = 255 & t, this._rawo.setUint16(s, r), this._rawo.setUint8(s + 2, n);
							break;
						case 32:
							this._rawo.setUint32(s, t);
							break;
						case 64:
							n = t - (r = Math.floor(t / Math.pow(2, 32))) * Math.pow(2, 32), this._rawo.setUint32(s, r), this._rawo.setUint32(s + 4, n)
					}
					this._cursor.offset += e >> 3
				} else this.size += e >> 3
			}, i.prototype._writeString = function(e, t) {
				for (var r = 0; r < e; r++) this._writeUint(8, t.charCodeAt(r))
			}, i.prototype._writeTerminatedString = function(e) {
				if (0 !== e.length) {
					for (var t = 0; t < e.length; t++) this._writeUint(8, e.charCodeAt(t));
					this._writeUint(8, 0)
				}
			}, i.prototype._writeTemplate = function(e, t) {
				var r = Math.floor(t),
					n = (t - r) * Math.pow(2, e / 2);
				this._writeUint(e / 2, r), this._writeUint(e / 2, n)
			}, i.prototype._writeData = function(e) {
				if (e)
					if (this._rawo) {
						if (e instanceof Array) {
							for (var t = this._cursor.offset - this._rawo.byteOffset, r = 0; r < e.length; r++) this._rawo.setInt8(t + r, e[r]);
							this._cursor.offset += e.length
						}
						e instanceof Uint8Array && (this._root.bytes.set(e, this._cursor.offset), this._cursor.offset += e.length)
					} else this.size += e.length
			}, i.prototype._writeUTF8String = function(e) {
				var t = n.Utils.utf8ToByteArray(e);
				if (this._rawo)
					for (var r = new DataView(this._rawo.buffer, this._cursor.offset, t.length), s = 0; s < t.length; s++) r.setUint8(s, t[s]);
				else this.size += t.length
			}, i.prototype._writeField = function(e, t, r) {
				switch (e) {
					case "uint":
						this._writeUint(t, r);
						break;
					case "int":
						this._writeInt(t, r);
						break;
					case "template":
						this._writeTemplate(t, r);
						break;
					case "string":
						-1 == t ? this._writeTerminatedString(r) : this._writeString(t, r);
						break;
					case "data":
						this._writeData(r);
						break;
					case "utf8":
						this._writeUTF8String(r)
				}
			}, i.prototype._boxProcessors.avc1 = i.prototype._boxProcessors.encv = function() {
				this._procFieldArray("reserved1", 6, "uint", 8), this._procField("data_reference_index", "uint", 16), this._procField("pre_defined1", "uint", 16), this._procField("reserved2", "uint", 16), this._procFieldArray("pre_defined2", 3, "uint", 32), this._procField("width", "uint", 16), this._procField("height", "uint", 16), this._procField("horizresolution", "template", 32), this._procField("vertresolution", "template", 32), this._procField("reserved3", "uint", 32), this._procField("frame_count", "uint", 16), this._procFieldArray("compressorname", 32, "uint", 8), this._procField("depth", "uint", 16), this._procField("pre_defined3", "int", 16), this._procField("config", "data", -1)
			}, i.prototype._boxProcessors.dref = function() {
				this._procFullBox(), this._procField("entry_count", "uint", 32), this._procSubBoxes("entries", this.entry_count)
			}, i.prototype._boxProcessors.elst = function() {
				this._procFullBox(), this._procField("entry_count", "uint", 32), this._procEntries("entries", this.entry_count, (function(e) {
					this._procEntryField(e, "segment_duration", "uint", 1 === this.version ? 64 : 32), this._procEntryField(e, "media_time", "int", 1 === this.version ? 64 : 32), this._procEntryField(e, "media_rate_integer", "int", 16), this._procEntryField(e, "media_rate_fraction", "int", 16)
				}))
			}, i.prototype._boxProcessors.emsg = function() {
				this._procFullBox(), this._procField("scheme_id_uri", "string", -1), this._procField("value", "string", -1), this._procField("timescale", "uint", 32), this._procField("presentation_time_delta", "uint", 32), this._procField("event_duration", "uint", 32), this._procField("id", "uint", 32), this._procField("message_data", "data", -1)
			}, i.prototype._boxProcessors.free = i.prototype._boxProcessors.skip = function() {
				this._procField("data", "data", -1)
			}, i.prototype._boxProcessors.frma = function() {
				this._procField("data_format", "uint", 32)
			}, i.prototype._boxProcessors.ftyp = i.prototype._boxProcessors.styp = function() {
				this._procField("major_brand", "string", 4), this._procField("minor_version", "uint", 32);
				var e = -1;
				this._parsing && (e = (this._raw.byteLength - (this._cursor.offset - this._raw.byteOffset)) / 4), this._procFieldArray("compatible_brands", e, "string", 4)
			}, i.prototype._boxProcessors.hdlr = function() {
				this._procFullBox(), this._procField("pre_defined", "uint", 32), this._procField("handler_type", "string", 4), this._procFieldArray("reserved", 3, "uint", 32), this._procField("name", "string", -1)
			}, i.prototype._boxProcessors.mdat = function() {
				this._procField("data", "data", -1)
			}, i.prototype._boxProcessors.mdhd = function() {
				this._procFullBox(), this._procField("creation_time", "uint", 1 == this.version ? 64 : 32), this._procField("modification_time", "uint", 1 == this.version ? 64 : 32), this._procField("timescale", "uint", 32), this._procField("duration", "uint", 1 == this.version ? 64 : 32), this._parsing || "string" != typeof this.language || (this.language = this.language.charCodeAt(0) - 96 << 10 | this.language.charCodeAt(1) - 96 << 5 | this.language.charCodeAt(2) - 96), this._procField("language", "uint", 16), this._parsing && (this.language = String.fromCharCode(96 + (this.language >> 10 & 31), 96 + (this.language >> 5 & 31), 96 + (31 & this.language))), this._procField("pre_defined", "uint", 16)
			}, i.prototype._boxProcessors.mehd = function() {
				this._procFullBox(), this._procField("fragment_duration", "uint", 1 == this.version ? 64 : 32)
			}, i.prototype._boxProcessors.mfhd = function() {
				this._procFullBox(), this._procField("sequence_number", "uint", 32)
			}, i.prototype._boxProcessors.mfro = function() {
				this._procFullBox(), this._procField("mfra_size", "uint", 32)
			}, i.prototype._boxProcessors.mp4a = i.prototype._boxProcessors.enca = function() {
				this._procFieldArray("reserved1", 6, "uint", 8), this._procField("data_reference_index", "uint", 16), this._procFieldArray("reserved2", 2, "uint", 32), this._procField("channelcount", "uint", 16), this._procField("samplesize", "uint", 16), this._procField("pre_defined", "uint", 16), this._procField("reserved3", "uint", 16), this._procField("samplerate", "template", 32), this._procField("esds", "data", -1)
			}, i.prototype._boxProcessors.mvhd = function() {
				this._procFullBox(), this._procField("creation_time", "uint", 1 == this.version ? 64 : 32), this._procField("modification_time", "uint", 1 == this.version ? 64 : 32), this._procField("timescale", "uint", 32), this._procField("duration", "uint", 1 == this.version ? 64 : 32), this._procField("rate", "template", 32), this._procField("volume", "template", 16), this._procField("reserved1", "uint", 16), this._procFieldArray("reserved2", 2, "uint", 32), this._procFieldArray("matrix", 9, "template", 32), this._procFieldArray("pre_defined", 6, "uint", 32), this._procField("next_track_ID", "uint", 32)
			}, i.prototype._boxProcessors.payl = function() {
				this._procField("cue_text", "utf8")
			}, i.prototype._boxProcessors.pssh = function() {
				this._procFullBox(), this._procFieldArray("SystemID", 16, "uint", 8), this._procField("DataSize", "uint", 32), this._procFieldArray("Data", this.DataSize, "uint", 8)
			}, i.prototype._boxProcessors.schm = function() {
				this._procFullBox(), this._procField("scheme_type", "uint", 32), this._procField("scheme_version", "uint", 32), 1 & this.flags && this._procField("scheme_uri", "string", -1)
			}, i.prototype._boxProcessors.sdtp = function() {
				this._procFullBox();
				var e = -1;
				this._parsing && (e = this._raw.byteLength - (this._cursor.offset - this._raw.byteOffset)), this._procFieldArray("sample_dependency_table", e, "uint", 8)
			}, i.prototype._boxProcessors.sidx = function() {
				this._procFullBox(), this._procField("reference_ID", "uint", 32), this._procField("timescale", "uint", 32), this._procField("earliest_presentation_time", "uint", 1 == this.version ? 64 : 32), this._procField("first_offset", "uint", 1 == this.version ? 64 : 32), this._procField("reserved", "uint", 16), this._procField("reference_count", "uint", 16), this._procEntries("references", this.reference_count, (function(e) {
					this._parsing || (e.reference = (1 & e.reference_type) << 31, e.reference |= 2147483647 & e.referenced_size, e.sap = (1 & e.starts_with_SAP) << 31, e.sap |= (3 & e.SAP_type) << 28, e.sap |= 268435455 & e.SAP_delta_time), this._procEntryField(e, "reference", "uint", 32), this._procEntryField(e, "subsegment_duration", "uint", 32), this._procEntryField(e, "sap", "uint", 32), this._parsing && (e.reference_type = e.reference >> 31 & 1, e.referenced_size = 2147483647 & e.reference, e.starts_with_SAP = e.sap >> 31 & 1, e.SAP_type = e.sap >> 28 & 7, e.SAP_delta_time = 268435455 & e.sap)
				}))
			}, i.prototype._boxProcessors.smhd = function() {
				this._procFullBox(), this._procField("balance", "uint", 16), this._procField("reserved", "uint", 16)
			}, i.prototype._boxProcessors.ssix = function() {
				this._procFullBox(), this._procField("subsegment_count", "uint", 32), this._procEntries("subsegments", this.subsegment_count, (function(e) {
					this._procEntryField(e, "ranges_count", "uint", 32), this._procSubEntries(e, "ranges", e.ranges_count, (function(e) {
						this._procEntryField(e, "level", "uint", 8), this._procEntryField(e, "range_size", "uint", 24)
					}))
				}))
			}, i.prototype._boxProcessors.stsd = function() {
				this._procFullBox(), this._procField("entry_count", "uint", 32), this._procSubBoxes("entries", this.entry_count)
			}, i.prototype._boxProcessors.subs = function() {
				this._procFullBox(), this._procField("entry_count", "uint", 32), this._procEntries("entries", this.entry_count, (function(e) {
					this._procEntryField(e, "sample_delta", "uint", 32), this._procEntryField(e, "subsample_count", "uint", 16), this._procSubEntries(e, "subsamples", e.subsample_count, (function(e) {
						this._procEntryField(e, "subsample_size", "uint", 1 === this.version ? 32 : 16), this._procEntryField(e, "subsample_priority", "uint", 8), this._procEntryField(e, "discardable", "uint", 8), this._procEntryField(e, "codec_specific_parameters", "uint", 32)
					}))
				}))
			}, i.prototype._boxProcessors.tenc = function() {
				this._procFullBox(), this._procField("default_IsEncrypted", "uint", 24), this._procField("default_IV_size", "uint", 8), this._procFieldArray("default_KID", 16, "uint", 8)
			}, i.prototype._boxProcessors.tfdt = function() {
				this._procFullBox(), this._procField("baseMediaDecodeTime", "uint", 1 == this.version ? 64 : 32)
			}, i.prototype._boxProcessors.tfhd = function() {
				this._procFullBox(), this._procField("track_ID", "uint", 32), 1 & this.flags && this._procField("base_data_offset", "uint", 64), 2 & this.flags && this._procField("sample_description_offset", "uint", 32), 8 & this.flags && this._procField("default_sample_duration", "uint", 32), 16 & this.flags && this._procField("default_sample_size", "uint", 32), 32 & this.flags && this._procField("default_sample_flags", "uint", 32)
			}, i.prototype._boxProcessors.tfra = function() {
				this._procFullBox(), this._procField("track_ID", "uint", 32), this._parsing || (this.reserved = 0, this.reserved |= (48 & this.length_size_of_traf_num) << 4, this.reserved |= (12 & this.length_size_of_trun_num) << 2, this.reserved |= 3 & this.length_size_of_sample_num), this._procField("reserved", "uint", 32), this._parsing && (this.length_size_of_traf_num = (48 & this.reserved) >> 4, this.length_size_of_trun_num = (12 & this.reserved) >> 2, this.length_size_of_sample_num = 3 & this.reserved), this._procField("number_of_entry", "uint", 32), this._procEntries("entries", this.number_of_entry, (function(e) {
					this._procEntryField(e, "time", "uint", 1 === this.version ? 64 : 32), this._procEntryField(e, "moof_offset", "uint", 1 === this.version ? 64 : 32), this._procEntryField(e, "traf_number", "uint", 8 * (this.length_size_of_traf_num + 1)), this._procEntryField(e, "trun_number", "uint", 8 * (this.length_size_of_trun_num + 1)), this._procEntryField(e, "sample_number", "uint", 8 * (this.length_size_of_sample_num + 1))
				}))
			}, i.prototype._boxProcessors.tkhd = function() {
				this._procFullBox(), this._procField("creation_time", "uint", 1 == this.version ? 64 : 32), this._procField("modification_time", "uint", 1 == this.version ? 64 : 32), this._procField("track_ID", "uint", 32), this._procField("reserved1", "uint", 32), this._procField("duration", "uint", 1 == this.version ? 64 : 32), this._procFieldArray("reserved2", 2, "uint", 32), this._procField("layer", "uint", 16), this._procField("alternate_group", "uint", 16), this._procField("volume", "template", 16), this._procField("reserved3", "uint", 16), this._procFieldArray("matrix", 9, "template", 32), this._procField("width", "template", 32), this._procField("height", "template", 32)
			}, i.prototype._boxProcessors.trex = function() {
				this._procFullBox(), this._procField("track_ID", "uint", 32), this._procField("default_sample_description_index", "uint", 32), this._procField("default_sample_duration", "uint", 32), this._procField("default_sample_size", "uint", 32), this._procField("default_sample_flags", "uint", 32)
			}, i.prototype._boxProcessors.trun = function() {
				this._procFullBox(), this._procField("sample_count", "uint", 32), 1 & this.flags && this._procField("data_offset", "int", 32), 4 & this.flags && this._procField("first_sample_flags", "uint", 32), this._procEntries("samples", this.sample_count, (function(e) {
					256 & this.flags && this._procEntryField(e, "sample_duration", "uint", 32), 512 & this.flags && this._procEntryField(e, "sample_size", "uint", 32), 1024 & this.flags && this._procEntryField(e, "sample_flags", "uint", 32), 2048 & this.flags && this._procEntryField(e, "sample_composition_time_offset", 1 === this.version ? "int" : "uint", 32)
				}))
			}, i.prototype._boxProcessors["url "] = i.prototype._boxProcessors["urn "] = function() {
				this._procFullBox(), "urn " === this.type && this._procField("name", "string", -1), this._procField("location", "string", -1)
			}, i.prototype._boxProcessors.vlab = function() {
				this._procField("source_label", "utf8")
			}, i.prototype._boxProcessors.vmhd = function() {
				this._procFullBox(), this._procField("graphicsmode", "uint", 16), this._procFieldArray("opcolor", 3, "uint", 16)
			}, i.prototype._boxProcessors.vttC = function() {
				this._procField("config", "utf8")
			}, i.prototype._boxProcessors.vtte = function() {}
		},
		"./node_modules/dashjs/build/es5/externals/base64.js": function(e, t, r) {
			"use strict";
			var n, i, o, u, l, d = {
					encode: function(e) {
						for (var t = [], r = 0; r < e.length; ++r) {
							var n = e.charCodeAt(r);
							n < 128 ? t.push(n) : n < 2048 ? (t.push(192 | n >> 6), t.push(128 | 63 & n)) : n < 65536 ? (t.push(224 | n >> 12), t.push(128 | 63 & n >> 6), t.push(128 | 63 & n)) : (t.push(240 | n >> 18), t.push(128 | 63 & n >> 12), t.push(128 | 63 & n >> 6), t.push(128 | 63 & n))
						}
						return t
					},
					decode: function(e) {
						for (var t = [], r = 0; r < e.length;) {
							var n = e[r++];
							n < 128 || (n < 224 ? (n = (31 & n) << 6, n |= 63 & e[r++]) : n < 240 ? (n = (15 & n) << 12, n |= (63 & e[r++]) << 6, n |= 63 & e[r++]) : (n = (7 & n) << 18, n |= (63 & e[r++]) << 12, n |= (63 & e[r++]) << 6, n |= 63 & e[r++])), t.push(String.fromCharCode(n))
						}
						return t.join("")
					}
				},
				c = {};
			n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = function(e) {
				for (var t = 0, r = [], s = 0 | e.length / 3; 0 < s--;) {
					var i = (e[t] << 16) + (e[t + 1] << 8) + e[t + 2];
					t += 3, r.push(n.charAt(63 & i >> 18)), r.push(n.charAt(63 & i >> 12)), r.push(n.charAt(63 & i >> 6)), r.push(n.charAt(63 & i))
				}
				return 2 == e.length - t ? (i = (e[t] << 16) + (e[t + 1] << 8), r.push(n.charAt(63 & i >> 18)), r.push(n.charAt(63 & i >> 12)), r.push(n.charAt(63 & i >> 6)), r.push("=")) : 1 == e.length - t && (i = e[t] << 16, r.push(n.charAt(63 & i >> 18)), r.push(n.charAt(63 & i >> 12)), r.push("==")), r.join("")
			}, o = function() {
				for (var e = [], t = 0; t < n.length; ++t) e[n.charCodeAt(t)] = t;
				return e["=".charCodeAt(0)] = 0, e
			}(), u = function(e) {
				for (var t = 0, r = [], n = 0 | e.length / 4; 0 < n--;) {
					var s = (o[e.charCodeAt(t)] << 18) + (o[e.charCodeAt(t + 1)] << 12) + (o[e.charCodeAt(t + 2)] << 6) + o[e.charCodeAt(t + 3)];
					r.push(255 & s >> 16), r.push(255 & s >> 8), r.push(255 & s), t += 4
				}
				return r && ("=" == e.charAt(t - 2) ? (r.pop(), r.pop()) : "=" == e.charAt(t - 1) && r.pop()), r
			}, l = {
				encode: function(e) {
					for (var t = [], r = 0; r < e.length; ++r) t.push(e.charCodeAt(r));
					return t
				},
				decode: function(e) {
					for (var t = 0; t < s.length; ++t) a[t] = String.fromCharCode(a[t]);
					return a.join("")
				}
			}, c.decodeArray = function(e) {
				var t = u(e);
				return new Uint8Array(t)
			}, c.encodeASCII = function(e) {
				var t = l.encode(e);
				return i(t)
			}, c.decodeASCII = function(e) {
				var t = u(e);
				return l.decode(t)
			}, c.encode = function(e) {
				var t = d.encode(e);
				return i(t)
			}, c.decode = function(e) {
				var t = u(e);
				return d.decode(t)
			}, t.decode = c.decode, t.decodeArray = c.decodeArray
		},
		"./node_modules/dashjs/build/es5/externals/cea608-parser.js": function(e, t, r) {
			"use strict";
			! function(e) {
				var t = {
						42: 225,
						92: 233,
						94: 237,
						95: 243,
						96: 250,
						123: 231,
						124: 247,
						125: 209,
						126: 241,
						127: 9608,
						128: 174,
						129: 176,
						130: 189,
						131: 191,
						132: 8482,
						133: 162,
						134: 163,
						135: 9834,
						136: 224,
						137: 32,
						138: 232,
						139: 226,
						140: 234,
						141: 238,
						142: 244,
						143: 251,
						144: 193,
						145: 201,
						146: 211,
						147: 218,
						148: 220,
						149: 252,
						150: 8216,
						151: 161,
						152: 42,
						153: 8217,
						154: 9473,
						155: 169,
						156: 8480,
						157: 8226,
						158: 8220,
						159: 8221,
						160: 192,
						161: 194,
						162: 199,
						163: 200,
						164: 202,
						165: 203,
						166: 235,
						167: 206,
						168: 207,
						169: 239,
						170: 212,
						171: 217,
						172: 249,
						173: 219,
						174: 171,
						175: 187,
						176: 195,
						177: 227,
						178: 205,
						179: 204,
						180: 236,
						181: 210,
						182: 242,
						183: 213,
						184: 245,
						185: 123,
						186: 125,
						187: 92,
						188: 94,
						189: 95,
						190: 124,
						191: 8764,
						192: 196,
						193: 228,
						194: 214,
						195: 246,
						196: 223,
						197: 165,
						198: 164,
						199: 9475,
						200: 197,
						201: 229,
						202: 216,
						203: 248,
						204: 9487,
						205: 9491,
						206: 9495,
						207: 9499
					},
					r = function(e) {
						var r = e;
						return t.hasOwnProperty(e) && (r = t[e]), String.fromCharCode(r)
					},
					n = {
						17: 1,
						18: 3,
						21: 5,
						22: 7,
						23: 9,
						16: 11,
						19: 12,
						20: 14
					},
					s = {
						17: 2,
						18: 4,
						21: 6,
						22: 8,
						23: 10,
						19: 13,
						20: 15
					},
					i = {
						25: 1,
						26: 3,
						29: 5,
						30: 7,
						31: 9,
						24: 11,
						27: 12,
						28: 14
					},
					a = {
						25: 2,
						26: 4,
						29: 6,
						30: 8,
						31: 10,
						27: 13,
						28: 15
					},
					o = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"],
					u = {
						verboseFilter: {
							DATA: 3,
							DEBUG: 3,
							INFO: 2,
							WARNING: 2,
							TEXT: 1,
							ERROR: 0
						},
						time: null,
						verboseLevel: 0,
						setTime: function(e) {
							this.time = e
						},
						log: function(e, t) {
							var r = this.verboseFilter[e];
							this.verboseLevel >= r && console.log(this.time + " [" + e + "] " + t)
						}
					},
					l = function(e) {
						for (var t = [], r = 0; r < e.length; r++) t.push(e[r].toString(16));
						return t
					},
					d = function(e, t, r, n, s) {
						this.foreground = e || "white", this.underline = t || !1, this.italics = r || !1, this.background = n || "black", this.flash = s || !1
					};
				d.prototype = {
					reset: function() {
						this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
					},
					setStyles: function(e) {
						for (var t = ["foreground", "underline", "italics", "background", "flash"], r = 0; r < t.length; r++) {
							var n = t[r];
							e.hasOwnProperty(n) && (this[n] = e[n])
						}
					},
					isDefault: function() {
						return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
					},
					equals: function(e) {
						return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash
					},
					copy: function(e) {
						this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash
					},
					toString: function() {
						return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
					}
				};
				var c = function(e, t, r, n, s, i) {
					this.uchar = e || " ", this.penState = new d(t, r, n, s, i)
				};
				c.prototype = {
					reset: function() {
						this.uchar = " ", this.penState.reset()
					},
					setChar: function(e, t) {
						this.uchar = e, this.penState.copy(t)
					},
					setPenState: function(e) {
						this.penState.copy(e)
					},
					equals: function(e) {
						return this.uchar === e.uchar && this.penState.equals(e.penState)
					},
					copy: function(e) {
						this.uchar = e.uchar, this.penState.copy(e.penState)
					},
					isEmpty: function() {
						return " " === this.uchar && this.penState.isDefault()
					}
				};
				var f = function() {
					this.chars = [];
					for (var e = 0; e < 32; e++) this.chars.push(new c);
					this.pos = 0, this.currPenState = new d
				};
				f.prototype = {
					equals: function(e) {
						for (var t = !0, r = 0; r < 32; r++)
							if (!this.chars[r].equals(e.chars[r])) {
								t = !1;
								break
							} return t
					},
					copy: function(e) {
						for (var t = 0; t < 32; t++) this.chars[t].copy(e.chars[t])
					},
					isEmpty: function() {
						for (var e = !0, t = 0; t < 32; t++)
							if (!this.chars[t].isEmpty()) {
								e = !1;
								break
							} return e
					},
					setCursor: function(e) {
						this.pos !== e && (this.pos = e), this.pos < 0 ? (u.log("ERROR", "Negative cursor position " + this.pos), this.pos = 0) : this.pos > 32 && (u.log("ERROR", "Too large cursor position " + this.pos), this.pos = 32)
					},
					moveCursor: function(e) {
						var t = this.pos + e;
						if (e > 1)
							for (var r = this.pos + 1; r < t + 1; r++) this.chars[r].setPenState(this.currPenState);
						this.setCursor(t)
					},
					backSpace: function() {
						this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
					},
					insertChar: function(e) {
						e >= 144 && this.backSpace();
						var t = r(e);
						this.pos >= 32 ? u.log("ERROR", "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1))
					},
					clearFromPos: function(e) {
						var t;
						for (t = e; t < 32; t++) this.chars[t].reset()
					},
					clear: function() {
						this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
					},
					clearToEndOfRow: function() {
						this.clearFromPos(this.pos)
					},
					getTextString: function() {
						for (var e = [], t = !0, r = 0; r < 32; r++) {
							var n = this.chars[r].uchar;
							" " !== n && (t = !1), e.push(n)
						}
						return t ? "" : e.join("")
					},
					setPenStyles: function(e) {
						this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState)
					}
				};
				var h = function() {
					this.rows = [];
					for (var e = 0; e < 15; e++) this.rows.push(new f);
					this.currRow = 14, this.nrRollUpRows = null, this.reset()
				};
				h.prototype = {
					reset: function() {
						for (var e = 0; e < 15; e++) this.rows[e].clear();
						this.currRow = 14
					},
					equals: function(e) {
						for (var t = !0, r = 0; r < 15; r++)
							if (!this.rows[r].equals(e.rows[r])) {
								t = !1;
								break
							} return t
					},
					copy: function(e) {
						for (var t = 0; t < 15; t++) this.rows[t].copy(e.rows[t])
					},
					isEmpty: function() {
						for (var e = !0, t = 0; t < 15; t++)
							if (!this.rows[t].isEmpty()) {
								e = !1;
								break
							} return e
					},
					backSpace: function() {
						this.rows[this.currRow].backSpace()
					},
					clearToEndOfRow: function() {
						this.rows[this.currRow].clearToEndOfRow()
					},
					insertChar: function(e) {
						this.rows[this.currRow].insertChar(e)
					},
					setPen: function(e) {
						this.rows[this.currRow].setPenStyles(e)
					},
					moveCursor: function(e) {
						this.rows[this.currRow].moveCursor(e)
					},
					setCursor: function(e) {
						u.log("INFO", "setCursor: " + e), this.rows[this.currRow].setCursor(e)
					},
					setPAC: function(e) {
						u.log("INFO", "pacData = " + JSON.stringify(e));
						var t = e.row - 1;
						this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.currRow = t;
						var r = this.rows[this.currRow];
						if (null !== e.indent) {
							var n = e.indent,
								s = Math.max(n - 1, 0);
							r.setCursor(e.indent), e.color = r.chars[s].penState.foreground
						}
						var i = {
							foreground: e.color,
							underline: e.underline,
							italics: e.italics,
							background: "black",
							flash: !1
						};
						this.setPen(i)
					},
					setBkgData: function(e) {
						u.log("INFO", "bkgData = " + JSON.stringify(e)), this.backSpace(), this.setPen(e), this.insertChar(32)
					},
					setRollUpRows: function(e) {
						this.nrRollUpRows = e
					},
					rollUp: function() {
						if (null !== this.nrRollUpRows) {
							u.log("TEXT", this.getDisplayText());
							var e = this.currRow + 1 - this.nrRollUpRows,
								t = this.rows.splice(e, 1)[0];
							t.clear(), this.rows.splice(this.currRow, 0, t), u.log("INFO", "Rolling up")
						} else u.log("DEBUG", "roll_up but nrRollUpRows not set yet")
					},
					getDisplayText: function(e) {
						e = e || !1;
						for (var t = [], r = "", n = -1, s = 0; s < 15; s++) {
							var i = this.rows[s].getTextString();
							i && (n = s + 1, e ? t.push("Row " + n + ': "' + i + '"') : t.push(i.trim()))
						}
						return t.length > 0 && (r = e ? "[" + t.join(" | ") + "]" : t.join("\n")), r
					},
					getTextAndFormat: function() {
						return this.rows
					}
				};
				var m = function(e, t) {
					this.chNr = e, this.outputFilter = t, this.mode = null, this.verbose = 0, this.displayedMemory = new h, this.nonDisplayedMemory = new h, this.lastOutputScreen = new h, this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
				};
				m.prototype = {
					modes: ["MODE_ROLL-UP", "MODE_POP-ON", "MODE_PAINT-ON", "MODE_TEXT"],
					reset: function() {
						this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.lastCueEndTime = null
					},
					getHandler: function() {
						return this.outputFilter
					},
					setHandler: function(e) {
						this.outputFilter = e
					},
					setPAC: function(e) {
						this.writeScreen.setPAC(e)
					},
					setBkgData: function(e) {
						this.writeScreen.setBkgData(e)
					},
					setMode: function(e) {
						e !== this.mode && (this.mode = e, u.log("INFO", "MODE=" + e), "MODE_POP-ON" == this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e)
					},
					insertChars: function(e) {
						for (var t = 0; t < e.length; t++) this.writeScreen.insertChar(e[t]);
						var r = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
						u.log("INFO", r + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (u.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
					},
					cc_RCL: function() {
						u.log("INFO", "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
					},
					cc_BS: function() {
						u.log("INFO", "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
					},
					cc_AOF: function() {},
					cc_AON: function() {},
					cc_DER: function() {
						u.log("INFO", "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
					},
					cc_RU: function(e) {
						u.log("INFO", "RU(" + e + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e)
					},
					cc_FON: function() {
						u.log("INFO", "FON - Flash On"), this.writeScreen.setPen({
							flash: !0
						})
					},
					cc_RDC: function() {
						u.log("INFO", "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
					},
					cc_TR: function() {
						u.log("INFO", "TR"), this.setMode("MODE_TEXT")
					},
					cc_RTD: function() {
						u.log("INFO", "RTD"), this.setMode("MODE_TEXT")
					},
					cc_EDM: function() {
						u.log("INFO", "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate()
					},
					cc_CR: function() {
						u.log("CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate()
					},
					cc_ENM: function() {
						u.log("INFO", "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
					},
					cc_EOC: function() {
						if (u.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
							var e = this.displayedMemory;
							this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, u.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
						}
						this.outputDataUpdate()
					},
					cc_TO: function(e) {
						u.log("INFO", "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e)
					},
					cc_MIDROW: function(e) {
						var t = {
							flash: !1
						};
						if (t.underline = e % 2 == 1, t.italics = e >= 46, t.italics) t.foreground = "white";
						else {
							var r = Math.floor(e / 2) - 16;
							t.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][r]
						}
						u.log("INFO", "MIDROW: " + JSON.stringify(t)), this.writeScreen.setPen(t)
					},
					outputDataUpdate: function() {
						var e = u.time;
						null !== e && this.outputFilter && (this.outputFilter.updateData && this.outputFilter.updateData(e, this.displayedMemory), null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen), this.cueStartTime = this.displayedMemory.isEmpty() ? null : e) : this.cueStartTime = e, this.lastOutputScreen.copy(this.displayedMemory))
					},
					cueSplitAtTime: function(e) {
						this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e))
					}
				};
				var g = function(e, t, r) {
					this.field = e || 1, this.outputs = [t, r], this.channels = [new m(1, t), new m(2, r)], this.currChNr = -1, this.lastCmdA = null, this.lastCmdB = null, this.bufferedData = [], this.startTime = null, this.lastTime = null, this.dataCounters = {
						padding: 0,
						char: 0,
						cmd: 0,
						other: 0
					}
				};
				g.prototype = {
					getHandler: function(e) {
						return this.channels[e].getHandler()
					},
					setHandler: function(e, t) {
						this.channels[e].setHandler(t)
					},
					addData: function(e, t) {
						var r, n, s, i = !1;
						this.lastTime = e, u.setTime(e);
						for (var a = 0; a < t.length; a += 2)
							if (n = 127 & t[a], s = 127 & t[a + 1], 0 !== n || 0 !== s) {
								if (u.log("DATA", "[" + l([t[a], t[a + 1]]) + "] -> (" + l([n, s]) + ")"), (r = this.parseCmd(n, s)) || (r = this.parseMidrow(n, s)), r || (r = this.parsePAC(n, s)), r || (r = this.parseBackgroundAttributes(n, s)), !r)
									if (i = this.parseChars(n, s))
										if (this.currChNr && this.currChNr >= 0) this.channels[this.currChNr - 1].insertChars(i);
										else u.log("WARNING", "No channel found yet. TEXT-MODE?");
								r ? this.dataCounters.cmd += 2 : i ? this.dataCounters.char += 2 : (this.dataCounters.other += 2, u.log("WARNING", "Couldn't parse cleaned data " + l([n, s]) + " orig: " + l([t[a], t[a + 1]])))
							} else this.dataCounters.padding += 2
					},
					parseCmd: function(e, t) {
						var r = null;
						if (!((20 === e || 28 === e) && 32 <= t && t <= 47) && !((23 === e || 31 === e) && 33 <= t && t <= 35)) return !1;
						if (e === this.lastCmdA && t === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, u.log("DEBUG", "Repeated command (" + l([e, t]) + ") is dropped"), !0;
						r = 20 === e || 23 === e ? 1 : 2;
						var n = this.channels[r - 1];
						return 20 === e || 28 === e ? 32 === t ? n.cc_RCL() : 33 === t ? n.cc_BS() : 34 === t ? n.cc_AOF() : 35 === t ? n.cc_AON() : 36 === t ? n.cc_DER() : 37 === t ? n.cc_RU(2) : 38 === t ? n.cc_RU(3) : 39 === t ? n.cc_RU(4) : 40 === t ? n.cc_FON() : 41 === t ? n.cc_RDC() : 42 === t ? n.cc_TR() : 43 === t ? n.cc_RTD() : 44 === t ? n.cc_EDM() : 45 === t ? n.cc_CR() : 46 === t ? n.cc_ENM() : 47 === t && n.cc_EOC() : n.cc_TO(t - 32), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = r, !0
					},
					parseMidrow: function(e, t) {
						var r = null;
						return (17 === e || 25 === e) && 32 <= t && t <= 47 && ((r = 17 === e ? 1 : 2) !== this.currChNr ? (u.log("ERROR", "Mismatch channel in midrow parsing"), !1) : (this.channels[r - 1].cc_MIDROW(t), u.log("DEBUG", "MIDROW (" + l([e, t]) + ")"), !0))
					},
					parsePAC: function(e, t) {
						var r, o = null;
						if (!((17 <= e && e <= 23 || 25 <= e && e <= 31) && 64 <= t && t <= 127) && !((16 === e || 24 === e) && 64 <= t && t <= 95)) return !1;
						if (e === this.lastCmdA && t === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, !0;
						r = e <= 23 ? 1 : 2, o = 64 <= t && t <= 95 ? 1 === r ? n[e] : i[e] : 1 === r ? s[e] : a[e];
						var u = this.interpretPAC(o, t);
						return this.channels[r - 1].setPAC(u), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = r, !0
					},
					interpretPAC: function(e, t) {
						var r = t,
							n = {
								color: null,
								italics: !1,
								indent: null,
								underline: !1,
								row: e
							};
						return r = t > 95 ? t - 96 : t - 64, n.underline = 1 == (1 & r), r <= 13 ? n.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (n.italics = !0, n.color = "white") : n.indent = 4 * Math.floor((r - 16) / 2), n
					},
					parseChars: function(e, t) {
						var n = null,
							s = null,
							i = null;
						if (e >= 25 ? (n = 2, i = e - 8) : (n = 1, i = e), 17 <= i && i <= 19) {
							var a = t;
							a = 17 === i ? t + 80 : 18 === i ? t + 112 : t + 144, u.log("INFO", "Special char '" + r(a) + "' in channel " + n), s = [a]
						} else 32 <= e && e <= 127 && (s = 0 === t ? [e] : [e, t]);
						if (s) {
							var o = l(s);
							u.log("DEBUG", "Char codes =  " + o.join(",")), this.lastCmdA = null, this.lastCmdB = null
						}
						return s
					},
					parseBackgroundAttributes: function(e, t) {
						var r, n, s;
						return ((16 === e || 24 === e) && 32 <= t && t <= 47 || (23 === e || 31 === e) && 45 <= t && t <= 47) && (r = {}, 16 === e || 24 === e ? (n = Math.floor((t - 32) / 2), r.background = o[n], t % 2 == 1 && (r.background = r.background + "_semi")) : 45 === t ? r.background = "transparent" : (r.foreground = "black", 47 === t && (r.underline = !0)), s = e < 24 ? 1 : 2, this.channels[s - 1].setBkgData(r), this.lastCmdA = null, this.lastCmdB = null, !0)
					},
					reset: function() {
						for (var e = 0; e < this.channels.length; e++) this.channels[e] && this.channels[e].reset();
						this.lastCmdA = null, this.lastCmdB = null
					},
					cueSplitAtTime: function(e) {
						for (var t = 0; t < this.channels.length; t++) this.channels[t] && this.channels[t].cueSplitAtTime(e)
					}
				};
				e.logger = u, e.PenState = d, e.CaptionScreen = h, e.Cea608Parser = g, e.findCea608Nalus = function(e, t, r) {
					for (var n = 0, s = t, i = [], a = function(e, t, r, n) {
							if (4 !== e || t < 8) return null;
							var s = r.getUint8(n),
								i = r.getUint16(n + 1),
								a = r.getUint32(n + 3),
								o = r.getUint8(n + 7);
							return 181 == s && 49 == i && 1195456820 == a && 3 == o
						}; s < t + r;) {
						if (n = e.getUint32(s), 6 === (31 & e.getUint8(s + 4)))
							for (var o = s + 5, u = -1; o < s + 4 + n - 1;) {
								u = 0;
								for (var l = 255; 255 === l;) u += l = e.getUint8(o), o++;
								var d = 0;
								for (l = 255; 255 === l;) d += l = e.getUint8(o), o++;
								a(u, d, e, o) && i.push([o, d]), o += d
							}
						s += n + 4
					}
					return i
				}, e.extractCea608DataFromRange = function(e, t) {
					var r = t[0],
						n = [
							[],
							[]
						];
					r += 8;
					var s = 31 & e.getUint8(r);
					r += 2;
					for (var i = 0; i < s; i++) {
						var a = e.getUint8(r),
							o = 4 & a,
							u = 3 & a;
						r++;
						var l = e.getUint8(r);
						r++;
						var d = e.getUint8(r);
						r++, o && (127 & l) + (127 & d) != 0 && (0 === u ? (n[0].push(l), n[0].push(d)) : 1 === u && (n[1].push(l), n[1].push(d)))
					}
					return n
				}
			}(t)
		},
		"./node_modules/dashjs/build/es5/externals/objectiron.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = function(e) {
				var t, r, n;
				for (t = [], n = 0, r = e.length; n < r; n += 1) e[n].isRoot ? t.push("root") : t.push(e[n].name);
				var s = function(e, t) {
						var r;
						if (null !== e && null !== t)
							for (r in e) e.hasOwnProperty(r) && (t.hasOwnProperty(r) || (t[r] = e[r]))
					},
					i = function(e, t, r) {
						var n, i, a, o, u;
						if (null !== e && 0 !== e.length)
							for (n = 0, i = e.length; n < i; n += 1) a = e[n], t.hasOwnProperty(a.name) && (r.hasOwnProperty(a.name) ? a.merge && (o = t[a.name], u = r[a.name], "object" == typeof o && "object" == typeof u ? s(o, u) : null != a.mergeFunction ? r[a.name] = a.mergeFunction(o, u) : r[a.name] = o + u) : r[a.name] = t[a.name])
					},
					a = function e(t, r) {
						var n, s, a, o, u, l, d, c = t;
						if (null !== c.children && 0 !== c.children.length)
							for (n = 0, s = c.children.length; n < s; n += 1)
								if (l = c.children[n], r.hasOwnProperty(l.name))
									if (l.isArray)
										for (a = 0, o = (u = r[l.name + "_asArray"]).length; a < o; a += 1) d = u[a], i(c.properties, r, d), e(l, d);
									else d = r[l.name], i(c.properties, r, d), e(l, d)
					};
				return {
					run: function r(n) {
						var s, i, o, u, l, d, c;
						if (null === n) return n;
						if ("object" != typeof n) return n;
						for (s = 0, i = t.length; s < i; s += 1) "root" === t[s] && (l = e[s], a(l, d = n));
						for (u in n)
							if (n.hasOwnProperty(u) && "__children" != u) {
								if (-1 !== (o = t.indexOf(u)))
									if ((l = e[o]).isArray)
										for (s = 0, i = (c = n[u + "_asArray"]).length; s < i; s += 1) d = c[s], a(l, d);
									else d = n[u], a(l, d);
								r(n[u])
							} return n
					}
				}
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/externals/xml2json.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = function(e) {
				e = e || {},
					function() {
						void 0 === e.escapeMode && (e.escapeMode = !0);
						void 0 === e.attributePrefix && (e.attributePrefix = "_");
						e.arrayAccessForm = e.arrayAccessForm || "none", e.emptyNodeForm = e.emptyNodeForm || "text", void 0 === e.enableToStringFunc && (e.enableToStringFunc = !0);
						e.arrayAccessFormPaths = e.arrayAccessFormPaths || [], void 0 === e.skipEmptyTextNodesForObj && (e.skipEmptyTextNodesForObj = !0);
						void 0 === e.stripWhitespaces && (e.stripWhitespaces = !0);
						e.datetimeAccessFormPaths = e.datetimeAccessFormPaths || [], void 0 === e.useDoubleQuotes && (e.useDoubleQuotes = !1);
						e.xmlElementsFilter = e.xmlElementsFilter || [], e.jsonPropertiesFilter = e.jsonPropertiesFilter || [], void 0 === e.keepCData && (e.keepCData = !1);
						void 0 === e.ignoreRoot && (e.ignoreRoot = !1)
					}();
				var t = {
					ELEMENT_NODE: 1,
					TEXT_NODE: 3,
					CDATA_SECTION_NODE: 4,
					COMMENT_NODE: 8,
					DOCUMENT_NODE: 9
				};

				function r(e) {
					var t = e.localName;
					return null == t && (t = e.baseName), null != t && "" != t || (t = e.nodeName), t
				}

				function n(e) {
					return "string" == typeof e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") : e
				}

				function s(e, t, r, n) {
					for (var s = 0; s < e.length; s++) {
						var i = e[s];
						if ("string" == typeof i) {
							if (i == n) break
						} else if (i instanceof RegExp) {
							if (i.test(n)) break
						} else if ("function" == typeof i && i(t, r, n)) break
					}
					return s != e.length
				}

				function i(t, r, n) {
					switch (e.arrayAccessForm) {
						case "property":
							t[r] instanceof Array ? t[r + "_asArray"] = t[r] : t[r + "_asArray"] = [t[r]]
					}!(t[r] instanceof Array) && e.arrayAccessFormPaths.length > 0 && s(e.arrayAccessFormPaths, t, r, n) && (t[r] = [t[r]])
				}

				function a(e) {
					var t = e.split(/[-T:+Z]/g),
						r = new Date(t[0], t[1] - 1, t[2]),
						n = t[5].split(".");
					if (r.setHours(t[3], t[4], n[0]), n.length > 1 && r.setMilliseconds(n[1]), t[6] && t[7]) {
						var s = 60 * t[6] + Number(t[7]);
						s = 0 + ("-" == (/\d\d-\d\d:\d\d$/.test(e) ? "-" : "+") ? -1 * s : s), r.setMinutes(r.getMinutes() - s - r.getTimezoneOffset())
					} else -1 !== e.indexOf("Z", e.length - 1) && (r = new Date(Date.UTC(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds())));
					return r
				}

				function o(r, n, i, a) {
					return !(n == t.ELEMENT_NODE && e.xmlElementsFilter.length > 0) || s(e.xmlElementsFilter, r, i, a)
				}

				function u(n, l) {
					if (n.nodeType == t.DOCUMENT_NODE) {
						for (var d = new Object, c = n.childNodes, f = 0; f < c.length; f++) {
							if ((m = c[f]).nodeType == t.ELEMENT_NODE)
								if (e.ignoreRoot) d = u(m);
								else(d = {})[g = r(m)] = u(m)
						}
						return d
					}
					if (n.nodeType == t.ELEMENT_NODE) {
						(d = new Object).__cnt = 0;
						var h = [];
						for (c = n.childNodes, f = 0; f < c.length; f++) {
							var m, g = r(m = c[f]);
							if (m.nodeType != t.COMMENT_NODE) {
								var p = l + "." + g;
								if (o(d, m.nodeType, g, p))
									if (d.__cnt++, null == d[g]) {
										var _ = u(m, p);
										if ("#text" != g || /[^\s]/.test(_))(v = {})[g] = _, h.push(v);
										d[g] = _, i(d, g, p)
									} else {
										null != d[g] && (d[g] instanceof Array || (d[g] = [d[g]], i(d, g, p)));
										var v;
										_ = u(m, p);
										if ("#text" != g || /[^\s]/.test(_))(v = {})[g] = _, h.push(v);
										d[g][d[g].length] = _
									}
							}
						}
						d.__children = h;
						for (var y = r(n), E = 0; E < n.attributes.length; E++) {
							var T = n.attributes[E];
							d.__cnt++;
							for (var b = T.value, j = 0, S = e.matchers.length; j < S; j++) {
								var M = e.matchers[j];
								M.test(T, y) && (b = M.converter(T.value))
							}
							d[e.attributePrefix + T.name] = b
						}
						var R = function(e) {
							return e.prefix
						}(n);
						return null != R && "" != R && (d.__cnt++, d.__prefix = R), null != d["#text"] && (d.__text = d["#text"], d.__text instanceof Array && (d.__text = d.__text.join("\n")), e.stripWhitespaces && (d.__text = d.__text.trim()), delete d["#text"], "property" == e.arrayAccessForm && delete d["#text_asArray"], d.__text = function(t, r, n) {
							if (e.datetimeAccessFormPaths.length > 0) {
								var i = n.split(".#")[0];
								return s(e.datetimeAccessFormPaths, t, r, i) ? a(t) : t
							}
							return t
						}(d.__text, g, l + "." + g)), null != d["#cdata-section"] && (d.__cdata = d["#cdata-section"], delete d["#cdata-section"], "property" == e.arrayAccessForm && delete d["#cdata-section_asArray"]), 0 == d.__cnt && "text" == e.emptyNodeForm ? d = "" : 1 == d.__cnt && null != d.__text ? d = d.__text : 1 != d.__cnt || null == d.__cdata || e.keepCData ? d.__cnt > 1 && null != d.__text && e.skipEmptyTextNodesForObj && (e.stripWhitespaces && "" == d.__text || "" == d.__text.trim()) && delete d.__text : d = d.__cdata, delete d.__cnt, !e.enableToStringFunc || null == d.__text && null == d.__cdata || (d.toString = function() {
							return (null != this.__text ? this.__text : "") + (null != this.__cdata ? this.__cdata : "")
						}), d
					}
					if (n.nodeType == t.TEXT_NODE || n.nodeType == t.CDATA_SECTION_NODE) return n.nodeValue
				}

				function l(t, r, s, i) {
					var a = "<" + (null != t && null != t.__prefix ? t.__prefix + ":" : "") + r;
					if (null != s)
						for (var o = 0; o < s.length; o++) {
							var u = s[o],
								l = t[u];
							e.escapeMode && (l = n(l)), a += " " + u.substr(e.attributePrefix.length) + "=", e.useDoubleQuotes ? a += '"' + l + '"' : a += "'" + l + "'"
						}
					return a += i ? "/>" : ">"
				}

				function d(e, t) {
					return "</" + (null != e.__prefix ? e.__prefix + ":" : "") + t + ">"
				}

				function c(t, r) {
					return "property" == e.arrayAccessForm && (n = r.toString(), s = "_asArray", -1 !== n.indexOf(s, n.length - s.length)) || 0 == r.toString().indexOf(e.attributePrefix) || 0 == r.toString().indexOf("__") || t[r] instanceof Function;
					var n, s
				}

				function f(e) {
					var t = 0;
					if (e instanceof Object)
						for (var r in e) c(e, r) || t++;
					return t
				}

				function h(t, r, n) {
					return 0 == e.jsonPropertiesFilter.length || "" == n || s(e.jsonPropertiesFilter, t, r, n)
				}

				function m(t) {
					var r = [];
					if (t instanceof Object)
						for (var n in t) - 1 == n.toString().indexOf("__") && 0 == n.toString().indexOf(e.attributePrefix) && r.push(n);
					return r
				}

				function g(t) {
					var r = "";
					return t instanceof Object ? r += function(t) {
						var r = "";
						return null != t.__cdata && (r += "<![CDATA[" + t.__cdata + "]]>"), null != t.__text && (e.escapeMode ? r += n(t.__text) : r += t.__text), r
					}(t) : null != t && (e.escapeMode ? r += n(t) : r += t), r
				}

				function p(e, t) {
					return "" === e ? t : e + "." + t
				}

				function _(e, t, r, n) {
					var s = "";
					if (0 == e.length) s += l(e, t, r, !0);
					else
						for (var i = 0; i < e.length; i++) s += l(e[i], t, m(e[i]), !1), s += v(e[i], p(n, t)), s += d(e[i], t);
					return s
				}

				function v(e, t) {
					var r = "";
					if (f(e) > 0)
						for (var n in e)
							if (!c(e, n) && ("" == t || h(e, n, p(t, n)))) {
								var s = e[n],
									i = m(s);
								if (null == s || null == s) r += l(s, n, i, !0);
								else if (s instanceof Object)
									if (s instanceof Array) r += _(s, n, i, t);
									else if (s instanceof Date) r += l(s, n, i, !1), r += s.toISOString(), r += d(s, n);
								else {
									f(s) > 0 || null != s.__text || null != s.__cdata ? (r += l(s, n, i, !1), r += v(s, p(t, n)), r += d(s, n)) : r += l(s, n, i, !0)
								} else r += l(s, n, i, !1), r += g(s), r += d(s, n)
							} return r += g(e)
				}
				this.parseXmlString = function(e) {
					var t, r = window.ActiveXObject || "ActiveXObject" in window;
					if (void 0 === e) return null;
					if (window.DOMParser) {
						var n = new window.DOMParser,
							s = null;
						if (!r) try {
							s = n.parseFromString("INVALID", "text/xml").getElementsByTagName("parsererror")[0].namespaceURI
						} catch (i) {
							s = null
						}
						try {
							t = n.parseFromString(e, "text/xml"), null != s && t.getElementsByTagNameNS(s, "parsererror").length > 0 && (t = null)
						} catch (i) {
							t = null
						}
					} else 0 == e.indexOf("<?") && (e = e.substr(e.indexOf("?>") + 2)), (t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e);
					return t
				}, this.asArray = function(e) {
					return void 0 === e || null == e ? [] : e instanceof Array ? e : [e]
				}, this.toXmlDateTime = function(e) {
					return e instanceof Date ? e.toISOString() : "number" == typeof e ? new Date(e).toISOString() : null
				}, this.asDateTime = function(e) {
					return "string" == typeof e ? a(e) : e
				}, this.xml2json = function(e) {
					return u(e)
				}, this.xml_str2json = function(e) {
					var t = this.parseXmlString(e);
					return null != t ? this.xml2json(t) : null
				}, this.json2xml_str = function(e) {
					return v(e, "")
				}, this.json2xml = function(e) {
					var t = this.json2xml_str(e);
					return this.parseXmlString(t)
				}, this.getVersion = function() {
					return "1.2.0"
				}
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/index.js": function(e, t, r) {
			"use strict";
			(function(e) {
				function n(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var s = n(r("./node_modules/dashjs/build/es5/src/streaming/MediaPlayer.js")),
					i = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/Protection.js")),
					a = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/MetricsReporting.js")),
					o = n(r("./node_modules/dashjs/build/es5/src/streaming/MediaPlayerFactory.js")),
					u = r("./node_modules/dashjs/build/es5/src/core/Version.js"),
					l = "undefined" != typeof window && window || e,
					d = l.dashjs;
				d || (d = l.dashjs = {}), d.MediaPlayer = s.default, d.Protection = i.default, d.MetricsReporting = a.default, d.MediaPlayerFactory = o.default, d.Version = (0, u.getVersionString)(), t.default = d, t.MediaPlayer = s.default, t.Protection = i.default, t.MetricsReporting = a.default, t.MediaPlayerFactory = o.default
			}).call(this, r("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/dashjs/build/es5/src/core/Debug.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function o() {
				var e, t = this.context,
					r = (0, s.default)(t).getInstance(),
					n = void 0,
					a = void 0,
					o = void 0;
				return e = {
					log: function() {
						var e = "",
							t = null;
						a && (t = (new Date).getTime(), e += "[" + (t - o) + "]"), e.length > 0 && (e += " "), Array.apply(null, arguments).forEach((function(t) {
							e += t + " "
						})), n && console.log(e), r.trigger(i.default.LOG, {
							message: e
						})
					},
					setLogTimestampVisible: function(e) {
						a = e
					},
					setLogToBrowserConsole: function(e) {
						n = e
					},
					getLogToBrowserConsole: function() {
						return n
					}
				}, n = !0, a = !0, o = (new Date).getTime(), e
			}
			o.__dashjs_factory_name = "Debug", t.default = a.default.getSingletonFactory(o), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/core/EventBus.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				},
				a = 0;

			function o() {
				var e = {};

				function t(t, r, n) {
					var s = -1;
					return e[t] ? (e[t].some((function(e, t) {
						if (e && e.callback === r && (!n || n === e.scope)) return s = t, !0
					})), s) : s
				}
				return {
					on: function(r, n, s) {
						var i = arguments.length <= 3 || void 0 === arguments[3] ? a : arguments[3];
						if (!r) throw new Error("event type cannot be null or undefined");
						if (!n || "function" != typeof n) throw new Error("listener must be a function: " + n);
						if (!(t(r, n, s) >= 0)) {
							e[r] = e[r] || [];
							var o = {
								callback: n,
								scope: s,
								priority: i
							};
							e[r].some((function(t, n) {
								if (t && i > t.priority) return e[r].splice(n, 0, o), !0
							})) || e[r].push(o)
						}
					},
					off: function(r, n, s) {
						if (r && n && e[r]) {
							var i = t(r, n, s);
							i < 0 || (e[r][i] = null)
						}
					},
					trigger: function(t, r) {
						if (t && e[t]) {
							if ((r = r || {}).hasOwnProperty("type")) throw new Error("'type' is a reserved word for event dispatching");
							r.type = t, e[t] = e[t].filter((function(e) {
								return e
							})), e[t].forEach((function(e) {
								return e.callback.call(e.scope, r)
							}))
						}
					},
					reset: function() {
						e = {}
					}
				}
			}
			o.__dashjs_factory_name = "EventBus";
			var u = i.default.getSingletonFactory(o);
			u.EVENT_PRIORITY_LOW = a, u.EVENT_PRIORITY_HIGH = 5e3, t.default = u, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/core/FactoryMaker.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function() {
				var e = void 0,
					t = [],
					r = [];

				function n(e, t) {
					for (var n in r) {
						var s = r[n];
						if (s.context === e && s.name === t) return s.instance
					}
					return null
				}

				function s(t, r, n, s) {
					var a = i(n)[t];
					if (a) {
						var o = a.instance;
						if (!a.override) return o.apply({
							context: n,
							factory: e
						}, s);
						for (var u in o = o.apply({
								context: n,
								factory: e,
								parent: r
							}, s)) r.hasOwnProperty(u) && (r[u] = o[u])
					}
					return r
				}

				function i(e) {
					var r = void 0;
					return t.forEach((function(t) {
						t === e && (r = t)
					})), r || (r = t.push(e)), r
				}
				return e = {
					extend: function(e, t, r, n) {
						var s = i(n);
						!s[e] && t && (s[e] = {
							instance: t,
							override: r
						})
					},
					getSingletonInstance: n,
					setSingletonInstance: function(e, t, n) {
						for (var s in r) {
							var i = r[s];
							if (i.context === e && i.name === t) return void(r[s].instance = n)
						}
						r.push({
							name: t,
							context: e,
							instance: n
						})
					},
					getSingletonFactory: function(e) {
						return function(t) {
							var i = void 0;
							return void 0 === t && (t = {}), {
								getInstance: function() {
									return i || (i = n(t, e.__dashjs_factory_name)), i || (i = s(e.__dashjs_factory_name, e.apply({
										context: t
									}, arguments), t, arguments), r.push({
										name: e.__dashjs_factory_name,
										context: t,
										instance: i
									})), i
								}
							}
						}
					},
					getClassFactory: function(e) {
						return function(t) {
							return void 0 === t && (t = {}), {
								create: function() {
									return s(e.__dashjs_factory_name, e.apply({
										context: t
									}, arguments), t, arguments)
								}
							}
						}
					}
				}
			}();
			t.default = n, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/core/Version.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.getVersionString = function() {
				return n
			};
			var n = "2.5.0"
		},
		"./node_modules/dashjs/build/es5/src/core/events/CoreEvents.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function(e, t, r) {
				for (var n = !0; n;) {
					var s = e,
						i = t,
						a = r;
					n = !1, null === s && (s = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(s, i);
					if (void 0 !== o) {
						if ("value" in o) return o.value;
						var u = o.get;
						if (void 0 === u) return;
						return u.call(a)
					}
					var l = Object.getPrototypeOf(s);
					if (null === l) return;
					e = l, t = i, r = a, n = !0, o = l = void 0
				}
			};
			var s, i = r("./node_modules/dashjs/build/es5/src/core/events/EventsBase.js"),
				a = function(e) {
					function t() {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), n(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.BUFFERING_COMPLETED = "bufferingCompleted", this.BUFFER_CLEARED = "bufferCleared", this.BUFFER_LEVEL_UPDATED = "bufferLevelUpdated", this.BYTES_APPENDED = "bytesAppended", this.CHECK_FOR_EXISTENCE_COMPLETED = "checkForExistenceCompleted", this.CURRENT_TRACK_CHANGED = "currentTrackChanged", this.DATA_UPDATE_COMPLETED = "dataUpdateCompleted", this.DATA_UPDATE_STARTED = "dataUpdateStarted", this.INITIALIZATION_LOADED = "initializationLoaded", this.INIT_FRAGMENT_LOADED = "initFragmentLoaded", this.INIT_REQUESTED = "initRequested", this.INTERNAL_MANIFEST_LOADED = "internalManifestLoaded", this.LIVE_EDGE_SEARCH_COMPLETED = "liveEdgeSearchCompleted", this.LOADING_COMPLETED = "loadingCompleted", this.LOADING_PROGRESS = "loadingProgress", this.MANIFEST_UPDATED = "manifestUpdated", this.MEDIA_FRAGMENT_LOADED = "mediaFragmentLoaded", this.QUOTA_EXCEEDED = "quotaExceeded", this.REPRESENTATION_UPDATED = "representationUpdated", this.SEGMENTS_LOADED = "segmentsLoaded", this.SERVICE_LOCATION_BLACKLIST_CHANGED = "serviceLocationBlacklistChanged", this.SOURCEBUFFER_APPEND_COMPLETED = "sourceBufferAppendCompleted", this.SOURCEBUFFER_REMOVE_COMPLETED = "sourceBufferRemoveCompleted", this.STREAMS_COMPOSED = "streamsComposed", this.STREAM_BUFFERING_COMPLETED = "streamBufferingCompleted", this.STREAM_COMPLETED = "streamCompleted", this.STREAM_TEARDOWN_COMPLETE = "streamTeardownComplete", this.TIMED_TEXT_REQUESTED = "timedTextRequested", this.TIME_SYNCHRONIZATION_COMPLETED = "timeSynchronizationComplete", this.URL_RESOLUTION_FAILED = "urlResolutionFailed", this.VIDEO_CHUNK_RECEIVED = "videoChunkReceived", this.WALLCLOCK_TIME_UPDATED = "wallclockTimeUpdated", this.XLINK_ELEMENT_LOADED = "xlinkElementLoaded", this.XLINK_READY = "xlinkReady"
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), t
				}(((s = i) && s.__esModule ? s : {
					default: s
				}).default);
			t.default = a, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/core/events/Events.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function(e, t, r) {
				for (var n = !0; n;) {
					var s = e,
						i = t,
						a = r;
					n = !1, null === s && (s = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(s, i);
					if (void 0 !== o) {
						if ("value" in o) return o.value;
						var u = o.get;
						if (void 0 === u) return;
						return u.call(a)
					}
					var l = Object.getPrototypeOf(s);
					if (null === l) return;
					e = l, t = i, r = a, n = !0, o = l = void 0
				}
			};
			var s, i = r("./node_modules/dashjs/build/es5/src/core/events/CoreEvents.js"),
				a = new(function(e) {
					function t() {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), n(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments)
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), t
				}(((s = i) && s.__esModule ? s : {
					default: s
				}).default));
			t.default = a, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/core/events/EventsBase.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function() {
				function e(e, t) {
					for (var r = 0; r < t.length; r++) {
						var n = t[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
					}
				}
				return function(t, r, n) {
					return r && e(t.prototype, r), n && e(t, n), t
				}
			}();
			var s = function() {
				function e() {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e)
				}
				return n(e, [{
					key: "extend",
					value: function(e, t) {
						if (e) {
							var r = !!t && t.override,
								n = !!t && t.publicOnly;
							for (var s in e) !e.hasOwnProperty(s) || this[s] && !r || n && -1 === e[s].indexOf("public_") || (this[s] = e[s])
						}
					}
				}]), e
			}();
			t.default = s, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/DashAdapter.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/TrackInfo.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/MediaInfo.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/StreamInfo.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/ManifestInfo.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/dash/vo/Event.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				d = n(r("./node_modules/dashjs/build/es5/externals/cea608-parser.js")),
				c = function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
					return t.default = e, t
				}(r("./node_modules/dashjs/build/es5/src/dash/constants/DashMetricsList.js"));

			function f() {
				var e = void 0,
					t = void 0,
					r = void 0;

				function n(e, t) {
					return t.getRepresentationForQuality(e.quality)
				}

				function l(e) {
					return r && e && r[e.streamInfo.id] ? r[e.streamInfo.id][e.index] : null
				}

				function f(e) {
					for (var r = t.length, n = 0; n < r; n++) {
						var s = t[n];
						if (e.id === s.id) return s
					}
					return null
				}

				function h(t, r) {
					var n = new s.default,
						i = r.adaptation.period.mpd.manifest.Period_asArray[r.adaptation.period.index].AdaptationSet_asArray[r.adaptation.index],
						a = e.getRepresentationFor(r.index, i);
					return n.id = r.id, n.quality = r.index, n.bandwidth = e.getBandwidth(a), n.DVRWindow = r.segmentAvailabilityRange, n.fragmentDuration = r.segmentDuration || (r.segments && r.segments.length > 0 ? r.segments[0].duration : NaN), n.MSETimeOffset = r.MSETimeOffset, n.useCalculatedLiveEdgeTime = r.useCalculatedLiveEdgeTime, n.mediaInfo = m(t, r.adaptation), n
				}

				function m(t, r) {
					var n, s = new i.default,
						a = r.period.mpd.manifest.Period_asArray[r.period.index].AdaptationSet_asArray[r.index];
					return s.id = r.id, s.index = r.index, s.type = r.type, s.streamInfo = p(t, r.period), s.representationCount = e.getRepresentationCount(a), s.lang = e.getLanguageForAdaptation(a), n = e.getViewpointForAdaptation(a), s.viewpoint = n ? n.value : void 0, s.accessibility = e.getAccessibilityForAdaptation(a).map((function(e) {
						var t = e.value,
							r = t;
						return e.schemeIdUri && e.schemeIdUri.search("cea-608") >= 0 && void 0 !== d.default && (r = t ? "cea-608:" + t : "cea-608", s.embeddedCaptions = !0), r
					})), s.audioChannelConfiguration = e.getAudioChannelConfigurationForAdaptation(a).map((function(e) {
						return e.value
					})), s.roles = e.getRolesForAdaptation(a).map((function(e) {
						return e.value
					})), s.codec = e.getCodec(a), s.mimeType = e.getMimeType(a), s.contentProtection = e.getContentProtectionData(a), s.bitrateList = e.getBitrateListForAdaptation(a), s.contentProtection && s.contentProtection.forEach((function(t) {
						t.KID = e.getKID(t)
					})), s.isText = e.getIsTextTrack(s.mimeType), s
				}

				function g(e, t, r) {
					e.id = t, e.index = 100 + parseInt(t.substring(2, 3)), e.type = "embeddedText", e.codec = "cea-608-in-SEI", e.isText = !0, e.isEmbedded = !0, e.lang = t + " " + r, e.roles = ["caption"]
				}

				function p(t, r) {
					var n = new a.default;
					return n.id = r.id, n.index = r.index, n.start = r.start, n.duration = r.duration, n.manifestInfo = _(t, r.mpd), n.isLast = 1 === t.Period_asArray.length || Math.abs(n.start + n.duration - n.manifestInfo.duration) < 1, n.isFirst = 1 === t.Period_asArray.length || e.getRegularPeriods(t, e.getMpd(t))[0].id === r.id, n
				}

				function _(t, r) {
					var n = new o.default;
					return n.DVRWindowSize = r.timeShiftBufferDepth, n.loadedTime = r.manifest.loadedTime, n.availableFrom = r.availabilityStartTime, n.minBufferTime = r.manifest.minBufferTime, n.maxFragmentDuration = r.maxSegmentDuration, n.duration = e.getDuration(t), n.isDynamic = e.getIsDynamic(t), n
				}
				return {
					initialize: function() {
						t = [], r = {}
					},
					convertDataToTrack: h,
					convertDataToMedia: m,
					convertDataToStream: p,
					getDataForTrack: n,
					getDataForMedia: l,
					getDataForStream: f,
					getStreamsInfo: function(n) {
						if (!n) return null;
						var s = [],
							i = e.getMpd(n);
						t = e.getRegularPeriods(n, i), r = {};
						for (var a = 0, o = t.length; a < o; a++) s.push(p(n, t[a]));
						return s
					},
					getManifestInfo: function(t) {
						return _(t, e.getMpd(t))
					},
					getMediaInfoForType: function(t, n, s) {
						var i = e.getAdaptationForType(t, n.index, s, n);
						if (!i) return null;
						var a = f(n),
							o = a.id,
							u = e.getIndexForAdaptation(i, t, n.index);
						return r[o] = r[o] || e.getAdaptationsForPeriod(t, a), m(t, r[o][u])
					},
					getAllMediaInfoForType: function(t, n, s) {
						var i, a, o, u, l, d, c = f(n),
							h = c.id,
							p = e.getAdaptationsForType(t, n.index, "embeddedText" !== s ? s : "video"),
							_ = [];
						if (!p) return _;
						for (r[h] = r[h] || e.getAdaptationsForPeriod(t, c), u = 0, d = p.length; u < d; u++) {
							if (i = p[u], o = e.getIndexForAdaptation(i, t, n.index), a = m(t, r[h][o]), "embeddedText" === s) {
								var v = a.accessibility.length;
								for (l = 0; l < v; l++)
									if (a) {
										var y = a.accessibility[l];
										if (0 === y.indexOf("cea-608:")) {
											var E = y.substring(8).split(";");
											if ("CC" === E[0].substring(0, 2))
												for (l = 0; l < E.length; l++) a || (a = m.call(this, t, r[h][o])), g(a, E[l].substring(0, 3), E[l].substring(4)), _.push(a), a = null;
											else
												for (l = 0; l < E.length; l++) a || (a = m.call(this, t, r[h][o])), g(a, "CC" + (l + 1), E[l]), _.push(a), a = null
										} else 0 === y.indexOf("cea-608") && (g(a, "CC1", "eng"), _.push(a), a = null)
									}
							}
							a && "embeddedText" !== s && _.push(a)
						}
						return _
					},
					getCurrentRepresentationInfo: function(e, t) {
						var r = t.getCurrentRepresentation();
						return r ? h(e, r) : null
					},
					getRepresentationInfoForQuality: function(e, t, r) {
						var n = t.getRepresentationForQuality(r);
						return n ? h(e, n) : null
					},
					updateData: function(t, r) {
						var n, s, i = f(r.getStreamInfo()),
							a = r.getMediaInfo(),
							o = l(a),
							u = r.getType();
						s = (n = a.id) ? e.getAdaptationForId(n, t, i.index) : e.getAdaptationForIndex(a.index, t, i.index), r.getRepresentationController().updateData(s, o, u)
					},
					getInitRequest: function(e, t) {
						var r = e.getRepresentationController().getRepresentationForQuality(t);
						return e.getIndexHandler().getInitRequest(r)
					},
					getNextFragmentRequest: function(e, t) {
						var r = n(t, e.getRepresentationController());
						return e.getIndexHandler().getNextSegmentRequest(r)
					},
					getFragmentRequestForTime: function(e, t, r, s) {
						var i = n(t, e.getRepresentationController());
						return e.getIndexHandler().getSegmentRequestForTime(i, r, s)
					},
					generateFragmentRequestForTime: function(e, t, r) {
						var s = n(t, e.getRepresentationController());
						return e.getIndexHandler().generateSegmentRequestForTime(s, r)
					},
					getIndexHandlerTime: function(e) {
						return e.getIndexHandler().getCurrentTime()
					},
					setIndexHandlerTime: function(e, t) {
						return e.getIndexHandler().setCurrentTime(t)
					},
					getEventsFor: function(t, r, o) {
						var u = [];
						return r instanceof a.default ? u = e.getEventsForPeriod(t, f(r)) : r instanceof i.default ? u = e.getEventStreamForAdaptationSet(t, l(r)) : r instanceof s.default && (u = e.getEventStreamForRepresentation(t, n(r, o.getRepresentationController()))), u
					},
					getEvent: function(e, t, r) {
						var n = new u.default,
							s = e.scheme_id_uri,
							i = e.value,
							a = e.timescale,
							o = e.presentation_time_delta,
							l = e.event_duration,
							d = e.id,
							c = e.message_data,
							f = r * a + o;
						return t[s] ? (n.eventStream = t[s], n.eventStream.value = i, n.eventStream.timescale = a, n.duration = l, n.id = d, n.presentationTime = f, n.messageData = c, n.presentationTimeDelta = o, n) : null
					},
					setConfig: function(t) {
						t && t.dashManifestModel && (e = t.dashManifestModel)
					},
					reset: function() {
						t = [], r = {}
					},
					metricsList: c
				}
			}
			f.__dashjs_factory_name = "DashAdapter", t.default = l.default.getSingletonFactory(f), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/DashHandler.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/FragmentRequest.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/Error.js")),
				a = r("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js"),
				o = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				c = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/URLUtils.js")),
				f = n(r("./node_modules/dashjs/build/es5/src/dash/vo/Representation.js")),
				h = r("./node_modules/dashjs/build/es5/src/dash/utils/SegmentsUtils.js"),
				m = n(r("./node_modules/dashjs/build/es5/src/dash/utils/SegmentsGetter.js")),
				g = 1;

			function p(e) {
				var t = this.context,
					r = (0, d.default)(t).getInstance().log,
					n = (0, u.default)(t).getInstance(),
					l = (0, c.default)(t).getInstance(),
					p = e.segmentBaseLoader,
					_ = e.timelineConverter,
					v = e.dashMetrics,
					y = e.metricsModel,
					E = e.baseURLController,
					T = void 0,
					b = void 0,
					j = void 0,
					S = void 0,
					M = void 0,
					R = void 0,
					I = void 0,
					C = void 0,
					A = void 0;

				function D(e, t, r) {
					var n, s, i = E.resolve(r.path);
					return i && t !== i.url && l.isRelative(t) ? (n = i.url, s = i.serviceLocation, t && (n = l.resolve(t, n))) : n = t, !l.isRelative(n) && (e.url = n, e.serviceLocation = s, !0)
				}

				function P(e) {
					var t = !1;
					if (S || b !== e.availableSegmentsNumber) {
						var n = (0, h.getSegmentByIndex)(b, e);
						if (n) {
							var s = n.presentationStartTime - e.adaptation.period.start,
								i = e.adaptation.period.duration;
							r(e.segmentInfoType + ": " + s + " / " + i), t = ("SegmentTimeline" !== e.segmentInfoType || !S) && s >= i
						}
					} else t = !0;
					return t
				}

				function w(e) {
					return A.getSegments(e, j, b, O)
				}

				function O(e, t) {
					if (e.segments = t, t && t.length > 0 && (I = isNaN(I) ? t[0].presentationStartTime : Math.min(t[0].presentationStartTime, I)), S && isNaN(_.getExpectedLiveEdge())) {
						var r = t[t.length - 1].presentationStartTime,
							n = y.getMetricsFor("stream");
						_.setExpectedLiveEdge(r), y.updateManifestUpdateInfo(v.getCurrentManifestUpdate(n), {
							presentationStartTime: r
						})
					}
				}

				function x(e) {
					if (!e) throw new i.default("no representation");
					return e.segments = null, w(e), e
				}

				function F(e, t, r) {
					var n, s, i, a, o, u = t.segments,
						l = u ? u.length : null,
						d = -1;
					if (u && l > 0)
						for (o = 0; o < l; o++)
							if (i = (s = u[o]).presentationStartTime, a = s.duration, e + (n = null == r ? a / 2 : r) >= i && e - n < i + a) {
								d = s.availabilityIdx;
								break
							} return d
				}

				function N(e) {
					if (null == e) return null;
					var t = new s.default,
						r = e.representation,
						n = r.adaptation.period.mpd.manifest.Period_asArray[r.adaptation.period.index].AdaptationSet_asArray[r.adaptation.index].Representation_asArray[r.index].bandwidth,
						i = e.media;
					return i = (0, h.replaceTokenForTemplate)(i, "Number", e.replacementNumber), i = (0, h.replaceTokenForTemplate)(i, "Time", e.replacementTime), i = function(e) {
						return e ? e.split("$$").join("$") : e
					}(i = function(e, t) {
						if (null === t || null === e || -1 === e.indexOf("$RepresentationID$")) return e;
						var r = t.toString();
						return e.split("$RepresentationID$").join(r)
					}(i = (0, h.replaceTokenForTemplate)(i, "Bandwidth", n), r.id)), t.mediaType = M, t.type = a.HTTPRequest.MEDIA_SEGMENT_TYPE, t.range = e.mediaRange, t.startTime = e.presentationStartTime, t.duration = e.duration, t.timescale = r.timescale, t.availabilityStartTime = e.availabilityStartTime, t.availabilityEndTime = e.availabilityEndTime, t.wallStartTime = e.wallStartTime, t.quality = r.index, t.index = e.availabilityIdx, t.mediaInfo = C.getMediaInfo(), t.adaptationIndex = r.adaptation.index, D(t, i, r) ? t : void 0
				}

				function L(e, t, n) {
					var i, a = b,
						o = !!n && n.keepIdx,
						u = n ? n.timeThreshold : null,
						l = !(!n || !n.ignoreIsFinished);
					return e ? (j !== t && (j = t, r("Getting the request for " + M + " time : " + t)), w(e), (b = F(t, e, u)) < 0 && (w(e), b = F(t, e, u)), b > 0 && r("Index for " + M + " time " + t + " is " + b), !l && P(e) ? ((i = new s.default).action = s.default.ACTION_COMPLETE, i.index = b, i.mediaType = M, i.mediaInfo = C.getMediaInfo(), r("Signal complete.", i)) : i = N((0, h.getSegmentByIndex)(b, e)), o && a >= 0 && (b = "SegmentTimeline" === e.segmentInfoType && S ? b : a), i) : null
				}

				function B(e) {
					var t = e.representation;
					t.segments && n.trigger(o.default.REPRESENTATION_UPDATED, {
						sender: this,
						representation: t
					})
				}

				function k(e) {
					if (!e.error && M === e.mediaType) {
						var t, r, s, i, a = e.segments,
							u = e.representation,
							l = [],
							d = 0;
						for (t = 0, r = a.length; t < r; t++) s = a[t], i = (0, h.getTimeBasedSegment)(_, S, u, s.startTime, s.duration, s.timescale, s.media, s.mediaRange, d), l.push(i), i = null, d++;
						u.segmentAvailabilityRange = {
							start: l[0].presentationStartTime,
							end: l[r - 1].presentationStartTime
						}, u.availableSegmentsNumber = r, O(u, l), f.default.hasInitialization(u) && n.trigger(o.default.REPRESENTATION_UPDATED, {
							sender: this,
							representation: u
						})
					}
				}
				return T = {
					initialize: function(r) {
						M = (C = r).getType(), S = C.isDynamic(), A = (0, m.default)(t).create(e, S)
					},
					getStreamProcessor: function() {
						return C
					},
					getInitRequest: function(e) {
						return e ? function(e, t) {
							var r = new s.default,
								n = e.adaptation.period,
								i = n.start;
							if (r.mediaType = t, r.type = a.HTTPRequest.INIT_SEGMENT_TYPE, r.range = e.range, r.availabilityStartTime = _.calcAvailabilityStartTimeFromPresentationTime(i, n.mpd, S), r.availabilityEndTime = _.calcAvailabilityEndTimeFromPresentationTime(i + n.duration, n.mpd, S), r.quality = e.index, r.mediaInfo = C.getMediaInfo(), r.representationId = e.id, D(r, e.initialization, e)) return r
						}(e, M) : null
					},
					getSegmentRequestForTime: L,
					getNextSegmentRequest: function(e) {
						var t, n;
						return e && -1 !== b ? (j = null, r("Getting the next request at index: " + ++b), P(e) ? ((t = new s.default).action = s.default.ACTION_COMPLETE, t.index = b, t.mediaType = M, t.mediaInfo = C.getMediaInfo(), r("Signal complete.")) : (w(e), t = N(n = (0, h.getSegmentByIndex)(b, e)), !n && S && b--), t) : null
					},
					generateSegmentRequestForTime: function(e, t) {
						var r = (e.segmentAvailabilityRange.end - e.segmentAvailabilityRange.start) / 2;
						return e.segments = null, e.segmentAvailabilityRange = {
							start: t - r,
							end: t + r
						}, L(e, t, {
							keepIdx: !1,
							ignoreIsFinished: !0
						})
					},
					updateRepresentation: function(e, t) {
						var r, s = f.default.hasInitialization(e),
							a = f.default.hasSegments(e);
						if (e.segmentDuration || e.segments || x(e), e.segmentAvailabilityRange = null, e.segmentAvailabilityRange = _.calcSegmentAvailabilityRange(e, S), e.segmentAvailabilityRange.end < e.segmentAvailabilityRange.start && !e.useCalculatedLiveEdgeTime) return r = new i.default(g, "no segments are available yet", {
							availabilityDelay: e.segmentAvailabilityRange.start - e.segmentAvailabilityRange.end
						}), void n.trigger(o.default.REPRESENTATION_UPDATED, {
							sender: this,
							representation: e,
							error: r
						});
						t || (b = -1), e.segmentDuration && x(e), s || p.loadInitialization(e), a || p.loadSegments(e, M, e.indexRange), s && a && n.trigger(o.default.REPRESENTATION_UPDATED, {
							sender: this,
							representation: e
						})
					},
					setCurrentTime: function(e) {
						R = e
					},
					getCurrentTime: function() {
						return R
					},
					getCurrentIndex: function() {
						return b
					},
					getEarliestTime: function() {
						return I
					},
					reset: function() {
						A = null, R = 0, I = NaN, j = NaN, b = -1, S = null, M = null, C = null, n.off(o.default.INITIALIZATION_LOADED, B, T), n.off(o.default.SEGMENTS_LOADED, k, T)
					}
				}, b = -1, R = 0, I = NaN, n.on(o.default.INITIALIZATION_LOADED, B, T), n.on(o.default.SEGMENTS_LOADED, k, T), T
			}
			p.__dashjs_factory_name = "DashHandler";
			var _ = l.default.getClassFactory(p);
			_.SEGMENTS_UNAVAILABLE_ERROR_CODE = g, t.default = _, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/DashMetrics.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = r("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js"),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/models/ManifestModel.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/dash/models/DashManifestModel.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				u = function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
					return t.default = e, t
				}(r("./node_modules/dashjs/build/es5/src/dash/constants/DashMetricsList.js")),
				l = r("./node_modules/round10/round10.js");

			function d() {
				var e = this.context,
					t = (0, i.default)(e).getInstance();

				function r(e) {
					return d(e, u.BUFFER_LEVEL)
				}

				function n(e) {
					if (null === e) return null;
					var t, r = e.HttpList,
						n = null;
					if (null === r || r.length <= 0) return null;
					for (t = r.length - 1; t >= 0;) {
						if (r[t].responsecode) {
							n = r[t];
							break
						}
						t--
					}
					return n
				}

				function o(e) {
					return null === e ? [] : e.HttpList ? e.HttpList : []
				}

				function d(e, t) {
					if (null === e) return null;
					var r = e[t];
					if (null === r) return null;
					var n = r.length;
					return n <= 0 ? null : r[n - 1]
				}

				function c(e) {
					var t = {};
					if (!e) return t;
					for (var r = e.trim().split("\r\n"), n = 0, s = r.length; n < s; n++) {
						var i = r[n],
							a = i.indexOf(": ");
						a > 0 && (t[i.substring(0, a)] = i.substring(a + 2))
					}
					return t
				}

				function f(e, t, r) {
					var n, s, i, a, o;
					if (e)
						for (n = e.AdaptationSet_asArray, a = 0; a < n.length; a += 1)
							for (i = n[a].Representation_asArray, o = 0; o < i.length; o += 1)
								if (t === (s = i[o]).id) return r ? o : s;
					return null
				}

				function h(t, r) {
					return (0, a.default)(e).getInstance().getIsTypeOf(t, r)
				}
				return {
					getBandwidthForRepresentation: function(e, r) {
						var n;
						return null === (n = f(t.getValue().Period_asArray[r], e)) ? null : n.bandwidth
					},
					getIndexForRepresentation: function(e, r) {
						return function(e, t) {
							var r = f(e, t, !0);
							if (null !== r) return r;
							return -1
						}(t.getValue().Period_asArray[r], e)
					},
					getMaxIndexForBufferType: function(e, r) {
						return function(e, t) {
							var r, n, s, i;
							if (!e || !t) return -1;
							for (n = e.AdaptationSet_asArray, i = 0; i < n.length; i += 1)
								if (r = n[i], s = r.Representation_asArray, h(r, t)) return s.length;
							return -1
						}(t.getValue().Period_asArray[r], e)
					},
					getCurrentRepresentationSwitch: function(e) {
						return d(e, u.TRACK_SWITCH)
					},
					getLatestBufferLevelVO: r,
					getCurrentBufferLevel: function(e) {
						var t = r(e);
						return t ? (0, l.round10)(t.level / 1e3, -3) : 0
					},
					getCurrentHttpRequest: n,
					getHttpRequests: o,
					getCurrentDroppedFrames: function(e) {
						return d(e, u.DROPPED_FRAMES)
					},
					getCurrentSchedulingInfo: function(e) {
						return d(e, u.SCHEDULING_INFO)
					},
					getCurrentDVRInfo: function(e) {
						return d(e, u.DVR_INFO)
					},
					getCurrentManifestUpdate: function(e) {
						return d(e, u.MANIFEST_UPDATE)
					},
					getLatestFragmentRequestHeaderValueByID: function(e, t) {
						if (null === e) return null;
						var r, s = n(e);
						return null === s || null === s._responseHeaders ? null : void 0 === (r = c(s._responseHeaders))[t] ? null : r[t]
					},
					getLatestMPDRequestHeaderValueByID: function(e, t) {
						var r, n, i, a = {};
						if (null === e) return null;
						for (i = (r = o(e)).length - 1; i >= 0; i--)
							if ((n = r[i]).type === s.HTTPRequest.MPD_TYPE) {
								a = c(n._responseHeaders);
								break
							} return void 0 === a[t] ? null : a[t]
					},
					getRequestsQueue: function(e) {
						return e.RequestsQueue
					}
				}
			}
			d.__dashjs_factory_name = "DashMetrics", t.default = o.default.getSingletonFactory(d), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/SegmentBaseLoader.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/RequestModifier.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/dash/vo/Segment.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/Error.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/ErrorHandler.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/BoxParser.js")),
				c = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				f = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				h = r("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js"),
				m = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/FragmentRequest.js")),
				g = n(r("./node_modules/dashjs/build/es5/src/streaming/XHRLoader.js"));

			function p() {
				var e = this.context,
					t = (0, f.default)(e).getInstance().log,
					r = (0, l.default)(e).getInstance(),
					n = void 0,
					c = void 0,
					p = void 0,
					_ = void 0,
					v = void 0,
					y = void 0;

				function E(e) {
					if (e.url) {
						var t = new m.default;
						return t.type = e.init ? h.HTTPRequest.INIT_SEGMENT_TYPE : h.HTTPRequest.MEDIA_SEGMENT_TYPE, t.url = e.url, t.range = e.range.start + "-" + e.range.end, t
					}
				}

				function T(e, t, n) {
					e ? r.trigger(u.default.SEGMENTS_LOADED, {
						segments: e,
						representation: t,
						mediaType: n
					}) : r.trigger(u.default.SEGMENTS_LOADED, {
						segments: null,
						representation: t,
						mediaType: n,
						error: new a.default(null, "error loading segments", null)
					})
				}
				return {
					setConfig: function(e) {
						e.baseURLController && (y = e.baseURLController), e.metricsModel && (_ = e.metricsModel)
					},
					initialize: function() {
						n = (0, o.default)(e).getInstance(), c = (0, d.default)(e).getInstance(), p = (0, s.default)(e).getInstance(), v = (0, g.default)(e).create({
							errHandler: n,
							metricsModel: _,
							requestModifier: p
						})
					},
					loadInitialization: function e(n, s) {
						var i = null,
							a = null,
							o = y.resolve(n.path),
							l = s || {
								init: !0,
								url: o ? o.url : void 0,
								range: {
									start: 0,
									end: 1500
								},
								searching: !1,
								bytesLoaded: 0,
								bytesToLoad: 1500
							};
						t("Start searching for initialization.");
						var d = E(l);
						v.load({
							request: d,
							success: function(s) {
								l.bytesLoaded = l.range.end, a = c.parse(s), (i = function(e) {
									var r, n, s = e.getBox("ftyp"),
										i = e.getBox("moov"),
										a = null;
									t("Searching for initialization."), i && i.isComplete && (r = s ? s.offset : i.offset, n = i.offset + i.size - 1, t("Found the initialization.  Range: " + (a = r + "-" + n)));
									return a
								}(a)) ? (n.range = i, r.trigger(u.default.INITIALIZATION_LOADED, {
									representation: n
								})) : (l.range.end = l.bytesLoaded + l.bytesToLoad, e(n, l))
							},
							error: function() {
								r.trigger(u.default.INITIALIZATION_LOADED, {
									representation: n
								})
							}
						}), t("Perform init search: " + l.url)
					},
					loadSegments: function e(r, n, s, a, o) {
						if (s && (void 0 === s.start || void 0 === s.end)) {
							var u = s ? s.toString().split("-") : null;
							s = u ? {
								start: parseFloat(u[0]),
								end: parseFloat(u[1])
							} : null
						}
						o = o || T;
						var l = null,
							d = null,
							f = !!s,
							h = y.resolve(r.path),
							m = {
								init: !1,
								url: h ? h.url : void 0,
								range: f ? s : {
									start: 0,
									end: 1500
								},
								searching: !f,
								bytesLoaded: a ? a.bytesLoaded : 0,
								bytesToLoad: 1500
							},
							g = E(m);
						v.load({
							request: g,
							success: function(s) {
								var a = m.bytesToLoad,
									u = s.byteLength;
								if (m.bytesLoaded = m.range.end - m.range.start, l = c.parse(s), (d = l.getBox("sidx")) && d.isComplete) {
									var f, h, g = d.references;
									if (null != g && g.length > 0 && (f = 1 === g[0].reference_type), f) {
										var p, _, v, y;
										t("Initiate multiple SIDX load."), m.range.end = m.range.start + d.size;
										var E = [],
											T = 0,
											b = (d.offset || m.range.start) + d.size,
											j = function(e) {
												e ? (E = E.concat(e), ++T >= _ && o(E, r, n)) : o(null, r, n)
											};
										for (p = 0, _ = g.length; p < _; p++) v = b, y = b + g[p].referenced_size - 1, b += g[p].referenced_size, e(r, null, {
											start: v,
											end: y
										}, m, j)
									} else t("Parsing segments from SIDX."), h = function(e, t) {
										for (var r, n, s, a, o = e.references, u = o.length, l = e.timescale, d = e.earliest_presentation_time, c = t.range.start + e.offset + e.first_offset + e.size, f = [], h = 0; h < u; h++) s = o[h].subsegment_duration, a = o[h].referenced_size, (r = new i.default).duration = s, r.startTime = d, r.timescale = l, n = c + a - 1, r.mediaRange = c + "-" + n, f.push(r), d += s, c += a;
										return f
									}(d, m), o(h, r, n)
								} else {
									if (d) m.range.start = d.offset || m.range.start, m.range.end = m.range.start + (d.size || a);
									else {
										if (u < m.bytesLoaded) return void o(null, r, n);
										var S = l.getLastBox();
										S && S.size ? (m.range.start = S.offset + S.size, m.range.end = m.range.start + a) : m.range.end += a
									}
									e(r, n, m.range, m, o)
								}
							},
							error: function() {
								o(null, r, n)
							}
						}), t("Perform SIDX load: " + m.url)
					},
					reset: function() {
						v.abort(), v = null, n = null, c = null, p = null
					}
				}
			}
			p.__dashjs_factory_name = "SegmentBaseLoader", t.default = c.default.getSingletonFactory(p), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/WebmSegmentBaseLoader.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/EBMLParser.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/ErrorHandler.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/RequestModifier.js")),
				c = n(r("./node_modules/dashjs/build/es5/src/dash/vo/Segment.js")),
				f = r("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js"),
				h = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/FragmentRequest.js")),
				m = n(r("./node_modules/dashjs/build/es5/src/streaming/XHRLoader.js"));

			function g() {
				var e, t = this.context,
					r = (0, u.default)(t).getInstance().log,
					n = (0, i.default)(t).getInstance(),
					o = void 0,
					g = void 0,
					p = void 0,
					_ = void 0,
					v = void 0,
					y = void 0;

				function E(e, n, s, i) {
					var u, l, d = void 0,
						f = void 0,
						h = void 0,
						m = void 0,
						g = void 0,
						p = void 0;
					for (f = [], m = 0, l = (u = function(e) {
							var r, n = [],
								s = void 0,
								i = void 0,
								u = (0, a.default)(t).create({
									data: e
								}),
								l = void 0;
							for (u.consumeTag(o.Segment.Cues), r = u.getMatroskaCodedNum(); u.moreData() && u.consumeTagAndSize(o.Segment.Cues.CuePoint, !0);) {
								for ((s = {}).CueTime = u.parseTag(o.Segment.Cues.CuePoint.CueTime), s.CueTracks = []; u.moreData() && u.consumeTagAndSize(o.Segment.Cues.CuePoint.CueTrackPositions, !0);) {
									if ((i = {}).Track = u.parseTag(o.Segment.Cues.CuePoint.CueTrackPositions.CueTrack), 0 === i.Track) throw new Error("Cue track cannot be 0");
									i.ClusterPosition = u.parseTag(o.Segment.Cues.CuePoint.CueTrackPositions.CueClusterPosition), u.getPos() + 4 > r || !u.consumeTag(o.Segment.Cues.CuePoint.CueTrackPositions.CueBlockNumber, !0) ? s.CueTracks.push(i) : (l = u.getMatroskaCodedNum(), i.BlockNumber = u.getMatroskaUint(l), s.CueTracks.push(i))
								}
								if (0 === s.CueTracks.length) throw new Error("Mandatory cuetrack not found");
								n.push(s)
							}
							if (0 === n.length) throw new Error("mandatory cuepoint not found");
							return n
						}(e)).length; m < l; m += 1) h = new c.default, d = 0, d = m < u.length - 1 ? u[m + 1].CueTime - u[m].CueTime : i - u[m].CueTime, h.duration = d, h.startTime = u[m].CueTime, h.timescale = 1e3, g = u[m].CueTracks[0].ClusterPosition + n, p = m < u.length - 1 ? u[m + 1].CueTracks[0].ClusterPosition + n - 1 : s - 1, h.mediaRange = g + "-" + p, f.push(h);
					return r("Parsed cues: " + f.length + " cues."), f
				}

				function T(e, t, r) {
					e ? n.trigger(s.default.SEGMENTS_LOADED, {
						segments: e,
						representation: t,
						mediaType: r
					}) : n.trigger(s.default.SEGMENTS_LOADED, {
						segments: null,
						representation: t,
						mediaType: r,
						error: new Error(null, "error loading segments", null)
					})
				}

				function b(e) {
					var t = new h.default;
					return t.type = e.init ? f.HTTPRequest.INIT_SEGMENT_TYPE : f.HTTPRequest.MEDIA_SEGMENT_TYPE, t.url = e.url, t.range = e.range.start + "-" + e.range.end, t
				}
				return e = {
					setConfig: function(e) {
						if (!e.baseURLController || !e.metricsModel) throw new Error("Missing config parameter(s)");
						y = e.baseURLController, _ = e.metricsModel
					},
					initialize: function() {
						g = (0, l.default)(t).getInstance(), p = (0, d.default)(t).getInstance(), v = (0, m.default)(t).create({
							errHandler: g,
							metricsModel: _,
							requestModifier: p
						})
					},
					loadInitialization: function(e, t) {
						var i = null,
							a = y.resolve(e.path),
							o = a ? a.url : void 0,
							u = e.range.split("-"),
							l = t || {
								range: {
									start: parseFloat(u[0]),
									end: parseFloat(u[1])
								},
								request: i,
								url: o,
								init: !0
							};
						r("Start loading initialization."), i = b(l), v.load({
							request: i,
							success: function() {
								n.trigger(s.default.INITIALIZATION_LOADED, {
									representation: e
								})
							},
							error: function() {
								n.trigger(s.default.INITIALIZATION_LOADED, {
									representation: e
								})
							}
						}), r("Perform init load: " + l.url)
					},
					loadSegments: function(e, n, s, i) {
						var u = null,
							l = y.resolve(e.path),
							d = l ? l.url : void 0;
						i = i || T, u = b({
							bytesLoaded: 0,
							bytesToLoad: 8192,
							range: {
								start: 0,
								end: 8192
							},
							request: u,
							url: d,
							init: !1
						}), r("Parsing ebml header"), v.load({
							request: u,
							success: function(u) {
								! function(e, n, s, i) {
									var u, l = (0, a.default)(t).create({
											data: e
										}),
										d = void 0,
										c = void 0,
										f = s.split("-"),
										h = null,
										m = {
											url: n,
											range: {
												start: parseFloat(f[0]),
												end: parseFloat(f[1])
											},
											request: h
										},
										g = void 0;
									for (r("Parse EBML header: " + m.url), l.skipOverElement(o.EBML), l.consumeTag(o.Segment), g = l.getMatroskaCodedNum(), g += l.getPos(), u = l.getPos(); l.moreData() && !l.consumeTagAndSize(o.Segment.Info, !0);)
										if (!(l.skipOverElement(o.Segment.SeekHead, !0) || l.skipOverElement(o.Segment.Tracks, !0) || l.skipOverElement(o.Segment.Cues, !0) || l.skipOverElement(o.Void, !0))) throw new Error("no valid top level element found");
									for (; void 0 === d;) {
										var p = l.getMatroskaCodedNum(!0),
											_ = l.getMatroskaCodedNum();
										switch (p) {
											case o.Segment.Info.Duration.tag:
												d = l[o.Segment.Info.Duration.parse](_);
												break;
											default:
												l.setPos(l.getPos() + _)
										}
									}
									h = b(m), v.load({
										request: h,
										success: function(e) {
											c = E(e, u, g, d), i(c)
										},
										error: function() {
											r("Download Error: Cues " + m.url), i(null)
										}
									}), r("Perform cues load: " + m.url + " bytes=" + m.range.start + "-" + m.range.end)
								}(u, d, s, (function(t) {
									i(t, e, n)
								}))
							},
							error: function() {
								i(null, e, n)
							}
						})
					},
					reset: function() {
						g = null, p = null, r = null
					}
				}, o = {
					EBML: {
						tag: 440786851,
						required: !0
					},
					Segment: {
						tag: 408125543,
						required: !0,
						SeekHead: {
							tag: 290298740,
							required: !0
						},
						Info: {
							tag: 357149030,
							required: !0,
							TimecodeScale: {
								tag: 2807729,
								required: !0,
								parse: "getMatroskaUint"
							},
							Duration: {
								tag: 17545,
								required: !0,
								parse: "getMatroskaFloat"
							}
						},
						Tracks: {
							tag: 374648427,
							required: !0
						},
						Cues: {
							tag: 475249515,
							required: !0,
							CuePoint: {
								tag: 187,
								required: !0,
								CueTime: {
									tag: 179,
									required: !0,
									parse: "getMatroskaUint"
								},
								CueTrackPositions: {
									tag: 183,
									required: !0,
									CueTrack: {
										tag: 247,
										required: !0,
										parse: "getMatroskaUint"
									},
									CueClusterPosition: {
										tag: 241,
										required: !0,
										parse: "getMatroskaUint"
									},
									CueBlockNumber: {
										tag: 21368
									}
								}
							}
						}
					},
					Void: {
						tag: 236,
						required: !0
					}
				}, e
			}
			g.__dashjs_factory_name = "WebmSegmentBaseLoader", t.default = o.default.getSingletonFactory(g), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/constants/DashMetricsList.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.TCP_CONNECTION = "TcpList";
			t.HTTP_REQUEST = "HttpList";
			t.TRACK_SWITCH = "RepSwitchList";
			t.BUFFER_LEVEL = "BufferLevel";
			t.BUFFER_STATE = "BufferState";
			t.DVR_INFO = "DVRInfo";
			t.DROPPED_FRAMES = "DroppedFrames";
			t.SCHEDULING_INFO = "SchedulingInfo";
			t.REQUESTS_QUEUE = "RequestsQueue";
			t.MANIFEST_UPDATE = "ManifestUpdate";
			t.MANIFEST_UPDATE_STREAM_INFO = "ManifestUpdatePeriodInfo";
			t.MANIFEST_UPDATE_TRACK_INFO = "ManifestUpdateRepresentationInfo";
			t.PLAY_LIST = "PlayList";
			t.DVB_ERRORS = "DVBErrors"
		},
		"./node_modules/dashjs/build/es5/src/dash/controllers/RepresentationController.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/dash/models/DashManifestModel.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/dash/DashMetrics.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/dash/utils/TimelineConverter.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/AbrController.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/PlaybackController.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/streaming/models/ManifestModel.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/streaming/models/MetricsModel.js")),
				c = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/DOMStorage.js")),
				f = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/Error.js")),
				h = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				m = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				g = n(r("./node_modules/dashjs/build/es5/src/streaming/MediaPlayerEvents.js")),
				p = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				_ = n(r("./node_modules/dashjs/build/es5/src/dash/vo/Representation.js"));

			function v() {
				var e = 1,
					t = this.context,
					r = (0, h.default)(t).getInstance(),
					n = void 0,
					p = void 0,
					v = void 0,
					y = void 0,
					E = void 0,
					T = void 0,
					b = void 0,
					j = void 0,
					S = void 0,
					M = void 0,
					R = void 0,
					I = void 0,
					C = void 0,
					A = void 0,
					D = void 0,
					P = void 0;

				function w() {
					return y
				}

				function O() {
					return T
				}

				function x() {
					var e = new Date,
						t = O(),
						r = 1e3 * M.getTime();
					I.addRepresentationSwitch(t.adaptation.type, e, r, t.id)
				}

				function F() {
					var e = A.calcSegmentAvailabilityRange(T, b.isDynamic());
					I.addDVRInfo(b.getType(), M.getTime(), b.getStreamInfo().manifestInfo, e)
				}

				function N(e) {
					return E[e]
				}

				function L(e) {
					var t = e;
					y = !1, r.trigger(g.default.AST_IN_FUTURE, {
						delay: t
					}), setTimeout((function() {
						if (!w()) {
							y = !0, r.trigger(m.default.DATA_UPDATE_STARTED, {
								sender: n
							}), E.forEach((function(e) {
								e.segmentAvailabilityRange = null
							}));
							for (var e = 0; e < E.length; e++) S.updateRepresentation(E[e], !0)
						}
					}), t)
				}

				function B(t) {
					if (t.sender.getStreamProcessor() === b && w()) {
						var n, s, i, a = t.representation,
							o = I.getMetricsFor("stream"),
							u = I.getMetricsFor(O().adaptation.type),
							l = P.getCurrentManifestUpdate(o),
							d = !1,
							c = 0;
						if ("dynamic" === a.adaptation.period.mpd.manifest.type) {
							var h = a.segmentAvailabilityRange.end - a.segmentAvailabilityRange.start;
							c = 1e3 * (M.computeLiveDelay(T.segmentDuration, b.getStreamInfo().manifestInfo.DVRWindowSize) - h)
						}
						if (c > 0) return F(), L(c), s = new f.default(e, "Segments update failed", null), void r.trigger(m.default.DATA_UPDATE_COMPLETED, {
							sender: this,
							data: p,
							currentRepresentation: T,
							error: s
						});
						if (l) {
							for (var g = 0; g < l.trackInfo.length; g++)
								if ((n = l.trackInfo[g]).index === a.index && n.mediaType === b.getType()) {
									d = !0;
									break
								} d || I.addManifestUpdateRepresentationInfo(l, a.id, a.index, a.adaptation.period.index, b.getType(), a.presentationTimeOffset, a.startNumber, a.segmentInfoType)
						}(function() {
							for (var e = 0, t = E.length; e < t; e++) {
								var r = E[e].segmentInfoType;
								if (null === E[e].segmentAvailabilityRange || !_.default.hasInitialization(E[e]) || ("SegmentBase" === r || "BaseURL" === r) && !E[e].segments) return !1
							}
							return !0
						})() && (y = !1, j.setPlaybackQuality(b.getType(), b.getStreamInfo(), (i = T, E.indexOf(i))), I.updateManifestUpdateInfo(l, {
							latency: T.segmentAvailabilityRange.end - M.getTime()
						}), P.getCurrentRepresentationSwitch(u) || x(), r.trigger(m.default.DATA_UPDATE_COMPLETED, {
							sender: this,
							data: p,
							currentRepresentation: T
						}))
					}
				}

				function k(e) {
					e.isDynamic && function(e) {
						for (var t, r = 0, n = E.length; r < n; r++)(t = E[r]).segmentAvailabilityRange = A.calcSegmentAvailabilityRange(t, e)
					}(e.isDynamic)
				}

				function U(e) {
					e.sender.getStreamProcessor() === b && F()
				}

				function K(e) {
					e.mediaType === b.getType() && b.getStreamInfo().id === e.streamInfo.id && e.oldQuality !== e.newQuality && (T = N(e.newQuality), C.setSavedBitrateSettings(e.mediaType, T.bandwidth), x())
				}
				return n = {
					initialize: function(e) {
						S = (b = e).getIndexHandler()
					},
					setConfig: function(e) {
						e.abrController && (j = e.abrController)
					},
					getData: function() {
						return p
					},
					getDataIndex: function() {
						return v
					},
					isUpdating: w,
					updateData: function(e, t, n) {
						var s, i = null,
							a = b.getStreamInfo(),
							o = j.getTopQualityIndexFor(n, a.id);
						if (y = !0, r.trigger(m.default.DATA_UPDATE_STARTED, {
								sender: this
							}), E = function(e) {
								var t = R.getValue();
								return v = D.getIndexForAdaptation(p, t, e.period.index), D.getRepresentationsForAdaptation(t, e)
							}(t), null === p && "fragmentedText" !== n ? (i = j.getAverageThroughput(n) || j.getInitialBitrateFor(n, a), s = j.getQualityForBitrate(b.getMediaInfo(), i)) : s = j.getQualityFor(n, a), s > o && (s = o), T = N(s), p = e, "video" !== n && "audio" !== n && "fragmentedText" !== n) return y = !1, void r.trigger(m.default.DATA_UPDATE_COMPLETED, {
							sender: this,
							data: p,
							currentRepresentation: T
						});
						for (var u = 0; u < E.length; u++) S.updateRepresentation(E[u], !0)
					},
					getStreamProcessor: function() {
						return b
					},
					getCurrentRepresentation: O,
					getRepresentationForQuality: N,
					reset: function() {
						r.off(m.default.QUALITY_CHANGE_REQUESTED, K, n), r.off(m.default.REPRESENTATION_UPDATED, B, n), r.off(m.default.WALLCLOCK_TIME_UPDATED, k, n), r.off(m.default.BUFFER_LEVEL_UPDATED, U, n), p = null, v = -1, y = !0, E = [], j = null, M = null, R = null, I = null, C = null, A = null, D = null, P = null
					}
				}, p = null, v = -1, y = !0, E = [], j = (0, o.default)(t).getInstance(), M = (0, u.default)(t).getInstance(), R = (0, l.default)(t).getInstance(), I = (0, d.default)(t).getInstance(), C = (0, c.default)(t).getInstance(), A = (0, a.default)(t).getInstance(), D = (0, s.default)(t).getInstance(), P = (0, i.default)(t).getInstance(), r.on(m.default.QUALITY_CHANGE_REQUESTED, K, n), r.on(m.default.REPRESENTATION_UPDATED, B, n), r.on(m.default.WALLCLOCK_TIME_UPDATED, k, n), r.on(m.default.BUFFER_LEVEL_UPDATED, U, n), n
			}
			v.__dashjs_factory_name = "RepresentationController", t.default = p.default.getClassFactory(v), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/models/DashManifestModel.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/dash/vo/Representation.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/dash/vo/AdaptationSet.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/dash/vo/Period.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/dash/vo/Mpd.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/dash/vo/UTCTiming.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/dash/utils/TimelineConverter.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/MediaController.js")),
				c = n(r("./node_modules/dashjs/build/es5/src/dash/DashAdapter.js")),
				f = n(r("./node_modules/dashjs/build/es5/src/dash/vo/Event.js")),
				h = n(r("./node_modules/dashjs/build/es5/src/dash/vo/BaseURL.js")),
				m = n(r("./node_modules/dashjs/build/es5/src/dash/vo/EventStream.js")),
				g = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/URLUtils.js")),
				p = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function _() {
				var e = this.context,
					t = (0, l.default)(e).getInstance(),
					r = (0, d.default)(e).getInstance(),
					n = (0, c.default)(e).getInstance(),
					p = (0, g.default)(e).getInstance();

				function _(e, t) {
					var r, n, s, i = !1,
						a = !1,
						o = e.ContentComponent_asArray,
						u = "text" !== t ? new RegExp(t) : new RegExp("(vtt|ttml)");
					if (e.Representation_asArray.length > 0 && e.Representation_asArray[0].hasOwnProperty("codecs")) {
						var l = e.Representation_asArray[0].codecs;
						if (0 === l.search("stpp") || 0 === l.search("wvtt")) return "fragmentedText" === t
					}
					if (o) {
						if (o.length > 1) return "muxed" === t;
						o[0] && o[0].contentType === t && (i = !0, a = !0)
					}
					if (e.hasOwnProperty("mimeType") && (i = u.test(e.mimeType), a = !0), !a)
						for (r = 0, n = e.Representation_asArray.length; !a && r < n;)(s = e.Representation_asArray[r]).hasOwnProperty("mimeType") && (i = u.test(s.mimeType), a = !0), r++;
					return i
				}

				function v(e) {
					return _(e, "audio")
				}

				function y(e) {
					return _(e, "video")
				}

				function E(e) {
					return _(e, "fragmentedText")
				}

				function T(e) {
					return _(e, "muxed")
				}

				function b(e) {
					return "text/vtt" === e || "application/ttml+xml" === e
				}

				function j(e) {
					return e.hasOwnProperty("Role_asArray") ? e.Role_asArray : []
				}

				function S(e) {
					return j(e).filter((function(e) {
						return "main" === e.value
					}))[0]
				}

				function M() {
					return function(e, t) {
						return e.bandwidth - t.bandwidth
					}
				}

				function R(e) {
					return void 0 !== e.Representation_asArray && null !== e.Representation_asArray && e.Representation_asArray.sort((function(e, t) {
						return e.bandwidth - t.bandwidth
					})), e
				}

				function I(e, t, r) {
					var n, s, i = e.Period_asArray[t].AdaptationSet_asArray,
						a = [];
					for (n = 0, s = i.length; n < s; n++) _(i[n], r) && a.push(R(i[n]));
					return a
				}

				function C(e) {
					var t = !1;
					return e.hasOwnProperty("type") && (t = "dynamic" === e.type), t
				}

				function A(e, t) {
					var r = !1;
					return e.profiles && e.profiles.length > 0 && (r = -1 !== e.profiles.indexOf(t)), r
				}

				function D(e, t) {
					if (!e) throw new Error("Period cannot be null or undefined");
					var r = a.default.DEFAULT_ID + "_" + t;
					return e.hasOwnProperty("id") && "__proto__" !== e.id && (r = e.id), r
				}

				function P(e, t) {
					var r = [];
					if (!e) return r;
					for (var n = 0; n < e.length; n++) {
						var s = new m.default;
						if (s.timescale = 1, s.representation = t, !e[n].hasOwnProperty("schemeIdUri")) throw new Error("Invalid EventStream. SchemeIdUri has to be set");
						s.schemeIdUri = e[n].schemeIdUri, e[n].hasOwnProperty("timescale") && (s.timescale = e[n].timescale), e[n].hasOwnProperty("value") && (s.value = e[n].value), r.push(s)
					}
					return r
				}
				return {
					getIsTypeOf: _,
					getIsAudio: v,
					getIsVideo: y,
					getIsText: function(e) {
						return _(e, "text")
					},
					getIsMuxed: T,
					getIsTextTrack: b,
					getIsFragmentedText: E,
					getIsMain: S,
					getLanguageForAdaptation: function(e) {
						var t = "";
						return e.hasOwnProperty("lang") && (t = e.lang.replace(/[^A-Za-z0-9-]/g, "")), t
					},
					getViewpointForAdaptation: function(e) {
						return e.hasOwnProperty("Viewpoint") ? e.Viewpoint : null
					},
					getRolesForAdaptation: j,
					getAccessibilityForAdaptation: function(e) {
						return e.hasOwnProperty("Accessibility_asArray") ? e.Accessibility_asArray : []
					},
					getAudioChannelConfigurationForAdaptation: function(e) {
						return e.hasOwnProperty("AudioChannelConfiguration_asArray") ? e.AudioChannelConfiguration_asArray : []
					},
					processAdaptation: R,
					getAdaptationForIndex: function(e, t, r) {
						return t.Period_asArray[r].AdaptationSet_asArray[e]
					},
					getIndexForAdaptation: function(e, t, r) {
						var n, s, i = t.Period_asArray[r].AdaptationSet_asArray;
						for (n = 0, s = i.length; n < s; n++)
							if (i[n] === e) return n;
						return -1
					},
					getAdaptationForId: function(e, t, r) {
						var n, s, i = t.Period_asArray[r].AdaptationSet_asArray;
						for (n = 0, s = i.length; n < s; n++)
							if (i[n].hasOwnProperty("id") && i[n].id === e) return i[n];
						return null
					},
					getAdaptationsForType: I,
					getAdaptationForType: function(e, t, s, i) {
						var a = I(e, t, s);
						if (!a || 0 === a.length) return null;
						if (a.length > 1 && i)
							for (var o = r.getCurrentTrackFor(s, i), u = n.getAllMediaInfoForType(e, i, s), l = 0, d = a.length; l < d; l++) {
								if (o && r.isTracksEqual(o, u[l])) return a[l];
								if (S(a[l])) return a[l]
							}
						return a[0]
					},
					getCodec: function(e) {
						var t = e.Representation_asArray[0];
						return t.mimeType + ';codecs="' + t.codecs + '"'
					},
					getMimeType: function(e) {
						return e.Representation_asArray[0].mimeType
					},
					getKID: function(e) {
						return e && e.hasOwnProperty("cenc:default_KID") ? e["cenc:default_KID"] : null
					},
					getContentProtectionData: function(e) {
						return e && e.hasOwnProperty("ContentProtection_asArray") && 0 !== e.ContentProtection_asArray.length ? e.ContentProtection_asArray : null
					},
					getIsDynamic: C,
					getIsDVR: function(e) {
						var t, r = C(e);
						return t = !isNaN(e.timeShiftBufferDepth), r && t
					},
					getIsOnDemand: function(e) {
						return A(e, "urn:mpeg:dash:profile:isoff-on-demand:2011")
					},
					getIsDVB: function(e) {
						return A(e, "urn:dvb:dash:profile:dvb-dash:2014")
					},
					getDuration: function(e) {
						return e.hasOwnProperty("mediaPresentationDuration") ? e.mediaPresentationDuration : Number.MAX_VALUE
					},
					getBandwidth: function(e) {
						return e.bandwidth
					},
					getManifestUpdatePeriod: function(e) {
						var t = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
							r = NaN;
						return e.hasOwnProperty("minimumUpdatePeriod") && (r = e.minimumUpdatePeriod), isNaN(r) ? r : Math.max(r - t, 1)
					},
					getRepresentationCount: function(e) {
						return e.Representation_asArray.length
					},
					getBitrateListForAdaptation: function(e) {
						if (!e || !e.Representation_asArray || !e.Representation_asArray.length) return null;
						for (var t = R(e).Representation_asArray, r = t.length, n = [], s = 0; s < r; s++) n.push({
							bandwidth: t[s].bandwidth,
							width: t[s].width || 0,
							height: t[s].height || 0
						});
						return n
					},
					getRepresentationFor: function(e, t) {
						return t.Representation_asArray[e]
					},
					getRepresentationsForAdaptation: function(e, r) {
						for (var n, i, a, o, u, l = R(e.Period_asArray[r.period.index].AdaptationSet_asArray[r.index]), d = [], c = 0; c < l.Representation_asArray.length; c++) o = l.Representation_asArray[c], (n = new s.default).index = c, n.adaptation = r, o.hasOwnProperty("id") && (n.id = o.id), o.hasOwnProperty("codecs") && (n.codecs = o.codecs), o.hasOwnProperty("codecPrivateData") && (n.codecPrivateData = o.codecPrivateData), o.hasOwnProperty("bandwidth") && (n.bandwidth = o.bandwidth), o.hasOwnProperty("width") && (n.width = o.width), o.hasOwnProperty("height") && (n.height = o.height), o.hasOwnProperty("maxPlayoutRate") && (n.maxPlayoutRate = o.maxPlayoutRate), o.hasOwnProperty("SegmentBase") ? (a = o.SegmentBase, n.segmentInfoType = "SegmentBase") : o.hasOwnProperty("SegmentList") ? (a = o.SegmentList).hasOwnProperty("SegmentTimeline") ? (n.segmentInfoType = "SegmentTimeline", (!(u = a.SegmentTimeline.S_asArray[a.SegmentTimeline.S_asArray.length - 1]).hasOwnProperty("r") || u.r >= 0) && (n.useCalculatedLiveEdgeTime = !0)) : (n.segmentInfoType = "SegmentList", n.useCalculatedLiveEdgeTime = !0) : o.hasOwnProperty("SegmentTemplate") ? ((a = o.SegmentTemplate).hasOwnProperty("SegmentTimeline") ? (n.segmentInfoType = "SegmentTimeline", (!(u = a.SegmentTimeline.S_asArray[a.SegmentTimeline.S_asArray.length - 1]).hasOwnProperty("r") || u.r >= 0) && (n.useCalculatedLiveEdgeTime = !0)) : n.segmentInfoType = "SegmentTemplate", a.hasOwnProperty("initialization") && (n.initialization = a.initialization.split("$Bandwidth$").join(o.bandwidth).split("$RepresentationID$").join(o.id))) : n.segmentInfoType = "BaseURL", a && (a.hasOwnProperty("Initialization") ? (i = a.Initialization).hasOwnProperty("sourceURL") ? n.initialization = i.sourceURL : i.hasOwnProperty("range") && (n.range = i.range) : o.hasOwnProperty("mimeType") && b(o.mimeType) && (n.range = 0), a.hasOwnProperty("timescale") && (n.timescale = a.timescale), a.hasOwnProperty("duration") && (n.segmentDuration = a.duration / n.timescale), a.hasOwnProperty("startNumber") && (n.startNumber = a.startNumber), a.hasOwnProperty("indexRange") && (n.indexRange = a.indexRange), a.hasOwnProperty("presentationTimeOffset") && (n.presentationTimeOffset = a.presentationTimeOffset / n.timescale)), n.MSETimeOffset = t.calcMSETimeOffset(n), n.path = [r.period.index, r.index, c], d.push(n);
						return d
					},
					getAdaptationsForPeriod: function(e, t) {
						for (var r, n, s = e.Period_asArray[t.index], a = [], o = 0; o < s.AdaptationSet_asArray.length; o++) n = s.AdaptationSet_asArray[o], r = new i.default, n.hasOwnProperty("id") && (r.id = n.id), r.index = o, r.period = t, T(n) ? r.type = "muxed" : v(n) ? r.type = "audio" : y(n) ? r.type = "video" : E(n) ? r.type = "fragmentedText" : r.type = "text", a.push(r);
						return a
					},
					getRegularPeriods: function(e, t) {
						var r, n, s = C(e),
							i = [],
							o = null,
							u = null,
							l = null,
							d = null;
						for (n = 0, r = e.Period_asArray.length; n < r; n++)(u = e.Period_asArray[n]).hasOwnProperty("start") ? (d = new a.default).start = u.start : null !== o && u.hasOwnProperty("duration") && null !== l ? ((d = new a.default).start = l.start + l.duration, d.duration = u.duration) : 0 !== n || s || ((d = new a.default).start = 0), null !== l && isNaN(l.duration) && (l.duration = d.start - l.start), null !== d && (d.id = D(u, n)), null !== d && u.hasOwnProperty("duration") && (d.duration = u.duration), null !== d && (d.index = n, d.mpd = t, i.push(d), o = u, l = d), u = null, d = null;
						return 0 === i.length ? i : (null !== l && isNaN(l.duration) && (l.duration = function(e, t) {
							var r = C(e),
								n = void 0;
							if (e.mediaPresentationDuration) n = e.mediaPresentationDuration;
							else if (t.duration) n = t.duration;
							else {
								if (!r) throw new Error("Must have @mediaPresentationDuratio on MPD or an explicit @duration on the last period.");
								n = Number.POSITIVE_INFINITY
							}
							return n
						}(e, l) - l.start), i)
					},
					getMpd: function(e) {
						var t = new o.default;
						return t.manifest = e, e.hasOwnProperty("availabilityStartTime") ? t.availabilityStartTime = new Date(e.availabilityStartTime.getTime()) : t.availabilityStartTime = new Date(e.loadedTime.getTime()), e.hasOwnProperty("availabilityEndTime") && (t.availabilityEndTime = new Date(e.availabilityEndTime.getTime())), e.hasOwnProperty("minimumUpdatePeriod") && (t.minimumUpdatePeriod = e.minimumUpdatePeriod), e.hasOwnProperty("mediaPresentationDuration") && (t.mediaPresentationDuration = e.mediaPresentationDuration), e.hasOwnProperty("suggestedPresentationDelay") && (t.suggestedPresentationDelay = e.suggestedPresentationDelay), e.hasOwnProperty("timeShiftBufferDepth") && (t.timeShiftBufferDepth = e.timeShiftBufferDepth), e.hasOwnProperty("maxSegmentDuration") && (t.maxSegmentDuration = e.maxSegmentDuration), t
					},
					getEventsForPeriod: function(e, t) {
						var r = e.Period_asArray[t.index].EventStream_asArray,
							n = [];
						if (r)
							for (var s = 0; s < r.length; s++) {
								var i = new m.default;
								if (i.period = t, i.timescale = 1, !r[s].hasOwnProperty("schemeIdUri")) throw new Error("Invalid EventStream. SchemeIdUri has to be set");
								i.schemeIdUri = r[s].schemeIdUri, r[s].hasOwnProperty("timescale") && (i.timescale = r[s].timescale), r[s].hasOwnProperty("value") && (i.value = r[s].value);
								for (var a = 0; a < r[s].Event_asArray.length; a++) {
									var o = new f.default;
									o.presentationTime = 0, o.eventStream = i, r[s].Event_asArray[a].hasOwnProperty("presentationTime") && (o.presentationTime = r[s].Event_asArray[a].presentationTime), r[s].Event_asArray[a].hasOwnProperty("duration") && (o.duration = r[s].Event_asArray[a].duration), r[s].Event_asArray[a].hasOwnProperty("id") && (o.id = r[s].Event_asArray[a].id), n.push(o)
								}
							}
						return n
					},
					getEventStreams: P,
					getEventStreamForAdaptationSet: function(e, t) {
						return t && e ? P(e.Period_asArray[t.period.index].AdaptationSet_asArray[t.index].InbandEventStream_asArray, null) : []
					},
					getEventStreamForRepresentation: function(e, t) {
						return P(e.Period_asArray[t.adaptation.period.index].AdaptationSet_asArray[t.adaptation.index].Representation_asArray[t.index].InbandEventStream_asArray, t)
					},
					getUTCTimingSources: function(e) {
						var t = C(e),
							r = e.hasOwnProperty("availabilityStartTime"),
							n = e.UTCTiming_asArray,
							s = [];
						return (t || r) && n && n.forEach((function(e) {
							var t = new u.default;
							e.hasOwnProperty("schemeIdUri") && (t.schemeIdUri = e.schemeIdUri, e.hasOwnProperty("value") && (t.value = e.value.toString(), s.push(t)))
						})), s
					},
					getBaseURLsFromElement: function(e) {
						var t = [],
							r = e.BaseURL_asArray || [e.baseUri],
							n = !1;
						return r.some((function(r) {
							if (r) {
								var s = new h.default,
									i = r.__text || r;
								return p.isRelative(i) && (n = !0, e.baseUri && (i = e.baseUri + i)), s.url = i, r.hasOwnProperty("serviceLocation") && r.serviceLocation.length ? s.serviceLocation = r.serviceLocation : s.serviceLocation = i, r.hasOwnProperty("dvb:priority") && (s.dvb_priority = r["dvb:priority"]), r.hasOwnProperty("dvb:weight") && (s.dvb_weight = r["dvb:weight"]), t.push(s), n
							}
						})), t
					},
					getRepresentationSortFunction: M,
					getLocation: function(e) {
						return e.hasOwnProperty("Location") && (e.Location = e.Location_asArray[0]), e.Location
					}
				}
			}
			_.__dashjs_factory_name = "DashManifestModel", t.default = p.default.getSingletonFactory(_), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/parser/DashParser.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/ErrorHandler.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				o = n(r("./node_modules/dashjs/build/es5/externals/objectiron.js")),
				u = n(r("./node_modules/dashjs/build/es5/externals/xml2json.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/dash/parser/matchers/StringMatcher.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/dash/parser/matchers/DurationMatcher.js")),
				c = n(r("./node_modules/dashjs/build/es5/src/dash/parser/matchers/DateTimeMatcher.js")),
				f = n(r("./node_modules/dashjs/build/es5/src/dash/parser/matchers/NumericMatcher.js")),
				h = n(r("./node_modules/dashjs/build/es5/src/dash/parser/maps/RepresentationBaseValuesMap.js")),
				m = n(r("./node_modules/dashjs/build/es5/src/dash/parser/maps/SegmentValuesMap.js"));

			function g() {
				var e, t = this.context,
					r = (0, a.default)(t).getInstance().log,
					n = (0, s.default)(t).getInstance(),
					i = void 0,
					g = void 0,
					p = void 0;
				return e = {
					parse: function(e, t) {
						var s;
						try {
							var a = window.performance.now();
							if (!(s = g.xml_str2json(e))) throw new Error("parser error");
							var o = window.performance.now();
							p.run(s);
							var u = window.performance.now();
							t.setMatchers(i), t.setIron(p), r("Parsing complete: ( xml2json: " + (o - a).toPrecision(3) + "ms, objectiron: " + (u - o).toPrecision(3) + "ms, total: " + ((u - a) / 1e3).toPrecision(3) + "s)")
						} catch (l) {
							return n.manifestError("parsing the manifest failed", "parse", e, l), null
						}
						return s
					}
				}, i = [new d.default, new c.default, new f.default, new l.default], g = new u.default({
					escapeMode: !1,
					attributePrefix: "",
					arrayAccessForm: "property",
					emptyNodeForm: "object",
					stripWhitespaces: !1,
					enableToStringFunc: !1,
					ignoreRoot: !0,
					matchers: i
				}), p = new o.default([new h.default, new m.default]), e
			}
			g.__dashjs_factory_name = "DashParser", t.default = i.default.getClassFactory(g), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/parser/maps/CommonProperty.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function() {
				function e(e, t) {
					for (var r = 0; r < t.length; r++) {
						var n = t[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
					}
				}
				return function(t, r, n) {
					return r && e(t.prototype, r), n && e(t, n), t
				}
			}();
			var s = function() {
				function e(t, r) {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e);
					var n;
					this._name = t, this._merge = void 0 !== r ? r : (n = t) && n.length && n.charAt(0) === n.charAt(0).toUpperCase()
				}
				return n(e, [{
					key: "name",
					get: function() {
						return this._name
					}
				}, {
					key: "merge",
					get: function() {
						return this._merge
					}
				}]), e
			}();
			t.default = s, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/parser/maps/MapNode.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function() {
				function e(e, t) {
					for (var r = 0; r < t.length; r++) {
						var n = t[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
					}
				}
				return function(t, r, n) {
					return r && e(t.prototype, r), n && e(t, n), t
				}
			}();
			var s, i = r("./node_modules/dashjs/build/es5/src/dash/parser/maps/CommonProperty.js"),
				a = (s = i) && s.__esModule ? s : {
					default: s
				},
				o = function() {
					function e(t, r, n, s, i) {
						var o = this;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, e), this._name = t || "", this._properties = [], this._children = n || [], this._isRoot = s || !1, this._isArray = i || !0, Array.isArray(r) && r.forEach((function(e) {
							o._properties.push(new a.default(e))
						}))
					}
					return n(e, [{
						key: "name",
						get: function() {
							return this._name
						}
					}, {
						key: "isRoot",
						get: function() {
							return this._isRoot
						}
					}, {
						key: "isArray",
						get: function() {
							return this._isArray
						}
					}, {
						key: "children",
						get: function() {
							return this._children
						}
					}, {
						key: "properties",
						get: function() {
							return this._properties
						}
					}]), e
				}();
			t.default = o, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/parser/maps/RepresentationBaseValuesMap.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function(e, t, r) {
				for (var n = !0; n;) {
					var s = e,
						i = t,
						a = r;
					n = !1, null === s && (s = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(s, i);
					if (void 0 !== o) {
						if ("value" in o) return o.value;
						var u = o.get;
						if (void 0 === u) return;
						return u.call(a)
					}
					var l = Object.getPrototypeOf(s);
					if (null === l) return;
					e = l, t = i, r = a, n = !0, o = l = void 0
				}
			};
			var s, i = r("./node_modules/dashjs/build/es5/src/dash/parser/maps/MapNode.js"),
				a = (s = i) && s.__esModule ? s : {
					default: s
				},
				o = function(e) {
					function t() {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var e = ["profiles", "width", "height", "sar", "frameRate", "audioSamplingRate", "mimeType", "segmentProfiles", "codecs", "maximumSAPPeriod", "startWithSAP", "maxPlayoutRate", "codingDependency", "scanType", "FramePacking", "AudioChannelConfiguration", "ContentProtection", "EssentialProperty", "SupplementalProperty", "InbandEventStream"];
						n(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, "AdaptationSet", e, [new a.default("Representation", e, [new a.default("SubRepresentation", e)])])
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), t
				}(a.default);
			t.default = o, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/parser/maps/SegmentValuesMap.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function(e, t, r) {
				for (var n = !0; n;) {
					var s = e,
						i = t,
						a = r;
					n = !1, null === s && (s = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(s, i);
					if (void 0 !== o) {
						if ("value" in o) return o.value;
						var u = o.get;
						if (void 0 === u) return;
						return u.call(a)
					}
					var l = Object.getPrototypeOf(s);
					if (null === l) return;
					e = l, t = i, r = a, n = !0, o = l = void 0
				}
			};
			var s, i = r("./node_modules/dashjs/build/es5/src/dash/parser/maps/MapNode.js"),
				a = (s = i) && s.__esModule ? s : {
					default: s
				},
				o = function(e) {
					function t() {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var e = ["SegmentBase", "SegmentTemplate", "SegmentList"];
						n(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, "Period", e, [new a.default("AdaptationSet", e, [new a.default("Representation", e)])])
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), t
				}(a.default);
			t.default = o, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/parser/matchers/BaseMatcher.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function() {
				function e(e, t) {
					for (var r = 0; r < t.length; r++) {
						var n = t[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
					}
				}
				return function(t, r, n) {
					return r && e(t.prototype, r), n && e(t, n), t
				}
			}();
			var s = function() {
				function e(t, r) {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this._test = t, this._converter = r
				}
				return n(e, [{
					key: "test",
					get: function() {
						return this._test
					}
				}, {
					key: "converter",
					get: function() {
						return this._converter
					}
				}]), e
			}();
			t.default = s, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/parser/matchers/DateTimeMatcher.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function(e, t, r) {
				for (var n = !0; n;) {
					var s = e,
						i = t,
						a = r;
					n = !1, null === s && (s = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(s, i);
					if (void 0 !== o) {
						if ("value" in o) return o.value;
						var u = o.get;
						if (void 0 === u) return;
						return u.call(a)
					}
					var l = Object.getPrototypeOf(s);
					if (null === l) return;
					e = l, t = i, r = a, n = !0, o = l = void 0
				}
			};
			var s, i = r("./node_modules/dashjs/build/es5/src/dash/parser/matchers/BaseMatcher.js"),
				a = (s = i) && s.__esModule ? s : {
					default: s
				},
				o = 60,
				u = 60,
				l = 1e3,
				d = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})(?::([0-9]*)(\.[0-9]*)?)?(?:([+-])([0-9]{2})(?::?)([0-9]{2}))?/,
				c = function(e) {
					function t() {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), n(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, (function(e) {
							return d.test(e.value)
						}), (function(e) {
							var t = d.exec(e),
								r = void 0;
							if (r = Date.UTC(parseInt(t[1], 10), parseInt(t[2], 10) - 1, parseInt(t[3], 10), parseInt(t[4], 10), parseInt(t[5], 10), t[6] && parseInt(t[6], 10) || 0, t[7] && parseFloat(t[7]) * l || 0), t[9] && t[10]) {
								var n = parseInt(t[9], 10) * u + parseInt(t[10], 10);
								r += ("+" === t[8] ? -1 : 1) * n * o * l
							}
							return new Date(r)
						}))
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), t
				}(a.default);
			t.default = c, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/parser/matchers/DurationMatcher.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function(e, t, r) {
				for (var n = !0; n;) {
					var s = e,
						i = t,
						a = r;
					n = !1, null === s && (s = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(s, i);
					if (void 0 !== o) {
						if ("value" in o) return o.value;
						var u = o.get;
						if (void 0 === u) return;
						return u.call(a)
					}
					var l = Object.getPrototypeOf(s);
					if (null === l) return;
					e = l, t = i, r = a, n = !0, o = l = void 0
				}
			};
			var s, i = r("./node_modules/dashjs/build/es5/src/dash/parser/matchers/BaseMatcher.js"),
				a = (s = i) && s.__esModule ? s : {
					default: s
				},
				o = /^([-])?P(([\d.]*)Y)?(([\d.]*)M)?(([\d.]*)D)?T?(([\d.]*)H)?(([\d.]*)M)?(([\d.]*)S)?/,
				u = 31536e3,
				l = 2592e3,
				d = 86400,
				c = 3600,
				f = 60,
				h = function(e) {
					function t() {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), n(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, (function(e) {
							for (var t = ["minBufferTime", "mediaPresentationDuration", "minimumUpdatePeriod", "timeShiftBufferDepth", "maxSegmentDuration", "maxSubsegmentDuration", "suggestedPresentationDelay", "start", "starttime", "duration"], r = t.length, n = 0; n < r; n++)
								if (e.nodeName === t[n]) return o.test(e.value);
							return !1
						}), (function(e) {
							var t = o.exec(e),
								r = parseFloat(t[2] || 0) * u + parseFloat(t[4] || 0) * l + parseFloat(t[6] || 0) * d + parseFloat(t[8] || 0) * c + parseFloat(t[10] || 0) * f + parseFloat(t[12] || 0);
							return void 0 !== t[1] && (r = -r), r
						}))
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), t
				}(a.default);
			t.default = h, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/parser/matchers/NumericMatcher.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function(e, t, r) {
				for (var n = !0; n;) {
					var s = e,
						i = t,
						a = r;
					n = !1, null === s && (s = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(s, i);
					if (void 0 !== o) {
						if ("value" in o) return o.value;
						var u = o.get;
						if (void 0 === u) return;
						return u.call(a)
					}
					var l = Object.getPrototypeOf(s);
					if (null === l) return;
					e = l, t = i, r = a, n = !0, o = l = void 0
				}
			};
			var s, i = r("./node_modules/dashjs/build/es5/src/dash/parser/matchers/BaseMatcher.js"),
				a = (s = i) && s.__esModule ? s : {
					default: s
				},
				o = /^[-+]?[0-9]+[.]?[0-9]*([eE][-+]?[0-9]+)?$/,
				u = function(e) {
					function t() {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), n(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, (function(e) {
							return o.test(e.value)
						}), (function(e) {
							return parseFloat(e)
						}))
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), t
				}(a.default);
			t.default = u, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/parser/matchers/StringMatcher.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function(e, t, r) {
				for (var n = !0; n;) {
					var s = e,
						i = t,
						a = r;
					n = !1, null === s && (s = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(s, i);
					if (void 0 !== o) {
						if ("value" in o) return o.value;
						var u = o.get;
						if (void 0 === u) return;
						return u.call(a)
					}
					var l = Object.getPrototypeOf(s);
					if (null === l) return;
					e = l, t = i, r = a, n = !0, o = l = void 0
				}
			};
			var s, i = r("./node_modules/dashjs/build/es5/src/dash/parser/matchers/BaseMatcher.js"),
				a = function(e) {
					function t() {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), n(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, (function(e, t) {
							var r = {
								MPD: ["id", "profiles"],
								Period: ["id"],
								BaseURL: ["serviceLocation", "byteRange"],
								SegmentBase: ["indexRange"],
								Initialization: ["range"],
								RepresentationIndex: ["range"],
								SegmentList: ["indexRange"],
								BitstreamSwitching: ["range"],
								SegmentURL: ["mediaRange", "indexRange"],
								SegmentTemplate: ["indexRange", "media", "index", "initialization", "bitstreamSwitching"],
								AssetIdentifier: ["value", "id"],
								EventStream: ["value"],
								AdaptationSet: ["profiles", "mimeType", "segmentProfiles", "codecs", "contentType"],
								FramePacking: ["value", "id"],
								AudioChannelConfiguration: ["value", "id"],
								ContentProtection: ["value", "id"],
								EssentialProperty: ["value", "id"],
								SupplementalProperty: ["value", "id"],
								InbandEventStream: ["value", "id"],
								Accessibility: ["value", "id"],
								Role: ["value", "id"],
								Rating: ["value", "id"],
								Viewpoint: ["value", "id"],
								ContentComponent: ["contentType"],
								Representation: ["id", "dependencyId", "mediaStreamStructureId"],
								Subset: ["id"],
								Metrics: ["metrics"],
								Reporting: ["value", "id"]
							};
							if (r.hasOwnProperty(t)) {
								var n = r[t];
								return void 0 !== n && n.indexOf(e.name) >= 0
							}
							return !1
						}), (function(e) {
							return String(e)
						}))
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), t
				}(((s = i) && s.__esModule ? s : {
					default: s
				}).default);
			t.default = a, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/utils/FragmentedTextBoxParser.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				};

			function a() {
				var e = void 0;
				return {
					getSamplesInfo: function(t) {
						var r, n, s, i, a, o, u, l, d, c, f = e.parse(t),
							h = f.getBox("tfhd"),
							m = f.getBox("tfdt"),
							g = f.getBox("trun"),
							p = f.getBox("moof"),
							_ = f.getBox("mfhd"),
							v = f.getBox("subs");
						c = _.sequence_number, n = g.sample_count, i = m.baseMediaDecodeTime, d = (h.base_data_offset || 0) + (g.data_offset || 0), a = [];
						var y = -1,
							E = -1;
						for (u = 0; u < n; u++) {
							r = void 0 !== (o = g.samples[u]).sample_duration ? o.sample_duration : h.default_sample_duration, s = void 0 !== o.sample_size ? o.sample_size : h.default_sample_size;
							var T = {
								dts: i,
								cts: i + (void 0 !== o.sample_composition_time_offset ? o.sample_composition_time_offset : 0),
								duration: r,
								offset: p.offset + d,
								size: s,
								subSizes: [s]
							};
							if (v && (y < v.entry_count && u > E && (y++, E += v.entries[y].sample_delta), u == E)) {
								T.subSizes = [];
								var b = v.entries[y];
								for (l = 0; l < b.subsample_count; l++) T.subSizes.push(b.subsamples[l].subsample_size)
							}
							a.push(T), d += s, i += r
						}
						return {
							sampleList: a,
							sequenceNumber: c,
							totalDuration: i - m.baseMediaDecodeTime
						}
					},
					getMediaTimescaleFromMoov: function(t) {
						var r = e.parse(t).getBox("mdhd");
						return r ? r.timescale : NaN
					},
					setConfig: function(t) {
						t && t.boxParser && (e = t.boxParser)
					}
				}
			}
			a.__dashjs_factory_name = "FragmentedTextBoxParser", t.default = i.default.getSingletonFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/utils/ListSegmentsGetter.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				},
				a = r("./node_modules/dashjs/build/es5/src/dash/utils/SegmentsUtils.js");

			function o(e, t) {
				var r = e.timelineConverter;
				return {
					getSegments: function(e, n, s, i) {
						var o, u, l, d, c, f, h, m = e.adaptation.period.mpd.manifest.Period_asArray[e.adaptation.period.index].AdaptationSet_asArray[e.adaptation.index].Representation_asArray[e.index].SegmentList,
							g = m.SegmentURL_asArray.length,
							p = [];
						for (h = e.startNumber, d = (0, a.decideSegmentListRangeForTemplate)(r, t, e, n, s, i), c = Math.max(d.start, 0), f = Math.min(d.end, m.SegmentURL_asArray.length - 1), o = c; o <= f; o++) l = m.SegmentURL_asArray[o], (u = (0, a.getIndexBasedSegment)(r, t, e, o)).replacementTime = (h + o - 1) * e.segmentDuration, u.media = l.media ? l.media : "", u.mediaRange = l.mediaRange, u.index = l.index, u.indexRange = l.indexRange, p.push(u), u = null;
						return e.availableSegmentsNumber = g, p
					}
				}
			}
			o.__dashjs_factory_name = "ListSegmentsGetter";
			var u = i.default.getClassFactory(o);
			t.default = u, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/utils/SegmentsGetter.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/dash/utils/TimelineSegmentsGetter.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/dash/utils/TemplateSegmentsGetter.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/dash/utils/ListSegmentsGetter.js"));

			function u(e, t) {
				var r, n = this.context,
					s = void 0,
					u = void 0,
					l = void 0;
				return r = {
					getSegments: function(e, t, r, n, i) {
						var a, o = e.segmentInfoType;
						return "SegmentBase" !== o && "BaseURL" !== o && function(e, t) {
							var r, n, s = e.segments,
								i = !1;
							s && 0 !== s.length ? (n = s[0].availabilityIdx, r = s[s.length - 1].availabilityIdx, i = t < n || t > r) : i = !0;
							return i
						}(e, r) ? ("SegmentTimeline" === o ? a = s.getSegments(e, t, r, i) : "SegmentTemplate" === o ? a = u.getSegments(e, t, r, i) : "SegmentList" === o && (a = l.getSegments(e, t, r, i)), n && n(e, a)) : a = e.segments, a
					}
				}, s = (0, i.default)(n).create(e, t), u = (0, a.default)(n).create(e, t), l = (0, o.default)(n).create(e, t), r
			}
			u.__dashjs_factory_name = "SegmentsGetter";
			var l = s.default.getClassFactory(u);
			t.default = l, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/utils/SegmentsUtils.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.replaceTokenForTemplate = u, t.getIndexBasedSegment = function(e, t, r, n) {
				var s, a, u, l;
				a = r.segmentDuration, isNaN(a) && (a = r.adaptation.period.duration);
				return u = r.adaptation.period.start + n * a, l = u + a, (s = new i.default).representation = r, s.duration = a, s.presentationStartTime = u, s.mediaStartTime = e.calcMediaTimeFromPresentationTime(s.presentationStartTime, r), s.availabilityStartTime = e.calcAvailabilityStartTimeFromPresentationTime(s.presentationStartTime, r.adaptation.period.mpd, t), s.availabilityEndTime = e.calcAvailabilityEndTimeFromPresentationTime(l, r.adaptation.period.mpd, t), s.wallStartTime = e.calcWallTimeForSegment(s, t), s.replacementNumber = o(s, n), s.availabilityIdx = n, s
			}, t.getTimeBasedSegment = function(e, t, r, n, s, a, l, d, c) {
				var f, h, m, g = n / a,
					p = Math.min(s / a, r.adaptation.period.mpd.maxSegmentDuration);
				return f = e.calcPresentationTimeFromMediaTime(g, r), h = f + p, (m = new i.default).representation = r, m.duration = p, m.mediaStartTime = g, m.presentationStartTime = f, m.availabilityStartTime = r.adaptation.period.mpd.manifest.loadedTime, m.availabilityEndTime = e.calcAvailabilityEndTimeFromPresentationTime(h, r.adaptation.period.mpd, t), m.wallStartTime = e.calcWallTimeForSegment(m, t), m.replacementTime = n, m.replacementNumber = o(m, c), l = u(l, "Number", m.replacementNumber), l = u(l, "Time", m.replacementTime), m.media = l, m.mediaRange = d, m.availabilityIdx = c, m
			}, t.getSegmentByIndex = l, t.decideSegmentListRangeForTimeline = function(e, t, r, n, s) {
				var i, a, o = s || 10,
					u = Number.POSITIVE_INFINITY;
				if (t && !e.isTimeSyncCompleted()) return {
					start: 0,
					end: u
				};
				return !t && r || n < 0 ? null : (i = Math.max(n - 2, 0), a = Math.min(n + o, u), {
					start: i,
					end: a
				})
			}, t.decideSegmentListRangeForTemplate = function(e, t, r, n, s, i) {
				var a, o, u = r.segmentDuration,
					d = r.adaptation.period.mpd.manifest.minBufferTime,
					c = r.segmentAvailabilityRange,
					f = {
						start: e.calcPeriodRelativeTimeFromMpdRelativeTime(r, c.start),
						end: e.calcPeriodRelativeTimeFromMpdRelativeTime(r, c.end)
					},
					h = r.segments,
					m = 2 * u,
					g = i || Math.max(2 * d, 10 * u),
					p = NaN,
					_ = null;
				if (f.start = Math.max(f.start, 0), t && !e.isTimeSyncCompleted()) return a = Math.floor(f.start / u), o = Math.floor(f.end / u), {
					start: a,
					end: o
				};
				h && h.length > 0 ? (_ = l(s, r), p = _ ? e.calcPeriodRelativeTimeFromMpdRelativeTime(r, _.presentationStartTime) : s > 0 ? s * u : e.calcPeriodRelativeTimeFromMpdRelativeTime(r, n)) : p = s > 0 ? s * u : t ? f.end : f.start;
				return a = Math.floor(Math.max(p - m, f.start) / u), o = Math.floor(Math.min(a + g / u, f.end / u)), {
					start: a,
					end: o
				}
			};
			var n, s = r("./node_modules/dashjs/build/es5/src/dash/vo/Segment.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				};

			function a(e, t) {
				for (; e.length < t;) e = "0" + e;
				return e
			}

			function o(e, t) {
				return e.representation.startNumber + t
			}

			function u(e, t, r) {
				var n, s, i, o, u, l, d = t.length,
					c = "%0".length;
				if (!e) return e;
				for (;;) {
					if ((n = e.indexOf("$" + t)) < 0) return e;
					if ((s = e.indexOf("$", n + d)) < 0) return e;
					if ((i = e.indexOf("%0", n + d)) > n && i < s) switch (o = e.charAt(s - 1), u = parseInt(e.substring(i + c, s - 1), 10), o) {
						case "d":
						case "i":
						case "u":
							l = a(r.toString(), u);
							break;
						case "x":
							l = a(r.toString(16), u);
							break;
						case "X":
							l = a(r.toString(16), u).toUpperCase();
							break;
						case "o":
							l = a(r.toString(8), u);
							break;
						default:
							return e
					} else l = r;
					e = e.substring(0, n) + l + e.substring(s + 1)
				}
			}

			function l(e, t) {
				if (!t || !t.segments) return null;
				var r, n, s = t.segments.length;
				if (e < s && (r = t.segments[e]) && r.availabilityIdx === e) return r;
				for (n = 0; n < s; n++)
					if ((r = t.segments[n]) && r.availabilityIdx === e) return r;
				return null
			}
		},
		"./node_modules/dashjs/build/es5/src/dash/utils/TemplateSegmentsGetter.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				},
				a = r("./node_modules/dashjs/build/es5/src/dash/utils/SegmentsUtils.js");

			function o(e, t) {
				var r = e.timelineConverter;
				return {
					getSegments: function(e, n, s, i) {
						var o, u, l, d, c, f = e.adaptation.period.mpd.manifest.Period_asArray[e.adaptation.period.index].AdaptationSet_asArray[e.adaptation.index].Representation_asArray[e.index].SegmentTemplate,
							h = e.segmentDuration,
							m = e.segmentAvailabilityRange,
							g = [],
							p = null,
							_ = null;
						for (c = e.startNumber, l = (o = isNaN(h) && !t ? {
								start: c,
								end: c
							} : (0, a.decideSegmentListRangeForTemplate)(r, t, e, n, s, i)).start, d = o.end, u = l; u <= d; u++)(_ = (0, a.getIndexBasedSegment)(r, t, e, u)).replacementTime = (c + u - 1) * e.segmentDuration, p = f.media, p = (0, a.replaceTokenForTemplate)(p, "Number", _.replacementNumber), p = (0, a.replaceTokenForTemplate)(p, "Time", _.replacementTime), _.media = p, g.push(_), _ = null;
						return isNaN(h) ? e.availableSegmentsNumber = 1 : e.availableSegmentsNumber = Math.ceil((m.end - m.start) / h), g
					}
				}
			}
			o.__dashjs_factory_name = "TemplateSegmentsGetter";
			var u = i.default.getClassFactory(o);
			t.default = u, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/utils/TimelineConverter.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function o() {
				var e = this.context,
					t = (0, s.default)(e).getInstance(),
					r = void 0,
					n = void 0,
					a = void 0;

				function o(e) {
					r = e
				}

				function u(e, t, n, s) {
					return s ? n && t.timeShiftBufferDepth != Number.POSITIVE_INFINITY ? new Date(t.availabilityStartTime.getTime() + 1e3 * (e + t.timeShiftBufferDepth)) : t.availabilityEndTime : n ? new Date(t.availabilityStartTime.getTime() + 1e3 * (e - r)) : t.availabilityStartTime
				}

				function l(e, t) {
					return (e.getTime() - t.mpd.availabilityStartTime.getTime() + 1e3 * r) / 1e3
				}

				function d(e) {
					n || void 0 !== e.offset && (o(e.offset / 1e3), n = !0)
				}
				return {
					initialize: function() {
						r = 0, n = !1, a = NaN, t.on(i.default.TIME_SYNCHRONIZATION_COMPLETED, d, this)
					},
					isTimeSyncCompleted: function() {
						return n
					},
					setTimeSyncCompleted: function(e) {
						n = e
					},
					getClientTimeOffset: function() {
						return r
					},
					setClientTimeOffset: o,
					getExpectedLiveEdge: function() {
						return a
					},
					setExpectedLiveEdge: function(e) {
						a = e
					},
					calcAvailabilityStartTimeFromPresentationTime: function(e, t, r) {
						return u.call(this, e, t, r)
					},
					calcAvailabilityEndTimeFromPresentationTime: function(e, t, r) {
						return u.call(this, e, t, r, !0)
					},
					calcPresentationTimeFromWallTime: l,
					calcPresentationTimeFromMediaTime: function(e, t) {
						return e + (t.adaptation.period.start - t.presentationTimeOffset)
					},
					calcPeriodRelativeTimeFromMpdRelativeTime: function(e, t) {
						return t - e.adaptation.period.start
					},
					calcMpdRelativeTimeFromPeriodRelativeTime: function(e, t) {
						return t + e.adaptation.period.start
					},
					calcMediaTimeFromPresentationTime: function(e, t) {
						return e - t.adaptation.period.start + t.presentationTimeOffset
					},
					calcSegmentAvailabilityRange: function(e, t) {
						var r = e.adaptation.period,
							s = {
								start: r.start,
								end: r.start + r.duration
							};
						if (!t) return s;
						if (!n && e.segmentAvailabilityRange) return e.segmentAvailabilityRange;
						var i = e.segmentDuration || (e.segments && e.segments.length ? e.segments[e.segments.length - 1].duration : 0),
							a = l(new Date, r),
							o = r.start + r.duration;
						return s.start = Math.max(a - r.mpd.timeShiftBufferDepth, r.start), s.end = a >= o && a - i < o ? o - i : a - i, s
					},
					calcWallTimeForSegment: function(e, t) {
						var r, n, s;
						return t && (r = e.representation.adaptation.period.mpd.suggestedPresentationDelay, n = e.presentationStartTime + r, s = new Date(e.availabilityStartTime.getTime() + 1e3 * n)), s
					},
					calcMSETimeOffset: function(e) {
						var t = e.presentationTimeOffset;
						return e.adaptation.period.start - t
					},
					reset: function() {
						t.off(i.default.TIME_SYNCHRONIZATION_COMPLETED, d, this), r = 0, n = !1, a = NaN
					}
				}
			}
			o.__dashjs_factory_name = "TimelineConverter", t.default = a.default.getSingletonFactory(o), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/utils/TimelineSegmentsGetter.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				},
				a = r("./node_modules/dashjs/build/es5/src/dash/utils/SegmentsUtils.js");

			function o(e, t) {
				var r = e.timelineConverter;
				return {
					getSegments: function(e, n, s, i) {
						var o, u, l, d, c, f, h, m, g, p, _, v, y, E, T = e.adaptation.period.mpd.manifest.Period_asArray[e.adaptation.period.index].AdaptationSet_asArray[e.adaptation.index].Representation_asArray[e.index].SegmentTemplate || e.adaptation.period.mpd.manifest.Period_asArray[e.adaptation.period.index].AdaptationSet_asArray[e.adaptation.index].Representation_asArray[e.index].SegmentList,
							b = T.SegmentTimeline,
							j = T.SegmentURL_asArray,
							S = e.availableSegmentsNumber > 0,
							M = 0,
							R = 0,
							I = -1,
							C = [],
							A = !1,
							D = function(n, s) {
								var i = T.media,
									o = n.mediaRange;
								return j && (i = j[s].media || "", o = j[s].mediaRange), (0, a.getTimeBasedSegment)(r, t, e, M, n.d, E, i, o, I)
							};
						for (E = e.timescale, o = b.S_asArray, (g = (0, a.decideSegmentListRangeForTimeline)(r, t, n, s, i)) ? (v = g.start, y = g.end) : _ = r.calcMediaTimeFromPresentationTime(n || 0, e), l = 0, d = o.length; l < d; l++) {
							if (f = 0, (u = o[l]).hasOwnProperty("r") && (f = u.r), u.hasOwnProperty("t") && (R = (M = u.t) / E), f < 0) {
								if ((m = o[l + 1]) && m.hasOwnProperty("t")) h = m.t / E;
								else {
									var P = e.segmentAvailabilityRange ? e.segmentAvailabilityRange.end : r.calcSegmentAvailabilityRange(e, t).end;
									h = r.calcMediaTimeFromPresentationTime(P, e), e.segmentDuration = u.d / E
								}
								f = Math.ceil((h - R) / (u.d / E)) - 1
							}
							if (p) {
								if (S) break;
								I += f + 1
							} else
								for (c = 0; c <= f; c++) {
									if (I++, g) {
										if (I > y) {
											if (p = !0, S) break;
											continue
										}
										I >= v && C.push(D(u, I))
									} else {
										if (C.length > 10) {
											if (p = !0, S) break;
											continue
										}
										A ? C.push(D(u, I)) : R >= _ - u.d / E * 1.5 && (A = !0, C.push(D(u, I)))
									}
									R = (M += u.d) / E
								}
						}
						return S || (e.availableSegmentsNumber = I + 1), C
					}
				}
			}
			o.__dashjs_factory_name = "TimelineSegmentsGetter";
			var u = i.default.getClassFactory(o);
			t.default = u, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/vo/AdaptationSet.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.period = null, this.index = -1, this.type = null
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/vo/BaseURL.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function e(t, r, n, s) {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.url = t || "", this.serviceLocation = r || t || "", this.dvb_priority = n || 1, this.dvb_weight = s || 1
			};
			n.DEFAULT_DVB_PRIORITY = 1, n.DEFAULT_DVB_WEIGHT = 1, t.default = n, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/vo/Event.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.duration = NaN, this.presentationTime = NaN, this.id = NaN, this.messageData = "", this.eventStream = null, this.presentationTimeDelta = NaN
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/vo/EventStream.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.adaptionSet = null, this.representation = null, this.period = null, this.timescale = 1, this.value = "", this.schemeIdUri = ""
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/vo/Mpd.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.manifest = null, this.suggestedPresentationDelay = 0, this.availabilityStartTime = null, this.availabilityEndTime = Number.POSITIVE_INFINITY, this.timeShiftBufferDepth = Number.POSITIVE_INFINITY, this.maxSegmentDuration = Number.POSITIVE_INFINITY, this.minimumUpdatePeriod = NaN, this.mediaPresentationDuration = NaN
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/vo/Period.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.id = null, this.index = -1, this.duration = NaN, this.start = NaN, this.mpd = null
			};
			n.DEFAULT_ID = "defaultId", t.default = n, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/vo/Representation.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function() {
				function e(e, t) {
					for (var r = 0; r < t.length; r++) {
						var n = t[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
					}
				}
				return function(t, r, n) {
					return r && e(t.prototype, r), n && e(t, n), t
				}
			}();
			var s = function() {
				function e() {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this.id = null, this.index = -1, this.adaptation = null, this.segmentInfoType = null, this.initialization = null, this.codecs = null, this.codecPrivateData = null, this.segmentDuration = NaN, this.timescale = 1, this.startNumber = 1, this.indexRange = null, this.range = null, this.presentationTimeOffset = 0, this.MSETimeOffset = NaN, this.segmentAvailabilityRange = null, this.availableSegmentsNumber = 0, this.bandwidth = NaN, this.width = NaN, this.height = NaN, this.maxPlayoutRate = NaN
				}
				return n(e, null, [{
					key: "hasInitialization",
					value: function(e) {
						return null !== e.initialization || ("BaseURL" !== e.segmentInfoType || "SegmentBase" !== e.segmentInfoType) && null !== e.range
					}
				}, {
					key: "hasSegments",
					value: function(e) {
						return "BaseURL" !== e.segmentInfoType && "SegmentBase" !== e.segmentInfoType && !e.indexRange
					}
				}]), e
			}();
			t.default = s, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/vo/Segment.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.indexRange = null, this.index = null, this.mediaRange = null, this.media = null, this.duration = NaN, this.replacementTime = null, this.replacementNumber = NaN, this.mediaStartTime = NaN, this.presentationStartTime = NaN, this.availabilityStartTime = NaN, this.availabilityEndTime = NaN, this.availabilityIdx = NaN, this.wallStartTime = NaN, this.representation = null
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/dash/vo/UTCTiming.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.schemeIdUri = "", this.value = ""
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/FragmentLoader.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/XHRLoader.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/HeadRequest.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/Error.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				d = 1,
				c = 2,
				f = "request is null";

			function h(e) {
				var t = this.context,
					r = (0, o.default)(t).getInstance(),
					n = void 0,
					l = void 0;
				return n = {
					checkForExistence: function(e) {
						var t = function(t) {
							r.trigger(u.default.CHECK_FOR_EXISTENCE_COMPLETED, {
								request: e,
								exists: t
							})
						};
						if (e) {
							var n = new i.default(e.url);
							l.load({
								request: n,
								success: function() {
									t(!0)
								},
								error: function() {
									t(!1)
								}
							})
						} else t(!1)
					},
					load: function(e) {
						var t = function(t, s) {
							r.trigger(u.default.LOADING_COMPLETED, {
								request: e,
								response: t || null,
								error: s || null,
								sender: n
							})
						};
						e ? l.load({
							request: e,
							progress: function() {
								r.trigger(u.default.LOADING_PROGRESS, {
									request: e
								})
							},
							success: function(e) {
								t(e)
							},
							error: function(e, r, n) {
								t(void 0, new a.default(d, n, r))
							}
						}) : t(void 0, new a.default(c, f))
					},
					abort: function() {
						l && l.abort()
					},
					reset: function() {
						l && (l.abort(), l = null)
					}
				}, l = (0, s.default)(t).create({
					errHandler: e.errHandler,
					metricsModel: e.metricsModel,
					requestModifier: e.requestModifier
				}), n
			}
			h.__dashjs_factory_name = "FragmentLoader";
			var m = l.default.getClassFactory(h);
			m.FRAGMENT_LOADER_ERROR_LOADING_FAILURE = d, m.FRAGMENT_LOADER_ERROR_NULL_REQUEST = c, t.default = m, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/ManifestLoader.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/XlinkController.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/XHRLoader.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/URLUtils.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/ErrorHandler.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/TextRequest.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/Error.js")),
				d = r("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js"),
				c = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				f = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				h = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				m = n(r("./node_modules/dashjs/build/es5/src/dash/parser/DashParser.js")),
				g = 1,
				p = 2,
				_ = "parsing failed";

			function v(e) {
				var t = this.context,
					r = (0, c.default)(t).getInstance(),
					n = (0, a.default)(t).getInstance(),
					h = (0, o.default)(t).getInstance(),
					v = void 0,
					y = void 0,
					E = void 0,
					T = void 0,
					b = e.mssHandler;

				function j(e) {
					r.trigger(f.default.INTERNAL_MANIFEST_LOADED, {
						manifest: e.manifest
					})
				}
				return v = {
					load: function(e) {
						var s = new u.default(e, d.HTTPRequest.MPD_TYPE);
						y.load({
							request: s,
							success: function(s, i, a) {
								var o, u;
								if (a.responseURL && a.responseURL !== e ? (u = n.parseBaseUrl(a.responseURL), o = a.responseURL) : (n.isRelative(e) && (e = n.resolve(e, window.location.href)), u = n.parseBaseUrl(e)), null === T && (T = function(e) {
										var r = null;
										return e.indexOf("SmoothStreamingMedia") > -1 ? (b ? (r = b.createMssParser(), b.registerEvents()) : h.manifestError("manifest type unsupported", "createParser"), r) : e.indexOf("MPD") > -1 ? (0, m.default)(t).create() : r
									}(s)), null !== T) {
									var d = T.parse(s, E);
									d ? (d.url = o || e, d.originalUrl || (d.originalUrl = d.url), d.baseUri = u, d.loadedTime = new Date, E.resolveManifestOnLoad(d)) : r.trigger(f.default.INTERNAL_MANIFEST_LOADED, {
										manifest: null,
										error: new l.default(g, _)
									})
								} else r.trigger(f.default.INTERNAL_MANIFEST_LOADED, {
									manifest: null,
									error: new l.default(g, "Failed detecting manifest type: " + e)
								})
							},
							error: function(t, n, s) {
								r.trigger(f.default.INTERNAL_MANIFEST_LOADED, {
									manifest: null,
									error: new l.default(p, "Failed loading manifest: " + e + ", " + s)
								})
							}
						})
					},
					reset: function() {
						r.off(f.default.XLINK_READY, j, v), E && (E.reset(), E = null), y && (y.abort(), y = null), b && b.reset()
					}
				}, r.on(f.default.XLINK_READY, j, v), y = (0, i.default)(t).create({
					errHandler: e.errHandler,
					metricsModel: e.metricsModel,
					requestModifier: e.requestModifier
				}), E = (0, s.default)(t).create({
					errHandler: e.errHandler,
					metricsModel: e.metricsModel,
					requestModifier: e.requestModifier
				}), T = null, v
			}
			v.__dashjs_factory_name = "ManifestLoader";
			var y = h.default.getClassFactory(v);
			y.MANIFEST_LOADER_ERROR_PARSING_FAILURE = g, y.MANIFEST_LOADER_ERROR_LOADING_FAILURE = p, t.default = y, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/ManifestUpdater.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/models/MediaPlayerModel.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js"));

			function l() {
				var e = this.context,
					t = (0, u.default)(e).getInstance().log,
					r = (0, s.default)(e).getInstance(),
					n = void 0,
					a = void 0,
					l = void 0,
					d = void 0,
					c = void 0,
					f = void 0,
					h = void 0,
					m = void 0;

				function g() {
					null !== a && (clearInterval(a), a = null)
				}

				function p() {
					g(), isNaN(n) || (t("Refresh manifest in " + n + " seconds."), a = setTimeout(y, 1e3 * n))
				}

				function _() {
					d = !0;
					var e = f.getValue(),
						t = e.url,
						r = h.getLocation(e);
					r && (t = r), c.load(t)
				}

				function v(e) {
					f.setValue(e);
					var s = new Date,
						a = (s.getTime() - e.loadedTime.getTime()) / 1e3;
					n = h.getManifestUpdatePeriod(e, a), r.trigger(i.default.MANIFEST_UPDATED, {
						manifest: e
					}), t("Manifest has been refreshed at " + s + "[" + s.getTime() / 1e3 + "] "), l || p()
				}

				function y() {
					l && !m.getScheduleWhilePaused() || d || _()
				}

				function E(e) {
					e.error || v(e.manifest)
				}

				function T() {
					l = !1, p()
				}

				function b() {
					l = !0, g()
				}

				function j() {
					d = !1
				}
				return {
					initialize: function(t) {
						c = t, n = NaN, a = null, d = !1, l = !0, m = (0, o.default)(e).getInstance(), r.on(i.default.STREAMS_COMPOSED, j, this), r.on(i.default.PLAYBACK_STARTED, T, this), r.on(i.default.PLAYBACK_PAUSED, b, this), r.on(i.default.INTERNAL_MANIFEST_LOADED, E, this)
					},
					setManifest: function(e) {
						v(e)
					},
					getManifestLoader: function() {
						return c
					},
					refreshManifest: _,
					setConfig: function(e) {
						e && (e.manifestModel && (f = e.manifestModel), e.dashManifestModel && (h = e.dashManifestModel))
					},
					reset: function() {
						r.off(i.default.PLAYBACK_STARTED, T, this), r.off(i.default.PLAYBACK_PAUSED, b, this), r.off(i.default.STREAMS_COMPOSED, j, this), r.off(i.default.INTERNAL_MANIFEST_LOADED, E, this), g(), l = !0, d = !1, n = NaN, m = null
					}
				}
			}
			l.__dashjs_factory_name = "ManifestUpdater", t.default = a.default.getSingletonFactory(l), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/MediaPlayer.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/dash/vo/UTCTiming.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/PlaybackController.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/StreamController.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/MediaController.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/streaming/ManifestLoader.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/LiveEdgeFinder.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/ErrorHandler.js")),
				c = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/Capabilities.js")),
				f = n(r("./node_modules/dashjs/build/es5/src/streaming/text/TextTracks.js")),
				h = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/SourceBufferController.js")),
				m = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/RequestModifier.js")),
				g = n(r("./node_modules/dashjs/build/es5/src/streaming/text/TextController.js")),
				p = n(r("./node_modules/dashjs/build/es5/src/streaming/models/URIQueryAndFragmentModel.js")),
				_ = n(r("./node_modules/dashjs/build/es5/src/streaming/models/ManifestModel.js")),
				v = n(r("./node_modules/dashjs/build/es5/src/streaming/models/MediaPlayerModel.js")),
				y = n(r("./node_modules/dashjs/build/es5/src/streaming/models/MetricsModel.js")),
				E = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/AbrController.js")),
				T = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/TimeSyncController.js")),
				b = n(r("./node_modules/dashjs/build/es5/src/streaming/rules/abr/ABRRulesCollection.js")),
				j = n(r("./node_modules/dashjs/build/es5/src/streaming/models/VideoModel.js")),
				S = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/MediaSourceController.js")),
				M = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/BaseURLController.js")),
				R = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				I = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				C = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				A = n(r("./node_modules/dashjs/build/es5/src/streaming/MediaPlayerEvents.js")),
				D = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				P = r("./node_modules/dashjs/build/es5/src/core/Version.js"),
				w = n(r("./node_modules/dashjs/build/es5/src/dash/DashAdapter.js")),
				O = n(r("./node_modules/dashjs/build/es5/src/dash/models/DashManifestModel.js")),
				x = n(r("./node_modules/dashjs/build/es5/src/dash/DashMetrics.js")),
				F = n(r("./node_modules/dashjs/build/es5/src/dash/utils/TimelineConverter.js"));

			function N() {
				var e, t = "You must first call play() to init playback before calling this method",
					r = "You must first call attachView() to set the video element before calling this method",
					n = "You must first call attachSource() with a valid source before calling this method",
					N = "MediaPlayer not initialized!",
					L = this.context,
					B = (0, I.default)(L).getInstance(),
					k = (0, R.default)(L).getInstance(),
					U = k.log,
					K = void 0,
					H = void 0,
					q = void 0,
					Y = void 0,
					z = void 0,
					V = void 0,
					G = void 0,
					W = void 0,
					Q = void 0,
					X = void 0,
					J = void 0,
					Z = void 0,
					$ = void 0,
					ee = void 0,
					te = void 0,
					re = void 0,
					ne = void 0,
					se = void 0,
					ie = void 0,
					ae = void 0,
					oe = void 0;

				function ue() {
					return !!ae && !!K
				}

				function le() {
					if (!Y) throw t;
					return ne.isPaused()
				}

				function de(e) {
					var t = Ae();
					if (!t) return 0;
					var r = t.range.start + e;
					return r > t.range.end && (r = t.range.end), r
				}

				function ce(e) {
					if (!Y) throw t;
					var r = be().currentTime;
					if (void 0 !== e) r = re.getTimeRelativeToStreamId(r, e);
					else if (ne.getIsDynamic()) {
						var n = Ae();
						r = null === n ? 0 : fe() - (n.range.end - n.time)
					}
					return r
				}

				function fe() {
					if (!Y) throw t;
					var e = be().duration;
					if (ne.getIsDynamic()) {
						var r, n = Ae();
						if (!n) return 0;
						e = (r = n.range.end - n.range.start) < n.manifestInfo.DVRWindowSize ? r : n.manifestInfo.DVRWindowSize
					}
					return e
				}

				function he() {
					return (0, P.getVersionString)()
				}

				function me(e) {
					z = e
				}

				function ge() {
					return se
				}

				function pe(e) {
					return Z.getReadOnlyMetricsFor(e)
				}

				function _e(e) {
					if (!Y) throw t;
					var r = re.getActiveStreamInfo();
					return r ? G.getTracksFor(e, r) : []
				}

				function ve(e, t) {
					ye(e, t);
					var r = new s.default;
					r.schemeIdUri = e, r.value = t, $.getUTCTimingSources().push(r)
				}

				function ye(e, t) {
					var r = $.getUTCTimingSources();
					r.forEach((function(n, s) {
						n.schemeIdUri === e && n.value === t && r.splice(s, 1)
					}))
				}

				function Ee() {
					ve(v.default.DEFAULT_UTC_TIMING_SOURCE.scheme, v.default.DEFAULT_UTC_TIMING_SOURCE.value)
				}

				function Te(e, t) {
					$.setXHRWithCredentialsForType(e, t)
				}

				function be() {
					if (!ae) throw r;
					return ae.getElement()
				}

				function je(e) {
					if (!q) throw N;
					ae = null, e && ((ae = (0, j.default)(L).getInstance()).initialize(), ae.setElement(e), Ce(), function() {
						if (Q) return Q;
						var e = dashjs.MetricsReporting;
						if ("function" == typeof e) {
							var t = e(L).create();
							return Q = t.createMetricsReporting({
								log: U,
								eventBus: B,
								mediaElement: be(),
								dashManifestModel: ie,
								metricsModel: Z
							})
						}
					}(), function() {
						if (X) return X;
						var e = dashjs.MssHandler;
						if ("function" == typeof e) return X = e(L).create({
							eventBus: B,
							mediaPlayerModel: $
						})
					}()), Me()
				}

				function Se(e) {
					if (!q) throw N;
					if ("string" == typeof e) {
						var t = (0, p.default)(L).getInstance();
						t.initialize(), K = t.parseURI(e)
					} else K = e;
					Me()
				}

				function Me() {
					Y ? (Y = !1, J.reset(), re.reset(), ne.reset(), V.reset(), G.reset(), oe.reset(), re = null, Q = null, ue() && we()) : ue() && we()
				}

				function Re() {
					return (0, u.default)(L).create({
						errHandler: ee,
						metricsModel: Z,
						requestModifier: (0, m.default)(L).getInstance(),
						mssHandler: X
					})
				}

				function Ie() {
					return (J = (0, w.default)(L).getInstance()).initialize(), J.setConfig({
						dashManifestModel: ie
					}), J
				}

				function Ce() {
					if (W) return W;
					var e = dashjs.Protection;
					if ("function" == typeof e) {
						var t = e(L).create();
						return C.default.extend(e.events), A.default.extend(e.events, {
							publicOnly: !0
						}), W = t.createProtectionSystem({
							log: U,
							videoModel: ae,
							capabilities: te,
							eventBus: B,
							adapter: J
						})
					}
					return null
				}

				function Ae() {
					var e = Z.getReadOnlyMetricsFor("video") || Z.getReadOnlyMetricsFor("audio");
					return se.getCurrentDVRInfo(e)
				}

				function De(e) {
					var t = Ae();
					return t ? e + (t.manifestInfo.availableFrom.getTime() / 1e3 + t.range.start) : 0
				}

				function Pe() {
					if (!Y) throw t;
					var e = re.getActiveStreamInfo();
					return e ? re.getStreamById(e.id) : null
				}

				function we() {
					var e;
					Y || (Y = !0, U("Playback Initialized"), (e = (0, b.default)(L).getInstance()).initialize(), (0, h.default)(L).getInstance().setConfig({
						dashManifestModel: ie
					}), G.initialize(), G.setConfig({
						errHandler: ee
					}), (re = (0, a.default)(L).getInstance()).setConfig({
						capabilities: te,
						manifestLoader: Re(),
						manifestModel: (0, _.default)(L).getInstance(),
						dashManifestModel: ie,
						protectionController: W,
						adapter: J,
						metricsModel: Z,
						dashMetrics: se,
						liveEdgeFinder: (0, l.default)(L).getInstance(),
						mediaSourceController: (0, S.default)(L).getInstance(),
						timeSyncController: (0, T.default)(L).getInstance(),
						baseURLController: (0, M.default)(L).getInstance(),
						errHandler: ee,
						timelineConverter: (0, F.default)(L).getInstance()
					}), re.initialize(z, H), V.setConfig({
						abrRulesCollection: e,
						streamController: re
					}), (oe = (0, g.default)(L).getInstance()).setConfig({
						errHandler: ee,
						dashManifestModel: ie,
						mediaController: G,
						streamController: re,
						videoModel: ae
					}), "string" == typeof K ? re.load(K) : re.loadWithManifest(K))
				}
				return e = {
					initialize: function(e, t, r) {
						te = (0, c.default)(L).getInstance(), ee = (0, d.default)(L).getInstance(), te.supportsMediaSource() ? q || (q = !0, V = (0, E.default)(L).getInstance(), ne = (0, i.default)(L).getInstance(), (G = (0, o.default)(L).getInstance()).initialize(), ie = (0, O.default)(L).getInstance(), se = (0, x.default)(L).getInstance(), (Z = (0, y.default)(L).getInstance()).setConfig({
							adapter: Ie()
						}), Ee(), me(void 0 === r || r), e && je(e), t && Se(t), U("[dash.js " + he() + "] MediaPlayer has been initialized")) : ee.capabilityError("mediasource")
					},
					on: function(e, t, r) {
						B.on(e, t, r)
					},
					off: function(e, t, r) {
						B.off(e, t, r)
					},
					extend: function(e, t, r) {
						D.default.extend(e, t, r, L)
					},
					attachView: je,
					attachSource: Se,
					isReady: ue,
					play: function() {
						if (!Y) throw t;
						(!z || le() && Y) && ne.play()
					},
					isPaused: le,
					pause: function() {
						if (!Y) throw t;
						ne.pause()
					},
					isSeeking: function() {
						if (!Y) throw t;
						return ne.isSeeking()
					},
					isDynamic: function() {
						if (!Y) throw t;
						return ne.getIsDynamic()
					},
					seek: function(e) {
						if (!Y) throw t;
						var r = ne.getIsDynamic() ? de(e) : e;
						ne.seek(r)
					},
					setMute: function(e) {
						if (!ae) throw r;
						be().muted = e
					},
					isMuted: function() {
						if (!ae) throw r;
						return be().muted
					},
					setVolume: function(e) {
						if (!ae) throw r;
						be().volume = e
					},
					getVolume: function() {
						if (!ae) throw r;
						return be().volume
					},
					time: ce,
					duration: fe,
					timeAsUTC: function() {
						if (!Y) throw t;
						return ce() < 0 ? NaN : De(ce())
					},
					durationAsUTC: function() {
						if (!Y) throw t;
						return De(fe())
					},
					getActiveStream: Pe,
					getDVRWindowSize: function() {
						var e = Ae();
						return e ? e.manifestInfo.DVRWindowSize : 0
					},
					getDVRSeekOffset: de,
					convertToTimeCode: function(e) {
						e = Math.max(e, 0);
						var t = Math.floor(e / 3600),
							r = Math.floor(e % 3600 / 60),
							n = Math.floor(e % 3600 % 60);
						return (0 === t ? "" : t < 10 ? "0" + t.toString() + ":" : t.toString() + ":") + (r < 10 ? "0" + r.toString() : r.toString()) + ":" + (n < 10 ? "0" + n.toString() : n.toString())
					},
					formatUTC: function(e, t, r) {
						var n = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3],
							s = new Date(1e3 * e),
							i = s.toLocaleDateString(t),
							a = s.toLocaleTimeString(t, {
								hour12: r
							});
						return n ? a + " " + i : a
					},
					getVersion: he,
					getDebug: function() {
						return k
					},
					getBufferLength: function(e) {
						var t = ["video", "audio", "fragmentedText"];
						if (e) {
							if (-1 !== t.indexOf(e)) {
								var r = ge().getCurrentBufferLevel(pe(e));
								return r || NaN
							}
							return U("Warning  - getBufferLength requested for invalid type"), NaN
						}
						return t.map((function(e) {
							return _e(e).length > 0 ? ge().getCurrentBufferLevel(pe(e)) : Number.MAX_VALUE
						})).reduce((function(e, t) {
							return Math.min(e, t)
						}))
					},
					getVideoModel: function() {
						if (!ae) throw r;
						return ae
					},
					getVideoContainer: function() {
						return ae ? ae.getVideoContainer() : null
					},
					getTTMLRenderingDiv: function() {
						return ae ? ae.getTTMLRenderingDiv() : null
					},
					getVideoElement: be,
					getSource: function() {
						if (!K) throw n;
						return K
					},
					setLiveDelayFragmentCount: function(e) {
						$.setLiveDelayFragmentCount(e)
					},
					setLiveDelay: function(e) {
						$.setLiveDelay(e)
					},
					getLiveDelay: function() {
						return $.getLiveDelay()
					},
					useSuggestedPresentationDelay: function(e) {
						$.setUseSuggestedPresentationDelay(e)
					},
					enableLastBitrateCaching: function(e, t) {
						$.setLastBitrateCachingInfo(e, t)
					},
					enableLastMediaSettingsCaching: function(e, t) {
						$.setLastMediaSettingsCachingInfo(e, t)
					},
					setMaxAllowedBitrateFor: function(e, t) {
						V.setMaxAllowedBitrateFor(e, t)
					},
					getMaxAllowedBitrateFor: function(e) {
						return V.getMaxAllowedBitrateFor(e)
					},
					setMinAllowedBitrateFor: function(e, t) {
						V.setMinAllowedBitrateFor(e, t)
					},
					getMinAllowedBitrateFor: function(e) {
						return V.getMinAllowedBitrateFor(e)
					},
					setMaxAllowedRepresentationRatioFor: function(e, t) {
						V.setMaxAllowedRepresentationRatioFor(e, t)
					},
					getMaxAllowedRepresentationRatioFor: function(e) {
						return V.getMaxAllowedRepresentationRatioFor(e)
					},
					setAutoPlay: me,
					getAutoPlay: function() {
						return z
					},
					setScheduleWhilePaused: function(e) {
						$.setScheduleWhilePaused(e)
					},
					getScheduleWhilePaused: function() {
						return $.getScheduleWhilePaused()
					},
					getDashMetrics: ge,
					getMetricsFor: pe,
					getQualityFor: function(e) {
						if (!Y) throw t;
						return V.getQualityFor(e, re.getActiveStreamInfo())
					},
					setQualityFor: function(e, r) {
						if (!Y) throw t;
						V.setPlaybackQuality(e, re.getActiveStreamInfo(), r)
					},
					updatePortalSize: function() {
						V.setElementSize(), V.setWindowResizeEventCalled(!0)
					},
					getLimitBitrateByPortal: function() {
						return V.getLimitBitrateByPortal()
					},
					setLimitBitrateByPortal: function(e) {
						V.setLimitBitrateByPortal(e)
					},
					getUsePixelRatioInLimitBitrateByPortal: function() {
						return V.getUsePixelRatioInLimitBitrateByPortal()
					},
					setUsePixelRatioInLimitBitrateByPortal: function(e) {
						V.setUsePixelRatioInLimitBitrateByPortal(e)
					},
					setTextTrack: function(e) {
						if (!Y) throw t;
						void 0 === oe && (oe = (0, g.default)(L).getInstance());
						for (var r = be().textTracks, n = r.length, s = 0; s < n; s++) {
							var i = r[s],
								a = e === s ? "showing" : "hidden";
							i.mode !== a && (i.mode = a)
						}
						oe.setTextTrack()
					},
					getBitrateInfoListFor: function(e) {
						if (!Y) throw t;
						var r = Pe();
						return r ? r.getBitrateListFor(e) : []
					},
					setInitialBitrateFor: function(e, t) {
						V.setInitialBitrateFor(e, t)
					},
					getInitialBitrateFor: function(e) {
						if (!Y) throw t;
						return V.getInitialBitrateFor(e)
					},
					setInitialRepresentationRatioFor: function(e, t) {
						V.setInitialRepresentationRatioFor(e, t)
					},
					getInitialRepresentationRatioFor: function(e) {
						return V.getInitialRepresentationRatioFor(e)
					},
					getStreamsFromManifest: function(e) {
						if (!Y) throw t;
						return J.getStreamsInfo(e)
					},
					getTracksFor: _e,
					getTracksForTypeFromManifest: function(e, r, n) {
						if (!Y) throw t;
						return (n = n || J.getStreamsInfo(r)[0]) ? J.getAllMediaInfoForType(r, n, e) : []
					},
					getCurrentTrackFor: function(e) {
						if (!Y) throw t;
						var r = re.getActiveStreamInfo();
						return r ? G.getCurrentTrackFor(e, r) : null
					},
					setInitialMediaSettingsFor: function(e, t) {
						G.setInitialSettings(e, t)
					},
					getInitialMediaSettingsFor: function(e) {
						return G.getInitialSettings(e)
					},
					setCurrentTrack: function(e) {
						if (!Y) throw t;
						G.setTrack(e)
					},
					getTrackSwitchModeFor: function(e) {
						return G.getSwitchMode(e)
					},
					setTrackSwitchModeFor: function(e, t) {
						G.setSwitchMode(e, t)
					},
					setSelectionModeForInitialTrack: function(e) {
						G.setSelectionModeForInitialTrack(e)
					},
					getSelectionModeForInitialTrack: function() {
						return G.getSelectionModeForInitialTrack()
					},
					getAutoSwitchQuality: function() {
						return V.getAutoSwitchBitrateFor("video") || V.getAutoSwitchBitrateFor("audio")
					},
					setAutoSwitchQuality: function(e) {
						V.setAutoSwitchBitrateFor("video", e), V.setAutoSwitchBitrateFor("audio", e)
					},
					setFastSwitchEnabled: function(e) {
						$.setFastSwitchEnabled(e)
					},
					getFastSwitchEnabled: function() {
						return $.getFastSwitchEnabled()
					},
					getAutoSwitchQualityFor: function(e) {
						return V.getAutoSwitchBitrateFor(e)
					},
					setAutoSwitchQualityFor: function(e, t) {
						V.setAutoSwitchBitrateFor(e, t)
					},
					enableBufferOccupancyABR: function(e) {
						$.setBufferOccupancyABREnabled(e)
					},
					setBandwidthSafetyFactor: function(e) {
						$.setBandwidthSafetyFactor(e)
					},
					getBandwidthSafetyFactor: function() {
						return $.getBandwidthSafetyFactor()
					},
					setAbandonLoadTimeout: function(e) {
						$.setAbandonLoadTimeout(e)
					},
					retrieveManifest: function(e, t) {
						var r = Re(),
							n = this;
						B.on(C.default.INTERNAL_MANIFEST_LOADED, (function e(s) {
							s.error ? t(null, s.error) : t(s.manifest), B.off(C.default.INTERNAL_MANIFEST_LOADED, e, n), r.reset()
						}), n);
						var s = (0, p.default)(L).getInstance();
						s.initialize(), r.load(s.parseURI(e))
					},
					addUTCTimingSource: ve,
					removeUTCTimingSource: ye,
					clearDefaultUTCTimingSources: function() {
						$.setUTCTimingSources([])
					},
					restoreDefaultUTCTimingSources: Ee,
					setBufferToKeep: function(e) {
						$.setBufferToKeep(e)
					},
					setBufferPruningInterval: function(e) {
						$.setBufferPruningInterval(e)
					},
					setStableBufferTime: function(e) {
						$.setStableBufferTime(e)
					},
					setBufferTimeAtTopQuality: function(e) {
						$.setBufferTimeAtTopQuality(e)
					},
					setFragmentLoaderRetryAttempts: function(e) {
						$.setFragmentRetryAttempts(e)
					},
					setFragmentLoaderRetryInterval: function(e) {
						$.setFragmentRetryInterval(e)
					},
					setXHRWithCredentials: function(e) {
						Te(void 0, e)
					},
					setXHRWithCredentialsForType: Te,
					getXHRWithCredentialsForType: function(e) {
						return $.getXHRWithCredentialsForType(e)
					},
					setBufferTimeAtTopQualityLongForm: function(e) {
						$.setBufferTimeAtTopQualityLongForm(e)
					},
					setLongFormContentDurationThreshold: function(e) {
						$.setLongFormContentDurationThreshold(e)
					},
					setRichBufferThreshold: function(e) {
						$.setRichBufferThreshold(e)
					},
					getProtectionController: function() {
						return Ce()
					},
					attachProtectionController: function(e) {
						W = e
					},
					setProtectionData: function(e) {
						H = e
					},
					enableManifestDateHeaderTimeSource: function(e) {
						$.setUseManifestDateHeaderTimeSource(e)
					},
					displayCaptionsOnTop: function(e) {
						var t = (0, f.default)(L).getInstance();
						t.setConfig({
							videoModel: ae
						}), t.initialize(), t.displayCConTop(e)
					},
					attachVideoContainer: function(e) {
						if (!ae) throw r;
						ae.setVideoContainer(e)
					},
					attachTTMLRenderingDiv: function(e) {
						if (!ae) throw r;
						ae.setTTMLRenderingDiv(e)
					},
					getCurrentTextTrackIndex: function() {
						var e = NaN;
						return oe && (e = oe.getCurrentTrackIdx()), e
					},
					reset: function() {
						Se(null), je(null), H = null, W = null
					}
				}, q = !1, Y = !1, z = !0, W = null, H = null, J = null, C.default.extend(A.default), $ = (0, v.default)(L).getInstance(), e
			}
			N.__dashjs_factory_name = "MediaPlayer";
			var L = D.default.getClassFactory(N);
			L.events = A.default, t.default = L, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/MediaPlayerEvents.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function(e, t, r) {
				for (var n = !0; n;) {
					var s = e,
						i = t,
						a = r;
					n = !1, null === s && (s = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(s, i);
					if (void 0 !== o) {
						if ("value" in o) return o.value;
						var u = o.get;
						if (void 0 === u) return;
						return u.call(a)
					}
					var l = Object.getPrototypeOf(s);
					if (null === l) return;
					e = l, t = i, r = a, n = !0, o = l = void 0
				}
			};
			var s, i = r("./node_modules/dashjs/build/es5/src/core/events/EventsBase.js"),
				a = new(function(e) {
					function t() {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), n(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.AST_IN_FUTURE = "astInFuture", this.BUFFER_EMPTY = "bufferStalled", this.BUFFER_LOADED = "bufferLoaded", this.BUFFER_LEVEL_STATE_CHANGED = "bufferStateChanged", this.ERROR = "error", this.FRAGMENT_LOADING_COMPLETED = "fragmentLoadingCompleted", this.FRAGMENT_LOADING_STARTED = "fragmentLoadingStarted", this.FRAGMENT_LOADING_ABANDONED = "fragmentLoadingAbandoned", this.LOG = "log", this.MANIFEST_LOADED = "manifestLoaded", this.METRICS_CHANGED = "metricsChanged", this.METRIC_CHANGED = "metricChanged", this.METRIC_ADDED = "metricAdded", this.METRIC_UPDATED = "metricUpdated", this.PERIOD_SWITCH_COMPLETED = "periodSwitchCompleted", this.PERIOD_SWITCH_STARTED = "periodSwitchStarted", this.QUALITY_CHANGE_REQUESTED = "qualityChangeRequested", this.QUALITY_CHANGE_RENDERED = "qualityChangeRendered", this.STREAM_INITIALIZED = "streamInitialized", this.TEXT_TRACKS_ADDED = "allTextTracksAdded", this.TEXT_TRACK_ADDED = "textTrackAdded", this.CAN_PLAY = "canPlay", this.PLAYBACK_ENDED = "playbackEnded", this.PLAYBACK_ERROR = "playbackError", this.PLAYBACK_NOT_ALLOWED = "playbackNotAllowed", this.PLAYBACK_METADATA_LOADED = "playbackMetaDataLoaded", this.PLAYBACK_PAUSED = "playbackPaused", this.PLAYBACK_PLAYING = "playbackPlaying", this.PLAYBACK_PROGRESS = "playbackProgress", this.PLAYBACK_RATE_CHANGED = "playbackRateChanged", this.PLAYBACK_SEEKED = "playbackSeeked", this.PLAYBACK_SEEKING = "playbackSeeking", this.PLAYBACK_STARTED = "playbackStarted", this.PLAYBACK_TIME_UPDATED = "playbackTimeUpdated"
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), t
				}(((s = i) && s.__esModule ? s : {
					default: s
				}).default));
			t.default = a, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/MediaPlayerFactory.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/streaming/MediaPlayer.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				};
			var a = function() {
					var e = "application/dash+xml";

					function t(t, r, n) {
						if (!t || "VIDEO" !== t.nodeName) return null;
						if (t._dashjs_player) return t._dashjs_player;
						var s, a = t.id || t.name || "video element";
						if (!(r = r || [].slice.call(t.querySelectorAll("source")).filter((function(t) {
								return t.type == e
							}))[0]) && t.src)(r = document.createElement("source")).src = t.src;
						else if (!r && !t.src) return null;
						return n = n || {}, (s = (0, i.default)(n).create()).initialize(t, r.src, t.autoplay), s.getDebug().log("Converted " + a + " to dash.js player and added content: " + r.src), t._dashjs_player = s, s
					}

					function r(e) {
						for (var t = !0; t;) {
							var r = e;
							if (t = !1, "video" === r.nodeName.toLowerCase()) return r;
							e = r.parentNode, t = !0
						}
					}
					return {
						create: t,
						createAll: function(n, s) {
							var i = [];
							n = n || "[data-dashjs-player]";
							for (var a = (s = s || document).querySelectorAll(n), o = 0; o < a.length; o++) {
								var u = t(a[o], null);
								i.push(u)
							}
							var l = s.querySelectorAll('source[type="' + e + '"]');
							for (o = 0; o < l.length; o++) {
								u = t(r(l[o]), null);
								i.push(u)
							}
							return i
						}
					}
				}(),
				o = void 0;
			!("undefined" != typeof window && window && window.dashjs && window.dashjs.skipAutoCreate) && "undefined" != typeof window && window && window.addEventListener && ("complete" === window.document.readyState ? window.dashjs ? a.createAll() : o = window.setInterval((function() {
				window.dashjs && (window.clearInterval(o), a.createAll())
			}), 500) : window.addEventListener("load", (function e() {
				window.removeEventListener("load", e), a.createAll()
			}))), t.default = a, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/Stream.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/LiveEdgeFinder.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/StreamProcessor.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/MediaController.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/EventController.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/FragmentController.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/AbrController.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/streaming/models/VideoModel.js")),
				c = n(r("./node_modules/dashjs/build/es5/src/streaming/models/MetricsModel.js")),
				f = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/PlaybackController.js")),
				h = n(r("./node_modules/dashjs/build/es5/src/dash/DashHandler.js")),
				m = n(r("./node_modules/dashjs/build/es5/src/dash/SegmentBaseLoader.js")),
				g = n(r("./node_modules/dashjs/build/es5/src/dash/WebmSegmentBaseLoader.js")),
				p = n(r("./node_modules/dashjs/build/es5/src/dash/DashMetrics.js")),
				_ = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				v = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				y = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				E = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				T = n(r("./node_modules/dashjs/build/es5/src/streaming/text/TextController.js"));

			function b(e) {
				var t = 1,
					r = this.context,
					n = (0, y.default)(r).getInstance().log,
					E = (0, _.default)(r).getInstance(),
					b = e.manifestModel,
					j = e.manifestUpdater,
					S = e.adapter,
					M = e.capabilities,
					R = e.errHandler,
					I = e.timelineConverter,
					C = e.baseURLController,
					A = void 0,
					D = void 0,
					P = void 0,
					w = void 0,
					O = void 0,
					x = void 0,
					F = void 0,
					N = void 0,
					L = void 0,
					B = void 0,
					k = void 0,
					U = void 0,
					K = void 0,
					H = void 0,
					q = void 0,
					Y = void 0;

				function z() {
					for (var e = D.length, t = 0; t < e; t++) D[t].reset();
					D = [], P = !1, w = !1, H && H.clear(), E.off(v.default.CURRENT_TRACK_CHANGED, Q, A)
				}

				function V() {
					k && (k.pause(), k = null), K && (K.reset(), K = null), z(), U = null, q = null, j = null, b = null, S = null, M = null, n = null, R = null, F = !1, N = !1, x = {}, E.off(v.default.DATA_UPDATE_COMPLETED, re, A), E.off(v.default.BUFFERING_COMPLETED, te, A), E.off(v.default.KEY_ERROR, G, A), E.off(v.default.SERVER_CERTIFICATE_UPDATED, G, A), E.off(v.default.LICENSE_REQUEST_COMPLETE, G, A), E.off(v.default.KEY_SYSTEM_SELECTED, G, A), E.off(v.default.KEY_SESSION_CREATED, G, A)
				}

				function G(e) {
					e.error && (R.mediaKeySessionError(e.error), n(e.error), V())
				}

				function W(e, t, s) {
					var i, a, o = e.type;
					if ("muxed" === o && e) return n(a = "Multiplexed representations are intentionally not supported, as they are not compliant with the DASH-AVC/264 guidelines"), R.manifestError(a, "multiplexedrep", b.getValue()), !1;
					if ("text" === o || "fragmentedText" === o || "embeddedText" === o) return !0;
					if (i = e.codec, n(o + " codec: " + i), e.contentProtection && !M.supportsEncryptedMedia()) R.capabilityError("encryptedmedia");
					else if (!M.supportsCodec((0, d.default)(r).getInstance().getElement(), i)) return a = o + "Codec (" + i + ") is not supported.", R.manifestError(a, "codec", s), n(a), !1;
					return !0
				}

				function Q(e) {
					if (e.newMediaInfo.streamInfo.id === O.id) {
						var t = function(e) {
							return !!e && ne().filter((function(t) {
								return t.getType() === e.type
							}))[0]
						}(e.oldMediaInfo);
						if (t) {
							var r = k.getTime(),
								n = t.getBuffer(),
								s = e.newMediaInfo,
								i = b.getValue(),
								a = D.indexOf(t),
								o = t.getMediaSource();
							"fragmentedText" !== s.type ? (t.reset(!0), J(s, i, o, {
								buffer: n,
								replaceIdx: a,
								currentTime: r
							}), k.seek(k.getTime())) : t.updateMediaInfo(i, s)
						}
					}
				}

				function X(e) {
					var t = "webm" === e.mimeType.split("/")[1].toLowerCase() ? (0, g.default)(r).getInstance() : (0, m.default)(r).getInstance();
					return t.setConfig({
						baseURLController: C,
						metricsModel: (0, c.default)(r).getInstance()
					}), t.initialize(), (0, h.default)(r).create({
						segmentBaseLoader: t,
						timelineConverter: I,
						dashMetrics: (0, p.default)(r).getInstance(),
						metricsModel: (0, c.default)(r).getInstance(),
						baseURLController: C
					})
				}

				function J(e, t, n, s) {
					var a = (0, i.default)(r).create({
							indexHandler: X(e),
							timelineConverter: I,
							adapter: S,
							manifestModel: b
						}),
						o = S.getAllMediaInfoForType(t, O, e.type);
					if (a.initialize(function(e) {
							return "text" === e.type ? e.mimeType : e.type
						}(e), K, n, A, H), q.updateTopQualityIndex(e), s ? (a.setBuffer(s.buffer), a.getIndexHandler().setCurrentTime(s.currentTime), D[s.replaceIdx] = a) : D.push(a), "text" === e.type || "fragmentedText" === e.type) {
						for (var u, l = 0; l < o.length; l++) o[l].index === e.index && (u = l), a.updateMediaInfo(t, o[l]);
						"fragmentedText" === e.type && a.updateMediaInfo(t, o[u])
					} else a.updateMediaInfo(t, e)
				}

				function Z(e, t) {
					var r = b.getValue(),
						s = S.getAllMediaInfoForType(r, O, e),
						i = null;
					if (s && 0 !== s.length) {
						for (var a = 0, o = s.length; a < o; a++)
							if (i = s[a], "embeddedText" === e) Y.addEmbeddedTrack(i);
							else {
								if (!W(i, 0, r)) continue;
								U.isMultiTrackSupportedByType(i.type) && U.addTrack(i, O)
							}
						"embeddedText" !== e && 0 !== U.getTracksFor(e, O).length && (U.checkInitialMediaSettingsForType(e, O), J(U.getCurrentTrackFor(e, O), r, t))
					} else n("No " + e + " data.")
				}

				function $() {
					for (var e = D.length, r = !!x.audio || !!x.video ? new Error(t, "Data update failed", null) : null, n = 0; n < e; n++)
						if (D[n].isUpdating() || F) return;
					N = !0, w && (L && L.initialize(b.getValue(), ee("audio"), ee("video")), E.trigger(v.default.STREAM_INITIALIZED, {
						streamInfo: O,
						error: r
					}))
				}

				function ee(e) {
					for (var t = D.length, r = null, n = 0; n < t; n++)
						if ((r = D[n]).getType() === e) return r.getMediaInfo();
					return null
				}

				function te(e) {
					if (e.streamInfo === O) {
						for (var t = ne(), r = t.length, n = 0; n < r; n++)
							if (!t[n].isBufferingCompleted()) return;
						E.trigger(v.default.STREAM_BUFFERING_COMPLETED, {
							streamInfo: O
						})
					}
				}

				function re(e) {
					var t = e.sender.getStreamProcessor();
					t.getStreamInfo() === O && (x[t.getType()] = e.error, $())
				}

				function ne() {
					for (var e, t, r = D.length, n = [], s = 0; s < r; s++) "audio" !== (e = (t = D[s]).getType()) && "video" !== e && "fragmentedText" !== e || n.push(t);
					return n
				}
				return A = {
					initialize: function(e, t) {
						O = e, (L = t) && (E.on(v.default.KEY_ERROR, G, A), E.on(v.default.SERVER_CERTIFICATE_UPDATED, G, A), E.on(v.default.LICENSE_REQUEST_COMPLETE, G, A), E.on(v.default.KEY_SYSTEM_SELECTED, G, A), E.on(v.default.KEY_SESSION_CREATED, G, A))
					},
					activate: function(e) {
						P || (E.on(v.default.CURRENT_TRACK_CHANGED, Q, A), function(e) {
							var t, s = b.getValue();
							if ((H = (0, o.default)(r).getInstance()).initialize(), H.setConfig({
									manifestModel: b,
									manifestUpdater: j
								}), t = S.getEventsFor(s, O), H.addInlineEvents(t), F = !0, Z("video", e), Z("audio", e), Z("text", e), Z("fragmentedText", e), Z("embeddedText", e), Z("muxed", e), function() {
									for (var e = 0, t = D.length; e < t; e++) D[e].createBuffer()
								}(), w = !0, F = !1, 0 === D.length) {
								var i = "No streams to play.";
								R.manifestError(i, "nostreams", s), n(i)
							} else B.initialize(I, D[0]), $()
						}(e), P = !0)
					},
					deactivate: z,
					getDuration: function() {
						return O.duration
					},
					getStartTime: function() {
						return O.start
					},
					getStreamIndex: function() {
						return O.index
					},
					getId: function() {
						return O.id
					},
					getStreamInfo: function() {
						return O
					},
					hasMedia: function(e) {
						return null !== ee(e)
					},
					getBitrateListFor: function(e) {
						var t = ee(e);
						return q.getBitrateList(t)
					},
					startEventController: function() {
						H && H.start()
					},
					isActivated: function() {
						return P
					},
					isInitialized: function() {
						return N
					},
					updateData: function(e) {
						n("Manifest updated... updating data system wide.");
						var t = b.getValue();
						if (P = !1, F = !0, N = !1, O = e, H) {
							var r = S.getEventsFor(t, O);
							H.addInlineEvents(r)
						}
						for (var s = 0, i = D.length; s < i; s++) {
							var a = D[s],
								o = S.getMediaInfoForType(t, O, a.getType());
							q.updateTopQualityIndex(o), a.updateMediaInfo(t, o)
						}
						F = !1, $()
					},
					reset: V,
					getProcessors: ne
				}, D = [], P = !1, w = !1, O = null, x = {}, F = !1, N = !1, B = (0, s.default)(r).getInstance(), k = (0, f.default)(r).getInstance(), q = (0, l.default)(r).getInstance(), U = (0, a.default)(r).getInstance(), K = (0, u.default)(r).create(), Y = (0, T.default)(r).getInstance(), E.on(v.default.BUFFERING_COMPLETED, te, A), E.on(v.default.DATA_UPDATE_COMPLETED, re, A), A
			}
			b.__dashjs_factory_name = "Stream", t.default = E.default.getClassFactory(b), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/StreamProcessor.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/AbrController.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/BufferController.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/StreamController.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/MediaController.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/streaming/text/TextBufferController.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/ScheduleController.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/streaming/models/MediaPlayerModel.js")),
				c = n(r("./node_modules/dashjs/build/es5/src/streaming/models/MetricsModel.js")),
				f = n(r("./node_modules/dashjs/build/es5/src/streaming/FragmentLoader.js")),
				h = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/RequestModifier.js")),
				m = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/SourceBufferController.js")),
				g = n(r("./node_modules/dashjs/build/es5/src/streaming/text/TextController.js")),
				p = n(r("./node_modules/dashjs/build/es5/src/dash/models/DashManifestModel.js")),
				_ = n(r("./node_modules/dashjs/build/es5/src/dash/DashMetrics.js")),
				v = n(r("./node_modules/dashjs/build/es5/src/dash/controllers/RepresentationController.js")),
				y = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/ErrorHandler.js")),
				E = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function T(e) {
				var t, r = this.context,
					n = e.indexHandler,
					E = e.timelineConverter,
					T = e.adapter,
					b = e.manifestModel,
					j = void 0,
					S = void 0,
					M = void 0,
					R = void 0,
					I = void 0,
					C = void 0,
					A = void 0,
					D = void 0,
					P = void 0,
					w = void 0,
					O = void 0,
					x = void 0,
					F = void 0;
				return t = {
					initialize: function(e, t, S, R, N) {
						M = e, C = N, O = t, j = (I = R).getStreamInfo().manifestInfo.isDynamic, n.initialize(this), (A = (0, s.default)(r).getInstance()).initialize(M, this), D = function(e) {
							var t = null;
							t = "video" === e || "audio" === e ? (0, i.default)(r).create({
								metricsModel: (0, c.default)(r).getInstance(),
								manifestModel: b,
								sourceBufferController: (0, m.default)(r).getInstance(),
								errHandler: (0, y.default)(r).getInstance(),
								streamController: (0, a.default)(r).getInstance(),
								mediaController: (0, o.default)(r).getInstance(),
								adapter: T,
								textController: (0, g.default)(r).getInstance()
							}) : (0, u.default)(r).create({
								type: e,
								metricsModel: (0, c.default)(r).getInstance(),
								manifestModel: b,
								sourceBufferController: (0, m.default)(r).getInstance(),
								errHandler: (0, y.default)(r).getInstance(),
								streamController: (0, a.default)(r).getInstance(),
								mediaController: (0, o.default)(r).getInstance(),
								adapter: T,
								textController: (0, g.default)(r).getInstance()
							});
							return t
						}(e), P = (0, l.default)(r).create({
							metricsModel: (0, c.default)(r).getInstance(),
							manifestModel: b,
							adapter: T,
							dashMetrics: (0, _.default)(r).getInstance(),
							dashManifestModel: (0, p.default)(r).getInstance(),
							timelineConverter: E,
							mediaPlayerModel: (0, d.default)(r).getInstance()
						}), D.initialize(M, S, this), P.initialize(M, this), x = (0, f.default)(r).create({
							metricsModel: (0, c.default)(r).getInstance(),
							errHandler: (0, y.default)(r).getInstance(),
							requestModifier: (0, h.default)(r).getInstance()
						}), (F = P.getFragmentModel()).setLoader(x), (w = (0, v.default)(r).create()).initialize(this)
					},
					isUpdating: function() {
						return w.isUpdating()
					},
					getType: function() {
						return M
					},
					getBufferController: function() {
						return D
					},
					getABRController: function() {
						return A
					},
					getFragmentLoader: function() {
						return x
					},
					getFragmentModel: function() {
						return F
					},
					getScheduleController: function() {
						return P
					},
					getEventController: function() {
						return C
					},
					getFragmentController: function() {
						return O
					},
					getRepresentationController: function() {
						return w
					},
					getIndexHandler: function() {
						return n
					},
					getCurrentRepresentationInfo: function() {
						return T.getCurrentRepresentationInfo(b.getValue(), w)
					},
					getRepresentationInfoForQuality: function(e) {
						return T.getRepresentationInfoForQuality(b.getValue(), w, e)
					},
					isBufferingCompleted: function() {
						return D.getIsBufferingCompleted()
					},
					createBuffer: function() {
						return D.getBuffer() || D.createBuffer(S)
					},
					getStreamInfo: function() {
						return I ? I.getStreamInfo() : null
					},
					updateMediaInfo: function(e, t) {
						t === S || t && S && t.type !== S.type || (S = t), -1 === R.indexOf(t) && R.push(t), T.updateData(e, this)
					},
					getMediaInfoArr: function() {
						return R
					},
					getMediaInfo: function() {
						return S
					},
					getMediaSource: function() {
						return D.getMediaSource()
					},
					getBuffer: function() {
						return D.getBuffer()
					},
					setBuffer: function(e) {
						D.setBuffer(e)
					},
					start: function() {
						P.start()
					},
					stop: function() {
						P.stop()
					},
					isDynamic: function() {
						return j
					},
					reset: function(e) {
						n.reset(), D && (D.reset(e), D = null), P && (P.reset(), P = null), w && (w.reset(), w = null), O = null, x = null, C = null, I = null, j = null, S = null, R = [], M = null
					}
				}, R = [], t
			}
			T.__dashjs_factory_name = "StreamProcessor", t.default = E.default.getClassFactory(T), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/XHRLoader.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function s(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = r("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js"),
				a = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/models/MediaPlayerModel.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/ErrorHandler.js"));

			function l(e) {
				var t, r, n = this.context,
					a = (0, o.default)(n).getInstance(),
					l = e.errHandler,
					d = e.metricsModel,
					c = e.requestModifier,
					f = void 0,
					h = void 0,
					m = void 0,
					g = void 0;
				return t = {
					load: function(e) {
						e.request && function e(t, r) {
							var n, s = t.request,
								i = new XMLHttpRequest,
								o = [],
								u = !0,
								p = !0,
								_ = new Date,
								v = _,
								y = 0,
								E = function(e) {
									p = !1, s.requestStartDate = _, s.requestEndDate = new Date, s.firstByteDate = s.firstByteDate || _, s.checkExistenceOnly || d.addHttpRequest(s.mediaType, null, s.type, s.url, i.responseURL || null, s.serviceLocation || null, s.range || null, s.requestStartDate, s.firstByteDate, s.requestEndDate, i.status, s.duration, i.getAllResponseHeaders(), e ? o : null)
								},
								T = function() {
									-1 !== f.indexOf(i) && (f.splice(f.indexOf(i), 1), p && (E(!1), r > 0 ? (r--, m.push(setTimeout((function() {
										e(t, r)
									}), a.getRetryIntervalForType(s.type)))) : (l.downloadError(g[s.type], s.url, s), t.error && t.error(s, "error", i.statusText), t.complete && t.complete(s, i.statusText))))
								};
							try {
								var b = c.modifyRequestURL(s.url),
									j = s.checkExistenceOnly ? "HEAD" : "GET";
								i.open(j, b, !0), s.responseType && (i.responseType = s.responseType), s.range && i.setRequestHeader("Range", "bytes=" + s.range), s.requestStartDate || (s.requestStartDate = _), (i = c.modifyRequestHeader(i)).withCredentials = a.getXHRWithCredentialsForType(s.type), i.onload = function() {
									i.status >= 200 && i.status <= 299 && (E(!0), t.success && t.success(i.response, i.statusText, i), t.complete && t.complete(s, i.statusText))
								}, i.onloadend = T, i.onerror = T, i.onprogress = function(e) {
									var r = new Date;
									u && (u = !1, (!e.lengthComputable || e.lengthComputable && e.total !== e.loaded) && (s.firstByteDate = r)), e.lengthComputable && (s.bytesLoaded = e.loaded, s.bytesTotal = e.total), o.push({
										s: v,
										d: r.getTime() - v.getTime(),
										b: [e.loaded ? e.loaded - y : 0]
									}), v = r, y = e.loaded, t.progress && t.progress()
								};
								var S = (new Date).getTime();
								isNaN(s.delayLoadingTime) || S >= s.delayLoadingTime ? (f.push(i), i.send()) : (n = {
									xhr: i
								}, h.push(n), n.delayTimeout = setTimeout((function() {
									if (-1 !== h.indexOf(n)) {
										h.splice(h.indexOf(n), 1);
										try {
											f.push(n.xhr), n.xhr.send()
										} catch (e) {
											n.xhr.onerror()
										}
									}
								}), s.delayLoadingTime - S))
							} catch (M) {
								i.onerror()
							}
						}(e, a.getRetryAttemptsForType(e.request.type))
					},
					abort: function() {
						m.forEach((function(e) {
							return clearTimeout(e)
						})), m = [], h.forEach((function(e) {
							return clearTimeout(e.delayTimeout)
						})), h = [], f.forEach((function(e) {
							e.onloadend = e.onerror = e.onprogress = void 0, e.abort()
						})), f = []
					}
				}, f = [], h = [], m = [], s(r = {}, i.HTTPRequest.MPD_TYPE, u.default.DOWNLOAD_ERROR_ID_MANIFEST), s(r, i.HTTPRequest.XLINK_EXPANSION_TYPE, u.default.DOWNLOAD_ERROR_ID_XLINK), s(r, i.HTTPRequest.INIT_SEGMENT_TYPE, u.default.DOWNLOAD_ERROR_ID_INITIALIZATION), s(r, i.HTTPRequest.MEDIA_SEGMENT_TYPE, u.default.DOWNLOAD_ERROR_ID_CONTENT), s(r, i.HTTPRequest.INDEX_SEGMENT_TYPE, u.default.DOWNLOAD_ERROR_ID_CONTENT), s(r, i.HTTPRequest.BITSTREAM_SWITCHING_SEGMENT_TYPE, u.default.DOWNLOAD_ERROR_ID_CONTENT), s(r, i.HTTPRequest.OTHER_TYPE, u.default.DOWNLOAD_ERROR_ID_CONTENT), g = r, t
			}
			l.__dashjs_factory_name = "XHRLoader";
			var d = a.default.getClassFactory(l);
			t.default = d, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/XlinkLoader.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/Error.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/XHRLoader.js")),
				a = r("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js"),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/TextRequest.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				c = 1;

			function f(e) {
				var t = "urn:mpeg:dash:resolve-to-zero:2013",
					r = this.context,
					n = (0, u.default)(r).getInstance(),
					d = (0, i.default)(r).create({
						errHandler: e.errHandler,
						metricsModel: e.metricsModel,
						requestModifier: e.requestModifier
					});
				return {
					load: function(e, r, i) {
						var u = function(t, a) {
							r.resolved = !0, r.resolvedContent = t || null, n.trigger(l.default.XLINK_ELEMENT_LOADED, {
								element: r,
								resolveObject: i,
								error: t || a ? null : new s.default(c, "Failed loading Xlink element: " + e)
							})
						};
						if (e === t) u(null, !0);
						else {
							var f = new o.default(e, a.HTTPRequest.XLINK_TYPE);
							d.load({
								request: f,
								success: function(e) {
									u(e)
								},
								error: function() {
									u(null)
								}
							})
						}
					},
					reset: function() {
						d && (d.abort(), d = null)
					}
				}
			}
			f.__dashjs_factory_name = "XlinkLoader";
			var h = d.default.getClassFactory(f);
			h.XLINK_LOADER_ERROR_LOADING_FAILURE = c, t.default = h, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/AbrController.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/BitrateInfo.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/DOMStorage.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/models/MediaPlayerModel.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/models/FragmentModel.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/streaming/MediaPlayerEvents.js")),
				c = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				f = n(r("./node_modules/dashjs/build/es5/src/streaming/models/ManifestModel.js")),
				h = n(r("./node_modules/dashjs/build/es5/src/dash/models/DashManifestModel.js")),
				m = n(r("./node_modules/dashjs/build/es5/src/streaming/models/VideoModel.js")),
				g = n(r("./node_modules/dashjs/build/es5/src/streaming/rules/RulesContext.js")),
				p = n(r("./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequest.js")),
				_ = n(r("./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequestHistory.js")),
				v = n(r("./node_modules/dashjs/build/es5/src/streaming/rules/DroppedFramesHistory.js")),
				y = n(r("./node_modules/dashjs/build/es5/src/streaming/models/MetricsModel.js")),
				E = n(r("./node_modules/dashjs/build/es5/src/dash/DashMetrics.js")),
				T = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				b = "abandonload",
				j = "allowload",
				S = 1e3,
				M = 100,
				R = 0;

			function I() {
				var e, t = this.context,
					r = (0, T.default)(t).getInstance(),
					n = r.log,
					c = (0, u.default)(t).getInstance(),
					I = void 0,
					C = void 0,
					A = void 0,
					D = void 0,
					P = void 0,
					w = void 0,
					O = void 0,
					x = void 0,
					F = void 0,
					N = void 0,
					L = void 0,
					B = void 0,
					k = void 0,
					U = void 0,
					K = void 0,
					H = void 0,
					q = void 0,
					Y = void 0,
					z = void 0,
					V = void 0,
					G = void 0,
					W = void 0,
					Q = void 0,
					X = void 0,
					J = void 0,
					Z = void 0;

				function $() {
					A = {
						video: !0,
						audio: !0
					}, D = {}, P = {}, w = {}, O = {}, x = {}, N = {}, F = {}, Q = {}, B = !1, k = !1, void 0 === U && (U = !1), G = (0, i.default)(t).getInstance(), V = (0, a.default)(t).getInstance(), q = (0, f.default)(t).getInstance(), Y = (0, h.default)(t).getInstance(), z = (0, m.default)(t).getInstance(), J = (0, y.default)(t).getInstance(), Z = (0, E.default)(t).getInstance(), (new Date).getTime() / 1e3
				}

				function ee(e) {
					"video" === e.mediaType && (W = e.newQuality, X.push(W, z.getPlaybackQuality()))
				}

				function te(e, t) {
					return D[t] = D[t] || {}, D[t].hasOwnProperty(e) || (D[t][e] = 0),
						function(e, t) {
							if ("video" !== t || !B || !F[t]) return e;
							U || he();
							var r = q.getValue(),
								n = Y.getAdaptationForType(r, 0, t).Representation,
								s = e;
							if (K > 0 && H > 0) {
								for (; s > 0 && n[s] && K < n[s].width && K - n[s - 1].width < n[s].width - K;) s -= 1;
								n.length - 2 >= s && n[s].width === n[s + 1].width && (s = Math.min(e, s + 1))
							}
							return s
						}(function(e, t, r) {
							var n = se(t);
							if (isNaN(n) || n >= 1 || n < 0) return e;
							return Math.min(e, Math.round(r * n))
						}(function(e, t) {
							var r = e;
							if (!F[t]) return r;
							var n = ne(t);
							if (n) {
								var s = le(F[t].getMediaInfo(), n);
								r = Math.max(e, s)
							}
							var i = re(t);
							if (i) {
								var a = le(F[t].getMediaInfo(), i);
								r = Math.min(r, a)
							}
							return r
						}(D[t][e], e), e, D[t][e]), e)
				}

				function re(e) {
					return w.hasOwnProperty("max") && w.max.hasOwnProperty(e) ? w.max[e] : NaN
				}

				function ne(e) {
					return w.hasOwnProperty("min") && w.min.hasOwnProperty(e) ? w.min[e] : NaN
				}

				function se(e) {
					return O.hasOwnProperty("max") && O.max.hasOwnProperty(e) ? O.max[e] : 1
				}

				function ie(e) {
					return A[e]
				}

				function ae(e, t, r, n) {
					var s = t.id,
						i = fe(e, t);
					if (!(null !== r && !isNaN(r) && r % 1 == 0)) throw new Error("argument is not an integer");
					var a = te(e, s);
					r !== i && r >= 0 && r <= a && oe(e, t, i, r, a, n)
				}

				function oe(e, t, s, i, a, o) {
					if (r.getLogToBrowserConsole()) {
						var u = Z.getCurrentBufferLevel(J.getReadOnlyMetricsFor(e));
						n("AbrController (" + e + ") switch from " + s + " to " + i + "/" + a + " (buffer: " + u + ")\n" + JSON.stringify(o))
					}! function(e, t, r) {
						P[t] = P[t] || {}, P[t][e] = r
					}(e, t.id, i), c.trigger(l.default.QUALITY_CHANGE_REQUESTED, {
						mediaType: e,
						streamInfo: t,
						oldQuality: s,
						newQuality: i,
						reason: o
					})
				}

				function ue(e, t) {
					N[e].state = t
				}

				function le(e, t, r) {
					if (r && F[e.type].getCurrentRepresentationInfo() && F[e.type].getCurrentRepresentationInfo().fragmentDuration) {
						r /= 1e3;
						var n = F[e.type].getCurrentRepresentationInfo().fragmentDuration;
						if (r > n) return 0;
						t *= 1 - r / n
					}
					var s = de(e);
					if (!s || 0 === s.length) return R;
					for (var i = s.length - 1; i >= 0; i--) {
						if (1e3 * t >= s[i].bitrate) return i
					}
					return 0
				}

				function de(e) {
					if (!e || !e.bitrateList) return null;
					for (var t, r = e.bitrateList, n = e.type, i = [], a = 0, o = r.length; a < o; a++)(t = new s.default).mediaType = n, t.qualityIndex = a, t.bitrate = r[a].bandwidth, t.width = r[a].width, t.height = r[a].height, i.push(t);
					return i
				}

				function ce(e) {
					var t = J.getReadOnlyMetricsFor(e),
						r = Z.getCurrentBufferLevel(t),
						n = t.BufferState.length > 0 ? t.BufferState[t.BufferState.length - 1] : null,
						s = !1;
					return n && r > n.target && (s = r > n.target + V.getRichBufferThreshold()), s
				}

				function fe(e, t) {
					var r = t.id;
					return P[r] = P[r] || {}, P[r].hasOwnProperty(e) || (P[r][e] = R), P[r][e]
				}

				function he() {
					var e = z.getElement();
					if (void 0 !== e) {
						var t = k && window.hasOwnProperty("devicePixelRatio") ? window.devicePixelRatio : 1;
						K = e.clientWidth * t, H = e.clientHeight * t
					}
				}

				function me(e) {
					var r = e.request.mediaType;
					if (ie(r)) {
						var n = F[r].getScheduleController();
						if (!n) return;
						var s = (0, g.default)(t).create({
								streamProcessor: F[r],
								currentRequest: e.request,
								currentValue: fe(r, C.getActiveStreamInfo()),
								hasRichBuffer: ce(r)
							}),
							i = I.shouldAbandonFragment(s);
						if (i.value > p.default.NO_CHANGE) {
							var a = n.getFragmentModel(),
								u = a.getRequests({
									state: o.default.FRAGMENT_MODEL_LOADING,
									index: e.request.index
								})[0];
							u && (a.abortRequests(), ue(r, b), Q[r].reset(), Q[r].push({
								oldValue: fe(r, C.getActiveStreamInfo()),
								newValue: i.value,
								confidence: 1,
								reason: i.reason
							}), ae(r, C.getActiveStreamInfo(), i.value, i.reason), c.trigger(l.default.FRAGMENT_LOADING_ABANDONED, {
								streamProcessor: F[r],
								request: u,
								mediaType: r
							}), clearTimeout(L), L = setTimeout((function() {
								ue(r, j), L = null
							}), V.getAbandonLoadTimeout()))
						}
					}
				}
				return e = {
					isPlayingAtTopQuality: function(e) {
						var t = e.id,
							r = fe("audio", e),
							n = fe("video", e);
						return r === te("audio", t) && n === te("video", t)
					},
					updateTopQualityIndex: function(e) {
						var t = e.type,
							r = e.streamInfo.id,
							n = e.representationCount - 1;
						return function(e, t, r) {
							D[t] = D[t] || {}, D[t][e] = r
						}(t, r, n), n
					},
					getAverageThroughput: function(e) {
						return x[e]
					},
					getBitrateList: de,
					getQualityForBitrate: le,
					getMaxAllowedBitrateFor: re,
					getMinAllowedBitrateFor: ne,
					setMaxAllowedBitrateFor: function(e, t) {
						w.max = w.max || {}, w.max[e] = t
					},
					setMinAllowedBitrateFor: function(e, t) {
						w.min = w.min || {}, w.min[e] = t
					},
					getMaxAllowedRepresentationRatioFor: se,
					setMaxAllowedRepresentationRatioFor: function(e, t) {
						O.max = O.max || {}, O.max[e] = t
					},
					getInitialBitrateFor: function(e) {
						var t = G.getSavedBitrateSettings(e);
						if (!w.hasOwnProperty(e))
							if (O.hasOwnProperty(e)) {
								var r = q.getValue(),
									n = Y.getAdaptationForType(r, 0, e).Representation;
								if (Array.isArray(n)) {
									var s = Math.max(Math.round(n.length * O[e]) - 1, 0);
									w[e] = n[s].bandwidth
								} else w[e] = 0
							} else isNaN(t) ? w[e] = "video" === e ? S : M : w[e] = t;
						return w[e]
					},
					setInitialBitrateFor: function(e, t) {
						w[e] = t
					},
					getInitialRepresentationRatioFor: function(e) {
						return O.hasOwnProperty(e) ? O[e] : null
					},
					setInitialRepresentationRatioFor: function(e, t) {
						O[e] = t
					},
					setAutoSwitchBitrateFor: function(e, t) {
						A[e] = t
					},
					getAutoSwitchBitrateFor: ie,
					setLimitBitrateByPortal: function(e) {
						B = e
					},
					getLimitBitrateByPortal: function() {
						return B
					},
					getUsePixelRatioInLimitBitrateByPortal: function() {
						return k
					},
					setUsePixelRatioInLimitBitrateByPortal: function(e) {
						k = e
					},
					getQualityFor: fe,
					getAbandonmentStateFor: function(e) {
						return N[e].state
					},
					setAbandonmentStateFor: ue,
					setPlaybackQuality: ae,
					getPlaybackQuality: function(e) {
						var s = e.getType(),
							i = e.getStreamInfo(),
							a = i.id,
							o = fe(s, i),
							u = (0, g.default)(t).create({
								streamProcessor: e,
								currentValue: o,
								playbackIndex: W,
								switchHistory: Q[s],
								droppedFramesHistory: X,
								hasRichBuffer: ce(s)
							});
						if (X && X.push(W, z.getPlaybackQuality()), ie(s)) {
							var l = te(s, a),
								d = I.getMaxQuality(u),
								c = d.value;
							if (c > l && (c = l), Q[s].push({
									oldValue: o,
									newValue: c
								}), c > p.default.NO_CHANGE && c != o)(N[s].state === j || c > o) && oe(s, i, o, c, l, d.reason);
							else if (r.getLogToBrowserConsole()) {
								var f = Z.getCurrentBufferLevel(J.getReadOnlyMetricsFor(s));
								n("AbrController (" + s + ") stay on " + o + "/" + l + " (buffer: " + f + ")")
							}
						}
					},
					setAverageThroughput: function(e, t) {
						x[e] = t
					},
					getTopQualityIndexFor: te,
					setElementSize: he,
					setWindowResizeEventCalled: function(e) {
						U = e
					},
					initialize: function(e, r) {
						Q[e] = (0, _.default)(t).create(), F[e] = r, N[e] = N[e] || {}, N[e].state = j, c.on(l.default.LOADING_PROGRESS, me, this), "video" == e && (c.on(d.default.QUALITY_CHANGE_RENDERED, ee, this), X = (0, v.default)(t).create(), he())
					},
					setConfig: function(e) {
						e && (e.abrRulesCollection && (I = e.abrRulesCollection), e.streamController && (C = e.streamController))
					},
					reset: function() {
						c.off(l.default.LOADING_PROGRESS, me, this), c.off(d.default.QUALITY_CHANGE_RENDERED, ee, this), W = void 0, X = void 0, clearTimeout(L), L = null, $()
					}
				}, $(), e
			}
			I.__dashjs_factory_name = "AbrController";
			var C = c.default.getSingletonFactory(I);
			C.ABANDON_LOAD = b, C.QUALITY_DEFAULT = R, t.default = C, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/BaseURLController.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/models/BaseURLTreeModel.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/BaseURLSelector.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/URLUtils.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/dash/vo/BaseURL.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js"));

			function c() {
				var e = void 0,
					t = this.context,
					r = (0, l.default)(t).getInstance(),
					n = (0, a.default)(t).getInstance(),
					u = void 0,
					c = void 0;

				function f(e) {
					u.invalidateSelectedIndexes(e.entry)
				}
				return e = {
					reset: function() {
						u.reset(), c.reset()
					},
					initialize: function(e) {
						var t;
						t = e, u.update(t), c.chooseSelectorFromManifest(t)
					},
					resolve: function(e) {
						var t = u.getForPath(e).reduce((function(e, t) {
							var r = c.select(t);
							return r ? (n.isRelative(r.url) ? e.url = n.resolve(r.url, e.url) : (e.url = r.url, e.serviceLocation = r.serviceLocation), e) : new o.default
						}), new o.default);
						if (!n.isRelative(t.url)) return t
					},
					setConfig: function(e) {
						e.baseURLTreeModel && (u = e.baseURLTreeModel), e.baseURLSelector && (c = e.baseURLSelector)
					}
				}, u = (0, s.default)(t).create(), c = (0, i.default)(t).create(), r.on(d.default.SERVICE_LOCATION_BLACKLIST_CHANGED, f, e), e
			}
			c.__dashjs_factory_name = "BaseURLController", t.default = u.default.getSingletonFactory(c), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/BlacklistController.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js"));

			function a(e) {
				var t = [],
					r = (0, i.default)(this.context).getInstance(),
					n = e.updateEventName,
					s = e.loadFailedEventName;

				function a(e) {
					-1 === t.indexOf(e) && (t.push(e), r.trigger(n, {
						entry: e
					}))
				}

				function o(e) {
					e.error && a(e.request.serviceLocation)
				}
				return function() {
					s && r.on(s, o, this)
				}(), {
					add: a,
					contains: function(e) {
						return !!(t.length && e && e.length) && -1 !== t.indexOf(e)
					},
					reset: function() {
						t = []
					}
				}
			}
			a.__dashjs_factory_name = "BlackListController", t.default = s.default.getClassFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/BufferController.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/models/FragmentModel.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/models/MediaPlayerModel.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/SourceBufferController.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/AbrController.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/PlaybackController.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/MediaController.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				c = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				f = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/BoxParser.js")),
				h = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				m = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				g = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/InitCache.js")),
				p = "bufferLoaded",
				_ = "bufferStalled",
				v = .5;

			function y(e) {
				var t = this.context,
					r = (0, m.default)(t).getInstance().log,
					n = (0, d.default)(t).getInstance(),
					h = e.metricsModel,
					y = e.manifestModel,
					E = e.sourceBufferController,
					T = e.errHandler,
					b = e.streamController,
					j = e.mediaController,
					S = e.adapter,
					M = e.textController,
					R = void 0,
					I = void 0,
					C = void 0,
					A = void 0,
					D = void 0,
					P = void 0,
					w = void 0,
					O = void 0,
					x = void 0,
					F = void 0,
					N = void 0,
					L = void 0,
					B = void 0,
					k = void 0,
					U = void 0,
					K = void 0,
					H = void 0,
					q = void 0,
					Y = void 0,
					z = void 0,
					V = void 0,
					G = void 0;

				function W(e) {
					e.fragmentModel === q.getFragmentModel() && (r("Init fragment finished loading saving to", x + "'s init cache"), G.save(e.chunk), X(e.chunk))
				}

				function Q(e) {
					if (e.fragmentModel === q.getFragmentModel()) {
						var r = e.chunk,
							n = r.bytes,
							i = r.quality,
							a = q.getRepresentationInfoForQuality(i),
							o = y.getValue(),
							u = S.getEventsFor(o, a.mediaInfo, q),
							l = S.getEventsFor(o, a, q);
						if (u && u.length > 0 || l && l.length > 0) {
							var d = function(e, r, n, s) {
								var i = Math.max(isNaN(r.startTime) ? 0 : r.startTime, 0),
									a = [],
									o = [];
								K = !1;
								for (var u = n.concat(s), l = 0, d = u.length; l < d; l++) a[u[l].schemeIdUri] = u[l];
								var c = (0, f.default)(t).getInstance().parse(e).getBoxes("emsg");
								for (l = 0, d = c.length; l < d; l++) {
									var h = S.getEvent(c[l], a, i);
									h && o.push(h)
								}
								return o
							}(n, q.getFragmentModel().getRequests({
								state: s.default.FRAGMENT_MODEL_EXECUTED,
								quality: i,
								index: r.index
							})[0], u, l);
							q.getEventController().addInbandEvents(d)
						}
						r.bytes = function(e) {
							if (!K) return e;
							var t = e.length,
								r = Math.pow(256, 2),
								n = Math.pow(256, 3),
								s = new Uint8Array(e.length),
								i = 0,
								a = 0;
							for (; i < t;) {
								var o = String.fromCharCode(e[i + 4], e[i + 5], e[i + 6], e[i + 7]),
									u = e[i] * n + e[i + 1] * r + 256 * e[i + 2] + 1 * e[i + 3];
								if ("emsg" != o)
									for (var l = i; l < i + u; l++) s[a] = e[l], a++;
								i += u
							}
							return s.subarray(0, a)
						}(n), X(r)
					}
				}

				function X(e) {
					k = !0, L = e, E.append(F, e), "video" === e.mediaInfo.type && n.trigger(c.default.VIDEO_CHUNK_RECEIVED, {
						chunk: e
					})
				}

				function J(e) {
					if (F === e.buffer) {
						if (e.error || !ae()) return e.error.code === a.default.QUOTA_EXCEEDED_ERROR_CODE && (D = .8 * E.getTotalBufferedTime(F)), void(e.error.code !== a.default.QUOTA_EXCEEDED_ERROR_CODE && ae() || (n.trigger(c.default.QUOTA_EXCEEDED, {
							sender: R,
							criticalBufferLevel: D
						}), ue(oe())));
						L && !isNaN(L.index) && (w = Math.max(L.index, w), ne());
						var t = E.getAllRanges(F);
						if (t && t.length > 0)
							for (var s = 0, i = t.length; s < i; s++) r("Buffered Range for type:", x, ":", t.start(s), " - ", t.end(s));
						ee(), k = !1, L && n.trigger(c.default.BYTES_APPENDED, {
							sender: R,
							quality: L.quality,
							startTime: L.start,
							index: L.index,
							bufferedRanges: t
						})
					}
				}

				function Z(e) {
					I !== e.newQuality && x === e.mediaType && q.getStreamInfo().id === e.streamInfo.id && (de(q.getRepresentationInfoForQuality(e.newQuality).MSETimeOffset), I = e.newQuality)
				}

				function $() {
					O = Number.POSITIVE_INFINITY, C = !1, ee()
				}

				function ee() {
					te(), re()
				}

				function te() {
					H && (A = E.getBufferLength(F, H.getTime()), n.trigger(c.default.BUFFER_LEVEL_UPDATED, {
						sender: R,
						bufferLevel: A
					}), se())
				}

				function re() {
					q && b && q.getStreamInfo().id === b.getActiveStreamInfo().id && (h.addBufferState(x, N, z.getBufferTarget()), h.addBufferLevel(x, new Date, 1e3 * A))
				}

				function ne() {
					w >= O - 1 && !C && (C = !0, n.trigger(c.default.BUFFERING_COMPLETED, {
						sender: R,
						streamInfo: q.getStreamInfo()
					}))
				}

				function se() {
					ie(A < v && !C ? _ : p)
				}

				function ie(e) {
					N === e || "fragmentedText" === x && M.getAllTracksAreDisabled() || (N = e, re(), n.trigger(c.default.BUFFER_LEVEL_STATE_CHANGED, {
						sender: R,
						state: e,
						mediaType: x,
						streamInfo: q.getStreamInfo()
					}), n.trigger(e === p ? c.default.BUFFER_LOADED : c.default.BUFFER_EMPTY, {
						mediaType: x
					}), r(e === p ? "Got enough buffer to start." : "Waiting for more buffer before starting playback."))
				}

				function ae() {
					return E.getTotalBufferedTime(F) < D
				}

				function oe(e) {
					if (!F) return null;
					var t = H.getTime(),
						r = q.getFragmentModel().getRequests({
							state: s.default.FRAGMENT_MODEL_EXECUTED,
							time: t,
							threshold: e
						})[0],
						n = E.getBufferRange(F, t),
						i = r && !isNaN(r.startTime) ? r.startTime : Math.floor(t);
					return null === n && F.buffered.length > 0 && (i = F.buffered.end(F.buffered.length - 1)), {
						start: F.buffered.start(0),
						end: i
					}
				}

				function ue(e) {
					e && F && E.remove(F, e.start, e.end, P)
				}

				function le(e) {
					F === e.buffer && (U && (U = !1), te(), n.trigger(c.default.BUFFER_CLEARED, {
						sender: R,
						from: e.from,
						to: e.to,
						hasEnoughSpaceToAppend: ae()
					}))
				}

				function de(e) {
					F && F.timestampOffset !== e && !isNaN(e) && (F.timestampOffset = e)
				}

				function ce(e) {
					e.sender.getStreamProcessor() !== q || e.error || de(e.currentRepresentation.MSETimeOffset)
				}

				function fe(e) {
					e.fragmentModel === q.getFragmentModel() && (O = e.request.index, ne())
				}

				function he(e) {
					F && e.newMediaInfo.type === x && e.newMediaInfo.streamInfo.id === q.getStreamInfo().id && j.getSwitchMode(x) === l.default.TRACK_SWITCH_MODE_ALWAYS_REPLACE && ue(oe(0))
				}

				function me() {
					++B * (V.getWallclockTimeUpdateInterval() / 1e3) >= V.getBufferPruningInterval() && !k && (B = 0, function() {
						if (F && "fragmentedText" !== x) {
							var e = F.buffered.length ? F.buffered.start(0) : 0,
								t = H.getTime() - e - V.getBufferToKeep();
							t > 0 && (r("pruning buffer: " + t + " seconds."), U = !0, E.remove(F, 0, Math.round(e + t), P))
						}
					}())
				}

				function ge() {
					se()
				}

				function pe(e) {
					F = e
				}

				function _e(e) {
					P = e
				}
				return R = {
					initialize: function(e, r, s) {
						x = e, _e(r), q = s, V = (0, i.default)(t).getInstance(), H = (0, u.default)(t).getInstance(), Y = (0, o.default)(t).getInstance(), G = (0, g.default)(t).getInstance(), z = q.getScheduleController(), I = Y.getQualityFor(x, q.getStreamInfo()), n.on(c.default.DATA_UPDATE_COMPLETED, ce, this), n.on(c.default.INIT_FRAGMENT_LOADED, W, this), n.on(c.default.MEDIA_FRAGMENT_LOADED, Q, this), n.on(c.default.QUALITY_CHANGE_REQUESTED, Z, this), n.on(c.default.STREAM_COMPLETED, fe, this), n.on(c.default.PLAYBACK_PROGRESS, ee, this), n.on(c.default.PLAYBACK_TIME_UPDATED, ee, this), n.on(c.default.PLAYBACK_RATE_CHANGED, ge, this), n.on(c.default.PLAYBACK_SEEKING, $, this), n.on(c.default.WALLCLOCK_TIME_UPDATED, me, this), n.on(c.default.CURRENT_TRACK_CHANGED, he, this, d.default.EVENT_PRIORITY_HIGH), n.on(c.default.SOURCEBUFFER_APPEND_COMPLETED, J, this), n.on(c.default.SOURCEBUFFER_REMOVE_COMPLETED, le, this)
					},
					createBuffer: function(e) {
						if (!e || !P || !q) return null;
						var t = null;
						try {
							(t = E.createSourceBuffer(P, e)) && t.hasOwnProperty("initialize") && t.initialize(x, this)
						} catch (r) {
							T.mediaSourceError("Error creating " + x + " source buffer.")
						}
						return pe(t), de(q.getRepresentationInfoForQuality(I).MSETimeOffset), t
					},
					getType: function() {
						return x
					},
					getStreamProcessor: function() {
						return q
					},
					setStreamProcessor: function(e) {
						q = e
					},
					getBuffer: function() {
						return F
					},
					setBuffer: pe,
					getBufferLevel: function() {
						return A
					},
					getCriticalBufferLevel: function() {
						return D
					},
					setMediaSource: _e,
					getMediaSource: function() {
						return P
					},
					getIsBufferingCompleted: function() {
						return C
					},
					switchInitData: function(e, t) {
						var r = G.extract(e, t);
						r ? X(r) : n.trigger(c.default.INIT_REQUESTED, {
							sender: R
						})
					},
					reset: function(e) {
						n.off(c.default.DATA_UPDATE_COMPLETED, ce, this), n.off(c.default.QUALITY_CHANGE_REQUESTED, Z, this), n.off(c.default.INIT_FRAGMENT_LOADED, W, this), n.off(c.default.MEDIA_FRAGMENT_LOADED, Q, this), n.off(c.default.STREAM_COMPLETED, fe, this), n.off(c.default.CURRENT_TRACK_CHANGED, he, this), n.off(c.default.PLAYBACK_PROGRESS, ee, this), n.off(c.default.PLAYBACK_TIME_UPDATED, ee, this), n.off(c.default.PLAYBACK_RATE_CHANGED, ge, this), n.off(c.default.PLAYBACK_SEEKING, $, this), n.off(c.default.WALLCLOCK_TIME_UPDATED, me, this), n.off(c.default.SOURCEBUFFER_APPEND_COMPLETED, J, this), n.off(c.default.SOURCEBUFFER_REMOVE_COMPLETED, le, this), D = Number.POSITIVE_INFINITY, N = _, I = o.default.QUALITY_DEFAULT, O = Number.POSITIVE_INFINITY, w = 0, L = null, !1, C = !1, k = !1, U = !1, H = null, q = null, Y = null, z = null, e || (E.abort(P, F), E.removeSourceBuffer(P, F)), F = null
					}
				}, I = o.default.QUALITY_DEFAULT, C = !1, A = 0, D = Number.POSITIVE_INFINITY, w = 0, O = Number.POSITIVE_INFINITY, F = null, N = _, B = 0, !1, k = !1, U = !1, K = !1, R
			}
			y.__dashjs_factory_name = "BufferController";
			var E = h.default.getClassFactory(y);
			E.BUFFER_LOADED = p, E.BUFFER_EMPTY = _, t.default = E, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/EventController.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/PlaybackController.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js"));

			function u() {
				var e = "urn:mpeg:dash:event:2012",
					t = 1,
					r = this.context,
					n = (0, a.default)(r).getInstance().log,
					i = (0, o.default)(r).getInstance(),
					u = void 0,
					l = void 0,
					d = void 0,
					c = void 0,
					f = void 0,
					h = void 0,
					m = void 0,
					g = void 0,
					p = void 0,
					_ = void 0;

				function v() {
					null !== c && _ && (clearInterval(c), c = null, _ = !1)
				}

				function y() {
					E(l), E(u),
						function() {
							if (d)
								for (var e = p.getTime(), t = Object.keys(d), r = 0; r < t.length; r++) {
									var s = t[r],
										i = d[s];
									null !== i && (i.duration + i.presentationTime) / i.eventStream.timescale < e && (n("Remove Event " + s + " at time " + e), i = null, delete d[s])
								}
						}()
				}

				function E(r) {
					var s, a, o, u = p.getTime();
					if (r)
						for (var l = Object.keys(r), c = 0; c < l.length; c++) {
							var f = l[c],
								_ = r[f];
							void 0 !== _ && (0 === (s = _.presentationTime / _.eventStream.timescale) || s <= u && s + h > u) && (n("Start Event " + f + " at " + u), _.duration > 0 && (d[f] = _), _.eventStream.schemeIdUri == e && _.eventStream.value == t ? (a = void 0, o = void 0, a = m.getValue(), o = a.url, a.hasOwnProperty("Location") && (o = a.Location), n("Refresh manifest @ " + o), g.getManifestLoader().load(o)) : i.trigger(_.eventStream.schemeIdUri, {
								event: _
							}), delete r[f])
						}
				}
				return {
					initialize: function() {
						_ = !1, u = {}, l = {}, d = {}, c = null, h = (f = 100) / 1e3, p = (0, s.default)(r).getInstance()
					},
					addInlineEvents: function(e) {
						if (u = {}, e)
							for (var t = 0; t < e.length; t++) {
								var r = e[t];
								u[r.id] = r, n("Add inline event with id " + r.id)
							}
						n("Added " + e.length + " inline events")
					},
					addInbandEvents: function(e) {
						for (var t = 0; t < e.length; t++) {
							var r = e[t];
							r.id in l ? n("Repeated event with id " + r.id) : (l[r.id] = r, n("Add inband event with id " + r.id))
						}
					},
					clear: v,
					start: function() {
						n("Start Event Controller"), _ || isNaN(f) || (_ = !0, c = setInterval(y, f))
					},
					setConfig: function(e) {
						e && (e.manifestModel && (m = e.manifestModel), e.manifestUpdater && (g = e.manifestUpdater))
					},
					reset: function() {
						v(), u = null, l = null, d = null, p = null
					}
				}
			}
			u.__dashjs_factory_name = "EventController", t.default = i.default.getSingletonFactory(u), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/FragmentController.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = r("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js"),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/DataChunk.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/models/FragmentModel.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/models/MetricsModel.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				c = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js"));

			function f() {
				var e = this.context,
					t = (0, c.default)(e).getInstance().log,
					r = (0, u.default)(e).getInstance(),
					n = void 0,
					d = void 0;

				function f(e) {
					return e && e.type && e.type === s.HTTPRequest.INIT_SEGMENT_TYPE
				}

				function h(e) {
					if (d[e.request.mediaType] === e.sender) {
						var n = e.request,
							s = e.response,
							a = f(n),
							o = n.mediaInfo.streamInfo;
						if (s && o) {
							var u = function(e, t, r) {
								var n = new i.default;
								return n.streamId = r, n.mediaInfo = t.mediaInfo, n.segmentType = t.type, n.start = t.startTime, n.duration = t.duration, n.end = n.start + n.duration, n.bytes = e, n.index = t.index, n.quality = t.quality, n.representationId = t.representationId, n
							}(s, n, o.id);
							r.trigger(a ? l.default.INIT_FRAGMENT_LOADED : l.default.MEDIA_FRAGMENT_LOADED, {
								chunk: u,
								fragmentModel: e.sender
							})
						} else t("No " + n.mediaType + " bytes to push or stream is inactive.")
					}
				}
				return n = {
					getModel: function(t) {
						var r = d[t];
						return r || (r = (0, a.default)(e).create({
							metricsModel: (0, o.default)(e).getInstance()
						}), d[t] = r), r
					},
					isInitializationRequest: f,
					reset: function() {
						for (var e in r.off(l.default.FRAGMENT_LOADING_COMPLETED, h, this), d) d[e].reset();
						d = {}
					}
				}, d = {}, r.on(l.default.FRAGMENT_LOADING_COMPLETED, h, n), n
			}
			f.__dashjs_factory_name = "FragmentController", t.default = d.default.getClassFactory(f), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/MediaController.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/streaming/text/TextController.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/DOMStorage.js")),
				d = "neverReplace",
				c = "alwaysReplace",
				f = "highestBitrate",
				h = "widestRange",
				m = f;

			function g() {
				var e = this.context,
					t = (0, o.default)(e).getInstance().log,
					r = (0, i.default)(e).getInstance(),
					n = (0, u.default)(e).getInstance(),
					a = (0, l.default)(e).getInstance(),
					g = void 0,
					p = void 0,
					_ = void 0,
					v = void 0,
					y = [c, d],
					E = [f, h];

				function T() {
					g = {}, p = {
						audio: null,
						video: null
					}, v = {
						audio: c,
						video: d
					}
				}

				function b(e, t) {
					if (!e || !t) return [];
					var r = t.id;
					return g[r] && g[r][e] ? g[r][e].list : []
				}

				function j(e, t) {
					return !e || !t || t && !g[t.id] ? null : g[t.id][e].current
				}

				function S(e) {
					if (e) {
						var t = e.type,
							n = e.streamInfo,
							i = n.id,
							o = j(t, n);
						if (g[i] && g[i][t] && (!o || !A(e, o))) {
							g[i][t].current = e, o && r.trigger(s.default.CURRENT_TRACK_CHANGED, {
								oldMediaInfo: o,
								newMediaInfo: e,
								switchMode: v[t]
							});
							var u = function(e) {
								var t = {
									lang: e.lang,
									viewpoint: e.viewpoint,
									roles: e.roles,
									accessibility: e.accessibility,
									audioChannelConfiguration: e.audioChannelConfiguration
								};
								return t.lang || t.viewpoint || t.role && t.role.length > 0 || t.accessibility && t.accessibility.length > 0 || t.audioChannelConfiguration && t.audioChannelConfiguration.length > 0 ? t : null
							}(e);
							u && g[i][t].storeLastSettings && (u.roles && (u.role = u.roles[0], delete u.roles), u.accessibility && (u.accessibility = u.accessibility[0]), u.audioChannelConfiguration && (u.audioChannelConfiguration = u.audioChannelConfiguration[0]), a.setSavedMediaSettings(t, u))
						}
					}
				}

				function M(e, t) {
					e && t && (p[e] = t)
				}

				function R(e) {
					return e ? p[e] : null
				}

				function I() {
					return _ || m
				}

				function C(e) {
					return "audio" === e || "video" === e || "text" === e || "fragmentedText" === e
				}

				function A(e, t) {
					var r = e.id === t.id,
						n = e.viewpoint === t.viewpoint,
						s = e.lang === t.lang,
						i = e.roles.toString() === t.roles.toString(),
						a = e.accessibility.toString() === t.accessibility.toString(),
						o = e.audioChannelConfiguration.toString() === t.audioChannelConfiguration.toString();
					return r && n && s && i && a && o
				}

				function D(e, t) {
					var r = !e.lang || e.lang === t.lang,
						n = !e.viewpoint || e.viewpoint === t.viewpoint,
						s = !e.role || !!t.roles.filter((function(t) {
							return t === e.role
						}))[0],
						i = !e.accessibility || !!t.accessibility.filter((function(t) {
							return t === e.accessibility
						}))[0],
						a = !e.audioChannelConfiguration || !!t.audioChannelConfiguration.filter((function(t) {
							return t === e.audioChannelConfiguration
						}))[0];
					return r && n && s && i && a
				}

				function P(e) {
					var r = I(),
						n = [],
						s = function(e) {
							var t, r = 0,
								n = [];
							return e.forEach((function(e) {
								(t = Math.max.apply(Math, e.bitrateList.map((function(e) {
									return e.bandwidth
								})))) > r ? (r = t, n = [e]) : t === r && n.push(e)
							})), n
						},
						i = function(e) {
							var t, r = 0,
								n = [];
							return e.forEach((function(e) {
								(t = e.representationCount) > r ? (r = t, n = [e]) : t === r && n.push(e)
							})), n
						};
					switch (r) {
						case f:
							(n = s(e)).length > 1 && (n = i(n));
							break;
						case h:
							(n = i(e)).length > 1 && (n = s(e));
							break;
						default:
							t("track selection mode is not supported: " + r)
					}
					return n[0]
				}
				return {
					initialize: T,
					checkInitialMediaSettingsForType: function(e, t) {
						var r = R(e),
							n = b(e, t),
							s = [];
						"fragmentedText" !== e ? (r || M(e, r = a.getSavedMediaSettings(e)), n && 0 !== n.length && (r && n.forEach((function(e) {
							D(r, e) && s.push(e)
						})), 0 === s.length ? S(P(n)) : s.length > 1 ? S(P(s)) : S(s[0]))) : S(n[0])
					},
					addTrack: function(e) {
						var t = e ? e.type : null,
							r = e ? e.streamInfo.id : null,
							n = R(t);
						return !(!e || !C(t)) && (g[r] = g[r] || {
							audio: {
								list: [],
								storeLastSettings: !0,
								current: null
							},
							video: {
								list: [],
								storeLastSettings: !0,
								current: null
							},
							text: {
								list: [],
								storeLastSettings: !0,
								current: null
							},
							fragmentedText: {
								list: [],
								storeLastSettings: !0,
								current: null
							}
						}, !(g[r][t].list.indexOf(e) >= 0) && (g[r][t].list.push(e), n && D(n, e) && !j(t, e.streamInfo) && S(e), !0))
					},
					getTracksFor: b,
					getCurrentTrackFor: j,
					isCurrentTrack: function(e) {
						var t = e.type,
							r = e.streamInfo.id;
						return g[r] && g[r][t] && A(g[r][t].current, e)
					},
					setTrack: S,
					setInitialSettings: M,
					getInitialSettings: R,
					setSwitchMode: function(e, r) {
						-1 !== y.indexOf(r) ? v[e] = r : t("track switch mode is not supported: " + r)
					},
					getSwitchMode: function(e) {
						return v[e]
					},
					setSelectionModeForInitialTrack: function(e) {
						-1 !== E.indexOf(e) ? _ = e : t("track selection mode is not supported: " + e)
					},
					getSelectionModeForInitialTrack: I,
					isMultiTrackSupportedByType: C,
					isTracksEqual: A,
					setConfig: function(e) {
						e && e.errHandler && e.errHandler
					},
					reset: function() {
						T(), n.reset()
					}
				}
			}
			g.__dashjs_factory_name = "MediaController";
			var p = a.default.getSingletonFactory(g);
			p.TRACK_SWITCH_MODE_NEVER_REPLACE = d, p.TRACK_SWITCH_MODE_ALWAYS_REPLACE = c, p.TRACK_SELECTION_MODE_HIGHEST_BITRATE = f, p.TRACK_SELECTION_MODE_WIDEST_RANGE = h, p.DEFAULT_INIT_TRACK_SELECTION_MODE = m, t.default = p, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/MediaSourceController.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				};

			function a() {
				return {
					createMediaSource: function() {
						var e = "WebKitMediaSource" in window;
						return "MediaSource" in window ? new MediaSource : e ? new WebKitMediaSource : null
					},
					attachMediaSource: function(e, t) {
						var r = window.URL.createObjectURL(e);
						return t.setSource(r), r
					},
					detachMediaSource: function(e) {
						e.setSource(null)
					},
					setDuration: function(e, t) {
						return e.duration != t && (e.duration = t), e.duration
					},
					signalEndOfStream: function(e) {
						var t = e.sourceBuffers,
							r = t.length,
							n = 0;
						if ("open" === e.readyState) {
							for (; n < r; n++) {
								if (t[n].updating) return;
								if (0 === t[n].buffered.length) return
							}
							e.endOfStream()
						}
					}
				}
			}
			a.__dashjs_factory_name = "MediaSourceController", t.default = i.default.getSingletonFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/PlaybackController.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/BufferController.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/models/URIQueryAndFragmentModel.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/models/MediaPlayerModel.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js"));

			function c() {
				var e, t = this.context,
					r = (0, d.default)(t).getInstance().log,
					n = (0, o.default)(t).getInstance(),
					l = void 0,
					c = void 0,
					f = void 0,
					h = void 0,
					m = void 0,
					g = void 0,
					p = void 0,
					_ = void 0,
					v = void 0,
					y = void 0,
					E = void 0,
					T = void 0,
					b = void 0,
					j = void 0,
					S = void 0,
					M = void 0,
					R = void 0;

				function I() {
					y = 0, E = NaN, T = null, S = null, R = !1, b = {}, M = (0, a.default)(t).getInstance()
				}

				function C(e) {
					!S && e.fromStreamInfo && b[e.fromStreamInfo.id] && delete b[e.fromStreamInfo.id]
				}

				function A() {
					var e = L(!0),
						t = S ? e - j.start : 0;
					return e + (j.duration - t) - x()
				}

				function D() {
					if (l) {
						l.autoplay = !0;
						var e = l.play();
						e && "undefined" != typeof Promise && e instanceof Promise && e.catch((function(e) {
							"NotAllowedError" === e.name && n.trigger(u.default.PLAYBACK_NOT_ALLOWED), r("Caught pending play exception - continuing (" + e + ")")
						}))
					} else R = !0
				}

				function P() {
					if (l) return l.paused
				}

				function w() {
					l && (l.pause(), l.autoplay = !1)
				}

				function O(e) {
					v && (r("Requesting seek to time: " + e), v.setCurrentTime(e))
				}

				function x() {
					if (l) return l.currentTime
				}

				function F() {
					if (l) return l.playbackRate
				}

				function N() {
					if (l) return l.ended
				}

				function L(e) {
					var r = void 0,
						n = (0, i.default)(t).getInstance().getURIFragmentData(),
						s = parseInt(n.s, 10),
						a = parseInt(n.t, 10),
						o = NaN;
					if (e || (o = isNaN(s) ? a : s), S) !isNaN(o) && o > 1262304e3 && ((r = o - j.manifestInfo.availableFrom.getTime() / 1e3) > E || r < E - j.manifestInfo.DVRWindowSize) && (r = null), r = r || E;
					else if (!isNaN(o) && o < Math.max(j.manifestInfo.duration, j.duration) && o >= 0) r = o;
					else {
						var u = b[j.id];
						void 0 === u && (u = c.getActiveStreamCommonEarliestTime()), r = Math.max(u, j.start)
					}
					return r
				}

				function B() {
					if (null === T) {
						T = setInterval((function() {
							n.trigger(u.default.WALLCLOCK_TIME_UPDATED, {
								isDynamic: S,
								time: new Date
							})
						}), M.getWallclockTimeUpdateInterval())
					}
				}

				function k() {
					clearInterval(T), T = null
				}

				function U() {
					if (!P() && S && 0 !== l.readyState) {
						var e = x(),
							t = function(e) {
								var t, r = h.getReadOnlyMetricsFor("video") || h.getReadOnlyMetricsFor("audio"),
									n = m.getCurrentDVRInfo(r),
									s = n ? n.range : null;
								if (!s) return NaN;
								if (e > s.end) t = Math.max(s.end - 2 * j.manifestInfo.minBufferTime, s.start);
								else {
									if (!(e < s.start)) return e;
									t = s.start
								}
								return t
							}(e);
						!isNaN(t) && t !== e && O(t)
					}
				}

				function K(e) {
					if (!e.error) {
						var t = _.convertDataToTrack(g.getValue(), e.currentRepresentation).mediaInfo.streamInfo;
						j.id === t.id && (j = t, U())
					}
				}

				function H() {
					n.trigger(u.default.CAN_PLAY)
				}

				function q() {
					r("Native video element event: play"), U(), B(), n.trigger(u.default.PLAYBACK_STARTED, {
						startTime: x()
					})
				}

				function Y() {
					r("Native video element event: playing"), n.trigger(u.default.PLAYBACK_PLAYING, {
						playingTime: x()
					})
				}

				function z() {
					r("Native video element event: pause"), n.trigger(u.default.PLAYBACK_PAUSED, {
						ended: N()
					})
				}

				function V() {
					var e = x();
					r("Seeking to: " + e), B(), n.trigger(u.default.PLAYBACK_SEEKING, {
						seekTime: e
					})
				}

				function G() {
					r("Native video element event: seeked"), n.trigger(u.default.PLAYBACK_SEEKED)
				}

				function W() {
					var e = x();
					e !== y && (y = e, n.trigger(u.default.PLAYBACK_TIME_UPDATED, {
						timeToEnd: A(),
						time: e
					}))
				}

				function Q() {
					n.trigger(u.default.PLAYBACK_PROGRESS)
				}

				function X() {
					var e = F();
					r("Native video element event: ratechange: ", e), n.trigger(u.default.PLAYBACK_RATE_CHANGED, {
						playbackRate: e
					})
				}

				function J() {
					var e;
					r("Native video element event: loadedmetadata"), (!S && j.isFirst || f.isTimeSyncCompleted()) && (e = L(!1)) > 0 && (O(e), r("Starting playback at offset: " + e)), n.trigger(u.default.PLAYBACK_METADATA_LOADED), B()
				}

				function Z() {
					r("Native video element event: ended"), w(), k(), n.trigger(u.default.PLAYBACK_ENDED)
				}

				function $(e) {
					var t = e.target || e.srcElement;
					n.trigger(u.default.PLAYBACK_ERROR, {
						error: t.error
					})
				}

				function ee(e) {
					var t = e.bufferedRanges;
					if (t && t.length) {
						var r = Math.max(t.start(0), j.start),
							n = void 0 === b[j.id] ? r : Math.max(b[j.id], r);
						n !== b[j.id] && (!S && L(!0) < n && x() < n && O(n), b[j.id] = n)
					}
				}

				function te(e) {
					e.streamInfo.id === j.id && v.setStallState(e.mediaType, e.state === s.default.BUFFER_EMPTY)
				}
				return e = {
					initialize: function(e) {
						j = e, (l = v.getElement()).addEventListener("canplay", H), l.addEventListener("play", q), l.addEventListener("playing", Y), l.addEventListener("pause", z), l.addEventListener("error", $), l.addEventListener("seeking", V), l.addEventListener("seeked", G), l.addEventListener("timeupdate", W), l.addEventListener("progress", Q), l.addEventListener("ratechange", X), l.addEventListener("loadedmetadata", J), l.addEventListener("ended", Z), S = j.manifestInfo.isDynamic, E = j.start, n.on(u.default.DATA_UPDATE_COMPLETED, K, this), n.on(u.default.BYTES_APPENDED, ee, this), n.on(u.default.BUFFER_LEVEL_STATE_CHANGED, te, this), n.on(u.default.PERIOD_SWITCH_STARTED, C, this), R && (R = !1, D())
					},
					setConfig: function(e) {
						e && (e.streamController && (c = e.streamController), e.timelineConverter && (f = e.timelineConverter), e.metricsModel && (h = e.metricsModel), e.dashMetrics && (m = e.dashMetrics), e.manifestModel && (g = e.manifestModel), e.dashManifestModel && (p = e.dashManifestModel), e.adapter && (_ = e.adapter), e.videoModel && (v = e.videoModel))
					},
					getStreamStartTime: L,
					getTimeToStreamEnd: A,
					isPlaybackStarted: function() {
						return x() > 0
					},
					getStreamId: function() {
						return j.id
					},
					getTime: x,
					getPlaybackRate: F,
					getPlayedRanges: function() {
						if (l) return l.played
					},
					getEnded: N,
					getIsDynamic: function() {
						return S
					},
					setLiveStartTime: function(e) {
						E = e
					},
					getLiveStartTime: function() {
						return E
					},
					computeLiveDelay: function(e, t) {
						var r = p.getMpd(g.getValue()),
							n = void 0;
						n = M.getUseSuggestedPresentationDelay() && r.hasOwnProperty("suggestedPresentationDelay") ? r.suggestedPresentationDelay : M.getLiveDelay() ? M.getLiveDelay() : isNaN(e) ? 2 * j.manifestInfo.minBufferTime : e * M.getLiveDelayFragmentCount();
						var s = Math.max(t - 10, t / 2);
						return Math.min(n, s)
					},
					play: D,
					isPaused: P,
					pause: w,
					isSeeking: function() {
						if (l) return l.seeking
					},
					seek: O,
					reset: function() {
						v && l && (n.off(u.default.DATA_UPDATE_COMPLETED, K, this), n.off(u.default.BUFFER_LEVEL_STATE_CHANGED, te, this), n.off(u.default.BYTES_APPENDED, ee, this), k(), l.removeEventListener("canplay", H), l.removeEventListener("play", q), l.removeEventListener("playing", Y), l.removeEventListener("pause", z), l.removeEventListener("error", $), l.removeEventListener("seeking", V), l.removeEventListener("seeked", G), l.removeEventListener("timeupdate", W), l.removeEventListener("progress", Q), l.removeEventListener("ratechange", X), l.removeEventListener("loadedmetadata", J), l.removeEventListener("ended", Z)), v = null, j = null, l = null, S = null, I()
					}
				}, I(), e
			}
			c.__dashjs_factory_name = "PlaybackController", t.default = l.default.getSingletonFactory(c), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/ScheduleController.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = r("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/PlayList.js"),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/PlaybackController.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/AbrController.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/BufferController.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/MediaController.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/streaming/rules/scheduling/BufferLevelRule.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/streaming/rules/scheduling/NextFragmentRequestRule.js")),
				c = n(r("./node_modules/dashjs/build/es5/src/streaming/text/TextController.js")),
				f = n(r("./node_modules/dashjs/build/es5/src/streaming/models/FragmentModel.js")),
				h = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/SourceBufferController.js")),
				m = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/LiveEdgeFinder.js")),
				g = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				p = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				_ = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				v = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/StreamController.js")),
				y = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js"));

			function E(e) {
				var t, r = this.context,
					n = (0, y.default)(r).getInstance().log,
					_ = (0, g.default)(r).getInstance(),
					E = e.metricsModel,
					T = e.manifestModel,
					b = e.adapter,
					j = e.dashMetrics,
					S = e.dashManifestModel,
					M = e.timelineConverter,
					R = e.mediaPlayerModel,
					I = void 0,
					C = void 0,
					A = void 0,
					D = void 0,
					P = void 0,
					w = void 0,
					O = void 0,
					x = void 0,
					F = void 0,
					N = void 0,
					L = void 0,
					B = void 0,
					k = void 0,
					U = void 0,
					K = void 0,
					H = void 0,
					q = void 0,
					Y = void 0,
					z = void 0,
					V = void 0,
					G = void 0,
					W = void 0,
					Q = void 0,
					X = void 0,
					J = void 0,
					Z = void 0,
					$ = void 0;

				function ee() {
					D && !V.getIsBufferingCompleted() && (Ce(), w = !1, P && (P = !1), ne(0), n("Schedule controller starting for " + I))
				}

				function te() {
					w || (w = !0, clearTimeout(B), n("Schedule controller stopping for " + I))
				}

				function re() {
					if (!(w || N || !V || U.isPaused() && !Q)) {
						var e, t;
						e = 1.5 * D.fragmentDuration, (t = C.getRequests({
							state: f.default.FRAGMENT_MODEL_EXECUTED,
							time: U.getTime() + e,
							threshold: 0
						})[0]) && -1 === $.indexOf(t) && !S.getIsTextTrack(I) && (!K.isCurrentTrack(t.mediaInfo) || R.getFastSwitchEnabled() && t.quality < D.quality && V.getBufferLevel() >= e && H.getAbandonmentStateFor(I) !== a.default.ABANDON_LOAD ? (ae(t), n("Reloading outdated fragment at index: ", t.index)) : t.quality > D.quality && Me(U.getTime() + V.getBufferLevel()));
						var r = $.length > 0;
						if (r || function(e, t) {
								J[t] = J[t] || {};
								var r = H.getTopQualityIndexFor(e, t);
								return J[t][e] != r && (n("Top quality" + e + " index has changed from " + J[t][e] + " to " + r), J[t][e] = r, !0)
							}(D.mediaInfo.type, q.getStreamInfo().id) || G.execute(q, I, Y.isVideoTrackPresent())) {
							var s = function() {
								if (D.quality !== Z) Z = D.quality, V.switchInitData(q.getStreamInfo().id, D.id);
								else {
									var e = $.shift();
									if (z.isInitializationRequest(e)) V.switchInitData(e.mediaInfo.streamInfo.id, e.representationId);
									else {
										var t = W.execute(q, e);
										t ? C.executeRequest(t) : (N = !1, ne(500))
									}
								}
							};
							N = !0, r ? s() : (H.getPlaybackQuality(q), s())
						} else ne(500)
					}
				}

				function ne(e) {
					clearTimeout(B), B = setTimeout(re, e)
				}

				function se(e) {
					e.sender && e.sender.getStreamProcessor() === q && ie(D.quality)
				}

				function ie(e) {
					Z = e;
					var t = b.getInitRequest(q, e);
					t && (N = !0, C.executeRequest(t))
				}

				function ae(e) {
					$.push(e)
				}

				function oe(e) {
					if (I === e.mediaType && q.getStreamInfo().id === e.streamInfo.id) {
						if (null == (D = q.getRepresentationInfoForQuality(e.newQuality))) throw new Error("Unexpected error! - currentRepresentationInfo is null or undefined");
						Ie(new Date, s.PlayListTrace.REPRESENTATION_SWITCH_STOP_REASON), Ce()
					}
				}

				function ue(e) {
					if (U) {
						var t = C.getRequests({
							state: f.default.FRAGMENT_MODEL_EXECUTED,
							time: U.getTime(),
							threshold: 0
						})[0];
						t && U.getTime() >= t.startTime && (t.quality !== X && e && _.trigger(p.default.QUALITY_CHANGE_RENDERED, {
							mediaType: I,
							oldQuality: X,
							newQuality: t.quality
						}), X = t.quality)
					}
				}

				function le(e) {
					e.error || e.sender.getStreamProcessor() !== q || (D = b.convertDataToTrack(T.getValue(), e.currentRepresentation))
				}

				function de(e) {
					e.error || q.getStreamInfo().id !== e.streamInfo.id || (D = q.getCurrentRepresentationInfo(), A && P && (M.setTimeSyncCompleted(!0), function() {
						var e = (0, m.default)(r).getInstance().getLiveEdge(),
							t = D.mediaInfo.streamInfo.manifestInfo.DVRWindowSize / 2,
							n = e - U.computeLiveDelay(D.fragmentDuration, t),
							s = b.getFragmentRequestForTime(q, D, n, {
								ignoreIsFinished: !0
							});
						k = U.getLiveStartTime(), (isNaN(k) || s.startTime > k) && (U.setLiveStartTime(s.startTime), k = s.startTime);
						var i = j.getCurrentManifestUpdate(E.getMetricsFor("stream"));
						E.updateManifestUpdateInfo(i, {
							currentTime: k,
							presentationStartTime: e,
							latency: e - k,
							clientTimeOffset: M.getClientTimeOffset()
						})
					}()), w && ee())
				}

				function ce(e) {
					e.fragmentModel === C && (te(), N = !1, n("Stream is complete"))
				}

				function fe(e) {
					e.sender === C && (S.getIsTextTrack(I) && (N = !1), e.error && e.request.serviceLocation && !w && (ae(e.request), N = !1, ne(0)))
				}

				function he() {
					ue(!0)
				}

				function me(e) {
					e.sender.getStreamProcessor() === q && (N = !1, ne(0))
				}

				function ge(e) {
					e.streamProcessor === q && (ae(e.request), N = !1, ne(0))
				}

				function pe(e) {
					e.sender.getStreamProcessor() === q && te()
				}

				function _e(e) {
					e.sender.getStreamProcessor() === q && (C.removeExecutedRequestsBeforeTime(e.to), e.hasEnoughSpaceToAppend && w && ee())
				}

				function ve(e) {
					e.sender.getStreamProcessor() !== q || e.state !== o.default.BUFFER_EMPTY || U.isSeeking() || (n("Buffer is empty! Stalling!"), Ie(new Date, s.PlayListTrace.REBUFFERING_REASON))
				}

				function ye(e) {
					e.sender.getStreamProcessor() === q && te()
				}

				function Ee() {
					C.abortRequests(), te()
				}

				function Te(e) {
					e.sender.getStreamProcessor() === q && ie(e.index)
				}

				function be() {
					!w && Q || ee()
				}

				function je(e) {
					k = e.seekTime, Re(0), w && ee();
					var t = j.getCurrentManifestUpdate(E.getMetricsFor("stream")),
						r = D.DVRWindow ? D.DVRWindow.end - U.getTime() : NaN;
					E.updateManifestUpdateInfo(t, {
						latency: r
					})
				}

				function Se(e) {
					x && (x.playbackspeed = e.playbackRate.toString())
				}

				function Me(e) {
					k = e
				}

				function Re(e) {
					L = e
				}

				function Ie(e, t) {
					if (O && !1 === F) {
						var r = x.start,
							n = e.getTime() - r.getTime();
						x.duration = n, x.stopreason = t, O.trace.push(x), F = !0
					}
				}

				function Ce() {
					O && !0 === F && D && (F = !1, (x = new s.PlayListTrace).representationid = D.id, x.start = new Date, x.mstart = 1e3 * U.getTime(), x.playbackspeed = U.getPlaybackRate().toString())
				}
				return t = {
					initialize: function(e, t) {
						I = e, q = t, U = (0, i.default)(r).getInstance(), K = (0, u.default)(r).getInstance(), H = (0, a.default)(r).getInstance(), Y = (0, v.default)(r).getInstance(), z = q.getFragmentController(), V = q.getBufferController(), C = z.getModel(I), A = q.isDynamic(), Q = R.getScheduleWhilePaused(), G = (0, l.default)(r).create({
							dashMetrics: j,
							metricsModel: E,
							textController: (0, c.default)(r).getInstance()
						}), W = (0, d.default)(r).create({
							adapter: b,
							sourceBufferController: (0, h.default)(r).getInstance(),
							textController: (0, c.default)(r).getInstance()
						}), S.getIsTextTrack(I) && _.on(p.default.TIMED_TEXT_REQUESTED, Te, this), _.on(p.default.QUALITY_CHANGE_REQUESTED, oe, this), _.on(p.default.DATA_UPDATE_STARTED, pe, this), _.on(p.default.DATA_UPDATE_COMPLETED, le, this), _.on(p.default.FRAGMENT_LOADING_COMPLETED, fe, this), _.on(p.default.STREAM_COMPLETED, ce, this), _.on(p.default.STREAM_INITIALIZED, de, this), _.on(p.default.BUFFER_LEVEL_STATE_CHANGED, ve, this), _.on(p.default.BUFFER_CLEARED, _e, this), _.on(p.default.BYTES_APPENDED, me, this), _.on(p.default.INIT_REQUESTED, se, this), _.on(p.default.QUOTA_EXCEEDED, ye, this), _.on(p.default.PLAYBACK_SEEKING, je, this), _.on(p.default.PLAYBACK_STARTED, be, this), _.on(p.default.PLAYBACK_RATE_CHANGED, Se, this), _.on(p.default.PLAYBACK_TIME_UPDATED, he, this), _.on(p.default.URL_RESOLUTION_FAILED, Ee, this), _.on(p.default.FRAGMENT_LOADING_ABANDONED, ge, this)
					},
					getStreamProcessor: function() {
						return q
					},
					getSeekTarget: function() {
						return k
					},
					setSeekTarget: Me,
					getFragmentModel: function() {
						return C
					},
					setTimeToLoadDelay: Re,
					getTimeToLoadDelay: function() {
						return L
					},
					replaceRequest: ae,
					start: ee,
					stop: te,
					reset: function() {
						_.off(p.default.DATA_UPDATE_STARTED, pe, this), _.off(p.default.DATA_UPDATE_COMPLETED, le, this), _.off(p.default.BUFFER_LEVEL_STATE_CHANGED, ve, this), _.off(p.default.QUALITY_CHANGE_REQUESTED, oe, this), _.off(p.default.FRAGMENT_LOADING_COMPLETED, fe, this), _.off(p.default.STREAM_COMPLETED, ce, this), _.off(p.default.STREAM_INITIALIZED, de, this), _.off(p.default.QUOTA_EXCEEDED, ye, this), _.off(p.default.BYTES_APPENDED, me, this), _.off(p.default.BUFFER_CLEARED, _e, this), _.off(p.default.INIT_REQUESTED, se, this), _.off(p.default.PLAYBACK_RATE_CHANGED, Se, this), _.off(p.default.PLAYBACK_SEEKING, je, this), _.off(p.default.PLAYBACK_STARTED, be, this), _.off(p.default.PLAYBACK_TIME_UPDATED, he, this), _.off(p.default.URL_RESOLUTION_FAILED, Ee, this), _.off(p.default.FRAGMENT_LOADING_ABANDONED, ge, this), S.getIsTextTrack(I) && _.off(p.default.TIMED_TEXT_REQUESTED, Te, this), te(), ue(!1), N = !1, L = 0, k = NaN, U = null, O = null
					},
					setPlayList: function(e) {
						O = e
					},
					getBufferTarget: function() {
						return G.getBufferTarget(q, I, Y.isVideoTrackPresent())
					},
					finalisePlayList: function(e, t) {
						Ie(e, t), O = null
					}
				}, P = !0, Z = NaN, X = NaN, J = {}, $ = [], w = !0, O = null, x = null, F = !0, N = !1, L = 0, k = NaN, t
			}
			E.__dashjs_factory_name = "ScheduleController", t.default = _.default.getClassFactory(E), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/SourceBufferController.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/text/TextController.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/Error.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function l() {
				var e = this.context,
					t = (0, a.default)(e).getInstance();

				function r(e, t, r) {
					var n, s, i = null,
						a = 0,
						o = 0,
						u = null,
						l = null,
						d = 0,
						c = r || .15;
					try {
						i = e.buffered
					} catch (f) {
						return null
					}
					if (null != i) {
						for (s = 0, n = i.length; s < n; s++)
							if (a = i.start(s), o = i.end(s), null === u) d = Math.abs(a - t), t >= a && t < o ? (u = a, l = o) : d <= c && (u = a, l = o);
							else {
								if (!((d = a - l) <= c)) break;
								l = o
							} if (null !== u) return {
							start: u,
							end: l
						}
					}
					return null
				}

				function n(e) {
					try {
						return e.buffered
					} catch (t) {
						return null
					}
				}

				function u(e, t) {
					var r, n = function() {
						e.updating || (clearInterval(r), t())
					};
					if (e.updating)
						if ("function" == typeof e.addEventListener) try {
							e.addEventListener("updateend", (function r() {
								e.updating || (e.removeEventListener("updateend", r, !1), t())
							}), !1)
						} catch (s) {
							r = setInterval(n, 50)
						} else r = setInterval(n, 50);
						else t()
				}
				return {
					append: function(e, r) {
						var n = r.bytes,
							s = "append" in e ? "append" : "appendBuffer" in e ? "appendBuffer" : null,
							a = "Object" === Object.prototype.toString.call(e).slice(8, -1);
						s && u(e, (function() {
							try {
								a ? e[s](n, r) : e[s](n), u(e, (function() {
									t.trigger(o.default.SOURCEBUFFER_APPEND_COMPLETED, {
										buffer: e,
										bytes: n
									})
								}))
							} catch (l) {
								t.trigger(o.default.SOURCEBUFFER_APPEND_COMPLETED, {
									buffer: e,
									bytes: n,
									error: new i.default(l.code, l.message, null)
								})
							}
						}))
					},
					remove: function(e, r, n, s) {
						u(e, (function() {
							try {
								r >= 0 && n > r && "ended" !== s.readyState && e.remove(r, n), u(e, (function() {
									t.trigger(o.default.SOURCEBUFFER_REMOVE_COMPLETED, {
										buffer: e,
										from: r,
										to: n
									})
								}))
							} catch (a) {
								t.trigger(o.default.SOURCEBUFFER_REMOVE_COMPLETED, {
									buffer: e,
									from: r,
									to: n,
									error: new i.default(a.code, a.message, null)
								})
							}
						}))
					},
					abort: function(e, t) {
						try {
							"open" === e.readyState ? t.abort() : t.setTextTrack && "ended" === e.readyState && t.abort()
						} catch (r) {}
					},
					createSourceBuffer: function(t, r) {
						var n = r.codec,
							a = null;
						try {
							if (n.match(/application\/mp4;\s*codecs="(stpp|wvtt).*"/i)) throw new i.default("not really supported");
							a = t.addSourceBuffer(n)
						} catch (o) {
							if (!r.isText && -1 === n.indexOf('codecs="stpp') && -1 === n.indexOf('codecs="wvtt')) throw o;
							a = (0, s.default)(e).getInstance().getTextSourceBuffer()
						}
						return a
					},
					removeSourceBuffer: function(e, t) {
						try {
							e.removeSourceBuffer(t)
						} catch (r) {}
					},
					getBufferRange: r,
					getAllRanges: n,
					getTotalBufferedTime: function(e) {
						var t, r, s = n(e),
							i = 0;
						if (!s) return i;
						for (r = 0, t = s.length; r < t; r++) i += s.end(r) - s.start(r);
						return i
					},
					getBufferLength: function(e, t, n) {
						var s;
						return null === (s = r(e, t, n)) ? 0 : s.end - t
					},
					getRangeDifference: function(e, t) {
						if (!t) return null;
						var r, s, i, a, o, u, l, d, c = n(t);
						if (!c) return null;
						for (var f = 0, h = c.length; f < h; f++) {
							if (o = e.length > f ? {
									start: e.start(f),
									end: e.end(f)
								} : null, r = c.start(f), s = c.end(f), !o) return d = {
								start: r,
								end: s
							};
							if (i = o.start === r, a = o.end === s, !i || !a) {
								if (i) d = {
									start: o.end,
									end: s
								};
								else {
									if (!a) return d = {
										start: r,
										end: s
									};
									d = {
										start: r,
										end: o.start
									}
								}
								return u = e.length > f + 1 ? {
									start: e.start(f + 1),
									end: e.end(f + 1)
								} : null, l = f + 1 < h ? {
									start: c.start(f + 1),
									end: c.end(f + 1)
								} : null, !u || l && l.start === u.start && l.end === u.end || (d.end = u.start), d
							}
						}
						return null
					},
					setConfig: function(e) {
						e && e.dashManifestModel && e.dashManifestModel
					}
				}
			}
			l.__dashjs_factory_name = "SourceBufferController";
			var d = u.default.getSingletonFactory(l);
			d.QUOTA_EXCEEDED_ERROR_CODE = 22, t.default = d, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/StreamController.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/PlaybackController.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/Stream.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/ManifestUpdater.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/streaming/models/URIQueryAndFragmentModel.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/streaming/models/VideoModel.js")),
				c = n(r("./node_modules/dashjs/build/es5/src/streaming/models/MediaPlayerModel.js")),
				f = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				h = r("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/PlayList.js"),
				m = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				g = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/InitCache.js"));

			function p() {
				var e = .1,
					t = this.context,
					r = (0, m.default)(t).getInstance().log,
					n = (0, o.default)(t).getInstance(),
					f = void 0,
					p = void 0,
					_ = void 0,
					v = void 0,
					y = void 0,
					E = void 0,
					T = void 0,
					b = void 0,
					j = void 0,
					S = void 0,
					M = void 0,
					R = void 0,
					I = void 0,
					C = void 0,
					A = void 0,
					D = void 0,
					P = void 0,
					w = void 0,
					O = void 0,
					x = void 0,
					F = void 0,
					N = void 0,
					L = void 0,
					B = void 0,
					k = void 0,
					U = void 0,
					K = void 0,
					H = void 0,
					q = void 0,
					Y = void 0,
					z = void 0,
					V = void 0;

				function G(t) {
					if (ne()) {
						var r = U.getPlaybackQuality();
						r && b.addDroppedFrames("video", r)
					}
					K.isSeeking() || t.timeToEnd <= e && Z()
				}

				function W(e) {
					var t = function(e) {
						var t = 0,
							r = null,
							n = P.length;
						n > 0 && (t += P[0].getStartTime());
						for (var s = 0; s < n; s++)
							if (r = P[s], t += r.getDuration(), e < t) return r;
						return null
					}(e.seekTime);
					t && t !== w ? (ie(h.PlayListTrace.END_OF_PERIOD_STOP_REASON), $(w, t, e.seekTime)) : ie(h.PlayListTrace.USER_REQUEST_STOP_REASON), ae(h.PlayList.SEEK_START_REASON)
				}

				function Q() {
					Y ? (Y = !1, ae(h.PlayList.INITIAL_PLAYOUT_START_REASON)) : q && (q = !1, ae(h.PlayList.RESUME_FROM_PAUSE_START_REASON))
				}

				function X(e) {
					e.ended || (q = !0, ie(h.PlayListTrace.USER_REQUEST_STOP_REASON))
				}

				function J() {
					var e = ue().isLast;
					k && e && M.signalEndOfStream(k)
				}

				function Z() {
					var e = function() {
						if (w) {
							var e = (t = w.getStreamInfo().start, r = w.getStreamInfo().duration, {
								v: P.filter((function(e) {
									return e.getStreamInfo().start === t + r
								}))[0]
							});
							if ("object" == typeof e) return e.v
						}
						var t, r
					}();
					e && $(w, e, NaN), ie(e ? h.PlayListTrace.END_OF_PERIOD_STOP_REASON : h.PlayListTrace.END_OF_CONTENT_STOP_REASON)
				}

				function $(e, t, s) {
					!N && t && e !== t && (N = !0, n.trigger(u.default.PERIOD_SWITCH_STARTED, {
						fromStreamInfo: e ? e.getStreamInfo() : null,
						toStreamInfo: t.getStreamInfo()
					}), e && e.deactivate(), w = t, K.initialize(w.getStreamInfo()), function(e) {
						var t = void 0;

						function s() {
							var i, a;
							r("MediaSource is open!"), window.URL.revokeObjectURL(t), k.removeEventListener("sourceopen", s), k.removeEventListener("webkitsourceopen", s), i = w.getStreamInfo().manifestInfo.duration, a = M.setDuration(k, i), r("Duration successfully set to: " + a),
								function(e) {
									w.activate(k), Y ? V = se() : isNaN(e) ? (t = K.getStreamStartTime(!0), w.getProcessors().forEach((function(e) {
										T.setIndexHandlerTime(e, t)
									})), K.seek(t)) : K.seek(e);
									var t;
									w.startEventController(), (F || !Y) && K.play();
									N = !1, n.trigger(u.default.PERIOD_SWITCH_COMPLETED, {
										toStreamInfo: w.getStreamInfo()
									})
								}(e)
						}
						k ? M.detachMediaSource(U) : k = M.createMediaSource();
						k.addEventListener("sourceopen", s, !1), k.addEventListener("webkitsourceopen", s, !1), t = M.attachMediaSource(k, U), r("MediaSource attached to element.  Waiting on open...")
					}(s))
				}

				function ee(e) {
					for (var t = 0, r = P.length; t < r; t++)
						if (P[t].getId() === e.id) return P[t];
					return null
				}

				function te() {
					var e = y.getValue();
					O && (n.trigger(u.default.PROTECTION_CREATED, {
							controller: O,
							manifest: e
						}), O.setMediaElement(U.getElement()), x && O.setProtectionData(x)),
						function(e) {
							try {
								var r = T.getStreamsInfo(e);
								if (0 === r.length) throw new Error("There are no streams");
								var s = j.getCurrentManifestUpdate(b.getMetricsFor("stream"));
								b.updateManifestUpdateInfo(s, {
									currentTime: K.getTime(),
									buffered: U.getElement().buffered,
									presentationStartTime: r[0].start,
									clientTimeOffset: D.getClientTimeOffset()
								});
								for (var a = 0, o = r.length; a < o; a++) {
									var l = r[a],
										d = ee(l);
									d ? d.updateData(l) : (d = (0, i.default)(t).create({
										manifestModel: y,
										manifestUpdater: _,
										adapter: T,
										timelineConverter: D,
										capabilities: p,
										errHandler: A,
										baseURLController: I
									}), P.push(d), d.initialize(l, O)), b.addManifestUpdateStreamInfo(s, l.id, l.index, l.start, l.duration)
								}
								w || $(null, P[0], NaN), n.trigger(u.default.STREAMS_COMPOSED)
							} catch (c) {
								A.manifestError(c.message, "nostreamscomposed", e), B = !0, le()
							}
						}(e)
				}

				function re(e) {
					if (e.error) B = !0, le();
					else {
						var n, s, i = e.manifest,
							a = T.getStreamsInfo(i)[0],
							o = T.getMediaInfoForType(i, a, "video") || T.getMediaInfoForType(i, a, "audio");
						o && (n = T.getDataForMedia(o), (s = E.getRepresentationsForAdaptation(i, n)[0].useCalculatedLiveEdgeTime) && (r("SegmentTimeline detected using calculated Live Edge Time"), H.setUseManifestDateHeaderTimeSource(!1)));
						var u = E.getUTCTimingSources(e.manifest),
							d = !E.getIsDynamic(i) || s ? u : u.concat(H.getUTCTimingSources()),
							f = (0, l.default)(t).getInstance().isManifestHTTPS();
						d.forEach((function(e) {
							e.value.replace(/.*?:\/\//g, "") === c.default.DEFAULT_UTC_TIMING_SOURCE.value.replace(/.*?:\/\//g, "") && (e.value = e.value.replace(f ? new RegExp(/^(http:)?\/\//i) : new RegExp(/^(https:)?\/\//i), f ? "https://" : "http://"), r("Matching default timing source protocol to manifest protocol: ", e.value))
						})), I.initialize(i), R.setConfig({
							metricsModel: b,
							dashMetrics: j
						}), R.initialize(d, H.getUseManifestDateHeaderTimeSource())
					}
				}

				function ne() {
					return void 0 === V && (V = se()), V
				}

				function se() {
					var e = !1;
					return w.getProcessors().forEach((function(t) {
						"video" === t.getMediaInfo().type && (e = !0)
					})), e
				}

				function ie(e, t) {
					t = t || new Date, z && (w && w.getProcessors().forEach((function(r) {
						var n = r.getScheduleController();
						n && n.finalisePlayList(t, e)
					})), b.addPlayList(z), z = null)
				}

				function ae(e) {
					(z = new h.PlayList).start = new Date, z.mstart = 1e3 * K.getTime(), z.starttype = e, w && w.getProcessors().forEach((function(e) {
						var t = e.getScheduleController();
						t && t.setPlayList(z)
					}))
				}

				function oe(e) {
					if (e.error) {
						var t = "";
						switch (e.error.code) {
							case 1:
								t = "MEDIA_ERR_ABORTED";
								break;
							case 2:
								t = "MEDIA_ERR_NETWORK";
								break;
							case 3:
								t = "MEDIA_ERR_DECODE";
								break;
							case 4:
								t = "MEDIA_ERR_SRC_NOT_SUPPORTED";
								break;
							case 5:
								t = "MEDIA_ERR_ENCRYPTED";
								break;
							default:
								t = "UNKNOWN"
						}
						L = !0, e.error.message && (t += " (" + e.error.message + ")"), e.error.msExtendedCode && (t += " (0x" + (e.error.msExtendedCode >>> 0).toString(16).toUpperCase() + ")"), r("Video Element Error: " + t), e.error && r(e.error), A.mediaSourceError(t), le()
					}
				}

				function ue() {
					return w ? w.getStreamInfo() : null
				}

				function le() {
					R.reset(), ie(L || B ? h.PlayListTrace.FAILURE_STOP_REASON : h.PlayListTrace.USER_REQUEST_STOP_REASON);
					for (var e = 0, t = P.length; e < t; e++) {
						P[e].reset(L)
					}
					P = [], n.off(u.default.PLAYBACK_TIME_UPDATED, G, this), n.off(u.default.PLAYBACK_SEEKING, W, this), n.off(u.default.PLAYBACK_ERROR, oe, this), n.off(u.default.PLAYBACK_STARTED, Q, this), n.off(u.default.PLAYBACK_PAUSED, X, this), n.off(u.default.PLAYBACK_ENDED, Z, this), n.off(u.default.MANIFEST_UPDATED, re, this), n.off(u.default.STREAM_BUFFERING_COMPLETED, J, this), I.reset(), _.reset(), b.clearAllCurrentMetrics(), y.setValue(null), v.reset(), D.reset(), S.reset(), T.reset(), C.reset(), N = !1, !1, w = null, L = !1, B = !1, V = void 0, Y = !0, q = !1, k && (M.detachMediaSource(U), k = null), U = null, O && (O.setMediaElement(null), O = null, x = null, y.getValue() && n.trigger(u.default.PROTECTION_DESTROYED, {
						data: y.getValue().url
					})), n.trigger(u.default.STREAM_TEARDOWN_COMPLETE)
				}
				return f = {
					initialize: function(e, r) {
						F = e, x = r, D.initialize(), C = (0, g.default)(t).getInstance(), (_ = (0, a.default)(t).getInstance()).setConfig({
							manifestModel: y,
							dashManifestModel: E
						}), _.initialize(v), U = (0, d.default)(t).getInstance(), (K = (0, s.default)(t).getInstance()).setConfig({
							streamController: f,
							timelineConverter: D,
							metricsModel: b,
							dashMetrics: j,
							manifestModel: y,
							dashManifestModel: E,
							adapter: T,
							videoModel: U
						}), n.on(u.default.TIME_SYNCHRONIZATION_COMPLETED, te, this), n.on(u.default.PLAYBACK_SEEKING, W, this), n.on(u.default.PLAYBACK_TIME_UPDATED, G, this), n.on(u.default.PLAYBACK_ENDED, Z, this), n.on(u.default.PLAYBACK_ERROR, oe, this), n.on(u.default.PLAYBACK_STARTED, Q, this), n.on(u.default.PLAYBACK_PAUSED, X, this), n.on(u.default.MANIFEST_UPDATED, re, this), n.on(u.default.STREAM_BUFFERING_COMPLETED, J, this)
					},
					getAutoPlay: function() {
						return F
					},
					getActiveStreamInfo: ue,
					isStreamActive: function(e) {
						return w.getId() === e.id
					},
					isVideoTrackPresent: ne,
					getStreamById: function(e) {
						return P.filter((function(t) {
							return t.getId() === e
						}))[0]
					},
					getTimeRelativeToStreamId: function(e, t) {
						for (var r = null, n = 0, s = 0, i = null, a = P.length, o = 0; o < a; o++) {
							if (s = (r = P[o]).getStartTime(), i = r.getDuration(), Number.isFinite(s) && (n = s), r.getId() === t) return e - n;
							Number.isFinite(i) && (n += i)
						}
						return null
					},
					load: function(e) {
						v.load(e)
					},
					loadWithManifest: function(e) {
						_.setManifest(e)
					},
					getActiveStreamCommonEarliestTime: function() {
						var e = [];
						return w.getProcessors().forEach((function(t) {
							e.push(t.getIndexHandler().getEarliestTime())
						})), Math.min.apply(Math, e)
					},
					setConfig: function(e) {
						e && (e.capabilities && (p = e.capabilities), e.manifestLoader && (v = e.manifestLoader), e.manifestModel && (y = e.manifestModel), e.dashManifestModel && (E = e.dashManifestModel), e.protectionController && (O = e.protectionController), e.adapter && (T = e.adapter), e.metricsModel && (b = e.metricsModel), e.dashMetrics && (j = e.dashMetrics), e.liveEdgeFinder && (S = e.liveEdgeFinder), e.mediaSourceController && (M = e.mediaSourceController), e.timeSyncController && (R = e.timeSyncController), e.baseURLController && (I = e.baseURLController), e.errHandler && (A = e.errHandler), e.timelineConverter && (D = e.timelineConverter))
					},
					reset: le
				}, O = null, P = [], H = (0, c.default)(t).getInstance(), F = !0, N = !1, !1, q = !1, Y = !0, z = null, L = !1, B = !1, f
			}
			p.__dashjs_factory_name = "StreamController", t.default = f.default.getSingletonFactory(p), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/TimeSyncController.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/Error.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				l = 1,
				d = 5e3;

			function c() {
				var e = this.context,
					t = (0, u.default)(e).getInstance().log,
					r = (0, i.default)(e).getInstance(),
					n = void 0,
					o = void 0,
					c = void 0,
					f = void 0,
					h = void 0,
					m = void 0;

				function g(e) {
					o = e
				}

				function p(e) {
					e
				}

				function _(e) {
					n = e
				}

				function v(e) {
					var t = Date.parse(e);
					return isNaN(t) && (t = function(e) {
						var t, r, n = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})(?::([0-9]*)(\.[0-9]*)?)?(?:([+\-])([0-9]{2})([0-9]{2}))?/.exec(e);
						return t = Date.UTC(parseInt(n[1], 10), parseInt(n[2], 10) - 1, parseInt(n[3], 10), parseInt(n[4], 10), parseInt(n[5], 10), n[6] && (parseInt(n[6], 10) || 0), n[7] && 1e3 * parseFloat(n[7]) || 0), n[9] && n[10] && (r = 60 * parseInt(n[9], 10) + parseInt(n[10], 10), t += ("+" === n[8] ? -1 : 1) * r * 60 * 1e3), new Date(t).getTime()
					}(e)), t
				}

				function y(e) {
					return Date.parse(e)
				}

				function E(e) {
					return Date.parse(e)
				}

				function T(e, t, r) {
					r()
				}

				function b(e, t, r) {
					var n = v(e);
					isNaN(n) ? r() : t(n)
				}

				function j(e, t, r, n, s) {
					var i, a, o = !1,
						u = new XMLHttpRequest,
						l = s ? "HEAD" : "GET",
						c = t.match(/\S+/g);
					t = c.shift(), i = function() {
						o || (o = !0, c.length ? j(e, c.join(" "), r, n, s) : n())
					}, a = function() {
						var t, n;
						200 === u.status && (t = s ? u.getResponseHeader("Date") : u.response, n = e(t), isNaN(n) || (r(n), o = !0))
					}, u.open(l, t), u.timeout = d || 0, u.onload = a, u.onloadend = i, u.send()
				}

				function S(e, t, r) {
					j(E, e, t, r, !0)
				}

				function M(e, t, n) {
					g(!1), r.trigger(a.default.TIME_SYNCHRONIZATION_COMPLETED, {
						time: t,
						offset: n,
						error: e ? new s.default(l) : null
					})
				}
				return {
					initialize: function(e, r) {
						c = r, n = 0, o = !1, !1, f = {
							"urn:mpeg:dash:utc:http-head:2014": S,
							"urn:mpeg:dash:utc:http-xsdate:2014": j.bind(null, v),
							"urn:mpeg:dash:utc:http-iso:2014": j.bind(null, y),
							"urn:mpeg:dash:utc:direct:2014": b,
							"urn:mpeg:dash:utc:http-head:2012": S,
							"urn:mpeg:dash:utc:http-xsdate:2012": j.bind(null, v),
							"urn:mpeg:dash:utc:http-iso:2012": j.bind(null, y),
							"urn:mpeg:dash:utc:direct:2012": b,
							"urn:mpeg:dash:utc:http-ntp:2014": T,
							"urn:mpeg:dash:utc:ntp:2014": T,
							"urn:mpeg:dash:utc:sntp:2014": T
						}, o || (! function e(r, s) {
							var i = s || 0;
							var a = r[i];
							var o = function(e, t) {
								var r, s, i, a = !e || !t;
								a && c ? (r = h.getReadOnlyMetricsFor("stream"), s = m.getLatestMPDRequestHeaderValueByID(r, "Date"), i = null !== s ? new Date(s).getTime() : Number.NaN, isNaN(i) ? M(!0) : (_(i - (new Date).getTime()), M(!1, i / 1e3, n))) : M(a, e, t)
							};
							g(!0);
							a ? f.hasOwnProperty(a.schemeIdUri) ? f[a.schemeIdUri](a.value, (function(e) {
								var r = (new Date).getTime(),
									n = e - r;
								_(n), t("Local time:      " + new Date(r)), t("Server time:     " + new Date(e)), t("Difference (ms): " + n), o(e, n)
							}), (function() {
								e(r, i + 1)
							})) : e(r, i + 1) : (_(0), o())
						}(e), p(!0))
					},
					getOffsetToDeviceTimeMs: function() {
						return n
					},
					setConfig: function(e) {
						e && (e.metricsModel && (h = e.metricsModel), e.dashMetrics && (m = e.dashMetrics))
					},
					reset: function() {
						p(!1), g(!1)
					}
				}
			}
			c.__dashjs_factory_name = "TimeSyncController";
			var f = o.default.getSingletonFactory(c);
			f.TIME_SYNC_FAILED_ERROR_CODE = l, f.HTTP_TIMEOUT_MS = d, t.default = f, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/XlinkController.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/XlinkLoader.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				u = n(r("./node_modules/dashjs/build/es5/externals/xml2json.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/URLUtils.js")),
				d = "onLoad",
				c = "onActuate",
				f = "Period",
				h = "AdaptationSet",
				m = "EventStream",
				g = "urn:mpeg:dash:resolve-to-zero:2013";

			function p(e) {
				var t = this.context,
					r = (0, i.default)(t).getInstance(),
					n = (0, l.default)(t).getInstance(),
					o = void 0,
					p = void 0,
					_ = void 0,
					v = void 0,
					y = void 0,
					E = void 0;

				function T(e, t, r) {
					var s, i, a, o = {};
					for (o.elements = e, o.type = t, o.resolveType = r, 0 === o.elements.length && j(o), a = 0; a < o.elements.length; a++) s = o.elements[a], i = n.isHTTPURL(s.url) ? s.url : s.originalContent.BaseURL + s.url, E.load(i, s, o)
				}

				function b(e) {
					var t, r, n, s = "";
					t = e.element, r = e.resolveObject, t.resolvedContent && (n = t.resolvedContent.indexOf(">") + 1, s = t.resolvedContent.substr(0, n) + "<response>" + t.resolvedContent.substr(n) + "</response>", t.resolvedContent = y.xml_str2json(s)),
						function(e) {
							var t;
							for (t = 0; t < e.elements.length; t++)
								if (!1 === e.elements[t].resolved) return !1;
							return !0
						}(r) && j(r)
				}

				function j(e) {
					var t, n, s = [];
					if (function(e) {
							var t, r, n, s, i, a, o = [];
							for (s = e.elements.length - 1; s >= 0; s--) {
								if (t = e.elements[s], r = t.type + "_asArray", t.resolvedContent) {
									if (t.resolvedContent)
										for (i = 0; i < t.resolvedContent[r].length; i++) n = t.resolvedContent[r][i], o.push(n)
								} else delete t.originalContent["xlink:actuate"], delete t.originalContent["xlink:href"], o.push(t.originalContent);
								for (t.parentElement[r].splice(t.index, 1), a = 0; a < o.length; a++) t.parentElement[r].splice(t.index + a, 0, o[a]);
								o = []
							}
							e.elements.length > 0 && _.run(v)
						}(e), e.resolveType === c && r.trigger(a.default.XLINK_READY, {
							manifest: v
						}), e.resolveType === d) switch (e.type) {
						case f:
							for (t = 0; t < v[f + "_asArray"].length; t++)(n = v[f + "_asArray"][t]).hasOwnProperty(h + "_asArray") && (s = s.concat(S(n[h + "_asArray"], n, h, d))), n.hasOwnProperty(m + "_asArray") && (s = s.concat(S(n[m + "_asArray"], n, m, d)));
							T(s, h, d);
							break;
						case h:
							r.trigger(a.default.XLINK_READY, {
								manifest: v
							})
					}
				}

				function S(e, t, r, n) {
					var s, i, a, o = [];
					for (i = e.length - 1; i >= 0; i--)(s = e[i]).hasOwnProperty("xlink:href") && s["xlink:href"] === g && e.splice(i, 1);
					for (i = 0; i < e.length; i++)(s = e[i]).hasOwnProperty("xlink:href") && s.hasOwnProperty("xlink:actuate") && s["xlink:actuate"] === n && (a = M(s["xlink:href"], t, r, i, n, s), o.push(a));
					return o
				}

				function M(e, t, r, n, s, i) {
					return {
						url: e,
						parentElement: t,
						type: r,
						index: n,
						resolveType: s,
						originalContent: i,
						resolvedContent: null,
						resolved: !1
					}
				}
				return o = {
					resolveManifestOnLoad: function(e) {
						y = new u.default({
							escapeMode: !1,
							attributePrefix: "",
							arrayAccessForm: "property",
							emptyNodeForm: "object",
							stripWhitespaces: !1,
							enableToStringFunc: !1,
							ignoreRoot: !0,
							matchers: p
						}), T(S((v = e).Period_asArray, v, f, d), f, d)
					},
					setMatchers: function(e) {
						p = e
					},
					setIron: function(e) {
						_ = e
					},
					reset: function() {
						r.off(a.default.XLINK_ELEMENT_LOADED, b, o), E && (E.reset(), E = null)
					}
				}, r.on(a.default.XLINK_ELEMENT_LOADED, b, o), E = (0, s.default)(t).create({
					errHandler: e.errHandler,
					metricsModel: e.metricsModel,
					requestModifier: e.requestModifier
				}), o
			}
			p.__dashjs_factory_name = "XlinkController", t.default = o.default.getClassFactory(p), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/MetricsReporting.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/utils/DVBErrorsTranslator.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/MetricsReportingEvents.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/controllers/MetricsCollectionController.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/metrics/MetricsHandlerFactory.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/reporting/ReportingFactory.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function d() {
				var e = this.context;
				return {
					createMetricsReporting: function(t) {
						return (0, s.default)(e).getInstance({
							eventBus: t.eventBus,
							metricsModel: t.metricsModel
						}), (0, a.default)(e).create(t)
					},
					getReportingFactory: function() {
						return (0, u.default)(e).getInstance()
					},
					getMetricsHandlerFactory: function() {
						return (0, o.default)(e).getInstance()
					}
				}
			}
			d.__dashjs_factory_name = "MetricsReporting";
			var c = l.default.getClassFactory(d);
			c.events = i.default, t.default = c, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/MetricsReportingEvents.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function(e, t, r) {
				for (var n = !0; n;) {
					var s = e,
						i = t,
						a = r;
					n = !1, null === s && (s = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(s, i);
					if (void 0 !== o) {
						if ("value" in o) return o.value;
						var u = o.get;
						if (void 0 === u) return;
						return u.call(a)
					}
					var l = Object.getPrototypeOf(s);
					if (null === l) return;
					e = l, t = i, r = a, n = !0, o = l = void 0
				}
			};
			var s, i = r("./node_modules/dashjs/build/es5/src/core/events/EventsBase.js"),
				a = new(function(e) {
					function t() {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), n(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.METRICS_INITIALISATION_COMPLETE = "internal_metricsReportingInitialized", this.BECAME_REPORTING_PLAYER = "internal_becameReportingPlayer"
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), t
				}(((s = i) && s.__esModule ? s : {
					default: s
				}).default));
			t.default = a, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/controllers/MetricsCollectionController.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/controllers/MetricsController.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/utils/ManifestParsing.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/MetricsReportingEvents.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js"));

			function l(e) {
				var t = {},
					r = this.context,
					n = e.eventBus;

				function a(a) {
					if (!a.error) {
						var u = Object.keys(t);
						(0, i.default)(r).getInstance({
							dashManifestModel: e.dashManifestModel
						}).getMetrics(a.manifest).forEach((function(n) {
							var i = JSON.stringify(n);
							if (t.hasOwnProperty(i)) u.splice(i, 1);
							else try {
								var o = (0, s.default)(r).create(e);
								o.initialize(n), t[i] = o
							} catch (a) {}
						})), u.forEach((function(e) {
							t[e].reset(), delete t[e]
						})), n.trigger(o.default.METRICS_INITIALISATION_COMPLETE)
					}
				}

				function l() {
					Object.keys(t).forEach((function(e) {
						t[e].reset()
					})), t = {}
				}
				return n.on(u.default.MANIFEST_UPDATED, a), n.on(u.default.STREAM_TEARDOWN_COMPLETE, l), {}
			}
			l.__dashjs_factory_name = "MetricsCollectionController", t.default = a.default.getClassFactory(l), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/controllers/MetricsController.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/controllers/RangeController.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/controllers/ReportingController.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/controllers/MetricsHandlersController.js"));

			function u(e) {
				var t = void 0,
					r = void 0,
					n = void 0,
					s = this.context;

				function u() {
					t && t.reset(), r && r.reset(), n && n.reset()
				}
				return {
					initialize: function(l) {
						try {
							(n = (0, i.default)(s).create({
								mediaElement: e.mediaElement
							})).initialize(l.Range), (r = (0, a.default)(s).create({
								log: e.log
							})).initialize(l.Reporting, n), (t = (0, o.default)(s).create({
								log: e.log,
								eventBus: e.eventBus
							})).initialize(l.metrics, r)
						} catch (d) {
							throw u(), d
						}
					},
					reset: u
				}
			}
			u.__dashjs_factory_name = "MetricsController", t.default = s.default.getClassFactory(u), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/controllers/MetricsHandlersController.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/metrics/MetricsHandlerFactory.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/MediaPlayerEvents.js"));

			function o(e) {
				var t = [],
					r = void 0,
					n = this.context,
					i = e.eventBus,
					o = (0, s.default)(n).getInstance({
						log: e.log,
						eventBus: e.eventBus
					});

				function u(e) {
					t.forEach((function(t) {
						t.handleNewMetric(e.metric, e.value, e.mediaType)
					}))
				}
				return r = {
					initialize: function(e, n) {
						e.split(",").forEach((function(e, r, s) {
							var i;
							if (-1 !== e.indexOf("(") && -1 === e.indexOf(")")) {
								var a = s[r + 1];
								a && -1 === a.indexOf("(") && -1 !== a.indexOf(")") && (e += "," + a, delete s[r + 1])
							}(i = o.create(e, n)) && t.push(i)
						})), i.on(a.default.METRIC_ADDED, u, r), i.on(a.default.METRIC_UPDATED, u, r)
					},
					reset: function() {
						i.off(a.default.METRIC_ADDED, u, r), i.off(a.default.METRIC_UPDATED, u, r), t.forEach((function(e) {
							return e.reset()
						})), t = []
					}
				}
			}
			o.__dashjs_factory_name = "MetricsHandlersController", t.default = i.default.getClassFactory(o), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/controllers/RangeController.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/CustomTimeRanges.js"));

			function a(e) {
				var t, r = !1,
					n = this.context,
					s = void 0,
					a = e.mediaElement;
				return t = {
					initialize: function(e) {
						e && e.length && (e.forEach((function(e) {
							var t = e.starttime,
								r = t + e.duration;
							s.add(t, r)
						})), r = !!e[0]._useWallClockTime)
					},
					reset: function() {
						s.clear()
					},
					isEnabled: function() {
						var e, t = s.length;
						if (!t) return !0;
						e = r ? (new Date).getTime() / 1e3 : a.currentTime;
						for (var n = 0; n < t; n += 1) {
							var i = s.start(n),
								o = s.end(n);
							if (i <= e && e < o) return !0
						}
						return !1
					}
				}, s = (0, i.default)(n).create(), t
			}
			a.__dashjs_factory_name = "RangeController", t.default = s.default.getClassFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/controllers/ReportingController.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/reporting/ReportingFactory.js"));

			function a(e) {
				var t = [],
					r = (0, i.default)(this.context).getInstance({
						log: e.log
					});
				return {
					initialize: function(e, n) {
						e.some((function(e) {
							var s = r.create(e, n);
							if (s) return t.push(s), !0
						}))
					},
					reset: function() {
						t.forEach((function(e) {
							return e.reset()
						})), t = []
					},
					report: function(e, r) {
						t.forEach((function(t) {
							return t.report(e, r)
						}))
					}
				}
			}
			a.__dashjs_factory_name = "ReportingController", t.default = s.default.getClassFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/metrics/MetricsHandlerFactory.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/metrics/handlers/BufferLevelHandler.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/metrics/handlers/DVBErrorsHandler.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/metrics/handlers/HttpListHandler.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/metrics/handlers/GenericMetricHandler.js"));

			function l(e) {
				var t = e.log,
					r = /([a-zA-Z]*)(\(([0-9]*)(\,\s*([a-zA-Z]*))?\))?/,
					n = this.context,
					s = {
						BufferLevel: i.default,
						DVBErrors: a.default,
						HttpList: o.default,
						PlayList: u.default,
						RepSwitchList: u.default,
						TcpList: u.default
					};
				return {
					create: function(i, a) {
						var o, u = i.match(r);
						if (u) {
							try {
								(o = s[u[1]](n).create({
									eventBus: e.eventBus
								})).initialize(u[1], a, u[3], u[5])
							} catch (l) {
								o = null, t("MetricsHandlerFactory: Could not create handler for type " + u[1] + " with args " + u[3] + ", " + u[5] + " (" + l.message + ")")
							}
							return o
						}
					},
					register: function(e, t) {
						s[e] = t
					},
					unregister: function(e) {
						delete s[e]
					}
				}
			}
			l.__dashjs_factory_name = "MetricsHandlerFactory", t.default = s.default.getSingletonFactory(l), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/metrics/handlers/BufferLevelHandler.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/utils/HandlerHelpers.js"));

			function a() {
				var e = void 0,
					t = void 0,
					r = void 0,
					n = void 0,
					s = void 0,
					a = this.context,
					o = (0, i.default)(a).getInstance(),
					u = [];

				function l() {
					var t = function() {
						try {
							return Object.keys(u).map((function(e) {
								return u[e]
							})).reduce((function(e, t) {
								return e.level < t.level ? e : t
							}))
						} catch (e) {
							return
						}
					}();
					t && s !== t.t && (s = t.t, e.report(r, t))
				}
				return {
					initialize: function(s, i, a) {
						i && (t = o.validateN(a), e = i, r = o.reconstructFullMetricName(s, a), n = setInterval(l, t))
					},
					reset: function() {
						clearInterval(n), n = null, t = 0, e = null, s = null
					},
					handleNewMetric: function(e, t, r) {
						"BufferLevel" === e && (u[r] = t)
					}
				}
			}
			a.__dashjs_factory_name = "BufferLevelHandler", t.default = s.default.getClassFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/metrics/handlers/DVBErrorsHandler.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/MetricsReportingEvents.js"));
			t.default = s.default.getClassFactory((function(e) {
				var t = void 0,
					r = e.eventBus;

				function n() {
					r.off(i.default.METRICS_INITIALISATION_COMPLETE, n, this), r.trigger(i.default.BECAME_REPORTING_PLAYER)
				}
				return {
					initialize: function(e, s) {
						s && (t = s, r.on(i.default.METRICS_INITIALISATION_COMPLETE, n, this))
					},
					reset: function() {
						t = null
					},
					handleNewMetric: function(e, r) {
						"DVBErrors" === e && t && t.report(e, r)
					}
				}
			})), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/metrics/handlers/GenericMetricHandler.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				};

			function a() {
				var e = void 0,
					t = void 0;
				return {
					initialize: function(r, n) {
						e = r, t = n
					},
					reset: function() {
						t = null, e = void 0
					},
					handleNewMetric: function(r, n) {
						r === e && t && t.report(e, n)
					}
				}
			}
			a.__dashjs_factory_name = "GenericMetricHandler", t.default = i.default.getClassFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/metrics/handlers/HttpListHandler.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/utils/HandlerHelpers.js"));

			function a() {
				var e = void 0,
					t = void 0,
					r = void 0,
					n = void 0,
					s = void 0,
					a = [],
					o = (0, i.default)(this.context).getInstance();

				function u() {
					var t = a;
					t.length && e && e.report(n, t), a = []
				}
				return {
					initialize: function(i, a, l, d) {
						a && (t = o.validateN(l), e = a, d && d.length && (r = d), n = o.reconstructFullMetricName(i, l, d), s = setInterval(u, t))
					},
					reset: function() {
						clearInterval(s), s = null, t = null, r = null, a = [], e = null
					},
					handleNewMetric: function(e, t) {
						"HttpList" === e && (r && r !== t.type || a.push(t))
					}
				}
			}
			a.__dashjs_factory_name = "HttpListHandler", t.default = s.default.getClassFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/reporting/ReportingFactory.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/reporting/reporters/DVBReporting.js"));

			function a(e) {
				var t = {
						"urn:dvb:dash:reporting:2014": i.default
					},
					r = this.context,
					n = e.log;
				return {
					create: function(e, s) {
						var i;
						try {
							(i = t[e.schemeIdUri](r).create()).initialize(e, s)
						} catch (a) {
							i = null, n("ReportingFactory: could not create Reporting with schemeIdUri " + e.schemeIdUri + " (" + a.message + ")")
						}
						return i
					},
					register: function(e, r) {
						t[e] = r
					},
					unregister: function(e) {
						delete t[e]
					}
				}
			}
			a.__dashjs_factory_name = "ReportingFactory", t.default = s.default.getSingletonFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/reporting/reporters/DVBReporting.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/utils/MetricSerialiser.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/utils/RNG.js"));

			function o() {
				var e = this.context,
					t = (0, i.default)(e).getInstance(),
					r = (0, a.default)(e).getInstance(),
					n = !0,
					s = !1,
					o = !1,
					u = null,
					l = null,
					d = !0,
					c = [];
				return {
					report: function(e, r) {
						Array.isArray(r) || (r = [r]), s && l.isEnabled() && r.forEach((function(r) {
							var i = t.serialise(r);
							n && "DVBErrors" !== e && (i = "metricname=" + e + "&" + i),
								function(e, t, r) {
									var n = new XMLHttpRequest,
										s = function() {
											var e = c.indexOf(n); - 1 !== e && (c.splice(e, 1), n.status >= 200 && n.status < 300 ? t && t() : r && r())
										};
									c.push(n);
									try {
										n.open("GET", e), n.onloadend = s, n.onerror = s, n.send()
									} catch (i) {
										n.onerror()
									}
								}(i = u + "?" + i, null, (function() {
									s = !1
								}))
						}))
					},
					initialize: function(e, t) {
						var n;
						if (l = t, !(u = e["dvb:reportingUrl"])) throw new Error("required parameter missing (dvb:reportingUrl)");
						o || ((n = e["dvb:probability"] || e["dvb:priority"] || 0) && (1e3 === n || n / 1e3 >= r.random()) && (s = !0), o = !0)
					},
					reset: function() {
						d || (c.forEach((function(e) {
							return e.abort()
						})), c = []), o = !1, s = !1, u = null, l = null
					}
				}
			}
			o.__dashjs_factory_name = "DVBReporting", t.default = s.default.getClassFactory(o), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/utils/DVBErrorsTranslator.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/vo/DVBErrors.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/MediaPlayerEvents.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/MetricsReportingEvents.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function l(e) {
				var t = void 0,
					r = e.eventBus,
					n = e.metricsModel,
					u = void 0;

				function l(e) {
					var t = new s.default;
					if (u) {
						for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
						t.mpdurl || (t.mpdurl = u.originalUrl || u.url), t.terror || (t.terror = new Date), n.addDVBErrors(t)
					}
				}

				function d(e) {
					e.error || (u = e.manifest)
				}

				function c(e) {
					l({
						errorcode: s.default.BASE_URL_CHANGED,
						servicelocation: e.entry
					})
				}

				function f() {
					l({
						errorcode: s.default.BECAME_REPORTER
					})
				}

				function h(e) {
					switch (e.metric) {
						case "HttpList":
							(0 === (t = e.value).responsecode || t.responsecode >= 400 || t.responsecode < 100 || t.responsecode >= 600) && l({
								errorcode: t.responsecode || s.default.CONNECTION_ERROR,
								url: t.url,
								terror: t.tresponse,
								servicelocation: t._serviceLocation
							})
					}
					var t
				}

				function m(e) {
					var t;
					switch (e.error ? e.error.code : 0) {
						case MediaError.MEDIA_ERR_NETWORK:
							t = s.default.CONNECTION_ERROR;
							break;
						case MediaError.MEDIA_ERR_DECODE:
							t = s.default.CORRUPT_MEDIA_OTHER;
							break;
						default:
							return
					}
					l({
						errorcode: t
					})
				}

				function g() {
					r.on(i.default.MANIFEST_UPDATED, d, t), r.on(i.default.SERVICE_LOCATION_BLACKLIST_CHANGED, c, t), r.on(a.default.METRIC_ADDED, h, t), r.on(a.default.METRIC_UPDATED, h, t), r.on(a.default.PLAYBACK_ERROR, m, t), r.on(o.default.BECAME_REPORTING_PLAYER, f, t)
				}
				return t = {
					initialise: g,
					reset: function() {
						r.off(i.default.MANIFEST_UPDATED, d, t), r.off(i.default.SERVICE_LOCATION_BLACKLIST_CHANGED, c, t), r.off(a.default.METRIC_ADDED, h, t), r.off(a.default.METRIC_UPDATED, h, t), r.off(a.default.PLAYBACK_ERROR, m, t), r.off(o.default.BECAME_REPORTING_PLAYER, f, t)
					}
				}, g(), t
			}
			l.__dashjs_factory_name = "DVBErrorsTranslator", t.default = u.default.getSingletonFactory(l), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/utils/HandlerHelpers.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				};

			function a() {
				return {
					reconstructFullMetricName: function(e, t, r) {
						var n = e;
						return t && (n += "(" + t, r && r.length && (n += "," + r), n += ")"), n
					},
					validateN: function(e) {
						if (!e) throw new Error("missing n");
						if (isNaN(e)) throw new Error("n is NaN");
						if (e < 0) throw new Error("n must be positive");
						return e
					}
				}
			}
			a.__dashjs_factory_name = "HandlerHelpers", t.default = i.default.getSingletonFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/utils/ManifestParsing.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/vo/Metrics.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/vo/Range.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/metrics/vo/Reporting.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function u(e) {
				var t = e.dashManifestModel;
				return {
					getMetrics: function(e) {
						var r = [];
						return e.Metrics_asArray && e.Metrics_asArray.forEach((function(n) {
							var o = new s.default,
								u = t.getIsDynamic(e);
							n.hasOwnProperty("metrics") && (o.metrics = n.metrics, n.Range_asArray && n.Range_asArray.forEach((function(r) {
								var n = new i.default;
								n.starttime = function(e, r, n) {
									var s, i, a = t.getMpd(e),
										o = 0;
									return r ? o = a.availabilityStartTime.getTime() / 1e3 : (s = this.getRegularPeriods(e, a)).length && (o = s[0].start), i = o, n && n.hasOwnProperty("starttime") && (i += n.starttime), i
								}(e, u, r), r.hasOwnProperty("duration") ? n.duration = r.duration : n.duration = t.getDuration(e), n._useWallClockTime = u, o.Range.push(n)
							})), n.Reporting_asArray && (n.Reporting_asArray.forEach((function(e) {
								var t = new a.default;
								if (e.hasOwnProperty("schemeIdUri")) {
									for (var r in t.schemeIdUri = e.schemeIdUri, e) e.hasOwnProperty(r) && (t[r] = e[r]);
									o.Reporting.push(t)
								}
							})), r.push(o)))
						})), r
					}
				}
			}
			u.__dashjs_factory_name = "ManifestParsing", t.default = o.default.getSingletonFactory(u), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/utils/MetricSerialiser.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				};

			function a() {
				return {
					serialise: function e(t) {
						var r, n, s = [],
							i = [];
						for (r in t)
							if (t.hasOwnProperty(r) && 0 !== r.indexOf("_")) {
								if (null == (n = t[r]) && (n = ""), Array.isArray(n)) {
									if (!n.length) continue;
									i = [], n.forEach((function(t) {
										var r = "Object" !== Object.prototype.toString.call(t).slice(8, -1);
										i.push(r ? t : e(t))
									})), n = i.map(encodeURIComponent).join(",")
								} else "string" == typeof n ? n = encodeURIComponent(n) : n instanceof Date ? n = n.toISOString() : "number" == typeof n && (n = Math.round(n));
								s.push(r + "=" + n)
							} return s.join("&")
					}
				}
			}
			a.__dashjs_factory_name = "MetricSerialiser", t.default = i.default.getSingletonFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/utils/RNG.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				};

			function a() {
				var e, t = window.crypto || window.msCrypto,
					r = Uint32Array,
					n = Math.pow(2, 8 * r.BYTES_PER_ELEMENT) - 1,
					s = 10,
					i = void 0,
					a = void 0;

				function o() {
					t && (i || (i = new r(s)), t.getRandomValues(i), a = 0)
				}
				return e = {
					random: function(e, r) {
						var s;
						return e || (e = 0), r || (r = 1), t ? (a === i.length && o(), s = i[a] / n, a += 1) : s = Math.random(), s * (r - e) + e
					}
				}, o(), e
			}
			a.__dashjs_factory_name = "RNG", t.default = i.default.getSingletonFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/vo/DVBErrors.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.mpdurl = null, this.errorcode = null, this.terror = null, this.url = null, this.ipaddress = null, this.servicelocation = null
			};
			n.SSL_CONNECTION_FAILED_PREFIX = "SSL", n.DNS_RESOLUTION_FAILED = "C00", n.HOST_UNREACHABLE = "C01", n.CONNECTION_REFUSED = "C02", n.CONNECTION_ERROR = "C03", n.CORRUPT_MEDIA_ISOBMFF = "M00", n.CORRUPT_MEDIA_OTHER = "M01", n.BASE_URL_CHANGED = "F00", n.BECAME_REPORTER = "S00", t.default = n, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/vo/Metrics.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.metrics = "", this.Range = [], this.Reporting = []
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/vo/Range.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.starttime = 0, this.duration = 1 / 0, this._useWallClockTime = !1
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/vo/Reporting.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.schemeIdUri = "", this.value = ""
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/models/BaseURLTreeModel.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/dash/models/DashManifestModel.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/ObjectUtils.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				o = NaN,
				u = function e(t, r) {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this.data = {
						baseUrls: t || null,
						selectedIdx: r || o
					}, this.children = []
				};

			function l() {
				var e, t = void 0,
					r = this.context,
					n = (0, s.default)(r).getInstance(),
					a = (0, i.default)(r).getInstance();

				function l(e, t, r) {
					var s = n.getBaseURLsFromElement(r);
					e[t] ? a.areSimpleEquivalent(s, e[t].data.baseUrls) || (e[t].data.baseUrls = s, e[t].data.selectedIdx = o) : e[t] = new u(s)
				}
				return e = {
					reset: function() {
						t = new u
					},
					update: function(e) {
						! function(e) {
							var r = n.getBaseURLsFromElement(e);
							a.areSimpleEquivalent(r, t.data.baseUrls) || (t.data.baseUrls = r, t.data.selectedIdx = o), e.Period_asArray && e.Period_asArray.forEach((function(e, r) {
								l(t.children, r, e), e.AdaptationSet_asArray && e.AdaptationSet_asArray.forEach((function(e, s) {
									l(t.children[r].children, s, e), e.Representation_asArray && e.Representation_asArray.sort(n.getRepresentationSortFunction()).forEach((function(e, n) {
										l(t.children[r].children[s].children, n, e)
									}))
								}))
							}))
						}(e)
					},
					getForPath: function(e) {
						var r = t,
							n = [r.data];
						return e.forEach((function(e) {
							(r = r.children[e]) && n.push(r.data)
						})), n.filter((function(e) {
							return e.baseUrls.length
						}))
					},
					invalidateSelectedIndexes: function(e) {
						! function e(r, n) {
							var s = n || t;
							r(s.data), s.children && s.children.forEach((function(t) {
								return e(r, t)
							}))
						}((function(t) {
							isNaN(t.selectedIdx) || e === t.baseUrls[t.selectedIdx].serviceLocation && (t.selectedIdx = o)
						}))
					}
				}, t = new u, e
			}
			l.__dashjs_factory_name = "BaseURLTreeModel", t.default = a.default.getClassFactory(l), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/models/FragmentModel.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/FragmentRequest.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				l = "loading",
				d = "executed",
				c = "failed";

			function f(e) {
				var t = this.context,
					r = (0, u.default)(t).getInstance().log,
					n = (0, s.default)(t).getInstance(),
					a = e.metricsModel,
					f = void 0,
					h = void 0,
					m = void 0,
					g = void 0;

				function p(e, t, r) {
					for (var n = e.length - 1; n >= 0; n--) {
						var s = e[n],
							i = s.startTime,
							a = i + s.duration;
						if (r = void 0 !== r ? r : s.duration / 2, !isNaN(i) && !isNaN(a) && t + r >= i && t - r < a || isNaN(i) && isNaN(t)) return s
					}
					return null
				}

				function _(e, t) {
					a.addSchedulingInfo(e.mediaType, new Date, e.type, e.startTime, e.availabilityStartTime, e.duration, e.quality, e.range, t), a.addRequestsQueue(e.mediaType, m, h)
				}

				function v(e) {
					e.sender === g && (m.splice(m.indexOf(e.request), 1), e.response && !e.error && h.push(e.request), _(e.request, e.error ? c : d), n.trigger(i.default.FRAGMENT_LOADING_COMPLETED, {
						request: e.request,
						response: e.response,
						error: e.error,
						sender: this
					}))
				}
				return f = {
					setLoader: function(e) {
						g = e
					},
					getRequests: function(e) {
						var t = e.state instanceof Array ? e.state : [e.state],
							r = [];
						return t.forEach((function(t) {
							var n = function(e) {
								var t = void 0;
								switch (e) {
									case l:
										t = m;
										break;
									case d:
										t = h;
										break;
									default:
										t = []
								}
								return t
							}(t);
							r = r.concat(function(e, t) {
								if (t.hasOwnProperty("time")) return [p(e, t.time, t.threshold)];
								return e.filter((function(e) {
									for (var r in t)
										if ("state" !== r && t.hasOwnProperty(r) && e[r] != t[r]) return !1;
									return !0
								}))
							}(n, e))
						})), r
					},
					isFragmentLoaded: function(e) {
						var t;
						return t = !1, h.some((function(r) {
							if (n = e, s = r, !isNaN(n.index) && n.startTime === s.startTime && n.adaptationIndex === s.adaptationIndex || function(e, t) {
									return isNaN(e.index) && isNaN(t.index) && e.quality === t.quality
								}(e, r) || function(e, t) {
									return e.action === o.default.ACTION_COMPLETE && e.action === t.action
								}(e, r)) return t = !0;
							var n, s
						})), t
					},
					removeExecutedRequestsBeforeTime: function(e) {
						h = h.filter((function(t) {
							return isNaN(t.startTime) || t.startTime >= e
						}))
					},
					abortRequests: function() {
						g.abort(), m = []
					},
					executeRequest: function(e) {
						switch (e.action) {
							case o.default.ACTION_COMPLETE:
								h.push(e), _(e, d), n.trigger(i.default.STREAM_COMPLETED, {
									request: e,
									fragmentModel: this
								});
								break;
							case o.default.ACTION_DOWNLOAD:
								_(e, l), m.push(e),
									function(e) {
										n.trigger(i.default.FRAGMENT_LOADING_STARTED, {
											sender: f,
											request: e
										}), g.load(e)
									}(e);
								break;
							default:
								r("Unknown request action.")
						}
					},
					reset: function() {
						n.off(i.default.LOADING_COMPLETED, v, this), g && (g.reset(), g = null), h = [], m = []
					}
				}, null, g = null, h = [], m = [], n.on(i.default.LOADING_COMPLETED, v, f), f
			}
			f.__dashjs_factory_name = "FragmentModel";
			var h = a.default.getClassFactory(f);
			h.FRAGMENT_MODEL_LOADING = l, h.FRAGMENT_MODEL_EXECUTED = d, h.FRAGMENT_MODEL_CANCELED = "canceled", h.FRAGMENT_MODEL_FAILED = c, t.default = h, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/models/ManifestModel.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function o() {
				var e = this.context,
					t = (0, s.default)(e).getInstance(),
					r = void 0;
				return {
					getValue: function() {
						return r
					},
					setValue: function(e) {
						r = e, e && t.trigger(i.default.MANIFEST_LOADED, {
							data: e
						})
					}
				}
			}
			o.__dashjs_factory_name = "ManifestModel", t.default = a.default.getSingletonFactory(o), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/models/MediaPlayerModel.js": function(e, t, r) {
			"use strict";

			function n(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s, i = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				a = (s = i) && s.__esModule ? s : {
					default: s
				},
				o = r("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js"),
				u = 4,
				l = 36e4,
				d = 36e4,
				c = .9,
				f = 1e4,
				h = 30,
				m = 30,
				g = 12,
				p = 20,
				_ = 30,
				v = 60,
				y = 600,
				E = 20,
				T = 3,
				b = 1e3,
				j = 3,
				S = 500,
				M = 1,
				R = 500,
				I = 50,
				C = !1;

			function A() {
				var e, t, r, s = void 0,
					i = void 0,
					a = void 0,
					A = void 0,
					D = void 0,
					P = void 0,
					w = void 0,
					O = void 0,
					x = void 0,
					F = void 0,
					N = void 0,
					L = void 0,
					B = void 0,
					k = void 0,
					U = void 0,
					K = void 0,
					H = void 0,
					q = void 0,
					Y = void 0,
					z = void 0,
					V = void 0,
					G = void 0,
					W = void 0;
				return e = {
					setBufferOccupancyABREnabled: function(e) {
						V = e
					},
					getBufferOccupancyABREnabled: function() {
						return V
					},
					setBandwidthSafetyFactor: function(e) {
						K = e
					},
					getBandwidthSafetyFactor: function() {
						return K
					},
					setAbandonLoadTimeout: function(e) {
						H = e
					},
					getAbandonLoadTimeout: function() {
						return H
					},
					setLastBitrateCachingInfo: function(e, t) {
						x.enabled = e, void 0 === t || isNaN(t) || "number" != typeof t || (x.ttl = t)
					},
					getLastBitrateCachingInfo: function() {
						return x
					},
					setLastMediaSettingsCachingInfo: function(e, t) {
						F.enabled = e, void 0 === t || isNaN(t) || "number" != typeof t || (F.ttl = t)
					},
					getLastMediaSettingsCachingInfo: function() {
						return F
					},
					setStableBufferTime: function(e) {
						N = e
					},
					getStableBufferTime: function() {
						return isNaN(N) ? W ? p : g : N
					},
					setBufferTimeAtTopQuality: function(e) {
						L = e
					},
					getBufferTimeAtTopQuality: function() {
						return L
					},
					setBufferTimeAtTopQualityLongForm: function(e) {
						B = e
					},
					getBufferTimeAtTopQualityLongForm: function() {
						return B
					},
					setLongFormContentDurationThreshold: function(e) {
						k = e
					},
					getLongFormContentDurationThreshold: function() {
						return k
					},
					setRichBufferThreshold: function(e) {
						U = e
					},
					getRichBufferThreshold: function() {
						return U
					},
					setBufferToKeep: function(e) {
						w = e
					},
					getBufferToKeep: function() {
						return w
					},
					setBufferPruningInterval: function(e) {
						O = e
					},
					getBufferPruningInterval: function() {
						return O
					},
					setFragmentRetryAttempts: function(e) {
						q[o.HTTPRequest.MEDIA_SEGMENT_TYPE] = e
					},
					getFragmentRetryAttempts: function() {
						return q[o.HTTPRequest.MEDIA_SEGMENT_TYPE]
					},
					setRetryAttemptsForType: function(e, t) {
						q[e] = t
					},
					getRetryAttemptsForType: function(e) {
						return q[e]
					},
					setFragmentRetryInterval: function(e) {
						Y[o.HTTPRequest.MEDIA_SEGMENT_TYPE] = e
					},
					getFragmentRetryInterval: function() {
						return Y[o.HTTPRequest.MEDIA_SEGMENT_TYPE]
					},
					setRetryIntervalForType: function(e, t) {
						Y[e] = t
					},
					getRetryIntervalForType: function(e) {
						return Y[e]
					},
					setWallclockTimeUpdateInterval: function(e) {
						z = e
					},
					getWallclockTimeUpdateInterval: function() {
						return z
					},
					setScheduleWhilePaused: function(e) {
						P = e
					},
					getScheduleWhilePaused: function() {
						return P
					},
					getUseSuggestedPresentationDelay: function() {
						return i
					},
					setUseSuggestedPresentationDelay: function(e) {
						i = e
					},
					setLiveDelayFragmentCount: function(e) {
						A = e
					},
					getLiveDelayFragmentCount: function() {
						return A
					},
					getLiveDelay: function() {
						return D
					},
					setLiveDelay: function(e) {
						D = e
					},
					setUseManifestDateHeaderTimeSource: function(e) {
						s = e
					},
					getUseManifestDateHeaderTimeSource: function() {
						return s
					},
					setUTCTimingSources: function(e) {
						a = e
					},
					getUTCTimingSources: function() {
						return a
					},
					setXHRWithCredentialsForType: function e(t, r) {
						t ? G[t] = !!r : Object.keys(G).forEach((function(t) {
							e(t, r)
						}))
					},
					getXHRWithCredentialsForType: function(e) {
						var t = G[e];
						return void 0 === t ? G.default : t
					},
					setFastSwitchEnabled: function(e) {
						W = e
					},
					getFastSwitchEnabled: function() {
						return W
					},
					reset: function() {}
				}, a = [], i = !1, s = !0, P = !0, V = !1, W = !1, x = {
					enabled: !0,
					ttl: l
				}, F = {
					enabled: !0,
					ttl: d
				}, A = u, D = void 0, w = h, O = m, N = NaN, L = _, B = v, k = y, U = E, K = c, H = f, z = I, G = {
					default: C
				}, n(t = {}, o.HTTPRequest.MPD_TYPE, j), n(t, o.HTTPRequest.XLINK_EXPANSION_TYPE, M), n(t, o.HTTPRequest.MEDIA_SEGMENT_TYPE, T), n(t, o.HTTPRequest.INIT_SEGMENT_TYPE, T), n(t, o.HTTPRequest.BITSTREAM_SWITCHING_SEGMENT_TYPE, T), n(t, o.HTTPRequest.INDEX_SEGMENT_TYPE, T), n(t, o.HTTPRequest.OTHER_TYPE, T), q = t, n(r = {}, o.HTTPRequest.MPD_TYPE, S), n(r, o.HTTPRequest.XLINK_EXPANSION_TYPE, R), n(r, o.HTTPRequest.MEDIA_SEGMENT_TYPE, b), n(r, o.HTTPRequest.INIT_SEGMENT_TYPE, b), n(r, o.HTTPRequest.BITSTREAM_SWITCHING_SEGMENT_TYPE, b), n(r, o.HTTPRequest.INDEX_SEGMENT_TYPE, b), n(r, o.HTTPRequest.OTHER_TYPE, b), Y = r, e
			}
			A.__dashjs_factory_name = "MediaPlayerModel";
			var D = a.default.getSingletonFactory(A);
			D.DEFAULT_UTC_TIMING_SOURCE = {
				scheme: "urn:mpeg:dash:utc:http-xsdate:2014",
				value: "http://time.akamai.com/?iso"
			}, t.default = D, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/models/MetricsModel.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/MetricsList.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/TCPConnection.js")),
				a = r("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js"),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/RepresentationSwitch.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/BufferLevel.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/BufferState.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/DVRInfo.js")),
				c = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/DroppedFrames.js")),
				f = r("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/ManifestUpdate.js"),
				h = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/SchedulingInfo.js")),
				m = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				g = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/RequestsQueue.js")),
				p = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				_ = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				v = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/BolaState.js"));

			function y() {
				var e, t = 1e3,
					r = this.context,
					n = (0, m.default)(r).getInstance(),
					_ = void 0,
					y = void 0;

				function E() {
					n.trigger(p.default.METRICS_CHANGED)
				}

				function T(e) {
					n.trigger(p.default.METRIC_CHANGED, {
						mediaType: e
					}), E()
				}

				function b(e, t, r) {
					n.trigger(p.default.METRIC_UPDATED, {
						mediaType: e,
						metric: t,
						value: r
					}), T(e)
				}

				function j(e, t, r) {
					n.trigger(p.default.METRIC_ADDED, {
						mediaType: e,
						metric: t,
						value: r
					}), T(e)
				}

				function S(e) {
					var t;
					return y.hasOwnProperty(e) ? t = y[e] : (t = new s.default, y[e] = t), t
				}

				function M(e, r, n) {
					var s = S(e);
					s[r].push(n), s[r].length > t && s[r].shift()
				}

				function R(e, t, r) {
					M(e, t, r), j(e, t, r)
				}
				return e = {
					metricsChanged: E,
					metricChanged: T,
					metricUpdated: b,
					metricAdded: j,
					clearCurrentMetricsForType: function(e) {
						delete y[e], T(e)
					},
					clearAllCurrentMetrics: function() {
						y = {}, E()
					},
					getReadOnlyMetricsFor: function(e) {
						return y.hasOwnProperty(e) ? y[e] : null
					},
					getMetricsFor: S,
					addTcpConnection: function(e, t, r, n, s, a) {
						var o = new i.default;
						return o.tcpid = t, o.dest = r, o.topen = n, o.tclose = s, o.tconnect = a, R(e, _.metricsList.TCP_CONNECTION, o), o
					},
					addHttpRequest: function e(t, r, n, s, i, o, u, l, d, c, f, h, m, g) {
						var p = new a.HTTPRequest;
						return i && i !== s && (e(t, null, n, s, null, null, u, l, null, null, null, h, null, null), p.actualurl = i), p.tcpid = r, p.type = n, p.url = s, p.range = u, p.trequest = l, p.tresponse = d, p.responsecode = f, p._tfinish = c, p._stream = t, p._mediaduration = h, p._responseHeaders = m, p._serviceLocation = o, g ? g.forEach((function(e) {
							! function(e, t, r, n) {
								var s = new a.HTTPRequestTrace;
								s.s = t, s.d = r, s.b = n, e.trace.push(s), e.interval || (e.interval = 0), e.interval += r
							}(p, e.s, e.d, e.b)
						})) : (delete p.interval, delete p.trace), R(t, _.metricsList.HTTP_REQUEST, p), p
					},
					addRepresentationSwitch: function(e, t, r, n, s) {
						var i = new o.default;
						return i.t = t, i.mt = r, i.to = n, s ? i.lto = s : delete i.lto, R(e, _.metricsList.TRACK_SWITCH, i), i
					},
					addBufferLevel: function(e, t, r) {
						var n = new u.default;
						return n.t = t, n.level = r, R(e, _.metricsList.BUFFER_LEVEL, n), n
					},
					addBufferState: function(e, t, r) {
						var n = new l.default;
						return n.target = r, n.state = t, R(e, _.metricsList.BUFFER_STATE, n), n
					},
					addDVRInfo: function(e, t, r, n) {
						var s = new d.default;
						return s.time = t, s.range = n, s.manifestInfo = r, R(e, _.metricsList.DVR_INFO, s), s
					},
					addDroppedFrames: function(e, t) {
						var r = new c.default,
							n = S(e).DroppedFrames;
						return r.time = t.creationTime, r.droppedFrames = t.droppedVideoFrames, n.length > 0 && n[n.length - 1] == r ? n[n.length - 1] : (R(e, _.metricsList.DROPPED_FRAMES, r), r)
					},
					addSchedulingInfo: function(e, t, r, n, s, i, a, o, u) {
						var l = new h.default;
						return l.mediaType = e, l.t = t, l.type = r, l.startTime = n, l.availabilityStartTime = s, l.duration = i, l.quality = a, l.range = o, l.state = u, R(e, _.metricsList.SCHEDULING_INFO, l), l
					},
					addRequestsQueue: function(e, t, r) {
						var n = new g.default;
						n.loadingRequests = t, n.executedRequests = r, S(e).RequestsQueue = n, j(e, _.metricsList.REQUESTS_QUEUE, n)
					},
					addManifestUpdate: function(e, t, r, n, s, i, a, o, u, l) {
						var d = new f.ManifestUpdate;
						return d.mediaType = e, d.type = t, d.requestTime = r, d.fetchTime = n, d.availabilityStartTime = s, d.presentationStartTime = i, d.clientTimeOffset = a, d.currentTime = o, d.buffered = u, d.latency = l, M("stream", "ManifestUpdate", d), j(e, _.metricsList.MANIFEST_UPDATE, d), d
					},
					updateManifestUpdateInfo: function(e, t) {
						if (e) {
							for (var r in t) e[r] = t[r];
							b(e.mediaType, _.metricsList.MANIFEST_UPDATE, e)
						}
					},
					addManifestUpdateStreamInfo: function(e, t, r, n, s) {
						if (e) {
							var i = new f.ManifestUpdateStreamInfo;
							return i.id = t, i.index = r, i.start = n, i.duration = s, e.streamInfo.push(i), b(e.mediaType, _.metricsList.MANIFEST_UPDATE_STREAM_INFO, e), i
						}
						return null
					},
					addManifestUpdateRepresentationInfo: function(e, t, r, n, s, i, a, o) {
						if (e) {
							var u = new f.ManifestUpdateTrackInfo;
							return u.id = t, u.index = r, u.streamIndex = n, u.mediaType = s, u.startNumber = a, u.fragmentInfoType = o, u.presentationTimeOffset = i, e.trackInfo.push(u), b(e.mediaType, _.metricsList.MANIFEST_UPDATE_TRACK_INFO, e), u
						}
						return null
					},
					addPlayList: function(e) {
						return e.trace && Array.isArray(e.trace) ? e.trace.forEach((function(e) {
							e.hasOwnProperty("subreplevel") && !e.subreplevel && delete e.subreplevel
						})) : delete e.trace, R("stream", _.metricsList.PLAY_LIST, e), e
					},
					addDVBErrors: function(e) {
						return R("stream", _.metricsList.DVB_ERRORS, e), e
					},
					updateBolaState: function(e, t) {
						var r = new v.default;
						return r._s = t, S(e).BolaState = [r], j(e, "BolaState", r), r
					},
					setConfig: function(e) {
						e && e.adapter && (_ = e.adapter)
					}
				}, y = {}, e
			}
			y.__dashjs_factory_name = "MetricsModel", t.default = _.default.getSingletonFactory(y), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/models/URIQueryAndFragmentModel.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/URIFragmentData.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function a() {
				var e = void 0,
					t = void 0,
					r = void 0;
				return {
					initialize: function() {
						e = new s.default, t = [], r = !1
					},
					parseURI: function(n) {
						if (!n) return null;
						var s = [],
							i = new RegExp(/[?]/),
							a = new RegExp(/[#]/),
							o = new RegExp(/^(https:)?\/\//i),
							u = i.test(n),
							l = a.test(n);

						function d(e, t, r, n) {
							var s = n[0].split(/[=]/);
							return n.push({
								key: s[0],
								value: s[1]
							}), n.shift(), n
						}
						return r = o.test(n), n.split(/[?#]/).map((function(e, r, n) {
							return r > 0 && (u && 0 === t.length ? t = n[r].split(/[&]/) : l && (s = n[r].split(/[&]/))), n
						})), t.length > 0 && (t = t.reduce(d, null)), s.length > 0 && (s = s.reduce(d, null)).forEach((function(t) {
							e[t.key] = t.value
						})), n
					},
					getURIFragmentData: function() {
						return e
					},
					getURIQueryData: function() {
						return t
					},
					isManifestHTTPS: function() {
						return r
					}
				}
			}
			a.__dashjs_factory_name = "URIQueryAndFragmentModel", t.default = i.default.getSingletonFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/models/VideoModel.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				};

			function a() {
				var e = void 0,
					t = void 0,
					r = void 0,
					n = void 0,
					s = void 0;

				function i() {
					e.playbackRate = s || 1, e.removeEventListener("canplay", i)
				}

				function a(t) {
					e && (e.readyState <= 2 && t > 0 ? e.addEventListener("canplay", i) : e.playbackRate = t)
				}

				function o(t) {
					var r = n.indexOf(t),
						i = void 0;
					null !== t && (-1 !== r && n.splice(r, 1), n.length > 0 == !1 && 0 === e.playbackRate && (a(s || 1), e.paused || ((i = document.createEvent("Event")).initEvent("playing", !0, !1), e.dispatchEvent(i))))
				}
				return {
					initialize: function() {
						n = []
					},
					setCurrentTime: function(t) {
						if (e.currentTime != t) try {
							e.currentTime = t
						} catch (r) {
							0 === e.readyState && r.code === r.INVALID_STATE_ERR && setTimeout((function() {
								e.currentTime = t
							}), 400)
						}
					},
					setStallState: function(t, r) {
						! function(t, r) {
							r ? function(t) {
								var r = void 0;
								if (null === t || e.seeking || -1 !== n.indexOf(t)) return;
								n.push(t), 1 === n.length && ((r = document.createEvent("Event")).initEvent("waiting", !0, !1), s = e.playbackRate, a(0), e.dispatchEvent(r))
							}(t) : o(t)
						}(t, r)
					},
					getElement: function() {
						return e
					},
					setElement: function(t) {
						(e = t).preload = "auto"
					},
					setSource: function(t) {
						t ? e.src = t : (e.removeAttribute("src"), e.load())
					},
					getSource: function() {
						return e.src
					},
					getVideoContainer: function() {
						return r
					},
					setVideoContainer: function(e) {
						r = e
					},
					getTTMLRenderingDiv: function() {
						return t
					},
					setTTMLRenderingDiv: function(e) {
						(t = e).style.position = "absolute", t.style.display = "flex", t.style.overflow = "hidden", t.style.pointerEvents = "none", t.style.top = 0, t.style.left = 0
					},
					getPlaybackQuality: function() {
						var t = "webkitDroppedFrameCount" in e && "webkitDecodedFrameCount" in e,
							r = null;
						return "getVideoPlaybackQuality" in e ? r = e.getVideoPlaybackQuality() : t && (r = {
							droppedVideoFrames: e.webkitDroppedFrameCount,
							totalVideoFrames: e.webkitDroppedFrameCount + e.webkitDecodedFrameCount,
							creationTime: new Date
						}), r
					}
				}
			}
			a.__dashjs_factory_name = "VideoModel", t.default = i.default.getSingletonFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/CommonEncryption.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function() {
				function e(e, t) {
					for (var r = 0; r < t.length; r++) {
						var n = t[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
					}
				}
				return function(t, r, n) {
					return r && e(t.prototype, r), n && e(t, n), t
				}
			}();
			var s, i = r("./node_modules/dashjs/build/es5/externals/base64.js"),
				a = (s = i) && s.__esModule ? s : {
					default: s
				},
				o = function() {
					function e() {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, e)
					}
					return n(e, null, [{
						key: "findCencContentProtection",
						value: function(e) {
							for (var t = null, r = 0; r < e.length; ++r) {
								var n = e[r];
								"urn:mpeg:dash:mp4protection:2011" === n.schemeIdUri.toLowerCase() && "cenc" === n.value.toLowerCase() && (t = n)
							}
							return t
						}
					}, {
						key: "getPSSHData",
						value: function(e) {
							var t = 8,
								r = new DataView(e),
								n = r.getUint8(t);
							return t += 20, n > 0 && (t += 4 + 16 * r.getUint32(t)), t += 4, e.slice(t)
						}
					}, {
						key: "getPSSHForKeySystem",
						value: function(t, r) {
							var n = e.parsePSSHList(r);
							return n.hasOwnProperty(t.uuid.toLowerCase()) ? n[t.uuid.toLowerCase()] : null
						}
					}, {
						key: "parseInitDataFromContentProtection",
						value: function(e) {
							return "pssh" in e ? a.default.decodeArray(e.pssh.__text).buffer : null
						}
					}, {
						key: "parsePSSHList",
						value: function(e) {
							if (null === e) return [];
							for (var t = new DataView(e), r = {}, n = 0;;) {
								var s, i, a, o = n;
								if (n >= t.buffer.byteLength) break;
								if (s = n + t.getUint32(n), n += 4, 1886614376 === t.getUint32(n))
									if (n += 4, 0 === (i = t.getUint8(n)) || 1 === i) {
										var u, l;
										for (n++, n += 3, a = "", u = 0; u < 4; u++) a += 1 === (l = t.getUint8(n + u).toString(16)).length ? "0" + l : l;
										for (n += 4, a += "-", u = 0; u < 2; u++) a += 1 === (l = t.getUint8(n + u).toString(16)).length ? "0" + l : l;
										for (n += 2, a += "-", u = 0; u < 2; u++) a += 1 === (l = t.getUint8(n + u).toString(16)).length ? "0" + l : l;
										for (n += 2, a += "-", u = 0; u < 2; u++) a += 1 === (l = t.getUint8(n + u).toString(16)).length ? "0" + l : l;
										for (n += 2, a += "-", u = 0; u < 6; u++) a += 1 === (l = t.getUint8(n + u).toString(16)).length ? "0" + l : l;
										n += 6, a = a.toLowerCase(), t.getUint32(n), n += 4, r[a] = t.buffer.slice(o, s), n = s
									} else n = s;
								else n = s
							}
							return r
						}
					}]), e
				}();
			t.default = o, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/Protection.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/controllers/ProtectionController.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/controllers/ProtectionKeyController.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/ProtectionEvents.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/models/ProtectionModel_21Jan2015.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/models/ProtectionModel_3Feb2014.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/models/ProtectionModel_01b.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				c = [{
					generateKeyRequest: "generateKeyRequest",
					addKey: "addKey",
					cancelKeyRequest: "cancelKeyRequest",
					needkey: "needkey",
					keyerror: "keyerror",
					keyadded: "keyadded",
					keymessage: "keymessage"
				}, {
					generateKeyRequest: "webkitGenerateKeyRequest",
					addKey: "webkitAddKey",
					cancelKeyRequest: "webkitCancelKeyRequest",
					needkey: "webkitneedkey",
					keyerror: "webkitkeyerror",
					keyadded: "webkitkeyadded",
					keymessage: "webkitkeymessage"
				}],
				f = [{
					setMediaKeys: "setMediaKeys",
					MediaKeys: "MediaKeys",
					release: "close",
					needkey: "needkey",
					error: "keyerror",
					message: "keymessage",
					ready: "keyadded",
					close: "keyclose"
				}, {
					setMediaKeys: "msSetMediaKeys",
					MediaKeys: "MSMediaKeys",
					release: "close",
					needkey: "msneedkey",
					error: "mskeyerror",
					message: "mskeymessage",
					ready: "mskeyadded",
					close: "mskeyclose"
				}];

			function h() {
				var e = this.context;

				function t(e, t) {
					for (var r = 0; r < t.length; r++) {
						var n = t[r];
						if ("function" == typeof e[n[Object.keys(n)[0]]]) return n
					}
					return null
				}
				return {
					createProtectionSystem: function(r) {
						var n = null,
							a = (0, i.default)(e).getInstance();
						a.setConfig({
							log: r.log
						}), a.initialize();
						var d = function(r) {
							var n = r.log,
								s = r.eventBus,
								i = r.videoModel.getElement();
							return void 0 !== i.onencrypted && void 0 !== i.mediaKeys && void 0 !== navigator.requestMediaKeySystemAccess && "function" == typeof navigator.requestMediaKeySystemAccess ? (n("EME detected on this user agent! (ProtectionModel_21Jan2015)"), (0, o.default)(e).create({
								log: n,
								eventBus: s
							})) : t(i, f) ? (n("EME detected on this user agent! (ProtectionModel_3Feb2014)"), (0, u.default)(e).create({
								log: n,
								eventBus: s,
								api: t(i, f)
							})) : t(i, c) ? (n("EME detected on this user agent! (ProtectionModel_01b)"), (0, l.default)(e).create({
								log: n,
								eventBus: s,
								api: t(i, c)
							})) : (n("No supported version of EME detected on this user agent! - Attempts to play encrypted content will fail!"), null)
						}(r);
						return !n && d && (n = (0, s.default)(e).create({
							protectionModel: d,
							protectionKeyController: a,
							adapter: r.adapter,
							eventBus: r.eventBus,
							log: r.log
						}), r.capabilities.setEncryptedMediaSupported(!0)), n
					}
				}
			}
			h.__dashjs_factory_name = "Protection";
			var m = d.default.getClassFactory(h);
			m.events = a.default, t.default = m, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/ProtectionEvents.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function(e, t, r) {
				for (var n = !0; n;) {
					var s = e,
						i = t,
						a = r;
					n = !1, null === s && (s = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(s, i);
					if (void 0 !== o) {
						if ("value" in o) return o.value;
						var u = o.get;
						if (void 0 === u) return;
						return u.call(a)
					}
					var l = Object.getPrototypeOf(s);
					if (null === l) return;
					e = l, t = i, r = a, n = !0, o = l = void 0
				}
			};
			var s, i = r("./node_modules/dashjs/build/es5/src/core/events/EventsBase.js"),
				a = new(function(e) {
					function t() {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), n(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.INTERNAL_KEY_MESSAGE = "internalKeyMessage", this.INTERNAL_KEY_SYSTEM_SELECTED = "internalKeySystemSelected", this.KEY_ADDED = "public_keyAdded", this.KEY_ERROR = "public_keyError", this.KEY_MESSAGE = "public_keyMessage", this.KEY_SESSION_CLOSED = "public_keySessionClosed", this.KEY_SESSION_CREATED = "public_keySessionCreated", this.KEY_SESSION_REMOVED = "public_keySessionRemoved", this.KEY_STATUSES_CHANGED = "public_keyStatusesChanged", this.KEY_SYSTEM_ACCESS_COMPLETE = "keySystemAccessComplete", this.KEY_SYSTEM_SELECTED = "public_keySystemSelected", this.LICENSE_REQUEST_COMPLETE = "public_licenseRequestComplete", this.NEED_KEY = "needkey", this.PROTECTION_CREATED = "public_protectioncreated", this.PROTECTION_DESTROYED = "public_protectiondestroyed", this.SERVER_CERTIFICATE_UPDATED = "serverCertificateUpdated", this.TEARDOWN_COMPLETE = "protectionTeardownComplete", this.VIDEO_ELEMENT_SELECTED = "videoElementSelected"
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), t
				}(((s = i) && s.__esModule ? s : {
					default: s
				}).default));
			t.default = a, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/controllers/ProtectionController.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/CommonEncryption.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/vo/MediaCapability.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeySystemConfiguration.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/Protection.js"));

			function d(e) {
				var t, r = e.protectionKeyController,
					n = e.protectionModel,
					u = e.adapter,
					d = e.eventBus,
					c = e.log,
					f = void 0,
					h = void 0,
					m = void 0,
					g = void 0,
					p = void 0,
					_ = void 0,
					v = void 0,
					y = void 0;

				function E(e) {
					var t = s.default.getPSSHForKeySystem(y, e);
					if (t) {
						for (var a = n.getAllInitData(), o = 0; o < a.length; o++)
							if (r.initDataEquals(t, a[o])) return void c("DRM: Ignoring initData because we have already seen it!");
						try {
							n.createKeySession(t, _)
						} catch (u) {
							d.trigger(i.default.KEY_SESSION_CREATED, {
								data: null,
								error: "Error creating key session! " + u.message
							})
						}
					} else d.trigger(i.default.KEY_SESSION_CREATED, {
						data: null,
						error: "Selected key system is " + y.systemString + ".  needkey/encrypted event contains no initData corresponding to that key system!"
					})
				}

				function T(e) {
					e ? (n.setMediaElement(e), d.on(i.default.NEED_KEY, M, this), d.on(i.default.INTERNAL_KEY_MESSAGE, S, this)) : null === e && (n.setMediaElement(e), d.off(i.default.NEED_KEY, M, this), d.off(i.default.INTERNAL_KEY_MESSAGE, S, this))
				}

				function b(e, t) {
					var r = this,
						s = [],
						u = [];
					m && u.push(new a.default(m.codec, v)), h && s.push(new a.default(h.codec, v));
					var l, g = new o.default(s, u, "optional", "temporary" === _ ? "optional" : "required", [_]),
						p = [];
					if (y)
						for (l = 0; l < e.length; l++) {
							if (y === e[l].ks)
								if ("break" === function() {
										p.push({
											ks: e[l].ks,
											configs: [g]
										});
										return d.on(i.default.KEY_SYSTEM_ACCESS_COMPLETE, (function n(s) {
											d.off(i.default.KEY_SYSTEM_ACCESS_COMPLETE, n, r), s.error ? t || d.trigger(i.default.KEY_SYSTEM_SELECTED, {
												error: "DRM: KeySystem Access Denied! -- " + s.error
											}) : (c("DRM: KeySystem Access Granted"), d.trigger(i.default.KEY_SYSTEM_SELECTED, {
												data: s.data
											}), E(e[l].initData))
										}), r), n.requestKeySystemAccess(p), "break"
									}()) break
						} else if (void 0 === y) {
							y = null, f.push(e);
							for (var T = 0; T < e.length; T++) p.push({
								ks: e[T].ks,
								configs: [g]
							});
							var b, j = function e(s) {
									d.off(i.default.KEY_SYSTEM_ACCESS_COMPLETE, e, r), s.error ? (y = void 0, d.off(i.default.INTERNAL_KEY_SYSTEM_SELECTED, S, r), t || d.trigger(i.default.KEY_SYSTEM_SELECTED, {
										data: null,
										error: "DRM: KeySystem Access Denied! -- " + s.error
									})) : (b = s.data, c("DRM: KeySystem Access Granted (" + b.keySystem.systemString + ")!  Selecting key system..."), n.selectKeySystem(b))
								},
								S = function e(s) {
									if (d.off(i.default.INTERNAL_KEY_SYSTEM_SELECTED, e, r), d.off(i.default.KEY_SYSTEM_ACCESS_COMPLETE, j, r), s.error) y = void 0, t || d.trigger(i.default.KEY_SYSTEM_SELECTED, {
										data: null,
										error: "DRM: Error selecting key system! -- " + s.error
									});
									else {
										y = n.getKeySystem(), d.trigger(i.default.KEY_SYSTEM_SELECTED, {
											data: b
										});
										for (var a = 0; a < f.length; a++)
											for (l = 0; l < f[a].length; l++)
												if (y === f[a][l].ks) {
													E(f[a][l].initData);
													break
												}
									}
								};
							d.on(i.default.INTERNAL_KEY_SYSTEM_SELECTED, S, r), d.on(i.default.KEY_SYSTEM_ACCESS_COMPLETE, j, r), n.requestKeySystemAccess(p)
						} else f.push(e)
				}

				function j(e, t) {
					d.trigger(i.default.LICENSE_REQUEST_COMPLETE, {
						data: e,
						error: t
					})
				}

				function S(e) {
					if (c("DRM: onKeyMessage"), e.error) c(e.error);
					else {
						var t = e.data;
						d.trigger(i.default.KEY_MESSAGE, {
							data: t
						});
						var a = t.messageType ? t.messageType : "license-request",
							o = t.message,
							u = t.sessionToken,
							l = function(e) {
								var t = null,
									r = e.systemString;
								return g && (t = r in g ? g[r] : null), t
							}(y),
							f = y.systemString,
							h = r.getLicenseServer(y, l, a),
							m = {
								sessionToken: u,
								messageType: a
							};
						if (!h) return c("DRM: License server request not required for this message (type = " + e.data.messageType + ").  Session ID = " + u.getSessionID()), void j(m);
						if (r.isClearKey(y)) {
							var p = r.processClearKeyLicenseRequest(l, o);
							if (p) return c("DRM: ClearKey license request handled by application!"), j(m), void n.updateKeySession(u, p)
						}
						var _ = new XMLHttpRequest,
							v = null;
						if (l && l.serverURL) {
							var E = l.serverURL;
							"string" == typeof E && "" !== E ? v = E : "object" == typeof E && E.hasOwnProperty(a) && (v = E[a])
						} else l && l.laURL && "" !== l.laURL ? v = l.laURL : (v = y.getLicenseServerURLFromInitData(s.default.getPSSHData(u.initData))) || (v = e.data.laURL);
						if (v = h.getServerURLFromMessage(v, o, a)) {
							_.open(h.getHTTPMethod(a), v, !0), _.responseType = h.getResponseType(f, a), _.onload = function() {
								200 == this.status ? (j(m), n.updateKeySession(u, h.getLicenseMessage(this.response, f, a))) : j(m, "DRM: " + f + ' update, XHR status is "' + this.statusText + '" (' + this.status + "), expected to be 200. readyState is " + this.readyState + ".  Response is " + (this.response ? h.getErrorResponse(this.response, f, a) : "NONE"))
							}, _.onabort = function() {
								j(m, "DRM: " + f + ' update, XHR aborted. status is "' + this.statusText + '" (' + this.status + "), readyState is " + this.readyState)
							}, _.onerror = function() {
								j(m, "DRM: " + f + ' update, XHR error. status is "' + this.statusText + '" (' + this.status + "), readyState is " + this.readyState)
							};
							var T = function(e) {
								var t;
								if (e)
									for (t in e) "authorization" === t.toLowerCase() && (_.withCredentials = !0), _.setRequestHeader(t, e[t])
							};
							l && T(l.httpRequestHeaders), T(y.getRequestHeadersFromMessage(o)), l && l.withCredentials && (_.withCredentials = !0), _.send(y.getLicenseRequestFromMessage(o))
						} else j(m, "DRM: No license server URL specified!")
					}
				}

				function M(e) {
					if (c("DRM: onNeedKey"), "cenc" === e.key.initDataType) {
						var t = e.key.initData;
						ArrayBuffer.isView(t) && (t = t.buffer), c("DRM: initData:", String.fromCharCode.apply(null, new Uint8Array(t)));
						var n = r.getSupportedKeySystems(t, g);
						0 !== n.length ? b(n, !1) : c("DRM: Received needkey event with initData, but we don't support any of the key systems!")
					} else c("DRM:  Only 'cenc' initData is supported!  Ignoring initData of type: " + e.key.initDataType)
				}
				return t = {
					initialize: function(e, t, n) {
						if (!p) {
							var s;
							t || n || (s = u.getStreamsInfo(e)[0]), h = t || (s ? u.getMediaInfoForType(e, s, "audio") : null);
							var i = (m = n || (s ? u.getMediaInfoForType(e, s, "video") : null)) || h,
								a = r.getSupportedKeySystemsFromContentProtection(i.contentProtection);
							a && a.length > 0 && b(a, !0), p = !0
						}
					},
					createKeySession: E,
					loadKeySession: function(e) {
						n.loadKeySession(e)
					},
					removeKeySession: function(e) {
						n.removeKeySession(e)
					},
					closeKeySession: function(e) {
						n.closeKeySession(e)
					},
					setServerCertificate: function(e) {
						n.setServerCertificate(e)
					},
					setMediaElement: T,
					setSessionType: function(e) {
						_ = e
					},
					setRobustnessLevel: function(e) {
						v = e
					},
					setProtectionData: function(e) {
						g = e
					},
					reset: function() {
						T(null), y = void 0, n && (n.reset(), n = null)
					}
				}, r.getKeySystems(), f = [], p = !1, _ = "temporary", v = "", i.default.extend(l.default.events), t
			}
			d.__dashjs_factory_name = "ProtectionController", t.default = u.default.getClassFactory(d), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/controllers/ProtectionKeyController.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/CommonEncryption.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/drm/KeySystemClearKey.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/drm/KeySystemWidevine.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/drm/KeySystemPlayReady.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/servers/DRMToday.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/servers/PlayReady.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/servers/Widevine.js")),
				c = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/servers/ClearKey.js")),
				f = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function h() {
				var e = this.context,
					t = void 0,
					r = void 0,
					n = void 0;
				return {
					initialize: function() {
						var t;
						r = [], t = (0, o.default)(e).getInstance(), r.push(t), t = (0, a.default)(e).getInstance(), r.push(t), t = (0, i.default)(e).getInstance(), r.push(t), n = t
					},
					isClearKey: function(e) {
						return e === n
					},
					initDataEquals: function(e, t) {
						if (e.byteLength === t.byteLength) {
							for (var r = new Uint8Array(e), n = new Uint8Array(t), s = 0; s < r.length; s++)
								if (r[s] !== n[s]) return !1;
							return !0
						}
						return !1
					},
					getKeySystems: function() {
						return r
					},
					getKeySystemBySystemString: function(e) {
						for (var t = 0; t < r.length; t++)
							if (r[t].systemString === e) return r[t];
						return null
					},
					getSupportedKeySystemsFromContentProtection: function(e) {
						var t, n, s, i, a = [];
						if (e)
							for (s = 0; s < r.length; ++s)
								for (n = r[s], i = 0; i < e.length; ++i)
									if ((t = e[i]).schemeIdUri.toLowerCase() === n.schemeIdURI) {
										var o = n.getInitData(t);
										o && a.push({
											ks: r[s],
											initData: o
										})
									} return a
					},
					getSupportedKeySystems: function(e, t) {
						var n, i = [],
							a = s.default.parsePSSHList(e);
						for (n = 0; n < r.length; ++n) {
							var o = r[n].systemString,
								u = !t || o in t;
							r[n].uuid in a && u && i.push({
								ks: r[n],
								initData: a[r[n].uuid]
							})
						}
						return i
					},
					getLicenseServer: function(t, r, n) {
						if ("license-release" === n || "individualization-request" === n) return null;
						var s = null;
						return r && r.hasOwnProperty("drmtoday") ? s = (0, u.default)(e).getInstance() : "com.widevine.alpha" === t.systemString ? s = (0, d.default)(e).getInstance() : "com.microsoft.playready" === t.systemString ? s = (0, l.default)(e).getInstance() : "org.w3.clearkey" === t.systemString && (s = (0, c.default)(e).getInstance()), s
					},
					processClearKeyLicenseRequest: function(e, r) {
						try {
							return n.getClearKeysFromProtectionData(e, r)
						} catch (s) {
							return t("Failed to retrieve clearkeys from ProtectionData"), null
						}
					},
					setConfig: function(e) {
						e && e.log && (t = e.log)
					}
				}
			}
			h.__dashjs_factory_name = "ProtectionKeyController", t.default = f.default.getSingletonFactory(h), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/drm/KeySystemClearKey.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeyPair.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/vo/ClearKeyKeySet.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/CommonEncryption.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				u = "1077efec-c0b2-4d02-ace3-3c1e52e2fb4b",
				l = "org.w3.clearkey",
				d = "urn:uuid:" + u;

			function c() {
				return {
					uuid: u,
					schemeIdURI: d,
					systemString: l,
					getInitData: function(e) {
						return a.default.parseInitDataFromContentProtection(e)
					},
					getRequestHeadersFromMessage: function() {
						return null
					},
					getLicenseRequestFromMessage: function(e) {
						return new Uint8Array(e)
					},
					getLicenseServerURLFromInitData: function() {
						return null
					},
					getClearKeysFromProtectionData: function(e, t) {
						var r = null;
						if (e) {
							for (var n = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(t))), a = [], o = 0; o < n.kids.length; o++) {
								var u = n.kids[o],
									l = e.clearkeys.hasOwnProperty(u) ? e.clearkeys[u] : null;
								if (!l) throw new Error("DRM: ClearKey keyID (" + u + ") is not known!");
								a.push(new s.default(u, l))
							}
							r = new i.default(a)
						}
						return r
					}
				}
			}
			c.__dashjs_factory_name = "KeySystemClearKey", t.default = o.default.getSingletonFactory(c), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/drm/KeySystemPlayReady.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/CommonEncryption.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/Error.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				o = n(r("./node_modules/dashjs/build/es5/externals/base64.js")),
				u = "9a04f079-9840-4286-ab92-e65be0885f95",
				l = "com.microsoft.playready",
				d = "urn:uuid:" + u;

			function c() {
				var e = "utf16";
				return {
					uuid: u,
					schemeIdURI: d,
					systemString: l,
					getInitData: function(e) {
						var t, r, n, i, a, u = new Uint8Array([112, 115, 115, 104, 0, 0, 0, 0]),
							l = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]),
							d = 0,
							c = null;
						if ("pssh" in e) return s.default.parseInitDataFromContentProtection(e);
						if ("pro" in e) c = o.default.decodeArray(e.pro.__text);
						else {
							if (!("prheader" in e)) return null;
							c = o.default.decodeArray(e.prheader.__text)
						}
						return t = c.length, r = 4 + u.length + l.length + 4 + t, n = new ArrayBuffer(r), i = new Uint8Array(n), (a = new DataView(n)).setUint32(d, r), d += 4, i.set(u, d), d += u.length, i.set(l, d), d += l.length, a.setUint32(d, t), d += 4, i.set(c, d), d += t, i.buffer
					},
					getRequestHeadersFromMessage: function(t) {
						var r, n, s = {},
							i = new DOMParser,
							a = "utf16" === e ? new Uint16Array(t) : new Uint8Array(t);
						r = String.fromCharCode.apply(null, a);
						for (var o = (n = i.parseFromString(r, "application/xml")).getElementsByTagName("name"), u = n.getElementsByTagName("value"), l = 0; l < o.length; l++) s[o[l].childNodes[0].nodeValue] = u[l].childNodes[0].nodeValue;
						return s.hasOwnProperty("Content") && (s["Content-Type"] = s.Content, delete s.Content), s
					},
					getLicenseRequestFromMessage: function(t) {
						var r, n, s = null,
							i = new DOMParser,
							a = "utf16" === e ? new Uint16Array(t) : new Uint8Array(t);
						if (r = String.fromCharCode.apply(null, a), (n = i.parseFromString(r, "application/xml")).getElementsByTagName("Challenge")[0]) {
							var u = n.getElementsByTagName("Challenge")[0].childNodes[0].nodeValue;
							u && (s = o.default.decode(u))
						}
						return s
					},
					getLicenseServerURLFromInitData: function(e) {
						if (e)
							for (var t = new DataView(e), r = t.getUint16(4, !0), n = 6, s = new DOMParser, i = 0; i < r; i++) {
								var a = t.getUint16(n, !0);
								n += 2;
								var o = t.getUint16(n, !0);
								if (n += 2, 1 === a) {
									var u = e.slice(n, n + o),
										l = String.fromCharCode.apply(null, new Uint16Array(u)),
										d = s.parseFromString(l, "application/xml");
									if (d.getElementsByTagName("LA_URL")[0]) {
										var c = d.getElementsByTagName("LA_URL")[0].childNodes[0].nodeValue;
										if (c) return c
									}
									if (d.getElementsByTagName("LUI_URL")[0]) {
										var f = d.getElementsByTagName("LUI_URL")[0].childNodes[0].nodeValue;
										if (f) return f
									}
								} else n += o
							}
						return null
					},
					setPlayReadyMessageFormat: function(t) {
						if ("utf8" !== t && "utf16" !== t) throw new i.default("Illegal PlayReady message format! -- " + t);
						e = t
					}
				}
			}
			c.__dashjs_factory_name = "KeySystemPlayReady", t.default = a.default.getSingletonFactory(c), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/drm/KeySystemWidevine.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/CommonEncryption.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				a = "edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",
				o = "com.widevine.alpha",
				u = "urn:uuid:" + a;

			function l() {
				return {
					uuid: a,
					schemeIdURI: u,
					systemString: o,
					getInitData: function(e) {
						return s.default.parseInitDataFromContentProtection(e)
					},
					getRequestHeadersFromMessage: function() {
						return null
					},
					getLicenseRequestFromMessage: function(e) {
						return new Uint8Array(e)
					},
					getLicenseServerURLFromInitData: function() {
						return null
					}
				}
			}
			l.__dashjs_factory_name = "KeySystemWidevine", t.default = i.default.getSingletonFactory(l), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/models/ProtectionModel_01b.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/controllers/ProtectionKeyController.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/vo/NeedKey.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeyError.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeyMessage.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeySystemConfiguration.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeySystemAccess.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				c = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/ErrorHandler.js")),
				f = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function h(e) {
				var t, r = this.context,
					n = e.eventBus,
					f = e.log,
					h = e.api,
					m = void 0,
					g = void 0,
					p = void 0,
					_ = void 0,
					v = void 0,
					y = void 0,
					E = void 0,
					T = void 0;

				function b(e) {
					m[h.cancelKeyRequest](g.systemString, e.sessionID)
				}

				function j(e, t) {
					if (t && e) {
						for (var r = e.length, n = 0; n < r; n++)
							if (e[n].sessionID == t) return e[n];
						return null
					}
					return null
				}

				function S() {
					m.removeEventListener(h.keyerror, T), m.removeEventListener(h.needkey, T), m.removeEventListener(h.keymessage, T), m.removeEventListener(h.keyadded, T)
				}
				return t = {
					getAllInitData: function() {
						for (var e = [], t = 0; t < v.length; t++) e.push(v[t].initData);
						for (t = 0; t < y.length; t++) e.push(y[t].initData);
						return e
					},
					requestKeySystemAccess: function(e) {
						var t = m;
						t || (t = document.createElement("video"));
						for (var r = !1, s = 0; s < e.length; s++)
							for (var i = e[s].ks.systemString, a = e[s].configs, o = null, c = 0; c < a.length; c++) {
								var f = a[c].videoCapabilities;
								if (f && 0 !== f.length) {
									o = [];
									for (var h = 0; h < f.length; h++) "" !== t.canPlayType(f[h].contentType, i) && o.push(f[h])
								}
								if (o && (!o || 0 !== o.length)) {
									r = !0;
									var g = new u.default(null, o),
										_ = p.getKeySystemBySystemString(i);
									n.trigger(d.default.KEY_SYSTEM_ACCESS_COMPLETE, {
										data: new l.default(_, g)
									});
									break
								}
							}
						r || n.trigger(d.default.KEY_SYSTEM_ACCESS_COMPLETE, {
							error: "Key system access denied! -- No valid audio/video content configurations detected!"
						})
					},
					getKeySystem: function() {
						return g
					},
					selectKeySystem: function(e) {
						g = e.keySystem, n.trigger(d.default.INTERNAL_KEY_SYSTEM_SELECTED)
					},
					setMediaElement: function(e) {
						m !== e && (m && S(), (m = e) && (m.addEventListener(h.keyerror, T), m.addEventListener(h.needkey, T), m.addEventListener(h.keymessage, T), m.addEventListener(h.keyadded, T), n.trigger(d.default.VIDEO_ELEMENT_SELECTED)))
					},
					createKeySession: function(e) {
						if (!g) throw new Error("Can not create sessions until you have selected a key system");
						if (E || 0 === y.length) {
							var t = {
								sessionID: null,
								initData: e,
								getSessionID: function() {
									return this.sessionID
								},
								getExpirationTime: function() {
									return NaN
								},
								getSessionType: function() {
									return "temporary"
								}
							};
							return v.push(t), m[h.generateKeyRequest](g.systemString, new Uint8Array(e)), t
						}
						throw new Error("Multiple sessions not allowed!")
					},
					updateKeySession: function(e, t) {
						var r = e.sessionID;
						if (p.isClearKey(g))
							for (var n = 0; n < t.keyPairs.length; n++) m[h.addKey](g.systemString, t.keyPairs[n].key, t.keyPairs[n].keyID, r);
						else m[h.addKey](g.systemString, new Uint8Array(t), e.initData, r)
					},
					closeKeySession: b,
					setServerCertificate: function() {},
					loadKeySession: function() {},
					removeKeySession: function() {},
					reset: function() {
						m && S();
						for (var e = 0; e < y.length; e++) b(y[e]);
						n.trigger(d.default.TEARDOWN_COMPLETE)
					}
				}, m = null, g = null, v = [], y = [], p = (0, s.default)(r).getInstance(), _ = (0, c.default)(r).getInstance(), T = {
					handleEvent: function(e) {
						var t = null;
						switch (e.type) {
							case h.needkey:
								var r = ArrayBuffer.isView(e.initData) ? e.initData.buffer : e.initData;
								n.trigger(d.default.NEED_KEY, {
									key: new i.default(r, "cenc")
								});
								break;
							case h.keyerror:
								if ((t = j(y, e.sessionId)) || (t = j(v, e.sessionId)), t) {
									var s = "";
									switch (e.errorCode.code) {
										case 1:
											s += "MEDIA_KEYERR_UNKNOWN - An unspecified error occurred. This value is used for errors that don't match any of the other codes.";
											break;
										case 2:
											s += "MEDIA_KEYERR_CLIENT - The Key System could not be installed or updated.";
											break;
										case 3:
											s += "MEDIA_KEYERR_SERVICE - The message passed into update indicated an error from the license service.";
											break;
										case 4:
											s += "MEDIA_KEYERR_OUTPUT - There is no available output device with the required characteristics for the content protection system.";
											break;
										case 5:
											s += "MEDIA_KEYERR_HARDWARECHANGE - A hardware configuration change caused a content protection error.";
											break;
										case 6:
											s += "MEDIA_KEYERR_DOMAIN - An error occurred in a multi-device domain licensing configuration. The most common error is a failure to join the domain."
									}
									s += "  System Code = " + e.systemCode, n.trigger(d.default.KEY_ERROR, {
										data: new a.default(t, s)
									})
								} else f("No session token found for key error");
								break;
							case h.keyadded:
								(t = j(y, e.sessionId)) || (t = j(v, e.sessionId)), t ? (f("DRM: Key added."), n.trigger(d.default.KEY_ADDED, {
									data: t
								})) : f("No session token found for key added");
								break;
							case h.keymessage:
								if ((E = null !== e.sessionId && void 0 !== e.sessionId) ? !(t = j(y, e.sessionId)) && v.length > 0 && (t = v.shift(), y.push(t), t.sessionID = e.sessionId) : v.length > 0 && (t = v.shift(), y.push(t), 0 !== v.length && _.mediaKeyMessageError("Multiple key sessions were creates with a user-agent that does not support sessionIDs!! Unpredictable behavior ahead!")), t) {
									var u = ArrayBuffer.isView(e.message) ? e.message.buffer : e.message;
									t.keyMessage = u, n.trigger(d.default.INTERNAL_KEY_MESSAGE, {
										data: new o.default(t, u, e.defaultURL)
									})
								} else f("No session token found for key message")
						}
					}
				}, t
			}
			h.__dashjs_factory_name = "ProtectionModel_01b", t.default = f.default.getClassFactory(h), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/models/ProtectionModel_21Jan2015.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/controllers/ProtectionKeyController.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/vo/NeedKey.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeyError.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeyMessage.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeySystemAccess.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function c(e) {
				var t, r, n, d, c, f, h, m = this.context,
					g = e.eventBus,
					p = e.log;

				function _(e) {
					var t = e.session;
					return t.removeEventListener("keystatuseschange", e), t.removeEventListener("message", e), t.close()
				}

				function v(e) {
					for (var t = 0; t < c.length; t++)
						if (c[t] === e) {
							c.splice(t, 1);
							break
						}
				}

				function y(e, t, r) {
					var n = {
						session: e,
						initData: t,
						handleEvent: function(e) {
							switch (e.type) {
								case "keystatuseschange":
									g.trigger(l.default.KEY_STATUSES_CHANGED, {
										data: this
									});
									break;
								case "message":
									var t = ArrayBuffer.isView(e.message) ? e.message.buffer : e.message;
									g.trigger(l.default.INTERNAL_KEY_MESSAGE, {
										data: new o.default(this, t, void 0, e.messageType)
									})
							}
						},
						getSessionID: function() {
							return e.sessionId
						},
						getExpirationTime: function() {
							return e.expiration
						},
						getKeyStatuses: function() {
							return e.keyStatuses
						},
						getSessionType: function() {
							return r
						}
					};
					return e.addEventListener("keystatuseschange", n), e.addEventListener("message", n), e.closed.then((function() {
						v(n), p("DRM: Session closed.  SessionID = " + n.getSessionID()), g.trigger(l.default.KEY_SESSION_CLOSED, {
							data: n.getSessionID()
						})
					})), c.push(n), n
				}
				return t = {
					getAllInitData: function() {
						for (var e = [], t = 0; t < c.length; t++) e.push(c[t].initData);
						return e
					},
					requestKeySystemAccess: function(e) {
						! function e(t, r) {
							! function(r) {
								var n = t[r].ks,
									s = t[r].configs;
								navigator.requestMediaKeySystemAccess(n.systemString, s).then((function(e) {
									var t = "function" == typeof e.getConfiguration ? e.getConfiguration() : null,
										r = new u.default(n, t);
									r.mksa = e, g.trigger(l.default.KEY_SYSTEM_ACCESS_COMPLETE, {
										data: r
									})
								})).catch((function() {
									++r < t.length ? e(t, r) : g.trigger(l.default.KEY_SYSTEM_ACCESS_COMPLETE, {
										error: "Key system access denied!"
									})
								}))
							}(r)
						}(e, 0)
					},
					getKeySystem: function() {
						return r
					},
					selectKeySystem: function(e) {
						e.mksa.createMediaKeys().then((function(t) {
							r = e.keySystem, d = t, n && n.setMediaKeys(d), g.trigger(l.default.INTERNAL_KEY_SYSTEM_SELECTED)
						})).catch((function() {
							g.trigger(l.default.INTERNAL_KEY_SYSTEM_SELECTED, {
								error: "Error selecting keys system (" + e.keySystem.systemString + ")! Could not create MediaKeys -- TODO"
							})
						}))
					},
					setMediaElement: function(e) {
						n !== e && (n && (n.removeEventListener("encrypted", f), n.setMediaKeys(null)), (n = e) && (n.addEventListener("encrypted", f), d && n.setMediaKeys(d)))
					},
					setServerCertificate: function(e) {
						if (!r || !d) throw new Error("Can not set server certificate until you have selected a key system");
						d.setServerCertificate(e).then((function() {
							p("DRM: License server certificate successfully updated."), g.trigger(l.default.SERVER_CERTIFICATE_UPDATED)
						})).catch((function(e) {
							g.trigger(l.default.SERVER_CERTIFICATE_UPDATED, {
								error: "Error updating server certificate -- " + e.name
							})
						}))
					},
					createKeySession: function(e, t) {
						if (!r || !d) throw new Error("Can not create sessions until you have selected a key system");
						var n = d.createSession(t),
							s = y(n, e, t);
						n.generateRequest("cenc", e).then((function() {
							p("DRM: Session created.  SessionID = " + s.getSessionID()), g.trigger(l.default.KEY_SESSION_CREATED, {
								data: s
							})
						})).catch((function(e) {
							v(s), g.trigger(l.default.KEY_SESSION_CREATED, {
								data: null,
								error: "Error generating key request -- " + e.name
							})
						}))
					},
					updateKeySession: function(e, t) {
						var n = e.session;
						h.isClearKey(r) && (t = t.toJWK()), n.update(t).catch((function(t) {
							g.trigger(l.default.KEY_ERROR, {
								data: new a.default(e, "Error sending update() message! " + t.name)
							})
						}))
					},
					loadKeySession: function(e) {
						if (!r || !d) throw new Error("Can not load sessions until you have selected a key system");
						var t = d.createSession();
						t.load(e).then((function(r) {
							if (r) {
								var n = y(t);
								p("DRM: Session created.  SessionID = " + n.getSessionID()), g.trigger(l.default.KEY_SESSION_CREATED, {
									data: n
								})
							} else g.trigger(l.default.KEY_SESSION_CREATED, {
								data: null,
								error: "Could not load session! Invalid Session ID (" + e + ")"
							})
						})).catch((function(t) {
							g.trigger(l.default.KEY_SESSION_CREATED, {
								data: null,
								error: "Could not load session (" + e + ")! " + t.name
							})
						}))
					},
					removeKeySession: function(e) {
						e.session.remove().then((function() {
							p("DRM: Session removed.  SessionID = " + e.getSessionID()), g.trigger(l.default.KEY_SESSION_REMOVED, {
								data: e.getSessionID()
							})
						}), (function(t) {
							g.trigger(l.default.KEY_SESSION_REMOVED, {
								data: null,
								error: "Error removing session (" + e.getSessionID() + "). " + t.name
							})
						}))
					},
					closeKeySession: function(e) {
						_(e).catch((function(t) {
							v(e), g.trigger(l.default.KEY_SESSION_CLOSED, {
								data: null,
								error: "Error closing session (" + e.getSessionID() + ") " + t.name
							})
						}))
					},
					reset: function() {
						var e, t = c.length;
						if (0 !== t)
							for (var r = function(e) {
									v(e), 0 === c.length && (n ? (n.removeEventListener("encrypted", f), n.setMediaKeys(null).then((function() {
										g.trigger(l.default.TEARDOWN_COMPLETE)
									}))) : g.trigger(l.default.TEARDOWN_COMPLETE))
								}, s = 0; s < t; s++) ! function(t) {
								e.session.closed.then((function() {
									r(t)
								})), _(e).catch((function() {
									r(t)
								}))
							}(e = c[s]);
						else g.trigger(l.default.TEARDOWN_COMPLETE)
					}
				}, r = null, n = null, d = null, c = [], h = (0, s.default)(m).getInstance(), f = {
					handleEvent: function(e) {
						switch (e.type) {
							case "encrypted":
								if (e.initData) {
									var t = ArrayBuffer.isView(e.initData) ? e.initData.buffer : e.initData;
									g.trigger(l.default.NEED_KEY, {
										key: new i.default(t, e.initDataType)
									})
								}
						}
					}
				}, t
			}
			c.__dashjs_factory_name = "ProtectionModel_21Jan2015", t.default = d.default.getClassFactory(c), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/models/ProtectionModel_3Feb2014.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/controllers/ProtectionKeyController.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/vo/NeedKey.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeyError.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeyMessage.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeySystemConfiguration.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeySystemAccess.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				c = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function f(e) {
				var t, r = this.context,
					n = e.eventBus,
					c = e.log,
					f = e.api,
					h = void 0,
					m = void 0,
					g = void 0,
					p = void 0,
					_ = void 0,
					v = void 0,
					y = void 0;

				function E(e) {
					var t = e.session;
					t.removeEventListener(f.error, e), t.removeEventListener(f.message, e), t.removeEventListener(f.ready, e), t.removeEventListener(f.close, e);
					for (var r = 0; r < _.length; r++)
						if (_[r] === e) {
							_.splice(r, 1);
							break
						} t[f.release]()
				}

				function T() {
					var e = null,
						t = function() {
							h.removeEventListener("loadedmetadata", e), h[f.setMediaKeys](g), n.trigger(d.default.VIDEO_ELEMENT_SELECTED)
						};
					h.readyState >= 1 ? t() : (e = t.bind(this), h.addEventListener("loadedmetadata", e))
				}
				return t = {
					getAllInitData: function() {
						for (var e = [], t = 0; t < _.length; t++) e.push(_[t].initData);
						return e
					},
					requestKeySystemAccess: function(e) {
						for (var t = !1, r = 0; r < e.length; r++)
							for (var s = e[r].ks.systemString, i = e[r].configs, a = null, o = null, c = 0; c < i.length; c++) {
								var h = i[c].audioCapabilities,
									m = i[c].videoCapabilities;
								if (h && 0 !== h.length) {
									a = [];
									for (var g = 0; g < h.length; g++) window[f.MediaKeys].isTypeSupported(s, h[g].contentType) && a.push(h[g])
								}
								if (m && 0 !== m.length) {
									o = [];
									for (var p = 0; p < m.length; p++) window[f.MediaKeys].isTypeSupported(s, m[p].contentType) && o.push(m[p])
								}
								if (!(!a && !o || a && 0 === a.length || o && 0 === o.length)) {
									t = !0;
									var _ = new u.default(a, o),
										v = y.getKeySystemBySystemString(s);
									n.trigger(d.default.KEY_SYSTEM_ACCESS_COMPLETE, {
										data: new l.default(v, _)
									});
									break
								}
							}
						t || n.trigger(d.default.KEY_SYSTEM_ACCESS_COMPLETE, {
							error: "Key system access denied! -- No valid audio/video content configurations detected!"
						})
					},
					getKeySystem: function() {
						return m
					},
					selectKeySystem: function(e) {
						try {
							g = e.mediaKeys = new window[f.MediaKeys](e.keySystem.systemString), m = e.keySystem, p = e, h && T(), n.trigger(d.default.INTERNAL_KEY_SYSTEM_SELECTED)
						} catch (t) {
							n.trigger(d.default.INTERNAL_KEY_SYSTEM_SELECTED, {
								error: "Error selecting keys system (" + m.systemString + ")! Could not create MediaKeys -- TODO"
							})
						}
					},
					setMediaElement: function(e) {
						h !== e && (h && h.removeEventListener(f.needkey, v), (h = e) && (h.addEventListener(f.needkey, v), g && T()))
					},
					createKeySession: function(e) {
						if (!m || !g || !p) throw new Error("Can not create sessions until you have selected a key system");
						var t = null;
						if (null !== p.ksConfiguration.videoCapabilities && p.ksConfiguration.videoCapabilities.length > 0 && (t = p.ksConfiguration.videoCapabilities[0]), null === t && null !== p.ksConfiguration.audioCapabilities && p.ksConfiguration.audioCapabilities.length > 0 && (t = p.ksConfiguration.audioCapabilities[0]), null === t) throw new Error("Can not create sessions for unknown content types.");
						var r = t.contentType,
							s = g.createSession(r, new Uint8Array(e)),
							i = function(e, t) {
								return {
									session: e,
									initData: t,
									getSessionID: function() {
										return this.session.sessionId
									},
									getExpirationTime: function() {
										return NaN
									},
									getSessionType: function() {
										return "temporary"
									},
									handleEvent: function(e) {
										switch (e.type) {
											case f.error:
												n.trigger(d.default.KEY_ERROR, {
													data: new a.default(this, "KeyError")
												});
												break;
											case f.message:
												var t = ArrayBuffer.isView(e.message) ? e.message.buffer : e.message;
												n.trigger(d.default.INTERNAL_KEY_MESSAGE, {
													data: new o.default(this, t, e.destinationURL)
												});
												break;
											case f.ready:
												c("DRM: Key added."), n.trigger(d.default.KEY_ADDED);
												break;
											case f.close:
												c("DRM: Session closed.  SessionID = " + this.getSessionID()), n.trigger(d.default.KEY_SESSION_CLOSED, {
													data: this.getSessionID()
												})
										}
									}
								}
							}(s, e);
						s.addEventListener(f.error, i), s.addEventListener(f.message, i), s.addEventListener(f.ready, i), s.addEventListener(f.close, i), _.push(i), c("DRM: Session created.  SessionID = " + i.getSessionID()), n.trigger(d.default.KEY_SESSION_CREATED, {
							data: i
						})
					},
					updateKeySession: function(e, t) {
						var r = e.session;
						y.isClearKey(m) ? r.update(new Uint8Array(t.toJWK())) : r.update(new Uint8Array(t))
					},
					closeKeySession: E,
					setServerCertificate: function() {},
					loadKeySession: function() {},
					removeKeySession: function() {},
					reset: function() {
						try {
							for (var e = 0; e < _.length; e++) E(_[e]);
							h && h.removeEventListener(f.needkey, v), n.trigger(d.default.TEARDOWN_COMPLETE)
						} catch (t) {
							n.trigger(d.default.TEARDOWN_COMPLETE, {
								error: "Error tearing down key sessions and MediaKeys! -- " + t.message
							})
						}
					}
				}, h = null, m = null, g = null, p = null, _ = [], y = (0, s.default)(r).getInstance(), v = {
					handleEvent: function(e) {
						switch (e.type) {
							case f.needkey:
								if (e.initData) {
									var t = ArrayBuffer.isView(e.initData) ? e.initData.buffer : e.initData;
									n.trigger(d.default.NEED_KEY, {
										key: new i.default(t, "cenc")
									})
								}
						}
					}
				}, t
			}
			f.__dashjs_factory_name = "ProtectionModel_3Feb2014", t.default = c.default.getClassFactory(f), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/servers/ClearKey.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeyPair.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/protection/vo/ClearKeyKeySet.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function o() {
				return {
					getServerURLFromMessage: function(e, t) {
						var r = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(t)));
						e += "/?";
						for (var n = 0; n < r.kids.length; n++) e += r.kids[n] + "&";
						return e = e.substring(0, e.length - 1)
					},
					getHTTPMethod: function() {
						return "GET"
					},
					getResponseType: function() {
						return "json"
					},
					getLicenseMessage: function(e) {
						if (!e.hasOwnProperty("keys")) return null;
						for (var t = [], r = 0; r < e.keys.length; r++) {
							var n = e.keys[r],
								a = n.kid.replace(/=/g, ""),
								o = n.k.replace(/=/g, "");
							t.push(new s.default(a, o))
						}
						return new i.default(t)
					},
					getErrorResponse: function(e) {
						return String.fromCharCode.apply(null, new Uint8Array(e))
					}
				}
			}
			o.__dashjs_factory_name = "ClearKey", t.default = a.default.getSingletonFactory(o), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/servers/DRMToday.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = n(r("./node_modules/dashjs/build/es5/externals/base64.js"));

			function a() {
				var e = {
					"com.widevine.alpha": {
						responseType: "json",
						getLicenseMessage: function(e) {
							return i.default.decodeArray(e.license)
						},
						getErrorResponse: function(e) {
							return e
						}
					},
					"com.microsoft.playready": {
						responseType: "arraybuffer",
						getLicenseMessage: function(e) {
							return e
						},
						getErrorResponse: function(e) {
							return String.fromCharCode.apply(null, new Uint8Array(e))
						}
					}
				};
				return {
					getServerURLFromMessage: function(e) {
						return e
					},
					getHTTPMethod: function() {
						return "POST"
					},
					getResponseType: function(t) {
						return e[t].responseType
					},
					getLicenseMessage: function(t, r) {
						return e[r].getLicenseMessage(t)
					},
					getErrorResponse: function(t, r) {
						return e[r].getErrorResponse(t)
					}
				}
			}
			a.__dashjs_factory_name = "DRMToday", t.default = s.default.getSingletonFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/servers/PlayReady.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				};

			function a() {
				return {
					getServerURLFromMessage: function(e) {
						return e
					},
					getHTTPMethod: function() {
						return "POST"
					},
					getResponseType: function() {
						return "arraybuffer"
					},
					getLicenseMessage: function(e) {
						return e
					},
					getErrorResponse: function(e) {
						return String.fromCharCode.apply(null, new Uint8Array(e))
					}
				}
			}
			a.__dashjs_factory_name = "PlayReady", t.default = i.default.getSingletonFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/servers/Widevine.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				};

			function a() {
				return {
					getServerURLFromMessage: function(e) {
						return e
					},
					getHTTPMethod: function() {
						return "POST"
					},
					getResponseType: function() {
						return "arraybuffer"
					},
					getLicenseMessage: function(e) {
						return e
					},
					getErrorResponse: function(e) {
						return String.fromCharCode.apply(null, new Uint8Array(e))
					}
				}
			}
			a.__dashjs_factory_name = "Widevine", t.default = i.default.getSingletonFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/vo/ClearKeyKeySet.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function() {
				function e(e, t) {
					for (var r = 0; r < t.length; r++) {
						var n = t[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
					}
				}
				return function(t, r, n) {
					return r && e(t.prototype, r), n && e(t, n), t
				}
			}();
			var s = function() {
				function e(t, r) {
					if (function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, e), r && "persistent" !== r && "temporary" !== r) throw new Error("Invalid ClearKey key set type!  Must be one of 'persistent' or 'temporary'");
					this.keyPairs = t, this.type = r
				}
				return n(e, [{
					key: "toJWK",
					value: function() {
						var e, t = this.keyPairs.length,
							r = {
								keys: []
							};
						for (e = 0; e < t; e++) {
							var n = {
								kty: "oct",
								alg: "A128KW",
								kid: this.keyPairs[e].keyID,
								k: this.keyPairs[e].key
							};
							r.keys.push(n)
						}
						this.type && (r.type = this.type);
						var s = JSON.stringify(r),
							i = s.length,
							a = new ArrayBuffer(i),
							o = new Uint8Array(a);
						for (e = 0; e < i; e++) o[e] = s.charCodeAt(e);
						return a
					}
				}]), e
			}();
			t.default = s, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeyError.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e(t, r) {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.sessionToken = t, this.error = r
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeyMessage.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e(t, r, n, s) {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.sessionToken = t, this.message = r, this.defaultURL = n, this.messageType = s || "license-request"
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeyPair.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e(t, r) {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.keyID = t, this.key = r
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeySystemAccess.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e(t, r) {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.keySystem = t, this.ksConfiguration = r
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeySystemConfiguration.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e(t, r, n, s, i) {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.initDataTypes = ["cenc"], t && t.length && (this.audioCapabilities = t), r && r.length && (this.videoCapabilities = r), this.distinctiveIdentifier = n, this.persistentState = s, this.sessionTypes = i
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/vo/MediaCapability.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e(t, r) {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.contentType = t, this.robustness = r
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/vo/NeedKey.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e(t, r) {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.initData = t, this.initDataType = r
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/DroppedFramesHistory.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				};

			function a() {
				var e = [],
					t = 0,
					r = 0;
				return {
					push: function(n, s) {
						var i = s.droppedVideoFrames - t;
						t = s.droppedVideoFrames;
						var a = s.totalVideoFrames - r;
						r = s.totalVideoFrames, e[n] ? (e[n].droppedVideoFrames += i, e[n].totalVideoFrames += a) : e[n] = {
							droppedVideoFrames: i,
							totalVideoFrames: a
						}
					},
					getFrameHistory: function() {
						return e
					},
					reset: function(n) {
						e = [], t = n.droppedVideoFrames, r = n.totalVideoFrames
					}
				}
			}
			a.__dashjs_factory_name = "DroppedFramesHistory";
			var o = i.default.getClassFactory(a);
			t.default = o, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/RulesContext.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				};

			function a(e) {
				var t = e.streamProcessor.getCurrentRepresentationInfo(),
					r = e.streamProcessor,
					n = e.currentValue,
					s = e.playbackIndex,
					i = e.switchHistory,
					a = e.droppedFramesHistory,
					o = e.currentRequest,
					u = e.hasRichBuffer;
				return {
					getCurrentValue: function() {
						return n
					},
					getManifestInfo: function() {
						return t.mediaInfo.streamInfo.manifestInfo
					},
					getMediaInfo: function() {
						return t.mediaInfo
					},
					getPlaybackIndex: function() {
						return s
					},
					getDroppedFramesHistory: function() {
						return a
					},
					getCurrentRequest: function() {
						return o
					},
					getSwitchHistory: function() {
						return i
					},
					getStreamInfo: function() {
						return t.mediaInfo.streamInfo
					},
					getStreamProcessor: function() {
						return r
					},
					getTrackInfo: function() {
						return t
					},
					hasRichBuffer: function() {
						return u
					}
				}
			}
			a.__dashjs_factory_name = "RulesContext", t.default = i.default.getClassFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequest.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				},
				a = -1;

			function o(e, t) {
				return {
					value: void 0 === e ? a : e,
					reason: void 0 === t ? null : t
				}
			}
			o.__dashjs_factory_name = "SwitchRequest";
			var u = i.default.getClassFactory(o);
			u.NO_CHANGE = a, t.default = u, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequestHistory.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				},
				a = 8;

			function o() {
				var e = [],
					t = [];
				return {
					push: function(r) {
						e[r.oldValue] || (e[r.oldValue] = {
							noDrops: 0,
							drops: 0,
							dropSize: 0
						});
						var n = r.newValue - r.oldValue,
							s = n < 0 ? 1 : 0,
							i = s ? -n : 0,
							o = s ? 0 : 1;
						if (e[r.oldValue].drops += s, e[r.oldValue].dropSize += i, e[r.oldValue].noDrops += o, t.push({
								idx: r.oldValue,
								noDrop: o,
								drop: s,
								dropSize: i
							}), t.length > a) {
							var u = t.shift();
							e[u.idx].drops -= u.drop, e[u.idx].dropSize -= u.dropSize, e[u.idx].noDrops -= u.noDrop
						}
					},
					getSwitchRequests: function() {
						return e
					},
					reset: function() {
						e = [], t = []
					}
				}
			}
			o.__dashjs_factory_name = "SwitchRequestHistory";
			var u = i.default.getClassFactory(o);
			t.default = u, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/abr/ABRRulesCollection.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/rules/abr/ThroughputRule.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/rules/abr/InsufficientBufferRule.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/rules/abr/AbandonRequestsRule.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/rules/abr/DroppedFramesRule.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/streaming/rules/abr/SwitchHistoryRule.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/streaming/rules/abr/BolaRule.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/streaming/rules/abr/BolaAbandonRule.js")),
				c = n(r("./node_modules/dashjs/build/es5/src/streaming/models/MediaPlayerModel.js")),
				f = n(r("./node_modules/dashjs/build/es5/src/streaming/models/MetricsModel.js")),
				h = n(r("./node_modules/dashjs/build/es5/src/dash/DashMetrics.js")),
				m = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				g = n(r("./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequest.js")),
				p = "qualitySwitchRules",
				_ = "abandonFragmentRules";

			function v() {
				var e = this.context,
					t = void 0,
					r = void 0;

				function n(e) {
					return e.filter((function(e) {
						return e.value > g.default.NO_CHANGE
					}))
				}

				function m(e) {
					if (0 !== e.length) return e.reduce((function(e, t) {
						return e.value < t.value ? e : t
					}))
				}
				return {
					initialize: function() {
						t = [], r = [];
						var n = (0, f.default)(e).getInstance(),
							m = (0, h.default)(e).getInstance();
						(0, c.default)(e).getInstance().getBufferOccupancyABREnabled() ? (t.push((0, l.default)(e).create({
							metricsModel: n,
							dashMetrics: m
						})), r.push((0, d.default)(e).create({
							metricsModel: n,
							dashMetrics: m
						}))) : (t.push((0, s.default)(e).create({
							metricsModel: n,
							dashMetrics: m
						})), t.push((0, i.default)(e).create({
							metricsModel: n
						})), t.push((0, u.default)(e).create()), t.push((0, o.default)(e).create()), r.push((0, a.default)(e).create()))
					},
					getRules: function(e) {
						switch (e) {
							case p:
								return t;
							case _:
								return r;
							default:
								return null
						}
					},
					getMaxQuality: function(r) {
						return m(n(t.map((function(e) {
							return e.getMaxIndex(r)
						})))) || (0, g.default)(e).create()
					},
					shouldAbandonFragment: function(t) {
						return m(n(r.map((function(e) {
							return e.shouldAbandon(t)
						})))) || (0, g.default)(e).create()
					}
				}
			}
			v.__dashjs_factory_name = "ABRRulesCollection";
			var y = m.default.getSingletonFactory(v);
			y.QUALITY_SWITCH_RULES = p, y.ABANDON_FRAGMENT_RULES = _, t.default = y, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/abr/AbandonRequestsRule.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequest.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/models/MediaPlayerModel.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/dash/DashMetrics.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/models/MetricsModel.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js"));

			function d() {
				var e = 1.8,
					t = 500,
					r = 5,
					n = this.context,
					u = (0, l.default)(n).getInstance().log,
					c = void 0,
					f = void 0,
					h = void 0,
					m = void 0,
					g = void 0,
					p = void 0;

				function _() {
					c = {}, f = {}, h = [], m = (0, i.default)(n).getInstance(), g = (0, a.default)(n).getInstance(), p = (0, o.default)(n).getInstance()
				}
				var v = {
					shouldAbandon: function(i) {
						var a, o, l = i.getMediaInfo(),
							_ = l.type,
							v = i.getCurrentRequest(),
							y = (0, s.default)(n).create(s.default.NO_CHANGE, {
								name: d.__dashjs_factory_name
							});
						if (!isNaN(v.index)) {
							a = _, o = v.index, c[a] = c[a] || {}, c[a][o] = c[a][o] || {};
							var E = m.getStableBufferTime();
							if (g.getCurrentBufferLevel(p.getReadOnlyMetricsFor(_)) > E) return y;
							var T = c[_][v.index];
							if (null === T || null === v.firstByteDate || f.hasOwnProperty(T.id)) return y;
							if (void 0 === T.firstByteTime && (h[_] = [], T.firstByteTime = v.firstByteDate.getTime(), T.segmentDuration = v.duration, T.bytesTotal = v.bytesTotal, T.id = v.index), T.bytesLoaded = v.bytesLoaded, T.elapsedTime = (new Date).getTime() - T.firstByteTime, T.bytesLoaded > 0 && T.elapsedTime > 0 && function(e, t) {
									h[e] = h[e] || [], h[e].push(t)
								}(_, Math.round(8 * T.bytesLoaded / T.elapsedTime)), h[_].length >= r && T.elapsedTime > t && T.bytesLoaded < T.bytesTotal) {
								var b = h[_].reduce((function(e, t) {
									return e + t
								}), 0);
								if (T.measuredBandwidthInKbps = Math.round(b / h[_].length), T.estimatedTimeOfDownload = +(8 * T.bytesTotal / T.measuredBandwidthInKbps / 1e3).toFixed(2), T.estimatedTimeOfDownload < T.segmentDuration * e || 0 === i.getTrackInfo().quality) return y;
								if (!f.hasOwnProperty(T.id)) {
									var j = i.getStreamProcessor().getABRController(),
										S = T.bytesTotal - T.bytesLoaded,
										M = j.getBitrateList(l),
										R = j.getQualityForBitrate(l, T.measuredBandwidthInKbps * m.getBandwidthSafetyFactor());
									S > T.bytesTotal * M[R].bitrate / M[j.getQualityFor(_, l.streamInfo)].bitrate && (y.value = R, y.reason.throughput = T.measuredBandwidthInKbps, y.reason.fragmentID = T.id, f[T.id] = T, u("AbandonRequestsRule ( ", _, "frag id", T.id, ") is asking to abandon and switch to quality to ", R, " measured bandwidth was", T.measuredBandwidthInKbps), delete c[_][T.id])
								}
							} else T.bytesLoaded === T.bytesTotal && delete c[_][T.id]
						}
						return y
					},
					reset: function() {
						_()
					}
				};
				return _(), v
			}
			d.__dashjs_factory_name = "AbandonRequestsRule", t.default = u.default.getClassFactory(d), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/abr/BolaAbandonRule.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequest.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/models/MediaPlayerModel.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/streaming/rules/abr/BolaRule.js"));

			function l(e) {
				var t, r = 500,
					n = 200,
					a = this.context,
					d = (0, o.default)(a).getInstance().log,
					c = e.dashMetrics,
					f = e.metricsModel,
					h = void 0;
				return t = {
					shouldAbandon: function(e) {
						var t = e.getMediaInfo().type,
							i = f.getReadOnlyMetricsFor(t),
							o = e.getCurrentRequest(),
							m = (0, s.default)(a).create(s.default.NO_CHANGE, {
								name: l.__dashjs_factory_name
							});
						if (0 === i.BolaState.length) return d("WARNING: executing BolaAbandonRule before initializing BolaRule"), h[t] = null, m;
						var g = i.BolaState[0]._s,
							p = o.index,
							_ = o.quality;
						if (isNaN(p) || 0 === _ || ! function(e, t, r) {
								var n = h[e];
								return !n || (t !== n.index || r < n.quality)
							}(t, p, _) || !o.firstByteDate) return m;
						var v = Date.now() - o.firstByteDate.getTime(),
							y = o.bytesLoaded,
							E = o.bytesTotal,
							T = E - y,
							b = o.duration,
							j = c.getCurrentBufferLevel(i) ? c.getCurrentBufferLevel(i) : 0,
							S = j + g.placeholderBuffer,
							M = 8 * y / (.001 * v),
							R = g.bandwidthSafetyFactor * M,
							I = .001 * (o.firstByteDate.getTime() - o.requestStartDate.getTime());
						I < .001 * n && (I = .001 * n);
						var C = I + 8 * E / R,
							A = "";
						u.default.BOLA_DEBUG && (A = "index=" + p + " quality=" + _ + " bytesLoaded/bytesTotal=" + y + "/" + E + " bufferLevel=" + j + " timeSince1stByte=" + (v / 1e3).toFixed(3) + " estThroughput=" + (R / 1e6).toFixed(3) + " latency=" + I.toFixed(3));
						var D = E * g.bitrates[0] / g.bitrates[_],
							P = T - I * R / 8;
						if (P < 1 && (P = 1), v < r || T <= D || j > g.bufferTarget || P <= D || C <= b) return m;
						var w = S - I;
						w < 0 && (w = 0);
						for (var O = 0; O + 1 < _ && E * g.bitrates[O + 1] / g.bitrates[_] < P;) ++O;
						var x = _;
						if (g.state === u.default.BOLA_STATE_STARTUP) {
							x = 0;
							for (var F = 0; F <= O && !(8 * (D = E * g.bitrates[F] / g.bitrates[_]) / b > R); ++F) x = F
						} else {
							var N = (g.Vp * (g.utilities[_] + g.gp) - w) / P;
							for (F = 0; F <= O; ++F) {
								D = E * g.bitrates[F] / g.bitrates[_], (K = (g.Vp * (g.utilities[F] + g.gp) - w) / D) > N && (x = F, N = K)
							}
						}
						var L = g.rebufferSafetyFactor * M * (j - I) / 8;
						if (x === _ && P > L && (x = O), x === _) return m;
						for (; x > 0 && !((D = E * g.bitrates[x] / g.bitrates[_]) <= L);) --x;
						var B = NaN;
						if (x > 0) {
							var k = g.utilities[x],
								U = g.utilities[x - 1],
								K = g.bitrates[x],
								H = g.bitrates[x - 1];
							B = g.Vp * ((K * U - H * k) / (K - H) + g.gp)
						} else {
							k = g.utilities[0], U = g.utilities[1], K = g.bitrates[0], H = g.bitrates[1];
							B = g.Vp * ((K * U - H * k) / (K - H) + g.gp), B -= b
						}
						return S > B && (g.placeholderBuffer = B - j, g.placeholderBuffer < 0 && (g.placeholderBuffer = 0)), g.lastQuality = x, f.updateBolaState(t, g), u.default.BOLA_DEBUG && d("BolaDebug " + t + " BolaAbandonRule abandon to " + x + " - " + A),
							function(e, t, r) {
								h[e] = {
									index: t,
									quality: r
								}
							}(t, p, _), m.value = x, m.reason.state = g.state, m.reason.throughput = M, m.reason.bufferLevel = j, m.reason.bytesLoaded = o.bytesLoaded, m.reason.bytesTotal = o.bytesTotal, m.reason.elapsedTimeMs = v, m
					},
					reset: function() {
						h = {}
					}
				}, h = {}, (0, i.default)(a).getInstance(), t
			}
			l.__dashjs_factory_name = "BolaAbandonRule", t.default = a.default.getClassFactory(l), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/abr/BolaRule.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequest.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/models/MediaPlayerModel.js")),
				o = r("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js"),
				u = n(r("./node_modules/dashjs/build/es5/src/dash/DashAdapter.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				c = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				f = 0,
				h = 1,
				m = 2,
				g = !1,
				p = 10,
				_ = 30,
				v = .5;

			function y(e) {
				var t = 2,
					r = 3,
					n = this.context,
					i = (0, c.default)(n).getInstance().log,
					E = e.dashMetrics,
					T = e.metricsModel,
					b = (0, l.default)(n).getInstance(),
					j = void 0,
					S = void 0,
					M = void 0,
					R = void 0,
					I = void 0,
					C = void 0,
					A = void 0;

				function D() {
					S = {}, M = {}, R = {}, I = [], C = (0, a.default)(n).getInstance(), A = (0, u.default)(n).getInstance(), b.on(d.default.BUFFER_EMPTY, F, j), b.on(d.default.PLAYBACK_SEEKING, N, j), b.on(d.default.PERIOD_SWITCH_STARTED, L, j), b.on(d.default.MEDIA_FRAGMENT_LOADED, B, j)
				}

				function P(e, t, r, n) {
					var s = NaN;
					if (n ? (s = 0, n.forEach((function(e, t) {
							e > n[s] && (s = t)
						}))) : (n = function(e) {
							return e.map((function(e) {
								return Math.log(e)
							}))
						}(r), s = n.length - 1), 0 === s) return null;
					var i = 1 - n[0] + (n[s] - n[0]) / (t / e - 1),
						a = e / (n[0] + i - 1);
					return {
						utilities: n,
						gp: i,
						Vp: a
					}
				}

				function w(e, t) {
					for (var r = E.getHttpRequests(e), n = [], s = r.length - 1; s >= 0 && n.length < t; --s) {
						var i = r[s];
						i.type === o.HTTPRequest.MEDIA_SEGMENT_TYPE && i._tfinish && i.tresponse && i.trace && n.push(i)
					}
					return n
				}

				function O(e, t, r) {
					var n = w(e, t);
					if (0 === n.length) return 0;
					for (var s = 0, a = "", o = 0; o < n.length; ++o) {
						var u = .001 * (n[o]._tfinish.getTime() - n[o].trequest.getTime()),
							l = 8 * n[o].trace.reduce((function(e, t) {
								return e + t.b[0]
							}), 0);
						g && (a += " " + (1e-6 * l).toFixed(3) + "/" + u.toFixed(3) + "=" + (1e-6 * l / u).toFixed(3) + "Mbps"), s += u / l
					}
					return g && i("BolaDebug " + r + " BolaRule recent throughput = " + (n.length / (1e6 * s)).toFixed(3) + "Mbps:" + a), n.length / s
				}

				function x(e, t) {
					var r = 0;
					return e.bitrates.some((function(e, n) {
						return e > t || (r = n, !1)
					})), r
				}

				function F() {
					g && i("BolaDebug BUFFER_EMPTY"), I.forEach((function(e) {
						var t = T.getReadOnlyMetricsFor(e);
						if (0 !== t.BolaState.length) {
							var r = t.BolaState[0]._s;
							r.state === m && (r.placeholderBuffer = 0, T.updateBolaState(e, r))
						}
					}))
				}

				function N(e) {
					g && i("BolaDebug PLAYBACK_SEEKING " + e.seekTime.toFixed(3)), I.forEach((function(e) {
						var t = T.getReadOnlyMetricsFor(e);
						if (0 !== t.BolaState.length) {
							var r = t.BolaState[0]._s;
							r.state !== f && (r.state = h), T.updateBolaState(e, r)
						}
					})), M = {}, R = {}
				}

				function L() {}

				function B(e) {
					if (e && e.chunk && e.chunk.mediaInfo) {
						var t = e.chunk.mediaInfo.type,
							r = e.chunk.start;
						void 0 === t || isNaN(r) || (r <= M[t] ? R[t] = !0 : (R[t] = !1, M[t] = r))
					}
				}
				return j = {
					getMaxIndex: function(e) {
						var a = e.getStreamProcessor();
						a.getScheduleController().setTimeToLoadDelay(0);
						var o = (0, s.default)(n).create(s.default.NO_CHANGE, {
								name: y.__dashjs_factory_name
							}),
							u = e.getMediaInfo().type,
							l = T.getReadOnlyMetricsFor(u);
						if (0 === l.BolaState.length) {
							g && i("BolaDebug " + u + "\nBolaDebug " + u + " BolaRule for state=- fragmentStart=" + A.getIndexHandlerTime(e.getStreamProcessor()).toFixed(3));
							var d = function(e) {
								var n = {},
									s = e.getMediaInfo(),
									a = e.getStreamProcessor(),
									o = e.getStreamInfo(),
									u = e.getTrackInfo(),
									l = a.isDynamic(),
									d = o.manifestInfo.duration,
									c = u.fragmentDuration,
									m = s.bitrateList.map((function(e) {
										return e.bandwidth
									})),
									y = P(p, _, m, null);
								if (null === y) return n.state = f, n;
								if (n.state = h, n.bitrates = m, n.utilities = y.utilities, n.Vp = y.Vp, n.gp = y.gp, n.isDynamic = l, n.movieDuration = d, n.fragmentDuration = c, n.bandwidthSafetyFactor = C.getBandwidthSafetyFactor(), n.rebufferSafetyFactor = v, n.bufferTarget = C.getStableBufferTime(), n.lastQuality = 0, n.placeholderBuffer = 0, n.throughputCount = l ? t : r, g) {
									for (var E = "", T = 0; T < m.length; ++T) {
										var b = y.utilities[T],
											j = m[T],
											S = 0;
										if (T > 0) {
											var M = y.utilities[T - 1],
												R = m[T - 1];
											S = y.Vp * ((M * j - b * R) / (j - R) + y.gp)
										}
										var I = y.Vp * (b + y.gp);
										E += "\n" + T + ":" + (1e-6 * m[T]).toFixed(3) + "Mbps " + S.toFixed(3) + "/" + I.toFixed(3)
									}
									i("BolaDebug " + s.type + " bitrates" + E)
								}
								return n
							}(e);
							T.updateBolaState(u, d);
							var c = 0;
							if (d.state !== f) {
								I.push(u);
								var b = O(l, d.throughputCount, u);
								if (0 === b) return g && i("BolaDebug " + u + " BolaRule quality unchanged for INITIALIZE"), o;
								c = x(d, b * d.bandwidthSafetyFactor), d.lastQuality = c, o.value = c, o.reason.state = d.state, o.reason.throughput = b
							}
							return g && i("BolaDebug " + u + " BolaRule quality " + c + " for INITIALIZE"), o
						}
						var j = l.BolaState[0]._s;
						if (j.state === f) return g && i("BolaDebug " + u + " BolaRule quality 0 for ONE_BITRATE"), o;
						var M = j.bitrates,
							D = j.utilities;
						g && i("BolaDebug " + u + "\nBolaDebug " + u + " EXECUTE BolaRule for state=" + j.state + " fragmentStart=" + A.getIndexHandlerTime(e.getStreamProcessor()).toFixed(3));
						var F = E.getCurrentBufferLevel(l) ? E.getCurrentBufferLevel(l) : 0,
							N = O(l, j.throughputCount, u);
						F <= .1 && (j.placeholderBuffer = 0);
						var L = function(e, t) {
							var r = Date.now(),
								n = S[t],
								s = R[t],
								i = NaN;
							if (S[t] = r, R[t] = !1, !s) {
								var a = w(e, 1);
								a.length > 0 && (i = a[0]._tfinish.getTime()) > r && (i = r)
							}
							var o = 0;
							return o = s || n > i ? r - n : r - i, isNaN(o) || o <= 0 ? 0 : .001 * o
						}(l, u);
						L > 0 && (j.placeholderBuffer += L), j.placeholderBuffer < 0 && (j.placeholderBuffer = 0);
						var B = F + j.placeholderBuffer,
							k = function(e, t) {
								for (var r = e.bitrates.length, n = NaN, s = NaN, i = 0; i < r; ++i) {
									var a = (e.Vp * (e.utilities[i] + e.gp) - t) / e.bitrates[i];
									(isNaN(s) || a >= s) && (s = a, n = i)
								}
								return n
							}(j, B);
						if (g && i("BolaDebug " + u + " BolaRule bufferLevel=" + F.toFixed(3) + "(+" + j.placeholderBuffer.toFixed(3) + "=" + B.toFixed(3) + ") recentThroughput=" + (1e-6 * N).toFixed(3) + " tentativeQuality=" + k), j.state === h) {
							var c = x(j, N * j.bandwidthSafetyFactor);
							if (F > j.fragmentDuration / v) {
								j.state = m;
								for (var U = 0, K = 0; K < c; ++K) {
									var H = j.Vp * (j.gp + (M[c] * D[K] - M[K] * D[c]) / (M[c] - M[K]));
									H > U && (U = H)
								}
								U > F && (j.placeholderBuffer = U - F)
							}
							return g && i("BolaDebug " + u + " BolaRule quality " + c + " for STARTUP"), j.lastQuality = c, T.updateBolaState(u, j), o.value = c, o.reason.state = h, o.reason.throughput = N, o
						}
						if (k > j.lastQuality && k > (c = x(j, N)) && (c < j.lastQuality && (c = j.lastQuality), k = c), N > 0)
							for (var q = v * N * F / j.fragmentDuration; k > 0 && M[k] > q;) --k;
						var Y = 0;
						return (Y = B - j.Vp * (D[k] + j.gp)) > 0 && (Y > j.placeholderBuffer ? (Y -= j.placeholderBuffer, j.placeholderBuffer = 0) : (j.placeholderBuffer -= Y, Y = 0)), Y > 0 ? k === M.length - 1 ? Y = 0 : a.getScheduleController().setTimeToLoadDelay(1e3 * Y) : Y = 0, j.lastQuality = k, T.updateBolaState(u, j), o.value = k, o.reason.state = j.state, o.reason.throughput = N, o.reason.bufferLevel = F, g && i("BolaDebug " + u + " BolaRule quality " + k + " delay=" + Y.toFixed(3) + " for STEADY"), o
					},
					reset: function() {
						b.off(d.default.BUFFER_EMPTY, F, j), b.off(d.default.PLAYBACK_SEEKING, N, j), b.off(d.default.PERIOD_SWITCH_STARTED, L, j), b.off(d.default.MEDIA_FRAGMENT_LOADED, B, j), D()
					}
				}, D(), j
			}
			y.__dashjs_factory_name = "BolaRule";
			var E = i.default.getClassFactory(y);
			E.BOLA_STATE_ONE_BITRATE = f, E.BOLA_STATE_STARTUP = h, E.BOLA_STATE_STEADY = m, E.BOLA_DEBUG = g, t.default = E, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/abr/DroppedFramesRule.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequest.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js"));

			function o() {
				var e = this.context,
					t = (0, a.default)(e).getInstance().log,
					r = .15,
					n = 375;
				return {
					getMaxIndex: function(s) {
						var a = s.getDroppedFramesHistory();
						if (a) {
							for (var o = a.getFrameHistory(), u = 0, l = 0, d = i.default.NO_CHANGE, c = 1; c < o.length; c++)
								if (o[c] && (u = o[c].droppedVideoFrames, (l = o[c].totalVideoFrames) > n && u / l > r)) {
									t("DroppedFramesRule, index: " + (d = c - 1) + " Dropped Frames: " + u + " Total Frames: " + l);
									break
								} return (0, i.default)(e).create(d, {
								droppedFrames: u
							})
						}
						return (0, i.default)(e).create()
					}
				}
			}
			o.__dashjs_factory_name = "DroppedFramesRule";
			var u = s.default.getClassFactory(o);
			t.default = u, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/abr/InsufficientBufferRule.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/BufferController.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequest.js"));

			function d(e) {
				var t = this.context,
					r = (0, u.default)(t).getInstance().log,
					n = (0, i.default)(t).getInstance(),
					o = e.metricsModel,
					d = void 0,
					c = void 0,
					f = void 0,
					h = void 0;

				function m() {
					c = {}
				}
				return d = {
					getMaxIndex: function(e) {
						var n, i, a = (new Date).getTime(),
							u = e.getMediaInfo().type,
							d = o.getReadOnlyMetricsFor(u),
							m = d.BufferState.length > 0 ? d.BufferState[d.BufferState.length - 1] : null,
							g = (0, l.default)(t).create();
						return a - f < h || null === m ? g : (n = u, i = m.state, c[n] = c[n] || {}, c[n].state = i, i !== s.default.BUFFER_LOADED || c[n].firstBufferLoadedEvent || (c[n].firstBufferLoadedEvent = !0), m.state === s.default.BUFFER_EMPTY && void 0 !== c[u].firstBufferLoadedEvent && (r("Switch to index 0; buffer is empty."), g.value = 0, g.reason = "InsufficientBufferRule: Buffer is empty"), f = a, g)
					},
					reset: function() {
						n.off(a.default.PLAYBACK_SEEKING, m, d), c = {}, f = 0
					}
				}, c = {}, f = 0, h = 1e3, n.on(a.default.PLAYBACK_SEEKING, m, d), d
			}
			d.__dashjs_factory_name = "InsufficientBufferRule", t.default = o.default.getClassFactory(d), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/abr/SwitchHistoryRule.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequest.js"));

			function o() {
				var e = this.context,
					t = (0, i.default)(e).getInstance().log,
					r = .075,
					n = 6;
				return {
					getMaxIndex: function(s) {
						for (var i = s.getSwitchHistory().getSwitchRequests(), o = 0, u = 0, l = 0, d = (0, a.default)(e).create(), c = 0; c < i.length; c++)
							if (void 0 !== i[c] && (o += i[c].drops, u += i[c].noDrops, l += i[c].dropSize, o + u >= n && o / u > r)) {
								d.value = c > 0 ? c - 1 : 0, d.reason = {
									index: d.value,
									drops: o,
									noDrops: u,
									dropSize: l
								}, t("Switch history rule index: " + d.value + " samples: " + (o + u) + " drops: " + o);
								break
							} return d
					}
				}
			}
			o.__dashjs_factory_name = "SwitchRequest";
			var u = s.default.getClassFactory(o);
			t.default = u, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/abr/ThroughputRule.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/BufferController.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/AbrController.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/models/MediaPlayerModel.js")),
				o = r("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js"),
				u = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequest.js"));

			function c(e) {
				var t = 20,
					r = 3,
					n = 4,
					u = n,
					c = 50,
					f = 5,
					h = 50,
					m = 1.3,
					g = 1.3,
					p = this.context,
					_ = (0, l.default)(p).getInstance().log,
					v = e.dashMetrics,
					y = e.metricsModel,
					E = void 0,
					T = void 0,
					b = void 0;

				function j() {
					E = [], T = [], b = (0, a.default)(p).getInstance()
				}

				function S(e) {
					var t = void 0;
					return T[e] && T[e].length > 0 && (t = T[e].reduce((function(e, t) {
						return e + t
					})) / T[e].length), t
				}

				function M(e, s) {
					var i = function(e, t) {
							var s = Math.min(E[e].length, t ? r : n),
								i = E[e].slice(-1 * s, E[e].length);
							return i.length > 1 && i.reduce((function(e, t) {
								return (e * g <= t || e >= t * m) && s++, t
							})), s = Math.min(E[e].length, s), E[e].slice(-1 * s, E[e].length)
						}(e, s),
						a = 0;
					i.length > 0 && (a = i.reduce((function(e, t) {
						return e + t
					}), 0) / i.length);
					return E[e].length >= t && E[e].shift(), a / 1e3 * b.getBandwidthSafetyFactor()
				}
				var R = {
					getMaxIndex: function(e) {
						var t = e.getMediaInfo(),
							r = t.type,
							n = y.getReadOnlyMetricsFor(r),
							a = e.getStreamProcessor(),
							l = a.getABRController(),
							m = a.isDynamic(),
							g = v.getCurrentHttpRequest(n),
							b = n.BufferState.length > 0 ? n.BufferState[n.BufferState.length - 1] : null,
							j = e.hasRichBuffer(),
							R = (0, d.default)(p).create();
						if (!n || !g || g.type !== o.HTTPRequest.MEDIA_SEGMENT_TYPE || !b || j) return R;
						var I = void 0,
							C = void 0;
						if (g.trace && g.trace.length) {
							C = g.tresponse.getTime() - g.trequest.getTime() || 1, I = g._tfinish.getTime() - g.tresponse.getTime() || 1;
							var A = g.trace.reduce((function(e, t) {
									return e + t.b[0]
								}), 0),
								D = Math.round(8 * A / (I / 1e3)),
								P = void 0,
								w = void 0;
							! function(e, t, r) {
								var n = !1;
								if (e < h && (n = !0), !n) switch (r) {
									case "video":
										n = t < c;
										break;
									case "audio":
										n = t < f
								}
								return n
							}(C, I, r) ? (! function(e, t) {
								E[e] = E[e] || [], E[e].push(t)
							}(r, D), P = M(r, m), function(e, t) {
								if (T[e] || (T[e] = []), T[e].push(t), T[e].length > u) T[e].shift()
							}(r, C), w = S(r)) : E[r] && T[r] ? (P = M(r, m), w = S(r)) : (P = D / 1e3, w = C), l.setAverageThroughput(r, P), l.getAbandonmentStateFor(r) !== i.default.ABANDON_LOAD && (b.state === s.default.BUFFER_LOADED || m) && (R.value = l.getQualityForBitrate(t, P, w), a.getScheduleController().setTimeToLoadDelay(0), _("ThroughputRule requesting switch to index: ", R.value, "type: ", r, "Average throughput", Math.round(P), "kbps"), R.reason = {
								throughput: P,
								latency: w
							})
						}
						return R
					},
					reset: function() {
						j()
					}
				};
				return j(), R
			}
			c.__dashjs_factory_name = "ThroughputRule", t.default = u.default.getClassFactory(c), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/scheduling/BufferLevelRule.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/models/MediaPlayerModel.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function a(e) {
				var t = this.context,
					r = e.dashMetrics,
					n = e.metricsModel,
					i = e.textController,
					a = void 0;

				function o(e, t, s) {
					var o = NaN,
						u = e.getCurrentRepresentationInfo();
					if ("fragmentedText" === t) o = i.getAllTracksAreDisabled() ? 0 : u.fragmentDuration;
					else if ("audio" === t && s) {
						var l = r.getCurrentBufferLevel(n.getReadOnlyMetricsFor("video"));
						o = Math.floor(Math.max(l, u.fragmentDuration))
					} else {
						var d = u.mediaInfo.streamInfo;
						if (e.getABRController().isPlayingAtTopQuality(d)) o = d.manifestInfo.duration >= a.getLongFormContentDurationThreshold() ? a.getBufferTimeAtTopQualityLongForm() : a.getBufferTimeAtTopQuality();
						else o = a.getStableBufferTime()
					}
					return o
				}
				var u = {
					execute: function(e, t, s) {
						return r.getCurrentBufferLevel(n.getReadOnlyMetricsFor(t)) < o(e, t, s)
					},
					getBufferTarget: o
				};
				return a = (0, s.default)(t).getInstance(), u
			}
			a.__dashjs_factory_name = "BufferLevelRule", t.default = i.default.getClassFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/scheduling/NextFragmentRequestRule.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function a(e) {
				var t = this.context,
					r = (0, s.default)(t).getInstance().log,
					n = e.adapter,
					i = e.sourceBufferController,
					a = e.textController;
				return {
					execute: function(e, t) {
						var s = e.getCurrentRepresentationInfo(),
							o = s.mediaInfo.type,
							u = e.getScheduleController(),
							l = u.getSeekTarget(),
							d = !isNaN(l),
							c = e.getBuffer(),
							f = d ? l : n.getIndexHandlerTime(e);
						if (isNaN(f) || "fragmentedText" === o && a.getAllTracksAreDisabled()) return null;
						if (d && u.setSeekTarget(NaN), c) {
							var h = i.getBufferRange(e.getBuffer(), f);
							null !== h && (r("Prior to making a request for time, NextFragmentRequestRule is aligning index handler's currentTime with bufferedRange.end.", f, " was changed to ", h.end), f = h.end)
						}
						var m = void 0;
						return t ? (f = t.startTime + t.duration / 2, m = n.getFragmentRequestForTime(e, s, f, {
							timeThreshold: 0,
							ignoreIsFinished: !0
						})) : ((m = n.getFragmentRequestForTime(e, s, f, {
							keepIdx: !d
						})) && e.getFragmentModel().isFragmentLoaded(m) && (m = n.getNextFragmentRequest(e, s)), m && (n.setIndexHandlerTime(e, m.startTime + m.duration), m.delayLoadingTime = (new Date).getTime() + u.getTimeToLoadDelay(), u.setTimeToLoadDelay(0))), m
					}
				}
			}
			a.__dashjs_factory_name = "NextFragmentRequestRule", t.default = i.default.getClassFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/text/EmbeddedTextHtmlRender.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				};

			function a() {
				var e = 0;

				function t(e) {
					for (var t = "", r = 0; r < e.length; ++r) {
						t += e[r].uchar
					}
					return t.length - t.replace(/^\s+/, "").length
				}

				function r(e) {
					return "left: " + 3.125 * e.x + "%; top: " + 6.66 * e.y1 + "%; width: " + (100 - 3.125 * e.x) + "%; height: " + 6.66 * Math.max(e.y2 - 1 - e.y1, 1) + "%; align-items: flex-start; overflow: visible; -webkit-writing-mode: horizontal-tb;"
				}

				function n(e) {
					return "red" === e ? "rgb(255, 0, 0)" : "green" === e ? "rgb(0, 255, 0)" : "blue" === e ? "rgb(0, 0, 255)" : "cyan" === e ? "rgb(0, 255, 255)" : "magenta" === e ? "rgb(255, 0, 255)" : "yellow" === e ? "rgb(255, 255, 0)" : "white" === e ? "rgb(255, 255, 255)" : "black" === e ? "rgb(0, 0, 0)" : e
				}

				function s(e, t) {
					var r = e.videoHeight / 15;
					return t ? "font-size: " + r + "px; font-family: Menlo, Consolas, 'Cutive Mono', monospace; color: " + (t.foreground ? n(t.foreground) : "rgb(255, 255, 255)") + "; font-style: " + (t.italics ? "italic" : "normal") + "; text-decoration: " + (t.underline ? "underline" : "none") + "; white-space: pre; background-color: " + (t.background ? n(t.background) : "transparent") + ";" : "font-size: " + r + "px; font-family: Menlo, Consolas, 'Cutive Mono', monospace; justify-content: flex-start; text-align: left; color: rgb(255, 255, 255); font-style: normal; white-space: pre; line-height: normal; font-weight: normal; text-decoration: none; width: 100%; display: flex;"
				}

				function i(e) {
					return e.replace(/^\s+/g, "")
				}

				function a(e) {
					return e.replace(/\s+$/g, "")
				}
				return {
					createHTMLCaptionsFromScreen: function(n, o, u, l) {
						var d = null,
							c = !1,
							f = -1,
							h = {
								start: o,
								end: u,
								spans: []
							},
							m = "style_cea608_white_black",
							g = {},
							p = {},
							_ = [],
							v = void 0,
							y = void 0;
						for (v = 0; v < 15; ++v) {
							var E = l.rows[v],
								T = "",
								b = null;
							if (!1 === E.isEmpty()) {
								var j = t(E.chars);
								null === d && (d = {
									x: j,
									y1: v,
									y2: v + 1,
									p: []
								}), j !== f && c && (d.p.push(h), h = {
									start: o,
									end: u,
									spans: []
								}, d.y2 = v, d.name = "region_" + d.x + "_" + d.y1 + "_" + d.y2, !1 === g.hasOwnProperty(d.name) ? (_.push(d), g[d.name] = d) : g[d.name].p.contat(d.p), d = {
									x: j,
									y1: v,
									y2: v + 1,
									p: []
								});
								for (var S = 0; S < E.chars.length; ++S) {
									var M = E.chars[S],
										R = M.penState;
									if (null === b || !R.equals(b)) {
										T.trim().length > 0 && (h.spans.push({
											name: m,
											line: T,
											row: v
										}), T = "");
										var I = "style_cea608_" + R.foreground + "_" + R.background;
										R.underline && (I += "_underline"), R.italics && (I += "_italics"), p.hasOwnProperty(I) || (p[I] = JSON.parse(JSON.stringify(R))), b = R, m = I
									}
									T += M.uchar
								}
								T.trim().length > 0 && h.spans.push({
									name: m,
									line: T,
									row: v
								}), c = !0, f = j
							} else c = !1, f = -1, d && (d.p.push(h), h = {
								start: o,
								end: u,
								spans: []
							}, d.y2 = v, d.name = "region_" + d.x + "_" + d.y1 + "_" + d.y2, !1 === g.hasOwnProperty(d.name) ? (_.push(d), g[d.name] = d) : g[d.name].p.contat(d.p), d = null)
						}
						d && (d.p.push(h), d.y2 = v + 1, d.name = "region_" + d.x + "_" + d.y1 + "_" + d.y2, !1 === g.hasOwnProperty(d.name) ? (_.push(d), g[d.name] = d) : g[d.name].p.contat(d.p), d = null);
						var C = [];
						for (v = 0; v < _.length; ++v) {
							var A = _[v],
								D = "sub_cea608_" + e++,
								P = document.createElement("div");
							P.id = D;
							var w = r(A);
							P.style.cssText = "position: absolute; margin: 0; display: flex; box-sizing: border-box; pointer-events: none;" + w;
							var O = document.createElement("div");
							O.className = "paragraph bodyStyle", O.style.cssText = s(n);
							var x = document.createElement("div");
							x.className = "cueUniWrapper", x.style.cssText = "unicode-bidi: normal; direction: ltr;";
							for (var F = 0; F < A.p.length; ++F) {
								var N = A.p[F],
									L = 0;
								for (y = 0; y < N.spans.length; ++y) {
									var B = N.spans[y];
									if (B.line.length > 0) {
										if (0 !== y && L != B.row) {
											var k = document.createElement("br");
											k.className = "lineBreak", x.appendChild(k)
										}
										var U = !1;
										L === B.row && (U = !0), L = B.row;
										var K = p[B.name],
											H = document.createElement("span");
										H.className = "spanPadding " + B.name + " customSpanColor", H.style.cssText = s(n, K), 0 !== y && U ? y === N.spans.length - 1 ? H.textContent = a(B.line) : H.textContent = B.line : 0 === y && N.spans.length > 1 && B.row === N.spans[1].row ? H.textContent = i(B.line) : H.textContent = B.line.trim(), x.appendChild(H)
									}
								}
							}
							O.appendChild(x), P.appendChild(O);
							var q = {
								bodyStyle: ["%", 90]
							};
							for (y in p) p.hasOwnProperty(y) && (q[y] = ["%", 90]);
							C.push({
								type: "html",
								start: o,
								end: u,
								cueHTMLElement: P,
								cueID: D,
								cellResolution: [32, 15],
								isFromCEA608: !0,
								regions: _,
								regionID: A.name,
								videoHeight: n.videoHeight,
								videoWidth: n.videoWidth,
								fontSize: q,
								lineHeight: {},
								linePadding: {}
							})
						}
						return C
					}
				}
			}
			a.__dashjs_factory_name = "EmbeddedTextHtmlRender", t.default = i.default.getSingletonFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/text/NotFragmentedTextBufferController.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/InitCache.js"));

			function u(e) {
				var t = this.context,
					r = (0, s.default)(t).getInstance(),
					n = e.sourceBufferController,
					a = e.errHandler,
					u = void 0,
					l = void 0,
					d = void 0,
					c = void 0,
					f = void 0,
					h = void 0,
					m = void 0,
					g = void 0;

				function p(e) {
					c = e
				}

				function _(e) {
					e.sender.getStreamProcessor() === m && r.trigger(i.default.TIMED_TEXT_REQUESTED, {
						index: 0,
						sender: e.sender
					})
				}

				function v(e) {
					e.fragmentModel === m.getFragmentModel() && e.chunk.bytes && n.append(f, e.chunk)
				}
				return u = {
						initialize: function(e, r, n) {
							h = e, p(r), (m = n).getRepresentationController(), g = (0, o.default)(t).getInstance()
						},
						createBuffer: function(e) {
							try {
								f = n.createSourceBuffer(c, e), d || (f.hasOwnProperty("initialize") && f.initialize(h, this), d = !0)
							} catch (t) {
								a.mediaSourceError("Error creating " + h + " source buffer.")
							}
							return f
						},
						getType: function() {
							return h
						},
						getStreamProcessor: function() {
							return m
						},
						setStreamProcessor: function(e) {
							m = e
						},
						getBuffer: function() {
							return f
						},
						setBuffer: function(e) {
							f = e
						},
						getBufferLevel: function() {
							return 0
						},
						getCriticalBufferLevel: function() {
							return 0
						},
						setMediaSource: p,
						getMediaSource: function() {
							return c
						},
						getIsBufferingCompleted: function() {
							return l
						},
						switchInitData: function(e, t) {
							var s = g.extract(e, h, t);
							s ? n.append(s) : r.trigger(i.default.INIT_REQUESTED, {
								sender: u
							})
						},
						reset: function(e) {
							r.off(i.default.DATA_UPDATE_COMPLETED, _, this), r.off(i.default.INIT_FRAGMENT_LOADED, v, this), e || (n.abort(c, f), n.removeSourceBuffer(c, f))
						}
					},
					function() {
						d = !1, c = null, f = null, h = null, m = null, null, l = !1, r.on(i.default.DATA_UPDATE_COMPLETED, _, this), r.on(i.default.INIT_FRAGMENT_LOADED, v, this)
					}(), u
			}
			u.__dashjs_factory_name = "NotFragmentedTextBufferController", t.default = a.default.getClassFactory(u), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/text/TextBufferController.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/BufferController.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/text/NotFragmentedTextBufferController.js"));

			function o(e) {
				var t, r = this.context,
					n = void 0;
				return t = {
						initialize: function(e, t, r) {
							return n.initialize(e, t, r)
						},
						createBuffer: function(e) {
							return n.createBuffer(e)
						},
						getType: function() {
							return n.getType()
						},
						getStreamProcessor: function() {
							n.getStreamProcessor()
						},
						setStreamProcessor: function(e) {
							n.setStreamProcessor(e)
						},
						getBuffer: function() {
							return n.getBuffer()
						},
						setBuffer: function(e) {
							n.setBuffer(e)
						},
						getBufferLevel: function() {
							return n.getBufferLevel()
						},
						getCriticalBufferLevel: function() {
							return n.getCriticalBufferLevel()
						},
						setMediaSource: function(e) {
							n.setMediaSource(e)
						},
						getMediaSource: function() {
							return n.getMediaSource()
						},
						getIsBufferingCompleted: function() {
							return n.getIsBufferingCompleted()
						},
						switchInitData: function(e, t) {
							n.switchInitData(e, t)
						},
						reset: function(e) {
							n.reset(e)
						}
					},
					function(e) {
						n = "fragmentedText" === e.type ? (0, i.default)(r).create({
							metricsModel: e.metricsModel,
							manifestModel: e.manifestModel,
							sourceBufferController: e.sourceBufferController,
							errHandler: e.errHandler,
							streamController: e.streamController,
							mediaController: e.mediaController,
							adapter: e.adapter,
							textController: e.textController
						}) : (0, a.default)(r).create({
							errHandler: e.errHandler,
							sourceBufferController: e.sourceBufferController
						})
					}(e), t
			}
			o.__dashjs_factory_name = "TextBufferController", t.default = s.default.getClassFactory(o), t.default = s.default.getClassFactory(o), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/text/TextController.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/text/TextSourceBuffer.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/text/TextTracks.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/VTTParser.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/TTMLParser.js"));

			function l() {
				var e, t = this.context,
					r = void 0,
					n = void 0,
					s = void 0,
					l = void 0,
					d = void 0,
					c = void 0,
					f = void 0,
					h = void 0,
					m = void 0,
					g = void 0;
				return e = {
					setConfig: function(e) {
						e && (e.errHandler && (s = e.errHandler), e.dashManifestModel && (l = e.dashManifestModel), e.mediaController && (d = e.mediaController), e.videoModel && (c = e.videoModel), e.streamController && (f = e.streamController), e.textTracks && (h = e.textTracks), e.vttParser && (m = e.vttParser), e.ttmlParser && (g = e.ttmlParser), r.setConfig({
							errHandler: s,
							dashManifestModel: l,
							mediaController: d,
							videoModel: c,
							streamController: f,
							textTracks: h,
							vttParser: m,
							ttmlParser: g
						}))
					},
					getTextSourceBuffer: function() {
						return r
					},
					getAllTracksAreDisabled: function() {
						return n
					},
					addEmbeddedTrack: function(e) {
						r.addEmbeddedTrack(e)
					},
					setTextTrack: function() {
						for (var e = r.getConfig(), t = e.fragmentModel, n = e.embeddedTracks, s = e.isFragmented, i = e.fragmentedTracks, a = e.allTracksAreDisabled, o = c.getElement().textTracks, u = o.length, l = u - n.length, m = h.getCurrentTrackIdx(), g = 0; g < u; g++) {
							var p = o[g];
							if (a = "showing" !== p.mode, "showing" === p.mode) {
								if (m !== g && (h.setCurrentTrackIdx(g), h.addCaptions(g, 0, null), s && g < l)) {
									var _ = d.getCurrentTrackFor("fragmentedText", f.getActiveStreamInfo()),
										v = i[g];
									v !== _ && (t.abortRequests(), h.deleteTrackCues(_), d.setTrack(v), r.setCurrentFragmentedTrackIdx(g))
								}
								break
							}
						}
						a && h.setCurrentTrackIdx(-1)
					},
					getCurrentTrackIdx: function() {
						return r.getConfig().textTracks.getCurrentTrackIdx()
					},
					reset: function() {
						n = !1, r.resetEmbedded()
					}
				}, h = (0, a.default)(t).getInstance(), m = (0, o.default)(t).getInstance(), g = (0, u.default)(t).getInstance(), r = (0, i.default)(t).getInstance(), h.initialize(), n = !1, e
			}
			l.__dashjs_factory_name = "TextController", t.default = s.default.getSingletonFactory(l), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/text/TextSourceBuffer.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/TextTrackInfo.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/dash/utils/FragmentedTextBoxParser.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/BoxParser.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/CustomTimeRanges.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/streaming/models/VideoModel.js")),
				c = n(r("./node_modules/dashjs/build/es5/src/streaming/text/TextTracks.js")),
				f = n(r("./node_modules/dashjs/build/es5/src/streaming/text/EmbeddedTextHtmlRender.js")),
				h = n(r("./node_modules/codem-isoboxer/dist/iso_boxer.js")),
				m = n(r("./node_modules/dashjs/build/es5/externals/cea608-parser.js")),
				g = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				p = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js"));

			function _() {
				var e = this.context,
					t = (0, l.default)(e).getInstance().log,
					r = (0, g.default)(e).getInstance(),
					n = !1,
					u = void 0,
					_ = void 0,
					v = void 0,
					y = void 0,
					E = void 0,
					T = void 0,
					b = void 0,
					j = void 0,
					S = void 0,
					M = void 0,
					R = void 0,
					I = void 0,
					C = void 0,
					A = void 0,
					D = void 0,
					P = void 0,
					w = void 0,
					O = void 0,
					x = void 0,
					F = void 0,
					N = void 0,
					L = void 0,
					B = void 0,
					k = void 0,
					U = void 0;

				function K(e) {
					var t = e.chunk;
					t.mediaInfo.embeddedCaptions && q(t.bytes, t)
				}

				function H() {
					F = [], S = [], P = (0, d.default)(e).getInstance(), (M = (0, c.default)(e).getInstance()).setConfig({
						videoModel: P
					}), M.initialize(), u = (0, a.default)(e).getInstance(), (j = (0, i.default)(e).getInstance()).setConfig({
						boxParser: u
					}), R = !1, x = null, !1, N = 0, k = [], B = [], L = null, n = !0, U = (0, f.default)(e).getInstance(), r.on(p.default.VIDEO_CHUNK_RECEIVED, K, this)
				}

				function q(e, r) {
					var n, i, a, o, l, d, c = r.mediaInfo,
						f = c.type,
						g = c.mimeType,
						p = c.codec || g;
					if (p) {
						if ("fragmentedText" === f)
							if (C)
								if (i = j.getSamplesInfo(e).sampleList, !O && i.length > 0 && (O = i[0].cts - r.start * A), p.search("stpp") >= 0)
									for (E = null !== E ? E : Y(p), a = 0; a < i.length; a++) {
										var v = i[a],
											y = v.cts,
											T = y - O;
										this.buffered.add(T / A, (T + v.duration) / A);
										var b = new DataView(e, v.offset, v.subSizes[0]);
										d = h.default.Utils.dataViewToString(b, "utf-8");
										var I = [],
											D = v.offset + v.subSizes[0];
										for (o = 1; o < v.subSizes.length; o++) {
											var w = new Uint8Array(e, D, v.subSizes[o]),
												K = String.fromCharCode.apply(null, w);
											I.push(K), D += v.subSizes[o]
										}
										try {
											n = E.parse(d, y / A, (y + v.duration) / A, I), M.addCaptions(x, O / A, n)
										} catch (oe) {
											t("TTML parser error: " + oe.message)
										}
									} else {
										var H = [];
										for (a = 0; a < i.length; a++) {
											var q = i[a];
											q.cts -= O, this.buffered.add(q.cts / A, (q.cts + q.duration) / A);
											var z = e.slice(q.offset, q.offset + q.size),
												V = h.default.parseBuffer(z);
											for (o = 0; o < V.boxes.length; o++) {
												var G = V.boxes[o];
												if (t("VTT box1: " + G.type), "vtte" !== G.type && "vttc" === G.type)
													for (t("VTT vttc boxes.length = " + G.boxes.length), l = 0; l < G.boxes.length; l++) {
														var W = G.boxes[l];
														if (t("VTT box2: " + W.type), "payl" === W.type) {
															var Q = W.cue_text;
															t("VTT cue_text = " + Q);
															var X = q.cts / A,
																J = (q.cts + q.duration) / A;
															H.push({
																start: X,
																end: J,
																data: Q,
																styles: {}
															}), t("VTT " + X + "-" + J + " : " + Q)
														}
													}
											}
										}
										H.length > 0 && M.addCaptions(x, 0, H)
									} else {
										for (C = !0, a = 0; a < S.length; a++) ae(null, S[a]);
										A = j.getMediaTimescaleFromMoov(e)
									} else if ("text" === f) {
										b = new DataView(e, 0, e.byteLength);
										d = h.default.Utils.dataViewToString(b, "utf-8");
										try {
											ae(n = Y(p).parse(d), c)
										} catch (oe) {
											_.timedTextError(oe, "parse", d)
										}
									} else if ("video" === f)
							if ("InitializationSegment" === r.segmentType) {
								if (0 === N)
									for (N = j.getMediaTimescaleFromMoov(e), a = 0; a < F.length; a++) ae(null, F[a])
							} else {
								if (0 === N) return void t("CEA-608: No timescale for embeddedTextTrack yet");
								var Z = function(e, t) {
										return function(e, r, n) {
											var s = null;
											s = P.getTTMLRenderingDiv() ? U.createHTMLCaptionsFromScreen(P.getElement(), e, r, n) : [{
												start: e,
												end: r,
												data: n.getDisplayText(),
												styles: {}
											}], s && M.addCaptions(t, 0, s)
										}
									},
									$ = j.getSamplesInfo(e).sequenceNumber;
								if (!k[0] && !k[1]) {
									var ee = void 0,
										te = void 0;
									for (a = 0; a < F.length; a++) {
										if ("CC1" === F[a].id ? (0, te = M.getTrackIdxForId("CC1")) : "CC3" === F[a].id && (1, te = M.getTrackIdxForId("CC3")), -1 === te) return void t("CEA-608: data before track is ready.");
										ee = Z(0, te), k[a] = new m.default.Cea608Parser(a, {
											newCue: ee
										}, null)
									}
								}
								if (N && -1 == B.indexOf($)) {
									if (null !== L && $ !== L + 1)
										for (a = 0; a < k.length; a++) k[a] && k[a].reset();
									for (var re = function(e) {
											var r, n = u.parse(e),
												s = n.getBox("moof"),
												i = n.getBox("tfdt"),
												a = n.getBox("tfhd"),
												o = n.getBoxes("trun");
											if (0 === o.length) return null;
											r = o[0], o.length > 1 && t("Warning: Too many truns");
											for (var l = s.offset + r.data_offset, d = r.sample_count, c = l, f = i.baseMediaDecodeTime, h = new DataView(e), g = {
													startTime: null,
													endTime: null,
													fields: [
														[],
														[]
													]
												}, p = 0, _ = 0; _ < d; _++) {
												var v = r.samples[_];
												void 0 === v.sample_duration && (v.sample_duration = a.default_sample_duration), void 0 === v.sample_size && (v.sample_size = a.default_sample_size), void 0 === v.sample_composition_time_offset && (v.sample_composition_time_offset = 0);
												for (var y = f + p + v.sample_composition_time_offset, E = m.default.findCea608Nalus(h, c, v.sample_size), T = 0; T < E.length; T++)
													for (var b = m.default.extractCea608DataFromRange(h, E[T]), j = 0; j < 2; j++) b[j].length > 0 && g.fields[j].push([y, b[j]]);
												p += v.sample_duration, c += v.sample_size
											}
											g.fields[0].sort((function(e, t) {
												return e[0] - t[0]
											})), g.fields[1].sort((function(e, t) {
												return e[0] - t[0]
											}));
											var S = f + p;
											return g.startTime = f, g.endTime = S, g
										}(e), ne = 0; ne < k.length; ne++) {
										var se = re.fields[ne],
											ie = k[ne];
										if (ie) {
											for (a = 0; a < se.length; a++) ie.addData(se[a][0] / N, se[a][1]);
											re.endTime && ie.cueSplitAtTime(re.endTime / N)
										}
									}
									L = $, B.push($)
								}
							}
					} else t("No text type defined");

					function ae(e, t) {
						var r, n, i = new s.default,
							a = {
								subtitle: "subtitles",
								caption: "captions"
							};
						i.captionData = e, i.lang = t.lang, i.label = t.id, i.index = t.index, i.isTTML = (r = !1, t.codec && t.codec.search("stpp") >= 0 && (r = !0), t.mimeType && t.mimeType.search("ttml") >= 0 && (r = !0), r), i.video = P.getElement(), i.defaultTrack = function(e) {
							var t = !1;
							F.length > 1 && e.isEmbedded ? t = e.id && "CC1" === e.id : 1 === F.length ? e.id && "CC" === e.id.substring(0, 2) && (t = !0) : 0 === F.length && (t = e.index === S[0].index);
							return t
						}(t), i.isFragmented = R, i.isEmbedded = !!t.isEmbedded, i.kind = n = (n = t.roles.length > 0 ? a[t.roles[0]] : a.caption) === a.caption || n === a.subtitle ? n : a.caption, i.roles = t.roles;
						var o = (S ? S.length : 0) + F.length;
						M.addTextTrack(i, o)
					}
				}

				function Y(e) {
					var t;
					return e.search("vtt") >= 0 ? t = T : (e.search("ttml") >= 0 || e.search("stpp") >= 0) && (t = b).setConfig({
						videoModel: P
					}), t
				}
				return {
					initialize: function(t, r) {
						E = null, I = null, C = !1, A = NaN, D = [], O = null, n || H();
						var s = r.getStreamProcessor();
						if (S = s.getMediaInfoArr(), M.setConfig({
								videoModel: P
							}), M.initialize(), R = !v.getIsTextTrack(t), u = (0, a.default)(e).getInstance(), (j = (0, i.default)(e).getInstance()).setConfig({
								boxParser: u
							}), R) {
							I = s.getFragmentModel(), this.buffered = (0, o.default)(e).create(), D = y.getTracksFor("fragmentedText", w.getActiveStreamInfo());
							for (var l = y.getCurrentTrackFor("fragmentedText", w.getActiveStreamInfo()), d = 0; d < D.length; d++)
								if (D[d] === l) {
									x = d;
									break
								}
						}
					},
					append: q,
					abort: function() {
						M.deleteAllTextTracks(), E = null, j = null, S = null, M = null, R = !1, I = null, C = !1, A = NaN, D = [], P = null, w = null, n = !1, F = null
					},
					addEmbeddedTrack: function(e) {
						n || H(), "CC1" === e.id || "CC3" === e.id ? F.push(e) : t("Warning: Embedded track " + e.id + " not supported!")
					},
					resetEmbedded: function() {
						r.off(p.default.VIDEO_CHUNK_RECEIVED, K, this), null !== M && M.deleteAllTextTracks(), n = !1, F = [], k = [null, null], B = [], L = null
					},
					setConfig: function(e) {
						e && (e.errHandler && (_ = e.errHandler), e.dashManifestModel && (v = e.dashManifestModel), e.mediaController && (y = e.mediaController), e.videoModel && (P = e.videoModel), e.streamController && (w = e.streamController), e.textTracks && (M = e.textTracks), e.vttParser && (T = e.vttParser), e.ttmlParser && (b = e.ttmlParser))
					},
					getConfig: function() {
						return {
							errHandler: _,
							dashManifestModel: v,
							mediaController: y,
							videoModel: P,
							fragmentModel: I,
							streamController: w,
							textTracks: M,
							isFragmented: R,
							embeddedTracks: F,
							fragmentedTracks: D
						}
					},
					setCurrentFragmentedTrackIdx: function(e) {
						x = e
					}
				}
			}
			_.__dashjs_factory_name = "TextSourceBuffer", t.default = u.default.getSingletonFactory(_), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/text/TextTracks.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js"));

			function u() {
				var e = this.context,
					t = (0, s.default)(e).getInstance(),
					r = (0, o.default)(e).getInstance().log,
					n = void 0,
					a = void 0,
					u = void 0,
					l = void 0,
					d = void 0,
					c = void 0,
					f = void 0,
					h = void 0,
					m = void 0,
					g = void 0,
					p = void 0,
					_ = void 0,
					v = void 0,
					y = void 0,
					E = void 0,
					T = void 0;

				function b(e) {
					var t = l[e].kind,
						r = void 0 !== l[e].label ? l[e].label : l[e].lang,
						n = l[e].lang,
						s = v ? document.createElement("track") : u.addTextTrack(t, r, n);
					return v && (s.kind = t, s.label = r, s.srclang = n), s
				}

				function j(e, t, r, n, s, i) {
					var a = 0,
						o = 0;
					e / t > r / n ? a = (o = t) / n * r : o = (a = e) / r * n;
					var u = 0,
						l = 0,
						d = 0,
						c = 0;
					return a / o > s ? (c = o, u = (e - (d = o / (1 / s))) / 2, l = 0) : (d = a, u = 0, l = (t - (c = a / s)) / 2), i ? {
						x: u + .1 * d,
						y: l + .1 * c,
						w: .8 * d,
						h: .8 * c
					} : {
						x: u,
						y: l,
						w: d,
						h: c
					}
				}

				function S() {
					var e = this.getCurrentTextTrack();
					if (e && "html" === e.renderingType) {
						var t = u.clientWidth / u.clientHeight,
							r = !1;
						e.isFromCEA608 && (t = 3.5 / 3, r = !0);
						var n = j.call(this, u.clientWidth, u.clientHeight, u.videoWidth, u.videoHeight, t, r),
							s = n.w,
							i = n.h;
						if (s != m || i != g) {
							f = n.x, h = n.y, m = s, g = i, p.style.left = f + "px", p.style.top = h + "px", p.style.width = m + "px", p.style.height = g + "px";
							for (var a = 0; e.activeCues && a < e.activeCues.length; ++a) {
								var o = e.activeCues[a];
								o.scaleCue(o)
							}
							y && document[y] || E ? p.style.zIndex = T : p.style.zIndex = null
						}
					}
				}

				function M(e, t) {
					return Math.round(.01 * e * t).toString() + "px"
				}

				function R(e) {
					var t = m,
						r = g;
					if (t * r != 0 && e.layout) {
						var n = e.layout,
							s = M(n.left, t),
							i = M(n.top, r),
							a = M(n.width, t),
							o = M(n.height, r);
						p.style.left = s, p.style.top = i, p.style.width = a, p.style.height = o;
						var u = p.firstChild;
						u && u.style && (u.style.left = "0px", u.style.top = "0px", u.style.width = a, u.style.height = o, y && document[y] || E ? u.style.zIndex = T : u.style.zIndex = null)
					}
				}

				function I(e) {
					var t, r, n, s, i, a = g,
						o = [m / e.cellResolution[0], a / e.cellResolution[1]];
					if (e.linePadding)
						for (t in e.linePadding)
							if (e.linePadding.hasOwnProperty(t)) {
								r = (e.linePadding[t] * o[0]).toString();
								for (var u = document.getElementsByClassName("spanPadding"), l = 0; l < u.length; l++) u[l].style.cssText = u[l].style.cssText.replace(/(padding-left\s*:\s*)[\d.,]+(?=\s*px)/gi, "$1" + r), u[l].style.cssText = u[l].style.cssText.replace(/(padding-right\s*:\s*)[\d.,]+(?=\s*px)/gi, "$1" + r)
							} if (e.fontSize)
						for (t in e.fontSize)
							if (e.fontSize.hasOwnProperty(t)) {
								"%" === e.fontSize[t][0] ? n = e.fontSize[t][1] / 100 : "c" === e.fontSize[t][0] && (n = e.fontSize[t][1]), r = (n * o[1]).toString(), i = "defaultFontSize" !== t ? document.getElementsByClassName(t) : document.getElementsByClassName("paragraph");
								for (var d = 0; d < i.length; d++) i[d].style.cssText = i[d].style.cssText.replace(/(font-size\s*:\s*)[\d.,]+(?=\s*px)/gi, "$1" + r)
							} if (e.lineHeight)
						for (t in e.lineHeight)
							if (e.lineHeight.hasOwnProperty(t)) {
								"%" === e.lineHeight[t][0] ? s = e.lineHeight[t][1] / 100 : "c" === e.fontSize[t][0] && (s = e.lineHeight[t][1]), r = (s * o[1]).toString(), i = document.getElementsByClassName(t);
								for (var c = 0; c < i.length; c++) i[c].style.cssText = i[c].style.cssText.replace(/(line-height\s*:\s*)[\d.,]+(?=\s*px)/gi, "$1" + r)
							}
				}

				function C(e) {
					(c = e, O.call(this), e >= 0) ? "html" === u.textTracks[e].renderingType ? P.call(this) : w.call(this): w.call(this)
				}

				function A(e) {
					return u.textTracks[e]
				}

				function D(e) {
					if (e.cues) {
						for (var t = e.cues, r = t.length - 1; r >= 0; r--) e.removeCue(t[r]);
						e.mode = "disabled"
					}
				}

				function P() {
					if (v) {
						var e = document.getElementById("native-cue-style");
						if (!e) {
							(e = document.createElement("style")).id = "native-cue-style", document.head.appendChild(e);
							var t = e.sheet;
							u.id ? t.insertRule("#" + u.id + "::cue {background: transparent}", 0) : 0 !== u.classList.length ? t.insertRule("." + u.className + "::cue {background: transparent}", 0) : t.insertRule("video::cue {background: transparent}", 0)
						}
					}
				}

				function w() {
					if (v) {
						var e = document.getElementById("native-cue-style");
						e && document.head.removeChild(e)
					}
				}

				function O() {
					if (p)
						for (; p.firstChild;) p.removeChild(p.firstChild)
				}
				return {
					initialize: function() {
						"undefined" != typeof window && "undefined" != typeof navigator && (n = window.VTTCue || window.TextTrackCue, l = [], d = [], c = -1, f = 0, h = 0, m = 0, g = 0, p = null, _ = null, E = !1, T = 2147483647, v = !!navigator.userAgent.match(/Chrome/) && !navigator.userAgent.match(/Edge/), void 0 !== document.fullscreenElement ? y = "fullscreenElement" : void 0 !== document.webkitIsFullScreen ? y = "webkitIsFullScreen" : document.msFullscreenElement ? y = "msFullscreenElement" : document.mozFullScreen && (y = "mozFullScreen"))
					},
					displayCConTop: function(e) {
						E = e, p && !document[y] && (p.style.zIndex = e ? T : null)
					},
					addTextTrack: function(e, n) {
						if (l.length !== n) {
							if (l.push(e), void 0 === u && (u = e.video), l.length === n) {
								l.sort((function(e, t) {
									return e.index - t.index
								})), p = a.getTTMLRenderingDiv();
								for (var s = -1, o = 0; o < l.length; o++) {
									var f = b.call(this, o);
									d.push(f), l[o].defaultTrack && (f.default = !0, s = o), v && u.appendChild(f);
									var h = u.textTracks[o];
									h.nonAddedCues = [], p && (l[o].isTTML || l[o].isEmbedded) ? h.renderingType = "html" : h.renderingType = "default", this.addCaptions(o, 0, l[o].captionData), t.trigger(i.default.TEXT_TRACK_ADDED)
								}
								if (C.call(this, s), s >= 0) {
									for (var m = 0; m < u.textTracks.length; m++) u.textTracks[m].mode = m === s ? "showing" : "hidden";
									this.addCaptions(s, 0, null)
								}
								t.trigger(i.default.TEXT_TRACKS_ADDED, {
									index: c,
									tracks: l
								})
							}
						} else r("Trying to add too many tracks.")
					},
					addCaptions: function(e, t, s) {
						var i = e >= 0 ? u.textTracks[e] : null,
							a = this;
						if (i)
							if ("showing" === i.mode) {
								if (s || (s = i.nonAddedCues, i.nonAddedCues = []), s && 0 !== s.length)
									for (var o in s) {
										var l, d = s[o];
										i.cellResolution = d.cellResolution, i.isFromCEA608 = d.isFromCEA608, _ || "html" !== d.type && "image" !== d.type || (_ = setInterval(S.bind(this), 500)), "image" === d.type ? ((l = new n(d.start - t, d.end - t, "")).image = d.data, l.id = d.id, l.size = 0, l.type = "image", l.layout = d.layout, l.scaleCue = R.bind(a), l.onenter = function() {
											if (p && "showing" === i.mode) {
												var e = new Image;
												e.id = "ttmlImage_" + this.id, e.src = this.image, e.style.cssText = "pointer-events: none; display: block; visibility: visible !important; position: relative !important;", p.appendChild(e), R.call(a, this)
											}
										}, l.onexit = function() {
											if (p)
												for (var e = p.childNodes, t = 0; t < e.length; t++) e[t].id === "ttmlImage_" + this.id && p.removeChild(e[t])
										}) : "html" === d.type ? ((l = new n(d.start - t, d.end - t, "")).cueHTMLElement = d.cueHTMLElement, l.regions = d.regions, l.regionID = d.regionID, l.cueID = d.cueID, l.videoWidth = d.videoWidth, l.videoHeight = d.videoHeight, l.cellResolution = d.cellResolution, l.fontSize = d.fontSize, l.lineHeight = d.lineHeight, l.linePadding = d.linePadding, l.scaleCue = I.bind(a), p.style.left = f + "px", p.style.top = h + "px", p.style.width = m + "px", p.style.height = g + "px", l.onenter = function() {
											"showing" === i.mode && (r("Cue " + this.startTime + "-" + this.endTime + " : " + this.cueHTMLElement.id + " : " + this.cueHTMLElement.innerText), p.appendChild(this.cueHTMLElement), I.call(a, this))
										}, l.onexit = function() {
											for (var e = p.childNodes, t = 0; t < e.length; ++t) e[t].id === this.cueID && p.removeChild(e[t])
										}) : (l = new n(d.start - t, d.end - t, d.data), d.styles && (void 0 !== d.styles.align && "align" in l && (l.align = d.styles.align), void 0 !== d.styles.line && "line" in l && (l.line = d.styles.line), void 0 !== d.styles.position && "position" in l && (l.position = d.styles.position), void 0 !== d.styles.size && "size" in l && (l.size = d.styles.size))), i.addCue(l)
									}
							} else s && s.length > 0 && (i.nonAddedCues = i.nonAddedCues.concat(s))
					},
					getTextTrack: A,
					getCurrentTextTrack: function() {
						return c >= 0 ? u.textTracks[c] : null
					},
					getCurrentTrackIdx: function() {
						return c
					},
					setCurrentTrackIdx: C,
					getTrackIdxForId: function(e) {
						for (var t = -1, r = 0; r < u.textTracks.length; r++)
							if (u.textTracks[r].label === e) {
								t = r;
								break
							} return t
					},
					deleteTrackCues: D,
					deleteAllTextTracks: function() {
						for (var e = d.length, t = 0; t < e; t++)
							if (v) u.removeChild(d[t]);
							else {
								var r = A.call(this, t);
								r.nonAddedCues = [], D.call(this, r)
							} d = [], l = [], _ && (clearInterval(_), _ = null), O.call(this)
					},
					deleteTextTrack: function(e) {
						u.removeChild(d[e]), d.splice(e, 1)
					},
					setConfig: function(e) {
						e && e.videoModel && (a = e.videoModel)
					}
				}
			}
			u.__dashjs_factory_name = "TextTracks", t.default = a.default.getSingletonFactory(u), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/BaseURLSelector.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/dash/models/DashManifestModel.js")),
				o = n(r("./node_modules/dashjs/build/es5/src/streaming/controllers/BlacklistController.js")),
				u = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/baseUrlResolution/DVBSelector.js")),
				l = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/baseUrlResolution/BasicSelector.js")),
				d = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				c = 1,
				f = "Failed to resolve a valid URL";

			function h() {
				var e, t = this.context,
					r = (0, s.default)(t).getInstance(),
					n = (0, a.default)(t).getInstance(),
					d = void 0,
					h = void 0,
					m = void 0,
					g = void 0;
				return e = {
					chooseSelectorFromManifest: function(e) {
						g = n.getIsDVB(e) ? m : h
					},
					select: function(e) {
						var t = e.baseUrls,
							n = e.selectedIdx;
						if (!isNaN(n)) return t[n];
						var s = g.select(t);
						if (s) return e.selectedIdx = t.indexOf(s), s;
						r.trigger(i.default.URL_RESOLUTION_FAILED, {
							error: new Error(c, f)
						})
					},
					reset: function() {
						d.reset()
					},
					setConfig: function(e) {
						e.selector && (g = e.selector)
					}
				}, d = (0, o.default)(t).create({
					updateEventName: i.default.SERVICE_LOCATION_BLACKLIST_CHANGED,
					loadFailedEventName: i.default.FRAGMENT_LOADING_COMPLETED
				}), h = (0, l.default)(t).create({
					blacklistController: d
				}), m = (0, u.default)(t).create({
					blacklistController: d
				}), g = h, e
			}
			h.__dashjs_factory_name = "BaseURLSelector";
			var m = d.default.getClassFactory(h);
			m.URL_RESOLUTION_FAILED_GENERIC_ERROR_CODE = c, m.URL_RESOLUTION_FAILED_GENERIC_ERROR_MESSAGE = f, t.default = m, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/BoxParser.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/utils/IsoFile.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				a = n(r("./node_modules/codem-isoboxer/dist/iso_boxer.js"));

			function o() {
				var e = this.context;
				return {
					parse: function(t) {
						if (!t) return null;
						void 0 === t.fileStart && (t.fileStart = 0);
						var r = a.default.parseBuffer(t),
							n = (0, s.default)(e).create();
						return n.setData(r), n
					}
				}
			}
			o.__dashjs_factory_name = "BoxParser", t.default = i.default.getSingletonFactory(o), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/Capabilities.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				};

			function a() {
				var e, t = void 0;
				return e = {
					supportsMediaSource: function() {
						var e = "WebKitMediaSource" in window,
							t = "MediaSource" in window;
						return e || t
					},
					supportsEncryptedMedia: function() {
						return t
					},
					supportsCodec: function(e, t) {
						var r = e.canPlayType(t);
						return "probably" === r || "maybe" === r
					},
					setEncryptedMediaSupported: function(e) {
						t = e
					}
				}, t = !1, e
			}
			a.__dashjs_factory_name = "Capabilities", t.default = i.default.getSingletonFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/CustomTimeRanges.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				};

			function a() {
				return {
					customTimeRangeArray: [],
					length: 0,
					add: function(e, t) {
						var r = 0;
						for (r = 0; r < this.customTimeRangeArray.length && e > this.customTimeRangeArray[r].start; r++);
						for (this.customTimeRangeArray.splice(r, 0, {
								start: e,
								end: t
							}), r = 0; r < this.customTimeRangeArray.length - 1; r++) this.mergeRanges(r, r + 1) && r--;
						this.length = this.customTimeRangeArray.length
					},
					clear: function() {
						this.customTimeRangeArray = [], this.length = 0
					},
					remove: function(e, t) {
						for (var r = 0; r < this.customTimeRangeArray.length; r++)
							if (e <= this.customTimeRangeArray[r].start && t >= this.customTimeRangeArray[r].end) this.customTimeRangeArray.splice(r, 1), r--;
							else {
								if (e > this.customTimeRangeArray[r].start && t < this.customTimeRangeArray[r].end) {
									this.customTimeRangeArray.splice(r + 1, 0, {
										start: t,
										end: this.customTimeRangeArray[r].end
									}), this.customTimeRangeArray[r].end = e;
									break
								}
								e > this.customTimeRangeArray[r].start && e < this.customTimeRangeArray[r].end ? this.customTimeRangeArray[r].end = e : t > this.customTimeRangeArray[r].start && t < this.customTimeRangeArray[r].end && (this.customTimeRangeArray[r].start = t)
							} this.length = this.customTimeRangeArray.length
					},
					mergeRanges: function(e, t) {
						var r = this.customTimeRangeArray[e],
							n = this.customTimeRangeArray[t];
						return r.start <= n.start && n.start <= r.end && r.end <= n.end ? (r.end = n.end, this.customTimeRangeArray.splice(t, 1), !0) : n.start <= r.start && r.start <= n.end && n.end <= r.end ? (r.start = n.start, this.customTimeRangeArray.splice(t, 1), !0) : n.start <= r.start && r.start <= n.end && r.end <= n.end ? (this.customTimeRangeArray.splice(e, 1), !0) : r.start <= n.start && n.start <= r.end && n.end <= r.end && (this.customTimeRangeArray.splice(t, 1), !0)
					},
					start: function(e) {
						return this.customTimeRangeArray[e].start
					},
					end: function(e) {
						return this.customTimeRangeArray[e].end
					}
				}
			}
			a.__dashjs_factory_name = "CustomTimeRanges", t.default = i.default.getClassFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/DOMStorage.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/models/MediaPlayerModel.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				o = [{
					oldKey: "dashjs_vbitrate",
					newKey: "dashjs_video_bitrate"
				}, {
					oldKey: "dashjs_abitrate",
					newKey: "dashjs_audio_bitrate"
				}, {
					oldKey: "dashjs_vsettings",
					newKey: "dashjs_video_settings"
				}, {
					oldKey: "dashjs_asettings",
					newKey: "dashjs_audio_settings"
				}],
				u = "dashjs_?_bitrate",
				l = "dashjs_?_settings",
				d = "localStorage",
				c = "sessionStorage";

			function f() {
				var e, t = this.context,
					r = (0, a.default)(t).getInstance().log,
					n = void 0,
					s = void 0;

				function f(e) {
					if (void 0 !== n) return n;
					n = !1;
					var t;
					try {
						"undefined" != typeof window && (t = window[e])
					} catch (s) {
						return r("Warning: DOMStorage access denied: " + s.message), n
					}
					if (!t || e !== d && e !== c) return n;
					try {
						t.setItem("1", "1"), t.removeItem("1"), n = !0
					} catch (s) {
						r("Warning: DOMStorage is supported, but cannot be used: " + s.message)
					}
					return n
				}

				function h() {
					return 6e5 * Math.round((new Date).getTime() / 6e5)
				}

				function m(e, t) {
					return f(e) && s["get" + t + "CachingInfo"]().enabled
				}
				return e = {
					getSavedBitrateSettings: function(e) {
						var t = NaN;
						if (m(d, "LastBitrate")) {
							var n = u.replace(/\?/, e),
								i = JSON.parse(localStorage.getItem(n)) || {},
								a = (new Date).getTime() - parseInt(i.timestamp, 10) >= s.getLastBitrateCachingInfo().ttl || !1,
								o = parseInt(i.bitrate, 10);
							isNaN(o) || a ? a && localStorage.removeItem(n) : (t = o, r("Last saved bitrate for " + e + " was " + o))
						}
						return t
					},
					setSavedBitrateSettings: function(e, t) {
						if (m(d, "LastBitrate") && t) {
							var n = u.replace(/\?/, e);
							try {
								localStorage.setItem(n, JSON.stringify({
									bitrate: t / 1e3,
									timestamp: h()
								}))
							} catch (s) {
								r(s.message)
							}
						}
					},
					getSavedMediaSettings: function(e) {
						if (!m(d, "LastMediaSettings")) return null;
						var t = l.replace(/\?/, e),
							r = JSON.parse(localStorage.getItem(t)) || {},
							n = (new Date).getTime() - parseInt(r.timestamp, 10) >= s.getLastMediaSettingsCachingInfo().ttl || !1,
							i = r.settings;
						return n && (localStorage.removeItem(t), i = null), i
					},
					setSavedMediaSettings: function(e, t) {
						if (m(d, "LastMediaSettings")) {
							var n = l.replace(/\?/, e);
							try {
								localStorage.setItem(n, JSON.stringify({
									settings: t,
									timestamp: h()
								}))
							} catch (s) {
								r(s.message)
							}
						}
					},
					isSupported: f
				}, s = (0, i.default)(t).getInstance(), f(d) && o.forEach((function(e) {
					var t = localStorage.getItem(e.oldKey);
					if (t) {
						localStorage.removeItem(e.oldKey);
						try {
							localStorage.setItem(e.newKey, t)
						} catch (n) {
							r(n.message)
						}
					}
				})), e
			}
			f.__dashjs_factory_name = "DOMStorage";
			var h = s.default.getSingletonFactory(f);
			t.default = h, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/EBMLParser.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/Error.js"));

			function a(e) {
				var t = void 0,
					r = new DataView(e.data),
					n = 0;

				function s(e, t) {
					var s = !0,
						a = 0;
					if (void 0 === t && (t = !1), e.tag > 16777215 ? (r.getUint32(n) !== e.tag && (s = !1), a = 4) : e.tag > 65535 ? (256 * r.getUint16(n) + r.getUint8(n + 2) !== e.tag && (s = !1), a = 3) : e.tag > 255 ? (r.getUint16(n) !== e.tag && (s = !1), a = 2) : (r.getUint8(n) !== e.tag && (s = !1), a = 1), !s && e.required && !t) throw new i.default("required tag not found");
					return s && (n += a), s
				}

				function a(e) {
					var t = 1,
						s = 128,
						i = -1,
						a = 0,
						o = r.getUint8(n),
						u = void 0;
					for (u = 0; u < 8; u += 1) {
						if ((o & s) === s) {
							a = void 0 === e ? o & ~s : o, i = u;
							break
						}
						s >>= 1
					}
					for (u = 0; u < i; u += 1, t += 1) a = a << 8 | 255 & r.getUint8(n + t);
					return n += t, a
				}
				return t = {
					getPos: function() {
						return n
					},
					setPos: function(e) {
						n = e
					},
					consumeTag: s,
					consumeTagAndSize: function(e, t) {
						var r = s(e, t);
						return r && a(), r
					},
					parseTag: function(e) {
						var r;
						return s(e), r = a(), t[e.parse](r)
					},
					skipOverElement: function(e, t) {
						var r = s(e, t),
							i = void 0;
						return r && (i = a(), n += i), r
					},
					getMatroskaCodedNum: a,
					getMatroskaFloat: function(e) {
						var t = void 0;
						switch (e) {
							case 4:
								t = r.getFloat32(n), n += 4;
								break;
							case 8:
								t = r.getFloat64(n), n += 8
						}
						return t
					},
					getMatroskaUint: function(e) {
						var t = 0,
							s = void 0;
						for (s = 0; s < e; s += 1) t <<= 8, t |= 255 & r.getUint8(n + s);
						return n += e, t
					},
					moreData: function() {
						return n < r.byteLength
					}
				}
			}
			a.__dashjs_factory_name = "EBMLParser", t.default = s.default.getClassFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/ErrorHandler.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function o() {
				var e = this.context,
					t = (0, s.default)(e).getInstance();
				return {
					capabilityError: function(e) {
						t.trigger(i.default.ERROR, {
							error: "capability",
							event: e
						})
					},
					downloadError: function(e, r, n) {
						t.trigger(i.default.ERROR, {
							error: "download",
							event: {
								id: e,
								url: r,
								request: n
							}
						})
					},
					manifestError: function(e, r, n, s) {
						t.trigger(i.default.ERROR, {
							error: "manifestError",
							event: {
								message: e,
								id: r,
								manifest: n,
								event: s
							}
						})
					},
					timedTextError: function(e, r, n) {
						t.trigger(i.default.ERROR, {
							error: "cc",
							event: {
								message: e,
								id: r,
								cc: n
							}
						})
					},
					mediaSourceError: function(e) {
						t.trigger(i.default.ERROR, {
							error: "mediasource",
							event: e
						})
					},
					mediaKeySessionError: function(e) {
						t.trigger(i.default.ERROR, {
							error: "key_session",
							event: e
						})
					},
					mediaKeyMessageError: function(e) {
						t.trigger(i.default.ERROR, {
							error: "key_message",
							event: e
						})
					}
				}
			}
			o.__dashjs_factory_name = "ErrorHandler";
			var u = a.default.getSingletonFactory(o);
			u.CAPABILITY_ERROR_MEDIASOURCE = "mediasource", u.CAPABILITY_ERROR_MEDIAKEYS = "mediakeys", u.DOWNLOAD_ERROR_ID_MANIFEST = "manifest", u.DOWNLOAD_ERROR_ID_SIDX = "SIDX", u.DOWNLOAD_ERROR_ID_CONTENT = "content", u.DOWNLOAD_ERROR_ID_INITIALIZATION = "initialization", u.DOWNLOAD_ERROR_ID_XLINK = "xlink", u.MANIFEST_ERROR_ID_CODEC = "codec", u.MANIFEST_ERROR_ID_PARSE = "parse", u.MANIFEST_ERROR_ID_NOSTREAMS = "nostreams", u.TIMED_TEXT_ERROR_ID_PARSE = "parse", t.default = u, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/InitCache.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				};

			function a() {
				var e = {};
				return {
					save: function(t) {
						var r = t.streamId,
							n = t.representationId;
						e[r] = e[r] || {}, e[r][n] = t
					},
					extract: function(t, r) {
						return e && e[t] && e[t][r] ? e[t][r] : null
					},
					reset: function() {
						e = {}
					}
				}
			}
			a.__dashjs_factory_name = "InitCache", t.default = i.default.getSingletonFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/IsoFile.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/streaming/vo/IsoBox.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function a() {
				var e = void 0,
					t = void 0,
					r = void 0,
					n = void 0,
					i = void 0,
					a = void 0,
					o = void 0,
					u = void 0,
					l = void 0,
					d = void 0,
					c = void 0,
					f = void 0;

				function h(t) {
					for (var r, n = e.fetchAll(t), s = [], i = 0, a = n.length; i < a; i++)(r = g(n[i])) && s.push(r);
					return s
				}

				function m(e, t, r) {
					for (var n in r) t[n] = e[r[n]]
				}

				function g(e) {
					if (!e) return null;
					var h, g, p = new s.default;
					switch (m(e, p, t), e.hasOwnProperty("_incomplete") && (p.isComplete = !e._incomplete), p.type) {
						case "sidx":
							if (m(e, p, r), p.references)
								for (h = 0, g = p.references.length; h < g; h++) m(e.references[h], p.references[h], n);
							break;
						case "emsg":
							m(e, p, i);
							break;
						case "mdhd":
							m(e, p, a);
							break;
						case "mfhd":
							m(e, p, o);
							break;
						case "subs":
							m(e, p, u);
							break;
						case "tfhd":
							m(e, p, l);
							break;
						case "tfdt":
							m(e, p, d);
							break;
						case "trun":
							if (m(e, p, c), p.samples)
								for (h = 0, g = p.samples.length; h < g; h++) m(e.samples[h], p.samples[h], f)
					}
					return p
				}
				return t = {
					offset: "_offset",
					size: "size",
					type: "type"
				}, r = {
					references: "references",
					timescale: "timescale",
					earliest_presentation_time: "earliest_presentation_time",
					first_offset: "first_offset"
				}, n = {
					reference_type: "reference_type",
					referenced_size: "referenced_size",
					subsegment_duration: "subsegment_duration"
				}, i = {
					id: "id",
					value: "value",
					timescale: "timescale",
					scheme_id_uri: "scheme_id_uri",
					presentation_time_delta: "presentation_time_delta",
					event_duration: "event_duration",
					message_data: "message_data"
				}, a = {
					timescale: "timescale"
				}, o = {
					sequence_number: "sequence_number"
				}, u = {
					entry_count: "entry_count",
					entries: "entries"
				}, l = {
					base_data_offset: "base_data_offset",
					sample_description_index: "sample_description_index",
					default_sample_duration: "default_sample_duration",
					default_sample_size: "default_sample_size",
					default_sample_flags: "default_sample_flags",
					flags: "flags"
				}, d = {
					version: "version",
					baseMediaDecodeTime: "baseMediaDecodeTime",
					flags: "flags"
				}, c = {
					sample_count: "sample_count",
					first_sample_flags: "first_sample_flags",
					data_offset: "data_offset",
					flags: "flags",
					samples: "samples"
				}, f = {
					sample_size: "sample_size",
					sample_duration: "sample_duration",
					sample_composition_time_offset: "sample_composition_time_offset"
				}, {
					getBox: function(t) {
						return t && e && e.boxes && 0 !== e.boxes.length ? g(e.fetch(t)) : null
					},
					getBoxes: h,
					setData: function(t) {
						e = t
					},
					getLastBox: function() {
						if (!e || !e.boxes || !e.boxes.length) return null;
						var t = h(e.boxes[e.boxes.length - 1].type);
						return t[t.length - 1]
					},
					getOffset: function() {
						return e._cursor.offset
					}
				}
			}
			a.__dashjs_factory_name = "IsoFile", t.default = i.default.getClassFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/LiveEdgeFinder.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				};

			function a() {
				var e = void 0,
					t = void 0;
				return {
					initialize: function(r, n) {
						e = r, t = n
					},
					getLiveEdge: function() {
						var r = t.getCurrentRepresentationInfo(),
							n = r.DVRWindow.end;
						return r.useCalculatedLiveEdgeTime && (n = e.getExpectedLiveEdge(), e.setClientTimeOffset(n - r.DVRWindow.end)), n
					},
					reset: function() {
						e = null, t = null
					}
				}
			}
			a.__dashjs_factory_name = "LiveEdgeFinder";
			var o = i.default.getSingletonFactory(a);
			t.default = o, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/ObjectUtils.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				};

			function a() {
				return {
					areSimpleEquivalent: function(e, t) {
						return JSON.stringify(e) === JSON.stringify(t)
					}
				}
			}
			a.__dashjs_factory_name = "ObjectUtils", t.default = i.default.getSingletonFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/RequestModifier.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				};

			function a() {
				return {
					modifyRequestURL: function(e) {
						return e
					},
					modifyRequestHeader: function(e) {
						return e
					}
				}
			}
			a.__dashjs_factory_name = "RequestModifier", t.default = i.default.getSingletonFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/TTMLParser.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = n(r("./node_modules/dashjs/build/es5/externals/xml2json.js")),
				a = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				o = 3600,
				u = 60;

			function l() {
				var e, t = this.context,
					r = (0, a.default)(t).getInstance().log,
					n = void 0,
					s = void 0,
					l = void 0,
					d = void 0,
					c = void 0,
					f = void 0,
					h = void 0,
					m = void 0,
					g = void 0,
					p = void 0,
					_ = void 0,
					v = void 0,
					y = void 0,
					E = void 0,
					T = void 0,
					b = void 0,
					j = void 0,
					S = void 0,
					M = 0;

				function R(e) {
					return e.hasOwnProperty("begin") && e.hasOwnProperty("end") ? [P(e.begin), P(e.end)] : null
				}

				function I() {
					var e = "cue_TTML_" + M;
					return M++, e
				}

				function C(e, t, r) {
					var n = [],
						s = [],
						i = [];

					function a(e, t) {
						if (e.hasOwnProperty(t)) {
							var r = e[t];
							s.indexOf(r) < 0 && s.push(r)
						}
					}
					for (var o = 0; o < e.length; o++) {
						var u = e[o];
						a(u, "begin"), a(u, "end")
					}
					if (0 === s.length) return i;
					if (void 0 !== t && void 0 !== r) {
						for (o = 0; o < s.length; o++) {
							var l = P(s[o]);
							t < l && l < r && n.push(l)
						}
						n.push(t), n.push(r)
					} else
						for (o = 0; o < s.length; o++) n.push(P(s[o]));
					n.sort((function(e, t) {
						return e - t
					}));
					for (o = 0; o < n.length - 1; o++) i.push([n[o], n[o + 1]]);
					return i
				}

				function A(e, t, n) {
					var s = P(e.begin),
						i = P(e.end);
					return s = function(e, t) {
						return void 0 !== t && e < t && (e = t), e
					}(s, t), i = function(e, t) {
						return void 0 !== t && e > t && (e = t), e
					}(i, n), void 0 !== t && void 0 !== n && (i < t || s > n) ? (r("TTML: Cue " + s + "-" + i + " outside interval " + t + "-" + n), null) : [s, i]
				}

				function D(e, t) {
					var r = !0;
					if (e.hasOwnProperty("span")) {
						var n = R(e.span);
						null !== n && (r = n[0] < t[1] && n[1] > t[0])
					}
					return r
				}

				function P(e) {
					var t, r, i;
					if (!n.test(e)) return NaN;
					if (t = e.split(":"), r = parseFloat(t[0]) * o + parseFloat(t[1]) * u + parseFloat(t[2]), t[3]) {
						if (!(i = s.tt.frameRate) || isNaN(i)) return NaN;
						r += parseFloat(t[3]) / i
					}
					return r
				}

				function w(e, t) {
					var r = Object.keys(e).filter((function(r) {
						return ("xmlns" === r.split(":")[0] || "xmlns" === r.split(":")[1]) && e[r] === t
					})).map((function(e) {
						return e.split(":")[2] || e.split(":")[1]
					}));
					return 1 != r.length ? null : r[0]
				}

				function O(e) {
					return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
				}

				function x(e) {
					var t = e.slice(1).match(/.{2}/g),
						r = parseFloat(parseInt(parseInt(t[3], 16) / 255 * 1e3, 10) / 1e3);
					return "rgba(" + t.slice(0, 3).map((function(e) {
						return parseInt(e, 16)
					})).join(",") + "," + r + ");"
				}

				function F(e) {
					var t, r;
					return t = e.replace(/^(rgb|rgba)\(/, "").replace(/\)$/, "").replace(/\s/g, "").split(","), r = parseInt(t[t.length - 1], 10) / 255, "rgba(" + t[0] + "," + t[1] + "," + t[2] + "," + r + ");"
				}

				function N(e, t) {
					for (var r = 0; r < t.length; r++)
						if (t[r].indexOf(e) > -1) return !0;
					return !1
				}

				function L(e, t) {
					for (var r = 0; r < t.length; r++)
						if (t[r].indexOf(e) > -1) return t[r];
					return null
				}

				function B(e, t) {
					t.splice(t.indexOf(L(e, t)), 1)
				}

				function k(e, t) {
					for (var r = 0; r < e.length; r++)
						for (var n = 0; n < t.length; n++) e[r] && e[r].split(":")[0].indexOf(t[n].split(":")[0]) > -1 && e.splice(r, 1);
					return e.concat(t)
				}

				function U(e) {
					var t = new Array(2),
						r = -1 === e.indexOf(":") ? 0 : e.indexOf(":"),
						n = void 0;
					return -1 === e.indexOf("%") ? -1 === e.indexOf("c") ? -1 === e.indexOf("p") ? t[0] = t[1] = null : (t[0] = "p", n = e.indexOf("p")) : (t[0] = "c", n = e.indexOf("c")) : (t[0] = "%", n = e.indexOf("%")), t[1] = e.slice(r, n), t
				}

				function K(e, t, r) {
					var n = [];
					return e.match(/\S+/g).forEach((function(e) {
						var i = function(e, t) {
							for (var r = 0; r < e.length; r++) {
								var n = e[r];
								if (n["xml:id"] === t || n.id === t) return n
							}
							return null
						}(l, e);
						if (i) {
							var a = function(e, t, r) {
								var n, i, a, o = [];
								for (var u in e)
									if (e.hasOwnProperty(u)) {
										var l = u.replace("ebutts:", "");
										e[l = O(l = (l = l.replace("xml:", "")).replace("tts:", ""))] = e[u], delete e[u]
									} if ("line-padding" in e) {
									var d = parseFloat(e["line-padding"].slice(e["line-padding"].indexOf(":") + 1, e["line-padding"].indexOf("c")));
									"id" in e && (h[e.id] = d);
									var m = d * t[0] + "px;";
									o.push("padding-left:" + m), o.push("padding-right:" + m)
								}
								if ("font-size" in e) {
									var g = U(e["font-size"]),
										T = parseFloat(g[1]);
									"id" in e && (c[e.id] = g), "%" === g[0] ? n = T / 100 * t[1] + "px;" : "c" === g[0] && (n = T * t[1] + "px;"), o.push("font-size:" + n)
								}
								if ("line-height" in e)
									if ("normal" === e["line-height"]) o.push("line-height: normal;");
									else {
										var b = U(e["line-height"]),
											j = parseFloat(b[1]);
										"id" in e && (f[e.id] = b), "%" === b[0] ? i = j / 100 * t[1] + "px;" : "c" === b[0] && (i = j * t[1] + "px;"), o.push("line-height:" + i)
									} return "font-family" in e && (e["font-family"] in p ? o.push(p[e["font-family"]]) : o.push("font-family:" + e["font-family"] + ";")), "text-align" in e && e["text-align"] in _ && (o.push(_[e["text-align"]][0]), o.push(_[e["text-align"]][1])), "multi-row-align" in e && (N("text-align", o) && "auto" != e["multi-row-align"] && B("text-align", o), e["multi-row-align"] in v && o.push(v[e["multi-row-align"]])), "background-color" in e && (a = e["background-color"].indexOf("#") > -1 && e["background-color"].length - 1 == 8 ? x(e["background-color"]) : e["background-color"].indexOf("rgba") > -1 ? F(e["background-color"]) : e["background-color"] + ";", o.push("background-color: " + a)), "color" in e && (a = e.color.indexOf("#") > -1 && e.color.length - 1 == 8 ? x(e.color) : e.color.indexOf("rgba") > -1 ? F(e.color) : e.color + ";", o.push("color: " + a)), "wrap-option" in e && (e["wrap-option"] in y ? o.push(y[e["wrap-option"]]) : o.push("white-space:" + e["wrap-option"])), "unicode-bidi" in e && (e["unicode-bidi"] in E ? o.push(E[e["unicode-bidi"]]) : o.push("unicode-bidi:" + e["unicode-bidi"])), "font-style" in e && o.push("font-style:" + e["font-style"] + ";"), "font-weight" in e && o.push("font-weight:" + e["font-weight"] + ";"), "direction" in e && o.push("direction:" + e.direction + ";"), "text-decoration" in e && o.push("text-decoration:" + e["text-decoration"] + ";"), r && (o = o.concat(q(e, t))), s.tt.hasOwnProperty("xml:space") && "preserve" === s.tt["xml:space"] && o.push("white-space: pre;"), o
							}(JSON.parse(JSON.stringify(i)), t, r);
							n = n.concat(a)
						}
					})), n
				}

				function H(e, t) {
					var n = /([\d\.]+)(%|px)\s+([\d\.]+)(%|px)/;
					if ("tts:extent" in e && "tts:origin" in e) {
						var s = n.exec(e["tts:extent"]),
							i = n.exec(e["tts:origin"]);
						if (null === s || null === i) return r("Bad extent or origin: " + e["tts:extent"] + " " + e["tts:origin"]), null;
						var a = parseFloat(s[1]),
							o = parseFloat(s[3]),
							u = parseFloat(i[1]),
							l = parseFloat(i[3]);
						if (t) {
							var d = n.exec(t);
							if (null === d || "px" !== d[2] || "px" !== d[4]) return r("Bad tt.extent: " + t), null;
							var c = parseFloat(d[1]),
								f = parseFloat(d[3]);
							"px" === s[2] && (a = a / c * 100), "px" === s[4] && (o = o / f * 100), "px" === i[2] && (u = u / c * 100), "px" === i[4] && (l = l / f * 100)
						}
						return {
							left: u,
							top: l,
							width: a,
							height: o
						}
					}
					return null
				}

				function q(e, t) {
					var r = [];
					for (var n in e) {
						var s = n.replace("tts:", "");
						e[s = O(s = s.replace("xml:", ""))] = e[n], s !== n && delete e[n]
					}
					if ("extent" in e) {
						var i = e.extent.split(/\s/);
						r.push("width: " + i[0] + ";"), r.push("height: " + i[1] + ";")
					}
					if ("origin" in e) {
						var a = e.origin.split(/\s/);
						r.push("left: " + a[0] + ";"), r.push("top: " + a[1] + ";")
					}
					if ("display-align" in e && r.push(T[e["display-align"]]), "writing-mode" in e && r.push(b[e["writing-mode"]]), "style" in e) {
						var o = K(e.style, t, !0);
						r = r.concat(o)
					}
					return "padding" in e && r.push("padding:" + e.padding + ";"), "overflow" in e && r.push("overflow:" + e.overflow + ";"), "show-background" in e && r.push("show-background:" + e["show-background"] + ";"), "id" in e && r.push("regionID:" + e.id + ";"), r
				}

				function Y(e, t) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r];
						if (n["xml:id"] === t || n.id === t) return n
					}
					return null
				}

				function z(e, t) {
					var r = [];
					return e.match(/\S+/g).forEach((function(e) {
						var n = Y(d, e);
						if (n) {
							var s = q(JSON.parse(JSON.stringify(n)), t);
							r = r.concat(s)
						}
					})), r
				}

				function V(e, t) {
					for (var r = L("padding-left", t), n = L("padding-right", t), s = r.concat(" " + n + " "), i = "", a = "", o = "", u = Array.prototype.slice.call(e.children), l = e.getElementsByClassName("lineBreak")[0], d = u.indexOf(l), c = []; - 1 != d;) c.push(d), d = u.indexOf(l, d + 1);
					var f = "<br>",
						h = '<span class="spanPadding" style="-webkit-box-decoration-break: clone; box-decoration-break: clone; ';
					if (c.length) c.forEach((function(e, t) {
						if (0 === t) {
							for (var r = "", n = 0; n < e; n++) i += u[n].outerHTML, 0 === n && (r = s.concat(u[n].style.cssText));
							i = h + r + '">' + i
						}
						for (var l = "", d = e + 1; d < u.length; d++) a += u[d].outerHTML, d === u.length - 1 && (l += s.concat(u[d].style.cssText));
						a = h + l + '">' + a, i && a && t === c.length - 1 ? o += i + "</span>" + f + a + "</span>" : i && a && t !== c.length - 1 ? o += i + "</span>" + f + a + "</span>" + f : i && !a ? o += i + "</span>" : !i && a && t === c.length - 1 ? o += a + "</span>" : !i && a && t !== c.length - 1 && (o += a + "</span>" + f)
					}));
					else {
						for (var m = "", g = 0; g < u.length; g++) m += u[g].style.cssText;
						o = h + s + m + '">' + e.innerHTML + "</span>"
					}
					return o
				}

				function G(e, t) {
					var r = document.createElement("div");
					return e.forEach((function(e) {
						if (!e.hasOwnProperty("metadata"))
							if (e.hasOwnProperty("span")) {
								var n = e.span.__children,
									s = document.createElement("span");
								if (e.span.hasOwnProperty("style")) {
									var i = K(e.span.style, t);
									s.className = "spanPadding " + e.span.style, s.style.cssText = i.join(" ")
								}
								n.forEach((function(e) {
									if (!n.hasOwnProperty("metadata"))
										if (e.hasOwnProperty("#text")) {
											var t = document.createTextNode(e["#text"]);
											s.appendChild(t)
										} else if ("br" in e) {
										s.hasChildNodes() && r.appendChild(s);
										var i = document.createElement("br");
										i.className = "lineBreak", r.appendChild(i);
										var a = document.createElement("span");
										a.className = s.className, a.style.cssText = s.style.cssText, s = a
									}
								})), r.appendChild(s)
							} else if (e.hasOwnProperty("br")) {
							var a = document.createElement("br");
							a.className = "lineBreak", r.appendChild(a)
						} else if (e.hasOwnProperty("#text")) {
							var o = document.createElement("span");
							o.textContent = e["#text"], r.appendChild(o)
						}
					})), r
				}

				function W(e, t, r) {
					var n, s, i = [],
						a = e.region,
						o = t.region;
					return o && (n = z(o, r)), a ? (s = i.concat(z(a, r)), i = n ? k(n, s) : s) : n && (i = n), X(i, m), i
				}

				function Q(e, t) {
					var r, n, i, a = [],
						o = e.style,
						u = s.tt.body.style,
						l = s.tt.body.div.style,
						d = "";
					return u && (r = K(u, t), d = "paragraph " + u), l && (n = K(l, t), r ? (n = k(r, n), d += " " + l) : d = "paragraph " + l), o ? (i = K(o, t), r && n ? (a = k(n, i), d += " " + o) : r ? (a = k(r, i), d += " " + o) : n ? (a = k(n, i), d += " " + o) : (a = i, d = "paragraph " + o)) : r && !n ? a = r : !r && n && (a = n), X(a, g), [a, d]
				}

				function X(e, t) {
					for (var r in t) t.hasOwnProperty(r) && (N(r, e) || e.push(r + ":" + t[r]))
				}
				return e = {
					parse: function(e, t, n, i) {
						var a, o, u = void 0,
							m = void 0,
							p = void 0,
							_ = "";
						if (!(s = S.xml_str2json(e))) throw new Error("TTML document could not be parsed");
						if (j.getTTMLRenderingDiv() && (m = "html"), !(u = s.tt)) throw new Error("TTML document lacks tt element");
						var v = w(u, "http://www.w3.org/ns/ttml");
						if (v && function e(t, r) {
								for (var n in t)
									if (t.hasOwnProperty(n)) {
										if (("object" == typeof t[n] || t[n] instanceof Object) && !Array.isArray(t[n])) e(t[n], r);
										else if (Array.isArray(t[n]))
											for (var s = 0; s < t[n].length; s++) e(t[n][s], r);
										var i = r + ":",
											a = n.indexOf(i);
										if (a >= 0) {
											var o = n.slice(a + i.length);
											t[o] = t[n], delete t[n]
										}
									}
							}(u, v), o = u["tts:extent"], !(a = u.head)) throw new Error("TTML document lacks head element");
						a.layout && (d = a.layout.region_asArray), a.styling && (l = a.styling.style_asArray);
						var y = {};
						if (i)
							for (p = 0; p < i.length; p++) {
								var E = "urn:mpeg:14496-30:subs:" + (p + 1).toString(),
									T = "data:image/png;base64," + btoa(i[p]);
								y[E] = T
							}
						if (a.metadata) {
							var b = a.metadata.image_asArray;
							if (b)
								for (p = 0; p < b.length; p++) {
									E = "#" + b[p]["xml:id"], T = "data:image/" + b[p].imagetype.toLowerCase() + ";base64," + b[p].__text;
									y[E] = T
								}
						}
						if (!u.body) throw new Error("TTML document lacks body element");
						var M = s.tt.hasOwnProperty("ttp:cellResolution") ? s.tt["ttp:cellResolution"].split(" ").map(parseFloat) : [32, 15],
							P = j.getElement().clientWidth,
							O = j.getElement().clientHeight,
							x = [P / M[0], O / M[1]];
						g["font-size"] = x[1] + "px;";
						var F = [];
						if (d)
							for (p = 0; p < d.length; p++) F.push(q(JSON.parse(JSON.stringify(d[p])), x));
						var k = w(s.tt, "http://www.w3.org/ns/ttml#parameter");
						u.hasOwnProperty(k + ":frameRate") && (u.frameRate = parseInt(u[k + ":frameRate"], 10));
						for (var U = [], K = u.body_asArray[0].__children, z = 0; z < K.length; z++) {
							var X, J = K[z].div;
							if (null === (X = R(J))) {
								var Z = J.p_asArray;
								if (null === X && (!Z || 0 === Z.length)) return r(_ = "TTML has div that contains no timing and no paragraphs."), U;
								for (var $ = 0; $ < Z.length; $++) {
									var ee = Z[$],
										te = ee.span_asArray,
										re = [];
									if (ee.hasOwnProperty("begin") && ee.hasOwnProperty("end")) {
										var ne = A(ee, t, n);
										null !== ne && re.push(ne)
									} else re = C(te, t, n);
									if (0 !== re.length)
										for (var se = ee.__children, ie = 0; ie < re.length; ie++) {
											for (var ae = re[ie], oe = [], ue = 0; ue < se.length; ue++) {
												var le = se[ue];
												D(le, ae) && oe.push(le)
											}
											if (0 !== oe.length)
												if ("html" === m) {
													f = {}, h = {}, c = {};
													var de = W(ee, J, x),
														ce = Q(ee, x),
														fe = ce[1];
													ce = ce[0];
													var he = document.createElement("div");
													he.className = fe;
													var me = G(oe, x);
													me.className = "cueDirUniWrapper", N("unicode-bidi", ce) && (me.style.cssText += L("unicode-bidi", ce), B("unicode-bidi", ce)), N("direction", ce) && (me.style.cssText += L("direction", ce), B("direction", ce)), N("padding-left", ce) && N("padding-right", ce) && (me.innerHTML = V(me, ce)), N("padding-left", ce) && N("padding-right", ce) && (B("padding-left", ce), B("padding-right", ce));
													var ge = "";
													if (N("regionID", de)) {
														var pe = L("regionID", de);
														ge = pe.slice(pe.indexOf(":") + 1, pe.length - 1)
													}
													ce && (he.style.cssText = ce.join(" ") + "display:flex;"), de && (de = de.join(" ")), he.appendChild(me);
													var _e = document.createElement("div");
													_e.appendChild(he), _e.id = I(), _e.style.cssText = "position: absolute; margin: 0; display: flex; box-sizing: border-box; pointer-events: none;" + de, 0 === Object.keys(c).length && (c.defaultFontSize = "100"), U.push({
														start: ae[0],
														end: ae[1],
														type: "html",
														cueHTMLElement: _e,
														regions: F,
														regionID: ge,
														cueID: _e.id,
														videoHeight: O,
														videoWidth: P,
														cellResolution: M,
														fontSize: c || {
															defaultFontSize: "100"
														},
														lineHeight: f,
														linePadding: h
													})
												} else {
													var ve = "",
														ye = oe;
													ye.length && ye.forEach((function(e) {
														if (e.hasOwnProperty("span")) {
															var t = e.span.__children;
															t.forEach((function(e) {
																t.hasOwnProperty("metadata") || (e.hasOwnProperty("#text") ? ve += e["#text"].replace(/[\r\n]+/gm, " ").trim() : "br" in e && (ve += "\n"))
															}))
														} else e.hasOwnProperty("br") ? ve += "\n" : ve += e["#text"].replace(/[\r\n]+/gm, " ").trim()
													})), U.push({
														start: ae[0],
														end: ae[1],
														data: ve,
														type: "text"
													})
												}
										} else _ = "TTML: Empty paragraph"
								}
							} else {
								var Ee = void 0;
								J.region && (Ee = H(Y(d, J.region), o)), Ee || (Ee = H(J, o));
								var Te = J["smpte:backgroundImage"];
								void 0 !== Te && void 0 !== y[Te] && U.push({
									start: X[0],
									end: X[1],
									id: I(),
									data: y[Te],
									type: "image",
									layout: Ee
								})
							}
						}
						if ("" !== _ && r(_), U.length > 0) return U;
						throw new Error(_)
					},
					setConfig: function(e) {
						e && e.videoModel && (j = e.videoModel)
					}
				}, n = /^([0-9][0-9]+):([0-5][0-9]):([0-5][0-9])|(60)(\.([0-9])+)?$/, c = {}, f = {}, h = {}, m = {
					top: "auto;",
					left: "auto;",
					width: "90%;",
					height: "10%;",
					"align-items": "flex-start;",
					overflow: "visible;",
					"-ms-writing-mode": "lr-tb, horizontal-tb;",
					"-webkit-writing-mode": "horizontal-tb;",
					"-moz-writing-mode": "horizontal-tb;",
					"writing-mode": "horizontal-tb;"
				}, g = {
					color: "rgb(255,255,255);",
					direction: "ltr;",
					"font-family": "monospace, sans-serif;",
					"font-style": "normal;",
					"line-height": "normal;",
					"font-weight": "normal;",
					"text-align": "start;",
					"justify-content": "flex-start;",
					"text-decoration": "none;",
					"unicode-bidi": "normal;",
					"white-space": "normal;",
					width: "100%;"
				}, p = {
					monospace: "font-family: monospace;",
					sansSerif: "font-family: sans-serif;",
					serif: "font-family: serif;",
					monospaceSansSerif: "font-family: monospace, sans-serif;",
					monospaceSerif: "font-family: monospace, serif;",
					proportionalSansSerif: "font-family: Arial;",
					proportionalSerif: "font-family: Times New Roman;",
					default: "font-family: monospace, sans-serif;"
				}, _ = {
					right: ["justify-content: flex-end;", "text-align: right;"],
					start: ["justify-content: flex-start;", "text-align: start;"],
					center: ["justify-content: center;", "text-align: center;"],
					end: ["justify-content: flex-end;", "text-align: end;"],
					left: ["justify-content: flex-start;", "text-align: left;"]
				}, v = {
					start: "text-align: start;",
					center: "text-align: center;",
					end: "text-align: end;",
					auto: ""
				}, y = {
					wrap: "white-space: normal;",
					noWrap: "white-space: nowrap;"
				}, E = {
					normal: "unicode-bidi: normal;",
					embed: "unicode-bidi: embed;",
					bidiOverride: "unicode-bidi: bidi-override;"
				}, T = {
					before: "align-items: flex-start;",
					center: "align-items: center;",
					after: "align-items: flex-end;"
				}, b = {
					lrtb: "-webkit-writing-mode: horizontal-tb;writing-mode: horizontal-tb;",
					rltb: "-webkit-writing-mode: horizontal-tb;writing-mode: horizontal-tb;direction: rtl;unicode-bidi: bidi-override;",
					tbrl: "-webkit-writing-mode: vertical-rl;writing-mode: vertical-rl;-webkit-text-orientation: upright;text-orientation: upright;",
					tblr: "-webkit-writing-mode: vertical-lr;writing-mode: vertical-lr;-webkit-text-orientation: upright;text-orientation: upright;",
					lr: "-webkit-writing-mode: horizontal-tb;writing-mode: horizontal-tb;",
					rl: "-webkit-writing-mode: horizontal-tb;writing-mode: horizontal-tb;direction: rtl;",
					tb: "-webkit-writing-mode: vertical-rl;writing-mode: vertical-rl;-webkit-text-orientation: upright;text-orientation: upright;"
				}, S = new i.default({
					escapeMode: !1,
					attributePrefix: "",
					arrayAccessForm: "property",
					emptyNodeForm: "object",
					stripWhitespaces: !1,
					enableToStringFunc: !1,
					matchers: []
				}), e
			}
			l.__dashjs_factory_name = "TTMLParser", t.default = s.default.getSingletonFactory(l), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/URLUtils.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				};

			function a() {
				var e = void 0,
					t = /^[a-z][a-z0-9+\-.]*:/i,
					r = /^https?:\/\//i,
					n = /^([a-z][a-z0-9+\-.]*:\/\/[^\/]+)\/?/i,
					s = function(e, t) {
						try {
							return new window.URL(e, t).toString()
						} catch (r) {
							return e
						}
					},
					i = function(e, t) {
						var r = a;
						if (!t) return e;
						if (!l(e)) return e;
						d(e) && (r = o), c(e) && (r = u);
						var n = r(t),
							s = "/" !== n.charAt(n.length - 1) && "/" !== e.charAt(0) ? "/" : "";
						return [n, e].join(s)
					};

				function a(e) {
					var t = e.indexOf("/"),
						r = e.lastIndexOf("/");
					return -1 !== t ? r === t + 1 ? e : (-1 !== e.indexOf("?") && (e = e.substring(0, e.indexOf("?"))), e.substring(0, r + 1)) : ""
				}

				function o(e) {
					var t = e.match(n);
					return t ? t[1] : ""
				}

				function u(e) {
					var r = e.match(t);
					return r ? r[0] : ""
				}

				function l(e) {
					return !t.test(e)
				}

				function d(e) {
					return l(e) && "/" === e.charAt(0)
				}

				function c(e) {
					return 0 === e.indexOf("//")
				}
				return function() {
					try {
						new window.URL("x", "http://y");
						e = s
					} catch (t) {} finally {
						e = e || i
					}
				}(), {
					parseBaseUrl: a,
					parseOrigin: o,
					parseScheme: u,
					isRelative: l,
					isPathAbsolute: d,
					isSchemeRelative: c,
					isHTTPURL: function(e) {
						return r.test(e)
					},
					resolve: function(t, r) {
						return e(t, r)
					}
				}
			}
			a.__dashjs_factory_name = "URLUtils", t.default = i.default.getSingletonFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/VTTParser.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = n(r("./node_modules/dashjs/build/es5/src/core/Debug.js"));

			function a() {
				var e, t = this.context,
					r = (0, i.default)(t).getInstance().log,
					n = void 0,
					s = void 0,
					a = void 0,
					o = void 0;

				function u(e) {
					var t = e.split(":"),
						r = t.length - 1;
					return e = 60 * parseInt(t[r - 1], 10) + parseFloat(t[r]), 2 === r && (e += 3600 * parseInt(t[0], 10)), e
				}

				function l(e) {
					var t = e.split(s),
						r = t[1].split(o);
					return r.shift(), t[1] = r[0], r.shift(), {
						cuePoints: t,
						styles: d(r)
					}
				}

				function d(e) {
					var t = {};
					return e.forEach((function(e) {
						if (e.split(/:/).length > 1) {
							var r = e.split(/:/)[1];
							r && -1 != r.search(/%/) && (r = parseInt(r.replace(/%/, ""), 10)), (e.match(/align/) || e.match(/A/)) && (t.align = r), (e.match(/line/) || e.match(/L/)) && (t.line = r), (e.match(/position/) || e.match(/P/)) && (t.position = r), (e.match(/size/) || e.match(/S/)) && (t.size = r)
						}
					})), t
				}

				function c(e, t) {
					for (var r, n = t, i = "", a = "";
						"" !== e[n] && n < e.length;) n++;
					if ((r = n - t) > 1)
						for (var o = 0; o < r; o++) {
							if ((a = e[t + o]).match(s)) {
								i = "";
								break
							}
							i += a, o !== r - 1 && (i += "\n")
						} else(a = e[t]).match(s) || (i = a);
					return i
				}
				return e = {
					parse: function(e) {
						var t, i, o = [];
						t = (e = e.split(n)).length, i = -1;
						for (var d = 0; d < t; d++) {
							var f = e[d];
							if (f.length > 0 && "WEBVTT" !== f && f.match(s)) {
								var h = l(f),
									m = h.cuePoints,
									g = h.styles,
									p = c(e, d + 1),
									_ = u(m[0].replace(a, "")),
									v = u(m[1].replace(a, ""));
								!isNaN(_) && !isNaN(v) && _ >= i && v > _ ? "" !== p ? (i = _, o.push({
									start: _,
									end: v,
									data: p,
									styles: g
								})) : r("Skipping cue due to empty/malformed cue text") : r("Skipping cue due to incorrect cue timing")
							}
						}
						return o
					}
				}, n = /(?:\r\n|\r|\n)/gm, s = /-->/, a = /(^[\s]+|[\s]+$)/g, o = /\s\b/g, e
			}
			a.__dashjs_factory_name = "VTTParser", t.default = s.default.getSingletonFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/baseUrlResolution/BasicSelector.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				};

			function a(e) {
				var t = e.blacklistController;
				return {
					select: function(e) {
						var r, n = 0;
						return e && e.some((function(e, r) {
							return n = r, !t.contains(e.serviceLocation)
						})) && (r = e[n]), r
					}
				}
			}
			a.__dashjs_factory_name = "BasicSelector", t.default = i.default.getClassFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/baseUrlResolution/DVBSelector.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				};

			function a(e) {
				var t = e.blacklistController;
				return {
					select: function(e) {
						return e && function(e) {
							var t, r, n = 0,
								s = [],
								i = 0;
							if ((r = e.sort((function(e, t) {
									var r = e.dvb_priority - t.dvb_priority;
									return isNaN(r) ? 0 : r
								})).filter((function(e, t, r) {
									return !t || r[0].dvb_priority && e.dvb_priority && r[0].dvb_priority === e.dvb_priority
								}))).length) return r.length > 1 && (r.forEach((function(e) {
								n += e.dvb_weight, s.push(n)
							})), t = Math.floor(Math.random() * (n - 1)), s.every((function(e, r) {
								return i = r, !(t < e)
							}))), r[i]
						}((r = [], e.filter((function(e) {
							return !t.contains(e.serviceLocation) || (e.dvb_priority && r.push(e.dvb_priority), !1)
						})).filter((function(e) {
							return !r.length || !e.dvb_priority || -1 === r.indexOf(e.dvb_priority)
						}))));
						var r
					}
				}
			}
			a.__dashjs_factory_name = "DVBSelector", t.default = i.default.getClassFactory(a), e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/BitrateInfo.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.mediaType = null, this.bitrate = null, this.width = null, this.height = null, this.qualityIndex = NaN
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/DataChunk.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.streamId = null, this.mediaInfo = null, this.segmentType = null, this.quality = NaN, this.index = NaN, this.bytes = null, this.start = NaN, this.end = NaN, this.duration = NaN, this.representationId = null
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/Error.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e(t, r, n) {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.code = t || null, this.message = r || null, this.data = n || null
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/FragmentRequest.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.action = e.ACTION_DOWNLOAD, this.startTime = NaN, this.mediaType = null, this.mediaInfo = null, this.type = null, this.duration = NaN, this.timescale = NaN, this.range = null, this.url = null, this.serviceLocation = null, this.requestStartDate = null, this.firstByteDate = null, this.requestEndDate = null, this.quality = NaN, this.index = NaN, this.availabilityStartTime = null, this.availabilityEndTime = null, this.wallStartTime = null, this.bytesLoaded = NaN, this.bytesTotal = NaN, this.delayLoadingTime = NaN, this.responseType = "arraybuffer", this.representationId = null
			};
			n.ACTION_DOWNLOAD = "download", n.ACTION_COMPLETE = "complete", t.default = n, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/HeadRequest.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function(e, t, r) {
				for (var n = !0; n;) {
					var s = e,
						i = t,
						a = r;
					n = !1, null === s && (s = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(s, i);
					if (void 0 !== o) {
						if ("value" in o) return o.value;
						var u = o.get;
						if (void 0 === u) return;
						return u.call(a)
					}
					var l = Object.getPrototypeOf(s);
					if (null === l) return;
					e = l, t = i, r = a, n = !0, o = l = void 0
				}
			};
			var s, i = r("./node_modules/dashjs/build/es5/src/streaming/vo/FragmentRequest.js"),
				a = function(e) {
					function t(e) {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), n(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.url = e || null, this.checkForExistenceOnly = !0
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), t
				}(((s = i) && s.__esModule ? s : {
					default: s
				}).default);
			t.default = a, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/IsoBox.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.offset = NaN, this.type = null, this.size = NaN, this.isComplete = !0
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/ManifestInfo.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.DVRWindowSize = NaN, this.loadedTime = null, this.availableFrom = null, this.minBufferTime = NaN, this.duration = NaN, this.isDynamic = !1, this.maxFragmentDuration = null
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/MediaInfo.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.id = null, this.index = null, this.type = null, this.streamInfo = null, this.representationCount = 0, this.lang = null, this.viewpoint = null, this.accessibility = null, this.audioChannelConfiguration = null, this.roles = null, this.codec = null, this.mimeType = null, this.contentProtection = null, this.isText = !1, this.KID = null, this.bitrateList = null
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/MetricsList.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.TcpList = [], this.HttpList = [], this.RepSwitchList = [], this.BufferLevel = [], this.BufferState = [], this.PlayList = [], this.DroppedFrames = [], this.SchedulingInfo = [], this.DVRInfo = [], this.ManifestUpdate = [], this.RequestsQueue = null, this.DVBErrors = [], this.BolaState = []
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/StreamInfo.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.id = null, this.index = null, this.start = NaN, this.duration = NaN, this.manifestInfo = null, this.isLast = !0, this.isFirst = !0
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/TextRequest.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function(e, t, r) {
				for (var n = !0; n;) {
					var s = e,
						i = t,
						a = r;
					n = !1, null === s && (s = Function.prototype);
					var o = Object.getOwnPropertyDescriptor(s, i);
					if (void 0 !== o) {
						if ("value" in o) return o.value;
						var u = o.get;
						if (void 0 === u) return;
						return u.call(a)
					}
					var l = Object.getPrototypeOf(s);
					if (null === l) return;
					e = l, t = i, r = a, n = !0, o = l = void 0
				}
			};
			var s, i = r("./node_modules/dashjs/build/es5/src/streaming/vo/FragmentRequest.js"),
				a = function(e) {
					function t(e, r) {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), n(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.url = e || null, this.type = r || null, this.mediaType = "stream", this.responseType = "text"
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), t
				}(((s = i) && s.__esModule ? s : {
					default: s
				}).default);
			t.default = a, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/TextTrackInfo.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.video = null, this.captionData = null, this.label = null, this.lang = null, this.defaultTrack = !1, this.kind = null, this.isFragmented = !1, this.isEmbedded = !1
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/TrackInfo.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.id = null, this.quality = null, this.DVRWindow = null, this.fragmentDuration = null, this.mediaInfo = null, this.MSETimeOffset = null
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/URIFragmentData.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.t = null, this.xywh = null, this.track = null, this.id = null, this.s = null
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/metrics/BolaState.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this._s = void 0
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/metrics/BufferLevel.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.t = null, this.level = null
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/metrics/BufferState.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, s = r("./node_modules/dashjs/build/es5/src/streaming/controllers/BufferController.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				};
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.target = null, this.state = i.default.BUFFER_EMPTY
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/metrics/DVRInfo.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.time = null, this.range = null, this.manifestInfo = null
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/metrics/DroppedFrames.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.time = null, this.droppedFrames = null
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js": function(e, t, r) {
			"use strict";

			function n(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = function e() {
				n(this, e), this.tcpid = null, this.type = null, this.url = null, this.actualurl = null, this.range = null, this.trequest = null, this.tresponse = null, this.responsecode = null, this.interval = null, this.trace = [], this._stream = null, this._tfinish = null, this._mediaduration = null, this._responseHeaders = null, this._serviceLocation = null
			};
			s.MPD_TYPE = "MPD", s.XLINK_EXPANSION_TYPE = "XLinkExpansion", s.INIT_SEGMENT_TYPE = "InitializationSegment", s.INDEX_SEGMENT_TYPE = "IndexSegment", s.MEDIA_SEGMENT_TYPE = "MediaSegment", s.BITSTREAM_SWITCHING_SEGMENT_TYPE = "BitstreamSwitchingSegment", s.OTHER_TYPE = "other", t.HTTPRequest = s, t.HTTPRequestTrace = function e() {
				n(this, e), this.s = null, this.d = null, this.b = []
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/metrics/ManifestUpdate.js": function(e, t, r) {
			"use strict";

			function n(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.ManifestUpdate = function e() {
				n(this, e), this.mediaType = null, this.type = null, this.requestTime = null, this.fetchTime = null, this.availabilityStartTime = null, this.presentationStartTime = 0, this.clientTimeOffset = 0, this.currentTime = null, this.buffered = null, this.latency = 0, this.streamInfo = [], this.trackInfo = []
			}, t.ManifestUpdateStreamInfo = function e() {
				n(this, e), this.id = null, this.index = null, this.start = null, this.duration = null
			}, t.ManifestUpdateTrackInfo = function e() {
				n(this, e), this.id = null, this.index = null, this.mediaType = null, this.streamIndex = null, this.presentationTimeOffset = null, this.startNumber = null, this.fragmentInfoType = null
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/metrics/PlayList.js": function(e, t, r) {
			"use strict";

			function n(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = function e() {
				n(this, e), this.start = null, this.mstart = null, this.starttype = null, this.trace = []
			};
			s.INITIAL_PLAYOUT_START_REASON = "initial_playout", s.SEEK_START_REASON = "seek", s.RESUME_FROM_PAUSE_START_REASON = "resume", s.METRICS_COLLECTION_START_REASON = "metrics_collection_start";
			var i = function e() {
				n(this, e), this.representationid = null, this.subreplevel = null, this.start = null, this.mstart = null, this.duration = null, this.playbackspeed = null, this.stopreason = null
			};
			i.REPRESENTATION_SWITCH_STOP_REASON = "representation_switch", i.REBUFFERING_REASON = "rebuffering", i.USER_REQUEST_STOP_REASON = "user_request", i.END_OF_PERIOD_STOP_REASON = "end_of_period", i.END_OF_CONTENT_STOP_REASON = "end_of_content", i.METRICS_COLLECTION_STOP_REASON = "metrics_collection_end", i.FAILURE_STOP_REASON = "failure", t.PlayList = s, t.PlayListTrace = i
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/metrics/RepresentationSwitch.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.t = null, this.mt = null, this.to = null, this.lto = null
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/metrics/RequestsQueue.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.loadingRequests = [], this.executedRequests = []
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/metrics/SchedulingInfo.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.mediaType = null, this.t = null, this.type = null, this.startTime = null, this.availabilityStartTime = null, this.duration = null, this.quality = null, this.range = null, this.state = null
			}, e.exports = t.default
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/metrics/TCPConnection.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.tcpid = null, this.dest = null, this.topen = null, this.tclose = null, this.tconnect = null
			}, e.exports = t.default
		},
		"./node_modules/round10/round10.js": function(e, t) {
			var r = t.decimalAdjust = function(e, t, r) {
				return void 0 === r || 0 == +r ? Math[e](t) : (t = +t, r = +r, isNaN(t) || "number" != typeof r || r % 1 != 0 ? NaN : (t = t.toString().split("e"), +((t = (t = Math[e](+(t[0] + "e" + (t[1] ? +t[1] - r : -r)))).toString().split("e"))[0] + "e" + (t[1] ? +t[1] + r : r))))
			};
			e.exports = {
				round10: function(e, t) {
					return r("round", e, t)
				},
				floor10: function(e, t) {
					return r("floor", e, t)
				},
				ceil10: function(e, t) {
					return r("ceil", e, t)
				}
			}, e.exports.polyfill = function() {
				Math.round10 || (Math.round10 = e.exports.round10), Math.floor10 || (Math.floor10 = e.exports.floor10), Math.ceil10 || (Math.ceil10 = e.exports.ceil10)
			}
		}
	}
]);
//# sourceMappingURL=vendors~dashjs.ea4a5615e62a98ef98b2.js.map
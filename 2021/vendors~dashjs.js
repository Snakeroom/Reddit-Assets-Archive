// https://www.redditstatic.com/desktop2x/vendors~dashjs.536210f860c89db757de.js
// Retrieved at 6/22/2021, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~dashjs"], {
		"./node_modules/codem-isoboxer/dist/iso_boxer.js": function(e, t, n) {
			var r = {
				parseBuffer: function(e) {
					return new s(e).parse()
				},
				addBoxProcessor: function(e, t) {
					"string" == typeof e && "function" == typeof t && (i.prototype._boxProcessors[e] = t)
				},
				createFile: function() {
					return new s
				},
				createBox: function(e, t, n) {
					var r = i.create(e);
					return t && t.append(r, n), r
				},
				createFullBox: function(e, t, n) {
					var s = r.createBox(e, t, n);
					return s.version = 0, s.flags = 0, s
				},
				Utils: {}
			};
			r.Utils.dataViewToString = function(e, t) {
				var n = t || "utf-8";
				if ("undefined" != typeof TextDecoder) return new TextDecoder(n).decode(e);
				var r = [],
					s = 0;
				if ("utf-8" === n)
					for (; s < e.byteLength;) {
						var i = e.getUint8(s++);
						i < 128 || (i < 224 ? (i = (31 & i) << 6, i |= 63 & e.getUint8(s++)) : i < 240 ? (i = (15 & i) << 12, i |= (63 & e.getUint8(s++)) << 6, i |= 63 & e.getUint8(s++)) : (i = (7 & i) << 18, i |= (63 & e.getUint8(s++)) << 12, i |= (63 & e.getUint8(s++)) << 6, i |= 63 & e.getUint8(s++))), r.push(String.fromCharCode(i))
					} else
						for (; s < e.byteLength;) r.push(String.fromCharCode(e.getUint8(s++)));
				return r.join("")
			}, r.Utils.utf8ToByteArray = function(e) {
				var t, n;
				if ("undefined" != typeof TextEncoder) t = (new TextEncoder).encode(e);
				else
					for (t = [], n = 0; n < e.length; ++n) {
						var r = e.charCodeAt(n);
						r < 128 ? t.push(r) : r < 2048 ? (t.push(192 | r >> 6), t.push(128 | 63 & r)) : r < 65536 ? (t.push(224 | r >> 12), t.push(128 | 63 & r >> 6), t.push(128 | 63 & r)) : (t.push(240 | r >> 18), t.push(128 | 63 & r >> 12), t.push(128 | 63 & r >> 6), t.push(128 | 63 & r))
					}
				return t
			}, r.Utils.appendBox = function(e, t, n) {
				if (t._offset = e._cursor.offset, t._root = e._root ? e._root : e, t._raw = e._raw, t._parent = e, -1 !== n)
					if (null != n) {
						var r, s = -1;
						if ("number" == typeof n) s = n;
						else {
							if ("string" == typeof n) r = n;
							else {
								if ("object" != typeof n || !n.type) return void e.boxes.push(t);
								r = n.type
							}
							for (var i = 0; i < e.boxes.length; i++)
								if (r === e.boxes[i].type) {
									s = i + 1;
									break
								}
						}
						e.boxes.splice(s, 0, t)
					} else e.boxes.push(t)
			}, t.parseBuffer = r.parseBuffer, t.addBoxProcessor = r.addBoxProcessor, t.createFile = r.createFile, t.createBox = r.createBox, t.createFullBox = r.createFullBox, t.Utils = r.Utils, r.Cursor = function(e) {
				this.offset = void 0 === e ? 0 : e
			};
			var s = function(e) {
				this._cursor = new r.Cursor, this.boxes = [], e && (this._raw = new DataView(e))
			};
			s.prototype.fetch = function(e) {
				var t = this.fetchAll(e, !0);
				return t.length ? t[0] : null
			}, s.prototype.fetchAll = function(e, t) {
				var n = [];
				return s._sweep.call(this, e, n, t), n
			}, s.prototype.parse = function() {
				for (this._cursor.offset = 0, this.boxes = []; this._cursor.offset < this._raw.byteLength;) {
					var e = i.parse(this);
					if (void 0 === e.type) break;
					this.boxes.push(e)
				}
				return this
			}, s._sweep = function(e, t, n) {
				for (var r in this.type && this.type == e && t.push(this), this.boxes) {
					if (t.length && n) return;
					s._sweep.call(this.boxes[r], e, t, n)
				}
			}, s.prototype.write = function() {
				var e, t = 0;
				for (e = 0; e < this.boxes.length; e++) t += this.boxes[e].getLength(!1);
				var n = new Uint8Array(t);
				for (this._rawo = new DataView(n.buffer), this.bytes = n, this._cursor.offset = 0, e = 0; e < this.boxes.length; e++) this.boxes[e].write();
				return n.buffer
			}, s.prototype.append = function(e, t) {
				r.Utils.appendBox(this, e, t)
			};
			var i = function() {
				this._cursor = new r.Cursor
			};
			i.parse = function(e) {
				var t = new i;
				return t._offset = e._cursor.offset, t._root = e._root ? e._root : e, t._raw = e._raw, t._parent = e, t._parseBox(), e._cursor.offset = t._raw.byteOffset + t._raw.byteLength, t
			}, i.create = function(e) {
				var t = new i;
				return t.type = e, t.boxes = [], t
			}, i.prototype._boxContainers = ["dinf", "edts", "mdia", "meco", "mfra", "minf", "moof", "moov", "mvex", "stbl", "strk", "traf", "trak", "tref", "udta", "vttc", "sinf", "schi", "encv", "enca"], i.prototype._boxProcessors = {}, i.prototype._procField = function(e, t, n) {
				this._parsing ? this[e] = this._readField(t, n) : this._writeField(t, n, this[e])
			}, i.prototype._procFieldArray = function(e, t, n, r) {
				var s;
				if (this._parsing)
					for (this[e] = [], s = 0; s < t; s++) this[e][s] = this._readField(n, r);
				else
					for (s = 0; s < this[e].length; s++) this._writeField(n, r, this[e][s])
			}, i.prototype._procFullBox = function() {
				this._procField("version", "uint", 8), this._procField("flags", "uint", 24)
			}, i.prototype._procEntries = function(e, t, n) {
				var r;
				if (this._parsing)
					for (this[e] = [], r = 0; r < t; r++) this[e].push({}), n.call(this, this[e][r]);
				else
					for (r = 0; r < t; r++) n.call(this, this[e][r])
			}, i.prototype._procSubEntries = function(e, t, n, r) {
				var s;
				if (this._parsing)
					for (e[t] = [], s = 0; s < n; s++) e[t].push({}), r.call(this, e[t][s]);
				else
					for (s = 0; s < n; s++) r.call(this, e[t][s])
			}, i.prototype._procEntryField = function(e, t, n, r) {
				this._parsing ? e[t] = this._readField(n, r) : this._writeField(n, r, e[t])
			}, i.prototype._procSubBoxes = function(e, t) {
				var n;
				if (this._parsing)
					for (this[e] = [], n = 0; n < t; n++) this[e].push(i.parse(this));
				else
					for (n = 0; n < t; n++) this._rawo ? this[e][n].write() : this.size += this[e][n].getLength()
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
					n = this._cursor.offset - this._raw.byteOffset;
				switch (e) {
					case 8:
						t = this._raw.getInt8(n);
						break;
					case 16:
						t = this._raw.getInt16(n);
						break;
					case 32:
						t = this._raw.getInt32(n);
						break;
					case 64:
						var r = this._raw.getInt32(n),
							s = this._raw.getInt32(n + 4);
						t = r * Math.pow(2, 32) + s
				}
				return this._cursor.offset += e >> 3, t
			}, i.prototype._readUint = function(e) {
				var t, n, r = null,
					s = this._cursor.offset - this._raw.byteOffset;
				switch (e) {
					case 8:
						r = this._raw.getUint8(s);
						break;
					case 16:
						r = this._raw.getUint16(s);
						break;
					case 24:
						r = ((t = this._raw.getUint16(s)) << 8) + (n = this._raw.getUint8(s + 2));
						break;
					case 32:
						r = this._raw.getUint32(s);
						break;
					case 64:
						t = this._raw.getUint32(s), n = this._raw.getUint32(s + 4), r = t * Math.pow(2, 32) + n
				}
				return this._cursor.offset += e >> 3, r
			}, i.prototype._readString = function(e) {
				for (var t = "", n = 0; n < e; n++) {
					var r = this._readUint(8);
					t += String.fromCharCode(r)
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
					var n = new Uint8Array(this._raw.buffer, this._cursor.offset, t);
					return this._cursor.offset += t, n
				}
				return null
			}, i.prototype._readUTF8String = function() {
				var e = this._raw.byteLength - (this._cursor.offset - this._offset),
					t = null;
				return e > 0 && (t = new DataView(this._raw.buffer, this._cursor.offset, e), this._cursor.offset += e), t ? r.Utils.dataViewToString(t) : t
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
				r.Utils.appendBox(this, e, t)
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
					var n = this._cursor.offset - this._rawo.byteOffset;
					switch (e) {
						case 8:
							this._rawo.setInt8(n, t);
							break;
						case 16:
							this._rawo.setInt16(n, t);
							break;
						case 32:
							this._rawo.setInt32(n, t);
							break;
						case 64:
							var r = Math.floor(t / Math.pow(2, 32)),
								s = t - r * Math.pow(2, 32);
							this._rawo.setUint32(n, r), this._rawo.setUint32(n + 4, s)
					}
					this._cursor.offset += e >> 3
				} else this.size += e >> 3
			}, i.prototype._writeUint = function(e, t) {
				if (this._rawo) {
					var n, r, s = this._cursor.offset - this._rawo.byteOffset;
					switch (e) {
						case 8:
							this._rawo.setUint8(s, t);
							break;
						case 16:
							this._rawo.setUint16(s, t);
							break;
						case 24:
							n = (16776960 & t) >> 8, r = 255 & t, this._rawo.setUint16(s, n), this._rawo.setUint8(s + 2, r);
							break;
						case 32:
							this._rawo.setUint32(s, t);
							break;
						case 64:
							r = t - (n = Math.floor(t / Math.pow(2, 32))) * Math.pow(2, 32), this._rawo.setUint32(s, n), this._rawo.setUint32(s + 4, r)
					}
					this._cursor.offset += e >> 3
				} else this.size += e >> 3
			}, i.prototype._writeString = function(e, t) {
				for (var n = 0; n < e; n++) this._writeUint(8, t.charCodeAt(n))
			}, i.prototype._writeTerminatedString = function(e) {
				if (0 !== e.length) {
					for (var t = 0; t < e.length; t++) this._writeUint(8, e.charCodeAt(t));
					this._writeUint(8, 0)
				}
			}, i.prototype._writeTemplate = function(e, t) {
				var n = Math.floor(t),
					r = (t - n) * Math.pow(2, e / 2);
				this._writeUint(e / 2, n), this._writeUint(e / 2, r)
			}, i.prototype._writeData = function(e) {
				if (e)
					if (this._rawo) {
						if (e instanceof Array) {
							for (var t = this._cursor.offset - this._rawo.byteOffset, n = 0; n < e.length; n++) this._rawo.setInt8(t + n, e[n]);
							this._cursor.offset += e.length
						}
						e instanceof Uint8Array && (this._root.bytes.set(e, this._cursor.offset), this._cursor.offset += e.length)
					} else this.size += e.length
			}, i.prototype._writeUTF8String = function(e) {
				var t = r.Utils.utf8ToByteArray(e);
				if (this._rawo)
					for (var n = new DataView(this._rawo.buffer, this._cursor.offset, t.length), s = 0; s < t.length; s++) n.setUint8(s, t[s]);
				else this.size += t.length
			}, i.prototype._writeField = function(e, t, n) {
				switch (e) {
					case "uint":
						this._writeUint(t, n);
						break;
					case "int":
						this._writeInt(t, n);
						break;
					case "template":
						this._writeTemplate(t, n);
						break;
					case "string":
						-1 == t ? this._writeTerminatedString(n) : this._writeString(t, n);
						break;
					case "data":
						this._writeData(n);
						break;
					case "utf8":
						this._writeUTF8String(n)
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
				this._procFullBox(), 1 == this.version ? (this._procField("timescale", "uint", 32), this._procField("presentation_time", "uint", 64), this._procField("event_duration", "uint", 32), this._procField("id", "uint", 32), this._procField("scheme_id_uri", "string", -1), this._procField("value", "string", -1)) : (this._procField("scheme_id_uri", "string", -1), this._procField("value", "string", -1), this._procField("timescale", "uint", 32), this._procField("presentation_time_delta", "uint", 32), this._procField("event_duration", "uint", 32), this._procField("id", "uint", 32)), this._procField("message_data", "data", -1)
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
		"./node_modules/dashjs/build/es5/externals/base64.js": function(e, t, n) {
			"use strict";
			var r, i, o, u, l, d = {
					encode: function(e) {
						for (var t = [], n = 0; n < e.length; ++n) {
							var r = e.charCodeAt(n);
							r < 128 ? t.push(r) : r < 2048 ? (t.push(192 | r >> 6), t.push(128 | 63 & r)) : r < 65536 ? (t.push(224 | r >> 12), t.push(128 | 63 & r >> 6), t.push(128 | 63 & r)) : (t.push(240 | r >> 18), t.push(128 | 63 & r >> 12), t.push(128 | 63 & r >> 6), t.push(128 | 63 & r))
						}
						return t
					},
					decode: function(e) {
						for (var t = [], n = 0; n < e.length;) {
							var r = e[n++];
							r < 128 || (r < 224 ? (r = (31 & r) << 6, r |= 63 & e[n++]) : r < 240 ? (r = (15 & r) << 12, r |= (63 & e[n++]) << 6, r |= 63 & e[n++]) : (r = (7 & r) << 18, r |= (63 & e[n++]) << 12, r |= (63 & e[n++]) << 6, r |= 63 & e[n++])), t.push(String.fromCharCode(r))
						}
						return t.join("")
					}
				},
				c = {};
			r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = function(e) {
				for (var t = 0, n = [], s = 0 | e.length / 3; 0 < s--;) {
					var i = (e[t] << 16) + (e[t + 1] << 8) + e[t + 2];
					t += 3, n.push(r.charAt(63 & i >> 18)), n.push(r.charAt(63 & i >> 12)), n.push(r.charAt(63 & i >> 6)), n.push(r.charAt(63 & i))
				}
				return 2 == e.length - t ? (i = (e[t] << 16) + (e[t + 1] << 8), n.push(r.charAt(63 & i >> 18)), n.push(r.charAt(63 & i >> 12)), n.push(r.charAt(63 & i >> 6)), n.push("=")) : 1 == e.length - t && (i = e[t] << 16, n.push(r.charAt(63 & i >> 18)), n.push(r.charAt(63 & i >> 12)), n.push("==")), n.join("")
			}, o = function() {
				for (var e = [], t = 0; t < r.length; ++t) e[r.charCodeAt(t)] = t;
				return e["=".charCodeAt(0)] = 0, e
			}(), u = function(e) {
				for (var t = 0, n = [], r = 0 | e.length / 4; 0 < r--;) {
					var s = (o[e.charCodeAt(t)] << 18) + (o[e.charCodeAt(t + 1)] << 12) + (o[e.charCodeAt(t + 2)] << 6) + o[e.charCodeAt(t + 3)];
					n.push(255 & s >> 16), n.push(255 & s >> 8), n.push(255 & s), t += 4
				}
				return n && ("=" == e.charAt(t - 2) ? (n.pop(), n.pop()) : "=" == e.charAt(t - 1) && n.pop()), n
			}, l = {
				encode: function(e) {
					for (var t = [], n = 0; n < e.length; ++n) t.push(e.charCodeAt(n));
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
			}, t.decode = c.decode, t.decodeArray = c.decodeArray, t.encode = c.encode, t.encodeASCII = c.encodeASCII
		},
		"./node_modules/dashjs/build/es5/externals/cea608-parser.js": function(e, t, n) {
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
					n = function(e) {
						var n = e;
						return t.hasOwnProperty(e) && (n = t[e]), String.fromCharCode(n)
					},
					r = {
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
							var n = this.verboseFilter[e];
							this.verboseLevel >= n && console.log(this.time + " [" + e + "] " + t)
						}
					},
					l = function(e) {
						for (var t = [], n = 0; n < e.length; n++) t.push(e[n].toString(16));
						return t
					},
					d = function(e, t, n, r, s) {
						this.foreground = e || "white", this.underline = t || !1, this.italics = n || !1, this.background = r || "black", this.flash = s || !1
					};
				d.prototype = {
					reset: function() {
						this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
					},
					setStyles: function(e) {
						for (var t = ["foreground", "underline", "italics", "background", "flash"], n = 0; n < t.length; n++) {
							var r = t[n];
							e.hasOwnProperty(r) && (this[r] = e[r])
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
				var c = function(e, t, n, r, s, i) {
					this.uchar = e || " ", this.penState = new d(t, n, r, s, i)
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
						for (var t = !0, n = 0; n < 32; n++)
							if (!this.chars[n].equals(e.chars[n])) {
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
							for (var n = this.pos + 1; n < t + 1; n++) this.chars[n].setPenState(this.currPenState);
						this.setCursor(t)
					},
					backSpace: function() {
						this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
					},
					insertChar: function(e) {
						e >= 144 && this.backSpace();
						var t = n(e);
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
						for (var e = [], t = !0, n = 0; n < 32; n++) {
							var r = this.chars[n].uchar;
							" " !== r && (t = !1), e.push(r)
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
						for (var t = !0, n = 0; n < 15; n++)
							if (!this.rows[n].equals(e.rows[n])) {
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
						var n = this.rows[this.currRow];
						if (null !== e.indent) {
							var r = e.indent,
								s = Math.max(r - 1, 0);
							n.setCursor(e.indent), e.color = n.chars[s].penState.foreground
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
						for (var t = [], n = "", r = -1, s = 0; s < 15; s++) {
							var i = this.rows[s].getTextString();
							i && (r = s + 1, e ? t.push("Row " + r + ': "' + i + '"') : t.push(i.trim()))
						}
						return t.length > 0 && (n = e ? "[" + t.join(" | ") + "]" : t.join("\n")), n
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
						var n = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
						u.log("INFO", n + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (u.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
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
							var n = Math.floor(e / 2) - 16;
							t.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][n]
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
				var g = function(e, t, n) {
					this.field = e || 1, this.outputs = [t, n], this.channels = [new m(1, t), new m(2, n)], this.currChNr = -1, this.lastCmdA = null, this.lastCmdB = null, this.bufferedData = [], this.startTime = null, this.lastTime = null, this.dataCounters = {
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
						var n, r, s, i = !1;
						this.lastTime = e, u.setTime(e);
						for (var a = 0; a < t.length; a += 2)
							if (r = 127 & t[a], s = 127 & t[a + 1], r >= 16 && r <= 31 && r === this.lastCmdA && s === this.lastCmdB) this.lastCmdA = null, this.lastCmdB = null, u.log("DEBUG", "Repeated command (" + l([r, s]) + ") is dropped");
							else if (0 !== r || 0 !== s) {
							if (u.log("DATA", "[" + l([t[a], t[a + 1]]) + "] -> (" + l([r, s]) + ")"), (n = this.parseCmd(r, s)) || (n = this.parseMidrow(r, s)), n || (n = this.parsePAC(r, s)), n || (n = this.parseBackgroundAttributes(r, s)), !n)
								if (i = this.parseChars(r, s))
									if (this.currChNr && this.currChNr >= 0) this.channels[this.currChNr - 1].insertChars(i);
									else u.log("WARNING", "No channel found yet. TEXT-MODE?");
							n ? this.dataCounters.cmd += 2 : i ? this.dataCounters.char += 2 : (this.dataCounters.other += 2, u.log("WARNING", "Couldn't parse cleaned data " + l([r, s]) + " orig: " + l([t[a], t[a + 1]])))
						} else this.dataCounters.padding += 2
					},
					parseCmd: function(e, t) {
						var n = null;
						if (!((20 === e || 21 === e || 28 === e || 29 === e) && 32 <= t && t <= 47) && !((23 === e || 31 === e) && 33 <= t && t <= 35)) return !1;
						n = 20 === e || 21 === e || 23 === e ? 1 : 2;
						var r = this.channels[n - 1];
						return 20 === e || 21 === e || 28 === e || 29 === e ? 32 === t ? r.cc_RCL() : 33 === t ? r.cc_BS() : 34 === t ? r.cc_AOF() : 35 === t ? r.cc_AON() : 36 === t ? r.cc_DER() : 37 === t ? r.cc_RU(2) : 38 === t ? r.cc_RU(3) : 39 === t ? r.cc_RU(4) : 40 === t ? r.cc_FON() : 41 === t ? r.cc_RDC() : 42 === t ? r.cc_TR() : 43 === t ? r.cc_RTD() : 44 === t ? r.cc_EDM() : 45 === t ? r.cc_CR() : 46 === t ? r.cc_ENM() : 47 === t && r.cc_EOC() : r.cc_TO(t - 32), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = n, !0
					},
					parseMidrow: function(e, t) {
						var n = null;
						if ((17 === e || 25 === e) && 32 <= t && t <= 47) {
							if ((n = 17 === e ? 1 : 2) !== this.currChNr) return u.log("ERROR", "Mismatch channel in midrow parsing"), !1;
							var r = this.channels[n - 1];
							return r.insertChars([32]), r.cc_MIDROW(t), u.log("DEBUG", "MIDROW (" + l([e, t]) + ")"), this.lastCmdA = e, this.lastCmdB = t, !0
						}
						return !1
					},
					parsePAC: function(e, t) {
						var n, o = null;
						if (!((17 <= e && e <= 23 || 25 <= e && e <= 31) && 64 <= t && t <= 127) && !((16 === e || 24 === e) && 64 <= t && t <= 95)) return !1;
						n = e <= 23 ? 1 : 2, o = 64 <= t && t <= 95 ? 1 === n ? r[e] : i[e] : 1 === n ? s[e] : a[e];
						var u = this.interpretPAC(o, t);
						return this.channels[n - 1].setPAC(u), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = n, !0
					},
					interpretPAC: function(e, t) {
						var n = t,
							r = {
								color: null,
								italics: !1,
								indent: null,
								underline: !1,
								row: e
							};
						return n = t > 95 ? t - 96 : t - 64, r.underline = 1 == (1 & n), n <= 13 ? r.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(n / 2)] : n <= 15 ? (r.italics = !0, r.color = "white") : r.indent = 4 * Math.floor((n - 16) / 2), r
					},
					parseChars: function(e, t) {
						var r = null,
							s = null,
							i = null;
						if (e >= 25 ? (r = 2, i = e - 8) : (r = 1, i = e), 17 <= i && i <= 19) {
							var a = t;
							a = 17 === i ? t + 80 : 18 === i ? t + 112 : t + 144, u.log("INFO", "Special char '" + n(a) + "' in channel " + r), s = [a], this.lastCmdA = e, this.lastCmdB = t
						} else 32 <= e && e <= 127 && (s = 0 === t ? [e] : [e, t], this.lastCmdA = null, this.lastCmdB = null);
						if (s) {
							var o = l(s);
							u.log("DEBUG", "Char codes =  " + o.join(","))
						}
						return s
					},
					parseBackgroundAttributes: function(e, t) {
						var n, r, s;
						return ((16 === e || 24 === e) && 32 <= t && t <= 47 || (23 === e || 31 === e) && 45 <= t && t <= 47) && (n = {}, 16 === e || 24 === e ? (r = Math.floor((t - 32) / 2), n.background = o[r], t % 2 == 1 && (n.background = n.background + "_semi")) : 45 === t ? n.background = "transparent" : (n.foreground = "black", 47 === t && (n.underline = !0)), s = e < 24 ? 1 : 2, this.channels[s - 1].setBkgData(n), this.lastCmdA = e, this.lastCmdB = t, !0)
					},
					reset: function() {
						for (var e = 0; e < this.channels.length; e++) this.channels[e] && this.channels[e].reset();
						this.lastCmdA = null, this.lastCmdB = null
					},
					cueSplitAtTime: function(e) {
						for (var t = 0; t < this.channels.length; t++) this.channels[t] && this.channels[t].cueSplitAtTime(e)
					}
				};
				e.logger = u, e.PenState = d, e.CaptionScreen = h, e.Cea608Parser = g, e.findCea608Nalus = function(e, t, n) {
					for (var r = 0, s = t, i = [], a = function(e, t, n, r) {
							if (4 !== e || t < 8) return null;
							var s = n.getUint8(r),
								i = n.getUint16(r + 1),
								a = n.getUint32(r + 3),
								o = n.getUint8(r + 7);
							return 181 == s && 49 == i && 1195456820 == a && 3 == o
						}; s < t + n;) {
						if (r = e.getUint32(s), 6 === (31 & e.getUint8(s + 4)))
							for (var o = s + 5, u = -1; o < s + 4 + r - 1;) {
								u = 0;
								for (var l = 255; 255 === l;) u += l = e.getUint8(o), o++;
								var d = 0;
								for (l = 255; 255 === l;) d += l = e.getUint8(o), o++;
								a(u, d, e, o) && i.push([o, d]), o += d
							}
						s += r + 4
					}
					return i
				}, e.extractCea608DataFromRange = function(e, t) {
					var n = t[0],
						r = [
							[],
							[]
						];
					n += 8;
					var s = 31 & e.getUint8(n);
					n += 2;
					for (var i = 0; i < s; i++) {
						var a = e.getUint8(n),
							o = 4 & a,
							u = 3 & a;
						n++;
						var l = e.getUint8(n);
						n++;
						var d = e.getUint8(n);
						n++, o && (127 & l) + (127 & d) != 0 && (0 === u ? (r[0].push(l), r[0].push(d)) : 1 === u && (r[1].push(l), r[1].push(d)))
					}
					return r
				}
			}(t)
		},
		"./node_modules/dashjs/build/es5/externals/xml2json.js": function(e, t, n) {
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

				function n(e) {
					var t = e.localName;
					return null == t && (t = e.baseName), null != t && "" != t || (t = e.nodeName), t
				}

				function r(e) {
					return "string" == typeof e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") : e
				}

				function s(e, t, n, r) {
					for (var s = 0; s < e.length; s++) {
						var i = e[s];
						if ("string" == typeof i) {
							if (i == r) break
						} else if (i instanceof RegExp) {
							if (i.test(r)) break
						} else if ("function" == typeof i && i(t, n, r)) break
					}
					return s != e.length
				}

				function i(t, n, r) {
					switch (e.arrayAccessForm) {
						case "property":
							t[n] instanceof Array ? t[n + "_asArray"] = t[n] : t[n + "_asArray"] = [t[n]]
					}!(t[n] instanceof Array) && e.arrayAccessFormPaths.length > 0 && s(e.arrayAccessFormPaths, t, n, r) && (t[n] = [t[n]])
				}

				function a(e) {
					var t = e.split(/[-T:+Z]/g),
						n = new Date(t[0], t[1] - 1, t[2]),
						r = t[5].split(".");
					if (n.setHours(t[3], t[4], r[0]), r.length > 1 && n.setMilliseconds(r[1]), t[6] && t[7]) {
						var s = 60 * t[6] + Number(t[7]);
						s = 0 + ("-" == (/\d\d-\d\d:\d\d$/.test(e) ? "-" : "+") ? -1 * s : s), n.setMinutes(n.getMinutes() - s - n.getTimezoneOffset())
					} else -1 !== e.indexOf("Z", e.length - 1) && (n = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds())));
					return n
				}

				function o(n, r, i, a) {
					return !(r == t.ELEMENT_NODE && e.xmlElementsFilter.length > 0) || s(e.xmlElementsFilter, n, i, a)
				}

				function u(r, l) {
					if (r.nodeType == t.DOCUMENT_NODE) {
						for (var d = new Object, c = r.childNodes, f = 0; f < c.length; f++) {
							if ((m = c[f]).nodeType == t.ELEMENT_NODE)
								if (e.ignoreRoot) d = u(m);
								else(d = {})[g = n(m)] = u(m)
						}
						return d
					}
					if (r.nodeType == t.ELEMENT_NODE) {
						(d = new Object).__cnt = 0;
						var h = [];
						for (c = r.childNodes, f = 0; f < c.length; f++) {
							var m, g = n(m = c[f]);
							if (m.nodeType != t.COMMENT_NODE) {
								var _ = l + "." + g;
								if (o(d, m.nodeType, g, _))
									if (d.__cnt++, null == d[g]) {
										var p = u(m, _);
										if ("#text" != g || /[^\s]/.test(p))(E = {})[g] = p, h.push(E);
										d[g] = p, i(d, g, _)
									} else {
										null != d[g] && (d[g] instanceof Array || (d[g] = [d[g]], i(d, g, _)));
										var E;
										p = u(m, _);
										if ("#text" != g || /[^\s]/.test(p))(E = {})[g] = p, h.push(E);
										d[g][d[g].length] = p
									}
							}
						}
						d.__children = h;
						for (var v = n(r), y = 0; y < r.attributes.length; y++) {
							var T = r.attributes[y];
							d.__cnt++;
							for (var b = T.value, S = 0, A = e.matchers.length; S < A; S++) {
								var I = e.matchers[S];
								I.test(T, v) && (b = I.converter(T.value))
							}
							d[e.attributePrefix + T.name] = b
						}
						var R = function(e) {
							return e.prefix
						}(r);
						return null != R && "" != R && (d.__cnt++, d.__prefix = R), null != d["#text"] && (d.__text = d["#text"], d.__text instanceof Array && (d.__text = d.__text.join("\n")), e.stripWhitespaces && (d.__text = d.__text.trim()), delete d["#text"], "property" == e.arrayAccessForm && delete d["#text_asArray"], d.__text = function(t, n, r) {
							if (e.datetimeAccessFormPaths.length > 0) {
								var i = r.split(".#")[0];
								return s(e.datetimeAccessFormPaths, t, n, i) ? a(t) : t
							}
							return t
						}(d.__text, g, l + "." + g)), null != d["#cdata-section"] && (d.__cdata = d["#cdata-section"], delete d["#cdata-section"], "property" == e.arrayAccessForm && delete d["#cdata-section_asArray"]), 0 == d.__cnt && "text" == e.emptyNodeForm ? d = "" : 1 == d.__cnt && null != d.__text ? d = d.__text : 1 != d.__cnt || null == d.__cdata || e.keepCData ? d.__cnt > 1 && null != d.__text && e.skipEmptyTextNodesForObj && (e.stripWhitespaces && "" == d.__text || "" == d.__text.trim()) && delete d.__text : d = d.__cdata, delete d.__cnt, !e.enableToStringFunc || null == d.__text && null == d.__cdata || (d.toString = function() {
							return (null != this.__text ? this.__text : "") + (null != this.__cdata ? this.__cdata : "")
						}), d
					}
					if (r.nodeType == t.TEXT_NODE || r.nodeType == t.CDATA_SECTION_NODE) return r.nodeValue
				}

				function l(t, n, s, i) {
					var a = "<" + (null != t && null != t.__prefix ? t.__prefix + ":" : "") + n;
					if (null != s)
						for (var o = 0; o < s.length; o++) {
							var u = s[o],
								l = t[u];
							e.escapeMode && (l = r(l)), a += " " + u.substr(e.attributePrefix.length) + "=", e.useDoubleQuotes ? a += '"' + l + '"' : a += "'" + l + "'"
						}
					return a += i ? "/>" : ">"
				}

				function d(e, t) {
					return "</" + (null != e.__prefix ? e.__prefix + ":" : "") + t + ">"
				}

				function c(t, n) {
					return "property" == e.arrayAccessForm && (r = n.toString(), s = "_asArray", -1 !== r.indexOf(s, r.length - s.length)) || 0 == n.toString().indexOf(e.attributePrefix) || 0 == n.toString().indexOf("__") || t[n] instanceof Function;
					var r, s
				}

				function f(e) {
					var t = 0;
					if (e instanceof Object)
						for (var n in e) c(e, n) || t++;
					return t
				}

				function h(t, n, r) {
					return 0 == e.jsonPropertiesFilter.length || "" == r || s(e.jsonPropertiesFilter, t, n, r)
				}

				function m(t) {
					var n = [];
					if (t instanceof Object)
						for (var r in t) - 1 == r.toString().indexOf("__") && 0 == r.toString().indexOf(e.attributePrefix) && n.push(r);
					return n
				}

				function g(t) {
					var n = "";
					return t instanceof Object ? n += function(t) {
						var n = "";
						return null != t.__cdata && (n += "<![CDATA[" + t.__cdata + "]]>"), null != t.__text && (e.escapeMode ? n += r(t.__text) : n += t.__text), n
					}(t) : null != t && (e.escapeMode ? n += r(t) : n += t), n
				}

				function _(e, t) {
					return "" === e ? t : e + "." + t
				}

				function p(e, t, n, r) {
					var s = "";
					if (0 == e.length) s += l(e, t, n, !0);
					else
						for (var i = 0; i < e.length; i++) s += l(e[i], t, m(e[i]), !1), s += E(e[i], _(r, t)), s += d(e[i], t);
					return s
				}

				function E(e, t) {
					var n = "";
					if (f(e) > 0)
						for (var r in e)
							if (!c(e, r) && ("" == t || h(e, r, _(t, r)))) {
								var s = e[r],
									i = m(s);
								if (null == s || null == s) n += l(s, r, i, !0);
								else if (s instanceof Object)
									if (s instanceof Array) n += p(s, r, i, t);
									else if (s instanceof Date) n += l(s, r, i, !1), n += s.toISOString(), n += d(s, r);
								else {
									f(s) > 0 || null != s.__text || null != s.__cdata ? (n += l(s, r, i, !1), n += E(s, _(t, r)), n += d(s, r)) : n += l(s, r, i, !0)
								} else n += l(s, r, i, !1), n += g(s), n += d(s, r)
							} return n += g(e)
				}
				this.parseXmlString = function(e) {
					var t;
					window.ActiveXObject || window;
					if (void 0 === e) return null;
					if (window.DOMParser) {
						var n = new window.DOMParser;
						try {
							(t = n.parseFromString(e, "text/xml")).getElementsByTagNameNS("*", "parsererror").length > 0 && (t = null)
						} catch (r) {
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
					return E(e, "")
				}, this.json2xml = function(e) {
					var t = this.json2xml_str(e);
					return this.parseXmlString(t)
				}, this.getVersion = function() {
					return "1.2.0"
				}
			}
		},
		"./node_modules/dashjs/build/es5/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.Debug = t.MediaPlayerFactory = t.MetricsReporting = t.Protection = t.MediaPlayer = void 0;
			var r = n("./node_modules/dashjs/build/es5/index_mediaplayerOnly.js"),
				s = u(n("./node_modules/dashjs/build/es5/src/streaming/metrics/MetricsReporting.js")),
				i = u(n("./node_modules/dashjs/build/es5/src/streaming/protection/Protection.js")),
				a = u(n("./node_modules/dashjs/build/es5/src/streaming/MediaPlayerFactory.js")),
				o = u(n("./node_modules/dashjs/build/es5/src/core/Debug.js"));

			function u(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			dashjs.Protection = i.default, dashjs.MetricsReporting = s.default, dashjs.MediaPlayerFactory = a.default, dashjs.Debug = o.default, t.default = dashjs, t.MediaPlayer = r.MediaPlayer, t.Protection = i.default, t.MetricsReporting = s.default, t.MediaPlayerFactory = a.default, t.Debug = o.default
		},
		"./node_modules/dashjs/build/es5/index_mediaplayerOnly.js": function(e, t, n) {
			"use strict";
			(function(e) {
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.Debug = t.FactoryMaker = t.MediaPlayer = void 0;
				var r = o(n("./node_modules/dashjs/build/es5/src/streaming/MediaPlayer.js")),
					s = o(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
					i = o(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
					a = n("./node_modules/dashjs/build/es5/src/core/Version.js");

				function o(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				var u = "undefined" != typeof window && window || e,
					l = u.dashjs;
				l || (l = u.dashjs = {}), l.MediaPlayer = r.default, l.FactoryMaker = s.default, l.Debug = i.default, l.Version = (0, a.getVersionString)(), t.default = l, t.MediaPlayer = r.default, t.FactoryMaker = s.default, t.Debug = i.default
			}).call(this, n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/dashjs/build/es5/src/core/Debug.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = a(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				s = a(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				i = a(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var o = 1,
				u = 2,
				l = 3,
				d = 4,
				c = 5;

			function f(e) {
				e = e || {};
				var t, n = this.context,
					i = (0, r.default)(n).getInstance(),
					a = e.settings,
					f = [],
					h = void 0,
					m = void 0,
					g = void 0;

				function _(e) {
					return e && e.bind ? e.bind(window.console) : window.console.log.bind(window.console)
				}

				function p() {
					for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					b.apply(void 0, [o, this].concat(t))
				}

				function E() {
					for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					b.apply(void 0, [u, this].concat(t))
				}

				function v() {
					for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					b.apply(void 0, [l, this].concat(t))
				}

				function y() {
					for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					b.apply(void 0, [d, this].concat(t))
				}

				function T() {
					for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					b.apply(void 0, [c, this].concat(t))
				}

				function b(e, t) {
					var n = "",
						r = null;
					h && (r = (new Date).getTime(), n += "[" + (r - g) + "]"), m && t && t.getClassName && (n += "[" + t.getClassName() + "]", t.getType && (n += "[" + t.getType() + "]")), n.length > 0 && (n += " ");
					for (var o = arguments.length, u = Array(o > 2 ? o - 2 : 0), l = 2; l < o; l++) u[l - 2] = arguments[l];
					Array.apply(null, u).forEach((function(e) {
						n += e + " "
					})), f[e] && a.get().debug.logLevel >= e && f[e](n), a && a.get().debug.dispatchEvent && i.trigger(s.default.LOG, {
						message: n,
						level: e
					})
				}
				return t = {
					getLogger: function(e) {
						return {
							fatal: p.bind(e),
							error: E.bind(e),
							warn: v.bind(e),
							info: y.bind(e),
							debug: T.bind(e)
						}
					},
					setLogTimestampVisible: function(e) {
						h = e
					},
					setCalleeNameVisible: function(e) {
						m = e
					}
				}, h = !0, m = !0, g = (new Date).getTime(), "undefined" != typeof window && window.console && (f[o] = _(window.console.error), f[u] = _(window.console.error), f[l] = _(window.console.warn), f[d] = _(window.console.info), f[c] = _(window.console.debug)), t
			}
			f.__dashjs_factory_name = "Debug";
			var h = i.default.getSingletonFactory(f);
			h.LOG_LEVEL_NONE = 0, h.LOG_LEVEL_FATAL = o, h.LOG_LEVEL_ERROR = u, h.LOG_LEVEL_WARNING = l, h.LOG_LEVEL_INFO = d, h.LOG_LEVEL_DEBUG = c, i.default.updateSingletonFactory(f.__dashjs_factory_name, h), t.default = h
		},
		"./node_modules/dashjs/build/es5/src/core/EventBus.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				},
				a = n("./node_modules/dashjs/build/es5/src/streaming/MediaPlayerEvents.js");
			var o = 0;

			function u() {
				var e = {};

				function t(t, n, r) {
					var s = -1;
					return e[t] ? (e[t].some((function(e, t) {
						if (e && e.callback === n && (!r || r === e.scope)) return s = t, !0
					})), s) : s
				}
				return {
					on: function(n, r, s) {
						var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
						if (!n) throw new Error("event type cannot be null or undefined");
						if (!r || "function" != typeof r) throw new Error("listener must be a function: " + r);
						var a = i.priority || o;
						if (!(t(n, r, s) >= 0)) {
							e[n] = e[n] || [];
							var u = {
								callback: r,
								scope: s,
								priority: a
							};
							s && s.getStreamId && (u.streamId = s.getStreamId()), s && s.getType && (u.mediaType = s.getType()), i && i.mode && (u.mode = i.mode), e[n].some((function(t, r) {
								if (t && a > t.priority) return e[n].splice(r, 0, u), !0
							})) || e[n].push(u)
						}
					},
					off: function(n, r, s) {
						if (n && r && e[n]) {
							var i = t(n, r, s);
							i < 0 || (e[n][i] = null)
						}
					},
					trigger: function(t) {
						var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
						if (t && e[t]) {
							if ((n = n || {}).hasOwnProperty("type")) throw new Error("'type' is a reserved word for event dispatching");
							n.type = t, r.streamId && (n.streamId = r.streamId), r.mediaType && (n.mediaType = r.mediaType), e[t].filter((function(e) {
								return !!e && ((!r.streamId || !e.streamId || e.streamId === r.streamId) && ((!r.mediaType || !e.mediaType || e.mediaType === r.mediaType) && !(r.mode && e.mode && e.mode !== r.mode || !e.mode && r.mode && r.mode === a.EVENT_MODE_ON_RECEIVE)))
							})).forEach((function(e) {
								return e && e.callback.call(e.scope, n)
							}))
						}
					},
					reset: function() {
						e = {}
					}
				}
			}
			u.__dashjs_factory_name = "EventBus";
			var l = i.default.getSingletonFactory(u);
			l.EVENT_PRIORITY_LOW = o, l.EVENT_PRIORITY_HIGH = 5e3, i.default.updateSingletonFactory(u.__dashjs_factory_name, l), t.default = l
		},
		"./node_modules/dashjs/build/es5/src/core/FactoryMaker.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = function() {
				var e = void 0,
					t = [],
					n = {},
					r = {};

				function s(e, n) {
					for (var r in t) {
						var s = t[r];
						if (s.context === e && s.name === n) return s.instance
					}
					return null
				}

				function i(e, t) {
					return t[e]
				}

				function a(e, t, n) {
					e in n && (n[e] = t)
				}

				function o(t, n, r) {
					var s = void 0,
						i = t.__dashjs_factory_name,
						a = n[i];
					if (a) {
						var o = a.instance;
						if (!a.override) return o.apply({
							context: n,
							factory: e
						}, r);
						for (var u in s = t.apply({
								context: n
							}, r), o = o.apply({
								context: n,
								factory: e,
								parent: s
							}, r)) s.hasOwnProperty(u) && (s[u] = o[u])
					} else s = t.apply({
						context: n
					}, r);
					return s.getClassName = function() {
						return i
					}, s
				}
				return e = {
					extend: function(e, t, n, r) {
						!r[e] && t && (r[e] = {
							instance: t,
							override: n
						})
					},
					getSingletonInstance: s,
					setSingletonInstance: function(e, n, r) {
						for (var s in t) {
							var i = t[s];
							if (i.context === e && i.name === n) return void(t[s].instance = r)
						}
						t.push({
							name: n,
							context: e,
							instance: r
						})
					},
					deleteSingletonInstances: function(e) {
						t = t.filter((function(t) {
							return t.context !== e
						}))
					},
					getSingletonFactory: function(e) {
						var r = i(e.__dashjs_factory_name, n);
						return r || (r = function(n) {
							var r = void 0;
							return void 0 === n && (n = {}), {
								getInstance: function() {
									return r || (r = s(n, e.__dashjs_factory_name)), r || (r = o(e, n, arguments), t.push({
										name: e.__dashjs_factory_name,
										context: n,
										instance: r
									})), r
								}
							}
						}, n[e.__dashjs_factory_name] = r), r
					},
					getSingletonFactoryByName: function(e) {
						return i(e, n)
					},
					updateSingletonFactory: function(e, t) {
						a(e, t, n)
					},
					getClassFactory: function(e) {
						var t = i(e.__dashjs_factory_name, r);
						return t || (t = function(t) {
							return void 0 === t && (t = {}), {
								create: function() {
									return o(e, t, arguments)
								}
							}
						}, r[e.__dashjs_factory_name] = t), t
					},
					getClassFactoryByName: function(e) {
						return i(e, r)
					},
					updateClassFactory: function(e, t) {
						a(e, t, r)
					}
				}
			}();
			t.default = r
		},
		"./node_modules/dashjs/build/es5/src/core/Settings.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				s = l(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = l(n("./node_modules/dashjs/build/es5/src/core/Utils.js")),
				a = l(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				o = l(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				u = n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js");

			function l(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function d(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function c() {
				var e, t, n = {
						debug: {
							logLevel: a.default.LOG_LEVEL_WARNING,
							dispatchEvent: !1
						},
						streaming: {
							metricsMaxListDepth: 1e3,
							abandonLoadTimeout: 1e4,
							liveDelayFragmentCount: NaN,
							liveDelay: null,
							scheduleWhilePaused: !0,
							fastSwitchEnabled: !1,
							flushBufferAtTrackSwitch: !1,
							calcSegmentAvailabilityRangeFromTimeline: !1,
							reuseExistingSourceBuffers: !0,
							bufferPruningInterval: 10,
							bufferToKeep: 20,
							jumpGaps: !0,
							jumpLargeGaps: !0,
							smallGapLimit: 1.5,
							stableBufferTime: 12,
							bufferTimeAtTopQuality: 30,
							bufferTimeAtTopQualityLongForm: 60,
							longFormContentDurationThreshold: 600,
							wallclockTimeUpdateInterval: 50,
							lowLatencyEnabled: !1,
							keepProtectionMediaKeys: !1,
							useManifestDateHeaderTimeSource: !0,
							useSuggestedPresentationDelay: !0,
							useAppendWindow: !0,
							manifestUpdateRetryInterval: 100,
							stallThreshold: .5,
							liveCatchup: {
								minDrift: .02,
								maxDrift: 0,
								playbackRate: .5,
								latencyThreshold: 60,
								playbackBufferMin: .5,
								enabled: !1,
								mode: o.default.LIVE_CATCHUP_MODE_DEFAULT
							},
							lastBitrateCachingInfo: {
								enabled: !0,
								ttl: 36e4
							},
							lastMediaSettingsCachingInfo: {
								enabled: !0,
								ttl: 36e4
							},
							cacheLoadThresholds: {
								video: 50,
								audio: 5
							},
							trackSwitchMode: {
								audio: o.default.TRACK_SWITCH_MODE_ALWAYS_REPLACE,
								video: o.default.TRACK_SWITCH_MODE_NEVER_REPLACE
							},
							selectionModeForInitialTrack: o.default.TRACK_SELECTION_MODE_HIGHEST_BITRATE,
							fragmentRequestTimeout: 0,
							retryIntervals: (e = {}, d(e, u.HTTPRequest.MPD_TYPE, 500), d(e, u.HTTPRequest.XLINK_EXPANSION_TYPE, 500), d(e, u.HTTPRequest.MEDIA_SEGMENT_TYPE, 1e3), d(e, u.HTTPRequest.INIT_SEGMENT_TYPE, 1e3), d(e, u.HTTPRequest.BITSTREAM_SWITCHING_SEGMENT_TYPE, 1e3), d(e, u.HTTPRequest.INDEX_SEGMENT_TYPE, 1e3), d(e, u.HTTPRequest.OTHER_TYPE, 1e3), d(e, "lowLatencyReductionFactor", 10), e),
							retryAttempts: (t = {}, d(t, u.HTTPRequest.MPD_TYPE, 3), d(t, u.HTTPRequest.XLINK_EXPANSION_TYPE, 1), d(t, u.HTTPRequest.MEDIA_SEGMENT_TYPE, 3), d(t, u.HTTPRequest.INIT_SEGMENT_TYPE, 3), d(t, u.HTTPRequest.BITSTREAM_SWITCHING_SEGMENT_TYPE, 3), d(t, u.HTTPRequest.INDEX_SEGMENT_TYPE, 3), d(t, u.HTTPRequest.OTHER_TYPE, 3), d(t, "lowLatencyMultiplyFactor", 5), t),
							abr: {
								movingAverageMethod: o.default.MOVING_AVERAGE_SLIDING_WINDOW,
								ABRStrategy: o.default.ABR_STRATEGY_DYNAMIC,
								bandwidthSafetyFactor: .9,
								useDefaultABRRules: !0,
								useDeadTimeLatency: !0,
								limitBitrateByPortal: !1,
								usePixelRatioInLimitBitrateByPortal: !1,
								maxBitrate: {
									audio: -1,
									video: -1
								},
								minBitrate: {
									audio: -1,
									video: -1
								},
								maxRepresentationRatio: {
									audio: 1,
									video: 1
								},
								initialBitrate: {
									audio: -1,
									video: -1
								},
								initialRepresentationRatio: {
									audio: -1,
									video: -1
								},
								autoSwitchBitrate: {
									audio: !0,
									video: !0
								},
								fetchThroughputCalculationMode: o.default.ABR_FETCH_THROUGHPUT_CALCULATION_DOWNLOADED_DATA
							},
							cmcd: {
								enabled: !1,
								sid: null,
								cid: null
							}
						}
					},
					s = i.default.clone(n);
				return {
					get: function() {
						return s
					},
					update: function(e) {
						"object" === (void 0 === e ? "undefined" : r(e)) && function e(t, n, s) {
							for (var a in t) t.hasOwnProperty(a) && n.hasOwnProperty(a) && ("object" === r(t[a]) && null !== t[a] ? e(t[a], n[a], s.slice() + a + ".") : n[a] = i.default.clone(t[a]))
						}(e, s, "")
					},
					reset: function() {
						s = i.default.clone(n)
					}
				}
			}
			c.__dashjs_factory_name = "Settings";
			var f = s.default.getSingletonFactory(c);
			t.default = f
		},
		"./node_modules/dashjs/build/es5/src/core/Utils.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				s = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
						}
					}
					return function(t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t
					}
				}();
			var i = function() {
				function e() {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e)
				}
				return s(e, null, [{
					key: "mixin",
					value: function(t, n, s) {
						var i = void 0,
							a = {};
						if (t)
							for (var o in n) n.hasOwnProperty(o) && (i = n[o], o in t && (t[o] === i || o in a && a[o] === i) || ("object" === r(t[o]) && null !== t[o] ? t[o] = e.mixin(t[o], i, s) : t[o] = s(i)));
						return t
					}
				}, {
					key: "clone",
					value: function(t) {
						if (!t || "object" !== (void 0 === t ? "undefined" : r(t))) return t;
						var n = void 0;
						if (t instanceof Array) {
							n = [];
							for (var s = 0, i = t.length; s < i; ++s) s in t && n.push(e.clone(t[s]))
						} else n = {};
						return e.mixin(n, t, e.clone)
					}
				}, {
					key: "addAditionalQueryParameterToUrl",
					value: function(e, t) {
						try {
							if (!t || 0 === t.length) return e;
							var n = new URL(e);
							return t.forEach((function(e) {
								e.key && e.value && n.searchParams.set(e.key, e.value)
							})), n.href
						} catch (r) {
							return e
						}
					}
				}, {
					key: "generateUuid",
					value: function() {
						var e = (new Date).getTime();
						return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
							var n = (e + 16 * Math.random()) % 16 | 0;
							return e = Math.floor(e / 16), ("x" == t ? n : 3 & n | 8).toString(16)
						}))
					}
				}, {
					key: "generateHashCode",
					value: function(e) {
						var t = 0;
						if (0 === e.length) return t;
						for (var n = 0; n < e.length; n++) {
							t = (t << 5) - t + e.charCodeAt(n), t |= 0
						}
						return t
					}
				}]), e
			}();
			t.default = i
		},
		"./node_modules/dashjs/build/es5/src/core/Version.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.getVersionString = function() {
				return r
			};
			var r = "3.2.0"
		},
		"./node_modules/dashjs/build/es5/src/core/errors/Errors.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/core/errors/ErrorsBase.js");
			var i = new(function(e) {
				function t() {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					var e = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
					return e.MANIFEST_LOADER_PARSING_FAILURE_ERROR_CODE = 10, e.MANIFEST_LOADER_LOADING_FAILURE_ERROR_CODE = 11, e.XLINK_LOADER_LOADING_FAILURE_ERROR_CODE = 12, e.SEGMENTS_UPDATE_FAILED_ERROR_CODE = 13, e.SEGMENTS_UNAVAILABLE_ERROR_CODE = 14, e.SEGMENT_BASE_LOADER_ERROR_CODE = 15, e.TIME_SYNC_FAILED_ERROR_CODE = 16, e.FRAGMENT_LOADER_LOADING_FAILURE_ERROR_CODE = 17, e.FRAGMENT_LOADER_NULL_REQUEST_ERROR_CODE = 18, e.URL_RESOLUTION_FAILED_GENERIC_ERROR_CODE = 19, e.APPEND_ERROR_CODE = 20, e.REMOVE_ERROR_CODE = 21, e.DATA_UPDATE_FAILED_ERROR_CODE = 22, e.CAPABILITY_MEDIASOURCE_ERROR_CODE = 23, e.CAPABILITY_MEDIAKEYS_ERROR_CODE = 24, e.DOWNLOAD_ERROR_ID_MANIFEST_CODE = 25, e.DOWNLOAD_ERROR_ID_SIDX_CODE = 26, e.DOWNLOAD_ERROR_ID_CONTENT_CODE = 27, e.DOWNLOAD_ERROR_ID_INITIALIZATION_CODE = 28, e.DOWNLOAD_ERROR_ID_XLINK_CODE = 29, e.MANIFEST_ERROR_ID_CODEC_CODE = 30, e.MANIFEST_ERROR_ID_PARSE_CODE = 31, e.MANIFEST_ERROR_ID_NOSTREAMS_CODE = 32, e.TIMED_TEXT_ERROR_ID_PARSE_CODE = 33, e.MANIFEST_ERROR_ID_MULTIPLEXED_CODE = 34, e.MEDIASOURCE_TYPE_UNSUPPORTED_CODE = 35, e.MANIFEST_LOADER_PARSING_FAILURE_ERROR_MESSAGE = "parsing failed for ", e.MANIFEST_LOADER_LOADING_FAILURE_ERROR_MESSAGE = "Failed loading manifest: ", e.XLINK_LOADER_LOADING_FAILURE_ERROR_MESSAGE = "Failed loading Xlink element: ", e.SEGMENTS_UPDATE_FAILED_ERROR_MESSAGE = "Segments update failed", e.SEGMENTS_UNAVAILABLE_ERROR_MESSAGE = "no segments are available yet", e.SEGMENT_BASE_LOADER_ERROR_MESSAGE = "error loading segments", e.TIME_SYNC_FAILED_ERROR_MESSAGE = "Failed to synchronize time", e.FRAGMENT_LOADER_NULL_REQUEST_ERROR_MESSAGE = "request is null", e.URL_RESOLUTION_FAILED_GENERIC_ERROR_MESSAGE = "Failed to resolve a valid URL", e.APPEND_ERROR_MESSAGE = "chunk is not defined", e.REMOVE_ERROR_MESSAGE = "buffer is not defined", e.DATA_UPDATE_FAILED_ERROR_MESSAGE = "Data update failed", e.CAPABILITY_MEDIASOURCE_ERROR_MESSAGE = "mediasource is not supported", e.CAPABILITY_MEDIAKEYS_ERROR_MESSAGE = "mediakeys is not supported", e.TIMED_TEXT_ERROR_MESSAGE_PARSE = "parsing error :", e.MEDIASOURCE_TYPE_UNSUPPORTED_MESSAGE = "Error creating source buffer of type : ", e
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
			}(((r = s) && r.__esModule ? r : {
				default: r
			}).default));
			t.default = i
		},
		"./node_modules/dashjs/build/es5/src/core/errors/ErrorsBase.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}();
			var s = function() {
				function e() {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e)
				}
				return r(e, [{
					key: "extend",
					value: function(e, t) {
						if (e) {
							var n = !!t && t.override,
								r = !!t && t.publicOnly;
							for (var s in e) !e.hasOwnProperty(s) || this[s] && !n || r && -1 === e[s].indexOf("public_") || (this[s] = e[s])
						}
					}
				}]), e
			}();
			t.default = s
		},
		"./node_modules/dashjs/build/es5/src/core/events/CoreEvents.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/core/events/EventsBase.js");
			var i = function(e) {
				function t() {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					var e = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
					return e.BUFFERING_COMPLETED = "bufferingCompleted", e.BUFFER_CLEARED = "bufferCleared", e.BUFFER_LEVEL_UPDATED = "bufferLevelUpdated", e.BYTES_APPENDED = "bytesAppended", e.BYTES_APPENDED_END_FRAGMENT = "bytesAppendedEndFragment", e.CHECK_FOR_EXISTENCE_COMPLETED = "checkForExistenceCompleted", e.CURRENT_TRACK_CHANGED = "currentTrackChanged", e.DATA_UPDATE_COMPLETED = "dataUpdateCompleted", e.DATA_UPDATE_STARTED = "dataUpdateStarted", e.INBAND_EVENTS = "inbandEvents", e.INITIALIZATION_LOADED = "initializationLoaded", e.INIT_FRAGMENT_LOADED = "initFragmentLoaded", e.INIT_FRAGMENT_NEEDED = "initFragmentNeeded", e.INTERNAL_MANIFEST_LOADED = "internalManifestLoaded", e.ORIGINAL_MANIFEST_LOADED = "originalManifestLoaded", e.LIVE_EDGE_SEARCH_COMPLETED = "liveEdgeSearchCompleted", e.LOADING_COMPLETED = "loadingCompleted", e.LOADING_PROGRESS = "loadingProgress", e.LOADING_DATA_PROGRESS = "loadingDataProgress", e.LOADING_ABANDONED = "loadingAborted", e.MANIFEST_UPDATED = "manifestUpdated", e.MEDIA_FRAGMENT_LOADED = "mediaFragmentLoaded", e.MEDIA_FRAGMENT_NEEDED = "mediaFragmentNeeded", e.QUOTA_EXCEEDED = "quotaExceeded", e.REPRESENTATION_UPDATE_STARTED = "representationUpdateStarted", e.REPRESENTATION_UPDATE_COMPLETED = "representationUpdateCompleted", e.SEGMENTS_LOADED = "segmentsLoaded", e.SERVICE_LOCATION_BLACKLIST_ADD = "serviceLocationBlacklistAdd", e.SERVICE_LOCATION_BLACKLIST_CHANGED = "serviceLocationBlacklistChanged", e.SOURCEBUFFER_REMOVE_COMPLETED = "sourceBufferRemoveCompleted", e.STREAMS_COMPOSED = "streamsComposed", e.STREAM_BUFFERING_COMPLETED = "streamBufferingCompleted", e.STREAM_COMPLETED = "streamCompleted", e.TEXT_TRACKS_QUEUE_INITIALIZED = "textTracksQueueInitialized", e.TIME_SYNCHRONIZATION_COMPLETED = "timeSynchronizationComplete", e.URL_RESOLUTION_FAILED = "urlResolutionFailed", e.VIDEO_CHUNK_RECEIVED = "videoChunkReceived", e.WALLCLOCK_TIME_UPDATED = "wallclockTimeUpdated", e.XLINK_ELEMENT_LOADED = "xlinkElementLoaded", e.XLINK_READY = "xlinkReady", e.SEGMENTBASE_INIT_REQUEST_NEEDED = "segmentBaseInitRequestNeeded", e.SEGMENTBASE_SEGMENTSLIST_REQUEST_NEEDED = "segmentBaseSegmentsListRequestNeeded", e.SEEK_TARGET = "seekTarget", e
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
			}(((r = s) && r.__esModule ? r : {
				default: r
			}).default);
			t.default = i
		},
		"./node_modules/dashjs/build/es5/src/core/events/Events.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/core/events/CoreEvents.js");
			var i = new(function(e) {
				function t() {
					return function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t),
						function(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
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
			}(((r = s) && r.__esModule ? r : {
				default: r
			}).default));
			t.default = i
		},
		"./node_modules/dashjs/build/es5/src/core/events/EventsBase.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}();
			var s = function() {
				function e() {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e)
				}
				return r(e, [{
					key: "extend",
					value: function(e, t) {
						if (e) {
							var n = !!t && t.override,
								r = !!t && t.publicOnly;
							for (var s in e) !e.hasOwnProperty(s) || this[s] && !n || r && -1 === e[s].indexOf("public_") || (this[s] = e[s])
						}
					}
				}]), e
			}();
			t.default = s
		},
		"./node_modules/dashjs/build/es5/src/dash/DashAdapter.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = c(n("./node_modules/dashjs/build/es5/src/dash/constants/DashConstants.js")),
				s = c(n("./node_modules/dashjs/build/es5/src/dash/vo/RepresentationInfo.js")),
				i = c(n("./node_modules/dashjs/build/es5/src/dash/vo/MediaInfo.js")),
				a = c(n("./node_modules/dashjs/build/es5/src/dash/vo/StreamInfo.js")),
				o = c(n("./node_modules/dashjs/build/es5/src/dash/vo/ManifestInfo.js")),
				u = c(n("./node_modules/dashjs/build/es5/src/dash/vo/Event.js")),
				l = c(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				d = c(n("./node_modules/dashjs/build/es5/src/dash/models/DashManifestModel.js"));

			function c(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function f() {
				var e, t = void 0,
					n = void 0,
					l = void 0,
					c = void 0,
					f = void 0,
					h = void 0,
					m = this.context,
					g = "urn:dvb:dash:profile:dvb-dash:2014";

				function _(e, s, i) {
					var a, o = t.getAdaptationsForType(n[0].mpd.manifest, e, s);
					if (!o || 0 === o.length) return null;
					if (o.length > 1 && i) {
						var u = E(i, s);
						if (c[i.id] && c[i.id][s])
							for (var l = 0, d = o.length; l < d; l++)
								if (p(c[i.id][s], u[l])) return o[l];
						for (var f = 0, h = o.length; f < h; f++)
							if (a = o[f], t.getRolesForAdaptation(a).filter((function(e) {
									return e.value === r.default.MAIN
								}))[0]) return o[f]
					}
					return o[0]
				}

				function p(e, t) {
					if (!e || !t) return !1;
					var n = e.id === t.id,
						r = e.viewpoint === t.viewpoint,
						s = e.lang === t.lang,
						i = e.roles.toString() === t.roles.toString(),
						a = e.accessibility.toString() === t.accessibility.toString(),
						o = e.audioChannelConfiguration.toString() === t.audioChannelConfiguration.toString();
					return n && r && s && i && a && o
				}

				function E(e, r, s) {
					var i, a = n,
						o = s,
						u = [],
						d = void 0,
						c = void 0,
						h = void 0,
						m = void 0,
						g = void 0,
						_ = void 0;
					if (o) C(), a = v(o);
					else {
						if (!(n.length > 0)) return u;
						o = n[0].mpd.manifest
					}
					var p = A(e, a);
					p && (_ = p.id);
					var E = t.getAdaptationsForType(o, e ? e.index : null, r !== f.EMBEDDED_TEXT ? r : f.VIDEO);
					if (!E || 0 === E.length) return u;
					for (l[_] = l[_] || t.getAdaptationsForPeriod(p), m = 0, i = E.length; m < i; m++)
						if (d = E[m], h = t.getIndexForAdaptation(d, o, e.index), c = I(l[_][h]), r === f.EMBEDDED_TEXT) {
							var y = c.accessibility.length;
							for (g = 0; g < y; g++)
								if (c) {
									var T = c.accessibility[g];
									if (0 === T.indexOf("cea-608:")) {
										var b = T.substring(8).split(";");
										if ("CC" === b[0].substring(0, 2))
											for (g = 0; g < b.length; g++) c || (c = I.call(this, l[_][h])), R(c, b[g].substring(0, 3), b[g].substring(4)), u.push(c), c = null;
										else
											for (g = 0; g < b.length; g++) c || (c = I.call(this, l[_][h])), R(c, "CC" + (g + 1), b[g]), u.push(c), c = null
									} else 0 === T.indexOf("cea-608") && (R(c, f.CC1, "eng"), u.push(c), c = null)
								}
						} else r === f.IMAGE ? (c.type = f.IMAGE, u.push(c), c = null) : c && u.push(c);
					return u
				}

				function v(e) {
					var n = y(e);
					return t.getRegularPeriods(n)
				}

				function y(e) {
					var n = b(e);
					return t.getMpd(n)
				}

				function T() {
					n = [], l = {}, c = {}
				}

				function b(e) {
					return e || (n.length > 0 ? n[0].mpd.manifest : null)
				}

				function S(e) {
					return e && e.streamInfo && void 0 !== e.streamInfo.id && l[e.streamInfo.id] ? l[e.streamInfo.id][e.index] : null
				}

				function A(e, t) {
					for (var n = t.length, r = 0; r < n; r++) {
						var s = t[r];
						if (e && e.id === s.id) return s
					}
					return null
				}

				function I(e) {
					if (!e) return null;
					var n, r = new i.default,
						s = e.period.mpd.manifest.Period_asArray[e.period.index].AdaptationSet_asArray[e.index];
					return r.id = e.id, r.index = e.index, r.type = e.type, r.streamInfo = M(e.period), r.representationCount = t.getRepresentationCount(s), r.labels = t.getLabelsForAdaptation(s), r.lang = t.getLanguageForAdaptation(s), n = t.getViewpointForAdaptation(s), r.viewpoint = n ? n.value : void 0, r.accessibility = t.getAccessibilityForAdaptation(s).map((function(e) {
						var t = e.value,
							n = t;
						return e.schemeIdUri && e.schemeIdUri.search("cea-608") >= 0 && void 0 !== h && (n = t ? "cea-608:" + t : "cea-608", r.embeddedCaptions = !0), n
					})), r.audioChannelConfiguration = t.getAudioChannelConfigurationForAdaptation(s).map((function(e) {
						return e.value
					})), 0 === r.audioChannelConfiguration.length && Array.isArray(s.Representation_asArray) && s.Representation_asArray.length > 0 && (r.audioChannelConfiguration = t.getAudioChannelConfigurationForRepresentation(s.Representation_asArray[0]).map((function(e) {
						return e.value
					}))), r.roles = t.getRolesForAdaptation(s).map((function(e) {
						return e.value
					})), r.codec = t.getCodec(s), r.mimeType = t.getMimeType(s), r.contentProtection = t.getContentProtectionData(s), r.bitrateList = t.getBitrateListForAdaptation(s), r.contentProtection && r.contentProtection.forEach((function(e) {
						e.KID = t.getKID(e)
					})), r.isText = t.getIsTextTrack(r.mimeType), r.supplementalProperties = t.getSupplementalPropperties(s), r
				}

				function R(e, t, n) {
					e.id = t, e.index = 100 + parseInt(t.substring(2, 3)), e.type = f.EMBEDDED_TEXT, e.codec = "cea-608-in-SEI", e.isText = !0, e.isEmbedded = !0, e.lang = n, e.roles = ["caption"]
				}

				function M(e) {
					var n, r, s = new a.default;
					return s.id = e.id, s.index = e.index, s.start = e.start, s.duration = e.duration, s.manifestInfo = (n = e.mpd, (r = new o.default).DVRWindowSize = n.timeShiftBufferDepth, r.loadedTime = n.manifest.loadedTime, r.availableFrom = n.availabilityStartTime, r.minBufferTime = n.manifest.minBufferTime, r.maxFragmentDuration = n.maxSegmentDuration, r.duration = t.getDuration(n.manifest), r.isDynamic = t.getIsDynamic(n.manifest), r.serviceDescriptions = t.getServiceDescriptions(n.manifest), r.protocol = n.manifest.protocol, r), s.isLast = 1 === e.mpd.manifest.Period_asArray.length || Math.abs(s.start + s.duration - s.manifestInfo.duration) < 1, s
				}

				function C() {
					if (!f) throw new Error("setConfig function has to be called previously")
				}

				function D(e) {
					return n.length > 0 ? n[0].mpd.manifest.Period_asArray[e] : null
				}

				function N(e, t, n) {
					var r = void 0,
						s = void 0,
						i = void 0,
						a = void 0,
						o = void 0;
					if (e)
						for (r = e.AdaptationSet_asArray, a = 0; a < r.length; a += 1)
							for (i = r[a].Representation_asArray, o = 0; o < i.length; o += 1)
								if (t === (s = i[o]).id) return n ? o : s;
					return null
				}
				return e = {
					getBandwidthForRepresentation: function(e, t) {
						var n;
						return (n = N(D(t), e)) ? n.bandwidth : null
					},
					getIndexForRepresentation: function(e, t) {
						return function(e, t) {
							var n = N(e, t, !0);
							return null !== n ? n : -1
						}(D(t), e)
					},
					getMaxIndexForBufferType: function(e, n) {
						return function(e, n) {
							var r, s = void 0,
								i = void 0,
								a = void 0;
							if (!e || !n) return -1;
							for (r = e.AdaptationSet_asArray, a = 0; a < r.length; a += 1)
								if (s = r[a], i = s.Representation_asArray, t.getIsTypeOf(s, n)) return i.length;
							return -1
						}(D(n), e)
					},
					convertDataToRepresentationInfo: function(e) {
						if (e) {
							var n = new s.default,
								r = e.adaptation.period.mpd.manifest.Period_asArray[e.adaptation.period.index].AdaptationSet_asArray[e.adaptation.index],
								i = t.getRepresentationFor(e.index, r);
							return n.id = e.id, n.quality = e.index, n.bandwidth = t.getBandwidth(i), n.DVRWindow = e.segmentAvailabilityRange, n.fragmentDuration = e.segmentDuration || (e.segments && e.segments.length > 0 ? e.segments[0].duration : NaN), n.MSETimeOffset = e.MSETimeOffset, n.mediaInfo = I(e.adaptation), n
						}
						return null
					},
					getDataForMedia: S,
					getStreamsInfo: function(e, t) {
						var r = [],
							s = n;
						if (e && (C(), s = v(e)), s.length > 0) {
							(!t || t > s.length) && (t = s.length);
							for (var i = 0; i < t; i++) r.push(M(s[i]))
						}
						return r
					},
					getMediaInfoForType: function(e, r) {
						if (0 === n.length || !e) return null;
						var s = A(e, n);
						if (!s) return null;
						var i = s.id;
						l[i] = l[i] || t.getAdaptationsForPeriod(s);
						var a = _(e.index, r, e);
						if (!a) return null;
						var o = t.getIndexForAdaptation(a, n[0].mpd.manifest, e.index);
						return I(l[i][o])
					},
					getAllMediaInfoForType: E,
					getAdaptationForType: _,
					getRealAdaptation: function(e, r) {
						var s, i = void 0,
							a = A(e, n);
						return s = r ? r.id : null, n.length > 0 && a && (i = s ? t.getAdaptationForId(s, n[0].mpd.manifest, a.index) : t.getAdaptationForIndex(r ? r.index : null, n[0].mpd.manifest, a.index)), i
					},
					getVoRepresentations: function(e) {
						var n = S(e);
						return t.getRepresentationsForAdaptation(n)
					},
					getEventsFor: function(e, r) {
						var o = [];
						if (n.length > 0) {
							var u = n[0].mpd.manifest;
							e instanceof a.default ? o = t.getEventsForPeriod(A(e, n)) : e instanceof i.default ? o = t.getEventStreamForAdaptationSet(u, S(e)) : e instanceof s.default && (o = t.getEventStreamForRepresentation(u, r))
						}
						return o
					},
					getEvent: function(e, t, n, r) {
						try {
							if (!e || !t || isNaN(n) || !r) return null;
							var s = new u.default,
								i = e.scheme_id_uri,
								a = e.value,
								o = e.timescale || 1,
								l = r.presentationTimeOffset || 0,
								d = r.adaptation.period.start,
								c = e.presentation_time_delta / o,
								f = void 0;
							f = 0 === e.version ? d + n - l + c : d - l + c;
							var h = e.event_duration,
								m = e.id,
								g = e.message_data;
							return t[i + "/" + a] ? (s.eventStream = t[i + "/" + a], s.eventStream.value = a, s.eventStream.timescale = o, s.duration = h, s.id = m, s.calculatedPresentationTime = f, s.messageData = g, s.presentationTimeDelta = c, s) : null
						} catch (_) {
							return null
						}
					},
					getMpd: y,
					setConfig: function(e) {
						e && (e.constants && (f = e.constants), e.cea608parser && (h = e.cea608parser), e.errHandler && t.setConfig({
							errHandler: e.errHandler
						}), e.BASE64 && t.setConfig({
							BASE64: e.BASE64
						}))
					},
					updatePeriods: function(e) {
						if (!e) return null;
						C(), n = v(e), l = {}
					},
					getIsTextTrack: function(e) {
						return t.getIsTextTrack(e)
					},
					getUTCTimingSources: function() {
						var e = b();
						return t.getUTCTimingSources(e)
					},
					getSuggestedPresentationDelay: function() {
						var e = n.length > 0 ? n[0].mpd : null;
						return t.getSuggestedPresentationDelay(e)
					},
					getAvailabilityStartTime: function(e) {
						var n = y(e);
						return t.getAvailabilityStartTime(n)
					},
					getIsDynamic: function(e) {
						var n = b(e);
						return t.getIsDynamic(n)
					},
					getDuration: function(e) {
						var n = b(e);
						return t.getDuration(n)
					},
					getRegularPeriods: v,
					getLocation: function(e) {
						return t.getLocation(e)
					},
					getManifestUpdatePeriod: function(e) {
						var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
						return t.getManifestUpdatePeriod(e, n)
					},
					getIsDVB: function(e) {
						return t.hasProfile(e, g)
					},
					getBaseURLsFromElement: function(e) {
						return t.getBaseURLsFromElement(e)
					},
					getRepresentationSortFunction: function() {
						return t.getRepresentationSortFunction()
					},
					getCodec: function(e, n, r) {
						return t.getCodec(e, n, r)
					},
					getVoAdaptations: function() {
						return l
					},
					getVoPeriods: function() {
						return n
					},
					getPeriodById: function(e) {
						if (!e || 0 === n.length) return null;
						var t = n.filter((function(t) {
							return t.id === e
						}));
						return t && t.length > 0 ? t[0] : null
					},
					setCurrentMediaInfo: function(e, t, n) {
						c[e] = c[e] || {}, c[e][t] = c[e][t] || {}, c[e][t] = n
					},
					reset: T
				}, t = (0, d.default)(m).getInstance(), T(), e
			}
			f.__dashjs_factory_name = "DashAdapter", t.default = l.default.getSingletonFactory(f)
		},
		"./node_modules/dashjs/build/es5/src/dash/DashHandler.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = u(n("./node_modules/dashjs/build/es5/src/streaming/vo/FragmentRequest.js")),
				s = n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js"),
				i = u(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				a = n("./node_modules/dashjs/build/es5/src/dash/utils/SegmentsUtils.js"),
				o = u(n("./node_modules/dashjs/build/es5/src/dash/controllers/SegmentsController.js"));

			function u(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function l(e) {
				e = e || {};
				var t = this.context,
					n = e.eventBus,
					i = e.events,
					u = e.debug,
					l = e.dashConstants,
					d = e.urlUtils,
					c = e.type,
					f = e.streamInfo,
					h = e.timelineConverter,
					m = e.dashMetrics,
					g = e.baseURLController,
					_ = void 0,
					p = void 0,
					E = void 0,
					v = void 0,
					y = void 0,
					T = void 0,
					b = void 0,
					S = void 0,
					A = void 0;

				function I() {
					return c
				}

				function R() {
					E = -1, v = null
				}

				function M() {
					R(), y = null, A = null, S = null
				}

				function C(e, t, n) {
					var r = g.resolve(n.path),
						s = void 0,
						i = void 0;
					return r && t !== r.url && d.isRelative(t) ? (s = r.url, i = r.serviceLocation, t && (s = d.resolve(t, s))) : s = t, !d.isRelative(s) && (e.url = s, e.serviceLocation = i, !0)
				}

				function D(e) {
					var t, r, s;
					t = e.representation, r = t.hasInitialization(), s = t.hasSegments(), r && s ? n.trigger(i.REPRESENTATION_UPDATE_COMPLETED, {
						representation: t
					}, {
						streamId: f.id,
						mediaType: c
					}) : A.update(t, S, r, s)
				}

				function N(e, t) {
					if (null == t) return null;
					var n = new r.default,
						i = t.representation,
						o = i.adaptation.period.mpd.manifest.Period_asArray[i.adaptation.period.index].AdaptationSet_asArray[i.adaptation.index].Representation_asArray[i.index].bandwidth,
						u = t.media;
					return u = (0, a.replaceTokenForTemplate)(u, "Number", t.replacementNumber), u = (0, a.replaceTokenForTemplate)(u, "Time", t.replacementTime), u = (0, a.replaceTokenForTemplate)(u, "Bandwidth", o), u = (0, a.replaceIDForTemplate)(u, i.id), u = (0, a.unescapeDollarsInTemplate)(u), n.mediaType = I(), n.type = s.HTTPRequest.MEDIA_SEGMENT_TYPE, n.range = t.mediaRange, n.startTime = t.presentationStartTime, n.mediaStartTime = t.mediaStartTime, n.duration = t.duration, n.timescale = i.timescale, n.availabilityStartTime = t.availabilityStartTime, n.availabilityEndTime = t.availabilityEndTime, n.wallStartTime = t.wallStartTime, n.quality = i.index, n.index = t.availabilityIdx, n.mediaInfo = e, n.adaptationIndex = i.adaptation.index, n.representationId = i.id, C(n, u, i) ? n : void 0
				}

				function O(e) {
					var t = !1;
					if (!e) return t;
					if (T) {
						if (b) t = !0;
						else if (v) {
							var n = parseFloat((v.presentationStartTime - e.adaptation.period.start).toFixed(5));
							t = (v.duration > 0 ? n + 1.5 * v.duration : n) >= e.adaptation.period.duration
						}
					} else E >= e.availableSegmentsNumber && (t = !0);
					return t
				}

				function j(e) {
					var t = e.representation;
					t.segments && n.trigger(i.REPRESENTATION_UPDATE_COMPLETED, {
						representation: t
					}, {
						streamId: f.id,
						mediaType: c
					})
				}

				function w(e) {
					if (!e.error) {
						var t, r = e.segments,
							s = e.representation,
							o = [],
							u = 0,
							l = void 0,
							d = void 0,
							g = void 0;
						for (l = 0, t = r ? r.length : 0; l < t; l++) d = r[l], (g = (0, a.getTimeBasedSegment)(h, T, s, d.startTime, d.duration, d.timescale, d.media, d.mediaRange, u)) && (o.push(g), g = null, u++);
						if (o.length > 0)
							if (s.segmentAvailabilityRange = {
									start: o[0].presentationStartTime,
									end: o[o.length - 1].presentationStartTime
								}, s.availableSegmentsNumber = o.length, s.segments = o, T) ! function(e) {
								h.setExpectedLiveEdge(e), m.updateManifestUpdateInfo({
									presentationStartTime: e
								})
							}(o[o.length - 1].presentationStartTime - 8);
						s.hasInitialization() && n.trigger(i.REPRESENTATION_UPDATE_COMPLETED, {
							representation: s
						}, {
							streamId: f.id,
							mediaType: c
						})
					}
				}

				function P() {
					p.debug("Dynamic stream complete"), b = !0
				}
				return _ = {
					initialize: function(e) {
						T = e, b = !1, A.initialize(e)
					},
					getStreamId: function() {
						return f.id
					},
					getType: I,
					getStreamInfo: function() {
						return f
					},
					getInitRequest: function(e, t) {
						return t ? function(e, t, n) {
							var i = new r.default,
								o = t.adaptation.period,
								u = o.start;
							if (i.mediaType = n, i.type = s.HTTPRequest.INIT_SEGMENT_TYPE, i.range = t.range, i.availabilityStartTime = h.calcAvailabilityStartTimeFromPresentationTime(u, o.mpd, T), i.availabilityEndTime = h.calcAvailabilityEndTimeFromPresentationTime(u + o.duration, o.mpd, T), i.quality = t.index, i.mediaInfo = e, i.representationId = t.id, C(i, t.initialization, t)) return i.url = (0, a.replaceTokenForTemplate)(i.url, "Bandwidth", t.bandwidth), i
						}(e, t, I()) : null
					},
					getRequestForSegment: N,
					getSegmentRequestForTime: function(e, t, n, s) {
						var i = null;
						if (!t || !t.segmentInfoType) return i;
						var a = E,
							o = !!s && s.keepIdx,
							u = !(!s || !s.ignoreIsFinished);
						y !== n && (y = n, p.debug("Getting the request for time : " + n));
						var d = A.getSegmentByTime(t, n);
						return d ? (E = d.availabilityIdx, v = d, p.debug("Index for time " + n + " is " + E), i = N(e, d)) : !u && O(t) && ((i = new r.default).action = r.default.ACTION_COMPLETE, i.index = E - 1, i.mediaType = c, i.mediaInfo = e, p.debug("Signal complete in getSegmentRequestForTime")), o && a >= 0 && (E = t.segmentInfoType === l.SEGMENT_TIMELINE && T ? E : a), i
					},
					getNextSegmentRequest: function(e, t) {
						var n = null;
						if (!t || !t.segmentInfoType) return null;
						y = null;
						var s = E + 1;
						p.debug("Getting the next request at index: " + s);
						var i = A.getSegmentByIndex(t, s, v ? v.mediaStartTime : -1);
						return i || ! function(e) {
							return !isFinite(e.adaptation.period.duration)
						}(t) || b ? (i ? (n = N(e, i), E = i.availabilityIdx) : E = T ? s - 1 : s, i ? v = i : O(t) && ((n = new r.default).action = r.default.ACTION_COMPLETE, n.index = E - 1, n.mediaType = I(), n.mediaInfo = e, p.debug("Signal complete")), n) : (p.debug(I() + " No segment found at index: " + s + ". Wait for next loop"), null)
					},
					setCurrentIndex: function(e) {
						E = e
					},
					getCurrentIndex: function() {
						return E
					},
					isMediaFinished: O,
					reset: function() {
						M(), n.off(i.INITIALIZATION_LOADED, j, _), n.off(i.SEGMENTS_LOADED, w, _), n.off(i.REPRESENTATION_UPDATE_STARTED, D, _), n.off(i.DYNAMIC_TO_STATIC, P, _)
					},
					resetIndex: R,
					setMimeType: function(e) {
						S = e
					}
				}, p = u.getLogger(_), M(), A = (0, o.default)(t).create(e), n.on(i.INITIALIZATION_LOADED, j, _), n.on(i.SEGMENTS_LOADED, w, _), n.on(i.REPRESENTATION_UPDATE_STARTED, D, _), n.on(i.DYNAMIC_TO_STATIC, P, _), _
			}
			l.__dashjs_factory_name = "DashHandler", t.default = i.default.getClassFactory(l)
		},
		"./node_modules/dashjs/build/es5/src/dash/DashMetrics.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = d(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				s = n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js"),
				i = d(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				a = d(n("./node_modules/dashjs/build/es5/src/streaming/constants/MetricsConstants.js")),
				o = d(n("./node_modules/dashjs/build/es5/src/dash/utils/Round10.js")),
				u = d(n("./node_modules/dashjs/build/es5/src/streaming/models/MetricsModel.js")),
				l = n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/PlayList.js");

			function d(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function c(e) {
				e = e || {};
				var t, n = this.context,
					i = void 0,
					d = void 0,
					c = void 0,
					f = e.metricsModel;

				function h(e) {
					var t = f.getMetricsFor(e, !0);
					if (!t) return null;
					var n = t.HttpList,
						r = null,
						s = void 0;
					if (!n || n.length <= 0) return null;
					for (s = n.length - 1; s >= 0;) {
						if (n[s].responsecode) {
							r = n[s];
							break
						}
						s--
					}
					return r
				}

				function m(e) {
					var t = f.getMetricsFor(e, !0);
					return t && t.HttpList ? t.HttpList : []
				}

				function g(e, t) {
					if (!e) return null;
					var n = e[t];
					return n && 0 !== n.length ? n[n.length - 1] : null
				}

				function _(e) {
					var t = {};
					if (!e) return t;
					for (var n = e.trim().split("\r\n"), r = 0, s = n.length; r < s; r++) {
						var i = n[r],
							a = i.indexOf(": ");
						a > 0 && (t[i.substring(0, a)] = i.substring(a + 2))
					}
					return t
				}
				return t = {
					getCurrentRepresentationSwitch: function(e) {
						return g(f.getMetricsFor(e, !0), a.default.TRACK_SWITCH)
					},
					getCurrentBufferState: function(e) {
						return g(f.getMetricsFor(e, !0), a.default.BUFFER_STATE)
					},
					getCurrentBufferLevel: function(e) {
						var t = g(f.getMetricsFor(e, !0), a.default.BUFFER_LEVEL);
						return t ? o.default.round10(t.level / 1e3, -3) : 0
					},
					getCurrentHttpRequest: h,
					getHttpRequests: m,
					getCurrentDroppedFrames: function() {
						return g(f.getMetricsFor(r.default.VIDEO, !0), a.default.DROPPED_FRAMES)
					},
					getCurrentSchedulingInfo: function(e) {
						return g(f.getMetricsFor(e, !0), a.default.SCHEDULING_INFO)
					},
					getCurrentDVRInfo: function(e) {
						return g(e ? f.getMetricsFor(e, !0) : f.getMetricsFor(r.default.VIDEO, !0) || f.getMetricsFor(r.default.AUDIO, !0), a.default.DVR_INFO)
					},
					getCurrentManifestUpdate: function() {
						return g(f.getMetricsFor(r.default.STREAM), a.default.MANIFEST_UPDATE)
					},
					getLatestFragmentRequestHeaderValueByID: function(e, t) {
						var n = {},
							r = h(e);
						return r && (n = _(r._responseHeaders)), void 0 === n[t] ? null : n[t]
					},
					getLatestMPDRequestHeaderValueByID: function(e) {
						var t, n = {},
							i = void 0,
							a = void 0;
						for (a = (t = m(r.default.STREAM)).length - 1; a >= 0; a--)
							if ((i = t[a]).type === s.HTTPRequest.MPD_TYPE) {
								n = _(i._responseHeaders);
								break
							} return void 0 === n[e] ? null : n[e]
					},
					addRepresentationSwitch: function(e, t, n, r, s) {
						f.addRepresentationSwitch(e, t, n, r, s)
					},
					addDVRInfo: function(e, t, n, r) {
						f.addDVRInfo(e, t, n, r)
					},
					updateManifestUpdateInfo: function(e) {
						var t = this.getCurrentManifestUpdate();
						f.updateManifestUpdateInfo(t, e)
					},
					addManifestUpdateStreamInfo: function(e) {
						if (e) {
							var t = this.getCurrentManifestUpdate();
							f.addManifestUpdateStreamInfo(t, e.id, e.index, e.start, e.duration)
						}
					},
					addManifestUpdateRepresentationInfo: function(e, t) {
						if (e) {
							var n = this.getCurrentManifestUpdate();
							f.addManifestUpdateRepresentationInfo(n, e.id, e.index, e.streamIndex, t, e.presentationTimeOffset, e.startNumber, e.fragmentInfoType)
						}
					},
					addManifestUpdate: function(e) {
						f.addManifestUpdate(r.default.STREAM, e.type, e.requestStartDate, e.requestEndDate)
					},
					addHttpRequest: function(e, t, n, r, s) {
						f.addHttpRequest(e.mediaType, null, e.type, e.url, e.quality, t, e.serviceLocation || null, e.range || null, e.requestStartDate, e.firstByteDate, e.requestEndDate, n, e.duration, r, s)
					},
					addSchedulingInfo: function(e, t) {
						f.addSchedulingInfo(e.mediaType, new Date, e.type, e.startTime, e.availabilityStartTime, e.duration, e.quality, e.range, t)
					},
					addRequestsQueue: function(e, t, n) {
						f.addRequestsQueue(e, t, n)
					},
					addBufferLevel: function(e, t, n) {
						f.addBufferLevel(e, t, n)
					},
					addBufferState: function(e, t, n) {
						f.addBufferState(e, t, n)
					},
					addDroppedFrames: function(e) {
						f.addDroppedFrames(r.default.VIDEO, e)
					},
					addPlayList: function() {
						c && (f.addPlayList(c), c = null)
					},
					addDVBErrors: function(e) {
						f.addDVBErrors(e)
					},
					createPlaylistMetrics: function(e, t) {
						(c = new l.PlayList).start = new Date, c.mstart = e, c.starttype = t
					},
					createPlaylistTraceMetrics: function(e, t, n) {
						!0 === i && (i = !1, (d = new l.PlayListTrace).representationid = e, d.start = new Date, d.mstart = t, d.playbackspeed = null !== n ? n.toString() : null)
					},
					updatePlayListTraceMetrics: function(e) {
						if (d)
							for (var t in d) d[t] = e[t]
					},
					pushPlayListTraceMetrics: function(e, t) {
						if (!1 === i && c && d && d.start) {
							var n = d.start,
								r = e.getTime() - n.getTime();
							d.duration = r, d.stopreason = t, c.trace.push(d), i = !0
						}
					},
					clearAllCurrentMetrics: function() {
						f.clearAllCurrentMetrics()
					}
				}, f = f || (0, u.default)(n).getInstance({
					settings: e.settings
				}), i = !0, d = null, c = null, t
			}
			c.__dashjs_factory_name = "DashMetrics", t.default = i.default.getSingletonFactory(c)
		},
		"./node_modules/dashjs/build/es5/src/dash/SegmentBaseLoader.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = u(n("./node_modules/dashjs/build/es5/src/dash/vo/Segment.js")),
				s = u(n("./node_modules/dashjs/build/es5/src/streaming/vo/DashJSError.js")),
				i = u(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				a = u(n("./node_modules/dashjs/build/es5/src/streaming/vo/FragmentRequest.js")),
				o = u(n("./node_modules/dashjs/build/es5/src/streaming/net/URLLoader.js"));

			function u(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function l() {
				var e = this.context,
					t = void 0,
					n = void 0,
					i = void 0,
					u = void 0,
					l = void 0,
					d = void 0,
					c = void 0,
					f = void 0,
					h = void 0,
					m = void 0,
					g = void 0,
					_ = void 0,
					p = void 0,
					E = void 0,
					v = void 0,
					y = void 0;

				function T() {
					if (!y || !y.hasOwnProperty("resolve")) throw new Error("setConfig function has to be called previously")
				}

				function b(e) {
					if (e.url) {
						var t = new a.default;
						return t.setInfo(e), t
					}
				}

				function S(e, t, n, r) {
					g.trigger(m.SEGMENTS_LOADED, {
						segments: n,
						representation: r,
						error: n ? void 0 : new s.default(_.SEGMENT_BASE_LOADER_ERROR_CODE, _.SEGMENT_BASE_LOADER_ERROR_MESSAGE)
					}, {
						streamId: e,
						mediaType: t
					})
				}
				return t = {
					setConfig: function(e) {
						e.baseURLController && (y = e.baseURLController), e.dashMetrics && (d = e.dashMetrics), e.mediaPlayerModel && (f = e.mediaPlayerModel), e.errHandler && (i = e.errHandler), e.settings && (c = e.settings), e.boxParser && (u = e.boxParser), e.events && (m = e.events), e.eventBus && (g = e.eventBus), e.debug && (n = e.debug.getLogger(t)), e.requestModifier && (l = e.requestModifier), e.errors && (_ = e.errors), e.urlUtils && (v = e.urlUtils), e.constants && (p = e.constants), e.dashConstants && (E = e.dashConstants)
					},
					initialize: function() {
						h = (0, o.default)(e).create({
							errHandler: i,
							dashMetrics: d,
							mediaPlayerModel: f,
							requestModifier: l,
							useFetch: c ? c.get().streaming.lowLatencyEnabled : null,
							boxParser: u,
							errors: _,
							urlUtils: v,
							constants: p,
							dashConstants: E
						})
					},
					loadInitialization: function e(t, r, s, i) {
						T();
						var a = null,
							o = s ? y.resolve(s.path) : null,
							l = i || {
								init: !0,
								url: o ? o.url : void 0,
								range: {
									start: 0,
									end: 1500
								},
								searching: !1,
								bytesLoaded: 0,
								bytesToLoad: 1500,
								mediaType: r
							};
						n.debug("Start searching for initialization.");
						var d = b(l);
						h.load({
							request: d,
							success: function(n) {
								l.bytesLoaded = l.range.end, (a = u.findInitRange(n)) ? (s.range = a, g.trigger(m.INITIALIZATION_LOADED, {
									representation: s
								}, {
									streamId: t,
									mediaType: r
								})) : (l.range.end = l.bytesLoaded + l.bytesToLoad, e(t, r, s, l))
							},
							error: function() {
								g.trigger(m.INITIALIZATION_LOADED, {
									representation: s
								}, {
									streamId: t,
									mediaType: r
								})
							}
						}), n.debug("Perform init search: " + l.url)
					},
					loadSegments: function e(t, s, i, a, o, l) {
						if (T(), a && (void 0 === a.start || void 0 === a.end)) {
							var d = a ? a.toString().split("-") : null;
							a = d ? {
								start: parseFloat(d[0]),
								end: parseFloat(d[1])
							} : null
						}
						o = o || S;
						var c = null,
							f = null,
							m = !!a,
							g = i ? y.resolve(i.path) : null,
							_ = {
								init: !1,
								url: g ? g.url : void 0,
								range: m ? a : {
									start: 0,
									end: 1500
								},
								searching: !m,
								bytesLoaded: l ? l.bytesLoaded : 0,
								bytesToLoad: 1500,
								mediaType: s
							},
							p = b(_);
						h.load({
							request: p,
							success: function(a) {
								var l = _.bytesToLoad,
									d = a.byteLength;
								if (_.bytesLoaded = _.range.end - _.range.start, c = u.parse(a), (f = c.getBox("sidx")) && f.isComplete) {
									var h = f.references,
										m = void 0,
										g = void 0;
									if (null != h && h.length > 0 && (m = 1 === h[0].reference_type), m) {
										n.debug("Initiate multiple SIDX load."), _.range.end = _.range.start + f.size;
										var p = void 0,
											E = void 0,
											v = void 0,
											y = void 0,
											T = [],
											b = 0,
											S = (f.offset || _.range.start) + f.size,
											A = function(e, t, n) {
												n ? (T = T.concat(n), ++b >= E && (T.sort((function(e, t) {
													return e.startTime - t.startTime < 0 ? -1 : 0
												})), o(e, t, T, i))) : o(e, t, null, i)
											};
										for (p = 0, E = h.length; p < E; p++) v = S, y = S + h[p].referenced_size - 1, S += h[p].referenced_size, e(t, s, i, {
											start: v,
											end: y
										}, A, _)
									} else n.debug("Parsing segments from SIDX. representation " + s + " - id: " + i.id + " for range : " + _.range.start + " - " + _.range.end), g = function(e, t) {
										for (var n = e.references, s = n.length, i = e.timescale, a = e.earliest_presentation_time, o = t.range.start + e.offset + e.first_offset + e.size, u = [], l = void 0, d = void 0, c = void 0, f = void 0, h = 0; h < s; h++) c = n[h].subsegment_duration, f = n[h].referenced_size, (l = new r.default).duration = c, l.startTime = a, l.timescale = i, d = o + f - 1, l.mediaRange = o + "-" + d, u.push(l), a += c, o += f;
										return u
									}(f, _), o(t, s, g, i)
								} else {
									if (f) _.range.start = f.offset || _.range.start, _.range.end = _.range.start + (f.size || l);
									else {
										if (d < _.bytesLoaded) return void o(t, s, null, i);
										var I = c.getLastBox();
										I && I.size ? (_.range.start = I.offset + I.size, _.range.end = _.range.start + l) : _.range.end += l
									}
									e(t, s, i, _.range, o, _)
								}
							},
							error: function() {
								o(t, s, null, i)
							}
						}), n.debug("Perform SIDX load: " + _.url + " with range : " + _.range.start + " - " + _.range.end)
					},
					reset: function() {
						h.abort(), h = null, i = null, u = null, l = null
					}
				}
			}
			l.__dashjs_factory_name = "SegmentBaseLoader", t.default = i.default.getSingletonFactory(l)
		},
		"./node_modules/dashjs/build/es5/src/dash/WebmSegmentBaseLoader.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = d(n("./node_modules/dashjs/build/es5/src/streaming/utils/EBMLParser.js")),
				s = d(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				i = d(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				a = d(n("./node_modules/dashjs/build/es5/src/dash/vo/Segment.js")),
				o = d(n("./node_modules/dashjs/build/es5/src/streaming/vo/FragmentRequest.js")),
				u = d(n("./node_modules/dashjs/build/es5/src/streaming/net/URLLoader.js")),
				l = d(n("./node_modules/dashjs/build/es5/src/streaming/vo/DashJSError.js"));

			function d(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function c() {
				var e = this.context,
					t = void 0,
					n = void 0,
					i = void 0,
					d = void 0,
					c = void 0,
					f = void 0,
					h = void 0,
					m = void 0,
					g = void 0,
					_ = void 0,
					p = void 0,
					E = void 0,
					v = void 0;

				function y(t, s, o, u) {
					var l, d, c = void 0,
						f = void 0,
						h = void 0,
						m = void 0,
						g = void 0,
						_ = void 0;
					for (f = [], m = 0, d = (l = function(t) {
							var n = [],
								s = (0, r.default)(e).create({
									data: t
								}),
								a = void 0,
								o = void 0;
							for (s.consumeTagAndSize(i.Segment.Cues); s.moreData() && s.consumeTagAndSize(i.Segment.Cues.CuePoint, !0);) {
								for ((a = {}).CueTime = s.parseTag(i.Segment.Cues.CuePoint.CueTime), a.CueTracks = []; s.moreData() && s.consumeTag(i.Segment.Cues.CuePoint.CueTrackPositions, !0);) {
									var u = s.getMatroskaCodedNum(),
										l = s.getPos();
									if ((o = {}).Track = s.parseTag(i.Segment.Cues.CuePoint.CueTrackPositions.CueTrack), 0 === o.Track) throw new Error("Cue track cannot be 0");
									o.ClusterPosition = s.parseTag(i.Segment.Cues.CuePoint.CueTrackPositions.CueClusterPosition), a.CueTracks.push(o), s.setPos(l + u)
								}
								if (0 === a.CueTracks.length) throw new Error("Mandatory cuetrack not found");
								n.push(a)
							}
							if (0 === n.length) throw new Error("mandatory cuepoint not found");
							return n
						}(t)).length; m < d; m += 1) h = new a.default, c = 0, c = m < l.length - 1 ? l[m + 1].CueTime - l[m].CueTime : u - l[m].CueTime, h.duration = c, h.startTime = l[m].CueTime, h.timescale = 1e3, g = l[m].CueTracks[0].ClusterPosition + s, _ = m < l.length - 1 ? l[m + 1].CueTracks[0].ClusterPosition + s - 1 : o - 1, h.mediaRange = g + "-" + _, f.push(h);
					return n.debug("Parsed cues: " + f.length + " cues."), f
				}

				function T() {
					if (!v || !v.hasOwnProperty("resolve")) throw new Error("setConfig function has to be called previously")
				}

				function b(e, t, n, r) {
					_.trigger(p.SEGMENTS_LOADED, {
						segments: n,
						representation: r,
						error: n ? void 0 : new l.default(E.SEGMENT_BASE_LOADER_ERROR_CODE, E.SEGMENT_BASE_LOADER_ERROR_MESSAGE)
					}, {
						streamId: e,
						mediaType: t
					})
				}

				function S(e) {
					var t = new o.default;
					return t.setInfo(e), t
				}
				return t = {
					setConfig: function(e) {
						if (!(e.baseURLController && e.dashMetrics && e.mediaPlayerModel && e.errHandler)) throw new Error(s.default.MISSING_CONFIG_ERROR);
						v = e.baseURLController, f = e.dashMetrics, h = e.mediaPlayerModel, d = e.errHandler, g = e.settings, p = e.events, _ = e.eventBus, E = e.errors, n = e.debug.getLogger(t), c = e.requestModifier
					},
					initialize: function() {
						m = (0, u.default)(e).create({
							errHandler: d,
							dashMetrics: f,
							mediaPlayerModel: h,
							requestModifier: c,
							useFetch: g ? g.get().streaming.lowLatencyEnabled : null,
							errors: E
						})
					},
					loadInitialization: function(e, t, r, s) {
						T();
						var i = null,
							a = r ? v.resolve(r.path) : null,
							o = r ? r.range.split("-") : null,
							u = s || {
								range: {
									start: o ? parseFloat(o[0]) : null,
									end: o ? parseFloat(o[1]) : null
								},
								request: i,
								url: a ? a.url : void 0,
								init: !0,
								mediaType: t
							};
						n.info("Start loading initialization."), i = S(u), m.load({
							request: i,
							success: function() {
								_.trigger(p.INITIALIZATION_LOADED, {
									representation: r
								}, {
									streamId: e,
									mediaType: t
								})
							},
							error: function() {
								_.trigger(p.INITIALIZATION_LOADED, {
									representation: r
								}, {
									streamId: e,
									mediaType: t
								})
							}
						}), n.debug("Perform init load: " + u.url)
					},
					loadSegments: function(t, s, a, o, u) {
						T();
						var l = null,
							d = a ? v.resolve(a.path) : null,
							c = d ? d.url : void 0;
						u = u || b, l = S({
							bytesLoaded: 0,
							bytesToLoad: 8192,
							range: {
								start: 0,
								end: 8192
							},
							request: l,
							url: c,
							init: !1,
							mediaType: s
						}), n.debug("Parsing ebml header"), m.load({
							request: l,
							success: function(l) {
								! function(t, s, a, o) {
									if (t && 0 !== t.byteLength) {
										var u, l = (0, r.default)(e).create({
												data: t
											}),
											d = void 0,
											c = void 0,
											f = void 0,
											h = a ? a.split("-") : null,
											g = null,
											_ = {
												url: s,
												range: {
													start: h ? parseFloat(h[0]) : null,
													end: h ? parseFloat(h[1]) : null
												},
												request: g
											};
										for (n.debug("Parse EBML header: " + _.url), l.skipOverElement(i.EBML), l.consumeTag(i.Segment), f = l.getMatroskaCodedNum(), f += l.getPos(), u = l.getPos(); l.moreData() && !l.consumeTagAndSize(i.Segment.Info, !0);)
											if (!(l.skipOverElement(i.Segment.SeekHead, !0) || l.skipOverElement(i.Segment.Tracks, !0) || l.skipOverElement(i.Segment.Cues, !0) || l.skipOverElement(i.Void, !0))) throw new Error("no valid top level element found");
										for (; void 0 === d;) {
											var p = l.getMatroskaCodedNum(!0),
												E = l.getMatroskaCodedNum();
											switch (p) {
												case i.Segment.Info.Duration.tag:
													d = l[i.Segment.Info.Duration.parse](E);
													break;
												default:
													l.setPos(l.getPos() + E)
											}
										}
										g = S(_);
										m.load({
											request: g,
											success: function(e) {
												c = y(e, u, f, d), o(c)
											},
											error: function() {
												n.error("Download Error: Cues " + _.url), o(null)
											}
										}), n.debug("Perform cues load: " + _.url + " bytes=" + _.range.start + "-" + _.range.end)
									} else o(null)
								}(l, c, o, (function(e) {
									u(t, s, e, a)
								}))
							},
							error: function() {
								u(t, s, null, a)
							}
						})
					},
					reset: function() {
						d = null, c = null
					}
				}, i = {
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
									}
								}
							}
						}
					},
					Void: {
						tag: 236,
						required: !0
					}
				}, t
			}
			c.__dashjs_factory_name = "WebmSegmentBaseLoader", t.default = i.default.getSingletonFactory(c)
		},
		"./node_modules/dashjs/build/es5/src/dash/constants/DashConstants.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}();
			var s = new(function() {
				function e() {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this.init()
				}
				return r(e, [{
					key: "init",
					value: function() {
						this.BASE_URL = "BaseURL", this.SEGMENT_BASE = "SegmentBase", this.SEGMENT_TEMPLATE = "SegmentTemplate", this.SEGMENT_LIST = "SegmentList", this.SEGMENT_URL = "SegmentURL", this.SEGMENT_TIMELINE = "SegmentTimeline", this.SEGMENT_PROFILES = "segmentProfiles", this.ADAPTATION_SET = "AdaptationSet", this.REPRESENTATION = "Representation", this.REPRESENTATION_INDEX = "RepresentationIndex", this.SUB_REPRESENTATION = "SubRepresentation", this.INITIALIZATION = "Initialization", this.INITIALIZATION_MINUS = "initialization", this.MPD = "MPD", this.PERIOD = "Period", this.ASSET_IDENTIFIER = "AssetIdentifier", this.EVENT_STREAM = "EventStream", this.ID = "id", this.PROFILES = "profiles", this.SERVICE_LOCATION = "serviceLocation", this.RANGE = "range", this.INDEX = "index", this.MEDIA = "media", this.BYTE_RANGE = "byteRange", this.INDEX_RANGE = "indexRange", this.MEDIA_RANGE = "mediaRange", this.VALUE = "value", this.CONTENT_TYPE = "contentType", this.MIME_TYPE = "mimeType", this.BITSTREAM_SWITCHING = "BitstreamSwitching", this.BITSTREAM_SWITCHING_MINUS = "bitstreamSwitching", this.CODECS = "codecs", this.DEPENDENCY_ID = "dependencyId", this.MEDIA_STREAM_STRUCTURE_ID = "mediaStreamStructureId", this.METRICS = "Metrics", this.METRICS_MINUS = "metrics", this.REPORTING = "Reporting", this.WIDTH = "width", this.HEIGHT = "height", this.SAR = "sar", this.FRAMERATE = "frameRate", this.AUDIO_SAMPLING_RATE = "audioSamplingRate", this.MAXIMUM_SAP_PERIOD = "maximumSAPPeriod", this.START_WITH_SAP = "startWithSAP", this.MAX_PLAYOUT_RATE = "maxPlayoutRate", this.CODING_DEPENDENCY = "codingDependency", this.SCAN_TYPE = "scanType", this.FRAME_PACKING = "FramePacking", this.AUDIO_CHANNEL_CONFIGURATION = "AudioChannelConfiguration", this.CONTENT_PROTECTION = "ContentProtection", this.ESSENTIAL_PROPERTY = "EssentialProperty", this.SUPPLEMENTAL_PROPERTY = "SupplementalProperty", this.INBAND_EVENT_STREAM = "InbandEventStream", this.ACCESSIBILITY = "Accessibility", this.ROLE = "Role", this.RATING = "Rating", this.CONTENT_COMPONENT = "ContentComponent", this.SUBSET = "Subset", this.LANG = "lang", this.VIEWPOINT = "Viewpoint", this.ROLE_ASARRAY = "Role_asArray", this.ACCESSIBILITY_ASARRAY = "Accessibility_asArray", this.AUDIOCHANNELCONFIGURATION_ASARRAY = "AudioChannelConfiguration_asArray", this.CONTENTPROTECTION_ASARRAY = "ContentProtection_asArray", this.MAIN = "main", this.DYNAMIC = "dynamic", this.STATIC = "static", this.MEDIA_PRESENTATION_DURATION = "mediaPresentationDuration", this.MINIMUM_UPDATE_PERIOD = "minimumUpdatePeriod", this.CODEC_PRIVATE_DATA = "codecPrivateData", this.BANDWITH = "bandwidth", this.SOURCE_URL = "sourceURL", this.TIMESCALE = "timescale", this.DURATION = "duration", this.START_NUMBER = "startNumber", this.PRESENTATION_TIME_OFFSET = "presentationTimeOffset", this.AVAILABILITY_START_TIME = "availabilityStartTime", this.AVAILABILITY_END_TIME = "availabilityEndTime", this.TIMESHIFT_BUFFER_DEPTH = "timeShiftBufferDepth", this.MAX_SEGMENT_DURATION = "maxSegmentDuration", this.PRESENTATION_TIME = "presentationTime", this.MIN_BUFFER_TIME = "minBufferTime", this.MAX_SUBSEGMENT_DURATION = "maxSubsegmentDuration", this.START = "start", this.AVAILABILITY_TIME_OFFSET = "availabilityTimeOffset", this.AVAILABILITY_TIME_COMPLETE = "availabilityTimeComplete", this.CENC_DEFAULT_KID = "cenc:default_KID", this.DVB_PRIORITY = "dvb:priority", this.DVB_WEIGHT = "dvb:weight", this.SUGGESTED_PRESENTATION_DELAY = "suggestedPresentationDelay", this.SERVICE_DESCRIPTION = "ServiceDescription", this.SERVICE_DESCRIPTION_SCOPE = "Scope", this.SERVICE_DESCRIPTION_LATENCY = "Latency", this.SERVICE_DESCRIPTION_PLAYBACK_RATE = "PlaybackRate"
					}
				}]), e
			}());
			t.default = s
		},
		"./node_modules/dashjs/build/es5/src/dash/controllers/RepresentationController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = a(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				s = a(n("./node_modules/dashjs/build/es5/src/streaming/vo/DashJSError.js")),
				i = a(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function o(e) {
				var t = (e = e || {}).eventBus,
					n = e.events,
					i = e.errors,
					a = e.abrController,
					o = e.dashMetrics,
					u = e.playbackController,
					l = e.timelineConverter,
					d = e.type,
					c = e.streamInfo,
					f = e.dashConstants,
					h = void 0,
					m = void 0,
					g = void 0,
					_ = void 0,
					p = void 0;

				function E() {
					return d
				}

				function v() {
					if (!(a && o && u && l)) throw new Error(r.default.MISSING_CONFIG_ERROR)
				}

				function y() {
					return g
				}

				function T() {
					return p
				}

				function b() {
					m = null, g = !0, _ = []
				}

				function S() {
					v();
					var e = new Date,
						t = T(),
						n = 1e3 * u.getTime();
					t && o.addRepresentationSwitch(t.adaptation.type, e, n, t.id)
				}

				function A(e) {
					return null == e || e >= _.length ? null : _[e]
				}

				function I(e, t) {
					var n;
					(e.segmentAvailabilityRange = l.calcSegmentAvailabilityRange(e, t), e.segmentAvailabilityRange.end < e.segmentAvailabilityRange.start) ? C(new s.default(i.SEGMENTS_UNAVAILABLE_ERROR_CODE, i.SEGMENTS_UNAVAILABLE_ERROR_MESSAGE, {
						availabilityDelay: e.segmentAvailabilityRange.start - e.segmentAvailabilityRange.end
					})): t && (n = e.segmentAvailabilityRange.end, l.setExpectedLiveEdge(n), o.updateManifestUpdateInfo({
						presentationStartTime: n
					}))
				}

				function R(e, r) {
					v();
					for (var s = 0, i = _.length; s < i; s++) I(_[s], e), r && t.trigger(n.REPRESENTATION_UPDATE_STARTED, {
						representation: _[s]
					}, {
						streamId: c.id,
						mediaType: d
					})
				}

				function M() {
					g = !0, t.trigger(n.DATA_UPDATE_STARTED, {}, {
						streamId: c.id,
						mediaType: d
					})
				}

				function C(e) {
					g = !1, t.trigger(n.DATA_UPDATE_COMPLETED, {
						data: m,
						currentRepresentation: p,
						error: e
					}, {
						streamId: c.id,
						mediaType: d
					})
				}

				function D(e) {
					var r = e;
					t.trigger(n.AST_IN_FUTURE, {
						delay: r
					}), setTimeout((function() {
						y() || (M(), _.forEach((function(e) {
							e.segmentAvailabilityRange = null
						})), R(u.getIsDynamic(), !0))
					}), r)
				}

				function N(e) {
					if (y())
						if (e.error) C(e.error);
						else {
							var t, n = e.representation,
								r = o.getCurrentManifestUpdate(),
								l = !1,
								d = 0,
								h = void 0;
							if (n.adaptation.period.mpd.manifest.type === f.DYNAMIC && !n.adaptation.period.mpd.manifest.ignorePostponeTimePeriod && u.getStreamController().getStreams().length <= 1 && (d = function(t) {
									try {
										var n = u.getStreamController().getActiveStreamInfo(),
											r = t.segmentAvailabilityRange.start;
										n && n.id && n.id !== c.id && (r = Math.min(u.getTime(), r));
										var s = t.segmentAvailabilityRange.end - r;
										return 1e3 * (u.getLiveDelay() - s)
									} catch (e) {
										return 0
									}
								}(n)), d > 0) return D(d), void C(new s.default(i.SEGMENTS_UPDATE_FAILED_ERROR_CODE, i.SEGMENTS_UPDATE_FAILED_ERROR_MESSAGE));
							if (r) {
								for (var m = 0; m < r.representationInfo.length; m++)
									if ((h = r.representationInfo[m]).index === n.index && h.mediaType === E()) {
										l = !0;
										break
									} l || o.addManifestUpdateRepresentationInfo(n, E())
							}(function() {
								for (var e = 0, t = _.length; e < t; e++) {
									var n = _[e].segmentInfoType;
									if (null === _[e].segmentAvailabilityRange || !_[e].hasInitialization() || (n === f.SEGMENT_BASE || n === f.BASE_URL) && !_[e].segments) return !1
								}
								return !0
							})() && (a.setPlaybackQuality(E(), c, (t = p, _.indexOf(t))), o.updateManifestUpdateInfo({
								latency: p.segmentAvailabilityRange.end - u.getTime()
							}), o.getCurrentRepresentationSwitch(T().adaptation.type) || S(), C())
						}
				}

				function O(e) {
					e.isDynamic && R(e.isDynamic)
				}

				function j(e) {
					p = A(e.newQuality), S()
				}

				function w(e) {
					if (e.newDuration) {
						var t = T();
						if (t && t.adaptation.period) t.adaptation.period.duration = e.newDuration
					}
				}
				return h = {
					getStreamId: function() {
						return c.id
					},
					getType: E,
					getData: function() {
						return m
					},
					isUpdating: y,
					updateData: function(e, t, n, s) {
						v(), M(), _ = t, p = A(s), m = e, n === r.default.VIDEO || n === r.default.AUDIO || n === r.default.FRAGMENTED_TEXT ? R(u.getIsDynamic(), !0) : C()
					},
					updateRepresentation: I,
					getCurrentRepresentation: T,
					getRepresentationForQuality: A,
					reset: function() {
						t.off(n.QUALITY_CHANGE_REQUESTED, j, h), t.off(n.REPRESENTATION_UPDATE_COMPLETED, N, h), t.off(n.WALLCLOCK_TIME_UPDATED, O, h), t.off(n.MANIFEST_VALIDITY_CHANGED, w, h), b()
					}
				}, b(), t.on(n.QUALITY_CHANGE_REQUESTED, j, h), t.on(n.REPRESENTATION_UPDATE_COMPLETED, N, h), t.on(n.WALLCLOCK_TIME_UPDATED, O, h), t.on(n.MANIFEST_VALIDITY_CHANGED, w, h), h
			}
			o.__dashjs_factory_name = "RepresentationController", t.default = i.default.getClassFactory(o)
		},
		"./node_modules/dashjs/build/es5/src/dash/controllers/SegmentBaseController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = a(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = a(n("./node_modules/dashjs/build/es5/src/dash/SegmentBaseLoader.js")),
				i = a(n("./node_modules/dashjs/build/es5/src/dash/WebmSegmentBaseLoader.js"));

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function o(e) {
				e = e || {};
				var t = this.context,
					n = e.eventBus,
					r = e.events,
					a = e.dashMetrics,
					o = e.mediaPlayerModel,
					u = e.errHandler,
					l = e.baseURLController,
					d = e.debug,
					c = e.boxParser,
					f = e.requestModifier,
					h = e.errors,
					m = void 0,
					g = void 0,
					_ = void 0;

				function p(e) {
					return "webm" === (e ? e.split("/")[1] : "").toLowerCase()
				}

				function E(e) {
					p(e.mimeType) ? _.loadInitialization(e.streamId, e.mediaType, e.representation) : g.loadInitialization(e.streamId, e.mediaType, e.representation)
				}

				function v(e) {
					p(e.mimeType) ? _.loadSegments(e.streamId, e.mediaType, e.representation, e.representation ? e.representation.indexRange : null, e.callback) : g.loadSegments(e.streamId, e.mediaType, e.representation, e.representation ? e.representation.indexRange : null, e.callback)
				}
				return m = {
					initialize: function() {
						n.on(r.SEGMENTBASE_INIT_REQUEST_NEEDED, E, m), n.on(r.SEGMENTBASE_SEGMENTSLIST_REQUEST_NEEDED, v, m), g.initialize(), _.initialize()
					},
					reset: function() {
						n.off(r.SEGMENTBASE_INIT_REQUEST_NEEDED, E, m), n.off(r.SEGMENTBASE_SEGMENTSLIST_REQUEST_NEEDED, v, m)
					}
				}, g = (0, s.default)(t).getInstance(), _ = (0, i.default)(t).getInstance(), g.setConfig({
					baseURLController: l,
					dashMetrics: a,
					mediaPlayerModel: o,
					errHandler: u,
					eventBus: n,
					events: r,
					errors: h,
					debug: d,
					boxParser: c,
					requestModifier: f
				}), _.setConfig({
					baseURLController: l,
					dashMetrics: a,
					mediaPlayerModel: o,
					errHandler: u,
					eventBus: n,
					events: r,
					errors: h,
					debug: d,
					requestModifier: f
				}), m
			}
			o.__dashjs_factory_name = "SegmentBaseController";
			var u = r.default.getSingletonFactory(o);
			t.default = u
		},
		"./node_modules/dashjs/build/es5/src/dash/controllers/SegmentsController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = u(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = u(n("./node_modules/dashjs/build/es5/src/dash/utils/TimelineSegmentsGetter.js")),
				i = u(n("./node_modules/dashjs/build/es5/src/dash/utils/TemplateSegmentsGetter.js")),
				a = u(n("./node_modules/dashjs/build/es5/src/dash/utils/ListSegmentsGetter.js")),
				o = u(n("./node_modules/dashjs/build/es5/src/dash/utils/SegmentBaseGetter.js"));

			function u(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function l(e) {
				e = e || {};
				var t, n = this.context,
					r = e.events,
					u = e.eventBus,
					l = e.dashConstants,
					d = e.streamInfo,
					c = e.type,
					f = void 0;

				function h(e) {
					return e ? e.segments ? f[l.SEGMENT_BASE] : f[e.segmentInfoType] : null
				}
				return t = {
					initialize: function(t) {
						f[l.SEGMENT_TIMELINE] = (0, s.default)(n).create(e, t), f[l.SEGMENT_TEMPLATE] = (0, i.default)(n).create(e, t), f[l.SEGMENT_LIST] = (0, a.default)(n).create(e, t), f[l.SEGMENT_BASE] = (0, o.default)(n).create(e, t)
					},
					update: function(e, t, n, s) {
						n || u.trigger(r.SEGMENTBASE_INIT_REQUEST_NEEDED, {
							streamId: d.id,
							mediaType: c,
							mimeType: t,
							representation: e
						}), s || u.trigger(r.SEGMENTBASE_SEGMENTSLIST_REQUEST_NEEDED, {
							streamId: d.id,
							mediaType: c,
							mimeType: t,
							representation: e
						})
					},
					getSegmentByIndex: function(e, t, n) {
						var r = h(e);
						return r ? r.getSegmentByIndex(e, t, n) : null
					},
					getSegmentByTime: function(e, t) {
						var n = h(e);
						return n ? n.getSegmentByTime(e, t) : null
					}
				}, f = {}, t
			}
			l.__dashjs_factory_name = "SegmentsController";
			var d = r.default.getClassFactory(l);
			t.default = d
		},
		"./node_modules/dashjs/build/es5/src/dash/models/DashManifestModel.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = y(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				s = y(n("./node_modules/dashjs/build/es5/src/dash/constants/DashConstants.js")),
				i = y(n("./node_modules/dashjs/build/es5/src/dash/vo/Representation.js")),
				a = y(n("./node_modules/dashjs/build/es5/src/dash/vo/AdaptationSet.js")),
				o = y(n("./node_modules/dashjs/build/es5/src/dash/vo/Period.js")),
				u = y(n("./node_modules/dashjs/build/es5/src/dash/vo/Mpd.js")),
				l = y(n("./node_modules/dashjs/build/es5/src/dash/vo/UTCTiming.js")),
				d = y(n("./node_modules/dashjs/build/es5/src/dash/vo/Event.js")),
				c = y(n("./node_modules/dashjs/build/es5/src/dash/vo/BaseURL.js")),
				f = y(n("./node_modules/dashjs/build/es5/src/dash/vo/EventStream.js")),
				h = y(n("./node_modules/dashjs/build/es5/src/streaming/utils/ObjectUtils.js")),
				m = y(n("./node_modules/dashjs/build/es5/src/streaming/utils/URLUtils.js")),
				g = y(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				_ = y(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				p = y(n("./node_modules/dashjs/build/es5/src/streaming/vo/DashJSError.js")),
				E = y(n("./node_modules/dashjs/build/es5/src/core/errors/Errors.js")),
				v = n("./node_modules/dashjs/build/es5/src/streaming/thumbnail/ThumbnailTracks.js");

			function y(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function T() {
				var e = void 0,
					t = void 0,
					n = void 0,
					g = void 0,
					y = this.context,
					T = (0, m.default)(y).getInstance(),
					b = Number.isInteger || function(e) {
						return "number" == typeof e && isFinite(e) && Math.floor(e) === e
					};

				function S(e, t) {
					var n = void 0,
						i = void 0,
						a = void 0,
						o = void 0,
						u = void 0,
						l = void 0,
						d = !1,
						c = !1;
					if (!e) throw new Error("adaptation is not defined");
					if (!t) throw new Error("type is not defined");
					if (e.hasOwnProperty("ContentComponent_asArray") && (o = e.ContentComponent_asArray), u = t !== r.default.TEXT ? new RegExp(t) : new RegExp("(vtt|ttml)"), e.Representation_asArray && e.Representation_asArray.length && e.Representation_asArray.length > 0) {
						var f = w(e.Representation_asArray[0]);
						if (f && f.length > 0 && v.THUMBNAILS_SCHEME_ID_URIS.indexOf(f[0].schemeIdUri) >= 0) return t === r.default.IMAGE;
						if (e.Representation_asArray[0].hasOwnProperty(s.default.CODECS) && (0 === (l = e.Representation_asArray[0].codecs).search(r.default.STPP) || 0 === l.search(r.default.WVTT))) return t === r.default.FRAGMENTED_TEXT
					}
					if (o) {
						if (o.length > 1) return t === r.default.MUXED;
						o[0] && o[0].contentType === t && (d = !0, c = !0)
					}
					if (e.hasOwnProperty(s.default.MIME_TYPE) && (d = u.test(e.mimeType), c = !0), !c)
						for (n = 0, i = e.Representation_asArray && e.Representation_asArray.length ? e.Representation_asArray.length : 0; !c && n < i;)(a = e.Representation_asArray[n]).hasOwnProperty(s.default.MIME_TYPE) && (d = u.test(a.mimeType), c = !0), n++;
					return d
				}

				function A(e) {
					return S(e, r.default.AUDIO)
				}

				function I(e) {
					return S(e, r.default.VIDEO)
				}

				function R(e) {
					return S(e, r.default.FRAGMENTED_TEXT)
				}

				function M(e) {
					return S(e, r.default.IMAGE)
				}

				function C(e) {
					return "text/vtt" === e || "application/ttml+xml" === e
				}

				function D() {
					return function(e, t) {
						return e.bandwidth - t.bandwidth
					}
				}

				function N(e) {
					return e && Array.isArray(e.Representation_asArray) && e.Representation_asArray.sort((function(e, t) {
						return e.bandwidth - t.bandwidth
					})), e
				}

				function O(e, t) {
					return e && e.Period_asArray && b(t) && e.Period_asArray[t] ? e.Period_asArray[t].AdaptationSet_asArray : []
				}

				function j(e) {
					var t = !1;
					return e && e.hasOwnProperty("type") && (t = e.type === s.default.DYNAMIC), t
				}

				function w(e) {
					return e && e.EssentialProperty_asArray && e.EssentialProperty_asArray.length ? e.EssentialProperty_asArray.map((function(e) {
						return {
							schemeIdUri: e.schemeIdUri,
							value: e.value
						}
					})) : null
				}

				function P(e, t) {
					if (!e) throw new Error("Period cannot be null or undefined");
					var n = o.default.DEFAULT_ID + "_" + t;
					return e.hasOwnProperty(s.default.ID) && e.id.length > 0 && "__proto__" !== e.id && (n = e.id), n
				}

				function L(e, t) {
					var n = [],
						i = void 0;
					if (!e) return n;
					for (i = 0; i < e.length; i++) {
						var a = new f.default;
						if (a.timescale = 1, a.representation = t, !e[i].hasOwnProperty(r.default.SCHEME_ID_URI)) throw new Error("Invalid EventStream. SchemeIdUri has to be set");
						a.schemeIdUri = e[i].schemeIdUri, e[i].hasOwnProperty(s.default.TIMESCALE) && (a.timescale = e[i].timescale), e[i].hasOwnProperty(s.default.VALUE) && (a.value = e[i].value), n.push(a)
					}
					return n
				}

				function F(e) {
					var t = [],
						n = e.BaseURL_asArray || [e.baseUri],
						r = !1;
					return n.some((function(n) {
						if (n) {
							var i = new c.default,
								a = n.__text || n;
							return T.isRelative(a) && (r = !0, e.baseUri && (a = T.resolve(a, e.baseUri))), i.url = a, n.hasOwnProperty(s.default.SERVICE_LOCATION) && n.serviceLocation.length ? i.serviceLocation = n.serviceLocation : i.serviceLocation = a, n.hasOwnProperty(s.default.DVB_PRIORITY) && (i.dvb_priority = n[s.default.DVB_PRIORITY]), n.hasOwnProperty(s.default.DVB_WEIGHT) && (i.dvb_weight = n[s.default.DVB_WEIGHT]), n.hasOwnProperty(s.default.AVAILABILITY_TIME_OFFSET) && (i.availabilityTimeOffset = n[s.default.AVAILABILITY_TIME_OFFSET]), n.hasOwnProperty(s.default.AVAILABILITY_TIME_COMPLETE) && (i.availabilityTimeComplete = "false" !== n[s.default.AVAILABILITY_TIME_COMPLETE]), t.push(i), r
						}
					})), t
				}
				return e = {
					getIsTypeOf: S,
					getIsTextTrack: C,
					getLanguageForAdaptation: function(e) {
						var t = "";
						return e && e.hasOwnProperty(s.default.LANG) && (t = e.lang.replace(/[^A-Za-z0-9-]/g, "")), t
					},
					getViewpointForAdaptation: function(e) {
						return e && e.hasOwnProperty(s.default.VIEWPOINT) ? e.Viewpoint : null
					},
					getRolesForAdaptation: function(e) {
						return e && e.hasOwnProperty(s.default.ROLE_ASARRAY) ? e.Role_asArray : []
					},
					getAccessibilityForAdaptation: function(e) {
						return e && e.hasOwnProperty(s.default.ACCESSIBILITY_ASARRAY) ? e.Accessibility_asArray : []
					},
					getAudioChannelConfigurationForAdaptation: function(e) {
						return e && e.hasOwnProperty(s.default.AUDIOCHANNELCONFIGURATION_ASARRAY) ? e.AudioChannelConfiguration_asArray : []
					},
					getAudioChannelConfigurationForRepresentation: function(e) {
						return e && e.hasOwnProperty(s.default.AUDIOCHANNELCONFIGURATION_ASARRAY) ? e.AudioChannelConfiguration_asArray : []
					},
					getAdaptationForIndex: function(e, t, n) {
						var r = O(t, n);
						return r.length > 0 && b(e) ? r[e] : null
					},
					getIndexForAdaptation: function(e, t, n) {
						if (!e) return -1;
						for (var r = O(t, n), s = 0; s < r.length; s++) {
							if ((0, h.default)(y).getInstance().areEqual(r[s], e)) return s
						}
						return -1
					},
					getAdaptationForId: function(e, t, n) {
						var r, i = O(t, n),
							a = void 0;
						for (a = 0, r = i.length; a < r; a++)
							if (i[a].hasOwnProperty(s.default.ID) && i[a].id === e) return i[a];
						return null
					},
					getAdaptationsForType: function(e, t, n) {
						var r, s = O(e, t),
							i = void 0,
							a = [];
						for (i = 0, r = s.length; i < r; i++) S(s[i], n) && a.push(N(s[i]));
						return a
					},
					getCodec: function(e, t, n) {
						var r = null;
						if (e && e.Representation_asArray && e.Representation_asArray.length > 0) {
							var s = b(t) && t >= 0 && t < e.Representation_asArray.length ? e.Representation_asArray[t] : e.Representation_asArray[0];
							s && (r = s.mimeType + ';codecs="' + s.codecs + '"', n && void 0 !== s.width && (r += ';width="' + s.width + '";height="' + s.height + '"'))
						}
						return r && (r = r.replace(/\sprofiles=[^;]*/g, "")), r
					},
					getMimeType: function(e) {
						return e && e.Representation_asArray && e.Representation_asArray.length > 0 ? e.Representation_asArray[0].mimeType : null
					},
					getKID: function(e) {
						return e && e.hasOwnProperty(s.default.CENC_DEFAULT_KID) ? e[s.default.CENC_DEFAULT_KID] : null
					},
					getLabelsForAdaptation: function(e) {
						if (!e || !Array.isArray(e.Label_asArray)) return [];
						for (var t = [], n = 0; n < e.Label_asArray.length; n++) t.push({
							lang: e.Label_asArray[n].lang,
							text: e.Label_asArray[n].__text || e.Label_asArray[n]
						});
						return t
					},
					getContentProtectionData: function(e) {
						return e && e.hasOwnProperty(s.default.CONTENTPROTECTION_ASARRAY) && 0 !== e.ContentProtection_asArray.length ? e.ContentProtection_asArray : null
					},
					getIsDynamic: j,
					hasProfile: function(e, t) {
						var n = !1;
						return e && e.profiles && e.profiles.length > 0 && (n = -1 !== e.profiles.indexOf(t)), n
					},
					getDuration: function(e) {
						return e && e.hasOwnProperty(s.default.MEDIA_PRESENTATION_DURATION) ? e.mediaPresentationDuration : e && "dynamic" == e.type ? Number.POSITIVE_INFINITY : Number.MAX_SAFE_INTEGER || Number.MAX_VALUE
					},
					getBandwidth: function(e) {
						return e && e.bandwidth ? e.bandwidth : NaN
					},
					getManifestUpdatePeriod: function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
							n = NaN;
						return e && e.hasOwnProperty(s.default.MINIMUM_UPDATE_PERIOD) && (n = e.minimumUpdatePeriod), isNaN(n) ? n : Math.max(n - t, 1)
					},
					getRepresentationCount: function(e) {
						return e && Array.isArray(e.Representation_asArray) ? e.Representation_asArray.length : 0
					},
					getBitrateListForAdaptation: function(e) {
						var t = N(e);
						return (t && Array.isArray(t.Representation_asArray) ? t.Representation_asArray : []).map((function(e) {
							return {
								bandwidth: e.bandwidth,
								width: e.width || 0,
								height: e.height || 0,
								scanType: e.scanType || null,
								id: e.id || null
							}
						}))
					},
					getRepresentationFor: function(e, t) {
						return t && t.Representation_asArray && t.Representation_asArray.length > 0 && b(e) ? t.Representation_asArray[e] : null
					},
					getRepresentationsForAdaptation: function(e) {
						var t, n, r, a, o, u = [],
							l = function(e) {
								if (e && e.period && b(e.period.index)) {
									var t = e.period.mpd.manifest.Period_asArray[e.period.index];
									if (t && t.AdaptationSet_asArray && b(e.index)) return N(t.AdaptationSet_asArray[e.index])
								}
							}(e),
							d = void 0,
							c = void 0;
						if (l && l.Representation_asArray) {
							if (e && e.period && b(e.period.index)) {
								var f = F(e.period.mpd.manifest);
								f && (c = f[0])
							}
							for (var h = 0, m = l.Representation_asArray.length; h < m; ++h) {
								var g = l.Representation_asArray[h],
									_ = new i.default;
								if (_.index = h, _.adaptation = e, g.hasOwnProperty(s.default.ID) && (_.id = g.id), g.hasOwnProperty(s.default.CODECS) && (_.codecs = g.codecs), g.hasOwnProperty(s.default.CODEC_PRIVATE_DATA) && (_.codecPrivateData = g.codecPrivateData), g.hasOwnProperty(s.default.BANDWITH) && (_.bandwidth = g.bandwidth), g.hasOwnProperty(s.default.WIDTH) && (_.width = g.width), g.hasOwnProperty(s.default.HEIGHT) && (_.height = g.height), g.hasOwnProperty(s.default.SCAN_TYPE) && (_.scanType = g.scanType), g.hasOwnProperty(s.default.MAX_PLAYOUT_RATE) && (_.maxPlayoutRate = g.maxPlayoutRate), g.hasOwnProperty(s.default.SEGMENT_BASE) ? (d = g.SegmentBase, _.segmentInfoType = s.default.SEGMENT_BASE) : g.hasOwnProperty(s.default.SEGMENT_LIST) ? (d = g.SegmentList).hasOwnProperty(s.default.SEGMENT_TIMELINE) ? _.segmentInfoType = s.default.SEGMENT_TIMELINE : _.segmentInfoType = s.default.SEGMENT_LIST : g.hasOwnProperty(s.default.SEGMENT_TEMPLATE) ? ((d = g.SegmentTemplate).hasOwnProperty(s.default.SEGMENT_TIMELINE) ? _.segmentInfoType = s.default.SEGMENT_TIMELINE : _.segmentInfoType = s.default.SEGMENT_TEMPLATE, d.hasOwnProperty(s.default.INITIALIZATION_MINUS) && (_.initialization = d.initialization.split("$Bandwidth$").join(g.bandwidth).split("$RepresentationID$").join(g.id))) : _.segmentInfoType = s.default.BASE_URL, _.essentialProperties = w(g), d) {
									if (d.hasOwnProperty(s.default.INITIALIZATION)) {
										var p = d.Initialization;
										p.hasOwnProperty(s.default.SOURCE_URL) && (_.initialization = p.sourceURL), p.hasOwnProperty(s.default.RANGE) && (_.range = p.range)
									} else g.hasOwnProperty(s.default.MIME_TYPE) && C(g.mimeType) && (_.range = 0);
									d.hasOwnProperty(s.default.TIMESCALE) && (_.timescale = d.timescale), d.hasOwnProperty(s.default.DURATION) ? _.segmentDuration = d.duration / _.timescale : g.hasOwnProperty(s.default.SEGMENT_TEMPLATE) && (d = g.SegmentTemplate).hasOwnProperty(s.default.SEGMENT_TIMELINE) && (_.segmentDuration = (r = d.SegmentTimeline, a = void 0, o = void 0, a = r.S_asArray[0], o = r.S_asArray[1], (a.hasOwnProperty("d") ? a.d : o.t - a.t) / _.timescale)), d.hasOwnProperty(s.default.MEDIA) && (_.media = d.media), d.hasOwnProperty(s.default.START_NUMBER) && (_.startNumber = d.startNumber), d.hasOwnProperty(s.default.INDEX_RANGE) && (_.indexRange = d.indexRange), d.hasOwnProperty(s.default.PRESENTATION_TIME_OFFSET) && (_.presentationTimeOffset = d.presentationTimeOffset / _.timescale), d.hasOwnProperty(s.default.AVAILABILITY_TIME_OFFSET) ? _.availabilityTimeOffset = d.availabilityTimeOffset : c && void 0 !== c.availabilityTimeOffset && (_.availabilityTimeOffset = c.availabilityTimeOffset), d.hasOwnProperty(s.default.AVAILABILITY_TIME_COMPLETE) ? _.availabilityTimeComplete = "false" !== d.availabilityTimeComplete : c && void 0 !== c.availabilityTimeComplete && (_.availabilityTimeComplete = c.availabilityTimeComplete)
								}
								_.MSETimeOffset = (n = void 0, void 0, n = (t = _).presentationTimeOffset, t.adaptation.period.start - n), _.path = [e.period.index, e.index, h], u.push(_)
							}
						}
						return u
					},
					getAdaptationsForPeriod: function(e) {
						var t = e && b(e.index) ? e.mpd.manifest.Period_asArray[e.index] : null,
							n = [],
							i = void 0,
							o = void 0,
							u = void 0;
						if (t && t.AdaptationSet_asArray)
							for (u = 0; u < t.AdaptationSet_asArray.length; u++) o = t.AdaptationSet_asArray[u], i = new a.default, o.hasOwnProperty(s.default.ID) && (i.id = o.id), i.index = u, i.period = e, S(o, r.default.MUXED) ? i.type = r.default.MUXED : A(o) ? i.type = r.default.AUDIO : I(o) ? i.type = r.default.VIDEO : R(o) ? i.type = r.default.FRAGMENTED_TEXT : M(o) ? i.type = r.default.IMAGE : i.type = r.default.TEXT, n.push(i);
						return n
					},
					getRegularPeriods: function(e) {
						var i, a = !!e && j(e.manifest),
							u = [],
							l = null,
							d = null,
							c = null,
							f = null,
							h = void 0;
						for (h = 0, i = e && e.manifest && e.manifest.Period_asArray ? e.manifest.Period_asArray.length : 0; h < i; h++)(d = e.manifest.Period_asArray[h]).hasOwnProperty(s.default.START) ? (f = new o.default).start = d.start : null !== l && l.hasOwnProperty(s.default.DURATION) && null !== c ? (f = new o.default).start = parseFloat((c.start + c.duration).toFixed(5)) : 0 !== h || a || ((f = new o.default).start = 0), null !== c && isNaN(c.duration) && (null !== f ? c.duration = parseFloat((f.start - c.start).toFixed(5)) : t.warn("First period duration could not be calculated because lack of start and duration period properties. This will cause timing issues during playback")), null !== f && (f.id = P(d, h), f.index = h, f.mpd = e, d.hasOwnProperty(s.default.DURATION) && (f.duration = d.duration), u.push(f), l = d, c = f), d = null, f = null;
						return 0 === u.length ? u : (null !== c && isNaN(c.duration) && (c.duration = parseFloat((function(e) {
							! function() {
								if (!n || !n.hasOwnProperty("error")) throw new Error(r.default.MISSING_CONFIG_ERROR)
							}();
							var t = j(e.mpd.manifest),
								s = void 0;
							e.mpd.manifest.mediaPresentationDuration ? s = e.mpd.manifest.mediaPresentationDuration : e.duration ? s = e.duration : t ? s = Number.POSITIVE_INFINITY : n.error(new p.default(E.default.MANIFEST_ERROR_ID_PARSE_CODE, "Must have @mediaPresentationDuration on MPD or an explicit @duration on the last period.", e));
							return s
						}(c) - c.start).toFixed(5))), u)
					},
					getMpd: function(e) {
						var t = new u.default;
						return e && (t.manifest = e, e.hasOwnProperty(s.default.AVAILABILITY_START_TIME) ? t.availabilityStartTime = new Date(e.availabilityStartTime.getTime()) : e.loadedTime && (t.availabilityStartTime = new Date(e.loadedTime.getTime())), e.hasOwnProperty(s.default.AVAILABILITY_END_TIME) && (t.availabilityEndTime = new Date(e.availabilityEndTime.getTime())), e.hasOwnProperty(s.default.MINIMUM_UPDATE_PERIOD) && (t.minimumUpdatePeriod = e.minimumUpdatePeriod), e.hasOwnProperty(s.default.MEDIA_PRESENTATION_DURATION) && (t.mediaPresentationDuration = e.mediaPresentationDuration), e.hasOwnProperty(s.default.SUGGESTED_PRESENTATION_DELAY) && (t.suggestedPresentationDelay = e.suggestedPresentationDelay), e.hasOwnProperty(s.default.TIMESHIFT_BUFFER_DEPTH) && (t.timeShiftBufferDepth = e.timeShiftBufferDepth), e.hasOwnProperty(s.default.MAX_SEGMENT_DURATION) && (t.maxSegmentDuration = e.maxSegmentDuration)), t
					},
					getEventsForPeriod: function(e) {
						var t = e && e.mpd && e.mpd.manifest ? e.mpd.manifest : null,
							n = t ? t.Period_asArray : null,
							i = n && e && b(e.index) ? n[e.index].EventStream_asArray : null,
							a = [],
							o = void 0,
							u = void 0;
						if (i)
							for (o = 0; o < i.length; o++) {
								var l = new f.default;
								if (l.period = e, l.timescale = 1, !i[o].hasOwnProperty(r.default.SCHEME_ID_URI)) throw new Error("Invalid EventStream. SchemeIdUri has to be set");
								for (l.schemeIdUri = i[o][r.default.SCHEME_ID_URI], i[o].hasOwnProperty(s.default.TIMESCALE) && (l.timescale = i[o][s.default.TIMESCALE]), i[o].hasOwnProperty(s.default.VALUE) && (l.value = i[o][s.default.VALUE]), i[o].hasOwnProperty(s.default.PRESENTATION_TIME_OFFSET) && (l.presentationTimeOffset = i[o][s.default.PRESENTATION_TIME_OFFSET]), u = 0; i[o].Event_asArray && u < i[o].Event_asArray.length; u++) {
									var c = i[o].Event_asArray[u],
										h = new d.default;
									if (h.presentationTime = 0, h.eventStream = l, c.hasOwnProperty(s.default.PRESENTATION_TIME)) {
										h.presentationTime = c.presentationTime;
										var m = l.presentationTimeOffset ? l.presentationTimeOffset / l.timescale : 0;
										h.calculatedPresentationTime = h.presentationTime / l.timescale + e.start - m
									}
									c.hasOwnProperty(s.default.DURATION) && (h.duration = c.duration / l.timescale), c.hasOwnProperty(s.default.ID) && (h.id = c.id), c.Signal && c.Signal.Binary ? h.messageData = g.decodeArray(c.Signal.Binary.toString()) : h.messageData = c.messageData || c.__text, a.push(h)
								}
							}
						return a
					},
					getEventStreamForAdaptationSet: function(e, t) {
						var n = void 0,
							r = void 0,
							s = void 0;
						return e && e.Period_asArray && t && t.period && b(t.period.index) && (r = e.Period_asArray[t.period.index]) && r.AdaptationSet_asArray && b(t.index) && (s = r.AdaptationSet_asArray[t.index]) && (n = s.InbandEventStream_asArray), L(n, null)
					},
					getEventStreamForRepresentation: function(e, t) {
						var n = void 0,
							r = void 0,
							s = void 0,
							i = void 0;
						return e && e.Period_asArray && t && t.adaptation && t.adaptation.period && b(t.adaptation.period.index) && (r = e.Period_asArray[t.adaptation.period.index]) && r.AdaptationSet_asArray && b(t.adaptation.index) && (s = r.AdaptationSet_asArray[t.adaptation.index]) && s.Representation_asArray && b(t.index) && (i = s.Representation_asArray[t.index]) && (n = i.InbandEventStream_asArray), L(n, t)
					},
					getUTCTimingSources: function(e) {
						var t = j(e),
							n = !!e && e.hasOwnProperty(s.default.AVAILABILITY_START_TIME),
							i = e ? e.UTCTiming_asArray : null,
							a = [];
						return (t || n) && i && i.forEach((function(e) {
							var t = new l.default;
							e.hasOwnProperty(r.default.SCHEME_ID_URI) && (t.schemeIdUri = e.schemeIdUri, e.hasOwnProperty(s.default.VALUE) && (t.value = e.value.toString(), a.push(t)))
						})), a
					},
					getBaseURLsFromElement: F,
					getRepresentationSortFunction: D,
					getLocation: function(e) {
						if (e && e.hasOwnProperty(r.default.LOCATION)) return e.Location = e.Location_asArray[0], e.Location
					},
					getSuggestedPresentationDelay: function(e) {
						return e && e.hasOwnProperty(s.default.SUGGESTED_PRESENTATION_DELAY) ? e.suggestedPresentationDelay : null
					},
					getAvailabilityStartTime: function(e) {
						return e && e.hasOwnProperty(s.default.AVAILABILITY_START_TIME) && null !== e.availabilityStartTime ? e.availabilityStartTime.getTime() : null
					},
					getServiceDescriptions: function(e) {
						var t = [];
						if (e && e.hasOwnProperty(s.default.SERVICE_DESCRIPTION)) {
							var n = !0,
								i = !1,
								a = void 0;
							try {
								for (var o, u = e.ServiceDescription_asArray[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
									var l = o.value,
										d = void 0,
										c = void 0,
										f = void 0,
										h = void 0;
									for (var m in l) l.hasOwnProperty(m) && (m === s.default.ID ? d = l[m] : m === s.default.SERVICE_DESCRIPTION_SCOPE ? c = l[m].schemeIdUri : m === s.default.SERVICE_DESCRIPTION_LATENCY ? f = {
										target: l[m].target,
										max: l[m].max,
										min: l[m].min
									} : m === s.default.SERVICE_DESCRIPTION_PLAYBACK_RATE && (h = {
										max: l[m].max,
										min: l[m].min
									}));
									c === r.default.SERVICE_DESCRIPTION_LL_SCHEME && (f || h) && t.push({
										id: d,
										schemeIdUri: c,
										latency: f,
										playbackRate: h
									})
								}
							} catch (g) {
								i = !0, a = g
							} finally {
								try {
									!n && u.return && u.return()
								} finally {
									if (i) throw a
								}
							}
						}
						return t
					},
					getSupplementalPropperties: function(e) {
						var t = {};
						if (e && e.hasOwnProperty(s.default.SUPPLEMENTAL_PROPERTY)) {
							var n = !0,
								i = !1,
								a = void 0;
							try {
								for (var o, u = e.SupplementalProperty_asArray[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
									var l = o.value;
									l.hasOwnProperty(r.default.SCHEME_ID_URI) && l.hasOwnProperty(s.default.VALUE) && (t[l[r.default.SCHEME_ID_URI]] = l[s.default.VALUE])
								}
							} catch (d) {
								i = !0, a = d
							} finally {
								try {
									!n && u.return && u.return()
								} finally {
									if (i) throw a
								}
							}
						}
						return t
					},
					setConfig: function(e) {
						e && (e.errHandler && (n = e.errHandler), e.BASE64 && (g = e.BASE64))
					}
				}, t = (0, _.default)(y).getInstance().getLogger(e), e
			}
			T.__dashjs_factory_name = "DashManifestModel", t.default = g.default.getSingletonFactory(T)
		},
		"./node_modules/dashjs/build/es5/src/dash/parser/DashParser.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = f(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = f(n("./node_modules/dashjs/build/es5/src/dash/parser/objectiron.js")),
				i = f(n("./node_modules/dashjs/build/es5/externals/xml2json.js")),
				a = f(n("./node_modules/dashjs/build/es5/src/dash/parser/matchers/StringMatcher.js")),
				o = f(n("./node_modules/dashjs/build/es5/src/dash/parser/matchers/DurationMatcher.js")),
				u = f(n("./node_modules/dashjs/build/es5/src/dash/parser/matchers/DateTimeMatcher.js")),
				l = f(n("./node_modules/dashjs/build/es5/src/dash/parser/matchers/NumericMatcher.js")),
				d = f(n("./node_modules/dashjs/build/es5/src/dash/parser/maps/RepresentationBaseValuesMap.js")),
				c = f(n("./node_modules/dashjs/build/es5/src/dash/parser/maps/SegmentValuesMap.js"));

			function f(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function h(e) {
				e = e || {};
				var t = this.context,
					n = e.debug,
					r = void 0,
					f = void 0,
					h = void 0,
					m = void 0,
					g = void 0;
				return r = {
					parse: function(e) {
						var t = void 0,
							n = window.performance.now();
						if (!(t = m.xml_str2json(e))) throw new Error("parsing the manifest failed");
						var r = window.performance.now();
						g.run(t);
						var s = window.performance.now();
						return f.info("Parsing complete: ( xml2json: " + (r - n).toPrecision(3) + "ms, objectiron: " + (s - r).toPrecision(3) + "ms, total: " + ((s - n) / 1e3).toPrecision(3) + "s)"), t.protocol = "DASH", t
					},
					getMatchers: function() {
						return h
					},
					getIron: function() {
						return g
					}
				}, f = n.getLogger(r), h = [new o.default, new u.default, new l.default, new a.default], m = new i.default({
					escapeMode: !1,
					attributePrefix: "",
					arrayAccessForm: "property",
					emptyNodeForm: "object",
					stripWhitespaces: !1,
					enableToStringFunc: !0,
					ignoreRoot: !0,
					matchers: h
				}), g = (0, s.default)(t).create({
					adaptationset: new d.default,
					period: new c.default
				}), r
			}
			h.__dashjs_factory_name = "DashParser", t.default = r.default.getClassFactory(h)
		},
		"./node_modules/dashjs/build/es5/src/dash/parser/maps/CommonProperty.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}();
			var s = function() {
				function e(t) {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e);
					var n;
					this._name = t, this._merge = (n = t) && n.length && n.charAt(0) === n.charAt(0).toUpperCase()
				}
				return r(e, [{
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
			t.default = s
		},
		"./node_modules/dashjs/build/es5/src/dash/parser/maps/MapNode.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
						}
					}
					return function(t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t
					}
				}(),
				i = n("./node_modules/dashjs/build/es5/src/dash/parser/maps/CommonProperty.js"),
				a = (r = i) && r.__esModule ? r : {
					default: r
				};
			var o = function() {
				function e(t, n, r) {
					var s = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this._name = t || "", this._properties = [], this._children = r || [], Array.isArray(n) && n.forEach((function(e) {
						s._properties.push(new a.default(e))
					}))
				}
				return s(e, [{
					key: "name",
					get: function() {
						return this._name
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
			t.default = o
		},
		"./node_modules/dashjs/build/es5/src/dash/parser/maps/RepresentationBaseValuesMap.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/dash/parser/maps/MapNode.js")),
				s = i(n("./node_modules/dashjs/build/es5/src/dash/constants/DashConstants.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var a = function(e) {
				function t() {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					var e = [s.default.PROFILES, s.default.WIDTH, s.default.HEIGHT, s.default.SAR, s.default.FRAMERATE, s.default.AUDIO_SAMPLING_RATE, s.default.MIME_TYPE, s.default.SEGMENT_PROFILES, s.default.CODECS, s.default.MAXIMUM_SAP_PERIOD, s.default.START_WITH_SAP, s.default.MAX_PLAYOUT_RATE, s.default.CODING_DEPENDENCY, s.default.SCAN_TYPE, s.default.FRAME_PACKING, s.default.AUDIO_CHANNEL_CONFIGURATION, s.default.CONTENT_PROTECTION, s.default.ESSENTIAL_PROPERTY, s.default.SUPPLEMENTAL_PROPERTY, s.default.INBAND_EVENT_STREAM];
					return function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, s.default.ADAPTATION_SET, e, [new r.default(s.default.REPRESENTATION, e, [new r.default(s.default.SUB_REPRESENTATION, e)])]))
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
			}(r.default);
			t.default = a
		},
		"./node_modules/dashjs/build/es5/src/dash/parser/maps/SegmentValuesMap.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/dash/parser/maps/MapNode.js")),
				s = i(n("./node_modules/dashjs/build/es5/src/dash/constants/DashConstants.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var a = function(e) {
				function t() {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					var e = [s.default.SEGMENT_BASE, s.default.SEGMENT_TEMPLATE, s.default.SEGMENT_LIST];
					return function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, s.default.PERIOD, e, [new r.default(s.default.ADAPTATION_SET, e, [new r.default(s.default.REPRESENTATION, e)])]))
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
			}(r.default);
			t.default = a
		},
		"./node_modules/dashjs/build/es5/src/dash/parser/matchers/BaseMatcher.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}();
			var s = function() {
				function e(t, n) {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this._test = t, this._converter = n
				}
				return r(e, [{
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
			t.default = s
		},
		"./node_modules/dashjs/build/es5/src/dash/parser/matchers/DateTimeMatcher.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/dash/parser/matchers/BaseMatcher.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				};
			var a = 60,
				o = 60,
				u = 1e3,
				l = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})(?::([0-9]*)(\.[0-9]*)?)?(?:([+-])([0-9]{2})(?::?)([0-9]{2}))?/,
				d = function(e) {
					function t() {
						return function(e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t),
							function(e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, (function(e) {
								return l.test(e.value)
							}), (function(e) {
								var t = l.exec(e),
									n = void 0;
								if (n = Date.UTC(parseInt(t[1], 10), parseInt(t[2], 10) - 1, parseInt(t[3], 10), parseInt(t[4], 10), parseInt(t[5], 10), t[6] && parseInt(t[6], 10) || 0, t[7] && parseFloat(t[7]) * u || 0), t[9] && t[10]) {
									var r = parseInt(t[9], 10) * o + parseInt(t[10], 10);
									n += ("+" === t[8] ? -1 : 1) * r * a * u
								}
								return new Date(n)
							})))
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
				}(i.default);
			t.default = d
		},
		"./node_modules/dashjs/build/es5/src/dash/parser/matchers/DurationMatcher.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = a(n("./node_modules/dashjs/build/es5/src/dash/parser/matchers/BaseMatcher.js")),
				s = a(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				i = a(n("./node_modules/dashjs/build/es5/src/dash/constants/DashConstants.js"));

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var o = /^([-])?P(([\d.]*)Y)?(([\d.]*)M)?(([\d.]*)D)?T?(([\d.]*)H)?(([\d.]*)M)?(([\d.]*)S)?/,
				u = 31536e3,
				l = 2592e3,
				d = 86400,
				c = 3600,
				f = 60,
				h = function(e) {
					function t() {
						return function(e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t),
							function(e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, (function(e) {
								for (var t = [i.default.MIN_BUFFER_TIME, i.default.MEDIA_PRESENTATION_DURATION, i.default.MINIMUM_UPDATE_PERIOD, i.default.TIMESHIFT_BUFFER_DEPTH, i.default.MAX_SEGMENT_DURATION, i.default.MAX_SUBSEGMENT_DURATION, i.default.SUGGESTED_PRESENTATION_DELAY, i.default.START, s.default.START_TIME, i.default.DURATION], n = t.length, r = 0; r < n; r++)
									if (e.nodeName === t[r]) return o.test(e.value);
								return !1
							}), (function(e) {
								var t = o.exec(e),
									n = parseFloat(t[3] || 0) * u + parseFloat(t[5] || 0) * l + parseFloat(t[7] || 0) * d + parseFloat(t[9] || 0) * c + parseFloat(t[11] || 0) * f + parseFloat(t[13] || 0);
								return void 0 !== t[1] && (n = -n), n
							})))
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
				}(r.default);
			t.default = h
		},
		"./node_modules/dashjs/build/es5/src/dash/parser/matchers/NumericMatcher.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/dash/parser/matchers/BaseMatcher.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				};
			var a = /^[-+]?[0-9]+[.]?[0-9]*([eE][-+]?[0-9]+)?$/,
				o = function(e) {
					function t() {
						return function(e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t),
							function(e, t) {
								if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? e : t
							}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, (function(e) {
								return a.test(e.value)
							}), (function(e) {
								return parseFloat(e)
							})))
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
				}(i.default);
			t.default = o
		},
		"./node_modules/dashjs/build/es5/src/dash/parser/matchers/StringMatcher.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/dash/parser/matchers/BaseMatcher.js")),
				s = i(n("./node_modules/dashjs/build/es5/src/dash/constants/DashConstants.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function a(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var o = function(e) {
				function t() {
					return function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t),
						function(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, (function(e, t) {
							var n, r = (a(n = {}, s.default.MPD, [s.default.ID, s.default.PROFILES]), a(n, s.default.PERIOD, [s.default.ID]), a(n, s.default.BASE_URL, [s.default.SERVICE_LOCATION, s.default.BYTE_RANGE]), a(n, s.default.SEGMENT_BASE, [s.default.INDEX_RANGE]), a(n, s.default.INITIALIZATION, [s.default.RANGE]), a(n, s.default.REPRESENTATION_INDEX, [s.default.RANGE]), a(n, s.default.SEGMENT_LIST, [s.default.INDEX_RANGE]), a(n, s.default.BITSTREAM_SWITCHING, [s.default.RANGE]), a(n, s.default.SEGMENT_URL, [s.default.MEDIA_RANGE, s.default.INDEX_RANGE]), a(n, s.default.SEGMENT_TEMPLATE, [s.default.INDEX_RANGE, s.default.MEDIA, s.default.INDEX, s.default.INITIALIZATION_MINUS, s.default.BITSTREAM_SWITCHING_MINUS]), a(n, s.default.ASSET_IDENTIFIER, [s.default.VALUE, s.default.ID]), a(n, s.default.EVENT_STREAM, [s.default.VALUE]), a(n, s.default.ADAPTATION_SET, [s.default.PROFILES, s.default.MIME_TYPE, s.default.SEGMENT_PROFILES, s.default.CODECS, s.default.CONTENT_TYPE]), a(n, s.default.FRAME_PACKING, [s.default.VALUE, s.default.ID]), a(n, s.default.AUDIO_CHANNEL_CONFIGURATION, [s.default.VALUE, s.default.ID]), a(n, s.default.CONTENT_PROTECTION, [s.default.VALUE, s.default.ID]), a(n, s.default.ESSENTIAL_PROPERTY, [s.default.VALUE, s.default.ID]), a(n, s.default.SUPPLEMENTAL_PROPERTY, [s.default.VALUE, s.default.ID]), a(n, s.default.INBAND_EVENT_STREAM, [s.default.VALUE, s.default.ID]), a(n, s.default.ACCESSIBILITY, [s.default.VALUE, s.default.ID]), a(n, s.default.ROLE, [s.default.VALUE, s.default.ID]), a(n, s.default.RATING, [s.default.VALUE, s.default.ID]), a(n, s.default.VIEWPOINT, [s.default.VALUE, s.default.ID]), a(n, s.default.CONTENT_COMPONENT, [s.default.CONTENT_TYPE]), a(n, s.default.REPRESENTATION, [s.default.ID, s.default.DEPENDENCY_ID, s.default.MEDIA_STREAM_STRUCTURE_ID]), a(n, s.default.SUBSET, [s.default.ID]), a(n, s.default.METRICS, [s.default.METRICS_MINUS]), a(n, s.default.REPORTING, [s.default.VALUE, s.default.ID]), n);
							if (r.hasOwnProperty(t)) {
								var i = r[t];
								return void 0 !== i && i.indexOf(e.name) >= 0
							}
							return !1
						}), (function(e) {
							return String(e)
						})))
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
			}(r.default);
			t.default = o
		},
		"./node_modules/dashjs/build/es5/src/dash/parser/objectiron.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				i = n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				a = (r = i) && r.__esModule ? r : {
					default: r
				};

			function o(e) {
				function t(e, t) {
					for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
				}

				function n(e, n, r) {
					for (var i = 0, a = e.length; i < a; ++i) {
						var o = e[i];
						if (n[o.name])
							if (r[o.name]) {
								if (o.merge) {
									var u = n[o.name],
										l = r[o.name];
									"object" === (void 0 === u ? "undefined" : s(u)) && "object" === (void 0 === l ? "undefined" : s(l)) ? t(u, l): r[o.name] = u + l
								}
							} else r[o.name] = n[o.name]
					}
				}

				function r(e, t) {
					for (var s = 0, i = e.children.length; s < i; ++s) {
						var a = e.children[s],
							o = t[a.name + "_asArray"];
						if (o)
							for (var u = 0, l = o.length; u < l; ++u) {
								var d = o[u];
								n(e.properties, t, d), r(a, d)
							}
					}
				}
				return {
					run: function(t) {
						if (null === t || "object" !== (void 0 === t ? "undefined" : s(t))) return t;
						if ("period" in e)
							for (var n = e.period, i = t.Period_asArray, a = 0, o = i.length; a < o; ++a) {
								var u = i[a];
								if (r(n, u), "adaptationset" in e) {
									var l = u.AdaptationSet_asArray;
									if (l)
										for (var d = e.adaptationset, c = 0, f = l.length; c < f; ++c) r(d, l[c])
								}
							}
						return t
					}
				}
			}
			o.__dashjs_factory_name = "ObjectIron";
			var u = a.default.getClassFactory(o);
			t.default = u
		},
		"./node_modules/dashjs/build/es5/src/dash/utils/ListSegmentsGetter.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = a(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = a(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				i = n("./node_modules/dashjs/build/es5/src/dash/utils/SegmentsUtils.js");

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function o(e, t) {
				var n = (e = e || {}).timelineConverter;

				function r() {
					if (!n || !n.hasOwnProperty("calcPeriodRelativeTimeFromMpdRelativeTime")) throw new Error(s.default.MISSING_CONFIG_ERROR)
				}

				function a(e, s) {
					if (r(), !e) return null;
					var a = e.adaptation.period.mpd.manifest.Period_asArray[e.adaptation.period.index].AdaptationSet_asArray[e.adaptation.index].Representation_asArray[e.index].SegmentList,
						o = a.SegmentURL_asArray.length,
						u = e && !isNaN(e.startNumber) ? e.startNumber : 1,
						l = Math.max(u - 1, 0),
						d = e.startNumber,
						c = null;
					if (s - l < o) {
						var f = a.SegmentURL_asArray[s - l];
						(c = (0, i.getIndexBasedSegment)(n, t, e, s)) && (c.replacementTime = (d + s - 1) * e.segmentDuration, c.media = f.media ? f.media : "", c.mediaRange = f.mediaRange, c.index = s, c.indexRange = f.indexRange)
					}
					return e.availableSegmentsNumber = o, c
				}
				return {
					getSegmentByIndex: a,
					getSegmentByTime: function(e, t) {
						if (r(), !e) return null;
						var s = e.segmentDuration;
						if (isNaN(s)) return null;
						var i = n.calcPeriodRelativeTimeFromMpdRelativeTime(e, t);
						return a(e, Math.floor(i / s))
					}
				}
			}
			o.__dashjs_factory_name = "ListSegmentsGetter";
			var u = r.default.getClassFactory(o);
			t.default = u
		},
		"./node_modules/dashjs/build/es5/src/dash/utils/Round10.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}();
			var s = function() {
				function e() {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e)
				}
				return r(e, null, [{
					key: "round10",
					value: function(e, t) {
						return function(e, t, n) {
							if (void 0 === n || 0 == +n) return Math[e](t);
							if (n = +n, null === (t = +t) || isNaN(t) || !("number" == typeof n && n % 1 == 0)) return NaN;
							return t = t.toString().split("e"), +((t = (t = Math[e](+(t[0] + "e" + (t[1] ? +t[1] - n : -n)))).toString().split("e"))[0] + "e" + (t[1] ? +t[1] + n : n))
						}("round", e, t)
					}
				}]), e
			}();
			t.default = s
		},
		"./node_modules/dashjs/build/es5/src/dash/utils/SegmentBaseGetter.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = i(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function a(e) {
				var t = (e = e || {}).timelineConverter;

				function n() {
					if (!t || !t.hasOwnProperty("calcPeriodRelativeTimeFromMpdRelativeTime")) throw new Error(s.default.MISSING_CONFIG_ERROR)
				}

				function r(e, t) {
					if (n(), !e) return null;
					var r = e.segments ? e.segments.length : -1,
						s = void 0;
					if (t < r && (s = e.segments[t]) && s.availabilityIdx === t) return s;
					for (var i = 0; i < r; i++)
						if ((s = e.segments[i]) && s.availabilityIdx === t) return s;
					return null
				}
				return {
					getSegmentByIndex: r,
					getSegmentByTime: function(e, t) {
						return n(), r(e, function(e, t) {
							if (!e) return -1;
							var n = e.segments,
								r = n ? n.length : null,
								s = -1,
								i = void 0,
								a = void 0,
								o = void 0,
								u = void 0,
								l = void 0;
							if (n && r > 0)
								for (l = 0; l < r; l++)
									if (a = n[l], o = a.presentationStartTime, u = a.duration, t + (i = u / 2) >= o && t - i < o + u) {
										s = a.availabilityIdx;
										break
									} return s
						}(e, t))
					}
				}
			}
			a.__dashjs_factory_name = "SegmentBaseGetter";
			var o = r.default.getClassFactory(a);
			t.default = o
		},
		"./node_modules/dashjs/build/es5/src/dash/utils/SegmentsUtils.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.unescapeDollarsInTemplate = function(e) {
				return e ? e.split("$$").join("$") : e
			}, t.replaceIDForTemplate = function(e, t) {
				if (!t || !e || -1 === e.indexOf("$RepresentationID$")) return e;
				var n = t.toString();
				return e.split("$RepresentationID$").join(n)
			}, t.replaceTokenForTemplate = o, t.getIndexBasedSegment = function(e, t, n, r) {
				var s, i, a = void 0;
				a = n.segmentDuration, isNaN(a) && (a = n.adaptation.period.duration);
				s = parseFloat((n.adaptation.period.start + r * a).toFixed(5)), i = parseFloat((s + a).toFixed(5));
				var o = u(n, a, s, e.calcMediaTimeFromPresentationTime(s, n), e.calcAvailabilityStartTimeFromPresentationTime(s, n.adaptation.period.mpd, t), e, i, t, r);
				if (!l(e, n, o, t)) return null;
				return o
			}, t.getTimeBasedSegment = function(e, t, n, r, s, i, a, d, c, f) {
				var h, m, g = r / i,
					_ = Math.min(s / i, n.adaptation.period.mpd.maxSegmentDuration),
					p = void 0;
				if (h = e.calcPresentationTimeFromMediaTime(g, n), m = h + _, p = u(n, _, h, g, n.adaptation.period.mpd.manifest.loadedTime, e, m, t, c), !l(e, n, p, t)) return null;
				return p.replacementTime = f || r, a = o(a, "Number", p.replacementNumber), a = o(a, "Time", p.replacementTime), p.media = a, p.mediaRange = d, p
			};
			var r, s = n("./node_modules/dashjs/build/es5/src/dash/vo/Segment.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				};

			function a(e, t) {
				for (; e.length < t;) e = "0" + e;
				return e
			}

			function o(e, t, n) {
				var r = void 0,
					s = void 0,
					i = void 0,
					o = void 0,
					u = void 0,
					l = void 0,
					d = t.length,
					c = "%0".length;
				if (!e) return e;
				for (;;) {
					if ((r = e.indexOf("$" + t)) < 0) return e;
					if ((s = e.indexOf("$", r + d)) < 0) return e;
					if ((i = e.indexOf("%0", r + d)) > r && i < s) switch (o = e.charAt(s - 1), u = parseInt(e.substring(i + c, s - 1), 10), o) {
						case "d":
						case "i":
						case "u":
							l = a(n.toString(), u);
							break;
						case "x":
							l = a(n.toString(16), u);
							break;
						case "X":
							l = a(n.toString(16), u).toUpperCase();
							break;
						case "o":
							l = a(n.toString(8), u);
							break;
						default:
							return e
					} else l = n;
					e = e.substring(0, r) + l + e.substring(s + 1)
				}
			}

			function u(e, t, n, r, s, a, o, u, l) {
				var d, c = new i.default;
				return c.representation = e, c.duration = t, c.presentationStartTime = n, c.mediaStartTime = r, c.availabilityStartTime = s, c.availabilityEndTime = a.calcAvailabilityEndTimeFromPresentationTime(o, e.adaptation.period.mpd, u), c.wallStartTime = a.calcWallTimeForSegment(c, u), c.replacementNumber = (d = l, c.representation.startNumber + d), c.availabilityIdx = l, c
			}

			function l(e, t, n, r) {
				var s = e.getPeriodEnd(t, r),
					i = e.calcPeriodRelativeTimeFromMpdRelativeTime(t, s);
				if (e.calcPeriodRelativeTimeFromMpdRelativeTime(t, n.presentationStartTime) >= i) {
					if (!r) return !1;
					if (t.segmentAvailabilityRange && n.presentationStartTime >= t.segmentAvailabilityRange.end) return !1
				}
				return !0
			}
		},
		"./node_modules/dashjs/build/es5/src/dash/utils/TemplateSegmentsGetter.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = a(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = a(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				i = n("./node_modules/dashjs/build/es5/src/dash/utils/SegmentsUtils.js");

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function o(e, t) {
				var n = (e = e || {}).timelineConverter;

				function r() {
					if (!n || !n.hasOwnProperty("calcPeriodRelativeTimeFromMpdRelativeTime")) throw new Error(s.default.MISSING_CONFIG_ERROR)
				}

				function a(e, s) {
					if (r(), !e) return null;
					var a = e.adaptation.period.mpd.manifest.Period_asArray[e.adaptation.period.index].AdaptationSet_asArray[e.adaptation.index].Representation_asArray[e.index].SegmentTemplate;
					s = Math.max(s, 0);
					var o = (0, i.getIndexBasedSegment)(n, t, e, s);
					if (o) {
						o.replacementTime = Math.round((s - 1) * e.segmentDuration * e.timescale, 10);
						var u = a.media;
						u = (0, i.replaceTokenForTemplate)(u, "Number", o.replacementNumber), u = (0, i.replaceTokenForTemplate)(u, "Time", o.replacementTime), o.media = u
					}
					var l = e.segmentDuration,
						d = e.segmentAvailabilityRange;
					return isNaN(l) ? e.availableSegmentsNumber = 1 : e.availableSegmentsNumber = Math.ceil((d.end - d.start) / l), o
				}
				return {
					getSegmentByIndex: a,
					getSegmentByTime: function(e, t) {
						if (r(), !e) return null;
						var s = e.segmentDuration;
						if (isNaN(s)) return null;
						var i = n.calcPeriodRelativeTimeFromMpdRelativeTime(e, t);
						return a(e, Math.floor(i / s))
					}
				}
			}
			o.__dashjs_factory_name = "TemplateSegmentsGetter";
			var u = r.default.getClassFactory(o);
			t.default = u
		},
		"./node_modules/dashjs/build/es5/src/dash/utils/TimelineConverter.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = l(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				s = l(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				i = l(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				a = l(n("./node_modules/dashjs/build/es5/src/dash/constants/DashConstants.js")),
				o = l(n("./node_modules/dashjs/build/es5/src/dash/models/DashManifestModel.js")),
				u = l(n("./node_modules/dashjs/build/es5/src/core/Settings.js"));

			function l(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function d() {
				var e, t = this.context,
					n = (0, r.default)(t).getInstance(),
					i = (0, u.default)(t).getInstance(),
					l = void 0,
					d = void 0,
					c = void 0,
					f = void 0;

				function h(e) {
					d = e
				}

				function m(e, t, n, r) {
					return r ? n && t.timeShiftBufferDepth != Number.POSITIVE_INFINITY ? new Date(t.availabilityStartTime.getTime() + 1e3 * (e + t.timeShiftBufferDepth)) : t.availabilityEndTime : n ? new Date(t.availabilityStartTime.getTime() + 1e3 * (e - d)) : t.availabilityStartTime
				}

				function g(e, t) {
					return (e.getTime() - t.mpd.availabilityStartTime.getTime() + 1e3 * d) / 1e3
				}

				function _(e, t) {
					return e + (t.adaptation.period.start - t.presentationTimeOffset)
				}

				function p(e) {
					c || void 0 !== e.offset && (h(e.offset / 1e3), c = !0)
				}

				function E() {
					d = 0, c = !1, f = NaN
				}

				function v() {
					n.off(s.default.TIME_SYNCHRONIZATION_COMPLETED, p, this), E()
				}
				return e = {
					initialize: function() {
						E(), n.on(s.default.TIME_SYNCHRONIZATION_COMPLETED, p, this)
					},
					isTimeSyncCompleted: function() {
						return c
					},
					setTimeSyncCompleted: function(e) {
						c = e
					},
					getClientTimeOffset: function() {
						return d
					},
					setClientTimeOffset: h,
					getExpectedLiveEdge: function() {
						return f
					},
					setExpectedLiveEdge: function(e) {
						f = e
					},
					calcAvailabilityStartTimeFromPresentationTime: function(e, t, n) {
						return m.call(this, e, t, n)
					},
					calcAvailabilityEndTimeFromPresentationTime: function(e, t, n) {
						return m.call(this, e, t, n, !0)
					},
					calcPresentationTimeFromWallTime: g,
					calcPresentationTimeFromMediaTime: _,
					calcPeriodRelativeTimeFromMpdRelativeTime: function(e, t) {
						return t - e.adaptation.period.start
					},
					calcMediaTimeFromPresentationTime: function(e, t) {
						return e - t.adaptation.period.start + t.presentationTimeOffset
					},
					calcSegmentAvailabilityRange: function(e, t) {
						var n = e.adaptation.period,
							r = {
								start: n.start,
								end: n.start + n.duration
							};
						if (!t) return r;
						if (!c && e.segmentAvailabilityRange) return e.segmentAvailabilityRange;
						var s = e.segmentDuration || (e.segments && e.segments.length ? e.segments[e.segments.length - 1].duration : 0);
						if (e.segmentInfoType === a.default.SEGMENT_TIMELINE && i.get().streaming.calcSegmentAvailabilityRangeFromTimeline) return function(e) {
							var t, n = e.adaptation.period.mpd.manifest.Period_asArray[e.adaptation.period.index].AdaptationSet_asArray[e.adaptation.index],
								r = l.getRepresentationFor(e.index, n),
								s = r.SegmentTemplate.SegmentTimeline,
								i = r.SegmentTemplate.timescale,
								a = s.S_asArray,
								o = {
									start: 0,
									end: 0
								},
								u = 0,
								d = void 0,
								c = void 0,
								f = void 0;
							for (o.start = _(a[0].t / i, e), f = 0, t = a.length; f < t; f++) d = a[f], c = 0, d.hasOwnProperty("r") && (c = d.r), u += d.d / i * (1 + c);
							return o.end = o.start + u, o
						}(e);
						var o = g(new Date, n),
							u = n.start + n.duration;
						r.start = Math.max(o - n.mpd.timeShiftBufferDepth, n.start);
						var d = void 0 !== e.availabilityTimeOffset && e.availabilityTimeOffset < s ? s - e.availabilityTimeOffset : s;
						return r.end = o >= u && o - d < u ? u : o - d, r
					},
					getPeriodEnd: function(e, t) {
						var n = e.adaptation.period;
						if (!t) return n.start + n.duration;
						if (!c && e.segmentAvailabilityRange) return e.segmentAvailabilityRange;
						var r = e.segmentDuration || (e.segments && e.segments.length ? e.segments[e.segments.length - 1].duration : 0),
							s = g(new Date, n),
							i = n.start + n.duration,
							a = void 0 !== e.availabilityTimeOffset && e.availabilityTimeOffset < r ? r - e.availabilityTimeOffset : r;
						return Math.min(s - a, i)
					},
					calcWallTimeForSegment: function(e, t) {
						var n = void 0,
							r = void 0,
							s = void 0;
						return t && (n = e.representation.adaptation.period.mpd.suggestedPresentationDelay, r = e.presentationStartTime + n, s = new Date(e.availabilityStartTime.getTime() + 1e3 * r)), s
					},
					reset: v
				}, l = (0, o.default)(t).getInstance(), v(), e
			}
			d.__dashjs_factory_name = "TimelineConverter", t.default = i.default.getSingletonFactory(d)
		},
		"./node_modules/dashjs/build/es5/src/dash/utils/TimelineSegmentsGetter.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = a(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = a(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				i = n("./node_modules/dashjs/build/es5/src/dash/utils/SegmentsUtils.js");

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function o(e, t) {
				var n = (e = e || {}).timelineConverter;

				function r() {
					if (!n || !n.hasOwnProperty("calcMediaTimeFromPresentationTime") || !n.hasOwnProperty("calcSegmentAvailabilityRange")) throw new Error(s.default.MISSING_CONFIG_ERROR)
				}

				function a(e, r) {
					var s, i, a, o = e.adaptation.period.mpd.manifest.Period_asArray[e.adaptation.period.index].AdaptationSet_asArray[e.adaptation.index].Representation_asArray[e.index].SegmentTemplate || e.adaptation.period.mpd.manifest.Period_asArray[e.adaptation.period.index].AdaptationSet_asArray[e.adaptation.index].Representation_asArray[e.index].SegmentList,
						u = o.SegmentTimeline,
						l = o.SegmentURL_asArray,
						d = 0,
						c = 0,
						f = -1,
						h = void 0,
						m = void 0,
						g = void 0,
						_ = void 0,
						p = void 0,
						E = void 0;
					a = e.timescale;
					var v = !1;
					for (m = 0, i = (s = u.S_asArray).length; m < i && !v; m++) {
						if (_ = 0, (h = s[m]).hasOwnProperty("r") && (_ = h.r), h.hasOwnProperty("t") && (c = (d = h.t) / a), _ < 0) {
							if ((E = s[m + 1]) && E.hasOwnProperty("t")) p = E.t / a;
							else {
								var y = e.segmentAvailabilityRange ? e.segmentAvailabilityRange.end : n.calcSegmentAvailabilityRange(e, t).end;
								p = n.calcMediaTimeFromPresentationTime(y, e), e.segmentDuration = h.d / a
							}
							_ = Math.ceil((p - c) / (h.d / a)) - 1
						}
						for (g = 0; g <= _ && !v; g++)(v = r(d, c, o, l, h, a, ++f, m)) && (e.segmentDuration = h.d / a, (g < _ - 1 || m < i - 1) && f++), c = (d += h.d) / a
					}
					e.availableSegmentsNumber = f
				}
				return {
					getSegmentByIndex: function(e, s, o) {
						if (r(), !e) return null;
						var u = null,
							l = !1;
						return a(e, (function(r, s, a, d, c, f, h, m) {
							if (l || o < 0) {
								var g = a.media,
									_ = c.mediaRange;
								return d && (g = d[m].media || "", _ = d[m].mediaRange), u = (0, i.getTimeBasedSegment)(n, t, e, r, c.d, f, g, _, h, c.tManifest), !0
							}
							return s >= o - .5 * c.d / f && (l = !0), !1
						})), u
					},
					getSegmentByTime: function(e, s) {
						if (r(), !e) return null;
						void 0 === s && (s = null);
						var o = null,
							u = n.calcMediaTimeFromPresentationTime(s, e);
						return a(e, (function(r, s, a, l, d, c, f, h) {
							if (u < s + d.d / c) {
								var m = a.media,
									g = d.mediaRange;
								return l && (m = l[h].media || "", g = l[h].mediaRange), o = (0, i.getTimeBasedSegment)(n, t, e, r, d.d, c, m, g, f, d.tManifest), !0
							}
							return !1
						})), o
					}
				}
			}
			o.__dashjs_factory_name = "TimelineSegmentsGetter";
			var u = r.default.getClassFactory(o);
			t.default = u
		},
		"./node_modules/dashjs/build/es5/src/dash/vo/AdaptationSet.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.period = null, this.index = -1, this.type = null
			}
		},
		"./node_modules/dashjs/build/es5/src/dash/vo/BaseURL.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = function e(t, n, r, s) {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.url = t || "", this.serviceLocation = n || t || "", this.dvb_priority = r || 1, this.dvb_weight = s || 1, this.availabilityTimeOffset = 0, this.availabilityTimeComplete = !0
			};
			r.DEFAULT_DVB_PRIORITY = 1, r.DEFAULT_DVB_WEIGHT = 1, t.default = r
		},
		"./node_modules/dashjs/build/es5/src/dash/vo/Event.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.duration = NaN, this.presentationTime = NaN, this.id = NaN, this.messageData = "", this.eventStream = null, this.presentationTimeDelta = NaN
			}
		},
		"./node_modules/dashjs/build/es5/src/dash/vo/EventStream.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.adaptionSet = null, this.representation = null, this.period = null, this.timescale = 1, this.value = "", this.schemeIdUri = "", this.presentationTimeOffset = 0
			}
		},
		"./node_modules/dashjs/build/es5/src/dash/vo/ManifestInfo.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.DVRWindowSize = NaN, this.loadedTime = null, this.availableFrom = null, this.minBufferTime = NaN, this.duration = NaN, this.isDynamic = !1, this.maxFragmentDuration = null
			}
		},
		"./node_modules/dashjs/build/es5/src/dash/vo/MediaInfo.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.id = null, this.index = null, this.type = null, this.streamInfo = null, this.representationCount = 0, this.lang = null, this.viewpoint = null, this.accessibility = null, this.audioChannelConfiguration = null, this.roles = null, this.codec = null, this.mimeType = null, this.contentProtection = null, this.isText = !1, this.KID = null, this.bitrateList = null
			}
		},
		"./node_modules/dashjs/build/es5/src/dash/vo/Mpd.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.manifest = null, this.suggestedPresentationDelay = 0, this.availabilityStartTime = null, this.availabilityEndTime = Number.POSITIVE_INFINITY, this.timeShiftBufferDepth = Number.POSITIVE_INFINITY, this.maxSegmentDuration = Number.POSITIVE_INFINITY, this.minimumUpdatePeriod = NaN, this.mediaPresentationDuration = NaN
			}
		},
		"./node_modules/dashjs/build/es5/src/dash/vo/Period.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.id = null, this.index = -1, this.duration = NaN, this.start = NaN, this.mpd = null
			};
			r.DEFAULT_ID = "defaultId", t.default = r
		},
		"./node_modules/dashjs/build/es5/src/dash/vo/Representation.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
						}
					}
					return function(t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t
					}
				}(),
				i = n("./node_modules/dashjs/build/es5/src/dash/constants/DashConstants.js"),
				a = (r = i) && r.__esModule ? r : {
					default: r
				};
			var o = function() {
				function e() {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this.id = null, this.index = -1, this.adaptation = null, this.segmentInfoType = null, this.initialization = null, this.codecs = null, this.codecPrivateData = null, this.segmentDuration = NaN, this.timescale = 1, this.startNumber = 1, this.indexRange = null, this.range = null, this.presentationTimeOffset = 0, this.MSETimeOffset = NaN, this.segmentAvailabilityRange = null, this.availableSegmentsNumber = 0, this.bandwidth = NaN, this.width = NaN, this.height = NaN, this.scanType = null, this.maxPlayoutRate = NaN, this.availabilityTimeOffset = 0, this.availabilityTimeComplete = !0
				}
				return s(e, [{
					key: "hasInitialization",
					value: function() {
						return null !== this.initialization || null !== this.range
					}
				}, {
					key: "hasSegments",
					value: function() {
						return this.segmentInfoType !== a.default.BASE_URL && this.segmentInfoType !== a.default.SEGMENT_BASE && !this.indexRange
					}
				}]), e
			}();
			t.default = o
		},
		"./node_modules/dashjs/build/es5/src/dash/vo/RepresentationInfo.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.id = null, this.quality = null, this.DVRWindow = null, this.fragmentDuration = null, this.mediaInfo = null, this.MSETimeOffset = null
			}
		},
		"./node_modules/dashjs/build/es5/src/dash/vo/Segment.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.indexRange = null, this.index = null, this.mediaRange = null, this.media = null, this.duration = NaN, this.replacementTime = null, this.replacementNumber = NaN, this.mediaStartTime = NaN, this.presentationStartTime = NaN, this.availabilityStartTime = NaN, this.availabilityEndTime = NaN, this.availabilityIdx = NaN, this.wallStartTime = NaN, this.representation = null
			}
		},
		"./node_modules/dashjs/build/es5/src/dash/vo/StreamInfo.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.id = null, this.index = null, this.start = NaN, this.duration = NaN, this.manifestInfo = null, this.isLast = !0
			}
		},
		"./node_modules/dashjs/build/es5/src/dash/vo/UTCTiming.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.schemeIdUri = "", this.value = ""
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/FragmentLoader.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = u(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				s = u(n("./node_modules/dashjs/build/es5/src/streaming/net/URLLoader.js")),
				i = u(n("./node_modules/dashjs/build/es5/src/streaming/vo/HeadRequest.js")),
				a = u(n("./node_modules/dashjs/build/es5/src/streaming/vo/DashJSError.js")),
				o = u(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function u(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function l(e) {
				e = e || {};
				var t = this.context,
					n = e.eventBus,
					o = e.events,
					u = e.urlUtils,
					l = e.errors,
					d = void 0,
					c = void 0;
				return d = {
					checkForExistence: function(e) {
						var t = function(t) {
							n.trigger(o.CHECK_FOR_EXISTENCE_COMPLETED, {
								request: e,
								exists: t
							})
						};
						if (e) {
							var r = new i.default(e.url);
							c.load({
								request: r,
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
						var t = function(t, r) {
							n.trigger(o.LOADING_COMPLETED, {
								request: e,
								response: t || null,
								error: r || null,
								sender: d
							})
						};
						e ? c.load({
							request: e,
							progress: function(t) {
								n.trigger(o.LOADING_PROGRESS, {
									request: e,
									stream: t.stream
								}), t.data && n.trigger(o.LOADING_DATA_PROGRESS, {
									request: e,
									response: t.data || null,
									error: null,
									sender: d
								})
							},
							success: function(e) {
								t(e)
							},
							error: function(e, n, r) {
								t(void 0, new a.default(l.FRAGMENT_LOADER_LOADING_FAILURE_ERROR_CODE, r, n))
							},
							abort: function(e) {
								e && n.trigger(o.LOADING_ABANDONED, {
									mediaType: e.mediaType,
									request: e,
									sender: d
								})
							}
						}) : t(void 0, new a.default(l.FRAGMENT_LOADER_NULL_REQUEST_ERROR_CODE, l.FRAGMENT_LOADER_NULL_REQUEST_ERROR_MESSAGE))
					},
					abort: function() {
						c && c.abort()
					},
					reset: function() {
						c && (c.abort(), c = null)
					}
				}, c = (0, s.default)(t).create({
					errHandler: e.errHandler,
					errors: l,
					dashMetrics: e.dashMetrics,
					mediaPlayerModel: e.mediaPlayerModel,
					requestModifier: e.requestModifier,
					useFetch: e.settings.get().streaming.lowLatencyEnabled,
					urlUtils: u,
					constants: r.default,
					boxParser: e.boxParser,
					dashConstants: e.dashConstants,
					requestTimeout: e.settings.get().streaming.fragmentRequestTimeout
				}), d
			}
			l.__dashjs_factory_name = "FragmentLoader", t.default = o.default.getClassFactory(l)
		},
		"./node_modules/dashjs/build/es5/src/streaming/ManifestLoader.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = _(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				s = _(n("./node_modules/dashjs/build/es5/src/dash/constants/DashConstants.js")),
				i = _(n("./node_modules/dashjs/build/es5/src/streaming/controllers/XlinkController.js")),
				a = _(n("./node_modules/dashjs/build/es5/src/streaming/net/URLLoader.js")),
				o = _(n("./node_modules/dashjs/build/es5/src/streaming/utils/URLUtils.js")),
				u = _(n("./node_modules/dashjs/build/es5/src/streaming/vo/TextRequest.js")),
				l = _(n("./node_modules/dashjs/build/es5/src/streaming/vo/DashJSError.js")),
				d = n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js"),
				c = _(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				f = _(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				h = _(n("./node_modules/dashjs/build/es5/src/core/errors/Errors.js")),
				m = _(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				g = _(n("./node_modules/dashjs/build/es5/src/dash/parser/DashParser.js"));

			function _(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function p(e) {
				e = e || {};
				var t = this.context,
					n = e.debug,
					m = (0, c.default)(t).getInstance(),
					_ = (0, o.default)(t).getInstance(),
					p = void 0,
					E = void 0,
					v = void 0,
					y = void 0,
					T = void 0,
					b = e.mssHandler,
					S = e.errHandler;

				function A(e) {
					m.trigger(f.default.INTERNAL_MANIFEST_LOADED, {
						manifest: e.manifest
					})
				}
				return p = {
					load: function(e) {
						var s = new u.default(e, d.HTTPRequest.MPD_TYPE);
						v.load({
							request: s,
							success: function(s, i, a) {
								if (y) {
									var o = void 0,
										u = void 0,
										d = void 0;
									if (a && a !== e ? (u = _.parseBaseUrl(a), o = a) : (_.isRelative(e) && (e = _.resolve(e, window.location.href)), u = _.parseBaseUrl(e)), null === T && (T = function(e) {
											var r = null;
											return e.indexOf("SmoothStreamingMedia") > -1 ? (b && (r = b.createMssParser(), b.registerEvents()), r) : e.indexOf("MPD") > -1 ? (0, g.default)(t).create({
												debug: n
											}) : r
										}(s)), null !== T) {
										y.setMatchers(T.getMatchers()), y.setIron(T.getIron());
										try {
											d = T.parse(s)
										} catch (c) {
											return void m.trigger(f.default.INTERNAL_MANIFEST_LOADED, {
												manifest: null,
												error: new l.default(h.default.MANIFEST_LOADER_PARSING_FAILURE_ERROR_CODE, h.default.MANIFEST_LOADER_PARSING_FAILURE_ERROR_MESSAGE + "" + e)
											})
										}
										d ? (d.url = o || e, d.originalUrl || (d.originalUrl = d.url), d.hasOwnProperty(r.default.LOCATION) && (u = _.parseBaseUrl(d.Location_asArray[0]), E.debug("BaseURI set by Location to: " + u)), d.baseUri = u, d.loadedTime = new Date, y.resolveManifestOnLoad(d), m.trigger(f.default.ORIGINAL_MANIFEST_LOADED, {
											originalManifest: s
										})) : m.trigger(f.default.INTERNAL_MANIFEST_LOADED, {
											manifest: null,
											error: new l.default(h.default.MANIFEST_LOADER_PARSING_FAILURE_ERROR_CODE, h.default.MANIFEST_LOADER_PARSING_FAILURE_ERROR_MESSAGE + "" + e)
										})
									} else m.trigger(f.default.INTERNAL_MANIFEST_LOADED, {
										manifest: null,
										error: new l.default(h.default.MANIFEST_LOADER_PARSING_FAILURE_ERROR_CODE, h.default.MANIFEST_LOADER_PARSING_FAILURE_ERROR_MESSAGE + "" + e)
									})
								}
							},
							error: function(t, n, r) {
								m.trigger(f.default.INTERNAL_MANIFEST_LOADED, {
									manifest: null,
									error: new l.default(h.default.MANIFEST_LOADER_LOADING_FAILURE_ERROR_CODE, h.default.MANIFEST_LOADER_LOADING_FAILURE_ERROR_MESSAGE + (e + ", ") + r)
								})
							}
						})
					},
					reset: function() {
						m.off(f.default.XLINK_READY, A, p), y && (y.reset(), y = null), v && (v.abort(), v = null), b && b.reset()
					}
				}, E = n.getLogger(p), m.on(f.default.XLINK_READY, A, p), v = (0, a.default)(t).create({
					errHandler: e.errHandler,
					dashMetrics: e.dashMetrics,
					mediaPlayerModel: e.mediaPlayerModel,
					requestModifier: e.requestModifier,
					useFetch: e.settings.get().streaming.lowLatencyEnabled,
					urlUtils: _,
					constants: r.default,
					dashConstants: s.default,
					errors: h.default
				}), y = (0, i.default)(t).create({
					errHandler: S,
					dashMetrics: e.dashMetrics,
					mediaPlayerModel: e.mediaPlayerModel,
					requestModifier: e.requestModifier,
					settings: e.settings
				}), T = null, p
			}
			p.__dashjs_factory_name = "ManifestLoader";
			var E = m.default.getClassFactory(p);
			t.default = E
		},
		"./node_modules/dashjs/build/es5/src/streaming/ManifestUpdater.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = l(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				s = l(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				i = l(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				a = l(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				o = l(n("./node_modules/dashjs/build/es5/src/core/errors/Errors.js")),
				u = l(n("./node_modules/dashjs/build/es5/src/dash/constants/DashConstants.js"));

			function l(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function d() {
				var e = this.context,
					t = (0, r.default)(e).getInstance(),
					n = void 0,
					i = void 0,
					l = void 0,
					d = void 0,
					c = void 0,
					f = void 0,
					h = void 0,
					m = void 0,
					g = void 0,
					_ = void 0,
					p = void 0,
					E = void 0;

				function v() {
					l = NaN, h = !1, c = !0, f = !1, y()
				}

				function y() {
					null !== d && (clearTimeout(d), d = null)
				}

				function T(e) {
					y(), f || (isNaN(e) && !isNaN(l) && (e = 1e3 * l), isNaN(e) || (i.debug("Refresh manifest in " + e + " milliseconds."), d = setTimeout(A, e)))
				}

				function b() {
					h = !0;
					var e = g.getValue(),
						t = e.url,
						n = _.getLocation(e);
					n && (t = n), m.load(t)
				}

				function S(e) {
					if (g.getValue() && g.getValue().type === u.default.DYNAMIC && e.type === u.default.STATIC) return t.trigger(s.default.DYNAMIC_TO_STATIC), h = !1, void(f = !0);
					g.setValue(e);
					var n = new Date,
						r = (n.getTime() - e.loadedTime.getTime()) / 1e3;
					1e3 * (l = _.getManifestUpdatePeriod(e, r)) > 2147483647 && (l = 2147483.647), t.trigger(s.default.MANIFEST_UPDATED, {
						manifest: e
					}), i.info("Manifest has been refreshed at " + n + "[" + n.getTime() / 1e3 + "] "), c || T()
				}

				function A() {
					c || (h ? T(E.get().streaming.manifestUpdateRetryInterval) : b())
				}

				function I(e) {
					e.error ? e.error.code === o.default.MANIFEST_LOADER_PARSING_FAILURE_ERROR_CODE && p.error(e.error) : S(e.manifest)
				}

				function R() {
					c = !1, T()
				}

				function M() {
					(c = !E.get().streaming.scheduleWhilePaused) && y()
				}

				function C() {
					h = !1
				}
				return n = {
					initialize: function() {
						v(), t.on(s.default.STREAMS_COMPOSED, C, this), t.on(s.default.PLAYBACK_STARTED, R, this), t.on(s.default.PLAYBACK_PAUSED, M, this), t.on(s.default.INTERNAL_MANIFEST_LOADED, I, this)
					},
					setManifest: function(e) {
						S(e)
					},
					refreshManifest: b,
					setConfig: function(e) {
						e && (e.manifestModel && (g = e.manifestModel), e.adapter && (_ = e.adapter), e.manifestLoader && (m = e.manifestLoader), e.errHandler && (p = e.errHandler), e.settings && (E = e.settings))
					},
					reset: function() {
						t.off(s.default.PLAYBACK_STARTED, R, this), t.off(s.default.PLAYBACK_PAUSED, M, this), t.off(s.default.STREAMS_COMPOSED, C, this), t.off(s.default.INTERNAL_MANIFEST_LOADED, I, this), v()
					}
				}, i = (0, a.default)(e).getInstance().getLogger(n), n
			}
			d.__dashjs_factory_name = "ManifestUpdater", t.default = i.default.getClassFactory(d)
		},
		"./node_modules/dashjs/build/es5/src/streaming/MediaPlayer.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = V(n("./node_modules/dashjs/build/es5/externals/cea608-parser.js")),
				s = V(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				i = V(n("./node_modules/dashjs/build/es5/src/dash/constants/DashConstants.js")),
				a = V(n("./node_modules/dashjs/build/es5/src/streaming/constants/MetricsConstants.js")),
				o = V(n("./node_modules/dashjs/build/es5/src/streaming/controllers/PlaybackController.js")),
				u = V(n("./node_modules/dashjs/build/es5/src/streaming/controllers/StreamController.js")),
				l = V(n("./node_modules/dashjs/build/es5/src/streaming/controllers/GapController.js")),
				d = V(n("./node_modules/dashjs/build/es5/src/streaming/controllers/MediaController.js")),
				c = V(n("./node_modules/dashjs/build/es5/src/streaming/controllers/BaseURLController.js")),
				f = V(n("./node_modules/dashjs/build/es5/src/streaming/ManifestLoader.js")),
				h = V(n("./node_modules/dashjs/build/es5/src/streaming/utils/ErrorHandler.js")),
				m = V(n("./node_modules/dashjs/build/es5/src/streaming/utils/Capabilities.js")),
				g = V(n("./node_modules/dashjs/build/es5/src/streaming/text/TextTracks.js")),
				_ = V(n("./node_modules/dashjs/build/es5/src/streaming/utils/RequestModifier.js")),
				p = V(n("./node_modules/dashjs/build/es5/src/streaming/text/TextController.js")),
				E = V(n("./node_modules/dashjs/build/es5/src/streaming/models/URIFragmentModel.js")),
				v = V(n("./node_modules/dashjs/build/es5/src/streaming/models/ManifestModel.js")),
				y = V(n("./node_modules/dashjs/build/es5/src/streaming/models/MediaPlayerModel.js")),
				T = V(n("./node_modules/dashjs/build/es5/src/streaming/controllers/AbrController.js")),
				b = V(n("./node_modules/dashjs/build/es5/src/streaming/net/SchemeLoaderFactory.js")),
				S = V(n("./node_modules/dashjs/build/es5/src/streaming/models/VideoModel.js")),
				A = V(n("./node_modules/dashjs/build/es5/src/streaming/models/CmcdModel.js")),
				I = V(n("./node_modules/dashjs/build/es5/src/streaming/utils/DOMStorage.js")),
				R = V(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				M = V(n("./node_modules/dashjs/build/es5/src/core/errors/Errors.js")),
				C = V(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				D = V(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				N = V(n("./node_modules/dashjs/build/es5/src/streaming/MediaPlayerEvents.js")),
				O = V(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				j = V(n("./node_modules/dashjs/build/es5/src/core/Settings.js")),
				w = n("./node_modules/dashjs/build/es5/src/core/Version.js"),
				P = V(n("./node_modules/dashjs/build/es5/src/dash/controllers/SegmentBaseController.js")),
				L = V(n("./node_modules/dashjs/build/es5/src/dash/DashAdapter.js")),
				F = V(n("./node_modules/dashjs/build/es5/src/dash/DashMetrics.js")),
				x = V(n("./node_modules/dashjs/build/es5/src/dash/utils/TimelineConverter.js")),
				U = n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js"),
				B = V(n("./node_modules/dashjs/build/es5/externals/base64.js")),
				k = V(n("./node_modules/codem-isoboxer/dist/iso_boxer.js")),
				G = V(n("./node_modules/dashjs/build/es5/src/streaming/vo/DashJSError.js")),
				q = n("./node_modules/dashjs/build/es5/src/streaming/utils/SupervisorTools.js"),
				H = V(n("./node_modules/dashjs/build/es5/src/streaming/ManifestUpdater.js")),
				K = V(n("./node_modules/dashjs/build/es5/src/streaming/utils/URLUtils.js")),
				Y = V(n("./node_modules/dashjs/build/es5/src/streaming/utils/BoxParser.js"));

			function V(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function z() {
				var e = "You must first call initialize() and set a source before calling this method",
					t = "You must first call initialize() and set a valid source and view before calling this method",
					n = "You must first call attachView() to set the video element before calling this method",
					V = "You must first call attachSource() with a valid source before calling this method",
					z = "MediaPlayer not initialized!",
					W = this.context,
					X = (0, C.default)(W).getInstance(),
					Q = (0, j.default)(W).getInstance(),
					J = (0, R.default)(W).getInstance({
						settings: Q
					}),
					Z = void 0,
					$ = void 0,
					ee = void 0,
					te = void 0,
					ne = void 0,
					re = void 0,
					se = void 0,
					ie = void 0,
					ae = void 0,
					oe = void 0,
					ue = void 0,
					le = void 0,
					de = void 0,
					ce = void 0,
					fe = void 0,
					he = void 0,
					me = void 0,
					ge = void 0,
					_e = void 0,
					pe = void 0,
					Ee = void 0,
					ve = void 0,
					ye = void 0,
					Te = void 0,
					be = void 0,
					Se = void 0,
					Ae = void 0,
					Ie = void 0,
					Re = void 0,
					Me = void 0,
					Ce = void 0,
					De = void 0;

				function Ne() {
					He(null), Ge(null), te = null, de && (de.reset(), de = null), ce && (ce.reset(), ce = null), De.reset(), Q.reset(), he && (he.reset(), he = null)
				}

				function Oe() {
					return !!ee && !!Ie.getElement()
				}

				function je() {
					return (0, w.getVersionString)()
				}

				function we() {
					if (!se) throw t;
					return Te.isPaused()
				}

				function Pe(e) {
					var t = be.getCurrentDVRInfo();
					if (!t) return 0;
					var n = Te.getLiveDelay(),
						r = t.range.start + e;
					return r > t.range.end - n && (r = t.range.end - n), r
				}

				function Le(e) {
					if (!se) throw t;
					var n = ke().currentTime;
					if (void 0 !== e) n = ve.getTimeRelativeToStreamId(n, e);
					else if (Te.getIsDynamic()) {
						var r = be.getCurrentDVRInfo();
						n = null === r ? 0 : Fe() - (r.range.end - r.time)
					}
					return n
				}

				function Fe() {
					if (!se) throw t;
					var e = ke().duration;
					if (Te.getIsDynamic()) {
						var n, r = be.getCurrentDVRInfo();
						if (!r) return 0;
						e = (n = r.range.end - r.range.start) < r.manifestInfo.DVRWindowSize ? n : r.manifestInfo.DVRWindowSize
					}
					return e
				}

				function xe(e) {
					(0, q.checkParameterType)(e, "boolean"), ie = e
				}

				function Ue() {
					ge.restoreDefaultUTCTimingSources()
				}

				function Be() {
					return be
				}

				function ke() {
					if (!Ie.getElement()) throw n;
					return Ie.getElement()
				}

				function Ge(e) {
					if (!ne) throw z;
					Ie.setElement(e), e && (ze(), function() {
						if (ce) return;
						var e = dashjs.MetricsReporting;
						if ("function" == typeof e) {
							var t = e(W).create();
							ce = t.createMetricsReporting({
								debug: J,
								eventBus: X,
								mediaElement: ke(),
								adapter: me,
								dashMetrics: be,
								events: D.default,
								constants: s.default,
								metricsConstants: a.default
							})
						}
					}(), function() {
						if (fe) return;
						var e = dashjs.MssHandler;
						"function" == typeof e && (M.default.extend(e.errors), fe = e(W).create({
							eventBus: X,
							mediaPlayerModel: ge,
							dashMetrics: be,
							manifestModel: Se,
							playbackController: Te,
							streamController: ve,
							protectionController: de,
							baseURLController: pe,
							errHandler: _e,
							events: D.default,
							constants: s.default,
							debug: J,
							initSegmentType: U.HTTPRequest.INIT_SEGMENT_TYPE,
							BASE64: B.default,
							ISOBoxer: k.default,
							settings: Q
						}))
					}(), ve && ve.switchToVideoElement()), se && Ye(), Qe()
				}

				function qe(t) {
					if (!re) throw e;
					var n = ve.getActiveStreamInfo();
					return le.getTracksFor(t, n)
				}

				function He(e) {
					if (!ne) throw z;
					"string" == typeof e && Me.initialize(e), ee = e, (re || se) && Ye(), Oe() && Qe()
				}

				function Ke() {
					if (!re) throw e;
					var t = ve.getActiveStreamInfo();
					return t ? ve.getStreamById(t.id) : null
				}

				function Ye() {
					se = !1, re = !1, me.reset(), ve.reset(), ye.reset(), Te.reset(), ae.reset(), le.reset(), Re.reset(), de && (Q.get().streaming.keepProtectionMediaKeys ? de.stop() : (de.reset(), de = null, ze())), Ae.reset()
				}

				function Ve() {
					return (0, f.default)(W).create({
						debug: J,
						errHandler: _e,
						dashMetrics: be,
						mediaPlayerModel: ge,
						requestModifier: (0, _.default)(W).getInstance(),
						mssHandler: fe,
						settings: Q
					})
				}

				function ze() {
					if (de) return de;
					var e = dashjs.Protection;
					if ("function" == typeof e) {
						var t = e(W).create();
						return D.default.extend(e.events), N.default.extend(e.events, {
							publicOnly: !0
						}), M.default.extend(e.errors), Ee || (Ee = (0, m.default)(W).getInstance()), de = t.createProtectionSystem({
							debug: J,
							errHandler: _e,
							videoModel: Ie,
							capabilities: Ee,
							eventBus: X,
							events: D.default,
							BASE64: B.default,
							constants: s.default
						})
					}
					return null
				}

				function We() {
					if (!ne) throw z;
					if (he) return he;
					var e = dashjs.OfflineController;
					if ("function" == typeof e) {
						D.default.extend(e.events), N.default.extend(e.events, {
							publicOnly: !0
						}), M.default.extend(e.errors);
						var t = Ve(),
							n = (0, H.default)(W).create();
						return n.setConfig({
							manifestModel: Se,
							adapter: me,
							manifestLoader: t,
							errHandler: _e
						}), he = e(W).create({
							debug: J,
							manifestUpdater: n,
							baseURLController: pe,
							manifestLoader: t,
							manifestModel: Se,
							mediaPlayerModel: ge,
							abrController: ae,
							playbackController: Te,
							adapter: me,
							errHandler: _e,
							dashMetrics: be,
							timelineConverter: ue,
							schemeLoaderFactory: oe,
							eventBus: X,
							events: D.default,
							errors: M.default,
							constants: s.default,
							settings: Q,
							dashConstants: i.default,
							urlUtils: (0, K.default)(W).getInstance()
						})
					}
					return null
				}

				function Xe(e) {
					var t = be.getCurrentDVRInfo();
					return t ? e + (t.manifestInfo.availableFrom.getTime() / 1e3 + t.range.start) : 0
				}

				function Qe() {
					var e;
					he && he.resetRecords(), !re && ee && (re = !0, $.info("Streaming Initialized"), e = Ve(), ve || (ve = (0, u.default)(W).getInstance()), ve.setConfig({
						capabilities: Ee,
						manifestLoader: e,
						manifestModel: Se,
						mediaPlayerModel: ge,
						protectionController: de,
						adapter: me,
						dashMetrics: be,
						errHandler: _e,
						timelineConverter: ue,
						videoModel: Ie,
						playbackController: Te,
						abrController: ae,
						mediaController: le,
						textController: Re,
						settings: Q,
						baseURLController: pe
					}), ye.setConfig({
						settings: Q,
						playbackController: Te,
						streamController: ve,
						videoModel: Ie,
						timelineConverter: ue,
						adapter: me
					}), Te.setConfig({
						streamController: ve,
						dashMetrics: be,
						mediaPlayerModel: ge,
						adapter: me,
						videoModel: Ie,
						timelineConverter: ue,
						uriFragmentModel: Me,
						settings: Q
					}), ae.setConfig({
						streamController: ve,
						domStorage: Ce,
						mediaPlayerModel: ge,
						dashMetrics: be,
						adapter: me,
						videoModel: Ie,
						settings: Q
					}), Re.setConfig({
						errHandler: _e,
						manifestModel: Se,
						adapter: me,
						mediaController: le,
						streamController: ve,
						videoModel: Ie
					}), Ae.setConfig({
						abrController: ae,
						dashMetrics: be,
						playbackController: Te
					}), ve.initialize(ie, te), ye.initialize(), Ae.initialize(), "string" == typeof ee ? ve.load(ee) : ve.loadWithManifest(ee)), !se && Oe() && (se = !0, $.info("Playback Initialized"))
				}
				return Z = {
					initialize: function(e, t, n) {
						Ee || (Ee = (0, m.default)(W).getInstance()), _e = (0, h.default)(W).getInstance(), Ee.supportsMediaSource() ? ne || (ne = !0, ue = (0, x.default)(W).getInstance(), ae || (ae = (0, T.default)(W).getInstance()).setConfig({
							settings: Q
						}), oe || (oe = (0, b.default)(W).getInstance()), Te || (Te = (0, o.default)(W).getInstance()), le || (le = (0, d.default)(W).getInstance()), ve || (ve = (0, u.default)(W).getInstance()), ye || (ye = (0, l.default)(W).getInstance()), me = (0, L.default)(W).getInstance(), Se = (0, v.default)(W).getInstance(), Ae = (0, A.default)(W).getInstance(), be = (0, F.default)(W).getInstance({
							settings: Q
						}), Re = (0, p.default)(W).getInstance(), Ce = (0, I.default)(W).getInstance({
							settings: Q
						}), me.setConfig({
							constants: s.default,
							cea608parser: r.default,
							errHandler: _e,
							BASE64: B.default
						}), pe || (pe = (0, c.default)(W).create()), pe.setConfig({
							adapter: me
						}), (De = (0, P.default)(W).getInstance({
							dashMetrics: be,
							mediaPlayerModel: ge,
							errHandler: _e,
							baseURLController: pe,
							events: D.default,
							eventBus: X,
							debug: J,
							boxParser: (0, Y.default)(W).getInstance(),
							requestModifier: (0, _.default)(W).getInstance(),
							errors: M.default
						})).initialize(), le.setConfig({
							domStorage: Ce,
							settings: Q
						}), Ue(), xe(void 0 === n || n), We(), e && Ge(e), t && He(t), $.info("[dash.js " + je() + "] MediaPlayer has been initialized")) : _e.error(new G.default(M.default.CAPABILITY_MEDIASOURCE_ERROR_CODE, M.default.CAPABILITY_MEDIASOURCE_ERROR_MESSAGE))
					},
					setConfig: function(e) {
						e && (e.capabilities && (Ee = e.capabilities), e.streamController && (ve = e.streamController), e.gapController && (ye = e.gapController), e.playbackController && (Te = e.playbackController), e.mediaPlayerModel && (ge = e.mediaPlayerModel), e.abrController && (ae = e.abrController), e.schemeLoaderFactory && (oe = e.schemeLoaderFactory), e.mediaController && (le = e.mediaController), e.settings && (Q = e.settings))
					},
					on: function(e, t, n, r) {
						X.on(e, t, n, r)
					},
					off: function(e, t, n) {
						X.off(e, t, n)
					},
					extend: function(e, t, n) {
						O.default.extend(e, t, n, W)
					},
					attachView: Ge,
					attachSource: He,
					isReady: Oe,
					preload: function() {
						if (Ie.getElement() || re) return !1;
						if (!ee) throw V;
						Qe()
					},
					play: function() {
						if (!se) throw t;
						(!ie || we() && se) && Te.play()
					},
					isPaused: we,
					pause: function() {
						if (!se) throw t;
						Te.pause()
					},
					isSeeking: function() {
						if (!se) throw t;
						return Te.isSeeking()
					},
					isDynamic: function() {
						if (!se) throw t;
						return Te.getIsDynamic()
					},
					seek: function(e) {
						if (!se) throw t;
						if ((0, q.checkParameterType)(e, "number"), isNaN(e)) throw s.default.BAD_ARGUMENT_ERROR;
						var n = Te.getIsDynamic() ? Pe(e) : e;
						Te.seek(n)
					},
					setPlaybackRate: function(e) {
						ke().playbackRate = e
					},
					getPlaybackRate: function() {
						return ke().playbackRate
					},
					setMute: function(e) {
						(0, q.checkParameterType)(e, "boolean"), ke().muted = e
					},
					isMuted: function() {
						return ke().muted
					},
					setVolume: function(e) {
						if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw s.default.BAD_ARGUMENT_ERROR;
						ke().volume = e
					},
					getVolume: function() {
						return ke().volume
					},
					time: Le,
					duration: Fe,
					timeAsUTC: function() {
						if (!se) throw t;
						return Le() < 0 ? NaN : Xe(Le())
					},
					durationAsUTC: function() {
						if (!se) throw t;
						return Xe(Fe())
					},
					getActiveStream: Ke,
					getDVRWindowSize: function() {
						var e = be.getCurrentDVRInfo();
						return e ? e.manifestInfo.DVRWindowSize : 0
					},
					getDVRSeekOffset: Pe,
					convertToTimeCode: function(e) {
						e = Math.max(e, 0);
						var t = Math.floor(e / 3600),
							n = Math.floor(e % 3600 / 60),
							r = Math.floor(e % 3600 % 60);
						return (0 === t ? "" : t < 10 ? "0" + t.toString() + ":" : t.toString() + ":") + (n < 10 ? "0" + n.toString() : n.toString()) + ":" + (r < 10 ? "0" + r.toString() : r.toString())
					},
					formatUTC: function(e, t, n) {
						var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
							s = new Date(1e3 * e),
							i = s.toLocaleDateString(t),
							a = s.toLocaleTimeString(t, {
								hour12: n
							});
						return r ? a + " " + i : a
					},
					getVersion: je,
					getDebug: function() {
						return J
					},
					getBufferLength: function(e) {
						var t = [s.default.VIDEO, s.default.AUDIO, s.default.FRAGMENTED_TEXT];
						if (e) {
							if (-1 !== t.indexOf(e)) {
								var n = Be().getCurrentBufferLevel(e);
								return n || NaN
							}
							return $.warn("getBufferLength requested for invalid type"), NaN
						}
						var r = t.map((function(e) {
							return qe(e).length > 0 ? Be().getCurrentBufferLevel(e) : Number.MAX_VALUE
						})).reduce((function(e, t) {
							return Math.min(e, t)
						}));
						return r === Number.MAX_VALUE ? NaN : r
					},
					getTTMLRenderingDiv: function() {
						return Ie ? Ie.getTTMLRenderingDiv() : null
					},
					getVideoElement: ke,
					getSource: function() {
						if (!ee) throw V;
						return ee
					},
					getCurrentLiveLatency: function() {
						if (!ne) throw z;
						return se ? Te.getCurrentLiveLatency() : NaN
					},
					getTopBitrateInfoFor: function(t) {
						if (!re) throw e;
						return ae.getTopBitrateInfoFor(t)
					},
					setAutoPlay: xe,
					getAutoPlay: function() {
						return ie
					},
					getDashMetrics: Be,
					getQualityFor: function(t) {
						if (!re) throw e;
						if (t === s.default.IMAGE) {
							var n = Ke();
							if (!n) return -1;
							var r = n.getThumbnailController();
							return r ? r.getCurrentTrackIndex() : -1
						}
						return ae.getQualityFor(t)
					},
					setQualityFor: function(t, n) {
						if (!re) throw e;
						if (t === s.default.IMAGE) {
							var r = Ke();
							if (!r) return;
							var i = r.getThumbnailController();
							i && i.setTrackByIndex(n)
						}
						ae.setPlaybackQuality(t, ve.getActiveStreamInfo(), n)
					},
					updatePortalSize: function() {
						ae.setElementSize(), ae.setWindowResizeEventCalled(!0)
					},
					setTextDefaultLanguage: function(e) {
						$.warn('setTextDefaultLanguage is deprecated and will be removed in version 3.2.0. Please use setInitialMediaSettingsFor("fragmentedText", { lang: lang }) instead'), void 0 === Re && (Re = (0, p.default)(W).getInstance()), Re.setTextDefaultLanguage(e)
					},
					getTextDefaultLanguage: function() {
						return $.warn('getTextDefaultLanguage is deprecated and will be removed in version 3.2.0. Please use getInitialMediaSettingsFor("fragmentedText").lang instead'), void 0 === Re && (Re = (0, p.default)(W).getInstance()), Re.getTextDefaultLanguage()
					},
					setTextDefaultEnabled: function(e) {
						void 0 === Re && (Re = (0, p.default)(W).getInstance()), Re.setTextDefaultEnabled(e)
					},
					getTextDefaultEnabled: function() {
						return void 0 === Re && (Re = (0, p.default)(W).getInstance()), Re.getTextDefaultEnabled()
					},
					enableText: function(e) {
						void 0 === Re && (Re = (0, p.default)(W).getInstance()), Re.enableText(e)
					},
					enableForcedTextStreaming: function(e) {
						void 0 === Re && (Re = (0, p.default)(W).getInstance()), Re.enableForcedTextStreaming(e)
					},
					isTextEnabled: function() {
						return void 0 === Re && (Re = (0, p.default)(W).getInstance()), Re.isTextEnabled()
					},
					setTextTrack: function(e) {
						if (!se) throw t;
						void 0 === Re && (Re = (0, p.default)(W).getInstance()), Re.setTextTrack(e)
					},
					getBitrateInfoListFor: function(t) {
						if (!re) throw e;
						var n = Ke();
						return n ? n.getBitrateListFor(t) : []
					},
					getStreamsFromManifest: function(t) {
						if (!re) throw e;
						return me.getStreamsInfo(t)
					},
					getTracksFor: qe,
					getTracksForTypeFromManifest: function(t, n, r) {
						if (!re) throw e;
						return (r = r || me.getStreamsInfo(n, 1)[0]) ? me.getAllMediaInfoForType(r, t, n) : []
					},
					getCurrentTrackFor: function(t) {
						if (!re) throw e;
						var n = ve.getActiveStreamInfo();
						return le.getCurrentTrackFor(t, n)
					},
					setInitialMediaSettingsFor: function(e, t) {
						if (!ne) throw z;
						le.setInitialSettings(e, t), e === s.default.FRAGMENTED_TEXT && Re.setInitialSettings(t)
					},
					getInitialMediaSettingsFor: function(e) {
						if (!ne) throw z;
						return le.getInitialSettings(e)
					},
					setCurrentTrack: function(t) {
						if (!re) throw e;
						le.setTrack(t)
					},
					getTrackSwitchModeFor: function(e) {
						if (!ne) throw z;
						return le.getSwitchMode(e)
					},
					setTrackSwitchModeFor: function(e, t) {
						if (!ne) throw z;
						le.setSwitchMode(e, t)
					},
					setSelectionModeForInitialTrack: function(e) {
						if (!ne) throw z;
						le.setSelectionModeForInitialTrack(e)
					},
					getSelectionModeForInitialTrack: function() {
						if (!ne) throw z;
						return le.getSelectionModeForInitialTrack()
					},
					addABRCustomRule: function(e, t, n) {
						ge.addABRCustomRule(e, t, n)
					},
					removeABRCustomRule: function(e) {
						ge.removeABRCustomRule(e)
					},
					removeAllABRCustomRule: function() {
						ge.removeABRCustomRule()
					},
					getAverageThroughput: function(e) {
						var t = ae.getThroughputHistory();
						return t ? t.getAverageThroughput(e) : 0
					},
					retrieveManifest: function(e, t) {
						var n = Ve(),
							r = this;
						X.on(D.default.INTERNAL_MANIFEST_LOADED, (function e(s) {
							s.error ? t(null, s.error) : t(s.manifest), X.off(D.default.INTERNAL_MANIFEST_LOADED, e, r), n.reset()
						}), r), Me.initialize(e), n.load(e)
					},
					addUTCTimingSource: function(e, t) {
						ge.addUTCTimingSource(e, t)
					},
					removeUTCTimingSource: function(e, t) {
						ge.removeUTCTimingSource(e, t)
					},
					clearDefaultUTCTimingSources: function() {
						ge.clearDefaultUTCTimingSources()
					},
					restoreDefaultUTCTimingSources: Ue,
					setXHRWithCredentialsForType: function(e, t) {
						ge.setXHRWithCredentialsForType(e, t)
					},
					getXHRWithCredentialsForType: function(e) {
						return ge.getXHRWithCredentialsForType(e)
					},
					getProtectionController: function() {
						return ze()
					},
					attachProtectionController: function(e) {
						de = e
					},
					setProtectionData: function(e) {
						te = e, ve && ve.setProtectionData(te)
					},
					displayCaptionsOnTop: function(e) {
						var t = (0, g.default)(W).getInstance();
						t.setConfig({
							videoModel: Ie
						}), t.initialize(), t.setDisplayCConTop(e)
					},
					attachTTMLRenderingDiv: function(e) {
						if (!Ie.getElement()) throw n;
						Ie.setTTMLRenderingDiv(e)
					},
					getCurrentTextTrackIndex: function() {
						var e = NaN;
						return Re && (e = Re.getCurrentTrackIdx()), e
					},
					provideThumbnail: function(e, t) {
						if ("function" == typeof t)
							if (e < 0) t(null);
							else {
								var n = Te.getIsDynamic() ? Pe(e) : e,
									r = ve.getStreamForTime(n);
								if (null !== r) {
									var s = r.getThumbnailController();
									if (s) {
										var i = ve.getTimeRelativeToStreamId(n, r.getId());
										return s.provide(i, t)
									}
									t(null)
								} else t(null)
							}
					},
					getDashAdapter: function() {
						return me
					},
					getOfflineController: function() {
						return We()
					},
					getSettings: function() {
						return Q.get()
					},
					updateSettings: function(e) {
						Q.update(e)
					},
					resetSettings: function() {
						Q.reset()
					},
					reset: Ne,
					destroy: function() {
						Ne(), O.default.deleteSingletonInstances(W)
					}
				}, $ = J.getLogger(Z), ne = !1, se = !1, re = !1, ie = !0, de = null, he = null, te = null, me = null, De = null, D.default.extend(N.default), ge = (0, y.default)(W).getInstance(), Ie = (0, S.default)(W).getInstance(), Me = (0, E.default)(W).getInstance(), Z
			}
			z.__dashjs_factory_name = "MediaPlayer";
			var W = O.default.getClassFactory(z);
			W.events = N.default, W.errors = M.default, O.default.updateClassFactory(z.__dashjs_factory_name, W), t.default = W
		},
		"./node_modules/dashjs/build/es5/src/streaming/MediaPlayerEvents.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/core/events/EventsBase.js");
			var i = new(function(e) {
				function t() {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					var e = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
					return e.AST_IN_FUTURE = "astInFuture", e.BUFFER_EMPTY = "bufferStalled", e.BUFFER_LOADED = "bufferLoaded", e.BUFFER_LEVEL_STATE_CHANGED = "bufferStateChanged", e.DYNAMIC_TO_STATIC = "dynamicToStatic", e.ERROR = "error", e.FRAGMENT_LOADING_COMPLETED = "fragmentLoadingCompleted", e.FRAGMENT_LOADING_PROGRESS = "fragmentLoadingProgress", e.FRAGMENT_LOADING_STARTED = "fragmentLoadingStarted", e.FRAGMENT_LOADING_ABANDONED = "fragmentLoadingAbandoned", e.LOG = "log", e.MANIFEST_LOADED = "manifestLoaded", e.METRICS_CHANGED = "metricsChanged", e.METRIC_CHANGED = "metricChanged", e.METRIC_ADDED = "metricAdded", e.METRIC_UPDATED = "metricUpdated", e.PERIOD_SWITCH_COMPLETED = "periodSwitchCompleted", e.PERIOD_SWITCH_STARTED = "periodSwitchStarted", e.QUALITY_CHANGE_REQUESTED = "qualityChangeRequested", e.QUALITY_CHANGE_RENDERED = "qualityChangeRendered", e.TRACK_CHANGE_RENDERED = "trackChangeRendered", e.SOURCE_INITIALIZED = "sourceInitialized", e.STREAM_INITIALIZING = "streamInitializing", e.STREAM_UPDATED = "streamUpdated", e.STREAM_INITIALIZED = "streamInitialized", e.STREAM_TEARDOWN_COMPLETE = "streamTeardownComplete", e.TEXT_TRACKS_ADDED = "allTextTracksAdded", e.TEXT_TRACK_ADDED = "textTrackAdded", e.TTML_PARSED = "ttmlParsed", e.TTML_TO_PARSE = "ttmlToParse", e.CAPTION_RENDERED = "captionRendered", e.CAPTION_CONTAINER_RESIZE = "captionContainerResize", e.CAN_PLAY = "canPlay", e.PLAYBACK_ENDED = "playbackEnded", e.PLAYBACK_ERROR = "playbackError", e.PLAYBACK_NOT_ALLOWED = "playbackNotAllowed", e.PLAYBACK_METADATA_LOADED = "playbackMetaDataLoaded", e.PLAYBACK_PAUSED = "playbackPaused", e.PLAYBACK_PLAYING = "playbackPlaying", e.PLAYBACK_PROGRESS = "playbackProgress", e.PLAYBACK_RATE_CHANGED = "playbackRateChanged", e.PLAYBACK_SEEKED = "playbackSeeked", e.PLAYBACK_SEEKING = "playbackSeeking", e.PLAYBACK_SEEK_ASKED = "playbackSeekAsked", e.PLAYBACK_STALLED = "playbackStalled", e.PLAYBACK_STARTED = "playbackStarted", e.PLAYBACK_TIME_UPDATED = "playbackTimeUpdated", e.PLAYBACK_WAITING = "playbackWaiting", e.MANIFEST_VALIDITY_CHANGED = "manifestValidityChanged", e.GAP_CAUSED_SEEK_TO_PERIOD_END = "gapCausedSeekToPeriodEnd", e.GAP_CAUSED_INTERNAL_SEEK = "gapCausedInternalSeek", e.EVENT_MODE_ON_START = "eventModeOnStart", e.EVENT_MODE_ON_RECEIVE = "eventModeOnReceive", e
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
			}(((r = s) && r.__esModule ? r : {
				default: r
			}).default));
			t.default = i
		},
		"./node_modules/dashjs/build/es5/src/streaming/MediaPlayerFactory.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/streaming/MediaPlayer.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				};
			var a = function() {
					var e = "application/dash+xml",
						t = void 0;

					function n(n, r, s) {
						if (!n || !/^VIDEO$/i.test(n.nodeName)) return null;
						if (n._dashjs_player) return n._dashjs_player;
						var a = void 0,
							o = n.id || n.name || "video element";
						if (!(r = r || [].slice.call(n.querySelectorAll("source")).filter((function(t) {
								return t.type == e
							}))[0]) && n.src)(r = document.createElement("source")).src = n.src;
						else if (!r && !n.src) return null;
						return s = s || {}, (a = (0, i.default)(s).create()).initialize(n, r.src, n.autoplay), t || (t = a.getDebug().getLogger()), t.debug("Converted " + o + " to dash.js player and added content: " + r.src), n._dashjs_player = a, a
					}

					function r(e) {
						return /^VIDEO$/i.test(e.nodeName) ? e : r(e.parentNode)
					}
					return {
						create: n,
						createAll: function(t, s) {
							var i = [];
							t = t || "[data-dashjs-player]";
							for (var a = (s = s || document).querySelectorAll(t), o = 0; o < a.length; o++) {
								var u = n(a[o], null);
								i.push(u)
							}
							for (var l = s.querySelectorAll('source[type="' + e + '"]'), d = 0; d < l.length; d++) {
								var c = n(r(l[d]), null);
								i.push(c)
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
			}))), t.default = a
		},
		"./node_modules/dashjs/build/es5/src/streaming/PreBufferSink.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				s = i(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function a(e) {
				var t = this.context,
					n = void 0,
					s = void 0,
					i = void 0,
					a = [],
					o = e;

				function u(e, t) {
					a = a.filter((function(n) {
						return !((isNaN(t) || n.start < t) && (isNaN(e) || n.end > e))
					}))
				}
				return n = {
					getAllBufferRanges: function() {
						for (var e = [], t = 0; t < a.length; t++) {
							var n = a[t];
							0 === e.length || n.start > e[e.length - 1].end ? e.push({
								start: n.start,
								end: n.end
							}) : e[e.length - 1].end = n.end
						}
						var r = {
							start: function(t) {
								return e[t].start
							},
							end: function(t) {
								return e[t].end
							}
						};
						return Object.defineProperty(r, "length", {
							get: function() {
								return e.length
							}
						}), r
					},
					append: function(e) {
						"InitializationSegment" !== e.segmentType ? (a.push(e), a.sort((function(e, t) {
							return e.start - t.start
						})), i = null) : i = e, s.debug("PreBufferSink appended chunk s: " + e.start + "; e: " + e.end), o && o({
							chunk: e
						})
					},
					remove: u,
					abort: function() {},
					discharge: function(e, t) {
						var n = function(e, t) {
							return a.filter((function(n) {
								return (isNaN(t) || n.start < t) && (isNaN(e) || n.end > e)
							}))
						}(e, t);
						return i && (n.push(i), i = null), u(e, t), n
					},
					reset: function() {
						a = [], i = null, o = null
					},
					updateTimestampOffset: function() {},
					hasDiscontinuitiesAfter: function() {
						return !1
					},
					waitForUpdateEnd: function(e) {
						e()
					},
					getBuffer: function() {
						return this
					}
				}, s = (0, r.default)(t).getInstance().getLogger(n), n
			}
			a.__dashjs_factory_name = "PreBufferSink";
			var o = s.default.getClassFactory(a);
			t.default = o
		},
		"./node_modules/dashjs/build/es5/src/streaming/SourceBufferSink.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = d(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				s = d(n("./node_modules/dashjs/build/es5/src/streaming/vo/DashJSError.js")),
				i = d(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				a = d(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				o = d(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				u = d(n("./node_modules/dashjs/build/es5/src/streaming/text/TextController.js")),
				l = d(n("./node_modules/dashjs/build/es5/src/core/errors/Errors.js"));

			function d(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var c = .1;

			function f(e, t, n, o) {
				var d = this.context,
					f = (0, i.default)(d).getInstance(),
					h = void 0,
					m = void 0,
					g = void 0,
					_ = void 0,
					p = void 0,
					E = void 0,
					v = [],
					y = [],
					T = n;

				function b() {
					try {
						return _.buffered
					} catch (e) {
						return g.error("getAllBufferRanges exception: " + e.message), null
					}
				}

				function S(t) {
					_ && D((function() {
						try {
							var n = e.duration,
								r = 0;
							t && !isNaN(t.start) && !isNaN(t.duration) && isFinite(t.duration) && (n = t.start + t.duration), t && !isNaN(t.start) && (r = t.start), _.appendWindowStart = 0, _.appendWindowEnd = n, _.appendWindowStart = r, g.debug("Updated append window. Set start to " + _.appendWindowStart + " and end to " + _.appendWindowEnd)
						} catch (s) {
							g.warn("Failed to set append window")
						}
					}))
				}

				function A() {
					var e = this;
					if (y.length > 0) {
						p = !0;
						var t = y[0];
						y.splice(0, 1);
						var n = [],
							r = function() {
								var r = b();
								! function(e, t, n, r) {
									t && t.length > 0 && t.length < n.length && function(e, t) {
										for (var n = 0; n < e.length; n++) {
											var r = Math.round(e.start(n)),
												s = Math.round(e.end(n));
											if (s === t.start || r === t.end || t.start >= r && t.end <= s) return !0
										}
										return !1
									}(t, r) && f.trigger(a.default.SOURCEBUFFER_REMOVE_COMPLETED, {
										buffer: e,
										from: n.end(n.length - 2),
										to: n.start(n.length - 1),
										unintended: !0
									})
								}(e, n, r, t), y.length > 0 ? A.call(this) : (p = !1, T && T({
									chunk: t
								}))
							};
						try {
							0 === t.bytes.length ? r.call(this) : (n = b(), _.appendBuffer ? _.appendBuffer(t.bytes) : _.append(t.bytes, t), D(r.bind(this)))
						} catch (i) {
							g.fatal('SourceBuffer append failed "' + i + '"'), y.length > 0 ? A() : p = !1, T && T({
								chunk: t,
								error: new s.default(i.code, i.message)
							})
						}
					}
				}

				function I() {
					if (v.length > 0) {
						var e = v.shift();
						_.updating ? D(e) : (e(), I())
					}
				}

				function R() {
					_.updating || I()
				}

				function M() {
					_.updating || I()
				}

				function C() {
					g.error("SourceBufferSink error")
				}

				function D(e) {
					v.push(e), _.updating || I()
				}
				return h = {
						getType: function() {
							return m
						},
						getAllBufferRanges: b,
						getBuffer: function() {
							return _
						},
						append: function(e) {
							e ? (y.push(e), p || D(A.bind(this))) : T({
								chunk: e,
								error: new s.default(l.default.APPEND_ERROR_CODE, l.default.APPEND_ERROR_MESSAGE)
							})
						},
						remove: function(t, n, r) {
							var i = this;
							D((function() {
								try {
									t >= 0 && n > t && (r || "ended" !== e.readyState) && _.remove(t, n), D((function() {
										f.trigger(a.default.SOURCEBUFFER_REMOVE_COMPLETED, {
											buffer: i,
											from: t,
											to: n,
											unintended: !1
										})
									}))
								} catch (o) {
									f.trigger(a.default.SOURCEBUFFER_REMOVE_COMPLETED, {
										buffer: i,
										from: t,
										to: n,
										unintended: !1,
										error: new s.default(o.code, o.message)
									})
								}
							}))
						},
						abort: function() {
							try {
								"open" === e.readyState ? _.abort() : _.setTextTrack && "ended" === e.readyState && _.abort()
							} catch (t) {
								g.error('SourceBuffer append abort failed: "' + t + '"')
							}
							y = []
						},
						reset: function(t) {
							if (_) {
								if ("function" == typeof _.removeEventListener && (_.removeEventListener("updateend", M, !1), _.removeEventListener("error", C, !1), _.removeEventListener("abort", C, !1)), clearInterval(E), v = [], !t) {
									try {
										_.getClassName && "TextSourceBuffer" === _.getClassName() || (g.debug("Removing sourcebuffer from media source"), e.removeSourceBuffer(_))
									} catch (n) {
										g.error("Failed to remove source buffer from media source.")
									}
									_ = null
								}
								p = !1
							}
							y = [], T = null
						},
						updateTimestampOffset: function(e) {
							_.timestampOffset === e || isNaN(e) || D((function() {
								e < 0 && (e += .001), _.timestampOffset = e
							}))
						},
						hasDiscontinuitiesAfter: function(e) {
							try {
								var t = b();
								if (t && t.length > 1)
									for (var n = 0, r = t.length; n < r; n++)
										if (n > 0 && e < t.start(n) && t.start(n) > t.end(n - 1) + c) return !0
							} catch (s) {
								g.error("hasDiscontinuities exception: " + s.message)
							}
							return !1
						},
						waitForUpdateEnd: D,
						updateAppendWindow: S
					},
					function() {
						g = (0, r.default)(d).getInstance().getLogger(h), p = !1, m = t.type;
						var n = t.codec;
						try {
							if (n.match(/application\/mp4;\s*codecs="(stpp|wvtt).*"/i)) throw new Error("not really supported");
							(_ = o || e.addSourceBuffer(n)).changeType && o && (g.debug("Doing period transition with changeType"), _.changeType(n)), S();
							if ("function" == typeof _.addEventListener) try {
								_.addEventListener("updateend", M, !1), _.addEventListener("error", C, !1), _.addEventListener("abort", C, !1)
							} catch (i) {
								E = setInterval(R, 50)
							} else E = setInterval(R, 50)
						} catch (a) {
							if (!t.isText && -1 === n.indexOf('codecs="stpp') && -1 === n.indexOf('codecs="wvtt')) throw a;
							var s = (0, u.default)(d).getInstance();
							_ = s.getTextSourceBuffer()
						}
					}(), h
			}
			f.__dashjs_factory_name = "SourceBufferSink";
			var h = o.default.getClassFactory(f);
			t.default = h
		},
		"./node_modules/dashjs/build/es5/src/streaming/Stream.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = _(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				s = _(n("./node_modules/dashjs/build/es5/src/dash/constants/DashConstants.js")),
				i = _(n("./node_modules/dashjs/build/es5/src/streaming/StreamProcessor.js")),
				a = _(n("./node_modules/dashjs/build/es5/src/streaming/controllers/FragmentController.js")),
				o = _(n("./node_modules/dashjs/build/es5/src/streaming/thumbnail/ThumbnailController.js")),
				u = _(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				l = _(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				d = _(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				c = _(n("./node_modules/dashjs/build/es5/src/core/errors/Errors.js")),
				f = _(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				h = _(n("./node_modules/dashjs/build/es5/src/streaming/vo/DashJSError.js")),
				m = _(n("./node_modules/dashjs/build/es5/src/streaming/utils/BoxParser.js")),
				g = _(n("./node_modules/dashjs/build/es5/src/streaming/utils/URLUtils.js"));

			function _(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function p(e) {
				e = e || {};
				var t = this.context,
					n = (0, u.default)(t).getInstance(),
					f = (0, g.default)(t).getInstance(),
					_ = e.manifestModel,
					p = e.mediaPlayerModel,
					E = e.manifestUpdater,
					v = e.adapter,
					y = e.capabilities,
					T = e.errHandler,
					b = e.timelineConverter,
					S = e.dashMetrics,
					A = e.abrController,
					I = e.playbackController,
					R = e.eventController,
					M = e.mediaController,
					C = e.textController,
					D = e.protectionController,
					N = e.videoModel,
					O = e.settings,
					j = e.streamInfo,
					w = void 0,
					P = void 0,
					L = void 0,
					F = void 0,
					x = void 0,
					U = void 0,
					B = void 0,
					k = void 0,
					G = void 0,
					q = void 0,
					H = void 0,
					K = void 0,
					Y = void 0,
					V = void 0,
					z = void 0,
					W = void 0,
					X = void 0,
					Q = void 0,
					J = [{
						codec: "avc1",
						compatibleCodecs: ["avc3"]
					}, {
						codec: "avc3",
						compatibleCodecs: ["avc1"]
					}];

				function Z(e) {
					for (var t = L ? L.length : 0, r = 0; r < t; r++) {
						L[r].getFragmentModel().removeExecutedRequestsBeforeTime(ne() + te()), L[r].reset(!1, e)
					}
					L = [], x = !1, U = !1, be(!1), n.off(l.default.CURRENT_TRACK_CHANGED, ue, w)
				}

				function $() {
					Z(), F = !1, B = !1, k = !1, G = {}, q = !1, z = !1, X = !1
				}

				function ee() {
					I && I.pause(), H && (H.reset(), H = null), j = null, $(), n.off(l.default.DATA_UPDATE_COMPLETED, ge, w), n.off(l.default.BUFFERING_COMPLETED, me, w), n.off(l.default.INBAND_EVENTS, _e, w), D && (n.off(l.default.KEY_ERROR, ae, w), n.off(l.default.SERVER_CERTIFICATE_UPDATED, ae, w), n.off(l.default.LICENSE_REQUEST_COMPLETE, ae, w), n.off(l.default.KEY_SYSTEM_SELECTED, ae, w), n.off(l.default.KEY_SESSION_CREATED, ae, w), n.off(l.default.KEY_STATUSES_CHANGED, ae, w)), be(!1)
				}

				function te() {
					return j ? j.duration : NaN
				}

				function ne() {
					return j ? j.start : NaN
				}

				function re() {
					if (!j.manifestInfo.isDynamic) return NaN;
					for (var e = 0; e < L.length; e++)
						if (L[e].getType() === r.default.AUDIO || L[e].getType() === r.default.VIDEO) return L[e].getLiveStartTime();
					return NaN
				}

				function se() {
					return j
				}

				function ie() {
					if (!(N && A && A.hasOwnProperty("getBitrateList") && v && v.hasOwnProperty("getAllMediaInfoForType") && v.hasOwnProperty("getEventsFor"))) throw new Error(r.default.MISSING_CONFIG_ERROR)
				}

				function ae(e) {
					e.error && (T.error(e.error), P.fatal(e.error.message), ee())
				}

				function oe(e) {
					var t, n = e ? e.type : null,
						s = void 0;
					if (n === r.default.MUXED) return s = "Multiplexed representations are intentionally not supported, as they are not compliant with the DASH-AVC/264 guidelines", P.fatal(s), T.error(new h.default(c.default.MANIFEST_ERROR_ID_MULTIPLEXED_CODE, s, _.getValue())), !1;
					if (n === r.default.TEXT || n === r.default.FRAGMENTED_TEXT || n === r.default.EMBEDDED_TEXT || n === r.default.IMAGE) return !0;
					if (t = e.codec, P.debug(n + " codec: " + t), e.contentProtection && !y.supportsEncryptedMedia()) T.error(new h.default(c.default.CAPABILITY_MEDIAKEYS_ERROR_CODE, c.default.CAPABILITY_MEDIAKEYS_ERROR_MESSAGE));
					else if (!y.supportsCodec(t)) return s = n + "Codec (" + t + ") is not supported.", P.error(s), !1;
					return !0
				}

				function ue(e) {
					if (j && e.newMediaInfo.streamInfo.id === j.id) {
						var t = e.newMediaInfo,
							n = _.getValue();
						v.setCurrentMediaInfo(j.id, t.type, t);
						var s = pe(t);
						if (s) {
							var i = I.getTime();
							P.info("Stream -  Process track changed at current time " + i), P.debug("Stream -  Update stream controller"), n.refreshManifestOnSwitchTrack ? (P.debug("Stream -  Refreshing manifest for switch track"), Q = e, E.refreshManifest()) : (s.selectMediaInfo(t), t.type !== r.default.FRAGMENTED_TEXT ? (A.updateTopQualityIndex(t), s.switchTrackAsked(), s.getFragmentModel().abortRequests()) : (s.getScheduleController().setSeekTarget(i), s.setBufferingTime(i), s.resetIndexHandler()))
						}
					}
				}

				function le(a, u) {
					var d, c = v.getAllMediaInfoForType(j, a),
						f = null;
					if (c && 0 !== c.length) {
						a === r.default.VIDEO && (B = !0), a === r.default.AUDIO && (k = !0);
						for (var h = 0, m = c.length; h < m; h++)
							if (f = c[h], a === r.default.EMBEDDED_TEXT) C.addEmbeddedTrack(f);
							else {
								if (!oe(f)) continue;
								M.addTrack(f)
							} a !== r.default.EMBEDDED_TEXT && 0 !== M.getTracksFor(a, j).length && (a !== r.default.IMAGE ? (M.checkInitialMediaSettingsForType(a, j), d = M.getCurrentTrackFor(a, j), n.trigger(l.default.STREAM_INITIALIZING, {
							streamInfo: j,
							mediaInfo: f
						}), function(n, s, a, o) {
							var u = H.getModel(n ? n.type : null),
								l = (0, i.default)(t).create({
									streamInfo: j,
									type: n ? n.type : null,
									mimeType: n ? n.mimeType : null,
									timelineConverter: b,
									adapter: v,
									manifestModel: _,
									mediaPlayerModel: p,
									fragmentModel: u,
									dashMetrics: e.dashMetrics,
									baseURLController: e.baseURLController,
									abrController: A,
									playbackController: I,
									mediaController: M,
									textController: C,
									errHandler: T,
									settings: O,
									boxParser: V
								});
							if (l.initialize(a, B), A.updateTopQualityIndex(n), o ? (l.setBuffer(o.buffer), l.setBufferingTime(o.currentTime), L[o.replaceIdx] = l) : L.push(l), !o || !o.ignoreMediaInfo)
								if (!n || n.type !== r.default.TEXT && n.type !== r.default.FRAGMENTED_TEXT) l.addMediaInfo(n, !0);
								else {
									for (var d = void 0, c = 0; c < s.length; c++) s[c].index === n.index && (d = c), l.addMediaInfo(s[c]);
									l.selectMediaInfo(s[d])
								}
						}(d, c, u)) : K = (0, o.default)(t).create({
							streamInfo: j,
							adapter: v,
							baseURLController: e.baseURLController,
							timelineConverter: e.timelineConverter,
							debug: W,
							eventBus: n,
							events: l.default,
							dashConstants: s.default
						}))
					} else P.info("No " + a + " data.")
				}

				function de() {
					if (R) {
						var e = v.getEventsFor(j);
						R.addInlineEvents(e)
					}
				}

				function ce(e) {
					var t = v.getAdaptationForType(j ? j.index : null, e, j);
					t && Array.isArray(t.Representation_asArray) && (t.Representation_asArray = t.Representation_asArray.filter((function(e, n) {
						if (0 === n) return !0;
						var r = v.getCodec(t, n, !0);
						return !!y.supportsCodec(r) || (P.error("[Stream] codec not supported: " + r), !1)
					})))
				}

				function fe() {
					for (var e = L.length, t = !!G.audio || !!G.video ? new h.default(c.default.DATA_UPDATE_FAILED_ERROR_CODE, c.default.DATA_UPDATE_FAILED_ERROR_MESSAGE) : null, s = 0; s < e; s++)
						if (L[s].isUpdating() || q) return;
					if (U) {
						if (D)
							for (var i = 0; i < e && L[i]; i++)
								if (L[i].getType() === r.default.AUDIO || L[i].getType() === r.default.VIDEO || L[i].getType() === r.default.FRAGMENTED_TEXT) {
									var a = L[i].getMediaInfo();
									a && D.initializeForMedia(a)
								} t ? T.error(t) : F || (F = !0, b.setTimeSyncCompleted(!0), n.trigger(l.default.STREAM_INITIALIZED, {
							streamInfo: j,
							liveStartTime: Y ? NaN : re()
						}));
						for (var o = 0; o < e && L[o]; o++) L[o].getScheduleController().start()
					}
				}

				function he(e) {
					for (var t = {}, n = 0, r = L.length; n < r; n++) {
						var s = L[n].createBuffer(e);
						s && (t[L[n].getType()] = s.getBuffer())
					}
					return t
				}

				function me() {
					var e = Ee(),
						t = e.length;
					if (0 !== t) {
						for (var s = 0; s < t; s++)
							if (!e[s].isBufferingCompleted() && (e[s].getType() === r.default.AUDIO || e[s].getType() === r.default.VIDEO)) return void P.warn("onBufferingCompleted - One streamProcessor has finished but", e[s].getType(), "one is not buffering completed");
						P.debug("onBufferingCompleted - trigger STREAM_BUFFERING_COMPLETED"), n.trigger(l.default.STREAM_BUFFERING_COMPLETED, {
							streamInfo: j
						})
					} else P.warn("onBufferingCompleted - can't trigger STREAM_BUFFERING_COMPLETED because no streamProcessor is defined")
				}

				function ge(e) {
					G[e.mediaType] = e.error, fe()
				}

				function _e(e) {
					var t;
					t = e.events, R && R.addInbandEvents(t)
				}

				function pe(e) {
					return e ? Ee().filter((function(t) {
						return t.getType() === e.type
					}))[0] : null
				}

				function Ee() {
					for (var e = [], t = void 0, n = void 0, s = 0; s < L.length; s++)(t = (n = L[s]).getType()) !== r.default.AUDIO && t !== r.default.VIDEO && t !== r.default.FRAGMENTED_TEXT && t !== r.default.TEXT || e.push(n);
					return e
				}

				function ve(e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
					if (!e) return !1;
					var r = e.getStreamInfo(),
						s = n ? n.getStreamInfo() : se();
					if (!r || !s) return !1;
					var i = v.getAdaptationForType(r.index, t, r),
						a = v.getAdaptationForType(s.index, t, s);
					return i && a ? !(!ye(a) && ye(i)) : !i && !a
				}

				function ye(e) {
					return !!e && !!(e.ContentProtection || e.Representation && e.Representation.length > 0 && e.Representation[0].ContentProtection)
				}

				function Te(e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
					if (!e || !e.hasOwnProperty("getStreamInfo")) return !1;
					var r = e.getStreamInfo(),
						s = n ? n.getStreamInfo() : se();
					if (!r || !s) return !1;
					var i = v.getAdaptationForType(r.index, t, r),
						a = v.getAdaptationForType(s.index, t, s);
					if (!i || !a) return !i && !a;
					var o = i && a && i.mimeType === a.mimeType,
						u = a.Representation_asArray.map((function(e) {
							return e.codecs
						})),
						l = i.Representation_asArray.map((function(e) {
							return e.codecs
						})),
						d = l.some((function(e) {
							return u.indexOf(e) > -1
						})),
						c = l.some((function(e) {
							return u.some((function(t) {
								return function(e, t) {
									for (var n = e.split(".")[0], r = 0 === t.indexOf(n), s = void 0, i = 0; i < J.length; i++)
										if (J[i].codec === n) {
											s = J[i];
											break
										} if (s) return r || s.compatibleCodecs.some((function(e) {
										return 0 === t.indexOf(e)
									}));
									return r
								}(t, e)
							}))
						}));
					return d || c && o
				}

				function be(e) {
					Y = e
				}

				function Se() {
					return Y
				}
				return w = {
					initialize: function() {
						n.on(l.default.BUFFERING_COMPLETED, me, w), n.on(l.default.DATA_UPDATE_COMPLETED, ge, w), n.on(l.default.INBAND_EVENTS, _e, w), D && (n.on(l.default.KEY_ERROR, ae, w), n.on(l.default.SERVER_CERTIFICATE_UPDATED, ae, w), n.on(l.default.LICENSE_REQUEST_COMPLETE, ae, w), n.on(l.default.KEY_SYSTEM_SELECTED, ae, w), n.on(l.default.KEY_SESSION_CREATED, ae, w), n.on(l.default.KEY_STATUSES_CHANGED, ae, w)), n.trigger(l.default.STREAM_UPDATED, {
							streamInfo: j
						})
					},
					getStreamId: function() {
						return j ? j.id : null
					},
					activate: function(e, t) {
						if (!x) {
							var s = void 0;
							return n.on(l.default.CURRENT_TRACK_CHANGED, ue, w), Se() ? (! function() {
								if (q = !0, ie(), ce(r.default.VIDEO), ce(r.default.AUDIO), U = !0, q = !1, 0 === L.length) {
									var e = "No streams to play.";
									T.error(new h.default(c.default.MANIFEST_ERROR_ID_NOSTREAMS_CODE, e, _.getValue())), P.debug(e)
								} else fe()
							}(), s = t) : s = function(e, t) {
								ie();
								var n = N.getElement();
								de(), q = !0, ce(r.default.VIDEO), ce(r.default.AUDIO), (!n || n && /^VIDEO$/i.test(n.nodeName)) && le(r.default.VIDEO, e);
								le(r.default.AUDIO, e), le(r.default.TEXT, e), le(r.default.FRAGMENTED_TEXT, e), le(r.default.EMBEDDED_TEXT, e), le(r.default.MUXED, e), le(r.default.IMAGE, e);
								var s = he(t);
								if (U = !0, q = !1, 0 === L.length) {
									var i = "No streams to play.";
									T.error(new h.default(c.default.MANIFEST_ERROR_ID_NOSTREAMS_CODE, i, _.getValue())), P.fatal(i)
								} else fe();
								return s
							}(e, t), x = !0, s
						}
						return t
					},
					deactivate: Z,
					isActive: function() {
						return x
					},
					getDuration: te,
					getStartTime: ne,
					getId: function() {
						return j ? j.id : null
					},
					getStreamInfo: se,
					getHasAudioTrack: function() {
						return k
					},
					getHasVideoTrack: function() {
						return B
					},
					preload: function(e, t) {
						if (!Se()) {
							de(), le(r.default.VIDEO, e), le(r.default.AUDIO, e), le(r.default.TEXT, e), le(r.default.FRAGMENTED_TEXT, e), le(r.default.EMBEDDED_TEXT, e), le(r.default.MUXED, e), le(r.default.IMAGE, e), he(t), n.on(l.default.CURRENT_TRACK_CHANGED, ue, w);
							for (var s = 0; s < L.length && L[s]; s++) L[s].getScheduleController().start();
							be(!0)
						}
					},
					getThumbnailController: function() {
						return K
					},
					getBitrateListFor: function(e) {
						if (ie(), e === r.default.IMAGE) return K ? K.getBitrateList() : [];
						var t = function(e) {
							for (var t = null, n = 0; n < L.length; n++)
								if ((t = L[n]).getType() === e) return t.getMediaInfo();
							return null
						}(e);
						return A.getBitrateList(t)
					},
					updateData: function(e) {
						P.info("Manifest updated... updating data system wide."), x = !1, q = !0, j = e, n.trigger(l.default.STREAM_UPDATED, {
							streamInfo: j
						}), R && de(), ce(r.default.VIDEO), ce(r.default.AUDIO);
						for (var t = 0, s = L.length; t < s; t++) {
							var i = L[t];
							i.updateStreamInfo(j);
							var a = v.getMediaInfoForType(j, i.getType());
							a && (A.updateTopQualityIndex(a), i.addMediaInfo(a, !0))
						}
						if (Q && Q.newMediaInfo.type !== r.default.FRAGMENTED_TEXT) {
							var o = pe(Q.oldMediaInfo);
							if (!o) return;
							o.switchTrackAsked(), Q = void 0
						}
						q = !1, fe()
					},
					reset: ee,
					getProcessors: Ee,
					setMediaSource: function(e) {
						for (var t = 0; t < L.length;) oe(L[t].getMediaInfo()) ? (L[t].setMediaSource(e), t++) : (L[t].reset(), L.splice(t, 1));
						for (var n = 0; n < L.length; n++) L[n].dischargePreBuffer();
						if (0 === L.length) {
							var r = "No streams to play.";
							T.error(new h.default(c.default.MANIFEST_ERROR_ID_NOSTREAMS_CODE, r + "nostreams", _.getValue())), P.fatal(r)
						}
					},
					isMediaCodecCompatible: function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
						return Te(e, r.default.VIDEO, t) && Te(e, r.default.AUDIO, t)
					},
					isProtectionCompatible: function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
						return ve(e, r.default.VIDEO, t) && ve(e, r.default.AUDIO, t)
					},
					getPreloaded: Se,
					getPreloadingScheduled: function() {
						return z
					},
					setPreloadingScheduled: function(e) {
						z = e
					},
					getIsEndedEventSignaled: function() {
						return X
					},
					setIsEndedEventSignaled: function(e) {
						X = e
					}
				}, W = (0, d.default)(t).getInstance(), P = W.getLogger(w), $(), V = (0, m.default)(t).getInstance(), H = (0, a.default)(t).create({
					streamInfo: j,
					mediaPlayerModel: p,
					dashMetrics: S,
					errHandler: T,
					settings: O,
					boxParser: V,
					dashConstants: s.default,
					urlUtils: f
				}), w
			}
			p.__dashjs_factory_name = "Stream", t.default = f.default.getClassFactory(p)
		},
		"./node_modules/dashjs/build/es5/src/streaming/StreamProcessor.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = I(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				s = I(n("./node_modules/dashjs/build/es5/src/dash/constants/DashConstants.js")),
				i = I(n("./node_modules/dashjs/build/es5/src/streaming/constants/MetricsConstants.js")),
				a = I(n("./node_modules/dashjs/build/es5/src/streaming/models/FragmentModel.js")),
				o = I(n("./node_modules/dashjs/build/es5/src/streaming/controllers/BufferController.js")),
				u = I(n("./node_modules/dashjs/build/es5/src/streaming/text/TextBufferController.js")),
				l = I(n("./node_modules/dashjs/build/es5/src/streaming/controllers/ScheduleController.js")),
				d = I(n("./node_modules/dashjs/build/es5/src/dash/controllers/RepresentationController.js")),
				c = I(n("./node_modules/dashjs/build/es5/src/streaming/utils/LiveEdgeFinder.js")),
				f = I(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				h = n("./node_modules/dashjs/build/es5/src/streaming/utils/SupervisorTools.js"),
				m = I(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				g = I(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				_ = I(n("./node_modules/dashjs/build/es5/src/dash/DashHandler.js")),
				p = I(n("./node_modules/dashjs/build/es5/src/core/errors/Errors.js")),
				E = I(n("./node_modules/dashjs/build/es5/src/streaming/vo/DashJSError.js")),
				v = I(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				y = I(n("./node_modules/dashjs/build/es5/src/streaming/utils/RequestModifier.js")),
				T = I(n("./node_modules/dashjs/build/es5/src/streaming/utils/URLUtils.js")),
				b = I(n("./node_modules/dashjs/build/es5/src/streaming/utils/BoxParser.js")),
				S = I(n("./node_modules/dashjs/build/es5/src/streaming/vo/FragmentRequest.js")),
				A = n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/PlayList.js");

			function I(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function R(e) {
				e = e || {};
				var t = this.context,
					n = (0, m.default)(t).getInstance(),
					f = e.streamInfo,
					I = e.type,
					R = e.errHandler,
					M = e.mimeType,
					C = e.timelineConverter,
					D = e.adapter,
					N = e.manifestModel,
					O = e.mediaPlayerModel,
					j = e.fragmentModel,
					w = e.abrController,
					P = e.playbackController,
					L = e.mediaController,
					F = e.textController,
					x = e.dashMetrics,
					U = e.settings,
					B = e.boxParser,
					k = void 0,
					G = void 0,
					q = void 0,
					H = void 0,
					K = void 0,
					Y = void 0,
					V = void 0,
					z = void 0,
					W = void 0,
					X = void 0,
					Q = void 0,
					J = void 0;

				function Z() {
					return I
				}

				function $() {
					K = [], H = null, Q = 0
				}

				function ee(e) {
					(e.error || V.setCurrentRepresentation(D.convertDataToRepresentationInfo(e.currentRepresentation)), e.error && e.error.code !== p.default.SEGMENTS_UPDATE_FAILED_ERROR_CODE) || P.getStreamController().getActiveStreamInfo().id === f.id && ie()
				}

				function te(e) {
					var t = le(e.newQuality);
					V.setCurrentRepresentation(t), x.pushPlayListTraceMetrics(new Date, A.PlayListTrace.REPRESENTATION_SWITCH_STOP_REASON), x.createPlaylistTraceMetrics(t.id, 1e3 * P.getTime(), P.getPlaybackRate())
				}

				function ne(e) {
					x.addBufferLevel(I, new Date, 1e3 * e.bufferLevel);
					var t = P.getStreamController().getActiveStreamInfo().id;
					N.getValue().doNotUpdateDVRWindowOnBufferUpdated || f.id !== t || ie()
				}

				function re(e) {
					x.addBufferState(I, e.state, V.getBufferTarget()), e.state !== i.default.BUFFER_EMPTY || P.isSeeking() || x.pushPlayListTraceMetrics(new Date, A.PlayListTrace.REBUFFERING_REASON)
				}

				function se(e) {
					j.syncExecutedRequestsWithBufferedRange(Y.getBuffer().getAllBufferRanges(), f.duration), e.from > P.getTime() && (Q = e.from, J = !0)
				}

				function ie() {
					var e = f.manifestInfo,
						t = e.isDynamic,
						n = C.calcSegmentAvailabilityRange(z.getCurrentRepresentation(), t);
					x.addDVRInfo(Z(), P.getTime(), e, n)
				}

				function ae() {
					return Y ? Y.getBuffer() : null
				}

				function oe() {
					return K
				}

				function ue() {
					return H
				}

				function le(e) {
					var t = void 0;
					return void 0 !== e ? ((0, h.checkInteger)(e), t = z ? z.getRepresentationForQuality(e) : null) : t = z ? z.getCurrentRepresentation() : null, D.convertDataToRepresentationInfo(t)
				}

				function de(e) {
					if (e.sender && (!D.getIsTextTrack(M) || F.isTextEnabled()) && Y && e.representationId && !Y.appendInitSegment(e.representationId)) {
						var t = X ? X.getInitRequest(ue(), z.getCurrentRepresentation()) : null;
						V.processInitRequest(t)
					}
				}

				function ce(e) {
					var t = void 0;
					Y.getIsPruningInProgress() || (t = function(e, t) {
						var n = le(),
							s = !isNaN(e),
							i = P.getNormalizedTime(),
							a = s ? e : Q,
							o = !1,
							u = void 0;
						if (isNaN(a) || Z() === r.default.FRAGMENTED_TEXT && !F.isTextEnabled()) return null;
						if (Y) {
							var l = Y.getRangeAt(a),
								d = Y.getRangeAt(i);
							if ((null !== l || null !== d) && !s)
								if (!l || d && d.start != l.start && d.end != l.end) Y.getBuffer().hasDiscontinuitiesAfter(i) && Z() !== r.default.FRAGMENTED_TEXT && (j.removeExecutedRequestsAfterTime(d.end), o = !0)
						}
						if (t) a = t.startTime + t.duration / 2, u = me(n, a, {
							timeThreshold: 0,
							ignoreIsFinished: !0
						});
						else {
							var c = s || J || o;
							for (u = me(n, c ? a : void 0, {
									keepIdx: !c
								}), J = !1; u && u.action !== S.default.ACTION_COMPLETE && j.isFragmentLoaded(u);) u = me(n)
						}
						return u
					}(e.seekTarget, e.replacement)) && (V.setSeekTarget(NaN), e.replacement || (isNaN(t.startTime + t.duration) || (Q = t.startTime + t.duration), t.delayLoadingTime = (new Date).getTime() + V.getTimeToLoadDelay(), V.setTimeToLoadDelay(0))), V.processMediaRequest(t)
				}

				function fe(e) {
					var r = e.chunk,
						s = r.bytes,
						i = r.quality,
						o = le(i),
						u = z && o ? z.getRepresentationForQuality(o.quality) : null,
						l = D.getEventsFor(o.mediaInfo),
						d = D.getEventsFor(o, u);
					if (l && l.length > 0 || d && d.length > 0) {
						var c = function(n, r, s, i) {
							try {
								for (var a = {}, o = [], u = s.concat(i), l = 0, d = u.length; l < d; l++) a[u[l].schemeIdUri + "/" + u[l].value] = u[l];
								var c = (0, b.default)(t).getInstance().parse(n),
									f = c.getBoxes("emsg");
								if (!f || 0 === f.length) return o;
								for (var h = c.getBox("sidx"), m = !h || isNaN(h.earliest_presentation_time) || isNaN(h.timescale) ? r && !isNaN(r.mediaStartTime) ? r.mediaStartTime : 0 : h.earliest_presentation_time / h.timescale, g = Math.max(m, 0), _ = z.getCurrentRepresentation(), p = 0, E = f.length; p < E; p++) {
									var v = D.getEvent(f[p], a, g, _);
									v && o.push(v)
								}
								return o
							} catch (e) {
								return []
							}
						}(s, j.getRequests({
							state: a.default.FRAGMENT_MODEL_EXECUTED,
							quality: i,
							index: r.index
						})[0], l, d);
						n.trigger(g.default.INBAND_EVENTS, {
							events: c
						}, {
							streamId: f.id
						})
					}
				}

				function he(e) {
					Q = e.time, V.setSeekTarget(e.time)
				}

				function me(e, t, n) {
					var r = null;
					if (X) {
						var s = z && e ? z.getRepresentationForQuality(e.quality) : null;
						r = void 0 !== t && void 0 !== n ? X.getSegmentRequestForTime(ue(), s, t, n) : X.getNextSegmentRequest(ue(), s)
					}
					return r
				}
				return k = {
					initialize: function(i, a) {
						X = (0, _.default)(t).create({
							streamInfo: f,
							type: I,
							timelineConverter: C,
							dashMetrics: x,
							mediaPlayerModel: O,
							baseURLController: e.baseURLController,
							errHandler: R,
							settings: U,
							boxParser: B,
							events: g.default,
							eventBus: n,
							errors: p.default,
							debug: (0, v.default)(t).getInstance(),
							requestModifier: (0, y.default)(t).getInstance(),
							dashConstants: s.default,
							constants: r.default,
							urlUtils: (0, T.default)(t).getInstance()
						}), (q = f.manifestInfo.isDynamic) && (W = (0, c.default)(t).create({
							timelineConverter: C
						})), X.initialize(q), w.registerStreamType(I, k), z = (0, d.default)(t).create({
							streamInfo: f,
							type: I,
							abrController: w,
							dashMetrics: x,
							playbackController: P,
							timelineConverter: C,
							dashConstants: s.default,
							events: g.default,
							eventBus: n,
							errors: p.default
						}), (Y = function(e) {
							var n = null;
							if (!e) return R.error(new E.default(p.default.MEDIASOURCE_TYPE_UNSUPPORTED_CODE, p.default.MEDIASOURCE_TYPE_UNSUPPORTED_MESSAGE + "not properly defined")), null;
							n = e === r.default.VIDEO || e === r.default.AUDIO ? (0, o.default)(t).create({
								streamInfo: f,
								type: e,
								mediaPlayerModel: O,
								manifestModel: N,
								fragmentModel: j,
								errHandler: R,
								mediaController: L,
								representationController: z,
								adapter: D,
								textController: F,
								abrController: w,
								playbackController: P,
								settings: U
							}) : (0, u.default)(t).create({
								streamInfo: f,
								type: e,
								mimeType: M,
								mediaPlayerModel: O,
								manifestModel: N,
								fragmentModel: j,
								errHandler: R,
								mediaController: L,
								representationController: z,
								adapter: D,
								textController: F,
								abrController: w,
								playbackController: P,
								settings: U
							});
							return n
						}(I)) && Y.initialize(i), (V = (0, l.default)(t).create({
							streamInfo: f,
							type: I,
							mimeType: M,
							adapter: D,
							dashMetrics: x,
							mediaPlayerModel: O,
							fragmentModel: j,
							abrController: w,
							playbackController: P,
							textController: F,
							mediaController: L,
							bufferController: Y,
							settings: U
						})).initialize(a), Q = 0, J = !1
					},
					getStreamId: function() {
						return f.id
					},
					getType: Z,
					isUpdating: function() {
						return !!z && z.isUpdating()
					},
					getBufferController: function() {
						return Y
					},
					getFragmentModel: function() {
						return j
					},
					getScheduleController: function() {
						return V
					},
					getRepresentationController: function() {
						return z
					},
					getRepresentationInfo: le,
					getBufferLevel: function() {
						return Y ? Y.getBufferLevel() : 0
					},
					isBufferingCompleted: function() {
						return !!Y && Y.getIsBufferingCompleted()
					},
					createBuffer: function(e) {
						return ae() || Y ? Y.createBuffer(K, e) : null
					},
					updateStreamInfo: function(e) {
						f = e, U.get().streaming.useAppendWindow && Y.updateAppendWindow()
					},
					getStreamInfo: function() {
						return f
					},
					selectMediaInfo: function(e) {
						e === H || e && H && e.type !== H.type || (H = e);
						var t = D.getRealAdaptation(f, H),
							n = D.getVoRepresentations(H);
						if (z) {
							var s = z.getData(),
								i = w.getTopQualityIndexFor(I, f.id),
								a = w.getMinAllowedIndexFor(I),
								o = void 0,
								u = null;
							null !== s && s.id == t.id || I === r.default.FRAGMENTED_TEXT ? o = w.getQualityFor(I) : (u = w.getThroughputHistory().getAverageThroughput(I) || w.getInitialBitrateFor(I), o = w.getQualityForBitrate(H, u)), void 0 !== a && o < a && (o = a), o > i && (o = i), X.setMimeType(H ? H.mimeType : null), z.updateData(t, n, I, o)
						}
					},
					addMediaInfo: function(e, t) {
						-1 === K.indexOf(e) && K.push(e), t && this.selectMediaInfo(e)
					},
					getLiveStartTime: function() {
						if (!q) return NaN;
						if (!W) return NaN;
						var e = NaN,
							t = le(),
							n = W.getLiveEdge(t);
						if (isNaN(n)) return NaN;
						var r = function(e, t) {
							try {
								var n = null,
									r = P.getLiveDelay(),
									s = isNaN(f.manifestInfo.DVRWindowSize) ? r : f.manifestInfo.DVRWindowSize,
									i = .1 * s,
									a = void 0;
								if (!isFinite(s) || me(t, e - s + i, {
										ignoreIsFinished: !0
									}))
									for (; !n && r <= s;)(n = me(t, a = e - r, {
										ignoreIsFinished: !0
									})) || (r += 1);
								return n && P.setLiveDelay(r, !0), G.debug("live edge: " + e + ", live delay: " + r + ", live target: " + a), n
							} catch (o) {
								return null
							}
						}(n, t);
						return r && (e = U.get().streaming.lowLatencyEnabled ? r.duration < O.getLiveDelay() ? r.startTime : r.startTime + r.duration - O.getLiveDelay() : r.startTime), e
					},
					switchTrackAsked: function() {
						V.switchTrackAsked()
					},
					getMediaInfoArr: oe,
					getMediaInfo: ue,
					getMediaSource: function() {
						return Y.getMediaSource()
					},
					setMediaSource: function(e) {
						Y.setMediaSource(e, oe())
					},
					dischargePreBuffer: function() {
						Y.dischargePreBuffer()
					},
					getBuffer: ae,
					setBuffer: function(e) {
						Y.setBuffer(e)
					},
					setBufferingTime: function(e) {
						Q = e
					},
					resetIndexHandler: function() {
						X && X.resetIndex()
					},
					getInitRequest: function(e) {
						(0, h.checkInteger)(e);
						var t = z ? z.getRepresentationForQuality(e) : null;
						return X ? X.getInitRequest(ue(), t) : null
					},
					getFragmentRequest: me,
					finalisePlayList: function(e, t) {
						x.pushPlayListTraceMetrics(e, t)
					},
					reset: function(e, t) {
						X && X.reset(), Y && (Y.reset(e, t), Y = null), V && (V.reset(), V = null), z && (z.reset(), z = null), W && (W.reset(), W = null), w && w.unRegisterStreamType(I), n.off(g.default.DATA_UPDATE_COMPLETED, ee, k), n.off(g.default.QUALITY_CHANGE_REQUESTED, te, k), n.off(g.default.INIT_FRAGMENT_NEEDED, de, k), n.off(g.default.MEDIA_FRAGMENT_NEEDED, ce, k), n.off(g.default.MEDIA_FRAGMENT_LOADED, fe, k), n.off(g.default.BUFFER_LEVEL_UPDATED, ne, k), n.off(g.default.BUFFER_LEVEL_STATE_CHANGED, re, k), n.off(g.default.BUFFER_CLEARED, se, k), n.off(g.default.SEEK_TARGET, he, k), $(), I = null, f = null
					}
				}, G = (0, v.default)(t).getInstance().getLogger(k), $(), n.on(g.default.DATA_UPDATE_COMPLETED, ee, k, {
					priority: m.default.EVENT_PRIORITY_HIGH
				}), n.on(g.default.QUALITY_CHANGE_REQUESTED, te, k), n.on(g.default.INIT_FRAGMENT_NEEDED, de, k), n.on(g.default.MEDIA_FRAGMENT_NEEDED, ce, k), n.on(g.default.MEDIA_FRAGMENT_LOADED, fe, k), n.on(g.default.BUFFER_LEVEL_UPDATED, ne, k), n.on(g.default.BUFFER_LEVEL_STATE_CHANGED, re, k), n.on(g.default.BUFFER_CLEARED, se, k), n.on(g.default.SEEK_TARGET, he, k), k
			}
			R.__dashjs_factory_name = "StreamProcessor", t.default = f.default.getClassFactory(R)
		},
		"./node_modules/dashjs/build/es5/src/streaming/XlinkLoader.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = c(n("./node_modules/dashjs/build/es5/src/streaming/vo/DashJSError.js")),
				s = c(n("./node_modules/dashjs/build/es5/src/streaming/net/URLLoader.js")),
				i = n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js"),
				a = c(n("./node_modules/dashjs/build/es5/src/streaming/vo/TextRequest.js")),
				o = c(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				u = c(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				l = c(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				d = c(n("./node_modules/dashjs/build/es5/src/core/errors/Errors.js"));

			function c(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function f(e) {
				e = e || {};
				var t = "urn:mpeg:dash:resolve-to-zero:2013",
					n = this.context,
					l = (0, o.default)(n).getInstance(),
					c = (0, s.default)(n).create({
						errHandler: e.errHandler,
						dashMetrics: e.dashMetrics,
						mediaPlayerModel: e.mediaPlayerModel,
						requestModifier: e.requestModifier,
						useFetch: e.settings ? e.settings.get().streaming.lowLatencyEnabled : null,
						errors: d.default
					});
				return {
					load: function(e, n, s) {
						var o = function(t, i) {
							n.resolved = !0, n.resolvedContent = t || null, l.trigger(u.default.XLINK_ELEMENT_LOADED, {
								element: n,
								resolveObject: s,
								error: t || i ? null : new r.default(d.default.XLINK_LOADER_LOADING_FAILURE_ERROR_CODE, d.default.XLINK_LOADER_LOADING_FAILURE_ERROR_MESSAGE + e)
							})
						};
						if (e === t) o(null, !0);
						else {
							var f = new a.default(e, i.HTTPRequest.XLINK_EXPANSION_TYPE);
							c.load({
								request: f,
								success: function(e) {
									o(e)
								},
								error: function() {
									o(null)
								}
							})
						}
					},
					reset: function() {
						c && (c.abort(), c = null)
					}
				}
			}
			f.__dashjs_factory_name = "XlinkLoader", t.default = l.default.getClassFactory(f)
		},
		"./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}();
			var s = new(function() {
				function e() {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this.init()
				}
				return r(e, [{
					key: "init",
					value: function() {
						this.STREAM = "stream", this.VIDEO = "video", this.AUDIO = "audio", this.TEXT = "text", this.FRAGMENTED_TEXT = "fragmentedText", this.EMBEDDED_TEXT = "embeddedText", this.MUXED = "muxed", this.IMAGE = "image", this.STPP = "stpp", this.TTML = "ttml", this.VTT = "vtt", this.WVTT = "wvtt", this.ABR_STRATEGY_DYNAMIC = "abrDynamic", this.ABR_STRATEGY_BOLA = "abrBola", this.ABR_STRATEGY_L2A = "abrL2A", this.ABR_STRATEGY_LoLP = "abrLoLP", this.ABR_STRATEGY_THROUGHPUT = "abrThroughput", this.ABR_FETCH_THROUGHPUT_CALCULATION_DOWNLOADED_DATA = "abrFetchThroughputCalculationDownloadedData", this.ABR_FETCH_THROUGHPUT_CALCULATION_MOOF_PARSING = "abrFetchThroughputCalculationMoofParsing", this.LIVE_CATCHUP_MODE_DEFAULT = "liveCatchupModeDefault", this.LIVE_CATCHUP_MODE_LOLP = "liveCatchupModeLoLP", this.MOVING_AVERAGE_SLIDING_WINDOW = "slidingWindow", this.MOVING_AVERAGE_EWMA = "ewma", this.BAD_ARGUMENT_ERROR = "Invalid Arguments", this.MISSING_CONFIG_ERROR = "Missing config parameter(s)", this.TRACK_SWITCH_MODE_ALWAYS_REPLACE = "alwaysReplace", this.TRACK_SWITCH_MODE_NEVER_REPLACE = "neverReplace", this.TRACK_SELECTION_MODE_HIGHEST_BITRATE = "highestBitrate", this.TRACK_SELECTION_MODE_WIDEST_RANGE = "widestRange", this.LOCATION = "Location", this.INITIALIZE = "initialize", this.TEXT_SHOWING = "showing", this.TEXT_HIDDEN = "hidden", this.CC1 = "CC1", this.CC3 = "CC3", this.UTF8 = "utf-8", this.SCHEME_ID_URI = "schemeIdUri", this.START_TIME = "starttime", this.SERVICE_DESCRIPTION_LL_SCHEME = "urn:dvb:dash:lowlatency:scope:2019", this.SUPPLEMENTAL_PROPERTY_LL_SCHEME = "urn:dvb:dash:lowlatency:critical:2019", this.XML = "XML", this.ARRAY_BUFFER = "ArrayBuffer", this.DVB_REPORTING_URL = "dvb:reportingUrl", this.DVB_PROBABILITY = "dvb:probability"
					}
				}]), e
			}());
			t.default = s
		},
		"./node_modules/dashjs/build/es5/src/streaming/constants/MetricsConstants.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}();
			var s = new(function() {
				function e() {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this.init()
				}
				return r(e, [{
					key: "init",
					value: function() {
						this.TCP_CONNECTION = "TcpList", this.HTTP_REQUEST = "HttpList", this.TRACK_SWITCH = "RepSwitchList", this.BUFFER_LEVEL = "BufferLevel", this.BUFFER_LOADED = "bufferLoaded", this.ABANDON_LOAD = "abandonload", this.ALLOW_LOAD = "allowload", this.BUFFER_EMPTY = "bufferStalled", this.BUFFER_STATE = "BufferState", this.DVR_INFO = "DVRInfo", this.DROPPED_FRAMES = "DroppedFrames", this.SCHEDULING_INFO = "SchedulingInfo", this.REQUESTS_QUEUE = "RequestsQueue", this.MANIFEST_UPDATE = "ManifestUpdate", this.MANIFEST_UPDATE_STREAM_INFO = "ManifestUpdatePeriodInfo", this.MANIFEST_UPDATE_TRACK_INFO = "ManifestUpdateRepresentationInfo", this.PLAY_LIST = "PlayList", this.DVB_ERRORS = "DVBErrors"
					}
				}]), e
			}());
			t.default = s
		},
		"./node_modules/dashjs/build/es5/src/streaming/constants/ProtectionConstants.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}();
			var s = new(function() {
				function e() {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this.init()
				}
				return r(e, [{
					key: "init",
					value: function() {
						this.CLEARKEY_KEYSTEM_STRING = "org.w3.clearkey", this.WIDEVINE_KEYSTEM_STRING = "com.widevine.alpha", this.PLAYREADY_KEYSTEM_STRING = "com.microsoft.playready"
					}
				}]), e
			}());
			t.default = s
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/AbrController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = v(n("./node_modules/dashjs/build/es5/src/streaming/rules/abr/ABRRulesCollection.js")),
				s = v(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				i = v(n("./node_modules/dashjs/build/es5/src/streaming/constants/MetricsConstants.js")),
				a = v(n("./node_modules/dashjs/build/es5/src/streaming/vo/BitrateInfo.js")),
				o = v(n("./node_modules/dashjs/build/es5/src/streaming/models/FragmentModel.js")),
				u = v(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				l = v(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				d = v(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				c = v(n("./node_modules/dashjs/build/es5/src/streaming/rules/RulesContext.js")),
				f = v(n("./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequest.js")),
				h = v(n("./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequestHistory.js")),
				m = v(n("./node_modules/dashjs/build/es5/src/streaming/rules/DroppedFramesHistory.js")),
				g = v(n("./node_modules/dashjs/build/es5/src/streaming/rules/ThroughputHistory.js")),
				_ = v(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				p = n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js"),
				E = n("./node_modules/dashjs/build/es5/src/streaming/utils/SupervisorTools.js");

			function v(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var y = 1e3,
				T = 100,
				b = 0;

			function S() {
				var e = this.context,
					t = (0, _.default)(e).getInstance(),
					n = (0, u.default)(e).getInstance(),
					d = void 0,
					v = void 0,
					S = void 0,
					A = void 0,
					I = void 0,
					R = void 0,
					M = void 0,
					C = void 0,
					D = void 0,
					N = void 0,
					O = void 0,
					j = void 0,
					w = void 0,
					P = void 0,
					L = void 0,
					F = void 0,
					x = void 0,
					U = void 0,
					B = void 0,
					k = void 0,
					G = void 0,
					q = void 0,
					H = void 0,
					K = void 0,
					Y = void 0;

				function V() {
					(S = (0, r.default)(e).create({
						dashMetrics: K,
						mediaPlayerModel: L,
						settings: Y
					})).initialize()
				}

				function z() {
					I = {}, R = {}, C = {}, M = {}, U = {}, G = {}, q = {}, H = {}, void 0 === N && (N = !1), x = void 0, B = void 0, k = void 0, clearTimeout(D), D = null
				}

				function W(e) {
					e.mediaType === s.default.VIDEO && (x = e.oldQuality, B.push(x, P.getPlaybackQuality()))
				}

				function X(e) {
					e.metric !== i.default.HTTP_REQUEST || !e.value || e.value.type !== p.HTTPRequest.MEDIA_SEGMENT_TYPE || e.mediaType !== s.default.AUDIO && e.mediaType !== s.default.VIDEO || k.push(e.mediaType, e.value, Y.get().streaming.abr.useDeadTimeLatency), e.metric !== i.default.BUFFER_LEVEL || e.mediaType !== s.default.AUDIO && e.mediaType !== s.default.VIDEO || function(e, t) {
						var n = Y.get().streaming.abr.ABRStrategy;
						if (n === s.default.ABR_STRATEGY_L2A) return G[e] = !1, H[e] = !1, void(q[e] = !0);
						if (n === s.default.ABR_STRATEGY_LoLP) return G[e] = !1, H[e] = !0, void(q[e] = !1);
						if (n === s.default.ABR_STRATEGY_BOLA) return G[e] = !0, H[e] = !1, void(q[e] = !1);
						if (n === s.default.ABR_STRATEGY_THROUGHPUT) return G[e] = !1, H[e] = !1, void(q[e] = !1);
						! function(e, t) {
							var n = L.getStableBufferTime(),
								r = n,
								s = .5 * n,
								i = G[e],
								a = t > (i ? s : r);
							G[e] = a, a !== i && (a ? v.info("[" + e + "] switching from throughput to buffer occupancy ABR rule (buffer: " + t.toFixed(3) + ").") : v.info("[" + e + "] switching from buffer occupancy to throughput ABR rule (buffer: " + t.toFixed(3) + ")."))
						}(e, t)
					}(e.mediaType, .001 * e.value.level)
				}

				function Q(e, t) {
					return I[t] = I[t] || {}, I[t].hasOwnProperty(e) || (I[t][e] = 0),
						function(e, t) {
							if (t !== s.default.VIDEO || !Y.get().streaming.abr.limitBitrateByPortal || !M[t]) return e;
							N || ue();
							var n = w.getAdaptationForType(0, t).Representation,
								r = e;
							if (O > 0 && j > 0) {
								for (; r > 0 && n[r] && O < n[r].width && O - n[r - 1].width < n[r].width - O;) r -= 1;
								for (; r < n.length - 1 && n[r].width === n[r + 1].width;) r += 1
							}
							return r
						}(function(e, t, n) {
							var r = Y.get().streaming.abr.maxRepresentationRatio[t];
							if (isNaN(r) || r >= 1 || r < 0) return e;
							return Math.min(e, Math.round(n * r))
						}(function(e, t) {
							var n = e;
							if (!M[t]) return n;
							var r = Z(t);
							void 0 !== r && (n = Math.max(e, r));
							var s = J(t);
							void 0 !== s && (n = Math.min(n, s));
							return n
						}(I[t][e], e), e, I[t][e]), e)
				}

				function J(e) {
					var t = function(e) {
						return Y.get().streaming.abr.maxBitrate[e]
					}(e);
					return t > -1 ? ne(M[e].getMediaInfo(), t) : void 0
				}

				function Z(e) {
					var t = function(e) {
						return Y.get().streaming.abr.minBitrate[e]
					}(e);
					if (t > -1) {
						var n = M[e].getMediaInfo(),
							r = re(n),
							s = ne(n, t);
						return r[s] && s < r.length - 1 && r[s].bitrate < 1e3 * t && s++, s
					}
				}

				function $(e, t, n, r) {
					var s = t.id,
						i = oe(e);
					(0, E.checkInteger)(n);
					var a = Q(e, s);
					n !== i && n >= 0 && n <= a && ee(e, i, n, a, r)
				}

				function ee(e, t, r, s, i) {
					if (e && M[e]) {
						var a = M[e].getStreamInfo(),
							o = a ? a.id : null;
						if (Y.get().debug.logLevel === _.default.LOG_LEVEL_DEBUG) {
							var u = K.getCurrentBufferLevel(e);
							v.info("[" + e + "] switch from " + t + " to " + r + "/" + s + " (buffer: " + u + ") " + (i ? JSON.stringify(i) : "."))
						}! function(e, t, n) {
							R[t] = R[t] || {}, R[t][e] = n
						}(e, o, r), n.trigger(l.default.QUALITY_CHANGE_REQUESTED, {
							oldQuality: t,
							newQuality: r,
							reason: i
						}, {
							streamId: a.id,
							mediaType: e
						});
						var d = k.getAverageThroughput(e);
						isNaN(d) || F.setSavedBitrateSettings(e, d)
					}
				}

				function te(e, t) {
					C[e].state = t
				}

				function ne(e, t, n) {
					var r = e && e.type ? M[e.type].getRepresentationInfo() : null;
					if (Y.get().streaming.abr.useDeadTimeLatency && n && r && r.fragmentDuration) {
						n /= 1e3;
						var s = r.fragmentDuration;
						if (n > s) return 0;
						t *= 1 - n / s
					}
					for (var i = re(e), a = i.length - 1; a >= 0; a--) {
						if (1e3 * t >= i[a].bitrate) return a
					}
					return b
				}

				function re(e) {
					var t = [];
					if (!e || !e.bitrateList) return t;
					for (var n = e.bitrateList, r = e.type, s = void 0, i = 0, o = n.length; i < o; i++)(s = new a.default).mediaType = r, s.qualityIndex = i, s.bitrate = n[i].bandwidth, s.width = n[i].width, s.height = n[i].height, s.scanType = n[i].scanType, t.push(s);
					return t
				}

				function se(e) {
					return G[e]
				}

				function ie(e) {
					return q[e]
				}

				function ae(e) {
					return H[e]
				}

				function oe(e) {
					if (e && M[e]) {
						var t = M[e].getStreamInfo(),
							n = t ? t.id : null;
						if (n) return R[n] = R[n] || {}, R[n].hasOwnProperty(e) || (R[n][e] = b), R[n][e]
					}
					return b
				}

				function ue() {
					if (P) {
						var e = Y.get().streaming.abr.usePixelRatioInLimitBitrateByPortal && window.hasOwnProperty("devicePixelRatio") ? window.devicePixelRatio : 1;
						O = P.getClientWidth() * e, j = P.getClientHeight() * e
					}
				}

				function le(t) {
					var n = t.request.mediaType;
					if (Y.get().streaming.abr.autoSwitchBitrate[n]) {
						var r = M[n];
						if (!r) return;
						var s = (0, c.default)(e).create({
								abrController: d,
								streamProcessor: r,
								currentRequest: t.request,
								useBufferOccupancyABR: se(n),
								useL2AABR: ie(n),
								useLoLPABR: ae(n),
								videoModel: P
							}),
							a = S.shouldAbandonFragment(s);
						if (a.quality > f.default.NO_CHANGE) {
							var u = r.getFragmentModel();
							u.getRequests({
								state: o.default.FRAGMENT_MODEL_LOADING,
								index: t.request.index
							})[0] && (u.abortRequests(), te(n, i.default.ABANDON_LOAD), U[n].reset(), U[n].push({
								oldValue: oe(n),
								newValue: a.quality,
								confidence: 1,
								reason: a.reason
							}), $(n, A.getActiveStreamInfo(), a.quality, a.reason), clearTimeout(D), D = setTimeout((function() {
								te(n, i.default.ALLOW_LOAD), D = null
							}), Y.get().streaming.abandonLoadTimeout))
						}
					}
				}
				return d = {
					isPlayingAtTopQuality: function(e) {
						var t = e ? e.id : null,
							n = oe(s.default.AUDIO),
							r = oe(s.default.VIDEO);
						return n === Q(s.default.AUDIO, t) && r === Q(s.default.VIDEO, t)
					},
					updateTopQualityIndex: function(e) {
						var t = e.type,
							n = e.streamInfo.id,
							r = e.representationCount - 1;
						return function(e, t, n) {
							I[t] = I[t] || {}, I[t][e] = n
						}(t, n, r), r
					},
					getThroughputHistory: function() {
						return k
					},
					getBitrateList: re,
					getQualityForBitrate: ne,
					getTopBitrateInfoFor: function(e) {
						if (e && M && M[e]) {
							var t = M[e].getStreamInfo();
							if (t && t.id) {
								var n = Q(e, t.id),
									r = re(M[e].getMediaInfo());
								return r[n] ? r[n] : null
							}
						}
						return null
					},
					getMaxAllowedIndexFor: J,
					getMinAllowedIndexFor: Z,
					getInitialBitrateFor: function(e) {
						if (function() {
								if (!F || !F.hasOwnProperty("getSavedBitrateSettings")) throw new Error(s.default.MISSING_CONFIG_ERROR)
							}(), e === s.default.TEXT || e === s.default.FRAGMENTED_TEXT) return NaN;
						var t = F.getSavedBitrateSettings(e),
							n = Y.get().streaming.abr.initialBitrate[e],
							r = Y.get().streaming.abr.initialRepresentationRatio[e];
						if (-1 === n)
							if (r > -1) {
								var i = w.getAdaptationForType(0, e).Representation;
								if (Array.isArray(i)) n = i[Math.max(Math.round(i.length * r) - 1, 0)].bandwidth;
								else n = 0
							} else n = isNaN(t) ? e === s.default.VIDEO ? y : T : t;
						return n
					},
					getQualityFor: oe,
					getAbandonmentStateFor: function(e) {
						return C[e] ? C[e].state : null
					},
					setPlaybackQuality: $,
					checkPlaybackQuality: function(t) {
						if (t && M && M[t]) {
							var n = M[t].getStreamInfo(),
								r = n ? n.id : null,
								s = oe(t),
								a = (0, c.default)(e).create({
									abrController: d,
									streamProcessor: M[t],
									currentValue: s,
									switchHistory: U[t],
									droppedFramesHistory: B,
									useBufferOccupancyABR: se(t),
									useL2AABR: ie(t),
									useLoLPABR: ae(t),
									videoModel: P
								});
							if (B) {
								var o = P.getPlaybackQuality();
								o && B.push(x, o)
							}
							if (Y.get().streaming.abr.autoSwitchBitrate[t]) {
								var u = Z(t),
									l = Q(t, r),
									h = S.getMaxQuality(a),
									m = h.quality;
								if (void 0 !== u && (m > f.default.NO_CHANGE ? m : s) < u && (m = u), m > l && (m = l), U[t].push({
										oldValue: s,
										newValue: m
									}), m > f.default.NO_CHANGE && m != s)(C[t].state === i.default.ALLOW_LOAD || m > s) && ee(t, s, m, l, h.reason);
								else if (Y.get().debug.logLevel === _.default.LOG_LEVEL_DEBUG) {
									var g = K.getCurrentBufferLevel(t, !0);
									v.debug("[" + t + "] stay on " + s + "/" + l + " (buffer: " + g + ")")
								}
							}
						}
					},
					getTopQualityIndexFor: Q,
					setElementSize: ue,
					setWindowResizeEventCalled: function(e) {
						N = e
					},
					createAbrRulesCollection: V,
					registerStreamType: function(t, r) {
						U[t] = U[t] || (0, h.default)(e).create(), M[t] = r, C[t] = C[t] || {}, C[t].state = i.default.ALLOW_LOAD, G[t] = !1, q[t] = !1, H[t] = !1, n.on(l.default.LOADING_PROGRESS, le, d), t === s.default.VIDEO && (n.on(l.default.QUALITY_CHANGE_RENDERED, W, d), B = B || (0, m.default)(e).create(), ue()), n.on(l.default.METRIC_ADDED, X, d), n.on(l.default.PERIOD_SWITCH_COMPLETED, V, d), k = k || (0, g.default)(e).create({
							settings: Y
						})
					},
					unRegisterStreamType: function(e) {
						delete M[e]
					},
					setConfig: function(e) {
						e && (e.streamController && (A = e.streamController), e.domStorage && (F = e.domStorage), e.mediaPlayerModel && (L = e.mediaPlayerModel), e.dashMetrics && (K = e.dashMetrics), e.adapter && (w = e.adapter), e.videoModel && (P = e.videoModel), e.settings && (Y = e.settings))
					},
					reset: function() {
						z(), n.off(l.default.LOADING_PROGRESS, le, d), n.off(l.default.QUALITY_CHANGE_RENDERED, W, d), n.off(l.default.METRIC_ADDED, X, d), n.off(l.default.PERIOD_SWITCH_COMPLETED, V, d), S && S.reset()
					}
				}, v = t.getLogger(d), z(), d
			}
			S.__dashjs_factory_name = "AbrController";
			var A = d.default.getSingletonFactory(S);
			A.QUALITY_DEFAULT = b, d.default.updateSingletonFactory(S.__dashjs_factory_name, A), t.default = A
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/BaseURLController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = d(n("./node_modules/dashjs/build/es5/src/streaming/models/BaseURLTreeModel.js")),
				s = d(n("./node_modules/dashjs/build/es5/src/streaming/utils/BaseURLSelector.js")),
				i = d(n("./node_modules/dashjs/build/es5/src/streaming/utils/URLUtils.js")),
				a = d(n("./node_modules/dashjs/build/es5/src/dash/vo/BaseURL.js")),
				o = d(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				u = d(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				l = d(n("./node_modules/dashjs/build/es5/src/core/events/Events.js"));

			function d(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function c() {
				var e = void 0,
					t = void 0,
					n = this.context,
					o = (0, u.default)(n).getInstance(),
					d = (0, i.default)(n).getInstance(),
					c = void 0,
					f = void 0;

				function h(e) {
					c.invalidateSelectedIndexes(e.entry)
				}
				return e = {
					reset: function() {
						c.reset(), f.reset()
					},
					initialize: function(e) {
						var n;
						c.setConfig({
							adapter: t
						}), n = e, c.update(n), f.chooseSelector(t.getIsDVB(n))
					},
					resolve: function(e) {
						var t = c.getForPath(e).reduce((function(e, t) {
							var n = f.select(t);
							return n ? (d.isRelative(n.url) ? e.url = d.resolve(n.url, e.url) : (e.url = n.url, e.serviceLocation = n.serviceLocation), e.availabilityTimeOffset = n.availabilityTimeOffset, e.availabilityTimeComplete = n.availabilityTimeComplete, e) : new a.default
						}), new a.default);
						if (!d.isRelative(t.url)) return t
					},
					setConfig: function(e) {
						e.baseURLTreeModel && (c = e.baseURLTreeModel), e.baseURLSelector && (f = e.baseURLSelector), e.adapter && (t = e.adapter)
					}
				}, c = (0, r.default)(n).create(), f = (0, s.default)(n).create(), o.on(l.default.SERVICE_LOCATION_BLACKLIST_CHANGED, h, e), e
			}
			c.__dashjs_factory_name = "BaseURLController", t.default = o.default.getClassFactory(c)
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/BlacklistController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = i(n("./node_modules/dashjs/build/es5/src/core/EventBus.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function a(e) {
				e = e || {};
				var t = void 0,
					n = [],
					r = (0, s.default)(this.context).getInstance(),
					i = e.updateEventName,
					a = e.addBlacklistEventName;

				function o(e) {
					-1 === n.indexOf(e) && (n.push(e), r.trigger(i, {
						entry: e
					}))
				}

				function u(e) {
					o(e.entry)
				}
				return t = {
					add: o,
					contains: function(e) {
						return !!(n.length && e && e.length) && -1 !== n.indexOf(e)
					},
					reset: function() {
						n = []
					}
				}, a && r.on(a, u, t), t
			}
			a.__dashjs_factory_name = "BlackListController", t.default = r.default.getClassFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/BufferController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = p(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				s = p(n("./node_modules/dashjs/build/es5/src/streaming/constants/MetricsConstants.js")),
				i = p(n("./node_modules/dashjs/build/es5/src/streaming/models/FragmentModel.js")),
				a = p(n("./node_modules/dashjs/build/es5/src/streaming/SourceBufferSink.js")),
				o = p(n("./node_modules/dashjs/build/es5/src/streaming/PreBufferSink.js")),
				u = p(n("./node_modules/dashjs/build/es5/src/streaming/controllers/AbrController.js")),
				l = p(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				d = p(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				c = p(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				f = p(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				h = p(n("./node_modules/dashjs/build/es5/src/streaming/utils/InitCache.js")),
				m = p(n("./node_modules/dashjs/build/es5/src/streaming/vo/DashJSError.js")),
				g = p(n("./node_modules/dashjs/build/es5/src/core/errors/Errors.js")),
				_ = n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js");

			function p(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var E = .1,
				v = .5,
				y = .01,
				T = 22,
				b = "BufferController";

			function S(e) {
				e = e || {};
				var t = this.context,
					n = (0, l.default)(t).getInstance(),
					c = e.errHandler,
					p = e.fragmentModel,
					S = e.representationController,
					A = e.mediaController,
					I = e.adapter,
					R = e.textController,
					M = e.abrController,
					C = e.playbackController,
					D = e.streamInfo,
					N = e.type,
					O = e.settings,
					j = void 0,
					w = void 0,
					P = void 0,
					L = void 0,
					F = void 0,
					x = void 0,
					U = void 0,
					B = void 0,
					k = void 0,
					G = void 0,
					q = void 0,
					H = void 0,
					K = void 0,
					Y = void 0,
					V = void 0,
					z = void 0,
					W = void 0,
					X = void 0,
					Q = void 0,
					J = void 0,
					Z = void 0,
					$ = void 0;

				function ee(e) {
					return I.convertDataToRepresentationInfo(S.getRepresentationForQuality(e))
				}

				function te(e, n) {
					if (!W || !e) return null;
					var r = e[0];
					if (U) try {
						G = n && n[N] ? (0, a.default)(t).create(U, r, ae.bind(this), n[N]) : (0, a.default)(t).create(U, r, ae.bind(this), null), O.get().streaming.useAppendWindow && G.updateAppendWindow(D), "function" == typeof G.getBuffer().initialize && G.getBuffer().initialize(N, D, e, p)
					} catch (s) {
						w.fatal("Caught error on create SourceBuffer: " + s), c.error(new m.default(g.default.MEDIASOURCE_TYPE_UNSUPPORTED_CODE, g.default.MEDIASOURCE_TYPE_UNSUPPORTED_MESSAGE + N))
					} else G = (0, o.default)(t).create(ae.bind(this));
					return be(ee(P)), G
				}

				function ne(e) {
					w.info("Init fragment finished loading saving to", N + "'s init cache"), W.save(e.chunk), w.debug("Append Init fragment", N, " with representationId:", e.chunk.representationId, " and quality:", e.chunk.quality, ", data size:", e.chunk.bytes.byteLength), se(e.chunk)
				}

				function re(e) {
					var t = e.chunk;
					if (Z) {
						$ = t;
						var n = G && G.getAllBufferRanges();
						n && n.length > 0 && C.getTimeToStreamEnd() > O.get().streaming.stallThreshold && (w.debug("Clearing buffer because track changed - " + (n.end(n.length - 1) + v)), ve([{
							start: 0,
							end: n.end(n.length - 1) + v,
							force: !0
						}]))
					} else se(t)
				}

				function se(e) {
					G.append(e), e.mediaInfo.type === r.default.VIDEO && Oe(d.default.VIDEO_CHUNK_RECEIVED, {
						chunk: e
					})
				}

				function ie(e) {
					if (e && e.length > 0)
						for (var t = 0, n = e.length; t < n; t++) w.debug("Buffered range: " + e.start(t) + " - " + e.end(t) + ", currentTime = ", C.getTime())
				}

				function ae(e) {
					if (e.error) {
						if (e.error.code === T && (z = !0, x = .8 * De(), w.warn("Quota exceeded, Critical Buffer: " + x), x > 0)) {
							var t = Math.max(.2 * x, 1),
								n = x - t,
								s = Math.min(O.get().streaming.bufferTimeAtTopQuality, .9 * n),
								i = Math.min(O.get().streaming.bufferTimeAtTopQualityLongForm, .9 * n),
								a = {
									streaming: {
										bufferToKeep: parseFloat(t.toFixed(5)),
										bufferTimeAtTopQuality: parseFloat(s.toFixed(5)),
										bufferTimeAtTopQualityLongForm: parseFloat(i.toFixed(5))
									}
								};
							O.update(a)
						}
						e.error.code !== T && Ne() || (w.warn("Clearing playback buffer to overcome quota exceed situation"), Oe(d.default.QUOTA_EXCEEDED, {
							criticalBufferLevel: x
						}), ve(Ee()))
					} else {
						z = !1, (K = e.chunk) && !isNaN(K.index) && (B = Math.max(K.index, B), ge());
						var o = G.getAllBufferRanges();
						if (K.segmentType === _.HTTPRequest.MEDIA_SEGMENT_TYPE) ie(o), de(),
							function() {
								if (N !== r.default.AUDIO && N !== r.default.VIDEO) return;
								if (isNaN(X)) return;
								var e = C.getTime(),
									t = he(X, 0);
								if (e === X && t) return;
								var n = S.getCurrentRepresentation().segmentDuration;
								if (!(t = he(X, n))) return;
								Math.abs(e - X) > n ? X <= t.end && (C.seek(Math.max(X, t.start), !1, !0), X = NaN) : e < t.start && (C.seek(t.start, !1, !0), X = NaN)
							}();
						else if (Z) {
							var u = C.getTime();
							w.debug("AppendToBuffer seek target should be " + u), Oe(d.default.SEEK_TARGET, {
								time: u
							})
						}
						K && Oe(K.endFragment ? d.default.BYTES_APPENDED_END_FRAGMENT : d.default.BYTES_APPENDED, {
							quality: K.quality,
							startTime: K.start,
							index: K.index,
							bufferedRanges: o,
							mediaType: N
						})
					}
				}

				function oe(e) {
					P !== e.newQuality && (be(this.getRepresentationInfo(e.newQuality)), P = e.newQuality)
				}

				function ue(e) {
					X = e.seekTime, L && (Q = !0, L = !1, k = Number.POSITIVE_INFINITY), N !== r.default.FRAGMENTED_TEXT ? G.waitForUpdateEnd((function() {
						var e = function() {
							var e = [],
								t = G.getAllBufferRanges();
							if (!t || 0 === t.length) return e;
							var n = C.getTime(),
								r = t.end(t.length - 1) + v,
								s = p.getRequests({
									state: i.default.FRAGMENT_MODEL_EXECUTED,
									time: n,
									threshold: y
								})[0];
							if (s) {
								var a = {
										start: 0,
										end: s.startTime - O.get().streaming.stallThreshold
									},
									o = p.getRequests({
										state: i.default.FRAGMENT_MODEL_EXECUTED,
										time: s.startTime - s.duration / 2,
										threshold: y
									})[0];
								o && o.startTime != s.startTime && (a.end = o.startTime), a.start < a.end && a.end > t.start(0) && e.push(a);
								var u = {
										start: s.startTime + s.duration + O.get().streaming.stallThreshold,
										end: r
									},
									l = p.getRequests({
										state: i.default.FRAGMENT_MODEL_EXECUTED,
										time: s.startTime + s.duration + O.get().streaming.stallThreshold,
										threshold: y
									})[0];
								l && l.startTime !== s.startTime && (u.start = l.startTime + l.duration + O.get().streaming.stallThreshold), u.start < u.end && u.start < r && e.push(u)
							} else w.debug("getAllRangesWithSafetyFactor - No request found in current time position, removing full buffer 0 -", r), e.push({
								start: 0,
								end: r
							});
							return e
						}();
						e && 0 !== e.length || de(), ve(e)
					})) : de()
				}

				function le() {
					X = NaN
				}

				function de() {
					(!Z || N === r.default.FRAGMENTED_TEXT && R.isTextEnabled()) && me()
				}

				function ce() {
					_e()
				}

				function fe() {
					X = NaN, _e()
				}

				function he(e, t) {
					var n = G.getAllBufferRanges(),
						r = 0,
						s = 0,
						i = null,
						a = null,
						o = 0,
						u = void 0,
						l = void 0,
						d = isNaN(t) ? .15 : t;
					if (null != n) {
						for (l = 0, u = n.length; l < u; l++)
							if (r = n.start(l), s = n.end(l), null === i) o = Math.abs(r - e), e >= r && e < s ? (i = r, a = s) : o <= d && (i = r, a = s);
							else {
								if (!((o = r - a) <= d)) break;
								a = s
							} if (null !== i) return {
							start: i,
							end: a
						}
					}
					return null
				}

				function me() {
					var e, t, n;
					C && (e = (isNaN(X) ? C.getTime() : X) || 0, O.get().streaming.jumpGaps && (t = O.get().streaming.smallGapLimit), F = null === (n = he(e, t)) ? 0 : n.end - e, Oe(d.default.BUFFER_LEVEL_UPDATED, {
						bufferLevel: F
					}), _e())
				}

				function ge() {
					B >= k - 1 && !L && void 0 === G.discharge && (L = !0, w.debug("checkIfBufferingCompleted trigger BUFFERING_COMPLETED for " + N), Oe(d.default.BUFFERING_COMPLETED))
				}

				function _e() {
					N !== r.default.AUDIO && N !== r.default.VIDEO || (Q && !L && F > 0 && C && C.getTimeToStreamEnd() - F < E && (Q = !1, L = !0, w.debug("checkIfSufficientBuffer trigger BUFFERING_COMPLETED for type " + N), Oe(d.default.BUFFERING_COMPLETED)), (!O.get().streaming.lowLatencyEnabled && F < O.get().streaming.stallThreshold || 0 === F) && !L ? pe(s.default.BUFFER_EMPTY) : (L || F >= D.manifestInfo.minBufferTime) && pe(s.default.BUFFER_LOADED))
				}

				function pe(e) {
					H === e || e === s.default.BUFFER_EMPTY && 0 === C.getTime() || N === r.default.FRAGMENTED_TEXT && !R.isTextEnabled() || (H = e, Oe(d.default.BUFFER_LEVEL_STATE_CHANGED, {
						state: e
					}), Oe(e === s.default.BUFFER_LOADED ? d.default.BUFFER_LOADED : d.default.BUFFER_EMPTY), w.debug(e === s.default.BUFFER_LOADED ? "Got enough buffer to start" : "Waiting for more buffer before starting playback"))
				}

				function Ee() {
					var e = [],
						t = G.getAllBufferRanges();
					if (!t || 0 === t.length) return e;
					var n = C.getTime(),
						r = Math.max(0, n - O.get().streaming.bufferToKeep),
						s = p.getRequests({
							state: i.default.FRAGMENT_MODEL_EXECUTED,
							time: n,
							threshold: y
						})[0];
					if (s) r = Math.min(s.startTime, r);
					else if (0 === n && C.getIsDynamic()) return [];
					if (t.start(0) <= r) {
						for (var a = {
								start: 0,
								end: r
							}, o = 0; o < t.length && t.end(o) <= r; o++) a.end = t.end(o);
						a.start < a.end && e.push(a)
					}
					return e
				}

				function ve(e) {
					e && G && 0 !== e.length && (J.push.apply(J, e), V || ye())
				}

				function ye() {
					if (0 === J.length || !G) return w.debug("Nothing to prune, halt pruning"), J = [], void(V = !1);
					var e = G.getBuffer();
					if (!e || !e.buffered || 0 === e.buffered.length) return w.debug("SourceBuffer is empty (or does not exist), halt pruning"), J = [], void(V = !1);
					var t = J.shift();
					w.debug("Removing buffer from:", t.start, "to", t.end), V = !0, C.getTime() < t.end && (L = !1, B = 0), G.remove(t.start, t.end, t.force)
				}

				function Te(e) {
					G === e.buffer && (w.debug("onRemoved buffer from:", e.from, "to", e.to), ie(G.getAllBufferRanges()), 0 === J.length && (V = !1), e.unintended && (w.warn("Detected unintended removal from:", e.from, "to", e.to, "setting index handler time to", e.from), Oe(d.default.SEEK_TARGET, {
						time: e.from,
						mediaType: N,
						streamId: D.id
					})), V ? ye() : (Z ? (Z = !1, $ && se($)) : me(), Oe(d.default.BUFFER_CLEARED, {
						from: e.from,
						to: e.to,
						unintended: e.unintended,
						hasEnoughSpaceToAppend: Ne(),
						quotaExceeded: z
					})))
				}

				function be(e) {
					e && void 0 !== e.MSETimeOffset && G && G.updateTimestampOffset && G.updateTimestampOffset(e.MSETimeOffset)
				}

				function Se(e) {
					e.error || L || be(e.currentRepresentation)
				}

				function Ae(e) {
					k = e.request.index, ge()
				}

				function Ie(e) {
					if (e.newMediaInfo.streamInfo.id === D.id && e.newMediaInfo.type === N) {
						var t = G && G.getAllBufferRanges();
						t && (w.info("Track change asked"), A.getSwitchMode(N) === r.default.TRACK_SWITCH_MODE_ALWAYS_REPLACE && t && t.length > 0 && C.getTimeToStreamEnd() > O.get().streaming.stallThreshold && (L = !1, k = Number.POSITIVE_INFINITY))
					}
				}

				function Re() {
					++Y * (O.get().streaming.wallclockTimeUpdateInterval / 1e3) >= O.get().streaming.bufferPruningInterval && (Y = 0, G && N !== r.default.FRAGMENTED_TEXT && (L || ve(Ee())))
				}

				function Me() {
					_e()
				}

				function Ce(e, t) {
					U = e, G && t && "function" == typeof G.discharge && (q = G, te(t))
				}

				function De() {
					var e, t = G.getAllBufferRanges(),
						n = 0,
						r = void 0;
					if (!t) return n;
					for (r = 0, e = t.length; r < e; r++) n += t.end(r) - t.start(r);
					return n
				}

				function Ne() {
					return De() < x
				}

				function Oe(e, t) {
					var r = t || {};
					n.trigger(e, r, {
						streamId: D.id,
						mediaType: N
					})
				}

				function je(e, t) {
					x = Number.POSITIVE_INFINITY, H = void 0, P = u.default.QUALITY_DEFAULT, k = Number.POSITIVE_INFINITY, B = 0, K = null, L = !1, V = !1, z = !1, Q = !1, F = 0, Y = 0, J = [], X = NaN, G && (e || G.abort(), G.reset(t), G = null), Z = !1
				}
				return j = {
					initialize: function(e) {
						Ce(e), P = M.getQualityFor(N), n.on(d.default.DATA_UPDATE_COMPLETED, Se, this), n.on(d.default.INIT_FRAGMENT_LOADED, ne, this), n.on(d.default.MEDIA_FRAGMENT_LOADED, re, this), n.on(d.default.QUALITY_CHANGE_REQUESTED, oe, this), n.on(d.default.STREAM_COMPLETED, Ae, this), n.on(d.default.PLAYBACK_PLAYING, fe, this), n.on(d.default.PLAYBACK_PROGRESS, de, this), n.on(d.default.PLAYBACK_TIME_UPDATED, de, this), n.on(d.default.PLAYBACK_RATE_CHANGED, Me, this), n.on(d.default.PLAYBACK_SEEKING, ue, this), n.on(d.default.PLAYBACK_SEEKED, le, this), n.on(d.default.PLAYBACK_STALLED, ce, this), n.on(d.default.WALLCLOCK_TIME_UPDATED, Re, this), n.on(d.default.CURRENT_TRACK_CHANGED, Ie, this, {
							priority: l.default.EVENT_PRIORITY_HIGH
						}), n.on(d.default.SOURCEBUFFER_REMOVE_COMPLETED, Te, this)
					},
					getStreamId: function() {
						return D.id
					},
					getType: function() {
						return N
					},
					getBufferControllerType: function() {
						return b
					},
					getRepresentationInfo: ee,
					createBuffer: te,
					dischargePreBuffer: function() {
						if (G && q && "function" == typeof q.discharge) {
							var e = q.getAllBufferRanges();
							if (e.length > 0) {
								for (var t = "Beginning " + N + "PreBuffer discharge, adding buffer for:", n = 0; n < e.length; n++) t += " start: " + e.start(n) + ", end: " + e.end(n) + ";";
								w.debug(t)
							} else w.debug("PreBuffer discharge requested, but there were no media segments in the PreBuffer.");
							for (var r = q.discharge(), s = null, i = 0; i < r.length; i++) {
								var a = r[i],
									o = W.extract(a.streamId, a.representationId);
								o && (s !== o && (G.append(o), s = o), G.append(a))
							}
							q.reset(), q = null
						}
					},
					getBuffer: function() {
						return G
					},
					setBuffer: function(e) {
						G = e
					},
					getBufferLevel: function() {
						return F
					},
					getRangeAt: he,
					setMediaSource: Ce,
					getMediaSource: function() {
						return U
					},
					appendInitSegment: function(e) {
						var t = W.extract(D.id, e);
						return !!t && (w.info("Append Init fragment", N, " with representationId:", t.representationId, " and quality:", t.quality, ", data size:", t.bytes.byteLength), se(t), !0)
					},
					replaceBuffer: function() {
						Z = !0
					},
					getIsBufferingCompleted: function() {
						return L
					},
					getIsPruningInProgress: function() {
						return V
					},
					reset: function(e, t) {
						n.off(d.default.DATA_UPDATE_COMPLETED, Se, this), n.off(d.default.INIT_FRAGMENT_LOADED, ne, this), n.off(d.default.MEDIA_FRAGMENT_LOADED, re, this), n.off(d.default.QUALITY_CHANGE_REQUESTED, oe, this), n.off(d.default.STREAM_COMPLETED, Ae, this), n.off(d.default.PLAYBACK_PLAYING, fe, this), n.off(d.default.PLAYBACK_PROGRESS, de, this), n.off(d.default.PLAYBACK_TIME_UPDATED, de, this), n.off(d.default.PLAYBACK_RATE_CHANGED, Me, this), n.off(d.default.PLAYBACK_SEEKING, ue, this), n.off(d.default.PLAYBACK_SEEKED, le, this), n.off(d.default.PLAYBACK_STALLED, ce, this), n.off(d.default.WALLCLOCK_TIME_UPDATED, Re, this), n.off(d.default.CURRENT_TRACK_CHANGED, Ie, this), n.off(d.default.SOURCEBUFFER_REMOVE_COMPLETED, Te, this), je(e, t)
					},
					updateAppendWindow: function() {
						G && !L && G.updateAppendWindow(D)
					}
				}, w = (0, f.default)(t).getInstance().getLogger(j), W = (0, h.default)(t).getInstance(), je(), j
			}
			S.__dashjs_factory_name = b, t.default = c.default.getClassFactory(S)
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/EventController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = u(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = u(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				i = u(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				a = u(n("./node_modules/dashjs/build/es5/src/streaming/MediaPlayerEvents.js")),
				o = u(n("./node_modules/dashjs/build/es5/src/streaming/net/XHRLoader.js"));

			function u(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function l() {
				var e = "urn:mpeg:dash:event:2012",
					t = 1,
					n = "urn:mpeg:dash:event:callback:2015",
					r = 1,
					u = 100,
					l = 300,
					d = this.context,
					c = (0, i.default)(d).getInstance(),
					f = void 0,
					h = void 0,
					m = void 0,
					g = void 0,
					_ = void 0,
					p = void 0,
					E = void 0,
					v = void 0,
					y = void 0,
					T = void 0,
					b = void 0;

				function S() {
					if (!v || !y) throw new Error("setConfig function has to be called previously")
				}

				function A() {
					b = !1, m = {}, g = {}, _ = {}, p = null, T = !1, E = Date.now() / 1e3
				}

				function I() {
					try {
						null !== p && b && (clearInterval(p), p = null, b = !1, function() {
							try {
								O(g), O(m)
							} catch (e) {}
						}())
					} catch (e) {
						throw e
					}
				}

				function R(e) {
					try {
						if (e.eventStream.value == t) {
							var n = e.calculatedPresentationTime,
								r = void 0;
							r = 4294967295 == e.calculatedPresentationTime ? NaN : e.calculatedPresentationTime + e.duration, c.trigger(a.default.MANIFEST_VALIDITY_CHANGED, {
								id: e.id,
								validUntil: n,
								newDuration: r,
								newManifestValidAfter: NaN
							}, {
								mode: a.default.EVENT_MODE_ON_START
							})
						}
					} catch (s) {}
				}

				function M() {
					try {
						if (!T) {
							T = !0;
							var e = y.getTime(),
								t = e - E;
							t = E > 0 ? Math.max(0, t) : 0, C(g, t, e), C(m, t, e),
								function() {
									try {
										if (_)
											for (var e = y.getTime(), t = Object.keys(_), n = 0; n < t.length; n++) {
												var r = t[n],
													s = _[r];
												null !== s && s.duration + s.calculatedPresentationTime < e && (h.debug("Remove Event " + r + " at time " + e), s = null, delete _[r])
											}
									} catch (i) {}
								}(), E = e, T = !1
						}
					} catch (n) {
						T = !1
					}
				}

				function C(e, t, n) {
					try {
						if (e)
							for (var r = Object.keys(e), s = 0; s < r.length; s++) {
								var i = r[s],
									o = e[i];
								if (void 0 !== o) {
									var u = isNaN(o.duration) ? 0 : o.duration;
									o.calculatedPresentationTime <= n && o.calculatedPresentationTime + t + u >= n ? j(i, o, e, a.default.EVENT_MODE_ON_START) : (D(n, u + t, o.calculatedPresentationTime) || N(o)) && (h.debug("Deleting event " + i + " as it is expired or invalid"), delete e[i])
								}
							}
					} catch (l) {}
				}

				function D(e, t, n) {
					try {
						return e - t > n
					} catch (r) {
						return !1
					}
				}

				function N(e) {
					try {
						var t = e.eventStream.period.start + e.eventStream.period.duration;
						return e.calculatedPresentationTime > t
					} catch (n) {
						return !1
					}
				}

				function O(e) {
					try {
						var t = Object.keys(e),
							n = y.getTime();
						if (!t || 0 === t.length) return;
						var r = e[t[0]].eventStream && e[t[0]].eventStream.period && !isNaN(e[t[0]].eventStream.period.duration) ? e[t[0]].eventStream.period.duration : NaN,
							s = e[t[0]].eventStream && e[t[0]].eventStream.period && !isNaN(e[t[0]].eventStream.period.start) ? e[t[0]].eventStream.period.start : NaN;
						if (isNaN(r) || isNaN(s)) return;
						t.forEach((function(t) {
							var r = e[t],
								s = r.calculatedPresentationTime;
							Math.abs(s - n) < l && j(t, r, e, a.default.EVENT_MODE_ON_START)
						}))
					} catch (i) {}
				}

				function j(s, i, u, l) {
					try {
						var f = y.getTime();
						if (l === a.default.EVENT_MODE_ON_RECEIVE) return h.debug("Received event " + s), void c.trigger(i.eventStream.schemeIdUri, {
							event: i
						}, {
							mode: l
						});
						i.duration > 0 && (_[s] = i), i.eventStream.schemeIdUri === e && i.eventStream.value === t ? 0 === i.duration && 0 === i.presentationTimeDelta || (h.debug("Starting manifest refresh event " + s + " at " + f), function() {
							try {
								S(), v.refreshManifest()
							} catch (e) {}
						}()) : i.eventStream.schemeIdUri === n && i.eventStream.value === r ? (h.debug("Starting callback event " + s + " at " + f), function(e) {
							try {
								(0, o.default)(d).create({}).load({
									method: "get",
									url: e,
									request: {
										responseType: "arraybuffer"
									}
								})
							} catch (t) {
								throw t
							}
						}(i.messageData)) : (h.debug("Starting event " + s + " at " + f), c.trigger(i.eventStream.schemeIdUri, {
							event: i
						}, {
							mode: l
						})), delete u[s]
					} catch (m) {}
				}
				return f = {
					addInlineEvents: function(e) {
						try {
							if (S(), e)
								for (var t = 0; t < e.length; t++) {
									var n = e[t];
									h.debug("Add inline event with id " + n.id), m[n.id] || j(n.id, n, e, a.default.EVENT_MODE_ON_RECEIVE), m[n.id] = n
								}
							h.debug("Added " + e.length + " inline events")
						} catch (r) {
							throw r
						}
					},
					addInbandEvents: function(t) {
						try {
							S();
							for (var n = 0; n < t.length; n++) {
								var r = t[n];
								r.id in g ? h.debug("Repeated event with id " + r.id) : (r.eventStream.schemeIdUri === e && void 0 === g[r.id] && R(r), g[r.id] = r, h.debug("Add inband event with id " + r.id), j(r.id, r, t, a.default.EVENT_MODE_ON_RECEIVE))
							}
							M()
						} catch (s) {
							throw s
						}
					},
					start: function() {
						try {
							S(), h.debug("Start Event Controller"), b || isNaN(u) || (b = !0, p = setInterval(M, u))
						} catch (e) {
							throw e
						}
					},
					setConfig: function(e) {
						try {
							if (!e) return;
							e.manifestUpdater && (v = e.manifestUpdater), e.playbackController && (y = e.playbackController)
						} catch (t) {
							throw t
						}
					},
					reset: function() {
						I(), A()
					}
				}, h = (0, s.default)(d).getInstance().getLogger(f), A(), f
			}
			l.__dashjs_factory_name = "EventController", t.default = r.default.getSingletonFactory(l)
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/FragmentController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = h(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				s = h(n("./node_modules/dashjs/build/es5/src/streaming/vo/DataChunk.js")),
				i = h(n("./node_modules/dashjs/build/es5/src/streaming/models/FragmentModel.js")),
				a = h(n("./node_modules/dashjs/build/es5/src/streaming/FragmentLoader.js")),
				o = h(n("./node_modules/dashjs/build/es5/src/streaming/utils/RequestModifier.js")),
				u = h(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				l = h(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				d = h(n("./node_modules/dashjs/build/es5/src/core/errors/Errors.js")),
				c = h(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				f = h(n("./node_modules/dashjs/build/es5/src/core/Debug.js"));

			function h(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function m(e) {
				e = e || {};
				var t = this.context,
					n = (0, u.default)(t).getInstance(),
					c = e.errHandler,
					h = e.mediaPlayerModel,
					m = e.dashMetrics,
					g = (0, f.default)(t).getInstance(),
					_ = e.streamInfo,
					p = void 0,
					E = void 0,
					v = void 0;

				function y() {
					for (var e in v) v[e].reset();
					v = {}
				}

				function T(e) {
					if (e.sender) {
						var t = e.request,
							i = e.response,
							a = t.isInitializationRequest(),
							o = t.mediaInfo.streamInfo;
						if (e.error && (t.mediaType !== r.default.AUDIO && t.mediaType !== r.default.VIDEO && t.mediaType !== r.default.FRAGMENTED_TEXT || n.trigger(l.default.SERVICE_LOCATION_BLACKLIST_ADD, {
								entry: e.request.serviceLocation
							})), i && o) {
							var u = function(e, t, n, r) {
								var i = new s.default;
								return i.streamId = n, i.mediaInfo = t.mediaInfo, i.segmentType = t.type, i.start = t.startTime, i.duration = t.duration, i.end = i.start + i.duration, i.bytes = e, i.index = t.index, i.quality = t.quality, i.representationId = t.representationId, i.endFragment = r, i
							}(i, t, _.id, e.type !== l.default.FRAGMENT_LOADING_PROGRESS);
							n.trigger(a ? l.default.INIT_FRAGMENT_LOADED : l.default.MEDIA_FRAGMENT_LOADED, {
								chunk: u,
								request: t
							}, {
								streamId: o.id,
								mediaType: t.mediaType
							})
						} else E.warn("No " + t.mediaType + " bytes to push or stream is inactive.")
					}
				}
				return p = {
					getStreamId: function() {
						return _.id
					},
					getModel: function(r) {
						var s = v[r];
						return s || (s = (0, i.default)(t).create({
							streamInfo: _,
							type: r,
							dashMetrics: m,
							fragmentLoader: (0, a.default)(t).create({
								dashMetrics: m,
								mediaPlayerModel: h,
								errHandler: c,
								requestModifier: (0, o.default)(t).getInstance(),
								settings: e.settings,
								boxParser: e.boxParser,
								eventBus: n,
								events: l.default,
								errors: d.default,
								dashConstants: e.dashConstants,
								urlUtils: e.urlUtils
							}),
							debug: g,
							eventBus: n,
							events: l.default
						}), v[r] = s), s
					},
					reset: function() {
						n.off(l.default.FRAGMENT_LOADING_COMPLETED, T, this), n.off(l.default.FRAGMENT_LOADING_PROGRESS, T, this), y()
					}
				}, E = g.getLogger(p), y(), n.on(l.default.FRAGMENT_LOADING_COMPLETED, T, p), n.on(l.default.FRAGMENT_LOADING_PROGRESS, T, p), p
			}
			m.__dashjs_factory_name = "FragmentController", t.default = c.default.getClassFactory(m)
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/GapController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = o(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = o(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				i = o(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				a = o(n("./node_modules/dashjs/build/es5/src/core/EventBus.js"));

			function o(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var u = 100,
				l = 30,
				d = .1;

			function c() {
				var e = this.context,
					t = (0, a.default)(e).getInstance(),
					n = void 0,
					r = void 0,
					o = void 0,
					c = void 0,
					f = void 0,
					h = void 0,
					m = void 0,
					g = void 0,
					_ = void 0,
					p = void 0,
					E = void 0;

				function v() {
					E.debug("Stopping the gap controller"), f && (clearInterval(f), f = null),
						function() {
							t.off(i.default.WALLCLOCK_TIME_UPDATED, b, this), t.off(i.default.PLAYBACK_SEEKING, T, this), t.off(i.default.BYTES_APPENDED_END_FRAGMENT, y, n)
						}(), f = null, h = NaN, c = 0, p = null
				}

				function y() {
					f || function() {
						try {
							f || (E.debug("Starting the gap controller"), f = setInterval((function() {
								S() && A(m.getTime())
							}), u))
						} catch (e) {}
					}()
				}

				function T() {
					p && (clearTimeout(p), p = null)
				}

				function b() {
					if (S() && ++c >= l) {
						var e = m.getTime();
						r === e ? A(e, !0) : (r = e, h = NaN), c = 0
					}
				}

				function S() {
					return o.get().streaming.jumpGaps && g.getActiveStreamProcessors().length > 0 && (!m.isSeeking() || g.hasStreamFinishedBuffering(g.getActiveStream())) && !m.isPaused() && !g.getIsStreamSwitchInProgress() && !g.getHasMediaOrIntialisationError()
				}

				function A(e) {
					var n, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = o.get().streaming.smallGapLimit,
						a = o.get().streaming.jumpLargeGaps,
						u = _.getBufferRange(),
						l = NaN,
						c = !1;
					if (n = function(e, t) {
							try {
								if (!e || e.length <= 1 && t > 0) return NaN;
								for (var n = NaN, r = 0; isNaN(n) && r < e.length;) {
									var s = r > 0 ? e.end(r - 1) : 0;
									t < e.start(r) && s - t < d && (n = r), r += 1
								}
								return n
							} catch (i) {
								return null
							}
						}(u, e), !isNaN(n)) {
						var f = u.start(n),
							g = f - e;
						g > 0 && (g <= s || a) && (l = f)
					}
					var v = m.getTimeToStreamEnd();
					if (isNaN(l) && r && isFinite(v) && !isNaN(v) && v < s && (l = parseFloat(m.getStreamEndTime().toFixed(5)), c = !0), l > 0 && h !== l && l > e && !p) {
						var y = l - e;
						if (c) E.warn("Jumping to end of stream because of gap from " + e + " to " + l + ". Gap duration: " + y), t.trigger(i.default.GAP_CAUSED_SEEK_TO_PERIOD_END, {
							seekTime: l,
							duration: y
						});
						else {
							var T = m.getIsDynamic(),
								b = n > 0 ? u.end(n - 1) : e,
								S = T ? 1e3 * y : 0;
							p = window.setTimeout((function() {
								m.seek(l, !0, !0), E.warn("Jumping gap starting at " + b + " and ending at " + l + ". Jumping by: " + y), t.trigger(i.default.GAP_CAUSED_INTERNAL_SEEK, {
									seekTime: l,
									duration: y
								}), p = null
							}), S)
						}
						h = l
					}
				}
				return n = {
					reset: v,
					setConfig: function(e) {
						e && (e.settings && (o = e.settings), e.playbackController && (m = e.playbackController), e.streamController && (g = e.streamController), e.videoModel && (_ = e.videoModel), e.timelineConverter && e.timelineConverter, e.adapter && e.adapter)
					},
					initialize: function() {
						! function() {
							t.on(i.default.WALLCLOCK_TIME_UPDATED, b, this), t.on(i.default.PLAYBACK_SEEKING, T, this), t.on(i.default.BYTES_APPENDED_END_FRAGMENT, y, n)
						}()
					}
				}, E = (0, s.default)(e).getInstance().getLogger(n), v(), n
			}
			c.__dashjs_factory_name = "GapController", t.default = r.default.getSingletonFactory(c)
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/MediaController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = u(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				s = u(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				i = u(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				a = u(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				o = u(n("./node_modules/dashjs/build/es5/src/core/Debug.js"));

			function u(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function l() {
				var e = this.context,
					t = (0, i.default)(e).getInstance(),
					n = void 0,
					a = void 0,
					u = void 0,
					l = void 0,
					d = void 0,
					c = void 0,
					f = [r.default.TRACK_SWITCH_MODE_ALWAYS_REPLACE, r.default.TRACK_SWITCH_MODE_NEVER_REPLACE],
					h = [r.default.TRACK_SELECTION_MODE_HIGHEST_BITRATE, r.default.TRACK_SELECTION_MODE_WIDEST_RANGE];

				function m(e, t) {
					if (!e || !t) return [];
					var n = t.id;
					return u[n] && u[n][e] ? u[n][e].list : []
				}

				function g(e, t) {
					return !e || !t || t && !u[t.id] ? null : u[t.id][e].current
				}

				function _(e, n) {
					if (e && e.streamInfo) {
						var i = e.type,
							a = e.streamInfo,
							o = a.id,
							l = g(i, a);
						if (u[o] && u[o][i] && !b(e, l) && (u[o][i].current = e, !u[o][i].current || n && i === r.default.FRAGMENTED_TEXT || t.trigger(s.default.CURRENT_TRACK_CHANGED, {
								oldMediaInfo: l,
								newMediaInfo: e,
								switchMode: v(i)
							}), !n)) {
							var d = function(e) {
								var t = {
									lang: e.lang,
									viewpoint: e.viewpoint,
									roles: e.roles,
									accessibility: e.accessibility,
									audioChannelConfiguration: e.audioChannelConfiguration
								};
								return t.lang || t.viewpoint || t.role && t.role.length > 0 || t.accessibility && t.accessibility.length > 0 || t.audioChannelConfiguration && t.audioChannelConfiguration.length > 0 ? t : null
							}(e);
							if (!d || !u[o][i].storeLastSettings) return;
							d.roles && (d.role = d.roles[0], delete d.roles), d.accessibility && (d.accessibility = d.accessibility[0]), d.audioChannelConfiguration && (d.audioChannelConfiguration = d.audioChannelConfiguration[0]), c.setSavedMediaSettings(i, d)
						}
					}
				}

				function p(e, t) {
					e && t && (d[e] = t)
				}

				function E(e) {
					return e ? d[e] : null
				}

				function v(e) {
					return l.get().streaming.trackSwitchMode[e]
				}

				function y() {
					return l.get().streaming.selectionModeForInitialTrack
				}

				function T(e) {
					return e === r.default.AUDIO || e === r.default.VIDEO || e === r.default.TEXT || e === r.default.FRAGMENTED_TEXT || e === r.default.IMAGE
				}

				function b(e, t) {
					if (!e && !t) return !0;
					if (!e || !t) return !1;
					var n = e.id === t.id,
						r = e.viewpoint === t.viewpoint,
						s = e.lang === t.lang,
						i = e.roles.toString() === t.roles.toString(),
						a = e.accessibility.toString() === t.accessibility.toString(),
						o = e.audioChannelConfiguration.toString() === t.audioChannelConfiguration.toString();
					return n && r && s && i && a && o
				}

				function S() {
					u = {}, d = {
						audio: null,
						video: null,
						fragmentedText: null
					}
				}

				function A(e, t) {
					var n = !e.lang || t.lang.match(e.lang),
						r = !e.viewpoint || e.viewpoint === t.viewpoint,
						s = !e.role || !!t.roles.filter((function(t) {
							return t === e.role
						}))[0],
						i = !e.accessibility || !!t.accessibility.filter((function(t) {
							return t === e.accessibility
						}))[0],
						a = !e.audioChannelConfiguration || !!t.audioChannelConfiguration.filter((function(t) {
							return t === e.audioChannelConfiguration
						}))[0];
					return n && r && s && i && a
				}

				function I(e, t) {
					if (e === r.default.FRAGMENTED_TEXT) return t[0];
					var n = y(),
						s = [],
						i = function(e) {
							var t = 0,
								n = [],
								r = void 0;
							return e.forEach((function(e) {
								(r = Math.max.apply(Math, e.bitrateList.map((function(e) {
									return e.bandwidth
								})))) > t ? (t = r, n = [e]) : r === t && n.push(e)
							})), n
						},
						o = function(e) {
							var t = 0,
								n = [],
								r = void 0;
							return e.forEach((function(e) {
								(r = e.representationCount) > t ? (t = r, n = [e]) : r === t && n.push(e)
							})), n
						};
					switch (n) {
						case r.default.TRACK_SELECTION_MODE_HIGHEST_BITRATE:
							(s = i(t)).length > 1 && (s = o(s));
							break;
						case r.default.TRACK_SELECTION_MODE_WIDEST_RANGE:
							(s = o(t)).length > 1 && (s = i(t));
							break;
						default:
							a.warn("Track selection mode is not supported: " + n)
					}
					return s[0]
				}
				return n = {
					checkInitialMediaSettingsForType: function(e, t) {
						var n = E(e),
							r = m(e, t),
							s = [];
						n || p(e, n = c.getSavedMediaSettings(e)), r && 0 !== r.length && (n && r.forEach((function(e) {
							A(n, e) && s.push(e)
						})), 0 === s.length ? _(I(e, r), !0) : s.length > 1 ? _(I(e, s)) : _(s[0]))
					},
					addTrack: function(e) {
						if (e) {
							var t = e.type;
							if (T(t)) {
								var n = e.streamInfo.id;
								u[n] || (u[n] = {
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
									},
									image: {
										list: [],
										storeLastSettings: !0,
										current: null
									}
								});
								for (var r = u[n][t].list, s = 0, i = r.length; s < i; ++s)
									if (b(r[s], e)) return;
								r.push(e);
								var a = E(t);
								a && A(a, e) && !g(t, e.streamInfo) && _(e)
							}
						}
					},
					getTracksFor: m,
					getCurrentTrackFor: g,
					isCurrentTrack: function(e) {
						if (!e) return !1;
						var t = e.type,
							n = e.streamInfo.id;
						return u[n] && u[n][t] && b(u[n][t].current, e)
					},
					setTrack: _,
					setInitialSettings: p,
					getInitialSettings: E,
					setSwitchMode: function(e, t) {
						if (a.warn("deprecated: Please use updateSettings({streaming: { trackSwitchMode: mode } }) instead"), -1 !== f.indexOf(t)) {
							var n = {};
							n[e] = t, l.update({
								streaming: {
									trackSwitchMode: n
								}
							})
						} else a.warn("Track switch mode is not supported: " + t)
					},
					getSwitchMode: v,
					setSelectionModeForInitialTrack: function(e) {
						a.warn("deprecated: Please use updateSettings({streaming: { selectionModeForInitialTrack: mode } }) instead"), -1 !== h.indexOf(e) ? l.update({
							streaming: {
								selectionModeForInitialTrack: e
							}
						}) : a.warn("Track selection mode is not supported: " + e)
					},
					getSelectionModeForInitialTrack: y,
					isMultiTrackSupportedByType: T,
					isTracksEqual: b,
					matchSettings: A,
					saveTextSettingsDisabled: function() {
						c.setSavedMediaSettings(r.default.FRAGMENTED_TEXT, null)
					},
					setConfig: function(e) {
						e && (e.domStorage && (c = e.domStorage), e.settings && (l = e.settings))
					},
					reset: S
				}, a = (0, o.default)(e).getInstance().getLogger(n), S(), n
			}
			l.__dashjs_factory_name = "MediaController";
			var d = a.default.getSingletonFactory(l);
			a.default.updateSingletonFactory(l.__dashjs_factory_name, d), t.default = d
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/MediaSourceController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = i(n("./node_modules/dashjs/build/es5/src/core/Debug.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function a() {
				var e = void 0,
					t = void 0,
					n = this.context;
				return e = {
					createMediaSource: function() {
						var e = "WebKitMediaSource" in window;
						return "MediaSource" in window ? new MediaSource : e ? new WebKitMediaSource : null
					},
					attachMediaSource: function(e, t) {
						var n = window.URL.createObjectURL(e);
						return t.setSource(n), n
					},
					detachMediaSource: function(e) {
						e.setSource(null)
					},
					setDuration: function(e, t) {
						return e.duration != t && (e.duration = t), e.duration
					},
					setSeekable: function(e, t, n) {
						e && "function" == typeof e.setLiveSeekableRange && "function" == typeof e.clearLiveSeekableRange && "open" === e.readyState && t >= 0 && t < n && (e.clearLiveSeekableRange(), e.setLiveSeekableRange(t, n))
					},
					signalEndOfStream: function(e) {
						if (e && "open" === e.readyState) {
							for (var n = e.sourceBuffers, r = 0; r < n.length; r++) {
								if (n[r].updating) return;
								if (0 === n[r].buffered.length) return
							}
							t.info("call to mediaSource endOfStream"), e.endOfStream()
						}
					}
				}, t = (0, s.default)(n).getInstance().getLogger(e), e
			}
			a.__dashjs_factory_name = "MediaSourceController", t.default = r.default.getSingletonFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/PlaybackController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = l(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				s = l(n("./node_modules/dashjs/build/es5/src/streaming/constants/MetricsConstants.js")),
				i = l(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				a = l(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				o = l(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				u = l(n("./node_modules/dashjs/build/es5/src/core/Debug.js"));

			function l(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var d = 500;

			function c() {
				var e = this.context,
					t = (0, i.default)(e).getInstance(),
					n = void 0,
					o = void 0,
					l = void 0,
					c = void 0,
					f = void 0,
					h = void 0,
					m = void 0,
					g = void 0,
					_ = void 0,
					p = void 0,
					E = void 0,
					v = void 0,
					y = void 0,
					T = void 0,
					b = void 0,
					S = void 0,
					A = void 0,
					I = void 0,
					R = void 0,
					M = void 0,
					C = void 0,
					D = void 0,
					N = void 0;

				function O(e) {
					if (!g || !isNaN(_)) {
						var n = _;
						if (isNaN(n))
							if (y) {
								n = e.liveStartTime;
								var r = c.getCurrentDVRInfo(),
									s = r ? r.range : null;
								if (s) {
									var i = V(!0);
									isNaN(i) || (o.info("Start time from URI parameters: " + i), n = Math.max(Math.min(n, i), s.start))
								}
							} else {
								n = v.start;
								var u = V(!1);
								!isNaN(u) && u < n + v.duration && (o.info("Start time from URI parameters: " + u), n = Math.max(n, u))
							} isNaN(n) || n === h.getTime() || (t.trigger(a.default.PLAYBACK_SEEKING, {
							seekTime: n
						}), U(n, !1, !0))
					}
				}

				function j() {
					return parseFloat((w() - B()).toFixed(5))
				}

				function w() {
					return v.start + v.duration
				}

				function P() {
					v && h && h.getElement() ? h.play() : b = !0
				}

				function L() {
					return v && h ? h.isPaused() : null
				}

				function F() {
					v && h && h.pause()
				}

				function x() {
					return v && h ? h.isSeeking() : null
				}

				function U(e, n, r) {
					v && h && (e !== (isNaN(I) ? h.getTime() : I) && (!0 === r ? (h.removeEventListener("seeking", ne), o.info("Requesting internal seek to time: " + e), h.setCurrentTime(e, n)) : (I = e, t.trigger(a.default.PLAYBACK_SEEK_ASKED), o.info("Requesting seek to time: " + e), h.setCurrentTime(e, n))))
				}

				function B() {
					return v && h ? h.getTime() : null
				}

				function k() {
					var e = B();
					if (y && !isNaN(A)) {
						var t = A / 1e3;
						e > t && (e -= t)
					}
					return e
				}

				function G() {
					return v && h ? h.getPlaybackRate() : null
				}

				function q() {
					return v && h ? h.getEnded() : null
				}

				function H() {
					return y
				}

				function K() {
					if (!y || isNaN(A)) return NaN;
					var e = k();
					if (isNaN(e) || 0 === e) return 0;
					var t = (new Date).getTime() + 1e3 * m.getClientTimeOffset();
					return Math.max(((t - A - 1e3 * e) / 1e3).toFixed(3), 0)
				}

				function Y() {
					b = !1, g = !1, _ = NaN, E = 0, A = 0, I = NaN, h && (t.off(a.default.STREAM_INITIALIZED, O, this), t.off(a.default.DATA_UPDATE_COMPLETED, Q, this), t.off(a.default.BUFFER_LEVEL_STATE_CHANGED, pe, this), t.off(a.default.LOADING_PROGRESS, _e, this), t.off(a.default.PLAYBACK_PROGRESS, ce, this), t.off(a.default.PLAYBACK_TIME_UPDATED, ce, this), t.off(a.default.PLAYBACK_ENDED, le, this), t.off(a.default.STREAM_INITIALIZING, ve, this), W(), h.removeEventListener("canplay", J), h.removeEventListener("play", Z), h.removeEventListener("waiting", $), h.removeEventListener("playing", ee), h.removeEventListener("pause", te), h.removeEventListener("error", de), h.removeEventListener("seeking", ne), h.removeEventListener("seeked", re), h.removeEventListener("timeupdate", se), h.removeEventListener("progress", ie), h.removeEventListener("ratechange", ae), h.removeEventListener("loadedmetadata", oe), h.removeEventListener("stalled", Ee), h.removeEventListener("ended", ue)), p = null, h = null, v = null, y = null
				}

				function V(e) {
					var t = D.getURIFragmentData();
					if (!t || !t.t) return NaN;
					var n = l.getStreams()[0].getStreamInfo().start;
					t.t = t.t.split(",")[0];
					var r = -1 !== t.t.indexOf("posix:") ? "now" === t.t.substring(6) ? Date.now() / 1e3 : parseInt(t.t.substring(6)) : NaN;
					return e && !isNaN(r) ? r - A / 1e3 : parseInt(t.t) + n
				}

				function z() {
					if (null === p) {
						p = setInterval((function() {
							var e;
							t.trigger(a.default.WALLCLOCK_TIME_UPDATED, {
								isDynamic: y,
								time: new Date
							}), H() && L() && (e = Date.now(), (!S || e > S + d) && (S = e, se()))
						}), N.get().streaming.wallclockTimeUpdateInterval)
					}
				}

				function W() {
					clearInterval(p), p = null
				}

				function X() {
					if (!L() && y && 0 !== h.getReadyState()) {
						var e = k(),
							t = function(e) {
								var t = c.getCurrentDVRInfo(),
									n = t ? t.range : null;
								return n ? (o.debug("Checking DVR window for at " + e + " with DVR window range " + n.start + " - " + n.end), e > n.end ? Math.max(n.end - E, n.start) : e > 0 && e + .25 < n.start && Math.abs(e - n.start) < 31536e4 ? n.start : e) : NaN
							}(e);
						!isNaN(t) && t !== e && (o.debug("UpdateCurrentTime: Seek to actual time: " + t + " from currentTime: " + e), U(t))
					}
				}

				function Q(e) {
					if (!e.error) {
						var t = f.convertDataToRepresentationInfo(e.currentRepresentation),
							n = t ? t.mediaInfo.streamInfo : null;
						null !== n && v.id === n.id && (v = n, X())
					}
				}

				function J() {
					t.trigger(a.default.CAN_PLAY)
				}

				function Z() {
					o.info("Native video element event: play"), X(), z(), t.trigger(a.default.PLAYBACK_STARTED, {
						startTime: B()
					})
				}

				function $() {
					o.info("Native video element event: waiting"), t.trigger(a.default.PLAYBACK_WAITING, {
						playingTime: B()
					})
				}

				function ee() {
					o.info("Native video element event: playing"), t.trigger(a.default.PLAYBACK_PLAYING, {
						playingTime: B()
					})
				}

				function te() {
					o.info("Native video element event: pause"), t.trigger(a.default.PLAYBACK_PAUSED, {
						ended: q()
					})
				}

				function ne() {
					var e = B();
					isNaN(I) || I === e || (e = I), I = NaN, o.info("Seeking to: " + e), z(), t.trigger(a.default.PLAYBACK_SEEKING, {
						seekTime: e
					})
				}

				function re() {
					o.info("Native video element event: seeked"), t.trigger(a.default.PLAYBACK_SEEKED), h.addEventListener("seeking", ne)
				}

				function se() {
					v && t.trigger(a.default.PLAYBACK_TIME_UPDATED, {
						timeToEnd: j(),
						time: B()
					})
				}

				function ie() {
					t.trigger(a.default.PLAYBACK_PROGRESS)
				}

				function ae() {
					var e = G();
					o.info("Native video element event: ratechange: ", e), t.trigger(a.default.PLAYBACK_RATE_CHANGED, {
						playbackRate: e
					})
				}

				function oe() {
					o.info("Native video element event: loadedmetadata"), t.trigger(a.default.PLAYBACK_METADATA_LOADED), z()
				}

				function ue() {
					o.info("Native video element event: ended"), F(), W(), t.trigger(a.default.PLAYBACK_ENDED, {
						isLast: l.getActiveStreamInfo().isLast
					})
				}

				function le(e) {
					if (p && e.isLast) {
						o.info("onPlaybackEnded -- PLAYBACK_ENDED but native video element didn't fire ended");
						var t = e.seekTime ? e.seekTime : w();
						h.setCurrentTime(t), F(), W()
					}
				}

				function de(e) {
					var n = e.target || e.srcElement;
					t.trigger(a.default.PLAYBACK_ERROR, {
						error: n.error
					})
				}

				function ce() {
					y && fe() && N.get().streaming.liveCatchup.playbackRate > 0 && !L() && !x() && (function() {
						try {
							if (fe() && N.get().streaming.liveCatchup.playbackRate > 0 && B() > 0) {
								var e = me(),
									t = K(),
									n = T.getLiveDelay(),
									s = T.getLiveCatchupLatencyThreshold(),
									i = N.get().streaming.liveCatchup.minDrift;
								if (e === r.default.LIVE_CATCHUP_MODE_LOLP) {
									var a = he(),
										o = N.get().streaming.liveCatchup.playbackBufferMin;
									return function(e, t, n, r, s, i) {
										try {
											var a = Math.abs(e - t);
											return (isNaN(i) || e <= i) && (a > n || r < s)
										} catch (o) {
											return !1
										}
									}(t, n, i, a, o, s)
								}
								return function(e, t, n, r) {
									try {
										return Math.abs(e - t) > r && (isNaN(n) || e <= n)
									} catch (s) {
										return !1
									}
								}(t, n, s, i)
							}
						} catch (u) {
							return !1
						}
					}() ? function() {
						if (h) {
							var e = void 0,
								t = h.getPlaybackRate(),
								n = N.get().streaming.liveCatchup.playbackRate,
								s = K(),
								i = T.getLiveDelay(),
								a = he();
							if (me() === r.default.LIVE_CATCHUP_MODE_LOLP) {
								N.get().streaming.liveCatchup.minDrift;
								var u = N.get().streaming.liveCatchup.playbackBufferMin;
								e = function(e, t, n, r, s, i, a) {
									var u = e,
										l = void 0;
									if (i < s) {
										var d = 5 * (i - s),
											c = 2 * u / (1 + Math.pow(Math.E, -d));
										l = 1 - u + c, o.debug("[LoL+ playback control_buffer-based] bufferLevel: " + i + ", newRate: " + l)
									} else {
										if (Math.abs(t - n) <= .02 * n) l = 1;
										else {
											var f = 5 * (t - n),
												h = 2 * u / (1 + Math.pow(Math.E, -f));
											l = 1 - u + h
										}
										o.debug("[LoL+ playback control_latency-based] latency: " + t + ", newRate: " + l)
									}
									M && i > n / 2 && (M = !1);
									Math.abs(a - l) <= C && (l = null);
									return {
										newRate: l
									}
								}(n, s, i, 0, u, a, t)
							} else e = function(e, t, n, r, s) {
								var i = e,
									a = t - n,
									o = 5 * a,
									u = 2 * i / (1 + Math.pow(Math.E, -o)),
									l = 1 - i + u;
								M && (r > n / 2 ? M = !1 : a > 0 && (l = 1));
								Math.abs(s - l) <= C && (l = null);
								return {
									newRate: l
								}
							}(n, s, i, a, t);
							var l = e.newRate;
							l && h.setPlaybackRate(l);
							var d = s - i;
							N.get().streaming.liveCatchup.maxDrift > 0 && !R && d > N.get().streaming.liveCatchup.maxDrift ? (o.info("Low Latency catchup mechanism. Latency too high, doing a seek to live point"), R = !0, U(((f = c.getCurrentDVRInfo()) ? f.range : null).end - T.getLiveDelay(), !0, !1)) : R = !1
						}
						var f
					}() : ge())
				}

				function fe() {
					return N.get().streaming.liveCatchup.enabled || N.get().streaming.lowLatencyEnabled
				}

				function he() {
					var e = null;
					return l.getActiveStreamProcessors().forEach((function(t) {
						var n = t.getBufferLevel();
						e = null === e ? n : Math.min(e, n)
					})), e
				}

				function me() {
					var e = N.get().streaming.liveCatchup.playbackBufferMin;
					return N.get().streaming.liveCatchup.mode !== r.default.LIVE_CATCHUP_MODE_LOLP || null === e || isNaN(e) ? r.default.LIVE_CATCHUP_MODE_DEFAULT : r.default.LIVE_CATCHUP_MODE_LOLP
				}

				function ge() {
					h && h.setPlaybackRate(1)
				}

				function _e(e) {
					if (!1 === e.stream && N.get().streaming.lowLatencyEnabled && !isNaN(e.request.duration)) {
						var t = 1.2 * e.request.duration;
						if (t > T.getLiveDelay()) {
							o.warn("Browser does not support fetch API with StreamReader. Increasing live delay to be 20% higher than segment duration:", t.toFixed(2));
							var n = {
								streaming: {
									liveDelay: t
								}
							};
							N.update(n)
						}
					}
				}

				function pe(e) {
					e.streamId === v.id && (fe() ? e.state !== s.default.BUFFER_EMPTY || x() || M || (M = !0, ge()) : h.setStallState(e.mediaType, e.state === s.default.BUFFER_EMPTY))
				}

				function Ee(e) {
					t.trigger(a.default.PLAYBACK_STALLED, {
						e
					})
				}

				function ve(e) {
					! function(e, t) {
						if (e && e.manifestInfo && e.manifestInfo.serviceDescriptions) {
							for (var n = void 0, s = 0; s < e.manifestInfo.serviceDescriptions.length; s++) {
								var i = e.manifestInfo.serviceDescriptions[s];
								if (i.schemeIdUri === r.default.SERVICE_DESCRIPTION_LL_SCHEME) {
									n = i;
									break
								}
							}
							n && t && t.supplementalProperties && "true" === t.supplementalProperties[r.default.SUPPLEMENTAL_PROPERTY_LL_SCHEME] && (n.latency && n.latency.target > 0 && (o.debug("Apply LL properties coming from service description. Target Latency (ms):", n.latency.target), N.update({
								streaming: {
									lowLatencyEnabled: !0,
									liveDelay: n.latency.target / 1e3,
									liveCatchup: {
										minDrift: n.latency.max > n.latency.target ? (n.latency.max - n.latency.target) / 1e3 : void 0
									}
								}
							})), n.playbackRate && n.playbackRate.max > 1 && (o.debug("Apply LL properties coming from service description. Max PlaybackRate:", n.playbackRate.max), N.update({
								streaming: {
									lowLatencyEnabled: !0,
									liveCatchup: {
										playbackRate: n.playbackRate.max - 1
									}
								}
							})))
						}
					}(e.streamInfo, e.mediaInfo)
				}
				return n = {
					initialize: function(e, n, r) {
						v = e, h.addEventListener("canplay", J), h.addEventListener("play", Z), h.addEventListener("waiting", $), h.addEventListener("playing", ee), h.addEventListener("pause", te), h.addEventListener("error", de), h.addEventListener("seeking", ne), h.addEventListener("seeked", re), h.addEventListener("timeupdate", se), h.addEventListener("progress", ie), h.addEventListener("ratechange", ae), h.addEventListener("loadedmetadata", oe), h.addEventListener("stalled", Ee), h.addEventListener("ended", ue), y = v.manifestInfo.isDynamic, R = !1, M = !1, g = !0 === n, _ = r;
						var s = "undefined" != typeof navigator ? navigator.userAgent.toLowerCase() : "",
							o = /safari/.test(s) && !/chrome/.test(s);
						C = o ? .25 : .02, t.on(a.default.STREAM_INITIALIZED, O, this), t.on(a.default.DATA_UPDATE_COMPLETED, Q, this), t.on(a.default.LOADING_PROGRESS, _e, this), t.on(a.default.BUFFER_LEVEL_STATE_CHANGED, pe, this), t.on(a.default.PLAYBACK_PROGRESS, ce, this), t.on(a.default.PLAYBACK_TIME_UPDATED, ce, this), t.on(a.default.PLAYBACK_ENDED, le, this, {
							priority: i.default.EVENT_PRIORITY_HIGH
						}), t.on(a.default.STREAM_INITIALIZING, ve, this), b && (b = !1, P())
					},
					setConfig: function(e) {
						e && (e.streamController && (l = e.streamController), e.dashMetrics && (c = e.dashMetrics), e.mediaPlayerModel && (T = e.mediaPlayerModel), e.adapter && (f = e.adapter), e.videoModel && (h = e.videoModel), e.timelineConverter && (m = e.timelineConverter), e.uriFragmentModel && (D = e.uriFragmentModel), e.settings && (N = e.settings))
					},
					getStartTimeFromUriParameters: V,
					getTimeToStreamEnd: j,
					getTime: B,
					getNormalizedTime: k,
					getPlaybackRate: G,
					getPlayedRanges: function() {
						return v && h ? h.getPlayedRanges() : null
					},
					getEnded: q,
					getIsDynamic: H,
					getStreamController: function() {
						return l
					},
					computeAndSetLiveDelay: function(e, t, n) {
						var r, s = void 0,
							i = void 0,
							a = !isNaN(e) && isFinite(e) ? e : NaN,
							o = f.getSuggestedPresentationDelay();
						if (s = N.get().streaming.lowLatencyEnabled ? 0 : T.getLiveDelay() ? T.getLiveDelay() : null === N.get().streaming.liveDelayFragmentCount || isNaN(N.get().streaming.liveDelayFragmentCount) || isNaN(a) ? !0 === N.get().streaming.useSuggestedPresentationDelay && null !== o && !isNaN(o) && o > 0 ? o : isNaN(a) ? isNaN(n) ? 4 * v.manifestInfo.minBufferTime : 4 * n : 4 * a : a * N.get().streaming.liveDelayFragmentCount, null !== (r = f.getAvailabilityStartTime()) && (A = r), t > 0) {
							var u = Math.max(t - 10, t / 2);
							i = Math.min(s, u)
						} else i = s;
						return E = i, i
					},
					getLiveDelay: function() {
						return E
					},
					setLiveDelay: function(e) {
						arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && e < E || (E = e)
					},
					getCurrentLiveLatency: K,
					play: P,
					isPaused: L,
					pause: F,
					isSeeking: x,
					getStreamEndTime: w,
					seek: U,
					reset: Y
				}, o = (0, u.default)(e).getInstance().getLogger(n), Y(), n
			}
			c.__dashjs_factory_name = "PlaybackController", t.default = o.default.getSingletonFactory(c)
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/ScheduleController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = c(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				s = c(n("./node_modules/dashjs/build/es5/src/streaming/constants/MetricsConstants.js")),
				i = c(n("./node_modules/dashjs/build/es5/src/streaming/rules/scheduling/BufferLevelRule.js")),
				a = c(n("./node_modules/dashjs/build/es5/src/streaming/models/FragmentModel.js")),
				o = c(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				u = c(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				l = c(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				d = c(n("./node_modules/dashjs/build/es5/src/core/Debug.js"));

			function c(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function f(e) {
				e = e || {};
				var t = this.context,
					n = (0, o.default)(t).getInstance(),
					l = e.adapter,
					c = e.dashMetrics,
					f = e.mediaPlayerModel,
					h = e.fragmentModel,
					m = e.abrController,
					g = e.playbackController,
					_ = e.textController,
					p = e.streamInfo,
					E = e.type,
					v = e.mimeType,
					y = e.mediaController,
					T = e.bufferController,
					b = e.settings,
					S = void 0,
					A = void 0,
					I = void 0,
					R = void 0,
					M = void 0,
					C = void 0,
					D = void 0,
					N = void 0,
					O = void 0,
					j = void 0,
					w = void 0,
					P = void 0,
					L = void 0,
					F = void 0,
					x = void 0,
					U = void 0,
					B = void 0,
					k = void 0,
					G = void 0,
					q = void 0;

				function H() {
					return !1 === M
				}

				function K() {
					H() || I && !T.getIsBufferingCompleted() && (A.debug("Schedule Controller starts"), M = !1, c.createPlaylistTraceMetrics(I.id, 1e3 * g.getTime(), g.getPlaybackRate()), R && (R = !1), z(0))
				}

				function Y() {
					M || (A.debug("Schedule Controller stops"), A.debug(E + " Schedule Controller stops"), M = !0, clearTimeout(N))
				}

				function V() {
					if (M || C || g.isPaused() && !b.get().streaming.scheduleWhilePaused || (E === r.default.FRAGMENTED_TEXT || E === r.default.TEXT) && !_.isTextEnabled() || T.getIsBufferingCompleted()) Y();
					else {
						! function() {
							var e = g.getTime(),
								t = 1.5;
							if (isNaN(I.fragmentDuration)) {
								var n = c.getCurrentSchedulingInfo(I.mediaInfo.type);
								t = n ? 1.5 * n.duration : 1.5
							}
							var i = h.getRequests({
								state: a.default.FRAGMENT_MODEL_EXECUTED,
								time: e + t,
								threshold: 0
							})[0];
							if (i && -1 === x.indexOf(i) && !l.getIsTextTrack(v)) {
								var o = b.get().streaming.fastSwitchEnabled,
									u = T.getBufferLevel(),
									d = m.getAbandonmentStateFor(E),
									f = !y.isCurrentTrack(i.mediaInfo) && y.getSwitchMode(i.mediaInfo.type) === r.default.TRACK_SWITCH_MODE_NEVER_REPLACE,
									_ = i.quality < I.quality;
								o && (f || _) && u >= t && d !== s.default.ABANDON_LOAD ? (X(i), q = !0, A.debug("Reloading outdated fragment at index: ", i.index)) : i.quality > I.quality && !B && de(g.getTime() + u)
							}
						}();
						var e = x.length > 0;
						if (B || isNaN(F) || U || e || function(e, t) {
								L[t] = L[t] || {};
								var n = m.getTopQualityIndexFor(e, t);
								return L[t][e] != n && (A.info("Top quality " + e + " index has changed from " + L[t][e] + " to " + n), L[t][e] = n, !0)
							}(E, p.id) || w.execute(E, I, j)) {
							W(!0), !e && G && m.checkPlaybackQuality(E),
								function() {
									if (I.quality === F && !U || B) {
										var e = x.shift();
										e && e.isInitializationRequest() ? (n.trigger(u.default.INIT_FRAGMENT_NEEDED, {
											representationId: e.representationId,
											sender: S
										}, {
											streamId: p.id,
											mediaType: E
										}), G = !1) : (n.trigger(u.default.MEDIA_FRAGMENT_NEEDED, {
											seekTarget: O,
											replacement: e
										}, {
											streamId: p.id,
											mediaType: E
										}), G = !0)
									} else U ? (A.debug("Switch track for " + E + ", representation id = " + I.id), (B = y.getSwitchMode(E) === r.default.TRACK_SWITCH_MODE_ALWAYS_REPLACE) && T.replaceBuffer && T.replaceBuffer(), U = !1) : A.debug("Quality has changed, get init request for representationid = " + I.id), n.trigger(u.default.INIT_FRAGMENT_NEEDED, {
										representationId: I.id,
										sender: S
									}, {
										streamId: p.id,
										mediaType: E
									}), F = I.quality, G = !1
								}()
						} else z(500)
					}
				}

				function z(e) {
					clearTimeout(N), N = setTimeout(V, e)
				}

				function W(e) {
					C !== e ? C = e : A.debug("isFragmentProcessingInProgress is already equal to", e)
				}

				function X(e) {
					x.push(e)
				}

				function Q(e) {
					if (g && h) {
						var t = h.getRequests({
							state: a.default.FRAGMENT_MODEL_EXECUTED,
							time: g.getTime(),
							threshold: 0
						})[0];
						t && g.getTime() >= t.startTime && ((!P.mediaInfo || t.mediaInfo.type === P.mediaInfo.type && t.mediaInfo.id !== P.mediaInfo.id) && e && n.trigger(u.default.TRACK_CHANGE_RENDERED, {
							mediaType: E,
							oldMediaInfo: P.mediaInfo,
							newMediaInfo: t.mediaInfo
						}), t.quality === P.quality && t.adaptationIndex === P.adaptationIndex || !e || n.trigger(u.default.QUALITY_CHANGE_RENDERED, {
							mediaType: E,
							oldQuality: P.quality,
							newQuality: t.quality
						}), P = {
							mediaInfo: t.mediaInfo,
							quality: t.quality,
							adaptationIndex: t.adaptationIndex
						})
					}
				}

				function J() {
					Y(), W(!1), A.info("Stream " + p.id + " is complete")
				}

				function Z(e) {
					e.request.mediaInfo.streamInfo.id === p.id && e.request.mediaType === E && (A.info("OnFragmentLoadingCompleted - Url:", e.request ? e.request.url : "undefined", e.request.range ? ", Range:" + e.request.range : ""), l.getIsTextTrack(v) && W(!1), e.error && e.request.serviceLocation && !M && (X(e.request), W(!1), z(0)), B && (k = e.request))
				}

				function $() {
					Q(!0)
				}

				function ee(e) {
					if (B && !isNaN(e.startTime) && (B = !1, h.addExecutedRequest(k)), W(!1), q && !isNaN(e.startTime)) {
						var t = g.getTime(),
							n = e.startTime + I.fragmentDuration,
							r = 1.5 * I.fragmentDuration;
						z(t + r >= n ? 0 : 1e3 * (n - (t + r))), q = !1
					} else z(0)
				}

				function te(e) {
					A.info("onFragmentLoadingAbandoned request: " + e.request.url + " has been aborted"), g.isSeeking() || U || (A.info("onFragmentLoadingAbandoned request: " + e.request.url + " has to be downloaded again, origin is not seeking process or switch track call"), X(e.request)), W(!1), z(0)
				}

				function ne() {}

				function re() {
					Y()
				}

				function se(e) {
					B && b.get().streaming.flushBufferAtTrackSwitch && g.seek(g.getTime() + .001, !1, !0), e.hasEnoughSpaceToAppend && e.quotaExceeded && K()
				}

				function ie() {
					Y(), W(!1)
				}

				function ae() {
					h.abortRequests(), Y()
				}

				function oe() {
					!M && b.get().streaming.scheduleWhilePaused || K()
				}

				function ue(e) {
					de(e.seekTime), ce(0), M && K();
					var t = I.DVRWindow && g ? I.DVRWindow.end - g.getTime() : NaN;
					c.updateManifestUpdateInfo({
						latency: t
					}), C ? h.abortRequests() : z(0)
				}

				function le(e) {
					c.updatePlayListTraceMetrics({
						playbackspeed: e.playbackRate.toString()
					})
				}

				function de(e) {
					O = e
				}

				function ce(e) {
					D = e
				}

				function fe() {
					G = !0, C = !1, D = 0, O = NaN, R = !0, F = NaN, P = {
						mediaInfo: void 0,
						quality: NaN,
						adaptationIndex: NaN
					}, L = {}, x = [], M = !0, U = !1, B = !1, k = null, q = !1
				}
				return S = {
					initialize: function(e) {
						j = e, w = (0, i.default)(t).create({
							abrController: m,
							dashMetrics: c,
							mediaPlayerModel: f,
							textController: _,
							settings: b
						}), n.on(u.default.DATA_UPDATE_STARTED, ne, this), n.on(u.default.FRAGMENT_LOADING_COMPLETED, Z, this), n.on(u.default.STREAM_COMPLETED, J, this), n.on(u.default.BUFFER_CLEARED, se, this), n.on(u.default.BYTES_APPENDED_END_FRAGMENT, ee, this), n.on(u.default.QUOTA_EXCEEDED, ie, this), n.on(u.default.PLAYBACK_SEEKING, ue, this), n.on(u.default.PLAYBACK_STARTED, oe, this), n.on(u.default.PLAYBACK_RATE_CHANGED, le, this), n.on(u.default.PLAYBACK_TIME_UPDATED, $, this), n.on(u.default.URL_RESOLUTION_FAILED, ae, this), n.on(u.default.FRAGMENT_LOADING_ABANDONED, te, this), n.on(u.default.BUFFERING_COMPLETED, re, this)
					},
					getType: function() {
						return E
					},
					getStreamId: function() {
						return p.id
					},
					setCurrentRepresentation: function(e) {
						I = e
					},
					setSeekTarget: de,
					setTimeToLoadDelay: ce,
					getTimeToLoadDelay: function() {
						return D
					},
					switchTrackAsked: function() {
						U = !0
					},
					isStarted: H,
					start: K,
					stop: Y,
					reset: function() {
						n.off(u.default.DATA_UPDATE_STARTED, ne, this), n.off(u.default.FRAGMENT_LOADING_COMPLETED, Z, this), n.off(u.default.STREAM_COMPLETED, J, this), n.off(u.default.BUFFER_CLEARED, se, this), n.off(u.default.BYTES_APPENDED_END_FRAGMENT, ee, this), n.off(u.default.QUOTA_EXCEEDED, ie, this), n.off(u.default.PLAYBACK_SEEKING, ue, this), n.off(u.default.PLAYBACK_STARTED, oe, this), n.off(u.default.PLAYBACK_RATE_CHANGED, le, this), n.off(u.default.PLAYBACK_TIME_UPDATED, $, this), n.off(u.default.URL_RESOLUTION_FAILED, ae, this), n.off(u.default.FRAGMENT_LOADING_ABANDONED, te, this), n.off(u.default.BUFFERING_COMPLETED, re, this), Y(), Q(!1), fe()
					},
					getBufferTarget: function() {
						return w.getBufferTarget(E, I, j)
					},
					processInitRequest: function(e) {
						e && (W(!0), h.executeRequest(e))
					},
					processMediaRequest: function(e) {
						e ? (A.debug("Next fragment request url is " + e.url), h.executeRequest(e)) : (g.getIsDynamic() && A.debug("Next fragment seems to be at the bleeding live edge and is not available yet. Rescheduling."), W(!1), z(b.get().streaming.lowLatencyEnabled ? 100 : 500))
					},
					getPlaybackController: function() {
						return g
					}
				}, A = (0, d.default)(t).getInstance().getLogger(S), fe(), S
			}
			f.__dashjs_factory_name = "ScheduleController", t.default = l.default.getClassFactory(f)
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/StreamController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = y(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				s = y(n("./node_modules/dashjs/build/es5/src/streaming/constants/MetricsConstants.js")),
				i = y(n("./node_modules/dashjs/build/es5/src/streaming/Stream.js")),
				a = y(n("./node_modules/dashjs/build/es5/src/streaming/ManifestUpdater.js")),
				o = y(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				u = y(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				l = y(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				d = n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/PlayList.js"),
				c = y(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				f = y(n("./node_modules/dashjs/build/es5/src/streaming/utils/InitCache.js")),
				h = y(n("./node_modules/dashjs/build/es5/src/streaming/utils/URLUtils.js")),
				m = y(n("./node_modules/dashjs/build/es5/src/streaming/MediaPlayerEvents.js")),
				g = y(n("./node_modules/dashjs/build/es5/src/streaming/controllers/TimeSyncController.js")),
				_ = y(n("./node_modules/dashjs/build/es5/src/streaming/controllers/MediaSourceController.js")),
				p = y(n("./node_modules/dashjs/build/es5/src/streaming/vo/DashJSError.js")),
				E = y(n("./node_modules/dashjs/build/es5/src/core/errors/Errors.js")),
				v = y(n("./node_modules/dashjs/build/es5/src/streaming/controllers/EventController.js"));

			function y(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var T = 200,
				b = 500;

			function S() {
				var e = this.context,
					t = (0, o.default)(e).getInstance(),
					n = void 0,
					l = void 0,
					y = void 0,
					S = void 0,
					A = void 0,
					I = void 0,
					R = void 0,
					M = void 0,
					C = void 0,
					D = void 0,
					N = void 0,
					O = void 0,
					j = void 0,
					w = void 0,
					P = void 0,
					L = void 0,
					F = void 0,
					x = void 0,
					U = void 0,
					B = void 0,
					k = void 0,
					G = void 0,
					q = void 0,
					H = void 0,
					K = void 0,
					Y = void 0,
					V = void 0,
					z = void 0,
					W = void 0,
					X = void 0,
					Q = void 0,
					J = void 0,
					Z = void 0,
					$ = void 0,
					ee = void 0,
					te = void 0,
					ne = void 0,
					re = void 0,
					se = void 0;

				function ie() {
					if (Me()) {
						var e = W.getPlaybackQuality();
						e && M.addDroppedFrames(e)
					}
				}

				function ae(e) {
					var t = ge(e.seekTime);
					t === k && ne && ne.length > 0 && ne.forEach((function(e) {
						e.deactivate(!0)
					})), t && t !== k ? (De(d.PlayListTrace.END_OF_PERIOD_STOP_REASON), ve(t, k, e.seekTime)) : De(d.PlayListTrace.USER_REQUEST_STOP_REASON), Ne(d.PlayList.SEEK_START_REASON)
				}

				function oe(e) {
					var t = Ee();
					De(d.PlayListTrace.END_OF_PERIOD_STOP_REASON), ve(t, k, e.seekTime), Ne(d.PlayList.SEEK_START_REASON)
				}

				function ue() {
					l.debug("[onPlaybackStarted]"), Z ? (Z = !1, Ne(d.PlayList.INITIAL_PLAYOUT_START_REASON)) : J && (J = !1, Ne(d.PlayList.RESUME_FROM_PAUSE_START_REASON))
				}

				function le(e) {
					l.debug("[onPlaybackPaused]"), e.ended || (J = !0, De(d.PlayListTrace.USER_REQUEST_STOP_REASON))
				}

				function de() {
					$ && (clearInterval($), $ = null)
				}

				function ce() {
					ee || (ee = setInterval((function() {
						! function() {
							if (!k || !fe(k)) return;
							var e = function(e) {
									try {
										var t = e || (k || null);
										if (t) {
											var n = t.getStreamInfo().start;
											return B.filter((function(e) {
												return e.getStreamInfo().start > n
											}))
										}
									} catch (r) {
										return []
									}
								}(k),
								t = 0,
								n = function() {
									var n = e[t],
										s = 0 === t ? k : e[t - 1];
									if (!n.getPreloadingScheduled() && fe(s) && z) {
										var i = [r.default.VIDEO, r.default.AUDIO],
											a = !0;
										i.forEach((function(e) {
											var t = R.getMediaInfoForType(n.getStreamInfo(), e);
											R.getVoRepresentations(t).forEach((function(e) {
												var t = R.getIsDynamic(),
													n = U.calcSegmentAvailabilityRange(e, t);
												n.end < n.start && (a = !1)
											}))
										})), a && function(e) {
											var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
											if (z && !e.getPreloaded()) {
												me(e, t) && (e.setPreloadingScheduled(!0), l.info("[onStreamCanLoadNext] Preloading next stream with id " + e.getId()), !0, e.preload(z, te), ne.push(e), e.getProcessors().forEach((function(t) {
													t.setBufferingTime(e.getStartTime())
												})))
											}
										}(n, s)
									}
									t += 1
								};
							for (; t < e.length;) n()
						}()
					}), b))
				}

				function fe(e) {
					try {
						if (!e) return !1;
						var t = e.getProcessors().filter((function(e) {
							return e.getType() === r.default.AUDIO || e.getType() === r.default.VIDEO
						}));
						if (!t || 0 === t.length) return !1;
						var n = t.filter((function(e) {
							return !e.isBufferingCompleted()
						}));
						return n && 0 === n.length
					} catch (s) {
						return !1
					}
				}

				function he() {
					var e = je().isLast;
					z && e && (l.info("[onStreamBufferingCompleted] calls signalEndOfStream of mediaSourceController."), C.signalEndOfStream(z))
				}

				function me(e, t) {
					try {
						return se.get().streaming.reuseExistingSourceBuffers && t.isProtectionCompatible(e, t) && (re || t.isMediaCodecCompatible(e, t)) && ! function(e) {
							try {
								var t = e.getStreamInfo(),
									n = R.getAdaptationForType(t.index, r.default.FRAGMENTED_TEXT, t);
								return !!n && (-1 !== n.codecs.indexOf("stpp") || -1 !== n.codecs.indexOf("wvtt"))
							} catch (s) {
								return !1
							}
						}(e)
					} catch (n) {
						return !1
					}
				}

				function ge(e) {
					if (isNaN(e)) return null;
					var t = 0,
						n = null,
						r = B.length;
					r > 0 && (t += B[0].getStartTime());
					for (var s = 0; s < r; s++)
						if (n = B[s], e < (t = parseFloat((t + n.getDuration()).toFixed(5)))) return n;
					return null
				}

				function _e() {
					return k ? k.getProcessors() : []
				}

				function pe(e) {
					if (!k.getIsEndedEventSignaled()) {
						k.setIsEndedEventSignaled(!0);
						var t = Ee();
						t ? (l.debug("StreamController onEnded, found next stream with id " + t.getStreamInfo().id), ve(t, k, NaN)) : (l.debug("StreamController no next stream found"), k.setIsEndedEventSignaled(!1)), De(t ? d.PlayListTrace.END_OF_PERIOD_STOP_REASON : d.PlayListTrace.END_OF_CONTENT_STOP_REASON), !1
					}
					e && e.isLast && de()
				}

				function Ee() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = e || (k || null);
					if (t) {
						for (var n = t.getStreamInfo().start, r = t.getStreamInfo().duration, s = parseFloat((n + r).toFixed(5)), i = 0, a = -1, o = NaN; i < B.length;) {
							var u = B[i].getStreamInfo().start - s;
							u >= 0 && (isNaN(o) || u < o) && (o = u, a = i), i += 1
						}
						return a >= 0 ? B[a] : null
					}
					return null
				}

				function ve(e, n, r) {
					if (!(K || !e || n === e && e.isActive())) {
						K = !0, t.trigger(u.default.PERIOD_SWITCH_STARTED, {
							fromStreamInfo: n ? n.getStreamInfo() : null,
							toStreamInfo: e.getStreamInfo()
						});
						var s = !1;
						n && (s = me(e, n), n.deactivate(s)), r = isNaN(r) ? !s && n ? e.getStreamInfo().start : NaN : r, l.info("Switch to stream " + e.getId() + ". Seektime is " + r + ", current playback time is " + X.getTime()), l.info("Seamless period switch is set to " + s), k = e, ne = ne.filter((function(e) {
							return e.getId() !== k.getId()
						})), X.initialize(je(), !!n, r), W.getElement() ? ye(r, null === n, !1, s) : Te(r, s), !1
					}
				}

				function ye(e, n, r, s) {
					var i = void 0;

					function a() {
						z && "open" === z.readyState && (l.debug("MediaSource is open!"), window.URL.revokeObjectURL(i), z.removeEventListener("sourceopen", a), z.removeEventListener("webkitsourceopen", a), be(), n || t.trigger(u.default.SOURCE_INITIALIZED), r ? k.setMediaSource(z) : Te(e, s))
					}
					z ? s ? (Te(e, s), n || t.trigger(u.default.SOURCE_INITIALIZED)) : (C.detachMediaSource(W), z.addEventListener("sourceopen", a, !1), z.addEventListener("webkitsourceopen", a, !1), i = C.attachMediaSource(z, W), l.debug("MediaSource attached to element.  Waiting on open...")) : ((z = C.createMediaSource()).addEventListener("sourceopen", a, !1), z.addEventListener("webkitsourceopen", a, !1), i = C.attachMediaSource(z, W), l.debug("MediaSource attached to element.  Waiting on open..."))
				}

				function Te(e, n) {
					if (te = k.activate(z, n ? te : void 0)) {
						var r = Object.keys(te);
						r.length > 0 && te[r[0]].changeType && (re = !0)
					}
					Z || isNaN(e) || (e === X.getTime() ? t.trigger(u.default.SEEK_TARGET, {
						time: e
					}, {
						streamId: k.getId()
					}) : X.seek(e)), !H && Z || X.play(), K = !1, t.trigger(u.default.PERIOD_SWITCH_COMPLETED, {
						toStreamInfo: je()
					})
				}

				function be(e) {
					var t = e || je().manifestInfo.duration;
					if (t && !isNaN(t)) {
						var n = C.setDuration(z, t);
						l.debug("Duration successfully set to: " + n)
					}
				}

				function Se(e) {
					for (var t = 0, n = B.length; t < n; t++)
						if (B[t].getId() === e.id) return B[t];
					return null
				}

				function Ae() {
					try {
						var n = R.getStreamsInfo();
						if (0 === n.length) throw new Error("There are no streams");
						M.updateManifestUpdateInfo({
							currentTime: X.getTime(),
							buffered: W.getBufferRange(),
							presentationStartTime: n[0].start,
							clientTimeOffset: U.getClientTimeOffset()
						}), B.length > 0 && (B = B.filter((function(e) {
							var t = n.filter((function(t) {
								return t.id === e.getId()
							})).length > 0 || e.getId() === k.getId();
							return t || l.debug("Removing stream " + e.getId()), t
						})));
						for (var s = 0, a = n.length; s < a; s++) {
							var o = n[s],
								d = Se(o);
							d ? d.updateData(o) : (d = (0, i.default)(e).create({
								manifestModel: I,
								mediaPlayerModel: Q,
								dashMetrics: M,
								manifestUpdater: S,
								adapter: R,
								timelineConverter: U,
								capabilities: y,
								errHandler: x,
								baseURLController: N,
								abrController: O,
								playbackController: X,
								eventController: w,
								mediaController: j,
								textController: P,
								protectionController: G,
								videoModel: W,
								streamInfo: o,
								settings: se
							}), B.push(d), d.initialize()), M.addManifestUpdateStreamInfo(o)
						}
						if (!k) {
							if (R.getIsDynamic() && B.length) {
								var c = n[0].manifestInfo,
									f = function(e, t) {
										try {
											var n = NaN;
											if (t && !isNaN(t.maxFragmentDuration) && isFinite(t.maxFragmentDuration)) return t.maxFragmentDuration;
											if (e && 1 === e.length) {
												var s = e[0],
													i = [r.default.VIDEO, r.default.AUDIO, r.default.FRAGMENTED_TEXT].reduce((function(e, t) {
														var n = R.getMediaInfoForType(s, t);
														return n && e.push(n), e
													}), []).reduce((function(e, t) {
														var n = R.getVoRepresentations(t);
														return n && n.length > 0 && n.forEach((function(t) {
															t && e.push(t)
														})), e
													}), []).reduce((function(e, t) {
														var n = R.convertDataToRepresentationInfo(t);
														return n && n.fragmentDuration && !isNaN(n.fragmentDuration) && e.push(n.fragmentDuration), e
													}), []);
												n = Math.max.apply(Math, function(e) {
													if (Array.isArray(e)) {
														for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
														return n
													}
													return Array.from(e)
												}(i))
											}
											return isFinite(n) ? n : NaN
										} catch (a) {
											return NaN
										}
									}(n, c);
								X.computeAndSetLiveDelay(f, c.DVRWindowSize, c.minBufferTime)
							}
							var h = null;
							!(h = ge(X.getStartTimeFromUriParameters(R.getIsDynamic()))) && R.getIsDynamic() && B.length && (l.debug("Dynamic stream: Trying to find the correct starting period"), h = function() {
								try {
									var e = U.calcPresentationTimeFromWallTime(new Date, R.getRegularPeriods()[0]),
										t = X.getLiveDelay();
									return ge(e - t)
								} catch (n) {
									return null
								}
							}()), ve(null !== h ? h : B[0], null, NaN), $ || ($ = setInterval((function() {
								!K && X.getTimeToStreamEnd() <= 0 && t.trigger(u.default.PLAYBACK_ENDED, {
									isLast: je().isLast
								})
							}), T)), ce()
						}
						t.trigger(u.default.STREAMS_COMPOSED)
					} catch (m) {
						x.error(new p.default(E.default.MANIFEST_ERROR_ID_NOSTREAMS_CODE, m.message + "nostreamscomposed", I.getValue())), V = !0, Fe()
					}
				}

				function Ie() {
					var e = I.getValue();
					G && (t.trigger(u.default.PROTECTION_CREATED, {
						controller: G,
						manifest: e
					}), G.setMediaElement(W.getElement()), q && G.setProtectionData(q)), Ae()
				}

				function Re(e) {
					if (e.error) V = !0, Fe();
					else {
						var t = e.manifest;
						R.updatePeriods(t);
						var n = R.getUTCTimingSources(),
							r = R.getIsDynamic() ? n.concat(Q.getUTCTimingSources()) : n,
							s = F.isHTTPS(e.manifest.url);
						r.forEach((function(e) {
							e.value.replace(/.*?:\/\//g, "") === Q.getDefaultUtcTimingSource().value.replace(/.*?:\/\//g, "") && (e.value = e.value.replace(s ? new RegExp(/^(http:)?\/\//i) : new RegExp(/^(https:)?\/\//i), s ? "https://" : "http://"), l.debug("Matching default timing source protocol to manifest protocol: ", e.value))
						})), N.initialize(t), D.setConfig({
							dashMetrics: M,
							baseURLController: N
						}), D.initialize(r, se.get().streaming.useManifestDateHeaderTimeSource)
					}
				}

				function Me() {
					return !!k && k.getHasVideoTrack()
				}

				function Ce() {
					return !!k && k.getHasAudioTrack()
				}

				function De(e, t) {
					t = t || new Date, _e().forEach((function(n) {
						n.finalisePlayList(t, e)
					})), M.addPlayList()
				}

				function Ne(e) {
					M.createPlaylistMetrics(1e3 * X.getTime(), e)
				}

				function Oe(e) {
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
						Y = !0, e.error.message && (t += " (" + e.error.message + ")"), e.error.msExtendedCode && (t += " (0x" + (e.error.msExtendedCode >>> 0).toString(16).toUpperCase() + ")"), l.fatal("Video Element Error: " + t), e.error && l.fatal(e.error), x.error(new p.default(e.error.code, t)), Fe()
					}
				}

				function je() {
					return k ? k.getStreamInfo() : null
				}

				function we() {
					if (!(A && A.hasOwnProperty("load") && U && U.hasOwnProperty("initialize") && U.hasOwnProperty("reset") && U.hasOwnProperty("getClientTimeOffset") && I && x && M && X)) throw new Error(r.default.MISSING_CONFIG_ERROR)
				}

				function Pe(e) {
					isNaN(e.newDuration) || be(e.newDuration)
				}

				function Le() {
					B = [], G = null, K = !1, k = null, Y = !1, V = !1, Z = !0, J = !1, H = !0, $ = null, !1, ee = null, !1, ne = []
				}

				function Fe() {
					we(), D.reset(), De(Y || V ? d.PlayListTrace.FAILURE_STOP_REASON : d.PlayListTrace.USER_REQUEST_STOP_REASON);
					for (var e = 0, r = B ? B.length : 0; e < r; e++) {
						B[e].reset(Y)
					}
					t.off(u.default.PLAYBACK_TIME_UPDATED, ie, n), t.off(u.default.PLAYBACK_SEEKING, ae, n), t.off(u.default.GAP_CAUSED_SEEK_TO_PERIOD_END, oe, n), t.off(u.default.PLAYBACK_ERROR, Oe, n), t.off(u.default.PLAYBACK_STARTED, ue, n), t.off(u.default.PLAYBACK_PAUSED, le, n), t.off(u.default.PLAYBACK_ENDED, pe, n), t.off(u.default.MANIFEST_UPDATED, Re, n), t.off(u.default.STREAM_BUFFERING_COMPLETED, he, n), t.off(u.default.MANIFEST_VALIDITY_CHANGED, Pe, n), t.off(u.default.TIME_SYNCHRONIZATION_COMPLETED, Ie, n), t.off(m.default.METRIC_ADDED, xe, n), N.reset(), S.reset(), w.reset(), M.clearAllCurrentMetrics(), I.setValue(null), A.reset(), U.reset(), L.reset(), z && (C.detachMediaSource(W), z = null), W = null, G && (G.setMediaElement(null), G = null, q = null, I.getValue() && t.trigger(u.default.PROTECTION_DESTROYED, {
						data: I.getValue().url
					})), de(), clearInterval(ee), ee = null, t.trigger(u.default.STREAM_TEARDOWN_COMPLETE), Le()
				}

				function xe(e) {
					if (e.metric === s.default.DVR_INFO) {
						var t = Ce() ? r.default.AUDIO : r.default.VIDEO;
						e.mediaType === t && C.setSeekable(z, e.value.range.start, e.value.range.end)
					}
				}
				return n = {
					initialize: function(r, s) {
						we(), H = r, q = s, U.initialize(), (S = (0, a.default)(e).create()).setConfig({
							manifestModel: I,
							adapter: R,
							manifestLoader: A,
							errHandler: x,
							settings: se
						}), S.initialize(), (w = (0, v.default)(e).getInstance()).setConfig({
							manifestUpdater: S,
							playbackController: X
						}), w.start(), t.on(u.default.PLAYBACK_TIME_UPDATED, ie, n), t.on(u.default.PLAYBACK_SEEKING, ae, n), t.on(u.default.GAP_CAUSED_SEEK_TO_PERIOD_END, oe, n), t.on(u.default.PLAYBACK_ERROR, Oe, n), t.on(u.default.PLAYBACK_STARTED, ue, n), t.on(u.default.PLAYBACK_PAUSED, le, n), t.on(u.default.PLAYBACK_ENDED, pe, n, {
							priority: o.default.EVENT_PRIORITY_HIGH
						}), t.on(u.default.MANIFEST_UPDATED, Re, n), t.on(u.default.STREAM_BUFFERING_COMPLETED, he, n), t.on(u.default.MANIFEST_VALIDITY_CHANGED, Pe, n), t.on(u.default.TIME_SYNCHRONIZATION_COMPLETED, Ie, n), t.on(m.default.METRIC_ADDED, xe, n)
					},
					getActiveStreamInfo: je,
					hasVideoTrack: Me,
					hasAudioTrack: Ce,
					switchToVideoElement: function(e) {
						k && (X.initialize(je()), ye(e, !1, !0, !1))
					},
					getStreamById: function(e) {
						return B.filter((function(t) {
							return t.getId() === e
						}))[0]
					},
					getStreamForTime: ge,
					getTimeRelativeToStreamId: function(e, t) {
						for (var n = null, r = 0, s = 0, i = null, a = 0; a < B.length; a++) {
							if (s = (n = B[a]).getStartTime(), i = n.getDuration(), Number.isFinite(s) && (r = s), n.getId() === t) return e - r;
							Number.isFinite(i) && (r += i)
						}
						return null
					},
					load: function(e) {
						we(), A.load(e)
					},
					loadWithManifest: function(e) {
						! function() {
							if (!S || !S.hasOwnProperty("setManifest")) throw new Error("initialize function has to be called previously")
						}(), S.setManifest(e)
					},
					getActiveStreamProcessors: _e,
					setConfig: function(e) {
						e && (e.capabilities && (y = e.capabilities), e.manifestLoader && (A = e.manifestLoader), e.manifestModel && (I = e.manifestModel), e.mediaPlayerModel && (Q = e.mediaPlayerModel), e.protectionController && (G = e.protectionController), e.adapter && (R = e.adapter), e.dashMetrics && (M = e.dashMetrics), e.errHandler && (x = e.errHandler), e.timelineConverter && (U = e.timelineConverter), e.videoModel && (W = e.videoModel), e.playbackController && (X = e.playbackController), e.abrController && (O = e.abrController), e.mediaController && (j = e.mediaController), e.textController && (P = e.textController), e.settings && (se = e.settings), e.baseURLController && (N = e.baseURLController))
					},
					setProtectionData: function(e) {
						q = e
					},
					getIsStreamSwitchInProgress: function() {
						return K
					},
					getHasMediaOrIntialisationError: function() {
						return Y || V
					},
					hasStreamFinishedBuffering: fe,
					getStreams: function() {
						return B
					},
					getActiveStream: function() {
						return k
					},
					reset: Fe
				}, l = (0, c.default)(e).getInstance().getLogger(n), D = (0, g.default)(e).getInstance(), C = (0, _.default)(e).getInstance(), L = (0, f.default)(e).getInstance(), F = (0, h.default)(e).getInstance(), Le(), n
			}
			S.__dashjs_factory_name = "StreamController", t.default = l.default.getSingletonFactory(S)
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/TimeSyncController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = c(n("./node_modules/dashjs/build/es5/src/streaming/vo/DashJSError.js")),
				s = n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js"),
				i = c(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				a = c(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				o = c(n("./node_modules/dashjs/build/es5/src/core/errors/Errors.js")),
				u = c(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				l = c(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				d = c(n("./node_modules/dashjs/build/es5/src/streaming/utils/URLUtils.js"));

			function c(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var f = 5e3;

			function h() {
				var e = this.context,
					t = (0, i.default)(e).getInstance(),
					n = (0, d.default)(e).getInstance(),
					u = void 0,
					c = void 0,
					h = void 0,
					m = void 0,
					g = void 0,
					_ = void 0,
					p = void 0,
					E = void 0;

				function v(e) {
					m = e
				}

				function y(e) {
					h = e
				}

				function T(e) {
					var t = Date.parse(e);
					return isNaN(t) && (t = function(e) {
						var t = void 0,
							n = void 0,
							r = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})(?::([0-9]*)(\.[0-9]*)?)?(?:([+\-])([0-9]{2})([0-9]{2}))?/.exec(e);
						return t = Date.UTC(parseInt(r[1], 10), parseInt(r[2], 10) - 1, parseInt(r[3], 10), parseInt(r[4], 10), parseInt(r[5], 10), r[6] && (parseInt(r[6], 10) || 0), r[7] && 1e3 * parseFloat(r[7]) || 0), r[9] && r[10] && (n = 60 * parseInt(r[9], 10) + parseInt(r[10], 10), t += ("+" === r[8] ? -1 : 1) * n * 60 * 1e3), new Date(t).getTime()
					}(e)), t
				}

				function b(e) {
					return Date.parse(e)
				}

				function S(e) {
					return Date.parse(e)
				}

				function A(e, t, n) {
					n()
				}

				function I(e, t, n) {
					var r = T(e);
					isNaN(r) ? n() : t(r)
				}

				function R(e, t, r, i, a) {
					var o, u, l = !1,
						d = new XMLHttpRequest,
						c = a ? s.HTTPRequest.HEAD : s.HTTPRequest.GET,
						h = t.match(/\S+/g);
					if (t = h.shift(), o = function() {
							l || (l = !0, h.length ? R(e, h.join(" "), r, i, a) : i())
						}, u = function() {
							var t = void 0,
								n = void 0;
							200 === d.status && (t = a ? d.getResponseHeader("Date") : d.response, n = e(t), isNaN(n) || (r(n), l = !0))
						}, n.isRelative(t)) {
						var m = E.resolve();
						m && (t = n.resolve(t, m.url))
					}
					d.open(c, t), d.timeout = f || 0, d.onload = u, d.onloadend = o, d.send()
				}

				function M(e, t, n) {
					R(S, e, t, n, !0)
				}

				function C(e, n, s) {
					v(!1), t.trigger(a.default.TIME_SYNCHRONIZATION_COMPLETED, {
						time: n,
						offset: s,
						error: e ? new r.default(o.default.TIME_SYNC_FAILED_ERROR_CODE, o.default.TIME_SYNC_FAILED_ERROR_MESSAGE) : null
					})
				}
				return u = {
					initialize: function(e, t) {
						g = t, h = 0, m = !1, _ = {
							"urn:mpeg:dash:utc:http-head:2014": M,
							"urn:mpeg:dash:utc:http-xsdate:2014": R.bind(null, T),
							"urn:mpeg:dash:utc:http-iso:2014": R.bind(null, b),
							"urn:mpeg:dash:utc:direct:2014": I,
							"urn:mpeg:dash:utc:http-head:2012": M,
							"urn:mpeg:dash:utc:http-xsdate:2012": R.bind(null, T),
							"urn:mpeg:dash:utc:http-iso:2012": R.bind(null, b),
							"urn:mpeg:dash:utc:direct:2012": I,
							"urn:mpeg:dash:utc:http-ntp:2014": A,
							"urn:mpeg:dash:utc:ntp:2014": A,
							"urn:mpeg:dash:utc:sntp:2014": A
						}, m || function e(t, n) {
							var r = n || 0;
							var s = t[r];
							var i = function(e, t) {
								var n, r, s = !e || !t;
								s && g ? (n = p.getLatestMPDRequestHeaderValueByID("Date"), r = null !== n ? new Date(n).getTime() : Number.NaN, isNaN(r) ? C(!0) : (y(r - (new Date).getTime()), C(!1, r / 1e3, h))) : C(s, e, t)
							};
							v(!0);
							s ? _.hasOwnProperty(s.schemeIdUri) ? _[s.schemeIdUri](s.value, (function(e) {
								var t = (new Date).getTime(),
									n = function(e, t) {
										return e - t
									}(e, t);
								y(n), c.info("Local time: " + new Date(t)), c.info("Server time: " + new Date(e)), c.info("Server Time - Local Time (ms): " + n), i(e, n)
							}), (function() {
								e(t, r + 1)
							})) : e(t, r + 1) : (y(0), i())
						}(e)
					},
					getOffsetToDeviceTimeMs: function() {
						return h
					},
					setConfig: function(e) {
						e && (e.dashMetrics && (p = e.dashMetrics), e.baseURLController && (E = e.baseURLController))
					},
					reset: function() {
						v(!1)
					}
				}, c = (0, l.default)(e).getInstance().getLogger(u), u
			}
			h.__dashjs_factory_name = "TimeSyncController";
			var m = u.default.getSingletonFactory(h);
			m.HTTP_TIMEOUT_MS = f, u.default.updateSingletonFactory(h.__dashjs_factory_name, m), t.default = m
		},
		"./node_modules/dashjs/build/es5/src/streaming/controllers/XlinkController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = d(n("./node_modules/dashjs/build/es5/src/streaming/XlinkLoader.js")),
				s = d(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				i = d(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				a = d(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				o = d(n("./node_modules/dashjs/build/es5/externals/xml2json.js")),
				u = d(n("./node_modules/dashjs/build/es5/src/streaming/utils/URLUtils.js")),
				l = d(n("./node_modules/dashjs/build/es5/src/dash/constants/DashConstants.js"));

			function d(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var c = "onLoad",
				f = "onActuate",
				h = "urn:mpeg:dash:resolve-to-zero:2013";

			function m(e) {
				e = e || {};
				var t = this.context,
					n = (0, s.default)(t).getInstance(),
					a = (0, u.default)(t).getInstance(),
					d = void 0,
					m = void 0,
					g = void 0,
					_ = void 0,
					p = void 0,
					E = void 0;

				function v(e, t, n) {
					var r = {},
						s = void 0,
						i = void 0;
					r.elements = e, r.type = t, r.resolveType = n, 0 === r.elements.length && T(r);
					for (var o = 0; o < r.elements.length; o++) s = r.elements[o], i = a.isHTTPURL(s.url) ? s.url : s.originalContent.BaseURL + s.url, E.load(i, s, r)
				}

				function y(e) {
					var t, n = void 0,
						r = "";
					if (n = e.element, t = e.resolveObject, n.resolvedContent) {
						var s = 0;
						0 === n.resolvedContent.indexOf("<?xml") && (s = n.resolvedContent.indexOf("?>") + 2), r = n.resolvedContent.substr(0, s) + "<response>" + n.resolvedContent.substr(s) + "</response>", n.resolvedContent = p.xml_str2json(r)
					}(function(e) {
						var t = void 0;
						for (t = 0; t < e.elements.length; t++)
							if (!1 === e.elements[t].resolved) return !1;
						return !0
					})(t) && T(t)
				}

				function T(e) {
					var t = [],
						r = void 0,
						s = void 0;
					if (function(e) {
							var t = [],
								n = void 0,
								r = void 0,
								s = void 0,
								i = void 0,
								a = void 0,
								o = void 0;
							for (i = e.elements.length - 1; i >= 0; i--) {
								if (n = e.elements[i], r = n.type + "_asArray", n.resolvedContent) {
									if (n.resolvedContent)
										for (a = 0; a < n.resolvedContent[r].length; a++) s = n.resolvedContent[r][a], t.push(s)
								} else delete n.originalContent["xlink:actuate"], delete n.originalContent["xlink:href"], t.push(n.originalContent);
								for (n.parentElement[r].splice(n.index, 1), o = 0; o < t.length; o++) n.parentElement[r].splice(n.index + o, 0, t[o]);
								t = []
							}
							e.elements.length > 0 && g.run(_)
						}(e), e.resolveType === f && n.trigger(i.default.XLINK_READY, {
							manifest: _
						}), e.resolveType === c) switch (e.type) {
						case l.default.PERIOD:
							for (r = 0; r < _[l.default.PERIOD + "_asArray"].length; r++)(s = _[l.default.PERIOD + "_asArray"][r]).hasOwnProperty(l.default.ADAPTATION_SET + "_asArray") && (t = t.concat(b(s[l.default.ADAPTATION_SET + "_asArray"], s, l.default.ADAPTATION_SET, c))), s.hasOwnProperty(l.default.EVENT_STREAM + "_asArray") && (t = t.concat(b(s[l.default.EVENT_STREAM + "_asArray"], s, l.default.EVENT_STREAM, c)));
							v(t, l.default.ADAPTATION_SET, c);
							break;
						case l.default.ADAPTATION_SET:
							n.trigger(i.default.XLINK_READY, {
								manifest: _
							})
					}
				}

				function b(e, t, n, r) {
					var s = [],
						i = void 0,
						a = void 0,
						o = void 0;
					for (a = e.length - 1; a >= 0; a--)(i = e[a]).hasOwnProperty("xlink:href") && i["xlink:href"] === h && e.splice(a, 1);
					for (a = 0; a < e.length; a++)(i = e[a]).hasOwnProperty("xlink:href") && i.hasOwnProperty("xlink:actuate") && i["xlink:actuate"] === r && (o = S(i["xlink:href"], t, n, a, r, i), s.push(o));
					return s
				}

				function S(e, t, n, r, s, i) {
					return {
						url: e,
						parentElement: t,
						type: n,
						index: r,
						resolveType: s,
						originalContent: i,
						resolvedContent: null,
						resolved: !1
					}
				}
				return d = {
					resolveManifestOnLoad: function(e) {
						p = new o.default({
							escapeMode: !1,
							attributePrefix: "",
							arrayAccessForm: "property",
							emptyNodeForm: "object",
							stripWhitespaces: !1,
							enableToStringFunc: !1,
							ignoreRoot: !0,
							matchers: m
						}), v(b((_ = e).Period_asArray, _, l.default.PERIOD, c), l.default.PERIOD, c)
					},
					setMatchers: function(e) {
						e && (m = e)
					},
					setIron: function(e) {
						e && (g = e)
					},
					reset: function() {
						n.off(i.default.XLINK_ELEMENT_LOADED, y, d), E && (E.reset(), E = null)
					}
				}, n.on(i.default.XLINK_ELEMENT_LOADED, y, d), E = (0, r.default)(t).create({
					errHandler: e.errHandler,
					dashMetrics: e.dashMetrics,
					mediaPlayerModel: e.mediaPlayerModel,
					requestModifier: e.requestModifier,
					settings: e.settings
				}), d
			}
			m.__dashjs_factory_name = "XlinkController", t.default = a.default.getClassFactory(m)
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/MetricsReporting.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = u(n("./node_modules/dashjs/build/es5/src/streaming/metrics/utils/DVBErrorsTranslator.js")),
				s = u(n("./node_modules/dashjs/build/es5/src/streaming/metrics/MetricsReportingEvents.js")),
				i = u(n("./node_modules/dashjs/build/es5/src/streaming/metrics/controllers/MetricsCollectionController.js")),
				a = u(n("./node_modules/dashjs/build/es5/src/streaming/metrics/metrics/MetricsHandlerFactory.js")),
				o = u(n("./node_modules/dashjs/build/es5/src/streaming/metrics/reporting/ReportingFactory.js"));

			function u(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function l() {
				var e = this.context;
				return {
					createMetricsReporting: function(t) {
						return (0, r.default)(e).getInstance({
							eventBus: t.eventBus,
							dashMetrics: t.dashMetrics,
							metricsConstants: t.metricsConstants,
							events: t.events
						}), (0, i.default)(e).create(t)
					},
					getReportingFactory: function() {
						return (0, o.default)(e).getInstance()
					},
					getMetricsHandlerFactory: function() {
						return (0, a.default)(e).getInstance()
					}
				}
			}
			l.__dashjs_factory_name = "MetricsReporting";
			var d = dashjs.FactoryMaker.getClassFactory(l);
			d.events = s.default, dashjs.FactoryMaker.updateClassFactory(l.__dashjs_factory_name, d), t.default = d
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/MetricsReportingEvents.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/core/events/EventsBase.js");
			var i = new(function(e) {
				function t() {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					var e = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
					return e.METRICS_INITIALISATION_COMPLETE = "internal_metricsReportingInitialized", e.BECAME_REPORTING_PLAYER = "internal_becameReportingPlayer", e.CMCD_DATA_GENERATED = "cmcdDataGenerated", e
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
			}(((r = s) && r.__esModule ? r : {
				default: r
			}).default));
			t.default = i
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/controllers/MetricsCollectionController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = a(n("./node_modules/dashjs/build/es5/src/streaming/metrics/controllers/MetricsController.js")),
				s = a(n("./node_modules/dashjs/build/es5/src/streaming/metrics/utils/ManifestParsing.js")),
				i = a(n("./node_modules/dashjs/build/es5/src/streaming/metrics/MetricsReportingEvents.js"));

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function o(e) {
				e = e || {};
				var t = void 0,
					n = {},
					a = this.context,
					o = e.eventBus,
					u = e.events;

				function l(t) {
					if (!t.error) {
						var u = Object.keys(n);
						(0, s.default)(a).getInstance({
							adapter: e.adapter,
							constants: e.constants
						}).getMetrics(t.manifest).forEach((function(s) {
							var i = JSON.stringify(s);
							if (n.hasOwnProperty(i)) u.splice(i, 1);
							else try {
								var o = (0, r.default)(a).create(e);
								o.initialize(s), n[i] = o
							} catch (t) {}
						})), u.forEach((function(e) {
							n[e].reset(), delete n[e]
						})), o.trigger(i.default.METRICS_INITIALISATION_COMPLETE)
					}
				}

				function d() {
					Object.keys(n).forEach((function(e) {
						n[e].reset()
					})), n = {}
				}
				return t = {
					reset: function() {
						o.off(u.MANIFEST_UPDATED, l, t), o.off(u.STREAM_TEARDOWN_COMPLETE, d, t)
					}
				}, o.on(u.MANIFEST_UPDATED, l, t), o.on(u.STREAM_TEARDOWN_COMPLETE, d, t), t
			}
			o.__dashjs_factory_name = "MetricsCollectionController", t.default = dashjs.FactoryMaker.getClassFactory(o)
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/controllers/MetricsController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = a(n("./node_modules/dashjs/build/es5/src/streaming/metrics/controllers/RangeController.js")),
				s = a(n("./node_modules/dashjs/build/es5/src/streaming/metrics/controllers/ReportingController.js")),
				i = a(n("./node_modules/dashjs/build/es5/src/streaming/metrics/controllers/MetricsHandlersController.js"));

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function o(e) {
				e = e || {};
				var t = void 0,
					n = void 0,
					a = void 0,
					o = this.context;

				function u() {
					t && t.reset(), n && n.reset(), a && a.reset()
				}
				return {
					initialize: function(l) {
						try {
							(a = (0, r.default)(o).create({
								mediaElement: e.mediaElement
							})).initialize(l.Range), (n = (0, s.default)(o).create({
								debug: e.debug,
								metricsConstants: e.metricsConstants
							})).initialize(l.Reporting, a), (t = (0, i.default)(o).create({
								debug: e.debug,
								eventBus: e.eventBus,
								metricsConstants: e.metricsConstants,
								events: e.events
							})).initialize(l.metrics, n)
						} catch (d) {
							throw u(), d
						}
					},
					reset: u
				}
			}
			o.__dashjs_factory_name = "MetricsController", t.default = dashjs.FactoryMaker.getClassFactory(o)
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/controllers/MetricsHandlersController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/streaming/metrics/metrics/MetricsHandlerFactory.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				};

			function a(e) {
				e = e || {};
				var t = [],
					n = void 0,
					r = this.context,
					s = e.eventBus,
					a = e.events,
					o = (0, i.default)(r).getInstance({
						debug: e.debug,
						eventBus: e.eventBus,
						metricsConstants: e.metricsConstants
					});

				function u(e) {
					t.forEach((function(t) {
						t.handleNewMetric(e.metric, e.value, e.mediaType)
					}))
				}
				return n = {
					initialize: function(e, r) {
						e.split(",").forEach((function(e, n, s) {
							var i;
							if (-1 !== e.indexOf("(") && -1 === e.indexOf(")")) {
								var a = s[n + 1];
								a && -1 === a.indexOf("(") && -1 !== a.indexOf(")") && (e += "," + a, delete s[n + 1])
							}(i = o.create(e, r)) && t.push(i)
						})), s.on(a.METRIC_ADDED, u, n), s.on(a.METRIC_UPDATED, u, n)
					},
					reset: function() {
						s.off(a.METRIC_ADDED, u, n), s.off(a.METRIC_UPDATED, u, n), t.forEach((function(e) {
							return e.reset()
						})), t = []
					}
				}
			}
			a.__dashjs_factory_name = "MetricsHandlersController", t.default = dashjs.FactoryMaker.getClassFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/controllers/RangeController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/streaming/utils/CustomTimeRanges.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				};

			function a(e) {
				e = e || {};
				var t, n = !1,
					r = this.context,
					s = void 0,
					a = e.mediaElement;
				return t = {
					initialize: function(e) {
						e && e.length && (e.forEach((function(e) {
							var t = e.starttime,
								n = t + e.duration;
							s.add(t, n)
						})), n = !!e[0]._useWallClockTime)
					},
					reset: function() {
						s.clear()
					},
					isEnabled: function() {
						var e, t = s.length;
						if (!t) return !0;
						e = n ? (new Date).getTime() / 1e3 : a.currentTime;
						for (var r = 0; r < t; r += 1) {
							var i = s.start(r),
								o = s.end(r);
							if (i <= e && e < o) return !0
						}
						return !1
					}
				}, s = (0, i.default)(r).create(), t
			}
			a.__dashjs_factory_name = "RangeController", t.default = dashjs.FactoryMaker.getClassFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/controllers/ReportingController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/streaming/metrics/reporting/ReportingFactory.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				};

			function a(e) {
				var t = [],
					n = (0, i.default)(this.context).getInstance(e);
				return {
					initialize: function(e, r) {
						e.some((function(e) {
							var s = n.create(e, r);
							if (s) return t.push(s), !0
						}))
					},
					reset: function() {
						t.forEach((function(e) {
							return e.reset()
						})), t = []
					},
					report: function(e, n) {
						t.forEach((function(t) {
							return t.report(e, n)
						}))
					}
				}
			}
			a.__dashjs_factory_name = "ReportingController", t.default = dashjs.FactoryMaker.getClassFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/metrics/MetricsHandlerFactory.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = o(n("./node_modules/dashjs/build/es5/src/streaming/metrics/metrics/handlers/BufferLevelHandler.js")),
				s = o(n("./node_modules/dashjs/build/es5/src/streaming/metrics/metrics/handlers/DVBErrorsHandler.js")),
				i = o(n("./node_modules/dashjs/build/es5/src/streaming/metrics/metrics/handlers/HttpListHandler.js")),
				a = o(n("./node_modules/dashjs/build/es5/src/streaming/metrics/metrics/handlers/GenericMetricHandler.js"));

			function o(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function u(e) {
				var t = void 0,
					n = (e = e || {}).debug ? e.debug.getLogger(t) : {},
					o = /([a-zA-Z]*)(\(([0-9]*)(\,\s*([a-zA-Z]*))?\))?/,
					u = this.context,
					l = {
						BufferLevel: r.default,
						DVBErrors: s.default,
						HttpList: i.default,
						PlayList: a.default,
						RepSwitchList: a.default,
						TcpList: a.default
					};
				return t = {
					create: function(t, r) {
						var s, i = t.match(o);
						if (i) {
							try {
								(s = l[i[1]](u).create({
									eventBus: e.eventBus,
									metricsConstants: e.metricsConstants
								})).initialize(i[1], r, i[3], i[5])
							} catch (a) {
								s = null, n.error("MetricsHandlerFactory: Could not create handler for type " + i[1] + " with args " + i[3] + ", " + i[5] + " (" + a.message + ")")
							}
							return s
						}
					},
					register: function(e, t) {
						l[e] = t
					},
					unregister: function(e) {
						delete l[e]
					}
				}
			}
			u.__dashjs_factory_name = "MetricsHandlerFactory", t.default = dashjs.FactoryMaker.getSingletonFactory(u)
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/metrics/handlers/BufferLevelHandler.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/streaming/metrics/utils/HandlerHelpers.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				};

			function a(e) {
				e = e || {};
				var t = void 0,
					n = void 0,
					r = void 0,
					s = void 0,
					a = void 0,
					o = this.context,
					u = (0, i.default)(o).getInstance(),
					l = [],
					d = e.metricsConstants;

				function c() {
					var e = function() {
						try {
							return Object.keys(l).map((function(e) {
								return l[e]
							})).reduce((function(e, t) {
								return e.level < t.level ? e : t
							}))
						} catch (e) {
							return
						}
					}();
					e && a !== e.t && (a = e.t, t.report(r, e))
				}
				return {
					initialize: function(e, i, a) {
						i && (n = u.validateN(a), t = i, r = u.reconstructFullMetricName(e, a), s = setInterval(c, n))
					},
					reset: function() {
						clearInterval(s), s = null, n = 0, t = null, a = null
					},
					handleNewMetric: function(e, t, n) {
						e === d.BUFFER_LEVEL && (l[n] = t)
					}
				}
			}
			a.__dashjs_factory_name = "BufferLevelHandler", t.default = dashjs.FactoryMaker.getClassFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/metrics/handlers/DVBErrorsHandler.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/streaming/metrics/MetricsReportingEvents.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				};
			t.default = dashjs.FactoryMaker.getClassFactory((function(e) {
				var t = void 0,
					n = (e = e || {}).eventBus,
					r = e.metricsConstants;

				function s() {
					n.off(i.default.METRICS_INITIALISATION_COMPLETE, s, this), n.trigger(i.default.BECAME_REPORTING_PLAYER)
				}
				return {
					initialize: function(e, r) {
						r && (t = r, n.on(i.default.METRICS_INITIALISATION_COMPLETE, s, this))
					},
					reset: function() {
						t = null
					},
					handleNewMetric: function(e, n) {
						e === r.DVB_ERRORS && t && t.report(e, n)
					}
				}
			}))
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/metrics/handlers/GenericMetricHandler.js": function(e, t, n) {
			"use strict";

			function r() {
				var e = void 0,
					t = void 0;
				return {
					initialize: function(n, r) {
						e = n, t = r
					},
					reset: function() {
						t = null, e = void 0
					},
					handleNewMetric: function(n, r) {
						n === e && t && t.report(e, r)
					}
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), r.__dashjs_factory_name = "GenericMetricHandler", t.default = dashjs.FactoryMaker.getClassFactory(r)
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/metrics/handlers/HttpListHandler.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/streaming/metrics/utils/HandlerHelpers.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				};

			function a(e) {
				e = e || {};
				var t = void 0,
					n = void 0,
					r = void 0,
					s = void 0,
					a = void 0,
					o = [],
					u = (0, i.default)(this.context).getInstance(),
					l = e.metricsConstants;

				function d() {
					var e = o;
					e.length && t && t.report(s, e), o = []
				}
				return {
					initialize: function(e, i, o, l) {
						i && (n = u.validateN(o), t = i, l && l.length && (r = l), s = u.reconstructFullMetricName(e, o, l), a = setInterval(d, n))
					},
					reset: function() {
						clearInterval(a), a = null, n = null, r = null, o = [], t = null
					},
					handleNewMetric: function(e, t) {
						e === l.HTTP_REQUEST && (r && r !== t.type || o.push(t))
					}
				}
			}
			a.__dashjs_factory_name = "HttpListHandler", t.default = dashjs.FactoryMaker.getClassFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/reporting/ReportingFactory.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/streaming/metrics/reporting/reporters/DVBReporting.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				};

			function a(e) {
				e = e || {};
				var t = {
						"urn:dvb:dash:reporting:2014": i.default
					},
					n = this.context,
					r = void 0,
					s = e.debug ? e.debug.getLogger(r) : {},
					a = e.metricsConstants;
				return r = {
					create: function(e, r) {
						var i = void 0;
						try {
							(i = t[e.schemeIdUri](n).create({
								metricsConstants: a
							})).initialize(e, r)
						} catch (o) {
							i = null, s.error("ReportingFactory: could not create Reporting with schemeIdUri " + e.schemeIdUri + " (" + o.message + ")")
						}
						return i
					},
					register: function(e, n) {
						t[e] = n
					},
					unregister: function(e) {
						delete t[e]
					}
				}
			}
			a.__dashjs_factory_name = "ReportingFactory", t.default = dashjs.FactoryMaker.getSingletonFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/reporting/reporters/DVBReporting.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/streaming/metrics/utils/MetricSerialiser.js")),
				s = i(n("./node_modules/dashjs/build/es5/src/streaming/metrics/utils/RNG.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function a(e) {
				e = e || {};
				var t, n = this.context,
					i = void 0,
					a = void 0,
					o = void 0,
					u = void 0,
					l = void 0,
					d = void 0,
					c = !0,
					f = !0,
					h = [],
					m = e.metricsConstants;

				function g() {
					o = !1, u = !1, l = null, d = null
				}
				return t = {
					report: function(e, t) {
						Array.isArray(t) || (t = [t]), u && d.isEnabled() && t.forEach((function(t) {
							var n = i.serialise(t);
							c && e !== m.DVB_ERRORS && (n = "metricname=" + e + "&" + n),
								function(e, t, n) {
									var r = new XMLHttpRequest,
										s = function() {
											var e = h.indexOf(r); - 1 !== e && (h.splice(e, 1), r.status >= 200 && r.status < 300 ? t && t() : n && n())
										};
									h.push(r);
									try {
										r.open("GET", e), r.onloadend = s, r.onerror = s, r.send()
									} catch (i) {
										r.onerror()
									}
								}(n = l + "?" + n, null, (function() {
									u = !1
								}))
						}))
					},
					initialize: function(e, t) {
						var n = void 0;
						if (d = t, !(l = e.dvb_reportingUrl)) throw new Error("required parameter missing (dvb:reportingUrl)");
						o || ((n = e.dvb_probability) && (1e3 === n || n / 1e3 >= a.random()) && (u = !0), o = !0)
					},
					reset: function() {
						f || (h.forEach((function(e) {
							return e.abort()
						})), h = []), g()
					}
				}, i = (0, r.default)(n).getInstance(), a = (0, s.default)(n).getInstance(), g(), t
			}
			a.__dashjs_factory_name = "DVBReporting", t.default = dashjs.FactoryMaker.getClassFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/utils/DVBErrorsTranslator.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/streaming/metrics/vo/DVBErrors.js")),
				s = i(n("./node_modules/dashjs/build/es5/src/streaming/metrics/MetricsReportingEvents.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function a(e) {
				var t = void 0,
					n = void 0,
					i = (e = e || {}).eventBus,
					a = e.dashMetrics,
					o = e.metricsConstants,
					u = e.events;

				function l(e) {
					var t = new r.default;
					if (n) {
						for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
						t.mpdurl || (t.mpdurl = n.originalUrl || n.url), t.terror || (t.terror = new Date), a.addDVBErrors(t)
					}
				}

				function d(e) {
					e.error || (n = e.manifest)
				}

				function c(e) {
					l({
						errorcode: r.default.BASE_URL_CHANGED,
						servicelocation: e.entry
					})
				}

				function f() {
					l({
						errorcode: r.default.BECAME_REPORTER
					})
				}

				function h(e) {
					switch (e.metric) {
						case o.HTTP_REQUEST:
							(0 === (t = e.value).responsecode || t.responsecode >= 400 || t.responsecode < 100 || t.responsecode >= 600) && l({
								errorcode: t.responsecode || r.default.CONNECTION_ERROR,
								url: t.url,
								terror: t.tresponse,
								servicelocation: t._serviceLocation
							})
					}
					var t
				}

				function m(e) {
					var t = void 0;
					switch (e.error ? e.error.code : 0) {
						case MediaError.MEDIA_ERR_NETWORK:
							t = r.default.CONNECTION_ERROR;
							break;
						case MediaError.MEDIA_ERR_DECODE:
							t = r.default.CORRUPT_MEDIA_OTHER;
							break;
						default:
							return
					}
					l({
						errorcode: t
					})
				}

				function g() {
					i.on(u.MANIFEST_UPDATED, d, t), i.on(u.SERVICE_LOCATION_BLACKLIST_CHANGED, c, t), i.on(u.METRIC_ADDED, h, t), i.on(u.METRIC_UPDATED, h, t), i.on(u.PLAYBACK_ERROR, m, t), i.on(s.default.BECAME_REPORTING_PLAYER, f, t)
				}
				return t = {
					initialise: g,
					reset: function() {
						i.off(u.MANIFEST_UPDATED, d, t), i.off(u.SERVICE_LOCATION_BLACKLIST_CHANGED, c, t), i.off(u.METRIC_ADDED, h, t), i.off(u.METRIC_UPDATED, h, t), i.off(u.PLAYBACK_ERROR, m, t), i.off(s.default.BECAME_REPORTING_PLAYER, f, t)
					}
				}, g(), t
			}
			a.__dashjs_factory_name = "DVBErrorsTranslator", t.default = dashjs.FactoryMaker.getSingletonFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/utils/HandlerHelpers.js": function(e, t, n) {
			"use strict";

			function r() {
				return {
					reconstructFullMetricName: function(e, t, n) {
						var r = e;
						return t && (r += "(" + t, n && n.length && (r += "," + n), r += ")"), r
					},
					validateN: function(e) {
						if (!e) throw new Error("missing n");
						if (isNaN(e)) throw new Error("n is NaN");
						if (e < 0) throw new Error("n must be positive");
						return e
					}
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), r.__dashjs_factory_name = "HandlerHelpers", t.default = dashjs.FactoryMaker.getSingletonFactory(r)
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/utils/ManifestParsing.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = a(n("./node_modules/dashjs/build/es5/src/streaming/metrics/vo/Metrics.js")),
				s = a(n("./node_modules/dashjs/build/es5/src/streaming/metrics/vo/Range.js")),
				i = a(n("./node_modules/dashjs/build/es5/src/streaming/metrics/vo/Reporting.js"));

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function o(e) {
				var t = (e = e || {}).adapter,
					n = e.constants;
				return {
					getMetrics: function(e) {
						var a = [];
						return e && e.Metrics_asArray && e.Metrics_asArray.forEach((function(o) {
							var u = new r.default,
								l = t.getIsDynamic(e);
							o.hasOwnProperty("metrics") && (u.metrics = o.metrics, o.Range_asArray && o.Range_asArray.forEach((function(r) {
								var i = new s.default;
								i.starttime = function(e, r, s) {
									var i = void 0,
										a = void 0,
										o = 0;
									return r ? o = t.getAvailabilityStartTime(e) / 1e3 : (i = t.getRegularPeriods(e)).length && (o = i[0].start), a = o, s && s.hasOwnProperty(n.START_TIME) && (a += s.starttime), a
								}(e, l, r), r.hasOwnProperty("duration") ? i.duration = r.duration : i.duration = t.getDuration(e), i._useWallClockTime = l, u.Range.push(i)
							})), o.Reporting_asArray && (o.Reporting_asArray.forEach((function(e) {
								var t = new i.default;
								e.hasOwnProperty(n.SCHEME_ID_URI) && (t.schemeIdUri = e.schemeIdUri, e.hasOwnProperty("value") && (t.value = e.value), e.hasOwnProperty(n.DVB_REPORTING_URL) && (t.dvb_reportingUrl = e[n.DVB_REPORTING_URL]), e.hasOwnProperty(n.DVB_PROBABILITY) && (t.dvb_probability = e[n.DVB_PROBABILITY]), u.Reporting.push(t))
							})), a.push(u)))
						})), a
					}
				}
			}
			o.__dashjs_factory_name = "ManifestParsing", t.default = dashjs.FactoryMaker.getSingletonFactory(o)
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/utils/MetricSerialiser.js": function(e, t, n) {
			"use strict";

			function r() {
				return {
					serialise: function e(t) {
						var n = [],
							r = [],
							s = void 0,
							i = void 0;
						for (s in t)
							if (t.hasOwnProperty(s) && 0 !== s.indexOf("_")) {
								if (null == (i = t[s]) && (i = ""), Array.isArray(i)) {
									if (!i.length) continue;
									r = [], i.forEach((function(t) {
										var n = "Object" !== Object.prototype.toString.call(t).slice(8, -1);
										r.push(n ? t : e(t))
									})), i = r.map(encodeURIComponent).join(",")
								} else "string" == typeof i ? i = encodeURIComponent(i) : i instanceof Date ? i = i.toISOString() : "number" == typeof i && (i = Math.round(i));
								n.push(s + "=" + i)
							} return n.join("&")
					}
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), r.__dashjs_factory_name = "MetricSerialiser", t.default = dashjs.FactoryMaker.getSingletonFactory(r)
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/utils/RNG.js": function(e, t, n) {
			"use strict";

			function r() {
				var e, t = window.crypto || window.msCrypto,
					n = Uint32Array,
					r = Math.pow(2, 8 * n.BYTES_PER_ELEMENT) - 1,
					s = 10,
					i = void 0,
					a = void 0;

				function o() {
					t && (i || (i = new n(s)), t.getRandomValues(i), a = 0)
				}
				return e = {
					random: function(e, n) {
						var s = void 0;
						return e || (e = 0), n || (n = 1), t ? (a === i.length && o(), s = i[a] / r, a += 1) : s = Math.random(), s * (n - e) + e
					}
				}, o(), e
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), r.__dashjs_factory_name = "RNG", t.default = dashjs.FactoryMaker.getSingletonFactory(r)
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/vo/DVBErrors.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.mpdurl = null, this.errorcode = null, this.terror = null, this.url = null, this.ipaddress = null, this.servicelocation = null
			};
			r.SSL_CONNECTION_FAILED_PREFIX = "SSL", r.DNS_RESOLUTION_FAILED = "C00", r.HOST_UNREACHABLE = "C01", r.CONNECTION_REFUSED = "C02", r.CONNECTION_ERROR = "C03", r.CORRUPT_MEDIA_ISOBMFF = "M00", r.CORRUPT_MEDIA_OTHER = "M01", r.BASE_URL_CHANGED = "F00", r.BECAME_REPORTER = "S00", t.default = r
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/vo/Metrics.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.metrics = "", this.Range = [], this.Reporting = []
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/vo/Range.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.starttime = 0, this.duration = 1 / 0, this._useWallClockTime = !1
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/metrics/vo/Reporting.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.schemeIdUri = "", this.value = "", this.dvb_reportingUrl = "", this.dvb_probability = 1e3
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/models/BaseURLTreeModel.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/streaming/utils/ObjectUtils.js")),
				s = i(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var a = NaN,
				o = function e(t, n) {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this.data = {
						baseUrls: t || null,
						selectedIdx: n || a
					}, this.children = []
				};

			function u() {
				var e, t = void 0,
					n = void 0,
					s = this.context,
					i = (0, r.default)(s).getInstance();

				function u(e, t, r) {
					var s = n.getBaseURLsFromElement(r);
					e[t] ? i.areEqual(s, e[t].data.baseUrls) || (e[t].data.baseUrls = s, e[t].data.selectedIdx = a) : e[t] = new o(s)
				}

				function l(e) {
					! function() {
						if (!n || !n.hasOwnProperty("getBaseURLsFromElement") || !n.hasOwnProperty("getRepresentationSortFunction")) throw new Error("setConfig function has to be called previously")
					}();
					var r = n.getBaseURLsFromElement(e);
					i.areEqual(r, t.data.baseUrls) || (t.data.baseUrls = r, t.data.selectedIdx = a), e && e.Period_asArray && e.Period_asArray.forEach((function(e, r) {
						u(t.children, r, e), e.AdaptationSet_asArray && e.AdaptationSet_asArray.forEach((function(e, s) {
							u(t.children[r].children, s, e), e.Representation_asArray && e.Representation_asArray.sort(n.getRepresentationSortFunction()).forEach((function(e, n) {
								u(t.children[r].children[s].children, n, e)
							}))
						}))
					}))
				}

				function d() {
					t = new o
				}
				return e = {
					reset: d,
					update: function(e) {
						l(e)
					},
					getForPath: function(e) {
						var n = t,
							r = [n.data];
						return e && e.forEach((function(e) {
							(n = n.children[e]) && r.push(n.data)
						})), r.filter((function(e) {
							return e.baseUrls.length
						}))
					},
					invalidateSelectedIndexes: function(e) {
						! function e(n, r) {
							var s = r || t;
							n(s.data), s.children && s.children.forEach((function(t) {
								return e(n, t)
							}))
						}((function(t) {
							isNaN(t.selectedIdx) || e === t.baseUrls[t.selectedIdx].serviceLocation && (t.selectedIdx = a)
						}))
					},
					setConfig: function(e) {
						e.adapter && (n = e.adapter)
					}
				}, d(), e
			}
			u.__dashjs_factory_name = "BaseURLTreeModel", t.default = s.default.getClassFactory(u)
		},
		"./node_modules/dashjs/build/es5/src/streaming/models/CmcdModel.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = f(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				s = f(n("./node_modules/dashjs/build/es5/src/streaming/MediaPlayerEvents.js")),
				i = f(n("./node_modules/dashjs/build/es5/src/streaming/metrics/MetricsReportingEvents.js")),
				a = f(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				o = f(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				u = f(n("./node_modules/dashjs/build/es5/src/core/Settings.js")),
				l = n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js"),
				d = f(n("./node_modules/dashjs/build/es5/src/dash/models/DashManifestModel.js")),
				c = f(n("./node_modules/dashjs/build/es5/src/core/Utils.js"));

			function f(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var h = "CMCD",
				m = 1,
				g = {
					MANIFEST: "m",
					AUDIO: "a",
					VIDEO: "v",
					INIT: "i",
					CAPTION: "c",
					ISOBMFF_TEXT_TRACK: "tt",
					ENCRYPTION_KEY: "k",
					OTHER: "o"
				},
				_ = {
					DASH: "d",
					MSS: "s"
				},
				p = {
					VOD: "v",
					LIVE: "l"
				};

			function E() {
				var e = void 0,
					t = void 0,
					n = void 0,
					a = void 0,
					f = void 0,
					E = void 0,
					v = void 0,
					y = void 0,
					T = this.context,
					b = (0, r.default)(T).getInstance(),
					S = (0, u.default)(T).getInstance();

				function A() {
					n = {
						pr: 1,
						nor: null,
						st: null,
						sf: null,
						sid: "" + c.default.generateUuid(),
						cid: null
					}, v = {}, E = {}, y = {}
				}

				function I() {
					var e = {},
						t = S.get().streaming.cmcd.cid ? S.get().streaming.cmcd.cid : n.cid;
					return e.v = m, e.sid = S.get().streaming.cmcd.sid ? S.get().streaming.cmcd.sid : n.sid, e.sid = "" + e.sid, t && (e.cid = "" + t), isNaN(n.pr) || 1 === n.pr || null === n.pr || (e.pr = n.pr), n.st && (e.st = n.st), n.sf && (e.sf = n.sf), e
				}

				function R(e) {
					try {
						n.pr = e.playbackRate
					} catch (t) {}
				}

				function M(t) {
					try {
						var r = e.getIsDynamic(t.data) ? "" + p.LIVE : "" + p.VOD,
							s = t.protocol && "MSS" === t.protocol ? "" + _.MSS : "" + _.DASH;
						n.st = "" + r, n.sf = "" + s
					} catch (i) {}
				}

				function C(e) {
					try {
						e.state && e.mediaType && e.state === s.default.BUFFER_EMPTY && (v[e.mediaType] || (v[e.mediaType] = !0), E[e.mediaType] || (E[e.mediaType] = !0))
					} catch (t) {}
				}

				function D() {
					for (var e in v) v.hasOwnProperty(e) && (v[e] = !0);
					for (var t in E) E.hasOwnProperty(t) && (E[t] = !0)
				}
				return t = {
					getQueryParameter: function(e) {
						try {
							if (S.get().streaming.cmcd && S.get().streaming.cmcd.enabled) {
								var t = function(e) {
										try {
											return e.type === l.HTTPRequest.MPD_TYPE ? ((t = I()).ot = "" + g.MANIFEST, t) : e.type === l.HTTPRequest.MEDIA_SEGMENT_TYPE ? (function(e) {
												y.hasOwnProperty(e) || (y[e] = !1);
												E.hasOwnProperty(e) || (E[e] = !1);
												v.hasOwnProperty(e) || (v[e] = !1)
											}(e.mediaType), function(e) {
												var t = I(),
													r = function(e) {
														try {
															var t = e.quality,
																n = e.mediaInfo.bitrateList;
															return parseInt(n[t].bandwidth / 1e3)
														} catch (r) {
															return null
														}
													}(e),
													s = function(e) {
														try {
															return isNaN(e.duration) ? null : Math.round(1e3 * e.duration)
														} catch (t) {
															return null
														}
													}(e),
													i = "video" === e.mediaType ? "" + g.VIDEO : "audio" === e.mediaType ? "" + g.AUDIO : "fragmentedText" === e.mediaType ? "" + g.CAPTION : null,
													o = function(e) {
														try {
															return 100 * parseInt(a.getThroughputHistory().getSafeAverageThroughput(e) / 100)
														} catch (t) {
															return null
														}
													}(e.mediaType),
													u = function(e) {
														try {
															var t = n.pr,
																r = f.getCurrentBufferLevel(e);
															return isNaN(t) || isNaN(r) ? null : 100 * parseInt(r / t * 10)
														} catch (s) {
															return null
														}
													}(e.mediaType),
													l = function(e) {
														try {
															var t = f.getCurrentBufferLevel(e);
															return isNaN(t) ? null : 100 * parseInt(10 * t)
														} catch (n) {
															return null
														}
													}(e.mediaType),
													d = function(e) {
														try {
															var t = a.getTopBitrateInfoFor(e);
															return Math.round(t.bitrate / 1e3)
														} catch (n) {
															return null
														}
													}(e.mediaType),
													c = n.pr;
												r && (t.br = r);
												i && (t.ot = i);
												isNaN(s) || (t.d = s);
												isNaN(o) || (t.mtp = o);
												isNaN(u) || (t.dl = u);
												isNaN(l) || (t.bl = l);
												isNaN(d) || (t.tb = d);
												isNaN(c) || 1 === c || (t.pr = c);
												v[e.mediaType] && (t.bs = !0, v[e.mediaType] = !1);
												!E[e.mediaType] && y[e.mediaType] || (t.su = !0, E[e.mediaType] = !1, y[e.mediaType] = !0);
												return t
											}(e)) : e.type === l.HTTPRequest.INIT_SEGMENT_TYPE ? function() {
												var e = I();
												return e.ot = "" + g.INIT, e.su = !0, e
											}() : e.type === l.HTTPRequest.OTHER_TYPE || e.type === l.HTTPRequest.XLINK_EXPANSION_TYPE ? function() {
												var e = I();
												return e.ot = "" + g.OTHER, e
											}() : null
										} catch (r) {
											return null
										}
										var t
									}(e),
									r = function(e) {
										try {
											if (!e) return null;
											var t = Object.keys(e).sort((function(e, t) {
													return e.localeCompare(t)
												})),
												n = t.length,
												r = t.reduce((function(t, r, s) {
													if ("v" === r && 1 === e[r]) return t;
													"string" != typeof e[r] || "ot" === r && "sf" === r && "st" === r ? t += r + "=" + e[r] : t += r + '="' + e[r].replace(/"/g, '"') + '"';
													return s < n - 1 && (t += ","), t
												}), "");
											return r = r.replace(/=true/g, "")
										} catch (s) {
											return null
										}
									}(t);
								return b.trigger(i.default.CMCD_DATA_GENERATED, {
									url: e.url,
									mediaType: e.mediaType,
									cmcdData: t,
									cmcdString: r
								}), {
									key: h,
									value: r
								}
							}
							return null
						} catch (s) {
							return null
						}
					},
					setConfig: function(e) {
						e && (e.abrController && (a = e.abrController), e.dashMetrics && (f = e.dashMetrics), e.playbackController && e.playbackController)
					},
					reset: function() {
						b.off(s.default.PLAYBACK_RATE_CHANGED, R, this), b.off(s.default.MANIFEST_LOADED, M, this), b.off(s.default.BUFFER_LEVEL_STATE_CHANGED, C, t), b.off(s.default.PLAYBACK_SEEKED, D, t), A()
					},
					initialize: function() {
						b.on(s.default.PLAYBACK_RATE_CHANGED, R, t), b.on(s.default.MANIFEST_LOADED, M, t), b.on(s.default.BUFFER_LEVEL_STATE_CHANGED, C, t), b.on(s.default.PLAYBACK_SEEKED, D, t)
					}
				}, (0, o.default)(T).getInstance().getLogger(t), e = (0, d.default)(T).getInstance(), A(), t
			}
			E.__dashjs_factory_name = "CmcdModel", t.default = a.default.getSingletonFactory(E)
		},
		"./node_modules/dashjs/build/es5/src/streaming/models/FragmentModel.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = i(n("./node_modules/dashjs/build/es5/src/streaming/vo/FragmentRequest.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var a = "loading",
				o = "executed",
				u = "failed";

			function l(e) {
				var t = (e = e || {}).eventBus,
					n = e.events,
					r = e.dashMetrics,
					i = e.fragmentLoader,
					l = e.debug,
					d = e.streamInfo,
					c = e.type,
					f = void 0,
					h = void 0,
					m = void 0,
					g = void 0;

				function _(e) {
					var t;
					return !!e && (t = !1, m.some((function(n) {
						if (r = e, i = n, !isNaN(r.index) && r.startTime === i.startTime && r.adaptationIndex === i.adaptationIndex && r.type === i.type || function(e, t) {
								return isNaN(e.index) && isNaN(t.index) && e.quality === t.quality
							}(e, n) || function(e, t) {
								return e.action === s.default.ACTION_COMPLETE && e.action === t.action
							}(e, n)) return t = !0;
						var r, i
					})), t)
				}

				function p(e) {
					return isNaN(e.duration) ? .25 : Math.min(e.duration / 8, .5)
				}

				function E(e) {
					m = m.filter((function(t) {
						var n = p(t);
						return isNaN(t.startTime) || void 0 !== e && t.startTime >= e - n
					}))
				}

				function v(e, t) {
					t <= e + .5 || (m = m.filter((function(n) {
						var r = p(n);
						return isNaN(n.startTime) || n.startTime >= t - r || isNaN(n.duration) || n.startTime + n.duration <= e + r
					})))
				}

				function y(e, t, n) {
					for (var r = e.length - 1; r >= 0; r--) {
						var s = e[r],
							i = s.startTime,
							a = i + s.duration;
						if (n = isNaN(n) ? p(s) : n, !isNaN(i) && !isNaN(a) && t + n >= i && t - n < a || isNaN(i) && isNaN(t)) return s
					}
					return null
				}

				function T(e, t) {
					r.addSchedulingInfo(e, t), r.addRequestsQueue(e.mediaType, g, m)
				}

				function b(e) {
					e.sender === i && (g.splice(g.indexOf(e.request), 1), e.response && !e.error && m.push(e.request), T(e.request, e.error ? u : o), t.trigger(n.FRAGMENT_LOADING_COMPLETED, {
						request: e.request,
						response: e.response,
						error: e.error,
						sender: this
					}, {
						streamId: d.id,
						mediaType: c
					}))
				}

				function S(e) {
					e.sender === i && t.trigger(n.FRAGMENT_LOADING_PROGRESS, {
						request: e.request,
						response: e.response,
						error: e.error,
						sender: this
					}, {
						streamId: d.id,
						mediaType: c
					})
				}

				function A(e) {
					e.sender === i && t.trigger(n.FRAGMENT_LOADING_ABANDONED, {
						request: e.request
					}, {
						streamId: d.id,
						mediaType: c
					})
				}

				function I() {
					m = [], g = []
				}
				return f = {
					getStreamId: function() {
						return d.id
					},
					getType: function() {
						return c
					},
					getRequests: function(e) {
						var t = e ? e.state instanceof Array ? e.state : [e.state] : [],
							n = [];
						return t.forEach((function(t) {
							var r = function(e) {
								var t = void 0;
								switch (e) {
									case a:
										t = g;
										break;
									case o:
										t = m;
										break;
									default:
										t = []
								}
								return t
							}(t);
							n = n.concat(function(e, t) {
								if (t.hasOwnProperty("time")) return [y(e, t.time, t.threshold)];
								return e.filter((function(e) {
									for (var n in t)
										if ("state" !== n && t.hasOwnProperty(n) && e[n] != t[n]) return !1;
									return !0
								}))
							}(r, e))
						})), n
					},
					isFragmentLoaded: _,
					isFragmentLoadedOrPending: function(e) {
						var t = !1,
							n = 0,
							r = void 0;
						if (!(t = _(e)))
							for (n = 0; n < g.length; n++) r = g[n], e.url === r.url && e.startTime === r.startTime && (t = !0);
						return t
					},
					removeExecutedRequestsBeforeTime: E,
					removeExecutedRequestsAfterTime: function(e) {
						m = m.filter((function(t) {
							return isNaN(t.startTime) || void 0 !== e && t.startTime < e
						}))
					},
					syncExecutedRequestsWithBufferedRange: function(e, t) {
						if (e && 0 !== e.length) {
							for (var n = 0, r = 0, s = e.length; r < s; r++) v(n, e.start(r)), n = e.end(r);
							t > 0 && v(n, t)
						} else E()
					},
					abortRequests: function() {
						h.debug("abort requests"), i.abort(), g = []
					},
					executeRequest: function(e) {
						switch (e.action) {
							case s.default.ACTION_COMPLETE:
								m.push(e), T(e, o), h.debug("STREAM_COMPLETED"), t.trigger(n.STREAM_COMPLETED, {
									request: e
								}, {
									streamId: e.mediaInfo.streamInfo.id,
									mediaType: e.mediaType
								});
								break;
							case s.default.ACTION_DOWNLOAD:
								T(e, a), g.push(e),
									function(e) {
										t.trigger(n.FRAGMENT_LOADING_STARTED, {
											request: e
										}, {
											streamId: d.id,
											mediaType: c
										}), i.load(e)
									}(e);
								break;
							default:
								h.warn("Unknown request action.")
						}
					},
					reset: function() {
						t.off(n.LOADING_COMPLETED, b, this), t.off(n.LOADING_DATA_PROGRESS, S, this), t.off(n.LOADING_ABANDONED, A, this), i && i.reset(), I()
					},
					addExecutedRequest: function(e) {
						m.push(e)
					}
				}, h = l.getLogger(f), I(), t.on(n.LOADING_COMPLETED, b, f), t.on(n.LOADING_DATA_PROGRESS, S, f), t.on(n.LOADING_ABANDONED, A, f), f
			}
			l.__dashjs_factory_name = "FragmentModel";
			var d = r.default.getClassFactory(l);
			d.FRAGMENT_MODEL_LOADING = a, d.FRAGMENT_MODEL_EXECUTED = o, d.FRAGMENT_MODEL_CANCELED = "canceled", d.FRAGMENT_MODEL_FAILED = u, r.default.updateClassFactory(l.__dashjs_factory_name, d), t.default = d
		},
		"./node_modules/dashjs/build/es5/src/streaming/models/ManifestModel.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = a(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				s = a(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				i = a(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function o() {
				var e = this.context,
					t = (0, r.default)(e).getInstance(),
					n = void 0;
				return {
					getValue: function() {
						return n
					},
					setValue: function(e) {
						n = e, e && t.trigger(s.default.MANIFEST_LOADED, {
							data: e
						})
					}
				}
			}
			o.__dashjs_factory_name = "ManifestModel", t.default = i.default.getSingletonFactory(o)
		},
		"./node_modules/dashjs/build/es5/src/streaming/models/MediaPlayerModel.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = l(n("./node_modules/dashjs/build/es5/src/dash/vo/UTCTiming.js")),
				s = l(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = l(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				a = l(n("./node_modules/dashjs/build/es5/src/streaming/rules/abr/ABRRulesCollection.js")),
				o = l(n("./node_modules/dashjs/build/es5/src/core/Settings.js")),
				u = n("./node_modules/dashjs/build/es5/src/streaming/utils/SupervisorTools.js");

			function l(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var d = 12,
				c = 20,
				f = 3,
				h = 10,
				m = 5,
				g = 4,
				_ = 5,
				p = !1;

			function E() {
				var e, t = void 0,
					n = void 0,
					s = void 0,
					l = {
						scheme: "urn:mpeg:dash:utc:http-xsdate:2014",
						value: "http://time.akamai.com/?iso&ms"
					},
					E = this.context,
					v = (0, o.default)(E).getInstance();

				function y(e) {
					var t = void 0;
					for (t = 0; t < s.length; t++)
						if (s[t].rulename === e) return t;
					return -1
				}

				function T() {
					return v.get().streaming.lowLatencyEnabled ? v.get().streaming.liveDelay || f : v.get().streaming.liveDelay
				}

				function b(e, n) {
					S(e, n);
					var s = new r.default;
					s.schemeIdUri = e, s.value = n, t.push(s)
				}

				function S(e, n) {
					(0, u.checkParameterType)(e, "string"), (0, u.checkParameterType)(n, "string"), t.forEach((function(r, s) {
						r.schemeIdUri === e && r.value === n && t.splice(s, 1)
					}))
				}
				return e = {
					getABRCustomRules: function() {
						return s
					},
					addABRCustomRule: function(e, t, n) {
						if ("string" != typeof e || e !== a.default.ABANDON_FRAGMENT_RULES && e !== a.default.QUALITY_SWITCH_RULES || "string" != typeof t) throw i.default.BAD_ARGUMENT_ERROR;
						var r = y(t); - 1 === r ? s.push({
							type: e,
							rulename: t,
							rule: n
						}) : (s[r].type = e, s[r].rule = n)
					},
					removeABRCustomRule: function(e) {
						if (e) {
							var t = y(e); - 1 !== t && s.splice(t, 1)
						} else s = []
					},
					getStableBufferTime: function() {
						if (v.get().streaming.lowLatencyEnabled) return .6 * T();
						var e = v.get().streaming.stableBufferTime;
						return e > -1 ? e : v.get().streaming.fastSwitchEnabled ? c : d
					},
					getRetryAttemptsForType: function(e) {
						var t = isNaN(v.get().streaming.retryAttempts.lowLatencyMultiplyFactor) ? m : v.get().streaming.retryAttempts.lowLatencyMultiplyFactor;
						return v.get().streaming.lowLatencyEnabled ? v.get().streaming.retryAttempts[e] * t : v.get().streaming.retryAttempts[e]
					},
					getRetryIntervalsForType: function(e) {
						var t = isNaN(v.get().streaming.retryIntervals.lowLatencyReductionFactor) ? h : v.get().streaming.retryIntervals.lowLatencyReductionFactor;
						return v.get().streaming.lowLatencyEnabled ? v.get().streaming.retryIntervals[e] / t : v.get().streaming.retryIntervals[e]
					},
					getLiveDelay: T,
					getLiveCatchupLatencyThreshold: function() {
						try {
							var e = v.get().streaming.liveCatchup.latencyThreshold,
								t = T();
							if (null !== e && !isNaN(e)) return Math.max(e, t);
							var n = v.get().streaming.liveCatchup.minDrift,
								r = !isNaN(t) && t ? isNaN(n) ? T() : v.get().streaming.liveCatchup.minDrift + T() : NaN;
							return r && !isNaN(r) ? Math.max(r * g, _) : NaN
						} catch (s) {
							return NaN
						}
					},
					addUTCTimingSource: b,
					removeUTCTimingSource: S,
					getUTCTimingSources: function() {
						return t
					},
					clearDefaultUTCTimingSources: function() {
						t = []
					},
					restoreDefaultUTCTimingSources: function() {
						b(l.scheme, l.value)
					},
					setXHRWithCredentialsForType: function e(t, r) {
						t ? n[t] = !!r : Object.keys(n).forEach((function(t) {
							e(t, r)
						}))
					},
					getXHRWithCredentialsForType: function(e) {
						var t = n[e];
						return void 0 === t ? n.default : t
					},
					getDefaultUtcTimingSource: function() {
						return l
					},
					reset: function() {}
				}, t = [], n = {
					default: p
				}, s = [], e
			}
			E.__dashjs_factory_name = "MediaPlayerModel", t.default = s.default.getSingletonFactory(E)
		},
		"./node_modules/dashjs/build/es5/src/streaming/models/MetricsModel.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = E(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				s = E(n("./node_modules/dashjs/build/es5/src/streaming/constants/MetricsConstants.js")),
				i = E(n("./node_modules/dashjs/build/es5/src/streaming/vo/MetricsList.js")),
				a = n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js"),
				o = E(n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/RepresentationSwitch.js")),
				u = E(n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/BufferLevel.js")),
				l = E(n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/BufferState.js")),
				d = E(n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/DVRInfo.js")),
				c = E(n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/DroppedFrames.js")),
				f = n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/ManifestUpdate.js"),
				h = E(n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/SchedulingInfo.js")),
				m = E(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				g = E(n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/RequestsQueue.js")),
				_ = E(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				p = E(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function E(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function v(e) {
				var t, n = (e = e || {}).settings,
					p = this.context,
					E = (0, m.default)(p).getInstance(),
					v = void 0;

				function y() {
					E.trigger(_.default.METRICS_CHANGED)
				}

				function T(e) {
					E.trigger(_.default.METRIC_CHANGED, {
						mediaType: e
					}), y()
				}

				function b(e, t, n) {
					E.trigger(_.default.METRIC_UPDATED, {
						mediaType: e,
						metric: t,
						value: n
					}), T(e)
				}

				function S(e, t, n) {
					E.trigger(_.default.METRIC_ADDED, {
						mediaType: e,
						metric: t,
						value: n
					}), T(e)
				}

				function A(e, t) {
					var n = null;
					return e ? (v.hasOwnProperty(e) ? n = v[e] : t || (n = new i.default, v[e] = n), n) : n
				}

				function I(e, t, r) {
					var s = A(e);
					null !== s && (s[t].push(r), s[t].length > n.get().streaming.metricsMaxListDepth && s[t].shift())
				}

				function R(e, t, n) {
					I(e, t, n), S(e, t, n)
				}
				return t = {
					clearCurrentMetricsForType: function(e) {
						delete v[e], T(e)
					},
					clearAllCurrentMetrics: function() {
						v = {}, y()
					},
					getMetricsFor: A,
					addHttpRequest: function e(t, n, r, i, o, u, l, d, c, f, h, m, g, _, p) {
						var E = new a.HTTPRequest;
						u && u !== i && (e(t, null, r, i, o, null, null, d, c, null, null, null, g, null, null), E.actualurl = u), E.tcpid = n, E.type = r, E.url = i, E.range = d, E.trequest = c, E.tresponse = f, E.responsecode = m, E._tfinish = h, E._stream = t, E._mediaduration = g, E._quality = o, E._responseHeaders = _, E._serviceLocation = l, p ? p.forEach((function(e) {
							! function(e, t, n, r) {
								var s = new a.HTTPRequestTrace;
								s.s = t, s.d = n, s.b = r, e.trace.push(s), e.interval || (e.interval = 0), e.interval += n
							}(E, e.s, e.d, e.b)
						})) : (delete E.interval, delete E.trace), R(t, s.default.HTTP_REQUEST, E)
					},
					addRepresentationSwitch: function(e, t, n, r, i) {
						var a = new o.default;
						a.t = t, a.mt = n, a.to = r, i ? a.lto = i : delete a.lto, R(e, s.default.TRACK_SWITCH, a)
					},
					addBufferLevel: function(e, t, n) {
						var r = new u.default;
						r.t = t, r.level = n, R(e, s.default.BUFFER_LEVEL, r)
					},
					addBufferState: function(e, t, n) {
						var r = new l.default;
						r.target = n, r.state = t, R(e, s.default.BUFFER_STATE, r)
					},
					addDVRInfo: function(e, t, n, r) {
						var i = new d.default;
						i.time = t, i.range = r, i.manifestInfo = n, R(e, s.default.DVR_INFO, i)
					},
					addDroppedFrames: function(e, t) {
						var n = new c.default,
							r = A(e).DroppedFrames;
						t && (n.time = t.creationTime, n.droppedFrames = t.droppedVideoFrames, r.length > 0 && r[r.length - 1] == n || R(e, s.default.DROPPED_FRAMES, n))
					},
					addSchedulingInfo: function(e, t, n, r, i, a, o, u, l) {
						var d = new h.default;
						d.mediaType = e, d.t = t, d.type = n, d.startTime = r, d.availabilityStartTime = i, d.duration = a, d.quality = o, d.range = u, d.state = l, R(e, s.default.SCHEDULING_INFO, d)
					},
					addRequestsQueue: function(e, t, n) {
						var r = new g.default;
						r.loadingRequests = t, r.executedRequests = n, A(e).RequestsQueue = r, S(e, s.default.REQUESTS_QUEUE, r)
					},
					addManifestUpdate: function(e, t, n, i, a, o, u, l, d, c) {
						var h = new f.ManifestUpdate;
						h.mediaType = e, h.type = t, h.requestTime = n, h.fetchTime = i, h.availabilityStartTime = a, h.presentationStartTime = o, h.clientTimeOffset = u, h.currentTime = l, h.buffered = d, h.latency = c, I(r.default.STREAM, s.default.MANIFEST_UPDATE, h), S(e, s.default.MANIFEST_UPDATE, h)
					},
					updateManifestUpdateInfo: function(e, t) {
						if (e) {
							for (var n in t) e[n] = t[n];
							b(e.mediaType, s.default.MANIFEST_UPDATE, e)
						}
					},
					addManifestUpdateStreamInfo: function(e, t, n, r, i) {
						if (e) {
							var a = new f.ManifestUpdateStreamInfo;
							a.id = t, a.index = n, a.start = r, a.duration = i, e.streamInfo.push(a), b(e.mediaType, s.default.MANIFEST_UPDATE_STREAM_INFO, e)
						}
					},
					addManifestUpdateRepresentationInfo: function(e, t, n, r, i, a, o, u) {
						if (e && e.representationInfo) {
							var l = new f.ManifestUpdateRepresentationInfo;
							l.id = t, l.index = n, l.streamIndex = r, l.mediaType = i, l.startNumber = o, l.fragmentInfoType = u, l.presentationTimeOffset = a, e.representationInfo.push(l), b(e.mediaType, s.default.MANIFEST_UPDATE_TRACK_INFO, e)
						}
					},
					addPlayList: function(e) {
						e.trace && Array.isArray(e.trace) ? e.trace.forEach((function(e) {
							e.hasOwnProperty("subreplevel") && !e.subreplevel && delete e.subreplevel
						})) : delete e.trace, R(r.default.STREAM, s.default.PLAY_LIST, e)
					},
					addDVBErrors: function(e) {
						R(r.default.STREAM, s.default.DVB_ERRORS, e)
					}
				}, v = {}, t
			}
			v.__dashjs_factory_name = "MetricsModel", t.default = p.default.getSingletonFactory(v)
		},
		"./node_modules/dashjs/build/es5/src/streaming/models/URIFragmentModel.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/streaming/vo/URIFragmentData.js")),
				s = i(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function a() {
				var e = void 0;
				return {
					initialize: function(t) {
						if (e = new r.default, !t) return null;
						var n = t.indexOf("#");
						if (-1 !== n)
							for (var s = t.substr(n + 1).split("&"), i = 0, a = s.length; i < a; ++i) {
								var o = s[i],
									u = o.indexOf("=");
								if (-1 !== u) {
									var l = o.substring(0, u);
									e.hasOwnProperty(l) && (e[l] = o.substr(u + 1))
								}
							}
					},
					getURIFragmentData: function() {
						return e
					}
				}
			}
			a.__dashjs_factory_name = "URIFragmentModel", t.default = s.default.getSingletonFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/models/VideoModel.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = o(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = o(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				i = o(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				a = o(n("./node_modules/dashjs/build/es5/src/core/Debug.js"));

			function o(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function u() {
				var e = void 0,
					t = void 0,
					n = void 0,
					r = void 0,
					o = void 0,
					u = "element is not video or audio DOM type!",
					l = this.context,
					d = (0, s.default)(l).getInstance(),
					c = [];

				function f() {
					n && (n.playbackRate = o || 1, n.removeEventListener("canplay", f))
				}

				function h(e) {
					n && (n.readyState <= 2 && e > 0 ? n.addEventListener("canplay", f) : n.playbackRate = e)
				}

				function m() {
					return c.length > 0
				}

				function g(e) {
					var t = c.indexOf(e),
						r = void 0;
					null !== e && (-1 !== t && c.splice(t, 1), n && !1 === m() && 0 === n.playbackRate && (h(o || 1), n.paused || ((r = document.createEvent("Event")).initEvent("playing", !0, !1), n.dispatchEvent(r))))
				}

				function _() {
					if (n && m() && 0 === n.playbackRate) {
						var e = document.createEvent("Event");
						e.initEvent("waiting", !0, !1), n.dispatchEvent(e)
					}
				}

				function p() {
					return n ? n.buffered : null
				}

				function E(e, t, r, s, i) {
					if (n)
						for (var a = 0; a < n.textTracks.length; a++)
							if (n.textTracks[a].kind === e && (!t || n.textTracks[a].label == t) && n.textTracks[a].language === r && n.textTracks[a].isTTML === s && n.textTracks[a].isEmbedded === i) return n.textTracks[a];
					return null
				}
				return e = {
					initialize: function() {
						d.on(i.default.PLAYBACK_PLAYING, _, this)
					},
					setCurrentTime: function(e, t) {
						if (n) {
							if (n.currentTime == e) return;
							try {
								e = t ? function(e) {
									var t = p(),
										n = e,
										r = 9999999999;
									if (t)
										for (var s = 0; s < t.length; s++) {
											var i = t.start(s),
												a = t.end(s),
												o = Math.abs(i - e),
												u = Math.abs(a - e);
											if (e >= i && e <= a) return e;
											o < r && (r = o, n = i), u < r && (r = u, n = a)
										}
									return n
								}(e) : e, n.currentTime = e
							} catch (r) {
								0 === n.readyState && r.code === r.INVALID_STATE_ERR && setTimeout((function() {
									n.currentTime = e
								}), 400)
							}
						}
					},
					play: function() {
						if (n) {
							n.autoplay = !0;
							var e = n.play();
							e && e.catch && "undefined" != typeof Promise && e.catch((function(e) {
								"NotAllowedError" === e.name && d.trigger(i.default.PLAYBACK_NOT_ALLOWED), t.warn("Caught pending play exception - continuing (" + e + ")")
							}))
						}
					},
					isPaused: function() {
						return n ? n.paused : null
					},
					pause: function() {
						n && (n.pause(), n.autoplay = !1)
					},
					isStalled: m,
					isSeeking: function() {
						return n ? n.seeking : null
					},
					getTime: function() {
						return n ? n.currentTime : null
					},
					getPlaybackRate: function() {
						return n ? n.playbackRate : null
					},
					setPlaybackRate: h,
					getPlayedRanges: function() {
						return n ? n.played : null
					},
					getEnded: function() {
						return n ? n.ended : null
					},
					setStallState: function(e, t) {
						! function(e, t) {
							t ? function(e) {
								var t = void 0;
								if (null === e || !n || n.seeking || -1 !== c.indexOf(e)) return;
								c.push(e), n && 1 === c.length && ((t = document.createEvent("Event")).initEvent("waiting", !0, !1), o = n.playbackRate, h(0), n.dispatchEvent(t))
							}(e) : g(e)
						}(e, t)
					},
					getElement: function() {
						return n
					},
					setElement: function(e) {
						if (!(null == e || e && /^(VIDEO|AUDIO)$/i.test(e.nodeName))) throw u;
						(n = e) && (n.preload = "auto")
					},
					setSource: function(e) {
						n && (e ? n.src = e : (n.removeAttribute("src"), n.load()))
					},
					getSource: function() {
						return n ? n.src : null
					},
					getTTMLRenderingDiv: function() {
						return r
					},
					setTTMLRenderingDiv: function(e) {
						(r = e).style.position = "absolute", r.style.display = "flex", r.style.overflow = "hidden", r.style.pointerEvents = "none", r.style.top = 0, r.style.left = 0
					},
					getPlaybackQuality: function() {
						if (!n) return null;
						var e = "webkitDroppedFrameCount" in n && "webkitDecodedFrameCount" in n,
							t = null;
						return "getVideoPlaybackQuality" in n ? t = n.getVideoPlaybackQuality() : e && (t = {
							droppedVideoFrames: n.webkitDroppedFrameCount,
							totalVideoFrames: n.webkitDroppedFrameCount + n.webkitDecodedFrameCount,
							creationTime: new Date
						}), t
					},
					addEventListener: function(e, t) {
						n && n.addEventListener(e, t)
					},
					removeEventListener: function(e, t) {
						n && n.removeEventListener(e, t)
					},
					getReadyState: function() {
						return n ? n.readyState : NaN
					},
					getBufferRange: p,
					getClientWidth: function() {
						return n ? n.clientWidth : NaN
					},
					getClientHeight: function() {
						return n ? n.clientHeight : NaN
					},
					getTextTracks: function() {
						return n ? n.textTracks : []
					},
					getTextTrack: E,
					addTextTrack: function(e, t, r, s, i) {
						if (!n) return null;
						var a = E(e, t, r, s, i);
						return a || ((a = n.addTextTrack(e, t, r)).isEmbedded = i, a.isTTML = s), a
					},
					appendChild: function(e) {
						n && (n.appendChild(e), void 0 !== e.isTTML && (n.textTracks[n.textTracks.length - 1].isTTML = e.isTTML, n.textTracks[n.textTracks.length - 1].isEmbedded = e.isEmbedded))
					},
					removeChild: function(e) {
						n && n.removeChild(e)
					},
					getVideoWidth: function() {
						return n ? n.videoWidth : NaN
					},
					getVideoHeight: function() {
						return n ? n.videoHeight : NaN
					},
					getVideoRelativeOffsetTop: function() {
						var e = n.parentNode.host || n.parentNode;
						return e ? n.getBoundingClientRect().top - e.getBoundingClientRect().top : NaN
					},
					getVideoRelativeOffsetLeft: function() {
						var e = n.parentNode.host || n.parentNode;
						return e ? n.getBoundingClientRect().left - e.getBoundingClientRect().left : NaN
					},
					reset: function() {
						d.off(i.default.PLAYBACK_PLAYING, _, this)
					}
				}, t = (0, a.default)(l).getInstance().getLogger(e), e
			}
			u.__dashjs_factory_name = "VideoModel", t.default = r.default.getSingletonFactory(u)
		},
		"./node_modules/dashjs/build/es5/src/streaming/net/FetchLoader.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = a(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = a(n("./node_modules/dashjs/build/es5/src/core/Settings.js")),
				i = a(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js"));

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function o(e) {
				e = e || {};
				var t = this.context,
					n = e.requestModifier,
					r = e.boxParser,
					a = (0, s.default)(t).getInstance();

				function o(e, t) {
					e.reader.read().then(t).catch((function(t) {
						e.onerror && 200 === e.response.status && e.onerror(t)
					}))
				}

				function u(e, t, n, r, s) {
					switch (e) {
						case i.default.ABR_FETCH_THROUGHPUT_CALCULATION_MOOF_PARSING:
							return function(e, t) {
								try {
									var n, r;
									n = e.filter((function(t, n) {
										return n > 0 && n < e.length - 1
									})), r = t.filter((function(e, n) {
										return n > 0 && n < t.length - 1
									}));
									var s = 0;
									if (n.length > 1) {
										for (var i = 0; i < n.length; i++)
											if (n[i] && r[i]) {
												var a = r[i].ts - n[i].ts;
												s += a
											} return s
									}
									return null
								} catch (o) {
									return null
								}
							}(t, n);
						case i.default.ABR_FETCH_THROUGHPUT_CALCULATION_DOWNLOADED_DATA:
						default:
							return l(r, s)
					}
				}

				function l(e, t) {
					try {
						if ((e = e.filter((function(n) {
								return n.bytes > t / 4 / e.length
							}))).length > 1) {
							var n = 0,
								r = (e[e.length - 1].ts - e[0].ts) / e.length;
							return e.forEach((function(t, s) {
								var i = e[s + 1];
								if (i) {
									var a = i.ts - t.ts;
									n += a < r ? a : 0
								}
							})), n
						}
						return null
					} catch (s) {
						return null
					}
				}
				return {
					load: function(e) {
						var t = new Date,
							s = e.request,
							l = new Headers;
						s.range && l.append("Range", "bytes=" + s.range), s.requestStartDate || (s.requestStartDate = t), n && n.modifyRequestHeader({
							setRequestHeader: function(e, t) {
								l.append(e, t)
							}
						});
						var d = void 0;
						"function" == typeof window.AbortController && (d = new AbortController, e.abortController = d, d.signal.onabort = e.onabort);
						var c = {
							method: e.method,
							headers: l,
							credentials: e.withCredentials ? "include" : void 0,
							signal: d ? d.signal : void 0
						};
						fetch(e.url, c).then((function(t) {
							e.response || (e.response = {}), e.response.status = t.status, e.response.statusText = t.statusText, e.response.responseURL = t.url, t.ok || e.onerror();
							var n = "",
								s = !0,
								l = !1,
								d = void 0;
							try {
								for (var c, f = t.headers.keys()[Symbol.iterator](); !(s = (c = f.next()).done); s = !0) {
									var h = c.value;
									n += h + ": " + t.headers.get(h) + "\r\n"
								}
							} catch (A) {
								l = !0, d = A
							} finally {
								try {
									!s && f.return && f.return()
								} finally {
									if (l) throw d
								}
							}
							if (e.response.responseHeaders = n, !t.body) return t.arrayBuffer().then((function(t) {
								e.response.response = t;
								var n = {
									loaded: t.byteLength,
									total: t.byteLength,
									stream: !1
								};
								e.progress(n), e.onload(), e.onend()
							}));
							var m = parseInt(t.headers.get("Content-Length"), 10),
								g = 0,
								_ = !1,
								p = new Uint8Array,
								E = 0;
							e.reader = t.body.getReader();
							var v = [],
								y = [],
								T = [],
								b = !0,
								S = a.get().streaming.abr.fetchThroughputCalculationMode;
							o(e, (function t(n) {
								var s = n.value;
								if (n.done) return p && (e.progress({
									loaded: g,
									total: isNaN(m) ? g : m,
									lengthComputable: !0,
									time: u(S, y, T, v, g),
									stream: !0
								}), e.response.response = p.buffer), e.onload(), void e.onend();
								if (s && s.length > 0) {
									if (p = function(e, t) {
											if (0 === e.length) return t;
											var n = new Uint8Array(e.length + t.length);
											return n.set(e), n.set(t, e.length), n
										}(p, s), g += s.length, v.push({
											ts: Date.now(),
											bytes: s.length
										}), S === i.default.ABR_FETCH_THROUGHPUT_CALCULATION_MOOF_PARSING && b) r.findLastTopIsoBoxCompleted(["moof"], p, E).found && (b = !1, y.push({
										ts: performance.now(),
										bytes: s.length
									}));
									var a = r.findLastTopIsoBoxCompleted(["moov", "mdat"], p, E);
									if (a.found) {
										var l = a.lastCompletedOffset + a.size;
										S === i.default.ABR_FETCH_THROUGHPUT_CALCULATION_MOOF_PARSING && (b = !0, T.push({
											ts: performance.now(),
											bytes: p.length
										}));
										var d = void 0;
										l === p.length ? (d = p, p = new Uint8Array) : (d = new Uint8Array(p.subarray(0, l)), p = p.subarray(l)), e.progress({
											data: d.buffer,
											lengthComputable: !1,
											noTrace: !0
										}), E = 0
									} else E = a.lastCompletedOffset, _ || (e.progress({
										lengthComputable: !1,
										noTrace: !0
									}), _ = !0)
								}
								o(e, t)
							}))
						})).catch((function(t) {
							e.onerror && e.onerror(t)
						}))
					},
					abort: function(e) {
						if (e.abortController) e.abortController.abort();
						else if (e.reader) try {
							e.reader.cancel(), e.onabort()
						} catch (t) {}
					},
					calculateDownloadedTime: u
				}
			}
			o.__dashjs_factory_name = "FetchLoader";
			var u = r.default.getClassFactory(o);
			t.default = u
		},
		"./node_modules/dashjs/build/es5/src/streaming/net/HTTPLoader.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = c(n("./node_modules/dashjs/build/es5/src/streaming/net/XHRLoader.js")),
				s = c(n("./node_modules/dashjs/build/es5/src/streaming/net/FetchLoader.js")),
				i = n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js"),
				a = c(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				o = c(n("./node_modules/dashjs/build/es5/src/streaming/vo/DashJSError.js")),
				u = c(n("./node_modules/dashjs/build/es5/src/streaming/models/CmcdModel.js")),
				l = c(n("./node_modules/dashjs/build/es5/src/core/Utils.js")),
				d = c(n("./node_modules/dashjs/build/es5/src/core/Debug.js"));

			function c(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function f(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function h(e) {
				e = e || {};
				var t, n = this.context,
					a = e.errHandler,
					c = e.dashMetrics,
					h = e.mediaPlayerModel,
					m = e.requestModifier,
					g = e.boxParser,
					_ = e.useFetch || !1,
					p = e.errors,
					E = e.requestTimeout || 0,
					v = void 0,
					y = void 0,
					T = void 0,
					b = void 0,
					S = void 0,
					A = void 0,
					I = void 0;

				function R(e, t) {
					var u = e.request,
						d = [],
						f = !0,
						p = !0,
						v = new Date,
						M = v,
						C = 0,
						D = void 0;
					if (!m || !c || !a) throw new Error("config object is not correct or missing");
					var N = function(e) {
							p = !1, u.requestStartDate = v, u.requestEndDate = new Date, u.firstByteDate = u.firstByteDate || v, u.checkExistenceOnly || (c.addHttpRequest(u, D.response ? D.response.responseURL : null, D.response ? D.response.status : null, D.response && D.response.getAllResponseHeaders ? D.response.getAllResponseHeaders() : D.response ? D.response.responseHeaders : [], e ? d : null), u.type === i.HTTPRequest.MPD_TYPE && c.addManifestUpdate(u.type, u.requestStartDate, u.requestEndDate))
						},
						O = function() {
							if (-1 !== y.indexOf(D) && (y.splice(y.indexOf(D), 1), p))
								if (N(!1), t > 0) {
									t--;
									var n = {
										config: e
									};
									b.push(n), n.timeout = setTimeout((function() {
										-1 !== b.indexOf(n) && (b.splice(b.indexOf(n), 1), R(e, t))
									}), h.getRetryIntervalsForType(u.type))
								} else a.error(new o.default(S[u.type], u.url + " is not available", {
									request: u,
									response: D.response
								})), e.error && e.error(u, "error", D.response.statusText), e.complete && e.complete(u, D.response.statusText)
						},
						j = void 0;
					j = _ && window.fetch && "arraybuffer" === u.responseType && u.type === i.HTTPRequest.MEDIA_SEGMENT_TYPE ? (0, s.default)(n).create({
						requestModifier: m,
						boxParser: g
					}) : (0, r.default)(n).create({
						requestModifier: m
					});
					var w = m.modifyRequestURL(u.url),
						P = function(e) {
							try {
								var t = [],
									n = A.getQueryParameter(e);
								return n && t.push(n), t
							} catch (r) {
								return []
							}
						}(u);
					w = l.default.addAditionalQueryParameterToUrl(w, P);
					var L = u.checkExistenceOnly ? i.HTTPRequest.HEAD : i.HTTPRequest.GET,
						F = h.getXHRWithCredentialsForType(u.type);
					D = {
						url: w,
						method: L,
						withCredentials: F,
						request: u,
						onload: function() {
							D.response.status >= 200 && D.response.status <= 299 && (N(!0), e.success && e.success(D.response.response, D.response.statusText, D.response.responseURL), e.complete && e.complete(u, D.response.statusText))
						},
						onend: O,
						onerror: O,
						progress: function(t) {
							var n = new Date;
							f && (f = !1, (!t.lengthComputable || t.lengthComputable && t.total !== t.loaded) && (u.firstByteDate = n)), t.lengthComputable && (u.bytesLoaded = t.loaded, u.bytesTotal = t.total), t.noTrace || (d.push({
								s: M,
								d: t.time ? t.time : n.getTime() - M.getTime(),
								b: [t.loaded ? t.loaded - C : 0]
							}), M = n, C = t.loaded), e.progress && t && e.progress(t)
						},
						onabort: function() {
							e.abort && e.abort(u)
						},
						ontimeout: function(e) {
							var t = void 0;
							if (e.lengthComputable) {
								var n = e.loaded / e.total * 100;
								t = "Request timeout: loaded: " + e.loaded + ", out of: " + e.total + " : " + n.toFixed(3) + "% Completed"
							} else t = "Request timeout: non-computable download size";
							I.warn(t)
						},
						loader: j,
						timeout: E
					};
					var x = (new Date).getTime();
					if (isNaN(u.delayLoadingTime) || x >= u.delayLoadingTime) y.push(D), j.load(D);
					else {
						var U = {
							httpRequest: D
						};
						T.push(U), U.delayTimeout = setTimeout((function() {
							if (-1 !== T.indexOf(U)) {
								T.splice(T.indexOf(U), 1);
								try {
									v = new Date, M = v, y.push(U.httpRequest), j.load(U.httpRequest)
								} catch (e) {
									U.httpRequest.onerror()
								}
							}
						}), u.delayLoadingTime - x)
					}
				}
				return v = {
					load: function(e) {
						e.request ? R(e, h.getRetryAttemptsForType(e.request.type)) : e.error && e.error(e.request, "error")
					},
					abort: function() {
						b.forEach((function(e) {
							clearTimeout(e.timeout), e.config.request && e.config.abort && e.config.abort(e.config.request)
						})), b = [], T.forEach((function(e) {
							return clearTimeout(e.delayTimeout)
						})), T = [], y.forEach((function(e) {
							e.onloadend = e.onerror = e.onprogress = void 0, e.loader.abort(e)
						})), y = []
					}
				}, I = (0, d.default)(n).getInstance().getLogger(v), y = [], T = [], b = [], A = (0, u.default)(n).getInstance(), f(t = {}, i.HTTPRequest.MPD_TYPE, p.DOWNLOAD_ERROR_ID_MANIFEST_CODE), f(t, i.HTTPRequest.XLINK_EXPANSION_TYPE, p.DOWNLOAD_ERROR_ID_XLINK_CODE), f(t, i.HTTPRequest.INIT_SEGMENT_TYPE, p.DOWNLOAD_ERROR_ID_INITIALIZATION_CODE), f(t, i.HTTPRequest.MEDIA_SEGMENT_TYPE, p.DOWNLOAD_ERROR_ID_CONTENT_CODE), f(t, i.HTTPRequest.INDEX_SEGMENT_TYPE, p.DOWNLOAD_ERROR_ID_CONTENT_CODE), f(t, i.HTTPRequest.BITSTREAM_SWITCHING_SEGMENT_TYPE, p.DOWNLOAD_ERROR_ID_CONTENT_CODE), f(t, i.HTTPRequest.OTHER_TYPE, p.DOWNLOAD_ERROR_ID_CONTENT_CODE), S = t, v
			}
			h.__dashjs_factory_name = "HTTPLoader";
			var m = a.default.getClassFactory(h);
			t.default = m
		},
		"./node_modules/dashjs/build/es5/src/streaming/net/SchemeLoaderFactory.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = i(n("./node_modules/dashjs/build/es5/src/streaming/net/HTTPLoader.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function a() {
				var e = void 0;

				function t() {
					e = {}
				}

				function n() {
					t()
				}
				return n(), {
					getLoader: function(t) {
						for (var n in e)
							if (e.hasOwnProperty(n) && t.startsWith(n)) return e[n];
						return s.default
					},
					registerLoader: function(t, n) {
						e[t] = n
					},
					unregisterLoader: function(t) {
						e[t] && delete e[t]
					},
					unregisterAllLoader: t,
					reset: n
				}
			}
			a.__dashjs_factory_name = "SchemeLoaderFactory";
			var o = r.default.getSingletonFactory(a);
			t.default = o
		},
		"./node_modules/dashjs/build/es5/src/streaming/net/URLLoader.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = i(n("./node_modules/dashjs/build/es5/src/streaming/net/SchemeLoaderFactory.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function a(e) {
				e = e || {};
				var t = this.context,
					n = void 0,
					r = void 0;
				return n = (0, s.default)(t).getInstance(), {
					load: function(s) {
						var i = n.getLoader(s && s.request ? s.request.url : null);
						(r = i(t).create({
							errHandler: e.errHandler,
							mediaPlayerModel: e.mediaPlayerModel,
							requestModifier: e.requestModifier,
							useFetch: e.useFetch || null,
							dashMetrics: e.dashMetrics,
							boxParser: e.boxParser ? e.boxParser : null,
							constants: e.constants ? e.constants : null,
							dashConstants: e.dashConstants ? e.dashConstants : null,
							urlUtils: e.urlUtils ? e.urlUtils : null,
							requestTimeout: isNaN(e.requestTimeout) ? 0 : e.requestTimeout,
							errors: e.errors
						})).load(s)
					},
					abort: function() {
						r && r.abort()
					}
				}
			}
			a.__dashjs_factory_name = "URLLoader";
			var o = r.default.getClassFactory(a);
			t.default = o
		},
		"./node_modules/dashjs/build/es5/src/streaming/net/XHRLoader.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				};

			function a(e) {
				var t = (e = e || {}).requestModifier;
				return {
					load: function(e) {
						var n = new Date,
							r = e.request,
							s = new XMLHttpRequest;
						s.open(e.method, e.url, !0), r.responseType && (s.responseType = r.responseType), r.range && s.setRequestHeader("Range", "bytes=" + r.range), r.requestStartDate || (r.requestStartDate = n), t && (s = t.modifyRequestHeader(s)), s.withCredentials = e.withCredentials, s.onload = e.onload, s.onloadend = e.onend, s.onerror = e.onerror, s.onprogress = e.progress, s.onabort = e.onabort, s.ontimeout = e.ontimeout, s.timeout = e.timeout, s.send(), e.response = s
					},
					abort: function(e) {
						var t = e.response;
						t.onloadend = t.onerror = t.onprogress = void 0, t.abort()
					}
				}
			}
			a.__dashjs_factory_name = "XHRLoader";
			var o = i.default.getClassFactory(a);
			t.default = o
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/CommonEncryption.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}();
			var s = function() {
				function e() {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e)
				}
				return r(e, null, [{
					key: "findCencContentProtection",
					value: function(e) {
						for (var t = null, n = 0; n < e.length; ++n) {
							var r = e[n];
							"urn:mpeg:dash:mp4protection:2011" !== r.schemeIdUri.toLowerCase() || "cenc" !== r.value.toLowerCase() && "cbcs" !== r.value.toLowerCase() || (t = r)
						}
						return t
					}
				}, {
					key: "getPSSHData",
					value: function(e) {
						var t = 8,
							n = new DataView(e),
							r = n.getUint8(t);
						return t += 20, r > 0 && (t += 4 + 16 * n.getUint32(t)), t += 4, e.slice(t)
					}
				}, {
					key: "getPSSHForKeySystem",
					value: function(t, n) {
						var r = e.parsePSSHList(n);
						return t && r.hasOwnProperty(t.uuid.toLowerCase()) ? r[t.uuid.toLowerCase()] : null
					}
				}, {
					key: "parseInitDataFromContentProtection",
					value: function(e, t) {
						return "pssh" in e ? (e.pssh.__text = e.pssh.__text.replace(/\r?\n|\r/g, "").replace(/\s+/g, ""), t.decodeArray(e.pssh.__text).buffer) : null
					}
				}, {
					key: "parsePSSHList",
					value: function(e) {
						if (null == e) return [];
						for (var t = new DataView(e.buffer || e), n = {}, r = 0;;) {
							var s, i, a = void 0,
								o = r;
							if (r >= t.buffer.byteLength) break;
							if (s = r + t.getUint32(r), r += 4, 1886614376 === t.getUint32(r))
								if (r += 4, 0 === (i = t.getUint8(r)) || 1 === i) {
									r++, r += 3, a = "";
									var u = void 0,
										l = void 0;
									for (u = 0; u < 4; u++) a += 1 === (l = t.getUint8(r + u).toString(16)).length ? "0" + l : l;
									for (r += 4, a += "-", u = 0; u < 2; u++) a += 1 === (l = t.getUint8(r + u).toString(16)).length ? "0" + l : l;
									for (r += 2, a += "-", u = 0; u < 2; u++) a += 1 === (l = t.getUint8(r + u).toString(16)).length ? "0" + l : l;
									for (r += 2, a += "-", u = 0; u < 2; u++) a += 1 === (l = t.getUint8(r + u).toString(16)).length ? "0" + l : l;
									for (r += 2, a += "-", u = 0; u < 6; u++) a += 1 === (l = t.getUint8(r + u).toString(16)).length ? "0" + l : l;
									r += 6, a = a.toLowerCase(), t.getUint32(r), r += 4, n[a] = t.buffer.slice(o, s), r = s
								} else r = s;
							else r = s
						}
						return n
					}
				}]), e
			}();
			t.default = s
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/Protection.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = d(n("./node_modules/dashjs/build/es5/src/streaming/protection/controllers/ProtectionController.js")),
				s = d(n("./node_modules/dashjs/build/es5/src/streaming/protection/controllers/ProtectionKeyController.js")),
				i = d(n("./node_modules/dashjs/build/es5/src/streaming/protection/ProtectionEvents.js")),
				a = d(n("./node_modules/dashjs/build/es5/src/streaming/protection/errors/ProtectionErrors.js")),
				o = d(n("./node_modules/dashjs/build/es5/src/streaming/protection/models/ProtectionModel_21Jan2015.js")),
				u = d(n("./node_modules/dashjs/build/es5/src/streaming/protection/models/ProtectionModel_3Feb2014.js")),
				l = d(n("./node_modules/dashjs/build/es5/src/streaming/protection/models/ProtectionModel_01b.js"));

			function d(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var c = [{
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
				var e = void 0,
					t = this.context;

				function n(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						if ("function" == typeof e[r[Object.keys(r)[0]]]) return r
					}
					return null
				}
				return e = {
					createProtectionSystem: function(i) {
						var a = null,
							d = (0, s.default)(t).getInstance();
						d.setConfig({
							debug: i.debug,
							BASE64: i.BASE64
						}), d.initialize();
						var h = function(r) {
							var s = r.debug,
								i = s.getLogger(e),
								a = r.eventBus,
								d = r.errHandler,
								h = r.videoModel ? r.videoModel.getElement() : null;
							return h && void 0 === h.onencrypted || h && void 0 === h.mediaKeys ? n(h, f) ? (i.info("EME detected on this user agent! (ProtectionModel_3Feb2014)"), (0, u.default)(t).create({
								debug: s,
								eventBus: a,
								events: r.events,
								api: n(h, f)
							})) : n(h, c) ? (i.info("EME detected on this user agent! (ProtectionModel_01b)"), (0, l.default)(t).create({
								debug: s,
								eventBus: a,
								errHandler: d,
								events: r.events,
								api: n(h, c)
							})) : (i.warn("No supported version of EME detected on this user agent! - Attempts to play encrypted content will fail!"), null) : (i.info("EME detected on this user agent! (ProtectionModel_21Jan2015)"), (0, o.default)(t).create({
								debug: s,
								eventBus: a,
								events: r.events
							}))
						}(i);
						return !a && h && (a = (0, r.default)(t).create({
							protectionModel: h,
							protectionKeyController: d,
							eventBus: i.eventBus,
							debug: i.debug,
							events: i.events,
							BASE64: i.BASE64,
							constants: i.constants
						}), i.capabilities.setEncryptedMediaSupported(!0)), a
					}
				}
			}
			h.__dashjs_factory_name = "Protection";
			var m = dashjs.FactoryMaker.getClassFactory(h);
			m.events = i.default, m.errors = a.default, dashjs.FactoryMaker.updateClassFactory(h.__dashjs_factory_name, m), t.default = m
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/ProtectionEvents.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/core/events/EventsBase.js");
			var i = new(function(e) {
				function t() {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					var e = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
					return e.INTERNAL_KEY_MESSAGE = "internalKeyMessage", e.INTERNAL_KEY_SYSTEM_SELECTED = "internalKeySystemSelected", e.INTERNAL_KEY_STATUS_CHANGED = "internalkeyStatusChanged", e.KEY_ADDED = "public_keyAdded", e.KEY_ERROR = "public_keyError", e.KEY_MESSAGE = "public_keyMessage", e.KEY_SESSION_CLOSED = "public_keySessionClosed", e.KEY_SESSION_CREATED = "public_keySessionCreated", e.KEY_SESSION_REMOVED = "public_keySessionRemoved", e.KEY_STATUSES_CHANGED = "public_keyStatusesChanged", e.KEY_SYSTEM_ACCESS_COMPLETE = "public_keySystemAccessComplete", e.KEY_SYSTEM_SELECTED = "public_keySystemSelected", e.LICENSE_REQUEST_COMPLETE = "public_licenseRequestComplete", e.LICENSE_REQUEST_SENDING = "public_licenseRequestSending", e.NEED_KEY = "needkey", e.PROTECTION_CREATED = "public_protectioncreated", e.PROTECTION_DESTROYED = "public_protectiondestroyed", e.SERVER_CERTIFICATE_UPDATED = "serverCertificateUpdated", e.TEARDOWN_COMPLETE = "protectionTeardownComplete", e.VIDEO_ELEMENT_SELECTED = "videoElementSelected", e
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
			}(((r = s) && r.__esModule ? r : {
				default: r
			}).default));
			t.default = i
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/controllers/ProtectionController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				s = l(n("./node_modules/dashjs/build/es5/src/streaming/protection/CommonEncryption.js")),
				i = l(n("./node_modules/dashjs/build/es5/src/streaming/protection/vo/MediaCapability.js")),
				a = l(n("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeySystemConfiguration.js")),
				o = l(n("./node_modules/dashjs/build/es5/src/streaming/protection/errors/ProtectionErrors.js")),
				u = l(n("./node_modules/dashjs/build/es5/src/streaming/vo/DashJSError.js"));

			function l(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var d = 5,
				c = 500,
				f = 3,
				h = 1e3,
				m = 8e3;

			function g(e) {
				var t = (e = e || {}).protectionKeyController,
					n = e.protectionModel,
					l = e.eventBus,
					g = e.events,
					_ = e.debug,
					p = e.BASE64,
					E = e.constants,
					v = [],
					y = void 0,
					T = void 0,
					b = void 0,
					S = void 0,
					A = void 0,
					I = void 0,
					R = void 0,
					M = void 0;

				function C() {
					if (!(l && l.hasOwnProperty("on") && t && t.hasOwnProperty("getSupportedKeySystemsFromContentProtection"))) throw new Error("Missing config parameter(s)")
				}

				function D(e, r) {
					var i = s.default.getPSSHForKeySystem(M, e),
						a = j(M);
					if (i) {
						for (var d = n.getAllInitData(), c = 0; c < d.length; c++)
							if (t.initDataEquals(i, d[c])) return void T.info("DRM: Ignoring initData because we have already seen it!");
						try {
							n.createKeySession(i, a, P(M), r)
						} catch (f) {
							l.trigger(g.KEY_SESSION_CREATED, {
								data: null,
								error: new u.default(o.default.KEY_SESSION_CREATED_ERROR_CODE, o.default.KEY_SESSION_CREATED_ERROR_MESSAGE + f.message)
							})
						}
					} else e ? n.createKeySession(e, a, P(M), r) : l.trigger(g.KEY_SESSION_CREATED, {
						data: null,
						error: new u.default(o.default.KEY_SESSION_CREATED_ERROR_CODE, o.default.KEY_SESSION_CREATED_ERROR_MESSAGE + "Selected key system is " + (M ? M.systemString : null) + ".  needkey/encrypted event contains no initData corresponding to that key system!")
					})
				}

				function N(e, t) {
					C(), n.loadKeySession(e, t, P(M))
				}

				function O(e) {
					C(), e ? (n.setMediaElement(e), l.on(g.NEED_KEY, B, this)) : null === e && (n.setMediaElement(e), l.off(g.NEED_KEY, B, this))
				}

				function j(e) {
					var t = null;
					if (e) {
						var n = e.systemString;
						A && (t = n in A ? A[n] : null)
					}
					return t
				}

				function w(e) {
					var t = j(e),
						n = [],
						r = [],
						s = t && t.audioRobustness && t.audioRobustness.length > 0 ? t.audioRobustness : R,
						o = t && t.videoRobustness && t.videoRobustness.length > 0 ? t.videoRobustness : R,
						u = P(e),
						l = t && t.distinctiveIdentifier ? t.distinctiveIdentifier : "optional",
						d = t && t.persistentState ? t.persistentState : "temporary" === u ? "optional" : "required";
					return S.forEach((function(e) {
						e.type === E.AUDIO ? n.push(new i.default(e.codec, s)) : e.type === E.VIDEO && r.push(new i.default(e.codec, o))
					})), new a.default(n, r, l, d, [u])
				}

				function P(e) {
					var t = j(e);
					return t && t.sessionType ? t.sessionType : I
				}

				function L(e, r) {
					var s = this,
						i = [];
					e = e.sort((function(t, n) {
						return (A && A[t.ks.systemString] && A[t.ks.systemString].priority >= 0 ? A[t.ks.systemString].priority : e.length) - (A && A[n.ks.systemString] && A[n.ks.systemString].priority >= 0 ? A[n.ks.systemString].priority : e.length)
					}));
					var a = void 0;
					if (M)
						for (a = 0; a < e.length; a++) {
							if (M === e[a].ks)
								if ("break" === function() {
										i.push({
											ks: e[a].ks,
											configs: [w(M)]
										});
										return l.on(g.KEY_SYSTEM_ACCESS_COMPLETE, (function n(i) {
											if (l.off(g.KEY_SYSTEM_ACCESS_COMPLETE, n, s), i.error) r || l.trigger(g.KEY_SYSTEM_SELECTED, {
												error: new u.default(o.default.KEY_SYSTEM_ACCESS_DENIED_ERROR_CODE, o.default.KEY_SYSTEM_ACCESS_DENIED_ERROR_MESSAGE + i.error)
											});
											else {
												T.info("DRM: KeySystem Access Granted"), l.trigger(g.KEY_SYSTEM_SELECTED, {
													data: i.data
												});
												var d = j(M);
												if (t.isClearKey(M) && d && d.hasOwnProperty("clearkeys")) {
													var c = {
														kids: Object.keys(d.clearkeys)
													};
													e[a].initData = (new TextEncoder).encode(JSON.stringify(c))
												}
												e[a].sessionId ? N(e[a].sessionId, e[a].initData) : e[a].initData && D(e[a].initData, e[a].cdmData)
											}
										}), s), n.requestKeySystemAccess(i), "break"
									}()) break
						} else if (void 0 === M) {
							M = null, b.push(e);
							for (var d = 0; d < e.length; d++) i.push({
								ks: e[d].ks,
								configs: [w(e[d].ks)]
							});
							var c = void 0,
								f = function e(t) {
									l.off(g.KEY_SYSTEM_ACCESS_COMPLETE, e, s), t.error ? (M = void 0, l.off(g.INTERNAL_KEY_SYSTEM_SELECTED, h, s), r || l.trigger(g.KEY_SYSTEM_SELECTED, {
										data: null,
										error: new u.default(o.default.KEY_SYSTEM_ACCESS_DENIED_ERROR_CODE, o.default.KEY_SYSTEM_ACCESS_DENIED_ERROR_MESSAGE + t.error)
									})) : (c = t.data, T.info("DRM: KeySystem Access Granted (" + c.keySystem.systemString + ")!  Selecting key system..."), n.selectKeySystem(c))
								},
								h = function e(i) {
									if (l.off(g.INTERNAL_KEY_SYSTEM_SELECTED, e, s), l.off(g.KEY_SYSTEM_ACCESS_COMPLETE, f, s), i.error) M = void 0, r || l.trigger(g.KEY_SYSTEM_SELECTED, {
										data: null,
										error: new u.default(o.default.KEY_SYSTEM_ACCESS_DENIED_ERROR_CODE, o.default.KEY_SYSTEM_ACCESS_DENIED_ERROR_MESSAGE + "Error selecting key system! -- " + i.error)
									});
									else {
										if (!n) return;
										M = n.getKeySystem(), l.trigger(g.KEY_SYSTEM_SELECTED, {
											data: c
										});
										var d = j(M);
										d && d.serverCertificate && d.serverCertificate.length > 0 && n.setServerCertificate(p.decodeArray(d.serverCertificate).buffer);
										for (var h = 0; h < b.length; h++)
											for (a = 0; a < b[h].length; a++)
												if (M === b[h][a].ks) {
													if (t.isClearKey(M) && d && d.hasOwnProperty("clearkeys")) {
														var m = {
															kids: Object.keys(d.clearkeys)
														};
														b[h][a].initData = (new TextEncoder).encode(JSON.stringify(m))
													}
													b[h][a].sessionId ? N(b[h][a].sessionId, b[h][a].initData) : null !== b[h][a].initData && D(b[h][a].initData, b[h][a].cdmData);
													break
												}
									}
								};
							l.on(g.INTERNAL_KEY_SYSTEM_SELECTED, h, s), l.on(g.KEY_SYSTEM_ACCESS_COMPLETE, f, s), n.requestKeySystemAccess(i)
						} else b.push(e)
				}

				function F(e, t) {
					l.trigger(g.LICENSE_REQUEST_COMPLETE, {
						data: e,
						error: t
					})
				}

				function x(e) {
					e.error ? l.trigger(g.KEY_STATUSES_CHANGED, {
						data: null,
						error: e.error
					}) : T.debug("DRM: key status = " + e.status)
				}

				function U(e) {
					T.debug("DRM: onKeyMessage");
					var i = e.data;
					l.trigger(g.KEY_MESSAGE, {
						data: i
					});
					var a = i.messageType ? i.messageType : "license-request",
						d = i.message,
						c = i.sessionToken,
						_ = j(M),
						p = M ? M.systemString : null,
						E = t.getLicenseServer(M, _, a),
						v = {
							sessionToken: c,
							messageType: a
						};
					if (d && 0 !== d.byteLength) {
						if (!E) return T.debug("DRM: License server request not required for this message (type = " + e.data.messageType + ").  Session ID = " + c.getSessionID()), void F(v);
						if (t.isClearKey(M)) {
							var y = t.processClearKeyLicenseRequest(M, _, d);
							if (y) return T.debug("DRM: ClearKey license request handled by application!"), F(v), void n.updateKeySession(c, y)
						}
						var b = null;
						if (_ && _.serverURL) {
							var A = _.serverURL;
							"string" == typeof A && "" !== A ? b = A : "object" === (void 0 === A ? "undefined" : r(A)) && A.hasOwnProperty(a) && (b = A[a])
						} else if (_ && _.laURL && "" !== _.laURL) b = _.laURL;
						else if (t.isClearKey(M)) b = M.getLicenseServerUrlFromMediaInfo(S);
						else {
							var I = s.default.getPSSHData(c.initData);
							(b = M.getLicenseServerURLFromInitData(I)) || (b = e.data.laURL)
						}
						if (b = E.getServerURLFromMessage(b, d, a)) {
							var R = {},
								C = !1,
								D = function(e) {
									if (e)
										for (var t in e) "authorization" === t.toLowerCase() && (C = !0), R[t] = e[t]
								};
							_ && D(_.httpRequestHeaders), D(M.getRequestHeadersFromMessage(d)), _ && "boolean" == typeof _.withCredentials && (C = _.withCredentials);
							var N = function(e, t, n, r) {
									var s = e.response ? E.getErrorResponse(e.response, n, r) : "NONE";
									F(t, new u.default(o.default.MEDIA_KEY_MESSAGE_LICENSER_ERROR_CODE, o.default.MEDIA_KEY_MESSAGE_LICENSER_ERROR_MESSAGE + n + ' update, XHR complete. status is "' + e.statusText + '" (' + e.status + "), readyState is " + e.readyState + ".  Response is " + s))
								},
								O = M.getLicenseRequestFromMessage(d),
								w = E.getHTTPMethod(a),
								P = E.getResponseType(p, a),
								L = _ && !isNaN(_.httpTimeout) ? _.httpTimeout : m,
								x = c.getSessionID() || null;
							! function e(t, n, r, s, i, a, o, u, d, c, f, m) {
								var _ = new XMLHttpRequest;
								_.open(r, t, !0);
								_.responseType = s;
								_.withCredentials = i;
								u > 0 && (_.timeout = u);
								for (var p in n) _.setRequestHeader(p, n[p]);
								var E = function() {
									o--, setTimeout((function() {
										e(t, n, r, s, i, a, o, u, d, c, f, m)
									}), h)
								};
								_.onload = function() {
									200 === this.status || o <= 0 ? d(this) : (T.warn("License request failed (" + this.status + "). Retrying it... Pending retries: " + o), E())
								};
								_.ontimeout = _.onerror = function() {
									o <= 0 ? f(this) : (T.warn("License request network request failed . Retrying it... Pending retries: " + o), E())
								};
								_.onabort = function() {
									c(this)
								};
								l.trigger(g.LICENSE_REQUEST_SENDING, {
									url: t,
									headers: n,
									payload: a,
									sessionId: m
								});
								_.send(a)
							}(b, R, w, P, C, O, f, L, (function(e) {
								if (n)
									if (200 === e.status) {
										var t = E.getLicenseMessage(e.response, p, a);
										null !== t ? (F(v), n.updateKeySession(c, t)) : N(e, v, p, a)
									} else N(e, v, p, a)
							}), (function(e) {
								F(v, new u.default(o.default.MEDIA_KEY_MESSAGE_LICENSER_ERROR_CODE, o.default.MEDIA_KEY_MESSAGE_LICENSER_ERROR_MESSAGE + p + ' update, XHR aborted. status is "' + e.statusText + '" (' + e.status + "), readyState is " + e.readyState))
							}), (function(e) {
								F(v, new u.default(o.default.MEDIA_KEY_MESSAGE_LICENSER_ERROR_CODE, o.default.MEDIA_KEY_MESSAGE_LICENSER_ERROR_MESSAGE + p + ' update, XHR error. status is "' + e.statusText + '" (' + e.status + "), readyState is " + e.readyState))
							}), x)
						} else F(v, new u.default(o.default.MEDIA_KEY_MESSAGE_NO_LICENSE_SERVER_URL_ERROR_CODE, o.default.MEDIA_KEY_MESSAGE_NO_LICENSE_SERVER_URL_ERROR_MESSAGE))
					} else F(v, new u.default(o.default.MEDIA_KEY_MESSAGE_NO_CHALLENGE_ERROR_CODE, o.default.MEDIA_KEY_MESSAGE_NO_CHALLENGE_ERROR_MESSAGE))
				}

				function B(e, r) {
					if (T.debug("DRM: onNeedKey"), "cenc" === e.key.initDataType)
						if (0 === S.length && (T.warn("DRM: onNeedKey called before initializeForMedia, wait until initialized"), (r = void 0 === r ? 1 : r + 1) < d)) v.push(setTimeout((function() {
							B(e, r)
						}), c));
						else {
							var i = e.key.initData;
							if (ArrayBuffer.isView(i) && (i = i.buffer), M) {
								var a = s.default.getPSSHForKeySystem(M, i);
								if (a)
									for (var o = n.getAllInitData(), u = 0; u < o.length; u++)
										if (t.initDataEquals(a, o[u])) return void T.warn("DRM: Ignoring initData because we have already seen it!")
							}
							T.debug("DRM: initData:", String.fromCharCode.apply(null, new Uint8Array(i)));
							var l = t.getSupportedKeySystems(i, A);
							0 !== l.length ? L(l, !1) : T.debug("DRM: Received needkey event with initData, but we don't support any of the key systems!")
						}
					else T.warn("DRM:  Only 'cenc' initData is supported!  Ignoring initData of type: " + e.key.initDataType)
				}
				return y = {
					initializeForMedia: function(e) {
						if (!e) throw new Error("mediaInfo can not be null or undefined");
						C(), l.on(g.INTERNAL_KEY_MESSAGE, U, this), l.on(g.INTERNAL_KEY_STATUS_CHANGED, x, this), S.push(e);
						var n = t.getSupportedKeySystemsFromContentProtection(e.contentProtection);
						n && n.length > 0 && L(n, !0)
					},
					createKeySession: D,
					loadKeySession: N,
					removeKeySession: function(e) {
						C(), n.removeKeySession(e)
					},
					closeKeySession: function(e) {
						C(), n.closeKeySession(e)
					},
					setServerCertificate: function(e) {
						C(), n.setServerCertificate(e)
					},
					setMediaElement: O,
					setSessionType: function(e) {
						I = e
					},
					setRobustnessLevel: function(e) {
						R = e
					},
					setProtectionData: function(e) {
						A = e, t.setProtectionData(e)
					},
					getSupportedKeySystemsFromContentProtection: function(e) {
						return C(), t.getSupportedKeySystemsFromContentProtection(e)
					},
					getKeySystems: function() {
						return t ? t.getKeySystems() : []
					},
					setKeySystems: function(e) {
						t && t.setKeySystems(e)
					},
					stop: function() {
						n && n.stop()
					},
					reset: function() {
						C(), l.off(g.INTERNAL_KEY_MESSAGE, U, this), l.off(g.INTERNAL_KEY_STATUS_CHANGED, x, this), O(null), M = void 0, n && (n.reset(), n = null), v.forEach((function(e) {
							return clearTimeout(e)
						})), v = [], S = []
					}
				}, T = _.getLogger(y), b = [], S = [], I = "temporary", R = "", y
			}
			g.__dashjs_factory_name = "ProtectionController", t.default = dashjs.FactoryMaker.getClassFactory(g)
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/controllers/ProtectionKeyController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = h(n("./node_modules/dashjs/build/es5/src/streaming/protection/CommonEncryption.js")),
				s = h(n("./node_modules/dashjs/build/es5/src/streaming/protection/drm/KeySystemClearKey.js")),
				i = h(n("./node_modules/dashjs/build/es5/src/streaming/protection/drm/KeySystemW3CClearKey.js")),
				a = h(n("./node_modules/dashjs/build/es5/src/streaming/protection/drm/KeySystemWidevine.js")),
				o = h(n("./node_modules/dashjs/build/es5/src/streaming/protection/drm/KeySystemPlayReady.js")),
				u = h(n("./node_modules/dashjs/build/es5/src/streaming/protection/servers/DRMToday.js")),
				l = h(n("./node_modules/dashjs/build/es5/src/streaming/protection/servers/PlayReady.js")),
				d = h(n("./node_modules/dashjs/build/es5/src/streaming/protection/servers/Widevine.js")),
				c = h(n("./node_modules/dashjs/build/es5/src/streaming/protection/servers/ClearKey.js")),
				f = h(n("./node_modules/dashjs/build/es5/src/streaming/constants/ProtectionConstants.js"));

			function h(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function m() {
				var e = this.context,
					t = void 0,
					n = void 0,
					h = void 0,
					m = void 0,
					g = void 0,
					_ = void 0,
					p = void 0;
				return t = {
					initialize: function() {
						m = [];
						var t = void 0;
						t = (0, o.default)(e).getInstance({
							BASE64: g
						}), m.push(t), t = (0, a.default)(e).getInstance({
							BASE64: g
						}), m.push(t), t = (0, s.default)(e).getInstance({
							BASE64: g
						}), m.push(t), _ = t, t = (0, i.default)(e).getInstance({
							BASE64: g,
							debug: n
						}), m.push(t), p = t
					},
					setProtectionData: function(e) {
						for (var t, n, r = 0; r < m.length; r++) {
							var s = m[r];
							s.hasOwnProperty("init") && s.init((t = s.systemString, n = void 0, n = null, e && (n = t in e ? e[t] : null), n))
						}
					},
					isClearKey: function(e) {
						return e === _ || e === p
					},
					initDataEquals: function(e, t) {
						if (e.byteLength === t.byteLength) {
							for (var n = new Uint8Array(e), r = new Uint8Array(t), s = 0; s < n.length; s++)
								if (n[s] !== r[s]) return !1;
							return !0
						}
						return !1
					},
					getKeySystems: function() {
						return m
					},
					setKeySystems: function(e) {
						m = e
					},
					getKeySystemBySystemString: function(e) {
						for (var t = 0; t < m.length; t++)
							if (m[t].systemString === e) return m[t];
						return null
					},
					getSupportedKeySystemsFromContentProtection: function(e) {
						var t = void 0,
							n = void 0,
							s = void 0,
							i = void 0,
							a = [];
						if (e) {
							var o = r.default.findCencContentProtection(e);
							for (s = 0; s < m.length; ++s)
								for (n = m[s], i = 0; i < e.length; ++i)
									if ((t = e[i]).schemeIdUri.toLowerCase() === n.schemeIdURI) {
										var u = n.getInitData(t, o);
										a.push({
											ks: m[s],
											initData: u,
											cdmData: n.getCDMData(),
											sessionId: n.getSessionId(t)
										})
									}
						}
						return a
					},
					getSupportedKeySystems: function(e, t) {
						for (var n = [], s = r.default.parsePSSHList(e), i = void 0, a = void 0, o = void 0, u = 0; u < m.length; ++u) a = (i = m[u]).systemString, o = !t || a in t, i.uuid in s && o && n.push({
							ks: i,
							initData: s[i.uuid],
							cdmData: i.getCDMData(),
							sessionId: i.getSessionId()
						});
						return n
					},
					getLicenseServer: function(t, n, r) {
						if ("license-release" === r || "individualization-request" === r) return null;
						var s = null;
						return n && n.hasOwnProperty("drmtoday") ? s = (0, u.default)(e).getInstance({
							BASE64: g
						}) : t.systemString === f.default.WIDEVINE_KEYSTEM_STRING ? s = (0, d.default)(e).getInstance() : t.systemString === f.default.PLAYREADY_KEYSTEM_STRING ? s = (0, l.default)(e).getInstance() : t.systemString === f.default.CLEARKEY_KEYSTEM_STRING && (s = (0, c.default)(e).getInstance()), s
					},
					processClearKeyLicenseRequest: function(e, t, n) {
						try {
							return e.getClearKeysFromProtectionData(t, n)
						} catch (r) {
							return h.error("Failed to retrieve clearkeys from ProtectionData"), null
						}
					},
					setConfig: function(e) {
						e && (e.debug && (n = e.debug, h = n.getLogger(t)), e.BASE64 && (g = e.BASE64))
					}
				}
			}
			m.__dashjs_factory_name = "ProtectionKeyController", t.default = dashjs.FactoryMaker.getSingletonFactory(m)
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/drm/KeySystemClearKey.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = o(n("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeyPair.js")),
				s = o(n("./node_modules/dashjs/build/es5/src/streaming/protection/vo/ClearKeyKeySet.js")),
				i = o(n("./node_modules/dashjs/build/es5/src/streaming/protection/CommonEncryption.js")),
				a = o(n("./node_modules/dashjs/build/es5/src/streaming/constants/ProtectionConstants.js"));

			function o(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var u = "e2719d58-a985-b3c9-781a-b030af78d30e",
				l = a.default.CLEARKEY_KEYSTEM_STRING,
				d = "urn:uuid:" + u;

			function c(e) {
				var t = (e = e || {}).BASE64,
					n = {
						attributes: ["Laurl", "laurl"],
						prefixes: ["clearkey", "dashif"]
					};
				return {
					uuid: u,
					schemeIdURI: d,
					systemString: l,
					getInitData: function(e, n) {
						try {
							var r = i.default.parseInitDataFromContentProtection(e, t);
							if (!r && n) {
								var s = {
									kids: [function(e) {
										try {
											var t = e.replace(/-/g, "");
											return (t = btoa(t.match(/\w{2}/g).map((function(e) {
												return String.fromCharCode(parseInt(e, 16))
											})).join(""))).replace(/=/g, "")
										} catch (n) {
											return null
										}
									}(n["cenc:default_KID"])]
								};
								r = (new TextEncoder).encode(JSON.stringify(s))
							}
							return r
						} catch (a) {
							return null
						}
					},
					getRequestHeadersFromMessage: function() {
						return {
							"Content-Type": "application/json"
						}
					},
					getLicenseRequestFromMessage: function(e) {
						return JSON.parse(String.fromCharCode.apply(null, new Uint8Array(e)))
					},
					getLicenseServerURLFromInitData: function() {
						return null
					},
					getCDMData: function() {
						return null
					},
					getSessionId: function() {
						return null
					},
					getLicenseServerUrlFromMediaInfo: function(e) {
						try {
							if (!e || 0 === e.length) return null;
							for (var t = 0, r = null; t < e.length && !r;) {
								var s = e[t];
								if (s && s.contentProtection && s.contentProtection.length > 0) {
									var i = s.contentProtection.filter((function(e) {
										return e.schemeIdUri && e.schemeIdUri === d
									}));
									if (i && i.length > 0)
										for (var a = 0; a < i.length && !r;) {
											for (var o = i[a], u = 0; u < n.attributes.length && !r;) {
												for (var l = 0, c = n.attributes[u]; l < n.prefixes.length && !r;) {
													var f = n.prefixes[l];
													o[c] && o[c].__prefix && o[c].__prefix === f && o[c].__text && (r = o[c].__text), l += 1
												}
												u += 1
											}
											a += 1
										}
								}
								t += 1
							}
							return r
						} catch (h) {
							return null
						}
					},
					getClearKeysFromProtectionData: function(e, t) {
						var n = null;
						if (e) {
							for (var i = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(t))), a = [], o = 0; o < i.kids.length; o++) {
								var u = i.kids[o],
									l = e.clearkeys && e.clearkeys.hasOwnProperty(u) ? e.clearkeys[u] : null;
								if (!l) throw new Error("DRM: ClearKey keyID (" + u + ") is not known!");
								a.push(new r.default(u, l))
							}
							n = new s.default(a)
						}
						return n
					}
				}
			}
			c.__dashjs_factory_name = "KeySystemClearKey", t.default = dashjs.FactoryMaker.getSingletonFactory(c)
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/drm/KeySystemPlayReady.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/streaming/protection/CommonEncryption.js")),
				s = i(n("./node_modules/dashjs/build/es5/src/streaming/constants/ProtectionConstants.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var a = "9a04f079-9840-4286-ab92-e65be0885f95",
				o = s.default.PLAYREADY_KEYSTEM_STRING,
				u = "urn:uuid:" + a,
				l = '<PlayReadyCDMData type="LicenseAcquisition"><LicenseAcquisition version="1.0" Proactive="false"><CustomData encoding="base64encoded">%CUSTOMDATA%</CustomData></LicenseAcquisition></PlayReadyCDMData>',
				d = void 0;

			function c(e) {
				var t = "utf-16",
					n = (e = e || {}).BASE64;

				function s() {
					if (!n || !n.hasOwnProperty("decodeArray") || !n.hasOwnProperty("decodeArray")) throw new Error("Missing config parameter(s)")
				}
				return {
					uuid: a,
					schemeIdURI: u,
					systemString: o,
					getInitData: function(e) {
						var t, i, a, o = new Uint8Array([112, 115, 115, 104, 0, 0, 0, 0]),
							u = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]),
							l = 0,
							d = null,
							c = void 0,
							f = void 0;
						if (s(), !e) return null;
						if ("pssh" in e) return r.default.parseInitDataFromContentProtection(e, n);
						if ("pro" in e) d = n.decodeArray(e.pro.__text);
						else {
							if (!("prheader" in e)) return null;
							d = n.decodeArray(e.prheader.__text)
						}
						return t = d.length, i = 4 + o.length + u.length + 4 + t, a = new ArrayBuffer(i), c = new Uint8Array(a), (f = new DataView(a)).setUint32(l, i), l += 4, c.set(o, l), l += o.length, c.set(u, l), l += u.length, f.setUint32(l, t), l += 4, c.set(d, l), l += t, c.buffer
					},
					getRequestHeadersFromMessage: function(e) {
						var n, r = void 0,
							s = {},
							i = new DOMParser,
							a = "utf-16" === t ? new Uint16Array(e) : new Uint8Array(e);
						n = String.fromCharCode.apply(null, a);
						for (var o = (r = i.parseFromString(n, "application/xml")).getElementsByTagName("name"), u = r.getElementsByTagName("value"), l = 0; l < o.length; l++) s[o[l].childNodes[0].nodeValue] = u[l].childNodes[0].nodeValue;
						return s.hasOwnProperty("Content") && (s["Content-Type"] = s.Content, delete s.Content), s.hasOwnProperty("Content-Type") || (s["Content-Type"] = "text/xml; charset=utf-8"), s
					},
					getLicenseRequestFromMessage: function(e) {
						var r = null,
							i = new DOMParser,
							a = "utf-16" === t ? new Uint16Array(e) : new Uint8Array(e);
						s();
						var o = String.fromCharCode.apply(null, a),
							u = i.parseFromString(o, "application/xml");
						if (!u.getElementsByTagName("PlayReadyKeyMessage")[0]) return e;
						var l = u.getElementsByTagName("Challenge")[0].childNodes[0].nodeValue;
						return l && (r = n.decode(l)), r
					},
					getLicenseServerURLFromInitData: function(e) {
						if (e)
							for (var t = new DataView(e), n = t.getUint16(4, !0), r = 6, s = new DOMParser, i = 0; i < n; i++) {
								var a = t.getUint16(r, !0);
								r += 2;
								var o = t.getUint16(r, !0);
								if (r += 2, 1 === a) {
									var u = e.slice(r, r + o),
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
								} else r += o
							}
						return null
					},
					getCDMData: function() {
						var e = void 0,
							t = void 0,
							r = void 0,
							i = void 0;
						if (s(), d && d.cdmData) {
							for (e = [], i = 0; i < d.cdmData.length; ++i) e.push(d.cdmData.charCodeAt(i)), e.push(0);
							for (e = String.fromCharCode.apply(null, e), e = n.encode(e), t = l.replace("%CUSTOMDATA%", e), r = [], i = 0; i < t.length; ++i) r.push(t.charCodeAt(i)), r.push(0);
							return new Uint8Array(r).buffer
						}
						return null
					},
					getSessionId: function(e) {
						return d && d.sessionId ? d.sessionId : e && e.sessionId ? e.sessionId : null
					},
					setPlayReadyMessageFormat: function(e) {
						if ("utf-8" !== e && "utf-16" !== e) throw new Error('Specified message format is not one of "utf-8" or "utf-16"');
						t = e
					},
					init: function(e) {
						e && (d = e)
					}
				}
			}
			c.__dashjs_factory_name = "KeySystemPlayReady", t.default = dashjs.FactoryMaker.getSingletonFactory(c)
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/drm/KeySystemW3CClearKey.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = o(n("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeyPair.js")),
				s = o(n("./node_modules/dashjs/build/es5/src/streaming/protection/vo/ClearKeyKeySet.js")),
				i = o(n("./node_modules/dashjs/build/es5/src/streaming/protection/CommonEncryption.js")),
				a = o(n("./node_modules/dashjs/build/es5/src/streaming/constants/ProtectionConstants.js"));

			function o(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var u = "1077efec-c0b2-4d02-ace3-3c1e52e2fb4b",
				l = a.default.CLEARKEY_KEYSTEM_STRING,
				d = "urn:uuid:" + u;

			function c(e) {
				var t = void 0,
					n = e.BASE64,
					a = e.debug.getLogger(t);
				return t = {
					uuid: u,
					schemeIdURI: d,
					systemString: l,
					getInitData: function(e) {
						return i.default.parseInitDataFromContentProtection(e, n)
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
					getCDMData: function() {
						return null
					},
					getSessionId: function() {
						return null
					},
					getClearKeysFromProtectionData: function(e, t) {
						var n = null;
						if (e) {
							for (var i = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(t))), o = [], u = 0; u < i.kids.length; u++) {
								var l = i.kids[u],
									d = e.clearkeys && e.clearkeys.hasOwnProperty(l) ? e.clearkeys[l] : null;
								if (!d) throw new Error("DRM: ClearKey keyID (" + l + ") is not known!");
								o.push(new r.default(l, d))
							}
							n = new s.default(o), a.warn("ClearKey schemeIdURI is using W3C Common PSSH systemID (1077efec-c0b2-4d02-ace3-3c1e52e2fb4b) in Content Protection. See DASH-IF IOP v4.1 section 7.6.2.4")
						}
						return n
					}
				}
			}
			c.__dashjs_factory_name = "KeySystemW3CClearKey", t.default = dashjs.FactoryMaker.getSingletonFactory(c)
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/drm/KeySystemWidevine.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/streaming/protection/CommonEncryption.js")),
				s = i(n("./node_modules/dashjs/build/es5/src/streaming/constants/ProtectionConstants.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var a = "edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",
				o = s.default.WIDEVINE_KEYSTEM_STRING,
				u = "urn:uuid:" + a;

			function l(e) {
				var t = null,
					n = (e = e || {}).BASE64;
				return {
					uuid: a,
					schemeIdURI: u,
					systemString: o,
					init: function(e) {
						e && (t = e)
					},
					getInitData: function(e) {
						return r.default.parseInitDataFromContentProtection(e, n)
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
					getCDMData: function() {
						return null
					},
					getSessionId: function(e) {
						return t && t.sessionId ? t.sessionId : e && e.sessionId ? e.sessionId : null
					}
				}
			}
			l.__dashjs_factory_name = "KeySystemWidevine", t.default = dashjs.FactoryMaker.getSingletonFactory(l)
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/errors/ProtectionErrors.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/core/errors/ErrorsBase.js");
			var i = new(function(e) {
				function t() {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					var e = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
					return e.MEDIA_KEYERR_CODE = 100, e.MEDIA_KEYERR_UNKNOWN_CODE = 101, e.MEDIA_KEYERR_CLIENT_CODE = 102, e.MEDIA_KEYERR_SERVICE_CODE = 103, e.MEDIA_KEYERR_OUTPUT_CODE = 104, e.MEDIA_KEYERR_HARDWARECHANGE_CODE = 105, e.MEDIA_KEYERR_DOMAIN_CODE = 106, e.MEDIA_KEY_MESSAGE_ERROR_CODE = 107, e.MEDIA_KEY_MESSAGE_NO_CHALLENGE_ERROR_CODE = 108, e.SERVER_CERTIFICATE_UPDATED_ERROR_CODE = 109, e.KEY_STATUS_CHANGED_EXPIRED_ERROR_CODE = 110, e.MEDIA_KEY_MESSAGE_NO_LICENSE_SERVER_URL_ERROR_CODE = 111, e.KEY_SYSTEM_ACCESS_DENIED_ERROR_CODE = 112, e.KEY_SESSION_CREATED_ERROR_CODE = 113, e.MEDIA_KEY_MESSAGE_LICENSER_ERROR_CODE = 114, e.MEDIA_KEYERR_UNKNOWN_MESSAGE = "An unspecified error occurred. This value is used for errors that don't match any of the other codes.", e.MEDIA_KEYERR_CLIENT_MESSAGE = "The Key System could not be installed or updated.", e.MEDIA_KEYERR_SERVICE_MESSAGE = "The message passed into update indicated an error from the license service.", e.MEDIA_KEYERR_OUTPUT_MESSAGE = "There is no available output device with the required characteristics for the content protection system.", e.MEDIA_KEYERR_HARDWARECHANGE_MESSAGE = "A hardware configuration change caused a content protection error.", e.MEDIA_KEYERR_DOMAIN_MESSAGE = "An error occurred in a multi-device domain licensing configuration. The most common error is a failure to join the domain.", e.MEDIA_KEY_MESSAGE_ERROR_MESSAGE = "Multiple key sessions were creates with a user-agent that does not support sessionIDs!! Unpredictable behavior ahead!", e.MEDIA_KEY_MESSAGE_NO_CHALLENGE_ERROR_MESSAGE = "DRM: Empty key message from CDM", e.SERVER_CERTIFICATE_UPDATED_ERROR_MESSAGE = "Error updating server certificate -- ", e.KEY_STATUS_CHANGED_EXPIRED_ERROR_MESSAGE = "DRM: KeyStatusChange error! -- License has expired", e.MEDIA_KEY_MESSAGE_NO_LICENSE_SERVER_URL_ERROR_MESSAGE = "DRM: No license server URL specified!", e.KEY_SYSTEM_ACCESS_DENIED_ERROR_MESSAGE = "DRM: KeySystem Access Denied! -- ", e.KEY_SESSION_CREATED_ERROR_MESSAGE = "DRM: unable to create session! --", e.MEDIA_KEY_MESSAGE_LICENSER_ERROR_MESSAGE = "DRM: licenser error! --", e
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
			}(((r = s) && r.__esModule ? r : {
				default: r
			}).default));
			t.default = i
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/models/ProtectionModel_01b.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = d(n("./node_modules/dashjs/build/es5/src/streaming/protection/controllers/ProtectionKeyController.js")),
				s = d(n("./node_modules/dashjs/build/es5/src/streaming/protection/vo/NeedKey.js")),
				i = d(n("./node_modules/dashjs/build/es5/src/streaming/vo/DashJSError.js")),
				a = d(n("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeyMessage.js")),
				o = d(n("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeySystemConfiguration.js")),
				u = d(n("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeySystemAccess.js")),
				l = d(n("./node_modules/dashjs/build/es5/src/streaming/protection/errors/ProtectionErrors.js"));

			function d(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function c(e) {
				e = e || {};
				var t = this.context,
					n = e.eventBus,
					d = e.events,
					c = e.debug,
					f = e.api,
					h = e.errHandler,
					m = void 0,
					g = void 0,
					_ = void 0,
					p = void 0,
					E = void 0,
					v = void 0,
					y = void 0,
					T = void 0,
					b = void 0;

				function S() {
					_ && R();
					for (var e = 0; e < y.length; e++) A(y[e]);
					n.trigger(d.TEARDOWN_COMPLETE)
				}

				function A(e) {
					try {
						_[f.cancelKeyRequest](p.systemString, e.sessionID)
					} catch (t) {
						n.trigger(d.KEY_SESSION_CLOSED, {
							data: null,
							error: "Error closing session (" + e.sessionID + ") " + t.message
						})
					}
				}

				function I(e, t) {
					if (t && e) {
						for (var n = e.length, r = 0; r < n; r++)
							if (e[r].sessionID == t) return e[r];
						return null
					}
					return null
				}

				function R() {
					_.removeEventListener(f.keyerror, b), _.removeEventListener(f.needkey, b), _.removeEventListener(f.keymessage, b), _.removeEventListener(f.keyadded, b)
				}
				return m = {
					getAllInitData: function() {
						for (var e = [], t = 0; t < v.length; t++) e.push(v[t].initData);
						for (var n = 0; n < y.length; n++) e.push(y[n].initData);
						return e
					},
					requestKeySystemAccess: function(e) {
						var t = _;
						t || (t = document.createElement("video"));
						for (var r = !1, s = 0; s < e.length; s++)
							for (var i = e[s].ks.systemString, a = e[s].configs, l = null, c = 0; c < a.length; c++) {
								var f = a[c].videoCapabilities;
								if (f && 0 !== f.length) {
									l = [];
									for (var h = 0; h < f.length; h++) "" !== t.canPlayType(f[h].contentType, i) && l.push(f[h])
								}
								if (l && (!l || 0 !== l.length)) {
									r = !0;
									var m = new o.default(null, l),
										g = E.getKeySystemBySystemString(i);
									n.trigger(d.KEY_SYSTEM_ACCESS_COMPLETE, {
										data: new u.default(g, m)
									});
									break
								}
							}
						r || n.trigger(d.KEY_SYSTEM_ACCESS_COMPLETE, {
							error: "Key system access denied! -- No valid audio/video content configurations detected!"
						})
					},
					getKeySystem: function() {
						return p
					},
					selectKeySystem: function(e) {
						p = e.keySystem, n.trigger(d.INTERNAL_KEY_SYSTEM_SELECTED)
					},
					setMediaElement: function(e) {
						if (_ !== e) {
							if (_) {
								R();
								for (var t = 0; t < y.length; t++) A(y[t]);
								y = []
							}(_ = e) && (_.addEventListener(f.keyerror, b), _.addEventListener(f.needkey, b), _.addEventListener(f.keymessage, b), _.addEventListener(f.keyadded, b), n.trigger(d.VIDEO_ELEMENT_SELECTED))
						}
					},
					createKeySession: function(e) {
						if (!p) throw new Error("Can not create sessions until you have selected a key system");
						if (T || 0 === y.length) {
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
							return v.push(t), _[f.generateKeyRequest](p.systemString, new Uint8Array(e)), t
						}
						throw new Error("Multiple sessions not allowed!")
					},
					updateKeySession: function(e, t) {
						var n = e.sessionID;
						if (E.isClearKey(p))
							for (var r = 0; r < t.keyPairs.length; r++) _[f.addKey](p.systemString, t.keyPairs[r].key, t.keyPairs[r].keyID, n);
						else _[f.addKey](p.systemString, new Uint8Array(t), new Uint8Array(e.initData), n)
					},
					closeKeySession: A,
					setServerCertificate: function() {},
					loadKeySession: function() {},
					removeKeySession: function() {},
					stop: S,
					reset: S
				}, g = c.getLogger(m), _ = null, p = null, v = [], y = [], E = (0, r.default)(t).getInstance(), b = {
					handleEvent: function(e) {
						var t = null;
						switch (e.type) {
							case f.needkey:
								var r = ArrayBuffer.isView(e.initData) ? e.initData.buffer : e.initData;
								n.trigger(d.NEED_KEY, {
									key: new s.default(r, "cenc")
								});
								break;
							case f.keyerror:
								if ((t = I(y, e.sessionId)) || (t = I(v, e.sessionId)), t) {
									var o = l.default.MEDIA_KEYERR_CODE,
										u = "";
									switch (e.errorCode.code) {
										case 1:
											o = l.default.MEDIA_KEYERR_UNKNOWN_CODE, u += "MEDIA_KEYERR_UNKNOWN - " + l.default.MEDIA_KEYERR_UNKNOWN_MESSAGE;
											break;
										case 2:
											o = l.default.MEDIA_KEYERR_CLIENT_CODE, u += "MEDIA_KEYERR_CLIENT - " + l.default.MEDIA_KEYERR_CLIENT_MESSAGE;
											break;
										case 3:
											o = l.default.MEDIA_KEYERR_SERVICE_CODE, u += "MEDIA_KEYERR_SERVICE - " + l.default.MEDIA_KEYERR_SERVICE_MESSAGE;
											break;
										case 4:
											o = l.default.MEDIA_KEYERR_OUTPUT_CODE, u += "MEDIA_KEYERR_OUTPUT - " + l.default.MEDIA_KEYERR_OUTPUT_MESSAGE;
											break;
										case 5:
											o = l.default.MEDIA_KEYERR_HARDWARECHANGE_CODE, u += "MEDIA_KEYERR_HARDWARECHANGE - " + l.default.MEDIA_KEYERR_HARDWARECHANGE_MESSAGE;
											break;
										case 6:
											o = l.default.MEDIA_KEYERR_DOMAIN_CODE, u += "MEDIA_KEYERR_DOMAIN - " + l.default.MEDIA_KEYERR_DOMAIN_MESSAGE
									}
									u += "  System Code = " + e.systemCode, n.trigger(d.KEY_ERROR, {
										data: new i.default(o, u, t)
									})
								} else g.error("No session token found for key error");
								break;
							case f.keyadded:
								(t = I(y, e.sessionId)) || (t = I(v, e.sessionId)), t ? (g.debug("DRM: Key added."), n.trigger(d.KEY_ADDED, {
									data: t
								})) : g.debug("No session token found for key added");
								break;
							case f.keymessage:
								if ((T = null !== e.sessionId && void 0 !== e.sessionId) ? !(t = I(y, e.sessionId)) && v.length > 0 && (t = v.shift(), y.push(t), t.sessionID = e.sessionId, n.trigger(d.KEY_SESSION_CREATED, {
										data: t
									})) : v.length > 0 && (t = v.shift(), y.push(t), 0 !== v.length && h.error(new i.default(l.default.MEDIA_KEY_MESSAGE_ERROR_CODE, l.default.MEDIA_KEY_MESSAGE_ERROR_MESSAGE))), t) {
									var c = ArrayBuffer.isView(e.message) ? e.message.buffer : e.message;
									t.keyMessage = c, n.trigger(d.INTERNAL_KEY_MESSAGE, {
										data: new a.default(t, c, e.defaultURL)
									})
								} else g.warn("No session token found for key message")
						}
					}
				}, m
			}
			c.__dashjs_factory_name = "ProtectionModel_01b", t.default = dashjs.FactoryMaker.getClassFactory(c)
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/models/ProtectionModel_21Jan2015.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = d(n("./node_modules/dashjs/build/es5/src/streaming/protection/controllers/ProtectionKeyController.js")),
				s = d(n("./node_modules/dashjs/build/es5/src/streaming/protection/vo/NeedKey.js")),
				i = d(n("./node_modules/dashjs/build/es5/src/streaming/protection/errors/ProtectionErrors.js")),
				a = d(n("./node_modules/dashjs/build/es5/src/streaming/vo/DashJSError.js")),
				o = d(n("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeyMessage.js")),
				u = d(n("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeySystemAccess.js")),
				l = d(n("./node_modules/dashjs/build/es5/src/streaming/constants/ProtectionConstants.js"));

			function d(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function c(e) {
				e = e || {};
				var t = this.context,
					n = e.eventBus,
					d = e.events,
					c = e.debug,
					f = void 0,
					h = void 0,
					m = void 0,
					g = void 0,
					_ = void 0,
					p = void 0,
					E = void 0,
					v = void 0;

				function y(e) {
					var t = e.session;
					return t.removeEventListener("keystatuseschange", e), t.removeEventListener("message", e), t.close()
				}

				function T(e) {
					for (var t = 0; t < p.length; t++)
						if (p[t] === e) {
							p.splice(t, 1);
							break
						}
				}

				function b(e) {
					var t = void 0,
						n = void 0;
					return e && e.length > 0 && (e[0] && ("string" == typeof e[0] ? t = e[0] : n = e[0]), e[1] && ("string" == typeof e[1] ? t = e[1] : n = e[1])), {
						status: t,
						keyId: n
					}
				}

				function S(e, t, r, s) {
					var u = {
						session: e,
						initData: t,
						sessionId: s,
						handleEvent: function(e) {
							switch (e.type) {
								case "keystatuseschange":
									n.trigger(d.KEY_STATUSES_CHANGED, {
										data: this
									}), e.target.keyStatuses.forEach((function() {
										var e = b(arguments);
										switch (e.status) {
											case "expired":
												n.trigger(d.INTERNAL_KEY_STATUS_CHANGED, {
													error: new a.default(i.default.KEY_STATUS_CHANGED_EXPIRED_ERROR_CODE, i.default.KEY_STATUS_CHANGED_EXPIRED_ERROR_MESSAGE)
												});
												break;
											default:
												n.trigger(d.INTERNAL_KEY_STATUS_CHANGED, e)
										}
									}));
									break;
								case "message":
									var t = ArrayBuffer.isView(e.message) ? e.message.buffer : e.message;
									n.trigger(d.INTERNAL_KEY_MESSAGE, {
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
						getUsable: function() {
							var t = !1;
							return e.keyStatuses.forEach((function() {
								var e = b(arguments);
								"usable" === e.status && (t = !0)
							})), t
						},
						getSessionType: function() {
							return r
						}
					};
					return e.addEventListener("keystatuseschange", u), e.addEventListener("message", u), e.closed.then((function() {
						T(u), h.debug("DRM: Session closed.  SessionID = " + u.getSessionID()), n.trigger(d.KEY_SESSION_CLOSED, {
							data: u.getSessionID()
						})
					})), p.push(u), u
				}
				return f = {
					getAllInitData: function() {
						for (var e = [], t = 0; t < p.length; t++) p[t].initData && e.push(p[t].initData);
						return e
					},
					requestKeySystemAccess: function(e) {
						! function e(t, r) {
							if (void 0 === navigator.requestMediaKeySystemAccess || "function" != typeof navigator.requestMediaKeySystemAccess) return void n.trigger(d.KEY_SYSTEM_ACCESS_COMPLETE, {
								error: "Insecure origins are not allowed"
							});
							! function(r) {
								var s = t[r].ks,
									i = t[r].configs,
									a = s.systemString;
								a === l.default.PLAYREADY_KEYSTEM_STRING && "required" === i[0].persistentState && (a += ".recommendation"), navigator.requestMediaKeySystemAccess(a, i).then((function(e) {
									var t = "function" == typeof e.getConfiguration ? e.getConfiguration() : null,
										r = new u.default(s, t);
									r.mksa = e, n.trigger(d.KEY_SYSTEM_ACCESS_COMPLETE, {
										data: r
									})
								})).catch((function(s) {
									++r < t.length ? e(t, r) : n.trigger(d.KEY_SYSTEM_ACCESS_COMPLETE, {
										error: "Key system access denied! " + s.message
									})
								}))
							}(r)
						}(e, 0)
					},
					getKeySystem: function() {
						return m
					},
					selectKeySystem: function(e) {
						e.mksa.createMediaKeys().then((function(t) {
							m = e.keySystem, _ = t, g ? g.setMediaKeys(_).then((function() {
								n.trigger(d.INTERNAL_KEY_SYSTEM_SELECTED)
							})) : n.trigger(d.INTERNAL_KEY_SYSTEM_SELECTED)
						})).catch((function() {
							n.trigger(d.INTERNAL_KEY_SYSTEM_SELECTED, {
								error: "Error selecting keys system (" + e.keySystem.systemString + ")! Could not create MediaKeys -- TODO"
							})
						}))
					},
					setMediaElement: function(e) {
						g !== e && (g && (g.removeEventListener("encrypted", E), g.setMediaKeys && g.setMediaKeys(null)), (g = e) && (g.addEventListener("encrypted", E), g.setMediaKeys && _ && g.setMediaKeys(_)))
					},
					setServerCertificate: function(e) {
						if (!m || !_) throw new Error("Can not set server certificate until you have selected a key system");
						_.setServerCertificate(e).then((function() {
							h.info("DRM: License server certificate successfully updated."), n.trigger(d.SERVER_CERTIFICATE_UPDATED)
						})).catch((function(e) {
							n.trigger(d.SERVER_CERTIFICATE_UPDATED, {
								error: new a.default(i.default.SERVER_CERTIFICATE_UPDATED_ERROR_CODE, i.default.SERVER_CERTIFICATE_UPDATED_ERROR_MESSAGE + e.name)
							})
						}))
					},
					createKeySession: function(e, t, r) {
						if (!m || !_) throw new Error("Can not create sessions until you have selected a key system");
						var s = _.createSession(r),
							o = S(s, e, r),
							u = this.getKeySystem().systemString === l.default.CLEARKEY_KEYSTEM_STRING && (e || t && t.clearkeys) ? "keyids" : "cenc";
						s.generateRequest(u, e).then((function() {
							h.debug("DRM: Session created.  SessionID = " + o.getSessionID()), n.trigger(d.KEY_SESSION_CREATED, {
								data: o
							})
						})).catch((function(e) {
							T(o), n.trigger(d.KEY_SESSION_CREATED, {
								data: null,
								error: new a.default(i.default.KEY_SESSION_CREATED_ERROR_CODE, i.default.KEY_SESSION_CREATED_ERROR_MESSAGE + "Error generating key request -- " + e.name)
							})
						}))
					},
					updateKeySession: function(e, t) {
						var r = e.session;
						v.isClearKey(m) && (t = t.toJWK()), r.update(t).catch((function(t) {
							n.trigger(d.KEY_ERROR, {
								data: new a.default(i.default.MEDIA_KEYERR_CODE, "Error sending update() message! " + t.name, e)
							})
						}))
					},
					loadKeySession: function(e, t, r) {
						if (!m || !_) throw new Error("Can not load sessions until you have selected a key system");
						for (var s = 0; s < p.length; s++)
							if (e === p[s].sessionId) return void h.warn("DRM: Ignoring session ID because we have already seen it!");
						var o = _.createSession(r),
							u = S(o, t, r, e);
						o.load(e).then((function(t) {
							t ? (h.debug("DRM: Session loaded.  SessionID = " + u.getSessionID()), n.trigger(d.KEY_SESSION_CREATED, {
								data: u
							})) : (T(u), n.trigger(d.KEY_SESSION_CREATED, {
								data: null,
								error: new a.default(i.default.KEY_SESSION_CREATED_ERROR_CODE, i.default.KEY_SESSION_CREATED_ERROR_MESSAGE + "Could not load session! Invalid Session ID (" + e + ")")
							}))
						})).catch((function(t) {
							T(u), n.trigger(d.KEY_SESSION_CREATED, {
								data: null,
								error: new a.default(i.default.KEY_SESSION_CREATED_ERROR_CODE, i.default.KEY_SESSION_CREATED_ERROR_MESSAGE + "Could not load session (" + e + ")! " + t.name)
							})
						}))
					},
					removeKeySession: function(e) {
						e.session.remove().then((function() {
							h.debug("DRM: Session removed.  SessionID = " + e.getSessionID()), n.trigger(d.KEY_SESSION_REMOVED, {
								data: e.getSessionID()
							})
						}), (function(t) {
							n.trigger(d.KEY_SESSION_REMOVED, {
								data: null,
								error: "Error removing session (" + e.getSessionID() + "). " + t.name
							})
						}))
					},
					closeKeySession: function(e) {
						y(e).catch((function(t) {
							T(e), n.trigger(d.KEY_SESSION_CLOSED, {
								data: null,
								error: "Error closing session (" + e.getSessionID() + ") " + t.name
							})
						}))
					},
					stop: function() {
						for (var e = void 0, t = 0; t < p.length; t++)(e = p[t]).getUsable() || y(e).catch((function() {
							T(e)
						}))
					},
					reset: function() {
						var e = p.length,
							t = void 0;
						0 !== e ? function() {
							for (var r = function(e) {
									T(e), 0 === p.length && (g ? (g.removeEventListener("encrypted", E), g.setMediaKeys(null).then((function() {
										n.trigger(d.TEARDOWN_COMPLETE)
									}))) : n.trigger(d.TEARDOWN_COMPLETE))
								}, s = 0; s < e; s++) ! function(e) {
								t.session.closed.then((function() {
									r(e)
								})), y(t).catch((function() {
									r(e)
								}))
							}(t = p[s])
						}() : n.trigger(d.TEARDOWN_COMPLETE)
					}
				}, h = c.getLogger(f), m = null, g = null, _ = null, p = [], v = (0, r.default)(t).getInstance(), E = {
					handleEvent: function(e) {
						switch (e.type) {
							case "encrypted":
								if (e.initData) {
									var t = ArrayBuffer.isView(e.initData) ? e.initData.buffer : e.initData;
									n.trigger(d.NEED_KEY, {
										key: new s.default(t, e.initDataType)
									})
								}
						}
					}
				}, f
			}
			c.__dashjs_factory_name = "ProtectionModel_21Jan2015", t.default = dashjs.FactoryMaker.getClassFactory(c)
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/models/ProtectionModel_3Feb2014.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = d(n("./node_modules/dashjs/build/es5/src/streaming/protection/controllers/ProtectionKeyController.js")),
				s = d(n("./node_modules/dashjs/build/es5/src/streaming/protection/vo/NeedKey.js")),
				i = d(n("./node_modules/dashjs/build/es5/src/streaming/vo/DashJSError.js")),
				a = d(n("./node_modules/dashjs/build/es5/src/streaming/protection/errors/ProtectionErrors.js")),
				o = d(n("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeyMessage.js")),
				u = d(n("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeySystemConfiguration.js")),
				l = d(n("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeySystemAccess.js"));

			function d(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function c(e) {
				e = e || {};
				var t = this.context,
					n = e.eventBus,
					d = e.events,
					c = e.debug,
					f = e.api,
					h = void 0,
					m = void 0,
					g = void 0,
					_ = void 0,
					p = void 0,
					E = void 0,
					v = void 0,
					y = void 0,
					T = void 0;

				function b() {
					try {
						for (var e = 0; e < v.length; e++) S(v[e]);
						g && g.removeEventListener(f.needkey, y), n.trigger(d.TEARDOWN_COMPLETE)
					} catch (t) {
						n.trigger(d.TEARDOWN_COMPLETE, {
							error: "Error tearing down key sessions and MediaKeys! -- " + t.message
						})
					}
				}

				function S(e) {
					var t = e.session;
					t.removeEventListener(f.error, e), t.removeEventListener(f.message, e), t.removeEventListener(f.ready, e), t.removeEventListener(f.close, e);
					for (var n = 0; n < v.length; n++)
						if (v[n] === e) {
							v.splice(n, 1);
							break
						} t[f.release]()
				}

				function A() {
					var e = null,
						t = function() {
							g.removeEventListener("loadedmetadata", e), g[f.setMediaKeys](p), n.trigger(d.VIDEO_ELEMENT_SELECTED)
						};
					g.readyState >= 1 ? t() : (e = t.bind(this), g.addEventListener("loadedmetadata", e))
				}
				return h = {
					getAllInitData: function() {
						for (var e = [], t = 0; t < v.length; t++) e.push(v[t].initData);
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
									for (var _ = 0; _ < m.length; _++) window[f.MediaKeys].isTypeSupported(s, m[_].contentType) && o.push(m[_])
								}
								if (!(!a && !o || a && 0 === a.length || o && 0 === o.length)) {
									t = !0;
									var p = new u.default(a, o),
										E = T.getKeySystemBySystemString(s);
									n.trigger(d.KEY_SYSTEM_ACCESS_COMPLETE, {
										data: new l.default(E, p)
									});
									break
								}
							}
						t || n.trigger(d.KEY_SYSTEM_ACCESS_COMPLETE, {
							error: "Key system access denied! -- No valid audio/video content configurations detected!"
						})
					},
					getKeySystem: function() {
						return _
					},
					selectKeySystem: function(e) {
						try {
							p = e.mediaKeys = new window[f.MediaKeys](e.keySystem.systemString), _ = e.keySystem, E = e, g && A(), n.trigger(d.INTERNAL_KEY_SYSTEM_SELECTED)
						} catch (t) {
							n.trigger(d.INTERNAL_KEY_SYSTEM_SELECTED, {
								error: "Error selecting keys system (" + _.systemString + ")! Could not create MediaKeys -- TODO"
							})
						}
					},
					setMediaElement: function(e) {
						g !== e && (g && g.removeEventListener(f.needkey, y), (g = e) && (g.addEventListener(f.needkey, y), p && A()))
					},
					createKeySession: function(e, t, r, s) {
						if (!_ || !p || !E) throw new Error("Can not create sessions until you have selected a key system");
						var u = null;
						if (E.ksConfiguration.videoCapabilities && E.ksConfiguration.videoCapabilities.length > 0 && (u = E.ksConfiguration.videoCapabilities[0]), null === u && E.ksConfiguration.audioCapabilities && E.ksConfiguration.audioCapabilities.length > 0 && (u = E.ksConfiguration.audioCapabilities[0]), null === u) throw new Error("Can not create sessions for unknown content types.");
						var l = u.contentType,
							c = p.createSession(l, new Uint8Array(e), s ? new Uint8Array(s) : null),
							h = function(e, t) {
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
												n.trigger(d.KEY_ERROR, {
													data: new i.default(a.default.MEDIA_KEYERR_CODE, "KeyError", this)
												});
												break;
											case f.message:
												var t = ArrayBuffer.isView(e.message) ? e.message.buffer : e.message;
												n.trigger(d.INTERNAL_KEY_MESSAGE, {
													data: new o.default(this, t, e.destinationURL)
												});
												break;
											case f.ready:
												m.debug("DRM: Key added."), n.trigger(d.KEY_ADDED);
												break;
											case f.close:
												m.debug("DRM: Session closed.  SessionID = " + this.getSessionID()), n.trigger(d.KEY_SESSION_CLOSED, {
													data: this.getSessionID()
												})
										}
									}
								}
							}(c, e);
						c.addEventListener(f.error, h), c.addEventListener(f.message, h), c.addEventListener(f.ready, h), c.addEventListener(f.close, h), v.push(h), m.debug("DRM: Session created.  SessionID = " + h.getSessionID()), n.trigger(d.KEY_SESSION_CREATED, {
							data: h
						})
					},
					updateKeySession: function(e, t) {
						var n = e.session;
						T.isClearKey(_) ? n.update(new Uint8Array(t.toJWK())) : n.update(new Uint8Array(t))
					},
					closeKeySession: S,
					setServerCertificate: function() {},
					loadKeySession: function() {},
					removeKeySession: function() {},
					stop: b,
					reset: b
				}, m = c.getLogger(h), g = null, _ = null, p = null, E = null, v = [], T = (0, r.default)(t).getInstance(), y = {
					handleEvent: function(e) {
						switch (e.type) {
							case f.needkey:
								if (e.initData) {
									var t = ArrayBuffer.isView(e.initData) ? e.initData.buffer : e.initData;
									n.trigger(d.NEED_KEY, {
										key: new s.default(t, "cenc")
									})
								}
						}
					}
				}, h
			}
			c.__dashjs_factory_name = "ProtectionModel_3Feb2014", t.default = dashjs.FactoryMaker.getClassFactory(c)
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/servers/ClearKey.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeyPair.js")),
				s = i(n("./node_modules/dashjs/build/es5/src/streaming/protection/vo/ClearKeyKeySet.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function a() {
				return {
					getServerURLFromMessage: function(e) {
						return e
					},
					getHTTPMethod: function() {
						return "POST"
					},
					getResponseType: function() {
						return "json"
					},
					getLicenseMessage: function(e) {
						if (!e.hasOwnProperty("keys")) return null;
						for (var t = [], n = 0; n < e.keys.length; n++) {
							var i = e.keys[n],
								a = i.kid.replace(/=/g, ""),
								o = i.k.replace(/=/g, "");
							t.push(new r.default(a, o))
						}
						return new s.default(t)
					},
					getErrorResponse: function(e) {
						return String.fromCharCode.apply(null, new Uint8Array(e))
					}
				}
			}
			a.__dashjs_factory_name = "ClearKey", t.default = dashjs.FactoryMaker.getSingletonFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/servers/DRMToday.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/streaming/constants/ProtectionConstants.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				};

			function a(e) {
				var t = (e = e || {}).BASE64,
					n = {};
				n[i.default.WIDEVINE_KEYSTEM_STRING] = {
					responseType: "json",
					getLicenseMessage: function(e) {
						return t.decodeArray(e.license)
					},
					getErrorResponse: function(e) {
						return e
					}
				}, n[i.default.PLAYREADY_KEYSTEM_STRING] = {
					responseType: "arraybuffer",
					getLicenseMessage: function(e) {
						return e
					},
					getErrorResponse: function(e) {
						return String.fromCharCode.apply(null, new Uint8Array(e))
					}
				};
				return {
					getServerURLFromMessage: function(e) {
						return e
					},
					getHTTPMethod: function() {
						return "POST"
					},
					getResponseType: function(e) {
						return n[e].responseType
					},
					getLicenseMessage: function(e, r) {
						return function() {
							if (!t || !t.hasOwnProperty("decodeArray")) throw new Error("Missing config parameter(s)")
						}(), n[r].getLicenseMessage(e)
					},
					getErrorResponse: function(e, t) {
						return n[t].getErrorResponse(e)
					}
				}
			}
			a.__dashjs_factory_name = "DRMToday", t.default = dashjs.FactoryMaker.getSingletonFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/servers/PlayReady.js": function(e, t, n) {
			"use strict";

			function r() {
				var e = "http://schemas.xmlsoap.org/soap/envelope/";

				function t(e) {
					var t = String.fromCharCode.apply(null, new Uint8Array(e));
					return decodeURIComponent(escape(t))
				}

				function n(n) {
					if (window.DOMParser) {
						var r = t(n),
							s = (new window.DOMParser).parseFromString(r, "text/xml"),
							i = s ? s.getElementsByTagNameNS(e, "Envelope")[0] : null,
							a = i ? i.getElementsByTagNameNS(e, "Body")[0] : null;
						if (a ? a.getElementsByTagNameNS(e, "Fault")[0] : null) return null
					}
					return n
				}

				function r(n) {
					var r = "",
						s = "",
						i = "",
						a = -1,
						o = -1;
					if (window.DOMParser) {
						var u = t(n),
							l = (new window.DOMParser).parseFromString(u, "text/xml"),
							d = l ? l.getElementsByTagNameNS(e, "Envelope")[0] : null,
							c = d ? d.getElementsByTagNameNS(e, "Body")[0] : null,
							f = c ? c.getElementsByTagNameNS(e, "Fault")[0] : null,
							h = f ? f.getElementsByTagName("detail")[0] : null,
							m = h ? h.getElementsByTagName("Exception")[0] : null,
							g = null;
						if (null === f) return u;
						r = (g = f.getElementsByTagName("faultstring")[0].firstChild) ? g.nodeValue : null, null !== m && (s = (g = m.getElementsByTagName("StatusCode")[0]) ? g.firstChild.nodeValue : null, a = (i = (g = m.getElementsByTagName("Message")[0]) ? g.firstChild.nodeValue : null) ? i.lastIndexOf("[") + 1 : -1, o = i ? i.indexOf("]") : -1, i = i ? i.substring(a, o) : "")
					}
					var _ = "code: " + s + ", name: " + r;
					return i && (_ += ", message: " + i), _
				}
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
						return n.call(this, e)
					},
					getErrorResponse: function(e) {
						return r.call(this, e)
					}
				}
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), r.__dashjs_factory_name = "PlayReady", t.default = dashjs.FactoryMaker.getSingletonFactory(r)
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/servers/Widevine.js": function(e, t, n) {
			"use strict";

			function r() {
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
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), r.__dashjs_factory_name = "Widevine", t.default = dashjs.FactoryMaker.getSingletonFactory(r)
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/vo/ClearKeyKeySet.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}();
			var s = function() {
				function e(t, n) {
					if (function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, e), n && "persistent" !== n && "temporary" !== n) throw new Error("Invalid ClearKey key set type!  Must be one of 'persistent' or 'temporary'");
					this.keyPairs = t, this.type = n
				}
				return r(e, [{
					key: "toJWK",
					value: function() {
						var e = void 0,
							t = this.keyPairs.length,
							n = {
								keys: []
							};
						for (e = 0; e < t; e++) {
							var r = {
								kty: "oct",
								alg: "A128KW",
								kid: this.keyPairs[e].keyID,
								k: this.keyPairs[e].key
							};
							n.keys.push(r)
						}
						this.type && (n.type = this.type);
						var s = JSON.stringify(n),
							i = s.length,
							a = new ArrayBuffer(i),
							o = new Uint8Array(a);
						for (e = 0; e < i; e++) o[e] = s.charCodeAt(e);
						return a
					}
				}]), e
			}();
			t.default = s
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeyMessage.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e(t, n, r, s) {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.sessionToken = t, this.message = n, this.defaultURL = r, this.messageType = s || "license-request"
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeyPair.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e(t, n) {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.keyID = t, this.key = n
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeySystemAccess.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e(t, n) {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.keySystem = t, this.ksConfiguration = n
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/vo/KeySystemConfiguration.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e(t, n, r, s, i) {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.initDataTypes = ["cenc"], t && t.length && (this.audioCapabilities = t), n && n.length && (this.videoCapabilities = n), this.distinctiveIdentifier = r, this.persistentState = s, this.sessionTypes = i
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/vo/MediaCapability.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e(t, n) {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.contentType = t, this.robustness = n
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/protection/vo/NeedKey.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e(t, n) {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.initData = t, this.initDataType = n
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/DroppedFramesHistory.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				};

			function a() {
				var e = [],
					t = 0,
					n = 0;
				return {
					push: function(r, s) {
						var i = s && s.droppedVideoFrames ? s.droppedVideoFrames : 0,
							a = s && s.totalVideoFrames ? s.totalVideoFrames : 0,
							o = i - t;
						t = i;
						var u = a - n;
						n = a, isNaN(r) || (e[r] ? (e[r].droppedVideoFrames += o, e[r].totalVideoFrames += u) : e[r] = {
							droppedVideoFrames: o,
							totalVideoFrames: u
						})
					},
					getFrameHistory: function() {
						return e
					},
					reset: function(r) {
						e = [], t = r.droppedVideoFrames, n = r.totalVideoFrames
					}
				}
			}
			a.__dashjs_factory_name = "DroppedFramesHistory";
			var o = i.default.getClassFactory(a);
			t.default = o
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/RulesContext.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				};

			function a(e) {
				var t = (e = e || {}).abrController,
					n = e.switchHistory,
					r = e.droppedFramesHistory,
					s = e.currentRequest,
					i = e.useBufferOccupancyABR,
					a = e.useL2AABR,
					o = e.useLoLPABR,
					u = e.streamProcessor ? e.streamProcessor.getScheduleController() : null,
					l = e.streamProcessor ? e.streamProcessor.getRepresentationInfo() : null,
					d = e.videoModel ? e.videoModel : null;

				function c() {
					return l ? l.mediaInfo : null
				}
				return {
					getMediaType: function() {
						var e = c();
						return e ? e.type : null
					},
					getMediaInfo: c,
					getDroppedFramesHistory: function() {
						return r
					},
					getCurrentRequest: function() {
						return s
					},
					getSwitchHistory: function() {
						return n
					},
					getStreamInfo: function() {
						var e = c();
						return e ? e.streamInfo : null
					},
					getScheduleController: function() {
						return u
					},
					getAbrController: function() {
						return t
					},
					getRepresentationInfo: function() {
						return l
					},
					useBufferOccupancyABR: function() {
						return i
					},
					useL2AABR: function() {
						return a
					},
					useLoLPABR: function() {
						return o
					},
					getVideoModel: function() {
						return d
					}
				}
			}
			a.__dashjs_factory_name = "RulesContext", t.default = i.default.getClassFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequest.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				};
			var a = -1,
				o = {
					DEFAULT: .5,
					STRONG: 1,
					WEAK: 0
				};

			function u(e, t, n) {
				return {
					quality: void 0 === e ? a : e,
					reason: void 0 === t ? null : t,
					priority: function(e) {
						var t = o.DEFAULT;
						return e !== o.DEFAULT && e !== o.STRONG && e !== o.WEAK || (t = e), t
					}(n)
				}
			}
			u.__dashjs_factory_name = "SwitchRequest";
			var l = i.default.getClassFactory(u);
			l.NO_CHANGE = a, l.PRIORITY = o, i.default.updateClassFactory(u.__dashjs_factory_name, l), t.default = l
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequestHistory.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = i(n("./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequest.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var a = 8;

			function o() {
				var e = [],
					t = [];
				return {
					push: function(n) {
						n.newValue === s.default.NO_CHANGE && (n.newValue = n.oldValue), e[n.oldValue] || (e[n.oldValue] = {
							noDrops: 0,
							drops: 0,
							dropSize: 0
						});
						var r = n.newValue - n.oldValue,
							i = r < 0 ? 1 : 0,
							o = i ? -r : 0,
							u = i ? 0 : 1;
						if (e[n.oldValue].drops += i, e[n.oldValue].dropSize += o, e[n.oldValue].noDrops += u, t.push({
								idx: n.oldValue,
								noDrop: u,
								drop: i,
								dropSize: o
							}), t.length > a) {
							var l = t.shift();
							e[l.idx].drops -= l.drop, e[l.idx].dropSize -= l.dropSize, e[l.idx].noDrops -= l.noDrop
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
			var u = r.default.getClassFactory(o);
			t.default = u
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/ThroughputHistory.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				s = i(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function a(e) {
				var t = 20,
					n = 3,
					s = 4,
					i = 4,
					a = 1.3,
					o = 1.3,
					u = 8,
					l = 3,
					d = 2,
					c = 1,
					f = (e = e || {}).settings,
					h = void 0,
					m = void 0,
					g = void 0,
					_ = void 0,
					p = void 0;

				function E(e, t, n, r) {
					var s = Math.pow(.5, n / r.fast);
					e.fastEstimate = (1 - s) * t + s * e.fastEstimate;
					var i = Math.pow(.5, n / r.slow);
					e.slowEstimate = (1 - i) * t + i * e.slowEstimate, e.totalWeight += n
				}

				function v(e, t, u) {
					return f.get().streaming.abr.movingAverageMethod !== r.default.MOVING_AVERAGE_SLIDING_WINDOW ? function(e, t) {
						var n = e ? p.throughputHalfLife : p.latencyHalfLife,
							r = e ? g[t] : _[t];
						if (!r || r.totalWeight <= 0) return NaN;
						var s = r.fastEstimate / (1 - Math.pow(.5, r.totalWeight / n.fast)),
							i = r.slowEstimate / (1 - Math.pow(.5, r.totalWeight / n.slow));
						return e ? Math.min(s, i) : Math.max(s, i)
					}(e, t) : function(e, t, r) {
						var u = function(e, t, r) {
								var u = void 0,
									l = void 0;
								if (e ? (u = h[t], l = r ? n : s) : (u = m[t], l = i), u) {
									if (l >= u.length) l = u.length;
									else if (e)
										for (var d = 1; d < l; ++d) {
											var c = u[u.length - d] / u[u.length - d - 1];
											if ((c >= o || c <= 1 / a) && (l += 1) === u.length) break
										}
								} else l = 0;
								return l
							}(e, t, r),
							l = (e ? h : m)[t];
						if (0 === u || !l || 0 === l.length) return NaN;
						return (l = l.slice(-u)).reduce((function(e, t) {
							return e + t
						})) / l.length
					}(e, t, u)
				}

				function y(e, t) {
					return v(!0, e, t)
				}

				function T(e) {
					h[e] = h[e] || [], m[e] = m[e] || [], g[e] = g[e] || {
						fastEstimate: 0,
						slowEstimate: 0,
						totalWeight: 0
					}, _[e] = _[e] || {
						fastEstimate: 0,
						slowEstimate: 0,
						totalWeight: 0
					}
				}

				function b() {
					h = {}, m = {}, g = {}, _ = {}
				}
				var S = {
					push: function(e, n, s) {
						if (n.trace && n.trace.length) {
							var i = n.tresponse.getTime() - n.trequest.getTime() || 1,
								a = n._tfinish.getTime() - n.tresponse.getTime() || 1,
								o = n.trace.reduce((function(e, t) {
									return e + t.b[0]
								}), 0),
								u = void 0;
							u = f.get().streaming.lowLatencyEnabled ? n.trace.reduce((function(e, t) {
								return e + t.d
							}), 0) : s ? a : i + a;
							var l = Math.round(8 * o / u);
							if (T(e), function(e, t, n) {
									return e === r.default.VIDEO ? n < f.get().streaming.cacheLoadThresholds[r.default.VIDEO] : e === r.default.AUDIO ? n < f.get().streaming.cacheLoadThresholds[r.default.AUDIO] : void 0
								}(e, 0, a)) {
								if (h[e].length > 0 && !h[e].hasCachedEntries) return;
								h[e].hasCachedEntries = !0
							} else h[e] && h[e].hasCachedEntries && function(e) {
								delete h[e], delete m[e], delete g[e], delete _[e], T(e)
							}(e);
							h[e].push(l), h[e].length > t && h[e].shift(), m[e].push(i), m[e].length > t && m[e].shift(), E(g[e], l, .001 * a, p.throughputHalfLife), E(_[e], i, 1, p.latencyHalfLife)
						}
					},
					getAverageThroughput: y,
					getSafeAverageThroughput: function(e, t) {
						var n = y(e, t);
						return isNaN(n) || (n *= f.get().streaming.abr.bandwidthSafetyFactor), n
					},
					getAverageLatency: function(e) {
						return v(!1, e)
					},
					reset: b
				};
				return p = {
					throughputHalfLife: {
						fast: l,
						slow: u
					},
					latencyHalfLife: {
						fast: c,
						slow: d
					}
				}, b(), S
			}
			a.__dashjs_factory_name = "ThroughputHistory", t.default = s.default.getClassFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/abr/ABRRulesCollection.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = m(n("./node_modules/dashjs/build/es5/src/streaming/rules/abr/ThroughputRule.js")),
				s = m(n("./node_modules/dashjs/build/es5/src/streaming/rules/abr/InsufficientBufferRule.js")),
				i = m(n("./node_modules/dashjs/build/es5/src/streaming/rules/abr/AbandonRequestsRule.js")),
				a = m(n("./node_modules/dashjs/build/es5/src/streaming/rules/abr/DroppedFramesRule.js")),
				o = m(n("./node_modules/dashjs/build/es5/src/streaming/rules/abr/SwitchHistoryRule.js")),
				u = m(n("./node_modules/dashjs/build/es5/src/streaming/rules/abr/BolaRule.js")),
				l = m(n("./node_modules/dashjs/build/es5/src/streaming/rules/abr/L2ARule.js")),
				d = m(n("./node_modules/dashjs/build/es5/src/streaming/rules/abr/lolp/LoLpRule.js")),
				c = m(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				f = m(n("./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequest.js")),
				h = m(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js"));

			function m(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var g = "qualitySwitchRules",
				_ = "abandonFragmentRules";

			function p(e) {
				e = e || {};
				var t = this.context,
					n = e.mediaPlayerModel,
					c = e.dashMetrics,
					m = e.settings,
					p = void 0,
					E = void 0;

				function v(e) {
					return e.filter((function(e) {
						return e.quality > f.default.NO_CHANGE
					}))
				}

				function y(e) {
					var n, r = {},
						s = void 0,
						i = void 0,
						a = void 0,
						o = void 0;
					if (0 !== e.length) {
						for (r[f.default.PRIORITY.STRONG] = f.default.NO_CHANGE, r[f.default.PRIORITY.WEAK] = f.default.NO_CHANGE, r[f.default.PRIORITY.DEFAULT] = f.default.NO_CHANGE, s = 0, n = e.length; s < n; s += 1)(i = e[s]).quality !== f.default.NO_CHANGE && (r[i.priority] = r[i.priority] > f.default.NO_CHANGE ? Math.min(r[i.priority], i.quality) : i.quality);
						return r[f.default.PRIORITY.WEAK] !== f.default.NO_CHANGE && (a = r[f.default.PRIORITY.WEAK]), r[f.default.PRIORITY.DEFAULT] !== f.default.NO_CHANGE && (a = r[f.default.PRIORITY.DEFAULT]), r[f.default.PRIORITY.STRONG] !== f.default.NO_CHANGE && (a = r[f.default.PRIORITY.STRONG]), a !== f.default.NO_CHANGE && (o = a), (0, f.default)(t).create(o)
					}
				}
				return {
					initialize: function() {
						p = [], E = [], m.get().streaming.abr.useDefaultABRRules && (m.get().streaming.abr.ABRStrategy === h.default.ABR_STRATEGY_L2A ? p.push((0, l.default)(t).create({
							dashMetrics: c,
							mediaPlayerModel: n,
							settings: m
						})) : m.get().streaming.abr.ABRStrategy === h.default.ABR_STRATEGY_LoLP ? p.push((0, d.default)(t).create({
							dashMetrics: c
						})) : (p.push((0, u.default)(t).create({
							dashMetrics: c,
							mediaPlayerModel: n,
							settings: m
						})), p.push((0, r.default)(t).create({
							dashMetrics: c
						})), p.push((0, s.default)(t).create({
							dashMetrics: c
						})), p.push((0, o.default)(t).create()), p.push((0, a.default)(t).create()), E.push((0, i.default)(t).create({
							dashMetrics: c,
							mediaPlayerModel: n,
							settings: m
						})))), n.getABRCustomRules().forEach((function(e) {
							e.type === g && p.push(e.rule(t).create()), e.type === _ && E.push(e.rule(t).create())
						}))
					},
					reset: function() {
						[p, E].forEach((function(e) {
							e && e.length && e.forEach((function(e) {
								return e.reset && e.reset()
							}))
						})), p = [], E = []
					},
					getMaxQuality: function(e) {
						return y(v(p.map((function(t) {
							return t.getMaxIndex(e)
						})))) || (0, f.default)(t).create()
					},
					shouldAbandonFragment: function(e) {
						return y(v(E.map((function(t) {
							return t.shouldAbandon(e)
						})))) || (0, f.default)(t).create()
					},
					getQualitySwitchRules: function() {
						return p
					}
				}
			}
			p.__dashjs_factory_name = "ABRRulesCollection";
			var E = c.default.getClassFactory(p);
			E.QUALITY_SWITCH_RULES = g, E.ABANDON_FRAGMENT_RULES = _, c.default.updateSingletonFactory(p.__dashjs_factory_name, E), t.default = E
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/abr/AbandonRequestsRule.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = a(n("./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequest.js")),
				s = a(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = a(n("./node_modules/dashjs/build/es5/src/core/Debug.js"));

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function o(e) {
				e = e || {};
				var t = 1.8,
					n = 500,
					s = 5,
					a = this.context,
					u = e.mediaPlayerModel,
					l = e.dashMetrics,
					d = e.settings,
					c = void 0,
					f = void 0,
					h = void 0,
					m = void 0,
					g = void 0;

				function _() {
					h = {}, m = {}, g = []
				}
				return c = {
					shouldAbandon: function(e) {
						var i = (0, r.default)(a).create(r.default.NO_CHANGE, {
							name: o.__dashjs_factory_name
						});
						if (!(e && e.hasOwnProperty("getMediaInfo") && e.hasOwnProperty("getMediaType") && e.hasOwnProperty("getCurrentRequest") && e.hasOwnProperty("getRepresentationInfo") && e.hasOwnProperty("getAbrController"))) return i;
						var c, _, p = e.getMediaInfo(),
							E = e.getMediaType(),
							v = e.getCurrentRequest();
						if (!isNaN(v.index)) {
							c = E, _ = v.index, h[c] = h[c] || {}, h[c][_] = h[c][_] || {};
							var y = u.getStableBufferTime();
							if (l.getCurrentBufferLevel(E) > y) return i;
							var T = h[E][v.index];
							if (null === T || null === v.firstByteDate || m.hasOwnProperty(T.id)) return i;
							if (void 0 === T.firstByteTime && (g[E] = [], T.firstByteTime = v.firstByteDate.getTime(), T.segmentDuration = v.duration, T.bytesTotal = v.bytesTotal, T.id = v.index), T.bytesLoaded = v.bytesLoaded, T.elapsedTime = (new Date).getTime() - T.firstByteTime, T.bytesLoaded > 0 && T.elapsedTime > 0 && function(e, t) {
									g[e] = g[e] || [], g[e].push(t)
								}(E, Math.round(8 * T.bytesLoaded / T.elapsedTime)), g[E].length >= s && T.elapsedTime > n && T.bytesLoaded < T.bytesTotal) {
								var b = g[E].reduce((function(e, t) {
									return e + t
								}), 0);
								if (T.measuredBandwidthInKbps = Math.round(b / g[E].length), T.estimatedTimeOfDownload = +(8 * T.bytesTotal / T.measuredBandwidthInKbps / 1e3).toFixed(2), T.estimatedTimeOfDownload < T.segmentDuration * t || 0 === e.getRepresentationInfo().quality) return i;
								if (!m.hasOwnProperty(T.id)) {
									var S = e.getAbrController(),
										A = T.bytesTotal - T.bytesLoaded,
										I = S.getBitrateList(p),
										R = S.getQualityForBitrate(p, T.measuredBandwidthInKbps * d.get().streaming.abr.bandwidthSafetyFactor),
										M = S.getMinAllowedIndexFor(E),
										C = void 0 !== M ? Math.max(M, R) : R;
									A > T.bytesTotal * I[C].bitrate / I[S.getQualityFor(E)].bitrate && (i.quality = C, i.reason.throughput = T.measuredBandwidthInKbps, i.reason.fragmentID = T.id, m[T.id] = T, f.debug("[" + E + "] frag id", T.id, " is asking to abandon and switch to quality to ", C, " measured bandwidth was", T.measuredBandwidthInKbps), delete h[E][T.id])
								}
							} else T.bytesLoaded === T.bytesTotal && delete h[E][T.id]
						}
						return i
					},
					reset: _
				}, f = (0, i.default)(a).getInstance().getLogger(c), _(), c
			}
			o.__dashjs_factory_name = "AbandonRequestsRule", t.default = s.default.getClassFactory(o)
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/abr/BolaRule.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = d(n("./node_modules/dashjs/build/es5/src/streaming/constants/MetricsConstants.js")),
				s = d(n("./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequest.js")),
				i = d(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				a = n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js"),
				o = d(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				u = d(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				l = d(n("./node_modules/dashjs/build/es5/src/core/Debug.js"));

			function d(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var c = 0,
				f = 1,
				h = 2,
				m = 10,
				g = 2,
				_ = .99;

			function p(e) {
				e = e || {};
				var t = this.context,
					n = e.dashMetrics,
					i = e.mediaPlayerModel,
					d = (0, o.default)(t).getInstance(),
					p = void 0,
					E = void 0,
					v = void 0;

				function y(e, t, n) {
					var r = n.reduce((function(e, t, r) {
						return t > n[e] ? r : e
					}), 0);
					if (0 === r) return null;
					var s = Math.max(e, m + g * t.length),
						i = (n[r] - 1) / (s / m - 1);
					return {
						gp: i,
						Vp: m / i
					}
				}

				function T(e) {
					var t = {},
						n = e.getMediaInfo().bitrateList.map((function(e) {
							return e.bandwidth
						})),
						r = function(e) {
							return e.map((function(e) {
								return Math.log(e)
							}))
						}(n);
					r = r.map((function(e) {
						return e - r[0] + 1
					}));
					var s = i.getStableBufferTime(),
						a = y(s, n, r);
					return a ? (t.state = f, t.bitrates = n, t.utilities = r, t.stableBufferTime = s, t.Vp = a.Vp, t.gp = a.gp, t.lastQuality = 0, b(t)) : t.state = c, t
				}

				function b(e) {
					e.placeholderBuffer = 0, e.mostAdvancedSegmentStart = NaN, e.lastSegmentWasReplacement = !1, e.lastSegmentStart = NaN, e.lastSegmentDurationS = NaN, e.lastSegmentRequestTimeMs = NaN, e.lastSegmentFinishTimeMs = NaN
				}

				function S(e, t) {
					var r = i.getStableBufferTime();
					if (e.stableBufferTime !== r) {
						var s = y(r, e.bitrates, e.utilities);
						if (s.Vp !== e.Vp || s.gp !== e.gp) {
							var a = n.getCurrentBufferLevel(t),
								o = a + e.placeholderBuffer;
							o -= m, o *= s.Vp / e.Vp, o += m, e.stableBufferTime = r, e.Vp = s.Vp, e.gp = s.gp, e.placeholderBuffer = Math.max(0, o - a)
						}
					}
				}

				function A(e, t) {
					return e.Vp * (e.utilities[t] + e.gp)
				}

				function I(e, t) {
					for (var n = e.bitrates[t], r = e.utilities[t], s = 0, i = t - 1; i >= 0; --i)
						if (e.utilities[i] < e.utilities[t]) {
							var a = e.bitrates[i],
								o = e.utilities[i],
								u = e.Vp * (e.gp + (n * o - a * r) / (n - a));
							s = Math.max(s, u)
						} return s
				}

				function R() {
					for (var e in v) v.hasOwnProperty(e) && v[e].state === h && (v[e].placeholderBuffer = 0)
				}

				function M() {
					for (var e in v)
						if (v.hasOwnProperty(e)) {
							var t = v[e];
							t.state !== c && (t.state = f, b(t))
						}
				}

				function C(e) {
					if (e && e.chunk && e.chunk.mediaInfo) {
						var t = v[e.chunk.mediaInfo.type];
						if (t && t.state !== c) {
							var n = e.chunk.start;
							isNaN(t.mostAdvancedSegmentStart) || n > t.mostAdvancedSegmentStart ? (t.mostAdvancedSegmentStart = n, t.lastSegmentWasReplacement = !1) : t.lastSegmentWasReplacement = !0, t.lastSegmentStart = n, t.lastSegmentDurationS = e.chunk.duration, t.lastQuality = e.chunk.quality, N(t, e.chunk.mediaInfo.type)
						}
					}
				}

				function D(e) {
					if (e && e.metric === r.default.HTTP_REQUEST && e.value && e.value.type === a.HTTPRequest.MEDIA_SEGMENT_TYPE && e.value.trace && e.value.trace.length) {
						var t = v[e.mediaType];
						t && t.state !== c && (t.lastSegmentRequestTimeMs = e.value.trequest.getTime(), t.lastSegmentFinishTimeMs = e.value._tfinish.getTime(), N(t, e.mediaType))
					}
				}

				function N(e, t) {
					if (!isNaN(e.lastSegmentStart) && !isNaN(e.lastSegmentRequestTimeMs) && !isNaN(e.placeholderBuffer)) {
						if (e.placeholderBuffer *= _, !isNaN(e.lastSegmentFinishTimeMs)) {
							var r = n.getCurrentBufferLevel(t) + .001 * (e.lastSegmentFinishTimeMs - e.lastSegmentRequestTimeMs),
								s = A(e, e.lastQuality),
								i = Math.max(0, s - r);
							e.placeholderBuffer = Math.min(i, e.placeholderBuffer)
						}
						e.lastSegmentWasReplacement && !isNaN(e.lastSegmentDurationS) && (e.placeholderBuffer += e.lastSegmentDurationS), e.lastSegmentStart = NaN, e.lastSegmentRequestTimeMs = NaN
					}
				}

				function O(e) {
					if (e) {
						var t = v[e.mediaType];
						t && t.state !== c && (t.abrQuality = e.newQuality)
					}
				}

				function j(e) {
					if (e) {
						var t = v[e.mediaType];
						if (t && t.state !== c) {
							var r = n.getCurrentBufferLevel(e.mediaType),
								s = void 0;
							s = t.abrQuality > 0 ? I(t, t.abrQuality) : m;
							var i = Math.max(0, s - r);
							t.placeholderBuffer = Math.min(t.placeholderBuffer, i)
						}
					}
				}

				function w() {
					v = {}
				}
				return p = {
					getMaxIndex: function(e) {
						var r = (0, s.default)(t).create();
						if (!(e && e.hasOwnProperty("getMediaInfo") && e.hasOwnProperty("getMediaType") && e.hasOwnProperty("getScheduleController") && e.hasOwnProperty("getStreamInfo") && e.hasOwnProperty("getAbrController") && e.hasOwnProperty("useBufferOccupancyABR"))) return r;
						var i = e.getMediaInfo(),
							a = e.getMediaType(),
							o = e.getScheduleController(),
							u = e.getStreamInfo(),
							l = e.getAbrController(),
							d = l.getThroughputHistory(),
							m = u ? u.id : null,
							g = u && u.manifestInfo && u.manifestInfo.isDynamic,
							_ = e.useBufferOccupancyABR();
						if (r.reason = r.reason || {}, !_) return r;
						o.setTimeToLoadDelay(0);
						var p = function(e) {
							var t = e.getMediaType(),
								n = v[t];
							return n ? n.state !== c && S(n, t) : (n = T(e), v[t] = n), n
						}(e);
						if (p.state === c) return r;
						var y = n.getCurrentBufferLevel(a),
							R = d.getAverageThroughput(a, g),
							M = d.getSafeAverageThroughput(a, g),
							C = d.getAverageLatency(a),
							D = void 0;
						if (r.reason.state = p.state, r.reason.throughput = R, r.reason.latency = C, isNaN(R)) return r;
						switch (p.state) {
							case f:
								D = l.getQualityForBitrate(i, M, C), r.quality = D, r.reason.throughput = M, p.placeholderBuffer = Math.max(0, I(p, D) - y), p.lastQuality = D, !isNaN(p.lastSegmentDurationS) && y >= p.lastSegmentDurationS && (p.state = h);
								break;
							case h:
								! function(e, t) {
									var n = Date.now();
									if (isNaN(e.lastSegmentFinishTimeMs)) {
										if (!isNaN(e.lastCallTimeMs)) {
											var r = .001 * (n - e.lastCallTimeMs);
											e.placeholderBuffer += Math.max(0, r)
										}
									} else {
										var s = .001 * (n - e.lastSegmentFinishTimeMs);
										e.placeholderBuffer += Math.max(0, s)
									}
									e.lastCallTimeMs = n, e.lastSegmentStart = NaN, e.lastSegmentRequestTimeMs = NaN, e.lastSegmentFinishTimeMs = NaN, S(e, t)
								}(p, a), D = function(e, t) {
									for (var n = e.bitrates.length, r = NaN, s = NaN, i = 0; i < n; ++i) {
										var a = (e.Vp * (e.utilities[i] + e.gp) - t) / e.bitrates[i];
										(isNaN(s) || a >= s) && (s = a, r = i)
									}
									return r
								}(p, y + p.placeholderBuffer);
								var N = l.getQualityForBitrate(i, M, C);
								D > p.lastQuality && D > N && (D = Math.max(N, p.lastQuality));
								var O = Math.max(0, y + p.placeholderBuffer - A(p, D));
								O <= p.placeholderBuffer ? (p.placeholderBuffer -= O, O = 0) : (O -= p.placeholderBuffer, p.placeholderBuffer = 0, D < l.getTopQualityIndexFor(a, m) ? o.setTimeToLoadDelay(1e3 * O) : O = 0), r.quality = D, r.reason.throughput = R, r.reason.latency = C, r.reason.bufferLevel = y, r.reason.placeholderBuffer = p.placeholderBuffer, r.reason.delay = O, p.lastQuality = D;
								break;
							default:
								E.debug("BOLA ABR rule invoked in bad state."), r.quality = l.getQualityForBitrate(i, M, C), r.reason.state = p.state, r.reason.throughput = M, r.reason.latency = C, p.state = f, b(p)
						}
						return r
					},
					reset: function() {
						w(), d.off(u.default.BUFFER_EMPTY, R, p), d.off(u.default.PLAYBACK_SEEKING, M, p), d.off(u.default.MEDIA_FRAGMENT_LOADED, C, p), d.off(u.default.METRIC_ADDED, D, p), d.off(u.default.QUALITY_CHANGE_REQUESTED, O, p), d.off(u.default.FRAGMENT_LOADING_ABANDONED, j, p)
					}
				}, E = (0, l.default)(t).getInstance().getLogger(p), w(), d.on(u.default.BUFFER_EMPTY, R, p), d.on(u.default.PLAYBACK_SEEKING, M, p), d.on(u.default.MEDIA_FRAGMENT_LOADED, C, p), d.on(u.default.METRIC_ADDED, D, p), d.on(u.default.QUALITY_CHANGE_REQUESTED, O, p), d.on(u.default.FRAGMENT_LOADING_ABANDONED, j, p), p
			}
			p.__dashjs_factory_name = "BolaRule", t.default = i.default.getClassFactory(p)
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/abr/DroppedFramesRule.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = a(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = a(n("./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequest.js")),
				i = a(n("./node_modules/dashjs/build/es5/src/core/Debug.js"));

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function o() {
				var e = this.context,
					t = void 0,
					n = void 0,
					r = .15,
					a = 375;
				return t = {
					getMaxIndex: function(t) {
						var i = (0, s.default)(e).create();
						if (!t || !t.hasOwnProperty("getDroppedFramesHistory")) return i;
						var o = t.getDroppedFramesHistory();
						if (o) {
							for (var u = o.getFrameHistory(), l = 0, d = 0, c = s.default.NO_CHANGE, f = 1; f < u.length; f++)
								if (u[f] && (l = u[f].droppedVideoFrames, (d = u[f].totalVideoFrames) > a && l / d > r)) {
									c = f - 1, n.debug("index: " + c + " Dropped Frames: " + l + " Total Frames: " + d);
									break
								} return (0, s.default)(e).create(c, {
								droppedFrames: l
							})
						}
						return i
					}
				}, n = (0, i.default)(e).getInstance().getLogger(t), t
			}
			o.__dashjs_factory_name = "DroppedFramesRule", t.default = r.default.getClassFactory(o)
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/abr/InsufficientBufferRule.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = d(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				s = d(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				i = d(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				a = d(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				o = d(n("./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequest.js")),
				u = d(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				l = d(n("./node_modules/dashjs/build/es5/src/streaming/constants/MetricsConstants.js"));

			function d(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function c(e) {
				e = e || {};
				var t = .5,
					n = 2,
					i = this.context,
					d = (0, r.default)(i).getInstance(),
					c = e.dashMetrics,
					f = void 0,
					h = void 0,
					m = void 0;

				function g() {
					(m = {})[u.default.VIDEO] = {
						ignoreCount: n
					}, m[u.default.AUDIO] = {
						ignoreCount: n
					}
				}

				function _() {
					g()
				}

				function p(e) {
					isNaN(e.startTime) || e.mediaType !== u.default.AUDIO && e.mediaType !== u.default.VIDEO || m[e.mediaType].ignoreCount > 0 && m[e.mediaType].ignoreCount--
				}
				return f = {
					getMaxIndex: function(e) {
						var n = (0, o.default)(i).create();
						if (!e || !e.hasOwnProperty("getMediaType")) return n;
						! function() {
							if (!c || !c.hasOwnProperty("getCurrentBufferLevel") || !c.hasOwnProperty("getCurrentBufferState")) throw new Error(u.default.MISSING_CONFIG_ERROR)
						}();
						var r = e.getMediaType(),
							s = c.getCurrentBufferState(r),
							a = e.getRepresentationInfo().fragmentDuration;
						if (function(e) {
								return m[e].ignoreCount > 0
							}(r) || !a) return n;
						if (s && s.state === l.default.BUFFER_EMPTY) h.debug("[" + r + "] Switch to index 0; buffer is empty."), n.quality = 0, n.reason = "InsufficientBufferRule: Buffer is empty";
						else {
							var d = e.getMediaInfo(),
								f = e.getAbrController(),
								g = f.getThroughputHistory(),
								_ = c.getCurrentBufferLevel(r),
								p = g.getAverageThroughput(r),
								E = g.getAverageLatency(r),
								v = p * (_ / a) * t;
							n.quality = f.getQualityForBitrate(d, v, E), n.reason = "InsufficientBufferRule: being conservative to avoid immediate rebuffering"
						}
						return n
					},
					reset: function() {
						g(), d.off(s.default.PLAYBACK_SEEKING, _, f), d.off(s.default.BYTES_APPENDED_END_FRAGMENT, p, f)
					}
				}, h = (0, a.default)(i).getInstance().getLogger(f), g(), d.on(s.default.PLAYBACK_SEEKING, _, f), d.on(s.default.BYTES_APPENDED_END_FRAGMENT, p, f), f
			}
			c.__dashjs_factory_name = "InsufficientBufferRule", t.default = i.default.getClassFactory(c)
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/abr/L2ARule.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = c(n("./node_modules/dashjs/build/es5/src/streaming/constants/MetricsConstants.js")),
				s = c(n("./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequest.js")),
				i = c(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				a = n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js"),
				o = c(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				u = c(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				l = c(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				d = c(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js"));

			function c(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var f = 0,
				h = 1,
				m = 2;

			function g(e) {
				e = e || {};
				var t = this.context,
					n = e.dashMetrics,
					i = (0, o.default)(t).getInstance(),
					c = void 0,
					g = void 0,
					_ = void 0,
					p = void 0;

				function E(e) {
					var t = {},
						n = e.getMediaInfo(),
						r = n.bitrateList.map((function(e) {
							return e.bandwidth / 1e3
						}));
					return t.state = h, t.bitrates = r, t.lastQuality = 0,
						function(e) {
							if (!e || !e.type) return;
							_[e.type] = {}, _[e.type].w = [], _[e.type].prev_w = [], _[e.type].Q = 0, _[e.type].segment_request_start_s = 0, _[e.type].segment_download_finish_s = 0, _[e.type].B_target = 1.5
						}(n), v(t), t
				}

				function v(e) {
					e.placeholderBuffer = 0, e.mostAdvancedSegmentStart = NaN, e.lastSegmentWasReplacement = !1, e.lastSegmentStart = NaN, e.lastSegmentDurationS = NaN, e.lastSegmentRequestTimeMs = NaN, e.lastSegmentFinishTimeMs = NaN
				}

				function y() {
					for (var e in g)
						if (g.hasOwnProperty(e)) {
							var t = g[e];
							t.state !== f && (t.state = h, v(t))
						}
				}

				function T(e) {
					if (e && e.chunk && e.chunk.mediaInfo) {
						var t = g[e.chunk.mediaInfo.type],
							n = _[e.chunk.mediaInfo.type];
						if (t && t.state !== f) {
							var r = e.chunk.start;
							isNaN(t.mostAdvancedSegmentStart) || r > t.mostAdvancedSegmentStart ? (t.mostAdvancedSegmentStart = r, t.lastSegmentWasReplacement = !1) : t.lastSegmentWasReplacement = !0, t.lastSegmentStart = r, t.lastSegmentDurationS = e.chunk.duration, t.lastQuality = e.chunk.quality, S(t, n)
						}
					}
				}

				function b(e) {
					if (e && e.metric === r.default.HTTP_REQUEST && e.value && e.value.type === a.HTTPRequest.MEDIA_SEGMENT_TYPE && e.value.trace && e.value.trace.length) {
						var t = g[e.mediaType],
							n = _[e.mediaType];
						t && t.state !== f && (t.lastSegmentRequestTimeMs = e.value.trequest.getTime(), t.lastSegmentFinishTimeMs = e.value._tfinish.getTime(), S(t, n))
					}
				}

				function S(e, t) {
					isNaN(e.lastSegmentStart) || isNaN(e.lastSegmentRequestTimeMs) || (t.segment_request_start_s = .001 * e.lastSegmentRequestTimeMs, t.segment_download_finish_s = .001 * e.lastSegmentFinishTimeMs, e.lastSegmentStart = NaN, e.lastSegmentRequestTimeMs = NaN)
				}

				function A(e) {
					if (e && e.mediaType) {
						var t = g[e.mediaType];
						t && t.state !== f && (t.abrQuality = e.newQuality)
					}
				}

				function I(e, t) {
					if (e.length !== t.length) return -1;
					for (var n = 0, r = 0; r < e.length; r++) n += e[r] * t[r];
					return n
				}

				function R() {
					g = {}, _ = {}
				}
				return c = {
					getMaxIndex: function(e) {
						var r = (0, s.default)(t).create(),
							i = Math.pow(4, .99),
							a = Math.max(Math.pow(4, 1), i * Math.sqrt(4)),
							o = e.getMediaInfo(),
							u = e.getMediaType(),
							l = o.bitrateList.map((function(e) {
								return e.bandwidth
							})),
							c = l.length,
							y = e.getScheduleController(),
							T = e.getStreamInfo(),
							b = e.getAbrController(),
							S = b.getThroughputHistory(),
							A = T && T.manifestInfo && T.manifestInfo.isDynamic,
							R = e.useL2AABR(),
							M = n.getCurrentBufferLevel(u, !0),
							C = S.getSafeAverageThroughput(u, A),
							D = S.getAverageThroughput(u, A),
							N = S.getAverageLatency(u),
							O = void 0,
							j = e.getVideoModel().getPlaybackRate();
						if (!(e && e.hasOwnProperty("getMediaInfo") && e.hasOwnProperty("getMediaType") && e.hasOwnProperty("getScheduleController") && e.hasOwnProperty("getStreamInfo") && e.hasOwnProperty("getAbrController") && e.hasOwnProperty("useL2AABR"))) return r;
						if (r.reason = r.reason || {}, !R || u === d.default.AUDIO) return r;
						y.setTimeToLoadDelay(0);
						var w = function(e) {
							var t = e.getMediaType(),
								n = g[t];
							return n || (n = E(e), g[t] = n), n
						}(e);
						if (w.state === f) return r;
						var P = _[u];
						if (!P) return r;
						if (r.reason.state = w.state, r.reason.throughput = D, r.reason.latency = N, isNaN(D)) return r;
						switch (w.state) {
							case h:
								if (O = b.getQualityForBitrate(o, C, N), r.quality = O, r.reason.throughput = C, w.lastQuality = O, !isNaN(w.lastSegmentDurationS) && M >= P.B_target) {
									w.state = m, P.Q = i;
									for (var L = 0; L < c; ++L) L === w.lastQuality ? P.prev_w[L] = 1 : P.prev_w[L] = 0
								}
								break;
							case m:
								var F = [],
									x = n.getCurrentHttpRequest(u).trace.reduce((function(e, t) {
										return e + t.d
									}), 0),
									U = n.getCurrentHttpRequest(u).trace.reduce((function(e, t) {
										return e + t.b[0]
									}), 0),
									B = Math.round(8 * U / x);
								B < 1 && (B = 1);
								for (var k = w.lastSegmentDurationS, G = 1, q = 0; q < c; ++q) l[q] = l[q] / 1e3, j * l[q] > B && (G = -1), P.w[q] = P.prev_w[q] + G * (k / (2 * a)) * ((P.Q + i) * (j * l[q] / B));
								P.w = function(e) {
									for (var t = e.length, n = !1, r = [], s = 0; s < t; ++s) r[s] = e[s];
									for (var i = e.sort((function(e, t) {
											return t - e
										})), a = 0, o = 0, u = [], l = 0; l < t - 1; ++l)
										if ((o = ((a += i[l]) - 1) / (l + 1)) >= i[l + 1]) {
											n = !0;
											break
										} n || (o = (a + i[t - 1] - 1) / t);
									for (var d = 0; d < t; ++d) u[d] = Math.max(r[d] - o, 0);
									return u
								}(P.w);
								for (var H = 0; H < c; ++H) F[H] = P.w[H] - P.prev_w[H], P.prev_w[H] = P.w[H];
								P.Q = Math.max(0, P.Q - k + k * j * ((I(l, P.prev_w) + I(l, F)) / B));
								for (var K = [], Y = 0; Y < c; ++Y) K[Y] = Math.abs(l[Y] - I(P.w, l));
								(O = K.indexOf(Math.min.apply(Math, K))) > w.lastQuality && l[w.lastQuality + 1] <= B && (O = w.lastQuality + 1), l[O] >= B && (P.Q = 2 * Math.max(i, P.Q)), r.quality = O, r.reason.throughput = D, r.reason.latency = N, r.reason.bufferLevel = M, w.lastQuality = r.quality;
								break;
							default:
								p.debug("L2A ABR rule invoked in bad state."), r.quality = b.getQualityForBitrate(o, C, N), r.reason.state = w.state, r.reason.throughput = C, r.reason.latency = N, w.state = h, v(w)
						}
						return r
					},
					reset: function() {
						R(), i.off(u.default.PLAYBACK_SEEKING, y, c), i.off(u.default.MEDIA_FRAGMENT_LOADED, T, c), i.off(u.default.METRIC_ADDED, b, c), i.off(u.default.QUALITY_CHANGE_REQUESTED, A, c)
					}
				}, p = (0, l.default)(t).getInstance().getLogger(c), R(), i.on(u.default.PLAYBACK_SEEKING, y, c), i.on(u.default.MEDIA_FRAGMENT_LOADED, T, c), i.on(u.default.METRIC_ADDED, b, c), i.on(u.default.QUALITY_CHANGE_REQUESTED, A, c), c
			}
			g.__dashjs_factory_name = "L2ARule", t.default = i.default.getClassFactory(g)
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/abr/SwitchHistoryRule.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = a(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = a(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				i = a(n("./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequest.js"));

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function o() {
				var e = this.context,
					t = void 0,
					n = void 0,
					r = .075,
					a = 6;
				return t = {
					getMaxIndex: function(t) {
						for (var s = t ? t.getSwitchHistory() : null, o = s ? s.getSwitchRequests() : [], u = 0, l = 0, d = 0, c = (0, i.default)(e).create(), f = 0; f < o.length; f++)
							if (void 0 !== o[f] && (u += o[f].drops, l += o[f].noDrops, d += o[f].dropSize, u + l >= a && u / l > r)) {
								c.quality = f > 0 && o[f].drops > 0 ? f - 1 : f, c.reason = {
									index: c.quality,
									drops: u,
									noDrops: l,
									dropSize: d
								}, n.debug("Switch history rule index: " + c.quality + " samples: " + (u + l) + " drops: " + u);
								break
							} return c
					}
				}, n = (0, s.default)(e).getInstance().getLogger(t), t
			}
			o.__dashjs_factory_name = "SwitchHistoryRule", t.default = r.default.getClassFactory(o)
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/abr/ThroughputRule.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = u(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = u(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				i = u(n("./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequest.js")),
				a = u(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				o = u(n("./node_modules/dashjs/build/es5/src/streaming/constants/MetricsConstants.js"));

			function u(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function l(e) {
				e = e || {};
				var t = this.context,
					n = e.dashMetrics,
					r = void 0,
					u = void 0;
				return r = {
					getMaxIndex: function(e) {
						var r = (0, i.default)(t).create();
						if (!(e && e.hasOwnProperty("getMediaInfo") && e.hasOwnProperty("getMediaType") && e.hasOwnProperty("useBufferOccupancyABR") && e.hasOwnProperty("getAbrController") && e.hasOwnProperty("getScheduleController"))) return r;
						! function() {
							if (!n || !n.hasOwnProperty("getCurrentBufferState")) throw new Error(a.default.MISSING_CONFIG_ERROR)
						}();
						var s = e.getMediaInfo(),
							l = e.getMediaType(),
							d = n.getCurrentBufferState(l),
							c = e.getScheduleController(),
							f = e.getAbrController(),
							h = e.getStreamInfo(),
							m = h && h.manifestInfo ? h.manifestInfo.isDynamic : null,
							g = f.getThroughputHistory(),
							_ = g.getSafeAverageThroughput(l, m),
							p = g.getAverageLatency(l),
							E = e.useBufferOccupancyABR();
						return isNaN(_) || !d || E ? r : (f.getAbandonmentStateFor(l) !== o.default.ABANDON_LOAD && (d.state === o.default.BUFFER_LOADED || m) && (r.quality = f.getQualityForBitrate(s, _, p), c.setTimeToLoadDelay(0), u.debug("[" + l + "] requesting switch to index: ", r.quality, "Average throughput", Math.round(_), "kbps"), r.reason = {
							throughput: _,
							latency: p
						}), r)
					},
					reset: function() {}
				}, u = (0, s.default)(t).getInstance().getLogger(r), r
			}
			l.__dashjs_factory_name = "ThroughputRule", t.default = r.default.getClassFactory(l)
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/abr/lolp/LearningAbrController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = i(n("./node_modules/dashjs/build/es5/src/core/Debug.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var a = {
				MANUAL: "manual_weight_selection",
				RANDOM: "random_weight_selection",
				DYNAMIC: "dynamic_weight_selection"
			};

			function o() {
				var e = this.context,
					t = void 0,
					n = void 0,
					r = void 0,
					i = void 0,
					o = void 0,
					u = void 0,
					l = void 0,
					d = void 0,
					c = void 0;

				function f() {
					r = null, i = 1, o = 100, u = 0, null, l = null, d = null, c = a.DYNAMIC
				}

				function h() {
					var e = 0;
					if (r)
						for (var t = 0; t < r.length; t++) {
							var n = r[t];
							n.state.throughput > e && (e = n.state.throughput)
						}
					return e
				}

				function m(e, t, n) {
					var r = e.map((function(e, r) {
						return n[r] * Math.pow(e - t[r], 2)
					})).reduce((function(e, t) {
						return e + t
					}));
					return (r < 0 ? -1 : 1) * Math.sqrt(Math.abs(r))
				}

				function g(e, t) {
					return m([e.state.throughput, e.state.latency, e.state.rebuffer, e.state.switch], [t.state.throughput, t.state.latency, t.state.rebuffer, t.state.switch], [1, 1, 1, 1])
				}

				function _(e, t, n) {
					for (var r = 0; r < t.length; r++) {
						var s = t[r],
							i = g(s, e);
						p(s, n, Math.exp(-1 * Math.pow(i, 2) / (2 * Math.pow(.1, 2))))
					}
				}

				function p(e, t, n) {
					var r = e.state,
						s = [.01, .01, .01, .01];
					r.throughput = r.throughput + (t[0] - r.throughput) * s[0] * n, r.latency = r.latency + (t[1] - r.latency) * s[1] * n, r.rebuffer = r.rebuffer + (t[2] - r.rebuffer) * s[2] * n, r.switch = r.switch+(t[3] - r.switch) * s[3] * n
				}

				function E(e, t, n, r, s, i, a) {
					l || (l = d[d.length - 1]);
					var o = e.findWeightVector(t, n, r, s, i, a);
					null !== o && -1 !== o && (l = o)
				}
				return t = {
					getNextQuality: function(e, t, s, f, g, p, v) {
						var y = s,
							T = f,
							b = t,
							S = function(e) {
								if (!r) {
									r = [];
									var t = e.bitrateList,
										n = [];
									u = t[0].bandwidth, t.forEach((function(e) {
										n.push(e.bandwidth), e.bandwidth < u && (u = e.bandwidth)
									})), o = n.map((function(e) {
										return Math.pow(e, 2)
									})).reduce((function(e, t) {
										return e + t
									})), i = Math.sqrt(o);
									for (var s = 0; s < t.length; s++) {
										var a = {
											qualityIndex: s,
											bitrate: t[s].bandwidth,
											state: {
												throughput: t[s].bandwidth / i,
												latency: 0,
												rebuffer: 0,
												switch: 0
											}
										};
										r.push(a), a.bitrate === u && a
									}
									d = function(e) {
										var t = [],
											n = function(e) {
												for (var t = [], n = 0; n < e; n++) {
													var r = [Math.random() * h(), Math.random(), Math.random(), Math.random()];
													t.push(r)
												}
												return t
											}(Math.pow(e.length, 2));
										t.push(n[0]);
										for (var r = [1, 1, 1, 1], s = 1; s < e.length; s++) {
											for (var i = null, a = null, o = 0; o < n.length; o++) {
												for (var u = n[o], l = null, d = 0; d < t.length; d++) {
													var c = m(u, t[d], r);
													(null === l || c < l) && (l = c)
												}(null === a || l > a) && (i = u, a = l)
											}
											t.push(i)
										}
										for (var f = null, g = null, _ = 0; _ < t.length; _++) {
											for (var p = 0, E = 0; E < t.length; E++) _ !== E && (p += m(t[_], t[E], r));
											(null === f || p > f) && (f = p, g = _)
										}
										var v = [];
										v.push(t[g]), t.splice(g, 1);
										for (; t.length > 0;) {
											for (var y = null, T = null, b = 0; b < t.length; b++) {
												var S = m(v[0], t[b], r);
												(null === y || S < y) && (y = S, T = b)
											}
											v.push(t[T]), t.splice(T, 1)
										}
										return v
									}(r)
								}
								var o;
								return r
							}(e),
							A = t / i;
						A > 1 && (A = h()), s /= o, n.debug("getNextQuality called throughput:" + A + " latency:" + s + " bufferSize:" + f + " currentQualityIndex:" + p + " playbackRate:" + g);
						var I = S[p],
							R = I.bitrate * v.getSegmentDuration() / b,
							M = Math.max(0, R - T);
						if (T - R < v.getMinBuffer()) return n.debug("Buffer is low for bitrate= " + I.bitrate + " downloadTime=" + R + " currentBuffer=" + T + " rebuffer=" + M),
							function(e, t) {
								var n = 0,
									s = e;
								if (r)
									for (var i = 0; i < r.length; i++) {
										var a = r[i];
										a.bitrate < e.bitrate && a.bitrate > n && t > a.bitrate && (n = a.bitrate, s = a)
									}
								return s
							}(I, b).qualityIndex;
						switch (c) {
							case a.MANUAL:
								l = [.4, .4, .4, .4];
								break;
							case a.RANDOM:
								! function(e) {
									l = function(e, t) {
										for (var n = [], r = Math.sqrt(2 / e), s = 0; s < t; s++) n.push(Math.random() * r);
										return l = n
									}(e.length, 4)
								}(S);
								break;
							case a.DYNAMIC:
								E(v, S, y, T, M, b, g);
								break;
							default:
								E(v, S, y, T, M, b, g)
						}
						for (var C = null, D = null, N = null, O = 0; O < S.length; O++) {
							var j = S[O],
								w = j.state,
								P = [w.throughput, w.latency, w.rebuffer, w.switch],
								L = l.slice(),
								F = v.getNextBufferWithBitrate(j.bitrate, T, b),
								x = F < v.getMinBuffer();
							x && n.debug("Buffer is low for bitrate=" + j.bitrate + " downloadTime=" + R + " currentBuffer=" + T + " nextBuffer=" + F), (j.bitrate > t - 1e4 || x) && j.bitrate !== u && (L[0] = 100);
							var U = m(P, [A, 0, 0, 0], L);
							(null === C || U < C) && (C = U, D = j.qualityIndex, N = j, L)
						}
						var B = Math.abs(I.bitrate - N.bitrate) / i;
						return _(I, S, [A, s, M, B]), _(N, S, [A, 0, 0, B]), D
					},
					reset: function() {
						f()
					}
				}, n = (0, s.default)(e).getInstance().getLogger(t), f(), t
			}
			o.__dashjs_factory_name = "LearningAbrController", t.default = r.default.getClassFactory(o)
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/abr/lolp/LoLpQoEEvaluator.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = i(n("./node_modules/dashjs/build/es5/src/streaming/rules/abr/lolp/QoeInfo.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function a() {
				var e, t = void 0,
					n = void 0,
					r = void 0,
					i = void 0;

				function a() {
					t = null, n = null, r = null, i = null
				}

				function o(e, t, n, r) {
					var i = new s.default;
					return i.type = e, i.weights.bitrateReward = t || 1, i.weights.bitrateSwitchPenalty = 1, i.weights.rebufferPenalty = n || 1e3, i.weights.latencyPenalty = [], i.weights.latencyPenalty.push({
						threshold: 1.1,
						penalty: .05 * r
					}), i.weights.latencyPenalty.push({
						threshold: 1e8,
						penalty: .1 * n
					}), i.weights.playbackSpeedPenalty = r || 200, i
				}

				function u(e, t, n, r, s) {
					s.bitrateWSum += s.weights.bitrateReward * e, s.lastBitrate && (s.bitrateSwitchWSum += s.weights.bitrateSwitchPenalty * Math.abs(e - s.lastBitrate)), s.lastBitrate = e, s.rebufferWSum += s.weights.rebufferPenalty * t;
					for (var i = 0; i < s.weights.latencyPenalty.length; i++) {
						var a = s.weights.latencyPenalty[i];
						if (n <= a.threshold) {
							s.latencyWSum += a.penalty * n;
							break
						}
					}
					s.playbackSpeedWSum += s.weights.playbackSpeedPenalty * Math.abs(1 - r), s.totalQoe = s.bitrateWSum - s.bitrateSwitchWSum - s.rebufferWSum - s.latencyWSum - s.playbackSpeedWSum
				}
				return e = {
					setupPerSegmentQoe: function(e, s, a) {
						t = o("segment", e, s, a), n = e, r = s, i = a
					},
					logSegmentMetrics: function(e, n, r, s) {
						t && u(e, n, r, s, t)
					},
					getPerSegmentQoe: function() {
						return t
					},
					calculateSingleUseQoe: function(e, t, s, a) {
						var l = null;
						return n && r && i && (l = o("segment", n, r, i)), l ? (u(e, t, s, a, l), l.totalQoe) : 0
					},
					reset: function() {
						a()
					}
				}, a(), e
			}
			a.__dashjs_factory_name = "LoLpQoeEvaluator", t.default = r.default.getClassFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/abr/lolp/LoLpRule.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = c(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				s = c(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = c(n("./node_modules/dashjs/build/es5/src/streaming/rules/abr/lolp/LearningAbrController.js")),
				a = c(n("./node_modules/dashjs/build/es5/src/streaming/rules/abr/lolp/LoLpQoEEvaluator.js")),
				o = c(n("./node_modules/dashjs/build/es5/src/streaming/rules/SwitchRequest.js")),
				u = c(n("./node_modules/dashjs/build/es5/src/streaming/constants/MetricsConstants.js")),
				l = c(n("./node_modules/dashjs/build/es5/src/streaming/rules/abr/lolp/LoLpWeightSelector.js")),
				d = c(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js"));

			function c(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var f = 1.5,
				h = .3;

			function m(e) {
				var t = (e = e || {}).dashMetrics,
					n = this.context,
					s = void 0,
					c = void 0,
					m = void 0,
					g = void 0;
				return c = {
					getMaxIndex: function(e) {
						try {
							var r = (0, o.default)(n).create(),
								i = e.getMediaInfo().type,
								a = e.getAbrController(),
								c = e.getStreamInfo(),
								_ = a.getQualityFor(i, c),
								p = e.getMediaInfo(),
								E = t.getCurrentBufferState(i),
								v = e.getScheduleController(),
								y = t.getCurrentBufferLevel(i, !0),
								T = c && c.manifestInfo ? c.manifestInfo.isDynamic : null,
								b = v.getPlaybackController(),
								S = b.getCurrentLiveLatency();
							if (!e.useLoLPABR() || i === d.default.AUDIO) return r;
							S || (S = 0);
							var A = b.getPlaybackRate(),
								I = a.getThroughputHistory().getSafeAverageThroughput(i, T);
							if (s.debug("Throughput " + Math.round(I) + " kbps"), isNaN(I) || !E) return r;
							if (a.getAbandonmentStateFor(i) === u.default.ABANDON_LOAD) return r;
							for (var R = p.bitrateList, M = e.getRepresentationInfo().fragmentDuration, C = R[0].bandwidth / 1e3, D = R[R.length - 1].bandwidth / 1e3, N = 0; N < R.length; N++) {
								var O = R[N].bandwidth / 1e3;
								O > D ? D = O : O < C && (C = O)
							}
							var j = R[_].bandwidth / 1e3,
								w = t.getCurrentHttpRequest(i, !0),
								P = (w.tresponse.getTime() - w.trequest.getTime()) / 1e3,
								L = P > M ? P - M : 0;
							g.setupPerSegmentQoe(M, D, C), g.logSegmentMetrics(j, L, S, A);
							var F = (0, l.default)(n).create({
								targetLatency: f,
								bufferMin: h,
								segmentDuration: M,
								qoeEvaluator: g
							});
							return r.quality = m.getNextQuality(p, 1e3 * I, S, y, A, _, F), r.reason = {
								throughput: I,
								latency: S
							}, r.priority = o.default.PRIORITY.STRONG, v.setTimeToLoadDelay(0), r.quality !== _ && console.log("[TgcLearningRule][" + i + "] requesting switch to index: ", r.quality, "Average throughput", Math.round(I), "kbps"), r
						} catch (x) {
							throw x
						}
					},
					reset: function() {
						m.reset(), g.reset()
					}
				}, s = (0, r.default)(n).getInstance().getLogger(c), m = (0, i.default)(n).create(), g = (0, a.default)(n).create(), c
			}
			m.__dashjs_factory_name = "LoLPRule", t.default = s.default.getClassFactory(m)
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/abr/lolp/LoLpWeightSelector.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				};

			function a(e) {
				var t, n, r, s = e.targetLatency,
					i = e.bufferMin,
					a = e.segmentDuration,
					o = e.qoeEvaluator,
					u = void 0,
					l = void 0;

				function d() {
					return a
				}

				function c(e, t) {
					var n = d();
					return t > n ? e - n : e + n - t
				}
				return t = {
					getMinBuffer: function() {
						return i
					},
					getSegmentDuration: d,
					getNextBufferWithBitrate: function(e, t, n) {
						return c(t, e * a / n)
					},
					getNextBuffer: c,
					findWeightVector: function(e, t, n, r, d, f) {
						var h = null,
							m = null,
							g = null,
							_ = Math.abs(t - l);
						return e.forEach((function(e) {
							u.forEach((function(r) {
								r[0];
								var u = r[1],
									l = r[2],
									p = (r[3], e.bitrate * a / d),
									E = c(n, p),
									v = (0 === l ? 10 : 1 / l) * Math.max(1e-5, p - E),
									y = (0 === u ? 10 : 1 / u) * e.state.latency,
									T = o.calculateSingleUseQoe(e.bitrate, v, y, f);
								(null === h || T > h) && function(e, t, n) {
									if (e > s + n) return !1;
									return t >= i
								}(t, E, _) && (h = T, m = r, g = e.bitrate)
							}))
						})), null === m && null === g && (m = -1), l = t, m
					}
				}, n = [.2, .4, .6, .8, 1], r = 4, u = function e(t, r, s) {
					if (s === r) return t;
					for (var i = t.length, a = 0; a < i; a++)
						for (var o = t.shift(), u = 0; u < n.length; u++) t.push(o.concat(n[u]));
					return e(t, r, s + 1)
				}(n.map((function(e) {
					return [e]
				})), r, 1), l = 0, t
			}
			a.__dashjs_factory_name = "LoLpWeightSelector", t.default = i.default.getClassFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/abr/lolp/QoeInfo.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.type = null, this.lastBitrate = null, this.weights = {}, this.weights.bitrateReward = null, this.weights.bitrateSwitchPenalty = null, this.weights.rebufferPenalty = null, this.weights.latencyPenalty = null, this.weights.playbackSpeedPenalty = null, this.bitrateWSum = 0, this.bitrateSwitchWSum = 0, this.rebufferWSum = 0, this.latencyWSum = 0, this.playbackSpeedWSum = 0, this.totalQoe = 0
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/rules/scheduling/BufferLevelRule.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = a(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				s = a(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = a(n("./node_modules/dashjs/build/es5/src/streaming/constants/MetricsConstants.js"));

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function o(e) {
				var t = (e = e || {}).dashMetrics,
					n = e.mediaPlayerModel,
					s = e.textController,
					a = e.abrController,
					o = e.settings;

				function u(e, u, l) {
					var d = NaN;
					if (!e || !u) return d;
					if (e === r.default.FRAGMENTED_TEXT)
						if (s.isTextEnabled())
							if (isNaN(u.fragmentDuration)) {
								var c = t.getCurrentSchedulingInfo(i.default.SCHEDULING_INFO);
								d = c ? c.duration : 0
							} else d = u.fragmentDuration;
					else d = 0;
					else if (e === r.default.AUDIO && l) {
						var f = t.getCurrentBufferLevel(r.default.VIDEO);
						d = isNaN(u.fragmentDuration) ? f : Math.max(f, u.fragmentDuration)
					} else {
						var h = u.mediaInfo.streamInfo;
						if (a.isPlayingAtTopQuality(h)) d = h.manifestInfo.duration >= o.get().streaming.longFormContentDurationThreshold ? o.get().streaming.bufferTimeAtTopQualityLongForm : o.get().streaming.bufferTimeAtTopQuality;
						else d = n.getStableBufferTime()
					}
					return d
				}
				return {
					execute: function(e, n, r) {
						return !e || !n || t.getCurrentBufferLevel(e) < u(e, n, r)
					},
					getBufferTarget: u
				}
			}
			o.__dashjs_factory_name = "BufferLevelRule", t.default = s.default.getClassFactory(o)
		},
		"./node_modules/dashjs/build/es5/src/streaming/text/EmbeddedTextHtmlRender.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				};

			function a() {
				var e = 0;

				function t(e) {
					for (var t = "", n = 0; n < e.length; ++n) {
						t += e[n].uchar
					}
					return t.length - t.replace(/^\s+/, "").length
				}

				function n(e) {
					return "left: " + 3.125 * e.x + "%; top: " + 6.66 * e.y1 + "%; width: " + (100 - 3.125 * e.x) + "%; height: " + 6.66 * Math.max(e.y2 - 1 - e.y1, 1) + "%; align-items: flex-start; overflow: visible; -webkit-writing-mode: horizontal-tb;"
				}

				function r(e) {
					return "red" === e ? "rgb(255, 0, 0)" : "green" === e ? "rgb(0, 255, 0)" : "blue" === e ? "rgb(0, 0, 255)" : "cyan" === e ? "rgb(0, 255, 255)" : "magenta" === e ? "rgb(255, 0, 255)" : "yellow" === e ? "rgb(255, 255, 0)" : "white" === e ? "rgb(255, 255, 255)" : "black" === e ? "rgb(0, 0, 0)" : e
				}

				function s(e, t) {
					var n = e.videoHeight / 15;
					return t ? "font-size: " + n + "px; font-family: Menlo, Consolas, 'Cutive Mono', monospace; color: " + (t.foreground ? r(t.foreground) : "rgb(255, 255, 255)") + "; font-style: " + (t.italics ? "italic" : "normal") + "; text-decoration: " + (t.underline ? "underline" : "none") + "; white-space: pre; background-color: " + (t.background ? r(t.background) : "transparent") + ";" : "font-size: " + n + "px; font-family: Menlo, Consolas, 'Cutive Mono', monospace; justify-content: flex-start; text-align: left; color: rgb(255, 255, 255); font-style: normal; white-space: pre; line-height: normal; font-weight: normal; text-decoration: none; width: 100%; display: flex;"
				}

				function i(e) {
					return e.replace(/^\s+/g, "")
				}

				function a(e) {
					return e.replace(/\s+$/g, "")
				}
				return {
					createHTMLCaptionsFromScreen: function(r, o, u, l) {
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
							_ = {},
							p = [],
							E = void 0,
							v = void 0;
						for (E = 0; E < 15; ++E) {
							var y = l.rows[E],
								T = "",
								b = null;
							if (!1 === y.isEmpty()) {
								var S = t(y.chars);
								null === d && (d = {
									x: S,
									y1: E,
									y2: E + 1,
									p: []
								}), S !== f && c && (d.p.push(h), h = {
									start: o,
									end: u,
									spans: []
								}, d.y2 = E, d.name = "region_" + d.x + "_" + d.y1 + "_" + d.y2, !1 === g.hasOwnProperty(d.name) ? (p.push(d), g[d.name] = d) : g[d.name].p.contat(d.p), d = {
									x: S,
									y1: E,
									y2: E + 1,
									p: []
								});
								for (var A = 0; A < y.chars.length; ++A) {
									var I = y.chars[A],
										R = I.penState;
									if (null === b || !R.equals(b)) {
										T.trim().length > 0 && (h.spans.push({
											name: m,
											line: T,
											row: E
										}), T = "");
										var M = "style_cea608_" + R.foreground + "_" + R.background;
										R.underline && (M += "_underline"), R.italics && (M += "_italics"), _.hasOwnProperty(M) || (_[M] = JSON.parse(JSON.stringify(R))), b = R, m = M
									}
									T += I.uchar
								}
								T.trim().length > 0 && h.spans.push({
									name: m,
									line: T,
									row: E
								}), c = !0, f = S
							} else c = !1, f = -1, d && (d.p.push(h), h = {
								start: o,
								end: u,
								spans: []
							}, d.y2 = E, d.name = "region_" + d.x + "_" + d.y1 + "_" + d.y2, !1 === g.hasOwnProperty(d.name) ? (p.push(d), g[d.name] = d) : g[d.name].p.contat(d.p), d = null)
						}
						d && (d.p.push(h), d.y2 = E + 1, d.name = "region_" + d.x + "_" + d.y1 + "_" + d.y2, !1 === g.hasOwnProperty(d.name) ? (p.push(d), g[d.name] = d) : g[d.name].p.contat(d.p), d = null);
						var C = [];
						for (E = 0; E < p.length; ++E) {
							var D = p[E],
								N = "sub_cea608_" + e++,
								O = document.createElement("div");
							O.id = N;
							var j = n(D);
							O.style.cssText = "position: absolute; margin: 0; display: flex; box-sizing: border-box; pointer-events: none;" + j;
							var w = document.createElement("div");
							w.className = "paragraph bodyStyle", w.style.cssText = s(r);
							var P = document.createElement("div");
							P.className = "cueUniWrapper", P.style.cssText = "unicode-bidi: normal; direction: ltr;";
							for (var L = 0; L < D.p.length; ++L) {
								var F = D.p[L],
									x = 0;
								for (v = 0; v < F.spans.length; ++v) {
									var U = F.spans[v];
									if (U.line.length > 0) {
										if (0 !== v && x != U.row) {
											var B = document.createElement("br");
											B.className = "lineBreak", P.appendChild(B)
										}
										var k = !1;
										x === U.row && (k = !0), x = U.row;
										var G = _[U.name],
											q = document.createElement("span");
										q.className = "spanPadding " + U.name + " customSpanColor", q.style.cssText = s(r, G), 0 !== v && k ? v === F.spans.length - 1 ? q.textContent = a(U.line) : q.textContent = U.line : F.spans.length > 1 && v < F.spans.length - 1 && U.row === F.spans[v + 1].row ? q.textContent = i(U.line) : q.textContent = U.line.trim(), P.appendChild(q)
									}
								}
							}
							w.appendChild(P), O.appendChild(w);
							var H = {
								bodyStyle: ["%", 90]
							};
							for (var K in _) _.hasOwnProperty(K) && (H[K] = ["%", 90]);
							C.push({
								type: "html",
								start: o,
								end: u,
								cueHTMLElement: O,
								cueID: N,
								cellResolution: [32, 15],
								isFromCEA608: !0,
								fontSize: H,
								lineHeight: {},
								linePadding: {}
							})
						}
						return C
					}
				}
			}
			a.__dashjs_factory_name = "EmbeddedTextHtmlRender", t.default = i.default.getSingletonFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/text/NotFragmentedTextBufferController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = f(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				s = f(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				i = f(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				a = f(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				o = f(n("./node_modules/dashjs/build/es5/src/streaming/utils/InitCache.js")),
				u = f(n("./node_modules/dashjs/build/es5/src/streaming/SourceBufferSink.js")),
				l = f(n("./node_modules/dashjs/build/es5/src/streaming/text/TextController.js")),
				d = f(n("./node_modules/dashjs/build/es5/src/streaming/vo/DashJSError.js")),
				c = f(n("./node_modules/dashjs/build/es5/src/core/errors/Errors.js"));

			function f(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var h = "NotFragmentedTextBufferController";

			function m(e) {
				e = e || {};
				var t = this.context,
					n = (0, s.default)(t).getInstance(),
					a = (0, l.default)(t).getInstance(),
					f = e.errHandler,
					m = e.streamInfo,
					g = e.type,
					_ = e.mimeType,
					p = e.fragmentModel,
					E = void 0,
					v = void 0,
					y = void 0,
					T = void 0,
					b = void 0,
					S = void 0;

				function A(e) {
					T = e
				}

				function I(e) {
					null === S.extract(m.id, e.currentRepresentation.id) && (v = !1, n.trigger(i.default.INIT_FRAGMENT_NEEDED, {
						representationId: e.currentRepresentation.id,
						sender: E
					}, {
						streamId: m.id,
						mediaType: g
					}))
				}

				function R(e) {
					e.chunk.bytes && (S.save(e.chunk), b.append(e.chunk), v = !0, n.trigger(i.default.STREAM_COMPLETED, {
						request: e.request
					}, {
						streamId: m.id,
						mediaType: g
					}))
				}
				return E = {
					getBufferControllerType: function() {
						return h
					},
					initialize: function(e) {
						A(e), S = (0, o.default)(t).getInstance()
					},
					createBuffer: function(e) {
						var n = e[0];
						try {
							if (b = (0, u.default)(t).create(T, n), !y) {
								var s = b.getBuffer();
								s.hasOwnProperty(r.default.INITIALIZE) && s.initialize(_, m, e, p), y = !0
							}
							return b
						} catch (i) {
							if (n && (n.isText || -1 !== n.codec.indexOf('codecs="stpp') || -1 !== n.codec.indexOf('codecs="wvtt'))) try {
								b = a.getTextSourceBuffer()
							} catch (i) {
								f.error(new d.default(c.default.MEDIASOURCE_TYPE_UNSUPPORTED_CODE, c.default.MEDIASOURCE_TYPE_UNSUPPORTED_MESSAGE + g + " : " + i.message))
							} else f.error(new d.default(c.default.MEDIASOURCE_TYPE_UNSUPPORTED_CODE, c.default.MEDIASOURCE_TYPE_UNSUPPORTED_MESSAGE + g))
						}
					},
					getStreamId: function() {
						return m.id
					},
					getType: function() {
						return g
					},
					getBuffer: function() {
						return b
					},
					getBufferLevel: function() {
						return 0
					},
					setMediaSource: A,
					getMediaSource: function() {
						return T
					},
					getIsBufferingCompleted: function() {
						return v
					},
					getIsPruningInProgress: function() {
						return !1
					},
					dischargePreBuffer: function() {},
					appendInitSegment: function(e) {
						return null !== S.extract(m.id, e)
					},
					getRangeAt: function() {
						return null
					},
					reset: function(e) {
						n.off(i.default.DATA_UPDATE_COMPLETED, I, E), n.off(i.default.INIT_FRAGMENT_LOADED, R, E), !e && b && (b.abort(), b.reset(), b = null)
					},
					updateTimestampOffset: function(e) {
						b.timestampOffset === e || isNaN(e) || (b.timestampOffset = e)
					}
				}, y = !1, T = null, v = !1, n.on(i.default.DATA_UPDATE_COMPLETED, I, E), n.on(i.default.INIT_FRAGMENT_LOADED, R, E), E
			}
			m.__dashjs_factory_name = h, t.default = a.default.getClassFactory(m)
		},
		"./node_modules/dashjs/build/es5/src/streaming/text/TextBufferController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = o(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				s = o(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = o(n("./node_modules/dashjs/build/es5/src/streaming/controllers/BufferController.js")),
				a = o(n("./node_modules/dashjs/build/es5/src/streaming/text/NotFragmentedTextBufferController.js"));

			function o(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function u(e) {
				e = e || {};
				var t, n = this.context,
					s = void 0;

				function o() {
					return s.getBuffer()
				}
				return t = {
					getBufferControllerType: function() {
						return s.getBufferControllerType()
					},
					initialize: function(e, t) {
						return s.initialize(e, t)
					},
					createBuffer: function(e, t) {
						return s.createBuffer(e, t)
					},
					getType: function() {
						return s.getType()
					},
					getBuffer: o,
					setBuffer: function(e) {
						s.setBuffer(e)
					},
					getBufferLevel: function() {
						return s.getBufferLevel()
					},
					setMediaSource: function(e) {
						s.setMediaSource(e)
					},
					getMediaSource: function() {
						return s.getMediaSource()
					},
					getIsBufferingCompleted: function() {
						return s.getIsBufferingCompleted()
					},
					getIsPruningInProgress: function() {
						return s.getIsPruningInProgress()
					},
					dischargePreBuffer: function() {
						return s.dischargePreBuffer()
					},
					appendInitSegment: function(e) {
						s.appendInitSegment(e)
					},
					getRangeAt: function(e) {
						return s.getRangeAt(e)
					},
					reset: function(e) {
						s.reset(e)
					},
					updateTimestampOffset: function(e) {
						var t = o();
						t.timestampOffset === e || isNaN(e) || (t.timestampOffset = e)
					},
					updateAppendWindow: function() {
						s.updateAppendWindow()
					}
				}, s = e.type === r.default.FRAGMENTED_TEXT ? (0, i.default)(n).create({
					streamInfo: e.streamInfo,
					type: e.type,
					mediaPlayerModel: e.mediaPlayerModel,
					manifestModel: e.manifestModel,
					fragmentModel: e.fragmentModel,
					errHandler: e.errHandler,
					mediaController: e.mediaController,
					representationController: e.representationController,
					adapter: e.adapter,
					textController: e.textController,
					abrController: e.abrController,
					playbackController: e.playbackController,
					settings: e.settings
				}) : (0, a.default)(n).create({
					streamInfo: e.streamInfo,
					type: e.type,
					mimeType: e.mimeType,
					fragmentModel: e.fragmentModel,
					errHandler: e.errHandler
				}), t
			}
			u.__dashjs_factory_name = "TextBufferController", t.default = s.default.getClassFactory(u)
		},
		"./node_modules/dashjs/build/es5/src/streaming/text/TextController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = f(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				s = f(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				i = f(n("./node_modules/dashjs/build/es5/src/streaming/text/TextSourceBuffer.js")),
				a = f(n("./node_modules/dashjs/build/es5/src/streaming/text/TextTracks.js")),
				o = f(n("./node_modules/dashjs/build/es5/src/streaming/utils/VTTParser.js")),
				u = f(n("./node_modules/dashjs/build/es5/src/streaming/utils/TTMLParser.js")),
				l = f(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				d = f(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				c = n("./node_modules/dashjs/build/es5/src/streaming/utils/SupervisorTools.js");

			function f(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function h() {
				var e = this.context,
					t = void 0,
					n = void 0,
					s = void 0,
					f = void 0,
					h = void 0,
					m = void 0,
					g = void 0,
					_ = void 0,
					p = void 0,
					E = void 0,
					v = void 0,
					y = void 0,
					T = void 0,
					b = void 0,
					S = void 0,
					A = void 0,
					I = void 0,
					R = void 0,
					M = void 0,
					C = void 0,
					D = void 0;

				function N(e) {
					void 0 === D && null !== e.fromStreamInfo && (D = this.getCurrentTrackIdx())
				}

				function O() {
					void 0 === D && (D = this.getCurrentTrackIdx())
				}

				function j() {
					void 0 !== D && (this.setTextTrack(D), D = void 0)
				}

				function w(e) {
					var t = this,
						n = e.tracks,
						r = e.index;
					T && n.some((function(e, n) {
						if (m.matchSettings(T, e)) return t.setTextTrack(n), r = n, !0
					})), (!1 === A || void 0 === A && !T || C) && this.setTextTrack(-1), S = r, y.trigger(d.default.TEXT_TRACKS_ADDED, {
						enabled: L(),
						index: r,
						tracks: n
					}), M = !0
				}

				function P(e) {
					if (!b && e && e.newMediaInfo) {
						var t = e.newMediaInfo;
						t.type === r.default.FRAGMENTED_TEXT && (T = {
							lang: t.lang,
							role: t.roles[0],
							accessibility: t.accessibility[0]
						})
					}
				}

				function L() {
					var e = !0;
					return I && !R && (e = !1), e
				}

				function F() {
					I = !0, M = !1, C = !1
				}
				return t = {
					setConfig: function(e) {
						e && (e.errHandler && (s = e.errHandler), e.adapter && (f = e.adapter), e.manifestModel && (h = e.manifestModel), e.mediaController && (m = e.mediaController), e.videoModel && (g = e.videoModel), e.streamController && (_ = e.streamController), e.textTracks && (p = e.textTracks), e.vttParser && (E = e.vttParser), e.ttmlParser && (v = e.ttmlParser), n.setConfig({
							errHandler: s,
							adapter: f,
							manifestModel: h,
							mediaController: m,
							videoModel: g,
							streamController: _,
							textTracks: p,
							vttParser: E,
							ttmlParser: v
						}))
					},
					getTextSourceBuffer: function() {
						return n
					},
					getAllTracksAreDisabled: function() {
						return I
					},
					addEmbeddedTrack: function(e) {
						n.addEmbeddedTrack(e)
					},
					getTextDefaultLanguage: function() {
						return T && T.lang || ""
					},
					setTextDefaultLanguage: function(e) {
						(0, c.checkParameterType)(e, "string"), T || (T = {}), T.lang = e, b = !0
					},
					setTextDefaultEnabled: function(e) {
						(0, c.checkParameterType)(e, "boolean"), (A = e) ? I = !1: this.setTextTrack(-1)
					},
					getTextDefaultEnabled: function() {
						return void 0 !== A && A
					},
					setInitialSettings: function(e) {
						T = e, b = !0
					},
					enableText: function(e) {
						(0, c.checkParameterType)(e, "boolean"), !A && e && (A = !0), L() !== e && (e && this.setTextTrack(S), e || (S = this.getCurrentTrackIdx(), M ? this.setTextTrack(-1) : C = !0))
					},
					isTextEnabled: L,
					setTextTrack: function(e) {
						var t = n.getConfig(),
							s = t.fragmentModel,
							i = t.fragmentedTracks,
							a = t.videoModel,
							o = void 0,
							u = void 0;
						I = -1 === e;
						var l = p.getCurrentTrackIdx();
						if (l !== e) {
							I && m && m.saveTextSettingsDisabled(), p.setModeForTrackIdx(l, r.default.TEXT_HIDDEN), p.setCurrentTrackIdx(e), p.setModeForTrackIdx(e, r.default.TEXT_SHOWING);
							var d = p.getCurrentTrackInfo();
							if (d && d.isFragmented && !d.isEmbedded)
								for (var c = 0; c < i.length; c++) {
									var f = i[c];
									if (d.lang === f.lang && d.index === f.index && (f.id ? d.id === f.id : d.id === f.index))
										if (f !== m.getCurrentTrackFor(r.default.FRAGMENTED_TEXT, _.getActiveStreamInfo())) s.abortRequests(), s.removeExecutedRequestsBeforeTime(), n.remove(), p.deleteCuesFromTrackIdx(l), m.setTrack(f), n.setCurrentFragmentedTrackIdx(c);
										else if (-1 === l) {
										for (var h = _.getActiveStreamProcessors(), g = 0; g < h.length; g++)
											if (h[g].getType() === r.default.FRAGMENTED_TEXT) {
												u = h[g];
												break
											} u.setBufferingTime(a.getTime()), u.getScheduleController().start()
									}
								} else if (d && !d.isFragmented) {
									for (var E = _.getActiveStreamProcessors(), v = 0; v < E.length; v++)
										if (E[v].getType() === r.default.TEXT) {
											o = (u = E[v]).getMediaInfoArr();
											break
										} if (u && o)
										for (var y = 0; y < o.length; y++)
											if (o[y].index === d.index && o[y].lang === d.lang) {
												u.selectMediaInfo(o[y]);
												break
											}
								}
						}
					},
					getCurrentTrackIdx: function() {
						return p.getCurrentTrackIdx()
					},
					enableForcedTextStreaming: function(e) {
						(0, c.checkParameterType)(e, "boolean"), R = e
					},
					reset: function() {
						F(), n.resetEmbedded(), n.reset()
					}
				}, T = null, S = -1, R = !1, M = !1, b = !1, C = !1, p = (0, a.default)(e).getInstance(), E = (0, o.default)(e).getInstance(), v = (0, u.default)(e).getInstance(), n = (0, i.default)(e).getInstance(), y = (0, l.default)(e).getInstance(), p.initialize(), y.on(d.default.TEXT_TRACKS_QUEUE_INITIALIZED, w, t), y.on(d.default.CURRENT_TRACK_CHANGED, P, t), y.on(d.default.PERIOD_SWITCH_STARTED, N, t), y.on(d.default.STREAM_COMPLETED, O, t), y.on(d.default.PERIOD_SWITCH_COMPLETED, j, t), F(), t
			}
			h.__dashjs_factory_name = "TextController", t.default = s.default.getSingletonFactory(h)
		},
		"./node_modules/dashjs/build/es5/src/streaming/text/TextSourceBuffer.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = E(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				s = n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js"),
				i = E(n("./node_modules/dashjs/build/es5/src/streaming/vo/TextTrackInfo.js")),
				a = E(n("./node_modules/dashjs/build/es5/src/streaming/utils/BoxParser.js")),
				o = E(n("./node_modules/dashjs/build/es5/src/streaming/utils/CustomTimeRanges.js")),
				u = E(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				l = E(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				d = E(n("./node_modules/dashjs/build/es5/src/streaming/text/TextTracks.js")),
				c = E(n("./node_modules/dashjs/build/es5/src/streaming/text/EmbeddedTextHtmlRender.js")),
				f = E(n("./node_modules/codem-isoboxer/dist/iso_boxer.js")),
				h = E(n("./node_modules/dashjs/build/es5/externals/cea608-parser.js")),
				m = E(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				g = E(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				_ = E(n("./node_modules/dashjs/build/es5/src/streaming/vo/DashJSError.js")),
				p = E(n("./node_modules/dashjs/build/es5/src/core/errors/Errors.js"));

			function E(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function v() {
				var e = this.context,
					t = (0, m.default)(e).getInstance(),
					n = !1,
					u = void 0,
					E = void 0,
					v = void 0,
					y = void 0,
					T = void 0,
					b = void 0,
					S = void 0,
					A = void 0,
					I = void 0,
					R = void 0,
					M = void 0,
					C = void 0,
					D = void 0,
					N = void 0,
					O = void 0,
					j = void 0,
					w = void 0,
					P = void 0,
					L = void 0,
					F = void 0,
					x = void 0,
					U = void 0,
					B = void 0,
					k = void 0,
					G = void 0,
					q = void 0;

				function H() {
					D = null, O = NaN, j = [], L = null, N = !1
				}

				function K() {
					H(), M = [], A = null
				}

				function Y(e) {
					var t = e.chunk;
					t.mediaInfo.embeddedCaptions && X(t.bytes, t)
				}

				function V() {
					x = [], (C = (0, d.default)(e).getInstance()).setConfig({
						videoModel: w
					}), C.initialize(), v = (0, a.default)(e).getInstance(), F = null, U = 0, k = [], B = null, n = !0, G = (0, c.default)(e).getInstance();
					var r = P.getActiveStreamProcessors();
					for (var s in r)
						if ("video" === r[s].getType()) {
							q = r[s].getRepresentationInfo().MSETimeOffset;
							break
						} t.on(g.default.VIDEO_CHUNK_RECEIVED, Y, this), t.on(g.default.BUFFER_CLEARED, J, this)
				}

				function z(e) {
					F = e
				}

				function W(e, t) {
					var n, s, a = new i.default,
						o = {
							subtitle: "subtitles",
							caption: "captions"
						};
					a.captionData = e, a.lang = t.lang, a.labels = t.labels, a.id = t.id ? t.id : t.index, a.index = t.index, a.isTTML = (n = !1, t.codec && t.codec.search(r.default.STPP) >= 0 && (n = !0), t.mimeType && t.mimeType.search(r.default.TTML) >= 0 && (n = !0), n), a.defaultTrack = function(e) {
						var t = !1;
						x.length > 1 && e.isEmbedded ? t = e.id && e.id === r.default.CC1 : 1 === x.length ? e.id && "string" == typeof e.id && "CC" === e.id.substring(0, 2) && (t = !0) : 0 === x.length && (t = e.index === M[0].index);
						return t
					}(t), a.isFragmented = !T.getIsTextTrack(t.mimeType), a.isEmbedded = !!t.isEmbedded, a.kind = s = (s = t.roles.length > 0 ? o[t.roles[0]] : o.caption) === o.caption || s === o.subtitle ? s : o.caption, a.roles = t.roles, a.accessibility = t.accessibility;
					var u = (M ? M.length : 0) + x.length;
					C.addTextTrack(a, u)
				}

				function X(e, t) {
					var n = void 0,
						i = void 0,
						a = void 0,
						o = void 0,
						u = void 0,
						l = void 0,
						d = void 0,
						c = t.mediaInfo,
						m = c.type,
						g = c.mimeType,
						T = c.codec || g;
					if (T) {
						if (m === r.default.FRAGMENTED_TEXT)
							if (N || "InitializationSegment" !== t.segmentType) {
								if (!N) return;
								if (i = (l = v.getSamplesInfo(e)).sampleList, null === L && i.length > 0 && (L = i[0].cts - t.start * O), T.search(r.default.STPP) >= 0)
									for (A = null !== A ? A : Q(T), a = 0; a < i.length; a++) {
										var S = i[a],
											I = S.cts,
											R = I - L;
										this.buffered.add(R / O, (R + S.duration) / O);
										var M = new DataView(e, S.offset, S.subSizes[0]);
										d = f.default.Utils.dataViewToString(M, r.default.UTF8);
										var j = [],
											P = S.offset + S.subSizes[0];
										for (o = 1; o < S.subSizes.length; o++) {
											var H = new Uint8Array(e, P, S.subSizes[o]),
												K = String.fromCharCode.apply(null, H);
											j.push(K), P += S.subSizes[o]
										}
										try {
											var Y = b.getValue().ttmlTimeIsRelative ? I / O : 0;
											n = A.parse(d, Y, I / O, (I + S.duration) / O, j), C.addCaptions(F, L / O, n)
										} catch (fe) {
											D.removeExecutedRequestsBeforeTime(), this.remove(), E.error("TTML parser error: " + fe.message)
										}
									} else {
										var V = [];
										for (a = 0; a < i.length; a++) {
											var z = i[a];
											z.cts -= L, this.buffered.add(z.cts / O, (z.cts + z.duration) / O);
											var X = e.slice(z.offset, z.offset + z.size),
												J = f.default.parseBuffer(X);
											for (o = 0; o < J.boxes.length; o++) {
												var Z = J.boxes[o];
												if (E.debug("VTT box1: " + Z.type), "vtte" !== Z.type && "vttc" === Z.type)
													for (E.debug("VTT vttc boxes.length = " + Z.boxes.length), u = 0; u < Z.boxes.length; u++) {
														var $ = Z.boxes[u];
														if (E.debug("VTT box2: " + $.type), "payl" === $.type) {
															var ee = $.cue_text;
															E.debug("VTT cue_text = " + ee);
															var te = z.cts / O,
																ne = (z.cts + z.duration) / O;
															V.push({
																start: te,
																end: ne,
																data: ee,
																styles: {}
															}), E.debug("VTT " + te + "-" + ne + " : " + ee)
														}
													}
											}
										}
										V.length > 0 && C.addCaptions(F, 0, V)
									}
							} else N = !0, O = v.getMediaTimescaleFromMoov(e);
						else if (m === r.default.TEXT) {
							var re = new DataView(e, 0, e.byteLength);
							d = f.default.Utils.dataViewToString(re, r.default.UTF8);
							try {
								n = Q(T).parse(d, 0), C.addCaptions(C.getCurrentTrackIdx(), 0, n)
							} catch (fe) {
								y.error(new _.default(p.default.TIMED_TEXT_ERROR_ID_PARSE_CODE, p.default.TIMED_TEXT_ERROR_MESSAGE_PARSE + fe.message, d))
							}
						} else if (m === r.default.VIDEO)
							if (t.segmentType === s.HTTPRequest.INIT_SEGMENT_TYPE) {
								if (0 === U)
									for (U = v.getMediaTimescaleFromMoov(e), a = 0; a < x.length; a++) W(null, x[a])
							} else {
								if (0 === U) return void E.warn("CEA-608: No timescale for embeddedTextTrack yet");
								var se = function(e, t) {
										return function(e, n, r) {
											var s = null;
											s = w.getTTMLRenderingDiv() ? G.createHTMLCaptionsFromScreen(w.getElement(), e, n, r) : [{
												start: e,
												end: n,
												data: r.getDisplayText(),
												styles: {}
											}], s && C.addCaptions(t, 0, s)
										}
									},
									ie = (l = v.getSamplesInfo(e)).lastSequenceNumber;
								if (!k[0] && !k[1]) {
									var ae = void 0,
										oe = void 0;
									for (a = 0; a < x.length; a++) {
										if (x[a].id === r.default.CC1 ? (0, oe = C.getTrackIdxForId(r.default.CC1)) : x[a].id === r.default.CC3 && (1, oe = C.getTrackIdxForId(r.default.CC3)), -1 === oe) return void E.warn("CEA-608: data before track is ready.");
										ae = se(0, oe), k[a] = new h.default.Cea608Parser(a + 1, {
											newCue: ae
										}, null)
									}
								}
								if (U) {
									if (null !== B && ie !== B + l.numSequences)
										for (a = 0; a < k.length; a++) k[a] && k[a].reset();
									for (var ue = function(e, t) {
											if (0 === t.length) return null;
											for (var n = {
													splits: [],
													fields: [
														[],
														[]
													]
												}, r = new DataView(e), s = 0; s < t.length; s++)
												for (var i = t[s], a = h.default.findCea608Nalus(r, i.offset, i.size), o = null, u = 0, l = 0; l < a.length; l++)
													for (var d = h.default.extractCea608DataFromRange(r, a[l]), c = 0; c < 2; c++) d[c].length > 0 && (i.cts !== o ? u = 0 : u += 1, n.fields[c].push([i.cts + q * U, d[c], u]), o = i.cts);
											return n.fields.forEach((function(e) {
												e.sort((function(e, t) {
													return e[0] === t[0] ? e[2] - t[2] : e[0] - t[0]
												}))
											})), n
										}(e, l.sampleList), le = 0; le < k.length; le++) {
										var de = ue.fields[le],
											ce = k[le];
										if (ce)
											for (a = 0; a < de.length; a++) ce.addData(de[a][0] / U, de[a][1])
									}
									B = ie
								}
							}
					} else E.error("No text type defined")
				}

				function Q(e) {
					var t = void 0;
					return e.search(r.default.VTT) >= 0 ? t = I : (e.search(r.default.TTML) >= 0 || e.search(r.default.STPP) >= 0) && (t = R), t
				}

				function J(e) {
					x.forEach((function(t) {
						var n = C.getTrackIdxForId(t.id);
						n >= 0 && C.deleteCuesFromTrackIdx(n, e.from, e.to)
					}))
				}
				return u = {
					initialize: function(t, s, i, l) {
						n || V(), C.setConfig({
								videoModel: w
							}), C.initialize(), v || (v = (0, a.default)(e).getInstance()),
							function(t, n, s, i) {
								var a = !T.getIsTextTrack(t);
								if (M = M.concat(s), a) {
									D = i, u.buffered = (0, o.default)(e).create(), j = S.getTracksFor(r.default.FRAGMENTED_TEXT, n);
									for (var l = S.getCurrentTrackFor(r.default.FRAGMENTED_TEXT, n), d = 0; d < j.length; d++)
										if (j[d] === l) {
											z(d);
											break
										}
								}
								for (var c = 0; c < M.length; c++) W(null, M[c])
							}(t, s, i, l)
					},
					append: X,
					abort: function() {
						C.deleteAllTextTracks(), H(), v = null, M = []
					},
					addEmbeddedTrack: function(e) {
						if (n || V(), e)
							if (e.id === r.default.CC1 || e.id === r.default.CC3) {
								for (var t = 0; t < x.length; t++)
									if (x[t].id === e.id) return;
								x.push(e)
							} else E.warn("Embedded track " + e.id + " not supported!")
					},
					resetEmbedded: function() {
						t.off(g.default.VIDEO_CHUNK_RECEIVED, Y, this), t.off(g.default.BUFFER_CLEARED, J, this), C && C.deleteAllTextTracks(), n = !1, x = [], k = [null, null], B = null
					},
					setConfig: function(e) {
						e && (e.errHandler && (y = e.errHandler), e.adapter && (T = e.adapter), e.manifestModel && (b = e.manifestModel), e.mediaController && (S = e.mediaController), e.videoModel && (w = e.videoModel), e.streamController && (P = e.streamController), e.textTracks && (C = e.textTracks), e.vttParser && (I = e.vttParser), e.ttmlParser && (R = e.ttmlParser))
					},
					getConfig: function() {
						return {
							fragmentModel: D,
							fragmentedTracks: j,
							videoModel: w
						}
					},
					setCurrentFragmentedTrackIdx: z,
					remove: function(e, t) {
						void 0 === e && e === t && (e = this.buffered.start(0), t = this.buffered.end(this.buffered.length - 1)), this.buffered.remove(e, t)
					},
					reset: function() {
						K(), P = null, w = null, C = null
					}
				}, E = (0, l.default)(e).getInstance().getLogger(u), K(), u
			}
			v.__dashjs_factory_name = "TextSourceBuffer", t.default = u.default.getSingletonFactory(v)
		},
		"./node_modules/dashjs/build/es5/src/streaming/text/TextTracks.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = d(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				s = d(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				i = d(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				a = d(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				o = d(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				u = n("./node_modules/imsc/src/main/js/main.js"),
				l = n("./node_modules/dashjs/build/es5/src/streaming/utils/SupervisorTools.js");

			function d(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function c() {
				var e = this.context,
					t = (0, s.default)(e).getInstance(),
					n = void 0,
					a = void 0,
					d = void 0,
					c = void 0,
					f = void 0,
					h = void 0,
					m = void 0,
					g = void 0,
					_ = void 0,
					p = void 0,
					E = void 0,
					v = void 0,
					y = void 0,
					T = void 0,
					b = void 0,
					S = void 0,
					A = void 0,
					I = void 0;

				function R(e) {
					var t = f[e].kind,
						n = void 0 !== f[e].id ? f[e].id : f[e].lang,
						r = f[e].lang,
						s = f[e].isTTML,
						i = f[e].isEmbedded;
					return c.addTextTrack(t, n, r, s, i)
				}

				function M(e, t, n, r, s, i) {
					var a = 0,
						o = 0;
					e / t > n / r ? a = (o = t) / r * n : o = (a = e) / n * r;
					var u, l, d = 0,
						c = 0;
					return a / o > s ? (c = o, d = o * s) : (d = a, c = a / s), u = (e - d) / 2, l = (t - c) / 2, i ? {
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

				function C(e, n) {
					var r = c.getClientWidth(),
						s = c.getClientHeight(),
						a = c.getVideoWidth(),
						o = c.getVideoHeight(),
						u = c.getVideoRelativeOffsetTop(),
						l = c.getVideoRelativeOffsetLeft();
					if (0 !== a && 0 !== o) {
						var d = a / o,
							f = !1;
						e.isFromCEA608 && (d = 3.5 / 3, f = !0);
						var h = M.call(this, r, s, a, o, d, f),
							m = h.w,
							y = h.h,
							S = h.x,
							I = h.y;
						if (m != p || y != E || S != g || I != _ || n) {
							if (g = S + l, _ = I + u, p = m, E = y, v) {
								var R = v.style;
								R && (R.left = g + "px", R.top = _ + "px", R.width = p + "px", R.height = E + "px", R.zIndex = T && document[T] || b ? A : null, t.trigger(i.default.CAPTION_CONTAINER_RESIZE))
							}
							var C = e.activeCues;
							if (C)
								for (var D = C.length, N = 0; N < D; ++N) {
									var O = C[N];
									O.scaleCue(O)
								}
						}
					}
				}

				function D(e) {
					var t = p,
						n = E,
						r = void 0,
						s = void 0,
						i = void 0,
						a = void 0,
						o = void 0;
					if (e.cellResolution) {
						var u = [t / e.cellResolution[0], n / e.cellResolution[1]];
						if (e.linePadding)
							for (r in e.linePadding)
								if (e.linePadding.hasOwnProperty(r)) {
									s = (e.linePadding[r] * u[0]).toString();
									for (var l = document.getElementsByClassName("spanPadding"), d = 0; d < l.length; d++) l[d].style.cssText = l[d].style.cssText.replace(/(padding-left\s*:\s*)[\d.,]+(?=\s*px)/gi, "$1" + s), l[d].style.cssText = l[d].style.cssText.replace(/(padding-right\s*:\s*)[\d.,]+(?=\s*px)/gi, "$1" + s)
								} if (e.fontSize) {
							for (r in e.fontSize)
								if (e.fontSize.hasOwnProperty(r)) {
									"%" === e.fontSize[r][0] ? i = e.fontSize[r][1] / 100 : "c" === e.fontSize[r][0] && (i = e.fontSize[r][1]), s = (i * u[1]).toString(), o = "defaultFontSize" !== r ? document.getElementsByClassName(r) : document.getElementsByClassName("paragraph");
									for (var c = 0; c < o.length; c++) o[c].style.cssText = o[c].style.cssText.replace(/(font-size\s*:\s*)[\d.,]+(?=\s*px)/gi, "$1" + s)
								} if (e.lineHeight)
								for (r in e.lineHeight)
									if (e.lineHeight.hasOwnProperty(r)) {
										"%" === e.lineHeight[r][0] ? a = e.lineHeight[r][1] / 100 : "c" === e.fontSize[r][0] && (a = e.lineHeight[r][1]), s = (a * u[1]).toString(), o = document.getElementsByClassName(r);
										for (var f = 0; f < o.length; f++) o[f].style.cssText = o[f].style.cssText.replace(/(line-height\s*:\s*)[\d.,]+(?=\s*px)/gi, "$1" + s)
									}
						}
					}
					if (e.isd) {
						var h = document.getElementById(e.cueID);
						h && v.removeChild(h), N(e)
					}
				}

				function N(e) {
					if (v) {
						var n = document.createElement("div");
						v.appendChild(n), S = (0, u.renderHTML)(e.isd, n, (function(t) {
							var n = /^(urn:)(mpeg:[a-z0-9][a-z0-9-]{0,31}:)(subs:)([0-9]+)$/,
								r = /^#(.*)$/;
							if (n.test(t)) {
								var s = n.exec(t),
									i = parseInt(s[4], 10) - 1;
								return "data:image/png;base64," + btoa(e.images[i])
							}
							if (r.test(t)) {
								var a = r.exec(t)[1];
								return "data:image/png;base64," + e.embeddedImages[a]
							}
							return null
						}), v.clientHeight, v.clientWidth, !1, (function(e) {
							a.info("renderCaption :", e)
						}), S, !0), n.id = e.cueID, t.trigger(i.default.CAPTION_RENDERED, {
							captionDiv: n,
							currentTrackIdx: m
						})
					}
				}

				function O(e) {
					return e >= 0 && f[e] ? c.getTextTrack(f[e].kind, f[e].id, f[e].lang, f[e].isTTML, f[e].isEmbedded) : null
				}

				function j(e) {
					var t = this;
					if (e !== m) {
						var n = O(m = e);
						w.call(this, n), y && (clearInterval(y), y = null), n && "html" === n.renderingType && (C.call(this, n, !0), window.ResizeObserver ? (I = new window.ResizeObserver((function() {
							C.call(t, n, !0)
						}))).observe(c.getElement()) : y = setInterval(C.bind(this, n), 500))
					}
				}

				function w(e) {
					U.call(this), e && "html" === e.renderingType ? F.call(this) : x.call(this)
				}

				function P(e, t, n) {
					return (isNaN(t) || e.startTime >= t) && (isNaN(n) || e.endTime <= n)
				}

				function L(e, t, n) {
					if (e.cues)
						for (var r = e.cues, s = r.length - 1; s >= 0; s--) P(r[s], t, n) && e.removeCue(r[s])
				}

				function F() {
					var e = document.getElementById("native-cue-style");
					if (!e) {
						(e = document.createElement("style")).id = "native-cue-style", document.head.appendChild(e);
						var t = e.sheet,
							n = c.getElement();
						try {
							n && (n.id ? t.insertRule("#" + n.id + "::cue {background: transparent}", 0) : 0 !== n.classList.length ? t.insertRule("." + n.className + "::cue {background: transparent}", 0) : t.insertRule("video::cue {background: transparent}", 0))
						} catch (r) {
							a.info("" + r.message)
						}
					}
				}

				function x() {
					var e = document.getElementById("native-cue-style");
					e && document.head.removeChild(e)
				}

				function U() {
					if (v)
						for (; v.firstChild;) v.removeChild(v.firstChild)
				}
				return n = {
					initialize: function() {
						"undefined" != typeof window && "undefined" != typeof navigator && (d = window.VTTCue || window.TextTrackCue, f = [], h = [], m = -1, g = 0, _ = 0, p = 0, E = 0, v = null, y = null, b = !1, A = 2147483647, S = null, void 0 !== document.fullscreenElement ? T = "fullscreenElement" : void 0 !== document.webkitIsFullScreen ? T = "webkitIsFullScreen" : document.msFullscreenElement ? T = "msFullscreenElement" : document.mozFullScreen && (T = "mozFullScreen"))
					},
					setDisplayCConTop: function(e) {
						(0, l.checkParameterType)(e, "boolean"), b = e, v && !document[T] && (v.style.zIndex = e ? A : null)
					},
					addTextTrack: function(e, n) {
						if (f.length !== n) {
							if (f.push(e), f.length === n) {
								f.sort((function(e, t) {
									return e.index - t.index
								})), v = c.getTTMLRenderingDiv();
								for (var s = -1, o = 0; o < f.length; o++) {
									var u = R.call(this, o);
									h.push(u), f[o].defaultTrack && (u.default = !0, s = o);
									var l = O(o);
									l && (l.mode = r.default.TEXT_SHOWING, v && (f[o].isTTML || f[o].isEmbedded) ? l.renderingType = "html" : l.renderingType = "default"), this.addCaptions(o, 0, f[o].captionData), t.trigger(i.default.TEXT_TRACK_ADDED)
								}
								if (j.call(this, s), s >= 0) {
									t.on(i.default.PLAYBACK_METADATA_LOADED, (function e() {
										var n = O(s);
										n && C.call(this, n, !0), t.off(i.default.PLAYBACK_METADATA_LOADED, e, this)
									}), this);
									for (var d = 0; d < f.length; d++) {
										var g = O(d);
										g && (g.mode = d === s ? r.default.TEXT_SHOWING : r.default.TEXT_HIDDEN)
									}
								}
								t.trigger(i.default.TEXT_TRACKS_QUEUE_INITIALIZED, {
									index: m,
									tracks: f
								})
							}
						} else a.error("Trying to add too many tracks.")
					},
					addCaptions: function(e, n, s) {
						var o = O(e),
							u = this;
						if (o && Array.isArray(s) && 0 !== s.length)
							for (var l = 0; l < s.length; l++) {
								var c = void 0,
									f = s[l];
								o.cellResolution = f.cellResolution, o.isFromCEA608 = f.isFromCEA608, "html" === f.type && v ? ((c = new d(f.start - n, f.end - n, "")).cueHTMLElement = f.cueHTMLElement, c.isd = f.isd, c.images = f.images, c.embeddedImages = f.embeddedImages, c.cueID = f.cueID, c.scaleCue = D.bind(u), c.cellResolution = f.cellResolution, c.lineHeight = f.lineHeight, c.linePadding = f.linePadding, c.fontSize = f.fontSize, v.style.left = g + "px", v.style.top = _ + "px", v.style.width = p + "px", v.style.height = E + "px", c.onenter = function() {
									o.mode === r.default.TEXT_SHOWING && (this.isd ? (N(this), a.debug("Cue enter id:" + this.cueID)) : (v.appendChild(this.cueHTMLElement), D.call(u, this), t.trigger(i.default.CAPTION_RENDERED, {
										captionDiv: this.cueHTMLElement,
										currentTrackIdx: m
									})))
								}, c.onexit = function() {
									if (v)
										for (var e = v.childNodes, t = 0; t < e.length; ++t) e[t].id === this.cueID && (a.debug("Cue exit id:" + e[t].id), v.removeChild(e[t]), --t)
								}) : f.data && (c = new d(f.start - n, f.end - n, f.data), f.styles && (void 0 !== f.styles.align && "align" in c && (c.align = f.styles.align), void 0 !== f.styles.line && "line" in c && (c.line = f.styles.line), void 0 !== f.styles.position && "position" in c && (c.position = f.styles.position), void 0 !== f.styles.size && "size" in c && (c.size = f.styles.size)), c.onenter = function() {
									o.mode === r.default.TEXT_SHOWING && t.trigger(i.default.CAPTION_RENDERED, {
										currentTrackIdx: m
									})
								});
								try {
									c ? o.addCue(c) : a.error("impossible to display subtitles.")
								} catch (h) {
									throw L(o), o.addCue(c), h
								}
							}
					},
					getCurrentTrackIdx: function() {
						return m
					},
					setCurrentTrackIdx: j,
					getTrackIdxForId: function(e) {
						for (var t = -1, n = 0; n < f.length; n++)
							if (f[n].id === e) {
								t = n;
								break
							} return t
					},
					getCurrentTrackInfo: function() {
						return f[m]
					},
					setModeForTrackIdx: function(e, t) {
						var n = O(e);
						n && n.mode !== t && (n.mode = t)
					},
					deleteCuesFromTrackIdx: function(e, t, n) {
						var r = O(e);
						r && L(r, t, n)
					},
					deleteAllTextTracks: function() {
						for (var e = h ? h.length : 0, t = 0; t < e; t++) {
							var n = O(t);
							n && (L.call(this, n), n.mode = "disabled")
						}
						h = [], f = [], y && (clearInterval(y), y = null), I && c && (I.unobserve(c.getElement()), I = null), m = -1, U.call(this)
					},
					deleteTextTrack: function(e) {
						c.removeChild(h[e]), h.splice(e, 1)
					},
					setConfig: function(e) {
						e && e.videoModel && (c = e.videoModel)
					}
				}, a = (0, o.default)(e).getInstance().getLogger(n), n
			}
			c.__dashjs_factory_name = "TextTracks", t.default = a.default.getSingletonFactory(c)
		},
		"./node_modules/dashjs/build/es5/src/streaming/thumbnail/ThumbnailController.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = l(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = l(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				i = l(n("./node_modules/dashjs/build/es5/src/streaming/vo/Thumbnail.js")),
				a = l(n("./node_modules/dashjs/build/es5/src/streaming/thumbnail/ThumbnailTracks.js")),
				o = l(n("./node_modules/dashjs/build/es5/src/streaming/vo/BitrateInfo.js")),
				u = n("./node_modules/dashjs/build/es5/src/dash/utils/SegmentsUtils.js");

			function l(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function d(e) {
				var t, n = this.context,
					r = e.streamInfo,
					l = void 0;

				function d() {
					l && l.reset()
				}
				return t = {
					getStreamId: function() {
						return r.id
					},
					provide: function(e, t) {
						if ("function" == typeof t) {
							var n, r = l.getCurrentTrack(),
								s = void 0;
							if (!r || r.segmentDuration <= 0 || null == e) t(null);
							else {
								isNaN(r.segmentDuration) && (s = l.getThumbnailRequestForTime(e)) && (r.segmentDuration = s.duration), n = e % r.segmentDuration;
								var a = Math.floor(n * r.tilesHor * r.tilesVert / r.segmentDuration),
									o = new i.default;
								if (o.width = Math.floor(r.widthPerTile), o.height = Math.floor(r.heightPerTile), o.x = Math.floor(a % r.tilesHor) * r.widthPerTile, o.y = Math.floor(a / r.tilesHor) * r.heightPerTile, "readThumbnail" in r) return r.readThumbnail(e, (function(e) {
									o.url = e, t(o)
								}));
								if (s) o.url = s.url, r.segmentDuration = NaN;
								else {
									var d = Math.floor(e / r.segmentDuration);
									o.url = function(e, t) {
										var n = t + e.startNumber,
											r = (0, u.replaceTokenForTemplate)(e.templateUrl, "Number", n);
										return r = (0, u.replaceTokenForTemplate)(r, "Time", (n - 1) * e.segmentDuration), r = (0, u.replaceTokenForTemplate)(r, "Bandwidth", e.bandwidth), (0, u.unescapeDollarsInTemplate)(r)
									}(r, d)
								}
								t(o)
							}
						}
					},
					setTrackByIndex: function(e) {
						l.setTrackByIndex(e)
					},
					getCurrentTrackIndex: function() {
						return l.getCurrentTrackIndex()
					},
					getBitrateList: function() {
						var e = l.getTracks(),
							t = 0;
						return e.map((function(e) {
							var n = new o.default;
							return n.mediaType = s.default.IMAGE, n.qualityIndex = t++, n.bitrate = e.bitrate, n.width = e.width, n.height = e.height, n
						}))
					},
					reset: d
				}, d(), l = (0, a.default)(n).create({
					streamInfo: r,
					adapter: e.adapter,
					baseURLController: e.baseURLController,
					timelineConverter: e.timelineConverter,
					debug: e.debug,
					eventBus: e.eventBus,
					events: e.events,
					dashConstants: e.dashConstants
				}), t
			}
			d.__dashjs_factory_name = "ThumbnailController", t.default = r.default.getClassFactory(d)
		},
		"./node_modules/dashjs/build/es5/src/streaming/thumbnail/ThumbnailTracks.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.THUMBNAILS_SCHEME_ID_URIS = void 0;
			var r = h(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js")),
				s = h(n("./node_modules/dashjs/build/es5/src/dash/constants/DashConstants.js")),
				i = h(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				a = h(n("./node_modules/dashjs/build/es5/src/streaming/vo/ThumbnailTrackInfo.js")),
				o = h(n("./node_modules/dashjs/build/es5/src/streaming/utils/URLUtils.js")),
				u = n("./node_modules/dashjs/build/es5/src/dash/utils/SegmentsUtils.js"),
				l = h(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				d = h(n("./node_modules/dashjs/build/es5/src/streaming/utils/BoxParser.js")),
				c = h(n("./node_modules/dashjs/build/es5/src/streaming/net/XHRLoader.js")),
				f = h(n("./node_modules/dashjs/build/es5/src/dash/DashHandler.js"));

			function h(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var m = t.THUMBNAILS_SCHEME_ID_URIS = ["http://dashif.org/thumbnail_tile", "http://dashif.org/guidelines/thumbnail_tile"];

			function g(e) {
				var t, n = this.context,
					i = e.adapter,
					h = e.baseURLController,
					g = e.streamInfo,
					_ = e.timelineConverter,
					p = e.debug,
					E = e.eventBus,
					v = e.events,
					y = e.dashConstants,
					T = (0, o.default)(n).getInstance(),
					b = void 0,
					S = void 0,
					A = void 0,
					I = void 0,
					R = void 0,
					M = void 0;

				function C() {
					N(), R = (0, c.default)(n).create({}), M = (0, d.default)(n).getInstance(), (S = (0, f.default)(n).create({
							streamInfo: g,
							timelineConverter: _,
							baseURLController: h,
							debug: p,
							eventBus: E,
							events: v,
							dashConstants: y,
							urlUtils: T
						})).initialize(!!i && i.getIsDynamic()),
						function() {
							if (!g || !i) return;
							if (!(I = i.getMediaInfoForType(g, r.default.IMAGE))) return;
							var e = i.getVoRepresentations(I);
							e && e.length > 0 && e.forEach((function(e) {
								(e.segmentInfoType === s.default.SEGMENT_TEMPLATE && e.segmentDuration > 0 && e.media || e.segmentInfoType === s.default.SEGMENT_TIMELINE) && D(e), e.segmentInfoType === s.default.SEGMENT_BASE && D(e, !0)
							}));
							b.length > 0 && (b.sort((function(e, t) {
								return e.bitrate - t.bitrate
							})), A = b.length - 1)
						}()
				}

				function D(e, t) {
					var n = new a.default;
					n.id = e.id, n.bitrate = e.bandwidth, n.width = e.width, n.height = e.height, n.tilesHor = 1, n.tilesVert = 1, e.essentialProperties && e.essentialProperties.forEach((function(e) {
						if (m.indexOf(e.schemeIdUri) >= 0 && e.value) {
							var t = e.value.split("x");
							2 !== t.length || isNaN(t[0]) || isNaN(t[1]) || (n.tilesHor = parseInt(t[0], 10), n.tilesVert = parseInt(t[1], 10))
						}
					})), t ? E.trigger(l.default.SEGMENTBASE_SEGMENTSLIST_REQUEST_NEEDED, {
						streamId: g.id,
						mediaType: r.default.IMAGE,
						mimeType: I.mimeType,
						representation: e,
						callback: function(e, t, r, s) {
							var a = [];
							r = function(e, t) {
								var n, r = [],
									s = 0,
									a = void 0,
									o = void 0,
									l = void 0;
								for (a = 0, n = e.length; a < n; a++) o = e[a], (l = (0, u.getTimeBasedSegment)(_, i.getIsDynamic(), t, o.startTime, o.duration, o.timescale, o.media, o.mediaRange, s)) && (r.push(l), l = null, s++);
								return r
							}(r, s), n.segmentDuration = r[0].duration, n.readThumbnail = function(e, t) {
								var n = null;
								a.some((function(t) {
									if (t.start <= e && t.end > e) return n = t.url, !0
								})), n ? t(n) : r.some((function(n) {
									if (n.mediaStartTime <= e && n.mediaStartTime + n.duration > e) {
										var r = h.resolve(s.path);
										return R.load({
											method: "get",
											url: r.url,
											request: {
												range: n.mediaRange,
												responseType: "arraybuffer"
											},
											onload: function(e) {
												var r = M.getSamplesInfo(e.target.response),
													s = new Blob([e.target.response.slice(r.sampleList[0].offset, r.sampleList[0].offset + r.sampleList[0].size)], {
														type: "image/jpeg"
													}),
													i = window.URL.createObjectURL(s);
												a.push({
													start: n.mediaStartTime,
													end: n.mediaStartTime + n.duration,
													url: i
												}), t && t(i)
											}
										}), !0
									}
								}))
							}
						}
					}) : (n.startNumber = e.startNumber, n.segmentDuration = e.segmentDuration, n.timescale = e.timescale, n.templateUrl = function(e) {
						var t = T.isRelative(e.media) ? T.resolve(e.media, h.resolve(e.path).url) : e.media;
						if (!t) return "";
						return (0, u.replaceIDForTemplate)(t, e.id)
					}(e)), n.tilesHor > 0 && n.tilesVert > 0 && (n.widthPerTile = n.width / n.tilesHor, n.heightPerTile = n.height / n.tilesVert, b.push(n))
				}

				function N() {
					b = [], A = -1, I = null
				}
				return t = {
					initialize: C,
					getTracks: function() {
						return b
					},
					reset: N,
					setTrackByIndex: function(e) {
						b && 0 !== b.length && (e >= b.length && (e = b.length - 1), A = e)
					},
					getCurrentTrack: function() {
						return A < 0 ? null : b[A]
					},
					getCurrentTrackIndex: function() {
						return A
					},
					getThumbnailRequestForTime: function(e) {
						for (var t = void 0, n = i.getVoRepresentations(I), r = 0; r < n.length; r++)
							if (b[A].id === n[r].id) {
								t = n[r];
								break
							} return S.getSegmentRequestForTime(I, t, e)
					}
				}, C(), t
			}
			g.__dashjs_factory_name = "ThumbnailTracks", t.default = i.default.getClassFactory(g)
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/BaseURLSelector.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = f(n("./node_modules/dashjs/build/es5/src/core/errors/Errors.js")),
				s = f(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				i = f(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				a = f(n("./node_modules/dashjs/build/es5/src/streaming/controllers/BlacklistController.js")),
				o = f(n("./node_modules/dashjs/build/es5/src/streaming/utils/baseUrlResolution/DVBSelector.js")),
				u = f(n("./node_modules/dashjs/build/es5/src/streaming/utils/baseUrlResolution/BasicSelector.js")),
				l = f(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				d = f(n("./node_modules/dashjs/build/es5/src/streaming/vo/DashJSError.js")),
				c = n("./node_modules/dashjs/build/es5/src/streaming/utils/SupervisorTools.js");

			function f(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function h() {
				var e, t = this.context,
					n = (0, s.default)(t).getInstance(),
					l = void 0,
					f = void 0,
					h = void 0,
					m = void 0;

				function g() {
					l.reset()
				}
				return e = {
					chooseSelector: function(e) {
						(0, c.checkParameterType)(e, "boolean"), m = e ? h : f
					},
					select: function(e) {
						if (e) {
							var t = e.baseUrls,
								s = e.selectedIdx;
							if (!isNaN(s)) return t[s];
							var a = m.select(t);
							return a ? (e.selectedIdx = t.indexOf(a), a) : (n.trigger(i.default.URL_RESOLUTION_FAILED, {
								error: new d.default(r.default.URL_RESOLUTION_FAILED_GENERIC_ERROR_CODE, r.default.URL_RESOLUTION_FAILED_GENERIC_ERROR_MESSAGE)
							}), void(m === f && g()))
						}
					},
					reset: g,
					setConfig: function(e) {
						e.selector && (m = e.selector)
					}
				}, l = (0, a.default)(t).create({
					updateEventName: i.default.SERVICE_LOCATION_BLACKLIST_CHANGED,
					addBlacklistEventName: i.default.SERVICE_LOCATION_BLACKLIST_ADD
				}), f = (0, u.default)(t).create({
					blacklistController: l
				}), h = (0, o.default)(t).create({
					blacklistController: l
				}), m = f, e
			}
			h.__dashjs_factory_name = "BaseURLSelector", t.default = l.default.getClassFactory(h)
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/BoxParser.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = u(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				s = u(n("./node_modules/dashjs/build/es5/src/streaming/utils/IsoFile.js")),
				i = u(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				a = u(n("./node_modules/codem-isoboxer/dist/iso_boxer.js")),
				o = u(n("./node_modules/dashjs/build/es5/src/streaming/vo/IsoBoxSearchInfo.js"));

			function u(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function l() {
				var e = void 0,
					t = void 0,
					n = this.context;

				function i(e) {
					if (!e) return null;
					void 0 === e.fileStart && (e.fileStart = 0);
					var t = a.default.parseBuffer(e),
						r = (0, s.default)(n).create();
					return r.setData(t), r
				}

				function u(e, t) {
					return e[t + 3] >>> 0 | e[t + 2] << 8 >>> 0 | e[t + 1] << 16 >>> 0 | e[t] << 24 >>> 0
				}

				function l(e, t) {
					return String.fromCharCode(e[t++]) + String.fromCharCode(e[t++]) + String.fromCharCode(e[t++]) + String.fromCharCode(e[t])
				}
				return t = {
					parse: i,
					findLastTopIsoBoxCompleted: function(e, t, n) {
						if (void 0 === n && (n = 0), !t || n + 8 >= t.byteLength) return new o.default(0, !1);
						for (var r = t instanceof ArrayBuffer ? new Uint8Array(t) : t, s = void 0, i = 0; n < r.byteLength;) {
							var a = u(r, n),
								d = l(r, n + 4);
							if (0 === a) break;
							n + a <= r.byteLength && (e.indexOf(d) >= 0 ? s = new o.default(n, !0, a) : i = n + a), n += a
						}
						return s || new o.default(i, !1)
					},
					getMediaTimescaleFromMoov: function(e) {
						var t = i(e),
							n = t ? t.getBox("mdhd") : void 0;
						return n ? n.timescale : NaN
					},
					getSamplesInfo: function(e) {
						if (!e || 0 === e.byteLength) return {
							sampleList: [],
							lastSequenceNumber: NaN,
							totalDuration: NaN,
							numSequences: NaN
						};
						var t, n, r = i(e),
							s = r.getBoxes("moof"),
							a = r.getBoxes("mfhd"),
							o = void 0,
							u = void 0,
							l = void 0,
							d = void 0,
							c = void 0,
							f = void 0,
							h = void 0,
							m = void 0,
							g = void 0,
							_ = void 0,
							p = void 0,
							E = void 0,
							v = void 0,
							y = void 0;
						n = r.getBoxes("moof").length, t = a[a.length - 1].sequence_number, u = 0, c = [];
						var T = -1,
							b = -1;
						for (_ = 0; _ < s.length; _++) {
							var S = s[_],
								A = S.getChildBoxes("traf");
							for (m = 0; m < A.length; m++) {
								var I = A[m],
									R = I.getChildBox("tfhd"),
									M = I.getChildBox("tfdt");
								d = M.baseMediaDecodeTime;
								var C = I.getChildBoxes("trun"),
									D = I.getChildBoxes("subs");
								for (g = 0; g < C.length; g++) {
									var N = C[g];
									for (u = N.sample_count, v = (R.base_data_offset || 0) + (N.data_offset || 0), h = 0; h < u; h++) {
										o = void 0 !== (f = N.samples[h]).sample_duration ? f.sample_duration : R.default_sample_duration, l = void 0 !== f.sample_size ? f.sample_size : R.default_sample_size;
										var O = {
											dts: d,
											cts: d + (void 0 !== f.sample_composition_time_offset ? f.sample_composition_time_offset : 0),
											duration: o,
											offset: S.offset + v,
											size: l,
											subSizes: [l]
										};
										if (D)
											for (p = 0; p < D.length; p++) {
												var j = D[p];
												if (T < j.entry_count - 1 && h > b && (T++, b += j.entries[T].sample_delta), h == b) {
													O.subSizes = [];
													var w = j.entries[T];
													for (E = 0; E < w.subsample_count; E++) O.subSizes.push(w.subsamples[E].subsample_size)
												}
											}
										c.push(O), v += l, d += o
									}
								}
								y = d - M.baseMediaDecodeTime
							}
						}
						return {
							sampleList: c,
							lastSequenceNumber: t,
							totalDuration: y,
							numSequences: n
						}
					},
					findInitRange: function(t) {
						var n = null,
							r = i(t);
						if (!r) return n;
						var s = r.getBox("ftyp"),
							a = r.getBox("moov");
						return e.debug("Searching for initialization."), a && a.isComplete && (n = (s ? s.offset : a.offset) + "-" + (a.offset + a.size - 1), e.debug("Found the initialization.  Range: " + n)), n
					},
					parsePayload: function(e, t, n) {
						if (void 0 === n && (n = 0), !t || n + 8 >= t.byteLength) return new o.default(0, !1);
						for (var r = t instanceof ArrayBuffer ? new Uint8Array(t) : t, s = void 0, i = 0; n < r.byteLength;) {
							var a = u(r, n),
								d = l(r, n + 4);
							if (0 === a) break;
							n + a <= r.byteLength && (e.indexOf(d) >= 0 ? s = new o.default(n, !0, a, d) : i = n + a), n += a
						}
						return s || new o.default(i, !1)
					}
				}, e = (0, r.default)(n).getInstance().getLogger(t), t
			}
			l.__dashjs_factory_name = "BoxParser", t.default = i.default.getSingletonFactory(l)
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/Capabilities.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
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
					supportsCodec: function(e) {
						return !!("MediaSource" in window && MediaSource.isTypeSupported(e)) || !!("WebKitMediaSource" in window && WebKitMediaSource.isTypeSupported(e))
					},
					setEncryptedMediaSupported: function(e) {
						t = e
					}
				}, t = !1, e
			}
			a.__dashjs_factory_name = "Capabilities", t.default = i.default.getSingletonFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/CustomTimeRanges.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				},
				a = n("./node_modules/dashjs/build/es5/src/streaming/utils/SupervisorTools.js");

			function o() {
				return {
					customTimeRangeArray: [],
					length: 0,
					add: function(e, t) {
						var n = 0;
						for (n = 0; n < this.customTimeRangeArray.length && e > this.customTimeRangeArray[n].start; n++);
						for (this.customTimeRangeArray.splice(n, 0, {
								start: e,
								end: t
							}), n = 0; n < this.customTimeRangeArray.length - 1; n++) this.mergeRanges(n, n + 1) && n--;
						this.length = this.customTimeRangeArray.length
					},
					clear: function() {
						this.customTimeRangeArray = [], this.length = 0
					},
					remove: function(e, t) {
						for (var n = 0; n < this.customTimeRangeArray.length; n++)
							if (e <= this.customTimeRangeArray[n].start && t >= this.customTimeRangeArray[n].end) this.customTimeRangeArray.splice(n, 1), n--;
							else {
								if (e > this.customTimeRangeArray[n].start && t < this.customTimeRangeArray[n].end) {
									this.customTimeRangeArray.splice(n + 1, 0, {
										start: t,
										end: this.customTimeRangeArray[n].end
									}), this.customTimeRangeArray[n].end = e;
									break
								}
								e > this.customTimeRangeArray[n].start && e < this.customTimeRangeArray[n].end ? this.customTimeRangeArray[n].end = e : t > this.customTimeRangeArray[n].start && t < this.customTimeRangeArray[n].end && (this.customTimeRangeArray[n].start = t)
							} this.length = this.customTimeRangeArray.length
					},
					mergeRanges: function(e, t) {
						var n = this.customTimeRangeArray[e],
							r = this.customTimeRangeArray[t];
						return n.start <= r.start && r.start <= n.end && n.end <= r.end ? (n.end = r.end, this.customTimeRangeArray.splice(t, 1), !0) : r.start <= n.start && n.start <= r.end && r.end <= n.end ? (n.start = r.start, this.customTimeRangeArray.splice(t, 1), !0) : r.start <= n.start && n.start <= r.end && n.end <= r.end ? (this.customTimeRangeArray.splice(e, 1), !0) : n.start <= r.start && r.start <= n.end && r.end <= n.end && (this.customTimeRangeArray.splice(t, 1), !0)
					},
					start: function(e) {
						return (0, a.checkInteger)(e), e >= this.customTimeRangeArray.length || e < 0 ? NaN : this.customTimeRangeArray[e].start
					},
					end: function(e) {
						return (0, a.checkInteger)(e), e >= this.customTimeRangeArray.length || e < 0 ? NaN : this.customTimeRangeArray[e].end
					}
				}
			}
			o.__dashjs_factory_name = "CustomTimeRanges", t.default = i.default.getClassFactory(o)
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/DOMStorage.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = a(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = a(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				i = a(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js"));

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var o = [{
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
				c = "sessionStorage",
				f = "lastBitrate",
				h = "lastMediaSettings";

			function m(e) {
				e = e || {};
				var t = this.context,
					n = e.settings,
					r = void 0,
					a = void 0,
					m = void 0;

				function g(e) {
					if (void 0 !== m) return m;
					m = !1;
					var t = void 0;
					try {
						"undefined" != typeof window && (t = window[e])
					} catch (n) {
						return a.warn("DOMStorage access denied: " + n.message), m
					}
					if (!t || e !== d && e !== c) return m;
					try {
						t.setItem("1", "1"), t.removeItem("1"), m = !0
					} catch (n) {
						a.warn("DOMStorage is supported, but cannot be used: " + n.message)
					}
					return m
				}

				function _() {
					return 6e5 * Math.round((new Date).getTime() / 6e5)
				}

				function p(e, t) {
					return g(e) && n.get().streaming[t + "CachingInfo"].enabled
				}

				function E() {
					if (!n) throw new Error(i.default.MISSING_CONFIG_ERROR)
				}
				return r = {
					getSavedBitrateSettings: function(e) {
						var t = NaN;
						if (E(), p(d, f)) {
							var r = u.replace(/\?/, e);
							try {
								var s = JSON.parse(localStorage.getItem(r)) || {},
									i = (new Date).getTime() - parseInt(s.timestamp, 10) >= n.get().streaming.lastBitrateCachingInfo.ttl || !1,
									o = parseFloat(s.bitrate);
								isNaN(o) || i ? i && localStorage.removeItem(r) : (t = o, a.debug("Last saved bitrate for " + e + " was " + o))
							} catch (l) {
								return null
							}
						}
						return t
					},
					setSavedBitrateSettings: function(e, t) {
						if (p(d, f) && t) {
							var n = u.replace(/\?/, e);
							try {
								localStorage.setItem(n, JSON.stringify({
									bitrate: t.toFixed(3),
									timestamp: _()
								}))
							} catch (r) {
								a.error(r.message)
							}
						}
					},
					getSavedMediaSettings: function(e) {
						var t = null;
						if (E(), p(d, h)) {
							var r = l.replace(/\?/, e);
							try {
								var s = JSON.parse(localStorage.getItem(r)) || {},
									i = (new Date).getTime() - parseInt(s.timestamp, 10) >= n.get().streaming.lastMediaSettingsCachingInfo.ttl || !1;
								t = s.settings, i && (localStorage.removeItem(r), t = null)
							} catch (a) {
								return null
							}
						}
						return t
					},
					setSavedMediaSettings: function(e, t) {
						if (p(d, h)) {
							var n = l.replace(/\?/, e);
							try {
								localStorage.setItem(n, JSON.stringify({
									settings: t,
									timestamp: _()
								}))
							} catch (r) {
								a.error(r.message)
							}
						}
					}
				}, a = (0, s.default)(t).getInstance().getLogger(r), g(d) && o.forEach((function(e) {
					var t = localStorage.getItem(e.oldKey);
					if (t) {
						localStorage.removeItem(e.oldKey);
						try {
							localStorage.setItem(e.newKey, t)
						} catch (n) {
							a.error(n.message)
						}
					}
				})), r
			}
			m.__dashjs_factory_name = "DOMStorage";
			var g = r.default.getSingletonFactory(m);
			t.default = g
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/DefaultURLUtils.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				};

			function a() {
				var e = void 0,
					t = /^[a-z][a-z0-9+\-_.]*:/i,
					n = /^https?:\/\//i,
					r = /^https:\/\//i,
					s = /^([a-z][a-z0-9+\-_.]*:\/\/[^\/]+)\/?/i,
					i = function(e, t) {
						try {
							return new window.URL(e, t).toString()
						} catch (n) {
							return e
						}
					},
					a = function(e, t) {
						var n = o;
						if (!t) return e;
						if (!d(e)) return e;
						c(e) && (n = u), f(e) && (n = l);
						var r = n(t),
							s = "/" !== r.charAt(r.length - 1) && "/" !== e.charAt(0) ? "/" : "";
						return [r, e].join(s)
					};

				function o(e) {
					var t = e.indexOf("/"),
						n = e.lastIndexOf("/");
					return -1 !== t ? n === t + 1 ? e : (-1 !== e.indexOf("?") && (e = e.substring(0, e.indexOf("?"))), e.substring(0, n + 1)) : ""
				}

				function u(e) {
					var t = e.match(s);
					return t ? t[1] : ""
				}

				function l(e) {
					var n = e.match(t);
					return n ? n[0] : ""
				}

				function d(e) {
					return !t.test(e)
				}

				function c(e) {
					return d(e) && "/" === e.charAt(0)
				}

				function f(e) {
					return 0 === e.indexOf("//")
				}
				return function() {
					try {
						new window.URL("x", "http://y");
						e = i
					} catch (t) {} finally {
						e = e || a
					}
				}(), {
					parseBaseUrl: o,
					parseOrigin: u,
					parseScheme: l,
					isRelative: d,
					isPathAbsolute: c,
					isSchemeRelative: f,
					isHTTPURL: function(e) {
						return n.test(e)
					},
					isHTTPS: function(e) {
						return r.test(e)
					},
					removeHostname: function(e) {
						return /^(?:\w+\:\/\/)?([^\/]+)(.*)$/.exec(e)[2].substring(1)
					},
					resolve: function(t, n) {
						return e(t, n)
					}
				}
			}
			a.__dashjs_factory_name = "DefaultURLUtils", t.default = i.default.getSingletonFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/EBMLParser.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				};

			function a(e) {
				e = e || {};
				var t = void 0,
					n = new DataView(e.data),
					r = 0;

				function s(e, t) {
					var s = !0,
						i = 0;
					if (void 0 === t && (t = !1), e.tag > 16777215 ? (n.getUint32(r) !== e.tag && (s = !1), i = 4) : e.tag > 65535 ? (256 * n.getUint16(r) + n.getUint8(r + 2) !== e.tag && (s = !1), i = 3) : e.tag > 255 ? (n.getUint16(r) !== e.tag && (s = !1), i = 2) : (n.getUint8(r) !== e.tag && (s = !1), i = 1), !s && e.required && !t) throw new Error("required tag not found");
					return s && (r += i), s
				}

				function i(e) {
					var t = 1,
						s = 128,
						i = -1,
						a = 0,
						o = n.getUint8(r),
						u = 0;
					for (u = 0; u < 8; u += 1) {
						if ((o & s) === s) {
							a = void 0 === e ? o & ~s : o, i = u;
							break
						}
						s >>= 1
					}
					for (u = 0; u < i; u += 1, t += 1) a = a << 8 | 255 & n.getUint8(r + t);
					return r += t, a
				}
				return t = {
					getPos: function() {
						return r
					},
					setPos: function(e) {
						r = e
					},
					consumeTag: s,
					consumeTagAndSize: function(e, t) {
						var n = s(e, t);
						return n && i(), n
					},
					parseTag: function(e) {
						var n;
						return s(e), n = i(), t[e.parse](n)
					},
					skipOverElement: function(e, t) {
						var n = s(e, t),
							a = void 0;
						return n && (a = i(), r += a), n
					},
					getMatroskaCodedNum: i,
					getMatroskaFloat: function(e) {
						var t = void 0;
						switch (e) {
							case 4:
								t = n.getFloat32(r), r += 4;
								break;
							case 8:
								t = n.getFloat64(r), r += 8
						}
						return t
					},
					getMatroskaUint: function(e) {
						for (var t = 0, s = 0; s < e; s += 1) t <<= 8, t |= 255 & n.getUint8(r + s);
						return r += e, t
					},
					moreData: function() {
						return r < n.byteLength
					}
				}
			}
			a.__dashjs_factory_name = "EBMLParser", t.default = i.default.getClassFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/ErrorHandler.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = a(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				s = a(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				i = a(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function o() {
				var e = this.context,
					t = (0, r.default)(e).getInstance();
				return {
					error: function(e) {
						t.trigger(s.default.ERROR, {
							error: e
						})
					}
				}
			}
			o.__dashjs_factory_name = "ErrorHandler", t.default = i.default.getSingletonFactory(o)
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/InitCache.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				};

			function a() {
				var e = {};
				return {
					save: function(t) {
						var n = t.streamId,
							r = t.representationId;
						e[n] = e[n] || {}, e[n][r] = t
					},
					extract: function(t, n) {
						return e && e[t] && e[t][n] ? e[t][n] : null
					},
					reset: function() {
						e = {}
					}
				}
			}
			a.__dashjs_factory_name = "InitCache", t.default = i.default.getSingletonFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/IsoFile.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/streaming/vo/IsoBox.js")),
				s = i(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function a() {
				var e = void 0;

				function t(t) {
					var r = [];
					if (!t || !e || "function" != typeof e.fetchAll) return r;
					for (var s = e.fetchAll(t), i = void 0, a = 0, o = s.length; a < o; a++)(i = n(s[a])) && r.push(i);
					return r
				}

				function n(e) {
					if (!e) return null;
					var t = new r.default(e);
					return e.hasOwnProperty("_incomplete") && (t.isComplete = !e._incomplete), t
				}
				return {
					getBox: function(t) {
						return t && e && e.boxes && 0 !== e.boxes.length && "function" == typeof e.fetch ? n(e.fetch(t)) : null
					},
					getBoxes: t,
					setData: function(t) {
						e = t
					},
					getLastBox: function() {
						if (!e || !e.boxes || !e.boxes.length) return null;
						var n = t(e.boxes[e.boxes.length - 1].type);
						return n.length > 0 ? n[n.length - 1] : null
					}
				}
			}
			a.__dashjs_factory_name = "IsoFile", t.default = s.default.getClassFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/LiveEdgeFinder.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = i(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function a(e) {
				var t = (e = e || {}).timelineConverter;
				return {
					getLiveEdge: function(e) {
						return function() {
							if (!t || !t.hasOwnProperty("getExpectedLiveEdge")) throw new Error(s.default.MISSING_CONFIG_ERROR)
						}(), e.DVRWindow ? e.DVRWindow.end : 0
					},
					reset: function() {
						t = null
					}
				}
			}
			a.__dashjs_factory_name = "LiveEdgeFinder", t.default = r.default.getClassFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/ObjectUtils.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = i(n("./node_modules/dashjs/node_modules/fast-deep-equal/index.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function a() {
				return {
					areEqual: function(e, t) {
						return (0, s.default)(e, t)
					}
				}
			}
			a.__dashjs_factory_name = "ObjectUtils", t.default = r.default.getSingletonFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/RequestModifier.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
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
			a.__dashjs_factory_name = "RequestModifier", t.default = i.default.getSingletonFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/SupervisorTools.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			};
			t.checkParameterType = function(e, t) {
				if ((void 0 === e ? "undefined" : r(e)) !== t) throw a.default.BAD_ARGUMENT_ERROR
			}, t.checkInteger = function(e) {
				if (null === e || isNaN(e) || e % 1 != 0) throw a.default.BAD_ARGUMENT_ERROR + " : argument is not an integer"
			}, t.checkRange = function(e, t, n) {
				if (e < t || e > n) throw a.default.BAD_ARGUMENT_ERROR + " : argument out of range"
			}, t.checkIsVideoOrAudioType = function(e) {
				if ("string" != typeof e || e !== a.default.AUDIO && e !== a.default.VIDEO) throw a.default.BAD_ARGUMENT_ERROR
			};
			var s, i = n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js"),
				a = (s = i) && s.__esModule ? s : {
					default: s
				}
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/TTMLParser.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = u(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = u(n("./node_modules/dashjs/build/es5/src/core/Debug.js")),
				i = u(n("./node_modules/dashjs/build/es5/src/core/EventBus.js")),
				a = u(n("./node_modules/dashjs/build/es5/src/core/events/Events.js")),
				o = n("./node_modules/imsc/src/main/js/main.js");

			function u(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function l() {
				var e = this.context,
					t = (0, i.default)(e).getInstance(),
					n = void 0,
					r = void 0,
					u = 0;
				return n = {
					parse: function(e, n, s, i, l) {
						var d = "",
							c = [],
							f = void 0,
							h = void 0,
							m = void 0,
							g = {},
							_ = {},
							p = "",
							E = "",
							v = {
								onOpenTag: function(e, t, n) {
									if (n[" imagetype"] && !n[" imageType"] && (n[" imageType"] = n[" imagetype"]), "image" === t && ("http://www.smpte-ra.org/schemas/2052-1/2010/smpte-tt" === e || "http://www.smpte-ra.org/schemas/2052-1/2013/smpte-tt" === e)) {
										if (!n[" imageType"] || "PNG" !== n[" imageType"].value) return void r.warn("smpte-tt imageType != PNG. Discarded");
										p = n["http://www.w3.org/XML/1998/namespace id"].value
									}
								},
								onCloseTag: function() {
									p && (_[p] = E.trim()), E = "", p = ""
								},
								onText: function(e) {
									p && (E += e)
								}
							};
						if (!e) throw d = "no ttml data to parse", new Error(d);
						g.data = e, t.trigger(a.default.TTML_TO_PARSE, g);
						var y = (0, o.fromXML)(g.data, (function(e) {
							d = e
						}), v);
						t.trigger(a.default.TTML_PARSED, {
							ttmlString: g.data,
							ttmlDoc: y
						});
						var T, b = y.getMediaTimeEvents();
						for (m = 0; m < b.length; m++) {
							var S = (0, o.generateISD)(y, b[m], (function(e) {
								d = e
							}));
							S.contents.some((function(e) {
								return e.contents.length
							})) && (f = b[m] + n < s ? s : b[m] + n) < (h = b[m + 1] + n > i ? i : b[m + 1] + n) && c.push({
								start: f,
								end: h,
								type: "html",
								cueID: (T = void 0, T = "cue_TTML_" + u, u++, T),
								isd: S,
								images: l,
								embeddedImages: _
							})
						}
						if ("" !== d) throw r.error(d), new Error(d);
						return c
					}
				}, r = (0, s.default)(e).getInstance().getLogger(n), n
			}
			l.__dashjs_factory_name = "TTMLParser", t.default = r.default.getSingletonFactory(l)
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/URLUtils.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = i(n("./node_modules/dashjs/build/es5/src/streaming/utils/DefaultURLUtils.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function a() {
				var e = void 0,
					t = [],
					n = this.context;

				function r(n, r, s) {
					var i = function(n) {
						var r = void 0;
						for (r = 0; r < t.length; r++) {
							if (t[r].regex.test(n)) return t[r].utils
						}
						return e
					}(s || r);
					return i && "function" == typeof i[n] ? i[n](r, s) : e[n](r, s)
				}
				return e = (0, s.default)(n).getInstance(), {
					registerUrlRegex: function(e, n) {
						t.push({
							regex: e,
							utils: n
						})
					},
					parseBaseUrl: function(e) {
						return r("parseBaseUrl", e)
					},
					parseOrigin: function(e) {
						return r("parseOrigin", e)
					},
					parseScheme: function(e) {
						return r("parseScheme", e)
					},
					isRelative: function(e) {
						return r("isRelative", e)
					},
					isPathAbsolute: function(e) {
						return r("isPathAbsolute", e)
					},
					isSchemeRelative: function(e) {
						return r("isSchemeRelative", e)
					},
					isHTTPURL: function(e) {
						return r("isHTTPURL", e)
					},
					isHTTPS: function(e) {
						return r("isHTTPS", e)
					},
					removeHostname: function(e) {
						return r("removeHostname", e)
					},
					resolve: function(e, t) {
						return r("resolve", e, t)
					}
				}
			}
			a.__dashjs_factory_name = "URLUtils";
			var o = r.default.getSingletonFactory(a);
			t.default = o
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/VTTParser.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js")),
				s = i(n("./node_modules/dashjs/build/es5/src/core/Debug.js"));

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var a = "WEBVTT";

			function o() {
				var e = this.context,
					t = void 0,
					n = void 0,
					r = void 0,
					i = void 0,
					o = void 0,
					u = void 0;

				function l(e) {
					var t = e.split(":"),
						n = t.length - 1;
					return e = 60 * parseInt(t[n - 1], 10) + parseFloat(t[n]), 2 === n && (e += 3600 * parseInt(t[0], 10)), e
				}

				function d(e) {
					var t = e.split(i),
						n = t[1].split(u);
					return n.shift(), t[1] = n[0], n.shift(), {
						cuePoints: t,
						styles: c(n)
					}
				}

				function c(e) {
					var t = {};
					return e.forEach((function(e) {
						if (e.split(/:/).length > 1) {
							var n = e.split(/:/)[1];
							n && -1 != n.search(/%/) && (n = parseInt(n.replace(/%/, ""), 10)), (e.match(/align/) || e.match(/A/)) && (t.align = n), (e.match(/line/) || e.match(/L/)) && (t.line = n), (e.match(/position/) || e.match(/P/)) && (t.position = n), (e.match(/size/) || e.match(/S/)) && (t.size = n)
						}
					})), t
				}

				function f(e, t) {
					for (var n, r = t, s = "", a = "";
						"" !== e[r] && r < e.length;) r++;
					if ((n = r - t) > 1)
						for (var o = 0; o < n; o++) {
							if ((a = e[t + o]).match(i)) {
								s = "";
								break
							}
							s += a, o !== n - 1 && (s += "\n")
						} else(a = e[t]).match(i) || (s = a);
					return s
				}
				return t = {
					parse: function(e) {
						var t, s = [],
							u = void 0;
						if (!e) return s;
						t = (e = e.split(r)).length, u = -1;
						for (var c = 0; c < t; c++) {
							var h = e[c];
							if (h.length > 0 && h !== a && h.match(i)) {
								var m = d(h),
									g = m.cuePoints,
									_ = m.styles,
									p = f(e, c + 1),
									E = l(g[0].replace(o, "")),
									v = l(g[1].replace(o, ""));
								!isNaN(E) && !isNaN(v) && E >= u && v > E ? "" !== p ? (u = E, s.push({
									start: E,
									end: v,
									data: p,
									styles: _
								})) : n.error("Skipping cue due to empty/malformed cue text") : n.error("Skipping cue due to incorrect cue timing")
							}
						}
						return s
					}
				}, n = (0, s.default)(e).getInstance().getLogger(t), r = /(?:\r\n|\r|\n)/gm, i = /-->/, o = /(^[\s]+|[\s]+$)/g, u = /\s\b/g, t
			}
			o.__dashjs_factory_name = "VTTParser", t.default = r.default.getSingletonFactory(o)
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/baseUrlResolution/BasicSelector.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				};

			function a(e) {
				var t = (e = e || {}).blacklistController;
				return {
					select: function(e) {
						var n = 0,
							r = void 0;
						return e && e.some((function(e, r) {
							return n = r, !t.contains(e.serviceLocation)
						})) && (r = e[n]), r
					}
				}
			}
			a.__dashjs_factory_name = "BasicSelector", t.default = i.default.getClassFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/utils/baseUrlResolution/DVBSelector.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/core/FactoryMaker.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				};

			function a(e) {
				var t = (e = e || {}).blacklistController;
				return {
					select: function(e) {
						return e && function(e) {
							var t = 0,
								n = [],
								r = 0,
								s = void 0,
								i = void 0;
							if ((i = e.sort((function(e, t) {
									var n = e.dvb_priority - t.dvb_priority;
									return isNaN(n) ? 0 : n
								})).filter((function(e, t, n) {
									return !t || n[0].dvb_priority && e.dvb_priority && n[0].dvb_priority === e.dvb_priority
								}))).length) return i.length > 1 && (i.forEach((function(e) {
								t += e.dvb_weight, n.push(t)
							})), s = Math.floor(Math.random() * (t - 1)), n.every((function(e, t) {
								return r = t, !(s < e)
							}))), i[r]
						}((n = [], e.filter((function(e) {
							return !t.contains(e.serviceLocation) || (e.dvb_priority && n.push(e.dvb_priority), !1)
						})).filter((function(e) {
							return !n.length || !e.dvb_priority || -1 === n.indexOf(e.dvb_priority)
						}))));
						var n
					}
				}
			}
			a.__dashjs_factory_name = "DVBSelector", t.default = i.default.getClassFactory(a)
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/BitrateInfo.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.mediaType = null, this.bitrate = null, this.width = null, this.height = null, this.scanType = null, this.qualityIndex = NaN
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/DashJSError.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e(t, n, r) {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.code = t || null, this.message = n || null, this.data = r || null
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/DataChunk.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.streamId = null, this.mediaInfo = null, this.segmentType = null, this.quality = NaN, this.index = NaN, this.bytes = null, this.start = NaN, this.end = NaN, this.duration = NaN, this.representationId = null, this.endFragment = null
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/FragmentRequest.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
						}
					}
					return function(t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t
					}
				}(),
				s = n("./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js");
			var i = function() {
				function e(t) {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this.action = e.ACTION_DOWNLOAD, this.startTime = NaN, this.mediaStartTime = NaN, this.mediaType = null, this.mediaInfo = null, this.type = null, this.duration = NaN, this.timescale = NaN, this.range = null, this.url = t || null, this.serviceLocation = null, this.requestStartDate = null, this.firstByteDate = null, this.requestEndDate = null, this.quality = NaN, this.index = NaN, this.availabilityStartTime = null, this.availabilityEndTime = null, this.wallStartTime = null, this.bytesLoaded = NaN, this.bytesTotal = NaN, this.delayLoadingTime = NaN, this.responseType = "arraybuffer", this.representationId = null
				}
				return r(e, [{
					key: "isInitializationRequest",
					value: function() {
						return this.type && this.type === s.HTTPRequest.INIT_SEGMENT_TYPE
					}
				}, {
					key: "setInfo",
					value: function(e) {
						this.type = e && e.init ? s.HTTPRequest.INIT_SEGMENT_TYPE : s.HTTPRequest.MEDIA_SEGMENT_TYPE, this.url = e && e.url ? e.url : null, this.range = e && e.range ? e.range.start + "-" + e.range.end : null, this.mediaType = e && e.mediaType ? e.mediaType : null
					}
				}]), e
			}();
			i.ACTION_DOWNLOAD = "download", i.ACTION_COMPLETE = "complete", t.default = i
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/HeadRequest.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/streaming/vo/FragmentRequest.js");
			var i = function(e) {
				function t(e) {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					var n = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					return n.checkForExistenceOnly = !0, n
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
			}(((r = s) && r.__esModule ? r : {
				default: r
			}).default);
			t.default = i
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/IsoBox.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}();
			var s = function() {
				function e(t) {
					if (function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, e), this.offset = t._offset, this.type = t.type, this.size = t.size, this.boxes = [], t.boxes)
						for (var n = 0; n < t.boxes.length; n++) this.boxes.push(new e(t.boxes[n]));
					switch (this.isComplete = !0, t.type) {
						case "sidx":
							if (this.timescale = t.timescale, this.earliest_presentation_time = t.earliest_presentation_time, this.first_offset = t.first_offset, this.references = t.references, t.references) {
								this.references = [];
								for (var r = 0; r < t.references.length; r++) {
									var s = {
										reference_type: t.references[r].reference_type,
										referenced_size: t.references[r].referenced_size,
										subsegment_duration: t.references[r].subsegment_duration
									};
									this.references.push(s)
								}
							}
							break;
						case "emsg":
							this.id = t.id, this.version = 1 === t.version ? 1 : 0, this.value = t.value, this.timescale = t.timescale, this.scheme_id_uri = t.scheme_id_uri, this.presentation_time_delta = 1 === t.version ? t.presentation_time : t.presentation_time_delta, this.event_duration = t.event_duration, this.message_data = t.message_data;
							break;
						case "mdhd":
							this.timescale = t.timescale;
							break;
						case "mfhd":
							this.sequence_number = t.sequence_number;
							break;
						case "subs":
							this.entry_count = t.entry_count, this.entries = t.entries;
							break;
						case "tfhd":
							this.base_data_offset = t.base_data_offset, this.sample_description_index = t.sample_description_index, this.default_sample_duration = t.default_sample_duration, this.default_sample_size = t.default_sample_size, this.default_sample_flags = t.default_sample_flags, this.flags = t.flags;
							break;
						case "tfdt":
							this.version = t.version, this.baseMediaDecodeTime = t.baseMediaDecodeTime, this.flags = t.flags;
							break;
						case "trun":
							if (this.sample_count = t.sample_count, this.first_sample_flags = t.first_sample_flags, this.data_offset = t.data_offset, this.flags = t.flags, this.samples = t.samples, t.samples) {
								this.samples = [];
								for (var i = 0, a = t.samples.length; i < a; i++) {
									var o = {
										sample_size: t.samples[i].sample_size,
										sample_duration: t.samples[i].sample_duration,
										sample_composition_time_offset: t.samples[i].sample_composition_time_offset
									};
									this.samples.push(o)
								}
							}
					}
				}
				return r(e, [{
					key: "getChildBox",
					value: function(e) {
						for (var t = 0; t < this.boxes.length; t++)
							if (this.boxes[t].type === e) return this.boxes[t]
					}
				}, {
					key: "getChildBoxes",
					value: function(e) {
						for (var t = [], n = 0; n < this.boxes.length; n++) this.boxes[n].type === e && t.push(this.boxes[n]);
						return t
					}
				}]), e
			}();
			t.default = s
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/IsoBoxSearchInfo.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e(t, n, r) {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.lastCompletedOffset = t, this.found = n, this.size = r
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/MetricsList.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.TcpList = [], this.HttpList = [], this.RepSwitchList = [], this.BufferLevel = [], this.BufferState = [], this.PlayList = [], this.DroppedFrames = [], this.SchedulingInfo = [], this.DVRInfo = [], this.ManifestUpdate = [], this.RequestsQueue = null, this.DVBErrors = []
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/TextRequest.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = s(n("./node_modules/dashjs/build/es5/src/streaming/constants/Constants.js"));

			function s(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var i = function(e) {
				function t(e, n) {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					var s = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
					return s.url = e || null, s.type = n || null, s.mediaType = r.default.STREAM, s.responseType = "", s
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
			}(s(n("./node_modules/dashjs/build/es5/src/streaming/vo/FragmentRequest.js")).default);
			t.default = i
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/TextTrackInfo.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.captionData = null, this.label = null, this.lang = null, this.defaultTrack = !1, this.kind = null, this.isFragmented = !1, this.isEmbedded = !1
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/Thumbnail.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.url = null, this.width = null, this.height = null, this.x = null, this.y = null
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/ThumbnailTrackInfo.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.bitrate = 0, this.width = 0, this.height = 0, this.tilesHor = 0, this.tilesVert = 0, this.widthPerTile = 0, this.heightPerTile = 0, this.startNumber = 0, this.segmentDuration = 0, this.timescale = 0, this.templateUrl = "", this.id = ""
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/URIFragmentData.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.t = null, this.xywh = null, this.track = null, this.id = null, this.s = null, this.r = null
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/metrics/BufferLevel.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.t = null, this.level = null
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/metrics/BufferState.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, s = n("./node_modules/dashjs/build/es5/src/streaming/constants/MetricsConstants.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				};
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.target = null, this.state = i.default.BUFFER_EMPTY
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/metrics/DVRInfo.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.time = null, this.range = null, this.manifestInfo = null
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/metrics/DroppedFrames.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.time = null, this.droppedFrames = null
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/metrics/HTTPRequest.js": function(e, t, n) {
			"use strict";

			function r(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = function e() {
				r(this, e), this.tcpid = null, this.type = null, this.url = null, this.actualurl = null, this.range = null, this.trequest = null, this.tresponse = null, this.responsecode = null, this.interval = null, this.trace = [], this._stream = null, this._tfinish = null, this._mediaduration = null, this._quality = null, this._responseHeaders = null, this._serviceLocation = null
			};
			s.GET = "GET", s.HEAD = "HEAD", s.MPD_TYPE = "MPD", s.XLINK_EXPANSION_TYPE = "XLinkExpansion", s.INIT_SEGMENT_TYPE = "InitializationSegment", s.INDEX_SEGMENT_TYPE = "IndexSegment", s.MEDIA_SEGMENT_TYPE = "MediaSegment", s.BITSTREAM_SWITCHING_SEGMENT_TYPE = "BitstreamSwitchingSegment", s.OTHER_TYPE = "other", t.HTTPRequest = s, t.HTTPRequestTrace = function e() {
				r(this, e), this.s = null, this.d = null, this.b = []
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/metrics/ManifestUpdate.js": function(e, t, n) {
			"use strict";

			function r(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.ManifestUpdate = function e() {
				r(this, e), this.mediaType = null, this.type = null, this.requestTime = null, this.fetchTime = null, this.availabilityStartTime = null, this.presentationStartTime = 0, this.clientTimeOffset = 0, this.currentTime = null, this.buffered = null, this.latency = 0, this.streamInfo = [], this.representationInfo = []
			}, t.ManifestUpdateStreamInfo = function e() {
				r(this, e), this.id = null, this.index = null, this.start = null, this.duration = null
			}, t.ManifestUpdateRepresentationInfo = function e() {
				r(this, e), this.id = null, this.index = null, this.mediaType = null, this.streamIndex = null, this.presentationTimeOffset = null, this.startNumber = null, this.fragmentInfoType = null
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/metrics/PlayList.js": function(e, t, n) {
			"use strict";

			function r(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = function e() {
				r(this, e), this.start = null, this.mstart = null, this.starttype = null, this.trace = []
			};
			s.INITIAL_PLAYOUT_START_REASON = "initial_playout", s.SEEK_START_REASON = "seek", s.RESUME_FROM_PAUSE_START_REASON = "resume", s.METRICS_COLLECTION_START_REASON = "metrics_collection_start";
			var i = function e() {
				r(this, e), this.representationid = null, this.subreplevel = null, this.start = null, this.mstart = null, this.duration = null, this.playbackspeed = null, this.stopreason = null
			};
			i.REPRESENTATION_SWITCH_STOP_REASON = "representation_switch", i.REBUFFERING_REASON = "rebuffering", i.USER_REQUEST_STOP_REASON = "user_request", i.END_OF_PERIOD_STOP_REASON = "end_of_period", i.END_OF_CONTENT_STOP_REASON = "end_of_content", i.METRICS_COLLECTION_STOP_REASON = "metrics_collection_end", i.FAILURE_STOP_REASON = "failure", t.PlayList = s, t.PlayListTrace = i
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/metrics/RepresentationSwitch.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.t = null, this.mt = null, this.to = null, this.lto = null
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/metrics/RequestsQueue.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.loadingRequests = [], this.executedRequests = []
			}
		},
		"./node_modules/dashjs/build/es5/src/streaming/vo/metrics/SchedulingInfo.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.mediaType = null, this.t = null, this.type = null, this.startTime = null, this.availabilityStartTime = null, this.duration = null, this.quality = null, this.range = null, this.state = null
			}
		},
		"./node_modules/dashjs/node_modules/fast-deep-equal/index.js": function(e, t, n) {
			"use strict";
			var r = Array.isArray,
				s = Object.keys,
				i = Object.prototype.hasOwnProperty;
			e.exports = function e(t, n) {
				if (t === n) return !0;
				if (t && n && "object" == typeof t && "object" == typeof n) {
					var a, o, u, l = r(t),
						d = r(n);
					if (l && d) {
						if ((o = t.length) != n.length) return !1;
						for (a = o; 0 != a--;)
							if (!e(t[a], n[a])) return !1;
						return !0
					}
					if (l != d) return !1;
					var c = t instanceof Date,
						f = n instanceof Date;
					if (c != f) return !1;
					if (c && f) return t.getTime() == n.getTime();
					var h = t instanceof RegExp,
						m = n instanceof RegExp;
					if (h != m) return !1;
					if (h && m) return t.toString() == n.toString();
					var g = s(t);
					if ((o = g.length) !== s(n).length) return !1;
					for (a = o; 0 != a--;)
						if (!i.call(n, g[a])) return !1;
					for (a = o; 0 != a--;)
						if (!e(t[u = g[a]], n[u])) return !1;
					return !0
				}
				return t != t && n != n
			}
		},
		"./node_modules/imsc/node_modules/sax/lib/sax.js": function(e, t, n) {
			(function(e) {
				! function(t) {
					t.parser = function(e, t) {
						return new i(e, t)
					}, t.SAXParser = i, t.SAXStream = o, t.createStream = function(e, t) {
						return new o(e, t)
					}, t.MAX_BUFFER_LENGTH = 65536;
					var r, s = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];

					function i(e, n) {
						if (!(this instanceof i)) return new i(e, n);
						! function(e) {
							for (var t = 0, n = s.length; t < n; t++) e[s[t]] = ""
						}(this), this.q = this.c = "", this.bufferCheckPosition = t.MAX_BUFFER_LENGTH, this.opt = n || {}, this.opt.lowercase = this.opt.lowercase || this.opt.lowercasetags, this.looseCase = this.opt.lowercase ? "toLowerCase" : "toUpperCase", this.tags = [], this.closed = this.closedRoot = this.sawRoot = !1, this.tag = this.error = null, this.strict = !!e, this.noscript = !(!e && !this.opt.noscript), this.state = C.BEGIN, this.strictEntities = this.opt.strictEntities, this.ENTITIES = this.strictEntities ? Object.create(t.XML_ENTITIES) : Object.create(t.ENTITIES), this.attribList = [], this.opt.xmlns && (this.ns = Object.create(p)), this.trackPosition = !1 !== this.opt.position, this.trackPosition && (this.position = this.line = this.column = 0), N(this, "onready")
					}
					t.EVENTS = ["text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace"], Object.create || (Object.create = function(e) {
						function t() {}
						return t.prototype = e, new t
					}), Object.keys || (Object.keys = function(e) {
						var t = [];
						for (var n in e) e.hasOwnProperty(n) && t.push(n);
						return t
					}), i.prototype = {
						end: function() {
							L(this)
						},
						write: function(e) {
							if (this.error) throw this.error;
							if (this.closed) return P(this, "Cannot write after close. Assign an onready handler.");
							if (null === e) return L(this);
							"object" == typeof e && (e = e.toString());
							var n = 0,
								r = "";
							for (; r = K(e, n++), this.c = r, r;) switch (this.trackPosition && (this.position++, "\n" === r ? (this.line++, this.column = 0) : this.column++), this.state) {
								case C.BEGIN:
									if (this.state = C.BEGIN_WHITESPACE, "\ufeff" === r) continue;
									H(this, r);
									continue;
								case C.BEGIN_WHITESPACE:
									H(this, r);
									continue;
								case C.TEXT:
									if (this.sawRoot && !this.closedRoot) {
										for (var i = n - 1; r && "<" !== r && "&" !== r;)(r = K(e, n++)) && this.trackPosition && (this.position++, "\n" === r ? (this.line++, this.column = 0) : this.column++);
										this.textNode += e.substring(i, n - 1)
									}
									"<" !== r || this.sawRoot && this.closedRoot && !this.strict ? (!A(u, r) || this.sawRoot && !this.closedRoot || F(this, "Text data outside of root node."), "&" === r ? this.state = C.TEXT_ENTITY : this.textNode += r) : (this.state = C.OPEN_WAKA, this.startTagPosition = this.position);
									continue;
								case C.SCRIPT:
									"<" === r ? this.state = C.SCRIPT_ENDING : this.script += r;
									continue;
								case C.SCRIPT_ENDING:
									"/" === r ? this.state = C.CLOSE_TAG : (this.script += "<" + r, this.state = C.SCRIPT);
									continue;
								case C.OPEN_WAKA:
									if ("!" === r) this.state = C.SGML_DECL, this.sgmlDecl = "";
									else if (S(u, r));
									else if (S(E, r)) this.state = C.OPEN_TAG, this.tagName = r;
									else if ("/" === r) this.state = C.CLOSE_TAG, this.tagName = "";
									else if ("?" === r) this.state = C.PROC_INST, this.procInstName = this.procInstBody = "";
									else {
										if (F(this, "Unencoded <"), this.startTagPosition + 1 < this.position) {
											var a = this.position - this.startTagPosition;
											r = new Array(a).join(" ") + r
										}
										this.textNode += "<" + r, this.state = C.TEXT
									}
									continue;
								case C.SGML_DECL:
									(this.sgmlDecl + r).toUpperCase() === h ? (O(this, "onopencdata"), this.state = C.CDATA, this.sgmlDecl = "", this.cdata = "") : this.sgmlDecl + r === "--" ? (this.state = C.COMMENT, this.comment = "", this.sgmlDecl = "") : (this.sgmlDecl + r).toUpperCase() === m ? (this.state = C.DOCTYPE, (this.doctype || this.sawRoot) && F(this, "Inappropriately located doctype declaration"), this.doctype = "", this.sgmlDecl = "") : ">" === r ? (O(this, "onsgmldeclaration", this.sgmlDecl), this.sgmlDecl = "", this.state = C.TEXT) : S(c, r) ? (this.state = C.SGML_DECL_QUOTED, this.sgmlDecl += r) : this.sgmlDecl += r;
									continue;
								case C.SGML_DECL_QUOTED:
									r === this.q && (this.state = C.SGML_DECL, this.q = ""), this.sgmlDecl += r;
									continue;
								case C.DOCTYPE:
									">" === r ? (this.state = C.TEXT, O(this, "ondoctype", this.doctype), this.doctype = !0) : (this.doctype += r, "[" === r ? this.state = C.DOCTYPE_DTD : S(c, r) && (this.state = C.DOCTYPE_QUOTED, this.q = r));
									continue;
								case C.DOCTYPE_QUOTED:
									this.doctype += r, r === this.q && (this.q = "", this.state = C.DOCTYPE);
									continue;
								case C.DOCTYPE_DTD:
									this.doctype += r, "]" === r ? this.state = C.DOCTYPE : S(c, r) && (this.state = C.DOCTYPE_DTD_QUOTED, this.q = r);
									continue;
								case C.DOCTYPE_DTD_QUOTED:
									this.doctype += r, r === this.q && (this.state = C.DOCTYPE_DTD, this.q = "");
									continue;
								case C.COMMENT:
									"-" === r ? this.state = C.COMMENT_ENDING : this.comment += r;
									continue;
								case C.COMMENT_ENDING:
									"-" === r ? (this.state = C.COMMENT_ENDED, this.comment = w(this.opt, this.comment), this.comment && O(this, "oncomment", this.comment), this.comment = "") : (this.comment += "-" + r, this.state = C.COMMENT);
									continue;
								case C.COMMENT_ENDED:
									">" !== r ? (F(this, "Malformed comment"), this.comment += "--" + r, this.state = C.COMMENT) : this.state = C.TEXT;
									continue;
								case C.CDATA:
									"]" === r ? this.state = C.CDATA_ENDING : this.cdata += r;
									continue;
								case C.CDATA_ENDING:
									"]" === r ? this.state = C.CDATA_ENDING_2 : (this.cdata += "]" + r, this.state = C.CDATA);
									continue;
								case C.CDATA_ENDING_2:
									">" === r ? (this.cdata && O(this, "oncdata", this.cdata), O(this, "onclosecdata"), this.cdata = "", this.state = C.TEXT) : "]" === r ? this.cdata += "]" : (this.cdata += "]]" + r, this.state = C.CDATA);
									continue;
								case C.PROC_INST:
									"?" === r ? this.state = C.PROC_INST_ENDING : S(u, r) ? this.state = C.PROC_INST_BODY : this.procInstName += r;
									continue;
								case C.PROC_INST_BODY:
									if (!this.procInstBody && S(u, r)) continue;
									"?" === r ? this.state = C.PROC_INST_ENDING : this.procInstBody += r;
									continue;
								case C.PROC_INST_ENDING:
									">" === r ? (O(this, "onprocessinginstruction", {
										name: this.procInstName,
										body: this.procInstBody
									}), this.procInstName = this.procInstBody = "", this.state = C.TEXT) : (this.procInstBody += "?" + r, this.state = C.PROC_INST_BODY);
									continue;
								case C.OPEN_TAG:
									S(v, r) ? this.tagName += r : (x(this), ">" === r ? k(this) : "/" === r ? this.state = C.OPEN_TAG_SLASH : (A(u, r) && F(this, "Invalid character in tag name"), this.state = C.ATTRIB));
									continue;
								case C.OPEN_TAG_SLASH:
									">" === r ? (k(this, !0), G(this)) : (F(this, "Forward-slash in opening tag not followed by >"), this.state = C.ATTRIB);
									continue;
								case C.ATTRIB:
									if (S(u, r)) continue;
									">" === r ? k(this) : "/" === r ? this.state = C.OPEN_TAG_SLASH : S(E, r) ? (this.attribName = r, this.attribValue = "", this.state = C.ATTRIB_NAME) : F(this, "Invalid attribute name");
									continue;
								case C.ATTRIB_NAME:
									"=" === r ? this.state = C.ATTRIB_VALUE : ">" === r ? (F(this, "Attribute without value"), this.attribValue = this.attribName, B(this), k(this)) : S(u, r) ? this.state = C.ATTRIB_NAME_SAW_WHITE : S(v, r) ? this.attribName += r : F(this, "Invalid attribute name");
									continue;
								case C.ATTRIB_NAME_SAW_WHITE:
									if ("=" === r) this.state = C.ATTRIB_VALUE;
									else {
										if (S(u, r)) continue;
										F(this, "Attribute without value"), this.tag.attributes[this.attribName] = "", this.attribValue = "", O(this, "onattribute", {
											name: this.attribName,
											value: ""
										}), this.attribName = "", ">" === r ? k(this) : S(E, r) ? (this.attribName = r, this.state = C.ATTRIB_NAME) : (F(this, "Invalid attribute name"), this.state = C.ATTRIB)
									}
									continue;
								case C.ATTRIB_VALUE:
									if (S(u, r)) continue;
									S(c, r) ? (this.q = r, this.state = C.ATTRIB_VALUE_QUOTED) : (F(this, "Unquoted attribute value"), this.state = C.ATTRIB_VALUE_UNQUOTED, this.attribValue = r);
									continue;
								case C.ATTRIB_VALUE_QUOTED:
									if (r !== this.q) {
										"&" === r ? this.state = C.ATTRIB_VALUE_ENTITY_Q : this.attribValue += r;
										continue
									}
									B(this), this.q = "", this.state = C.ATTRIB_VALUE_CLOSED;
									continue;
								case C.ATTRIB_VALUE_CLOSED:
									S(u, r) ? this.state = C.ATTRIB : ">" === r ? k(this) : "/" === r ? this.state = C.OPEN_TAG_SLASH : S(E, r) ? (F(this, "No whitespace between attributes"), this.attribName = r, this.attribValue = "", this.state = C.ATTRIB_NAME) : F(this, "Invalid attribute name");
									continue;
								case C.ATTRIB_VALUE_UNQUOTED:
									if (A(f, r)) {
										"&" === r ? this.state = C.ATTRIB_VALUE_ENTITY_U : this.attribValue += r;
										continue
									}
									B(this), ">" === r ? k(this) : this.state = C.ATTRIB;
									continue;
								case C.CLOSE_TAG:
									if (this.tagName) ">" === r ? G(this) : S(v, r) ? this.tagName += r : this.script ? (this.script += "</" + this.tagName, this.tagName = "", this.state = C.SCRIPT) : (A(u, r) && F(this, "Invalid tagname in closing tag"), this.state = C.CLOSE_TAG_SAW_WHITE);
									else {
										if (S(u, r)) continue;
										A(E, r) ? this.script ? (this.script += "</" + r, this.state = C.SCRIPT) : F(this, "Invalid tagname in closing tag.") : this.tagName = r
									}
									continue;
								case C.CLOSE_TAG_SAW_WHITE:
									if (S(u, r)) continue;
									">" === r ? G(this) : F(this, "Invalid characters in closing tag");
									continue;
								case C.TEXT_ENTITY:
								case C.ATTRIB_VALUE_ENTITY_Q:
								case C.ATTRIB_VALUE_ENTITY_U:
									var o, l;
									switch (this.state) {
										case C.TEXT_ENTITY:
											o = C.TEXT, l = "textNode";
											break;
										case C.ATTRIB_VALUE_ENTITY_Q:
											o = C.ATTRIB_VALUE_QUOTED, l = "attribValue";
											break;
										case C.ATTRIB_VALUE_ENTITY_U:
											o = C.ATTRIB_VALUE_UNQUOTED, l = "attribValue"
									}
									";" === r ? (this[l] += q(this), this.entity = "", this.state = o) : S(this.entity.length ? T : y, r) ? this.entity += r : (F(this, "Invalid character in entity name"), this[l] += "&" + this.entity + r, this.entity = "", this.state = o);
									continue;
								default:
									throw new Error(this, "Unknown state: " + this.state)
							}
							this.position >= this.bufferCheckPosition && function(e) {
								for (var n = Math.max(t.MAX_BUFFER_LENGTH, 10), r = 0, i = 0, a = s.length; i < a; i++) {
									var o = e[s[i]].length;
									if (o > n) switch (s[i]) {
										case "textNode":
											j(e);
											break;
										case "cdata":
											O(e, "oncdata", e.cdata), e.cdata = "";
											break;
										case "script":
											O(e, "onscript", e.script), e.script = "";
											break;
										default:
											P(e, "Max buffer length exceeded: " + s[i])
									}
									r = Math.max(r, o)
								}
								var u = t.MAX_BUFFER_LENGTH - r;
								e.bufferCheckPosition = u + e.position
							}(this);
							return this
						},
						resume: function() {
							return this.error = null, this
						},
						close: function() {
							return this.write(null)
						},
						flush: function() {
							var e;
							j(e = this), "" !== e.cdata && (O(e, "oncdata", e.cdata), e.cdata = ""), "" !== e.script && (O(e, "onscript", e.script), e.script = "")
						}
					};
					try {
						r = n("./node_modules/stream-browserify/index.js").Stream
					} catch (Y) {
						r = function() {}
					}
					var a = t.EVENTS.filter((function(e) {
						return "error" !== e && "end" !== e
					}));

					function o(e, t) {
						if (!(this instanceof o)) return new o(e, t);
						r.apply(this), this._parser = new i(e, t), this.writable = !0, this.readable = !0;
						var n = this;
						this._parser.onend = function() {
							n.emit("end")
						}, this._parser.onerror = function(e) {
							n.emit("error", e), n._parser.error = null
						}, this._decoder = null, a.forEach((function(e) {
							Object.defineProperty(n, "on" + e, {
								get: function() {
									return n._parser["on" + e]
								},
								set: function(t) {
									if (!t) return n.removeAllListeners(e), n._parser["on" + e] = t, t;
									n.on(e, t)
								},
								enumerable: !0,
								configurable: !1
							})
						}))
					}
					o.prototype = Object.create(r.prototype, {
						constructor: {
							value: o
						}
					}), o.prototype.write = function(t) {
						if ("function" == typeof e && "function" == typeof e.isBuffer && e.isBuffer(t)) {
							if (!this._decoder) {
								var r = n("./node_modules/node-libs-browser/node_modules/string_decoder/lib/string_decoder.js").StringDecoder;
								this._decoder = new r("utf8")
							}
							t = this._decoder.write(t)
						}
						return this._parser.write(t.toString()), this.emit("data", t), !0
					}, o.prototype.end = function(e) {
						return e && e.length && this.write(e), this._parser.end(), !0
					}, o.prototype.on = function(e, t) {
						var n = this;
						return n._parser["on" + e] || -1 === a.indexOf(e) || (n._parser["on" + e] = function() {
							var t = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
							t.splice(0, 0, e), n.emit.apply(n, t)
						}), r.prototype.on.call(n, e, t)
					};
					var u = "\r\n\t ",
						l = "0124356789",
						d = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						c = "'\"",
						f = u + ">",
						h = "[CDATA[",
						m = "DOCTYPE",
						g = "http://www.w3.org/XML/1998/namespace",
						_ = "http://www.w3.org/2000/xmlns/",
						p = {
							xml: g,
							xmlns: _
						};
					u = b(u), l = b(l), d = b(d);
					var E = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
						v = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040\.\d-]/,
						y = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
						T = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040\.\d-]/;

					function b(e) {
						return e.split("").reduce((function(e, t) {
							return e[t] = !0, e
						}), {})
					}

					function S(e, t) {
						return function(e) {
							return "[object RegExp]" === Object.prototype.toString.call(e)
						}(e) ? !!t.match(e) : e[t]
					}

					function A(e, t) {
						return !S(e, t)
					}
					c = b(c), f = b(f);
					var I, R, M, C = 0;
					for (var D in t.STATE = {
							BEGIN: C++,
							BEGIN_WHITESPACE: C++,
							TEXT: C++,
							TEXT_ENTITY: C++,
							OPEN_WAKA: C++,
							SGML_DECL: C++,
							SGML_DECL_QUOTED: C++,
							DOCTYPE: C++,
							DOCTYPE_QUOTED: C++,
							DOCTYPE_DTD: C++,
							DOCTYPE_DTD_QUOTED: C++,
							COMMENT_STARTING: C++,
							COMMENT: C++,
							COMMENT_ENDING: C++,
							COMMENT_ENDED: C++,
							CDATA: C++,
							CDATA_ENDING: C++,
							CDATA_ENDING_2: C++,
							PROC_INST: C++,
							PROC_INST_BODY: C++,
							PROC_INST_ENDING: C++,
							OPEN_TAG: C++,
							OPEN_TAG_SLASH: C++,
							ATTRIB: C++,
							ATTRIB_NAME: C++,
							ATTRIB_NAME_SAW_WHITE: C++,
							ATTRIB_VALUE: C++,
							ATTRIB_VALUE_QUOTED: C++,
							ATTRIB_VALUE_CLOSED: C++,
							ATTRIB_VALUE_UNQUOTED: C++,
							ATTRIB_VALUE_ENTITY_Q: C++,
							ATTRIB_VALUE_ENTITY_U: C++,
							CLOSE_TAG: C++,
							CLOSE_TAG_SAW_WHITE: C++,
							SCRIPT: C++,
							SCRIPT_ENDING: C++
						}, t.XML_ENTITIES = {
							amp: "&",
							gt: ">",
							lt: "<",
							quot: '"',
							apos: "'"
						}, t.ENTITIES = {
							amp: "&",
							gt: ">",
							lt: "<",
							quot: '"',
							apos: "'",
							AElig: 198,
							Aacute: 193,
							Acirc: 194,
							Agrave: 192,
							Aring: 197,
							Atilde: 195,
							Auml: 196,
							Ccedil: 199,
							ETH: 208,
							Eacute: 201,
							Ecirc: 202,
							Egrave: 200,
							Euml: 203,
							Iacute: 205,
							Icirc: 206,
							Igrave: 204,
							Iuml: 207,
							Ntilde: 209,
							Oacute: 211,
							Ocirc: 212,
							Ograve: 210,
							Oslash: 216,
							Otilde: 213,
							Ouml: 214,
							THORN: 222,
							Uacute: 218,
							Ucirc: 219,
							Ugrave: 217,
							Uuml: 220,
							Yacute: 221,
							aacute: 225,
							acirc: 226,
							aelig: 230,
							agrave: 224,
							aring: 229,
							atilde: 227,
							auml: 228,
							ccedil: 231,
							eacute: 233,
							ecirc: 234,
							egrave: 232,
							eth: 240,
							euml: 235,
							iacute: 237,
							icirc: 238,
							igrave: 236,
							iuml: 239,
							ntilde: 241,
							oacute: 243,
							ocirc: 244,
							ograve: 242,
							oslash: 248,
							otilde: 245,
							ouml: 246,
							szlig: 223,
							thorn: 254,
							uacute: 250,
							ucirc: 251,
							ugrave: 249,
							uuml: 252,
							yacute: 253,
							yuml: 255,
							copy: 169,
							reg: 174,
							nbsp: 160,
							iexcl: 161,
							cent: 162,
							pound: 163,
							curren: 164,
							yen: 165,
							brvbar: 166,
							sect: 167,
							uml: 168,
							ordf: 170,
							laquo: 171,
							not: 172,
							shy: 173,
							macr: 175,
							deg: 176,
							plusmn: 177,
							sup1: 185,
							sup2: 178,
							sup3: 179,
							acute: 180,
							micro: 181,
							para: 182,
							middot: 183,
							cedil: 184,
							ordm: 186,
							raquo: 187,
							frac14: 188,
							frac12: 189,
							frac34: 190,
							iquest: 191,
							times: 215,
							divide: 247,
							OElig: 338,
							oelig: 339,
							Scaron: 352,
							scaron: 353,
							Yuml: 376,
							fnof: 402,
							circ: 710,
							tilde: 732,
							Alpha: 913,
							Beta: 914,
							Gamma: 915,
							Delta: 916,
							Epsilon: 917,
							Zeta: 918,
							Eta: 919,
							Theta: 920,
							Iota: 921,
							Kappa: 922,
							Lambda: 923,
							Mu: 924,
							Nu: 925,
							Xi: 926,
							Omicron: 927,
							Pi: 928,
							Rho: 929,
							Sigma: 931,
							Tau: 932,
							Upsilon: 933,
							Phi: 934,
							Chi: 935,
							Psi: 936,
							Omega: 937,
							alpha: 945,
							beta: 946,
							gamma: 947,
							delta: 948,
							epsilon: 949,
							zeta: 950,
							eta: 951,
							theta: 952,
							iota: 953,
							kappa: 954,
							lambda: 955,
							mu: 956,
							nu: 957,
							xi: 958,
							omicron: 959,
							pi: 960,
							rho: 961,
							sigmaf: 962,
							sigma: 963,
							tau: 964,
							upsilon: 965,
							phi: 966,
							chi: 967,
							psi: 968,
							omega: 969,
							thetasym: 977,
							upsih: 978,
							piv: 982,
							ensp: 8194,
							emsp: 8195,
							thinsp: 8201,
							zwnj: 8204,
							zwj: 8205,
							lrm: 8206,
							rlm: 8207,
							ndash: 8211,
							mdash: 8212,
							lsquo: 8216,
							rsquo: 8217,
							sbquo: 8218,
							ldquo: 8220,
							rdquo: 8221,
							bdquo: 8222,
							dagger: 8224,
							Dagger: 8225,
							bull: 8226,
							hellip: 8230,
							permil: 8240,
							prime: 8242,
							Prime: 8243,
							lsaquo: 8249,
							rsaquo: 8250,
							oline: 8254,
							frasl: 8260,
							euro: 8364,
							image: 8465,
							weierp: 8472,
							real: 8476,
							trade: 8482,
							alefsym: 8501,
							larr: 8592,
							uarr: 8593,
							rarr: 8594,
							darr: 8595,
							harr: 8596,
							crarr: 8629,
							lArr: 8656,
							uArr: 8657,
							rArr: 8658,
							dArr: 8659,
							hArr: 8660,
							forall: 8704,
							part: 8706,
							exist: 8707,
							empty: 8709,
							nabla: 8711,
							isin: 8712,
							notin: 8713,
							ni: 8715,
							prod: 8719,
							sum: 8721,
							minus: 8722,
							lowast: 8727,
							radic: 8730,
							prop: 8733,
							infin: 8734,
							ang: 8736,
							and: 8743,
							or: 8744,
							cap: 8745,
							cup: 8746,
							int: 8747,
							there4: 8756,
							sim: 8764,
							cong: 8773,
							asymp: 8776,
							ne: 8800,
							equiv: 8801,
							le: 8804,
							ge: 8805,
							sub: 8834,
							sup: 8835,
							nsub: 8836,
							sube: 8838,
							supe: 8839,
							oplus: 8853,
							otimes: 8855,
							perp: 8869,
							sdot: 8901,
							lceil: 8968,
							rceil: 8969,
							lfloor: 8970,
							rfloor: 8971,
							lang: 9001,
							rang: 9002,
							loz: 9674,
							spades: 9824,
							clubs: 9827,
							hearts: 9829,
							diams: 9830
						}, Object.keys(t.ENTITIES).forEach((function(e) {
							var n = t.ENTITIES[e],
								r = "number" == typeof n ? String.fromCharCode(n) : n;
							t.ENTITIES[e] = r
						})), t.STATE) t.STATE[t.STATE[D]] = D;

					function N(e, t, n) {
						e[t] && e[t](n)
					}

					function O(e, t, n) {
						e.textNode && j(e), N(e, t, n)
					}

					function j(e) {
						e.textNode = w(e.opt, e.textNode), e.textNode && N(e, "ontext", e.textNode), e.textNode = ""
					}

					function w(e, t) {
						return e.trim && (t = t.trim()), e.normalize && (t = t.replace(/\s+/g, " ")), t
					}

					function P(e, t) {
						return j(e), e.trackPosition && (t += "\nLine: " + e.line + "\nColumn: " + e.column + "\nChar: " + e.c), t = new Error(t), e.error = t, N(e, "onerror", t), e
					}

					function L(e) {
						return e.sawRoot && !e.closedRoot && F(e, "Unclosed root tag"), e.state !== C.BEGIN && e.state !== C.BEGIN_WHITESPACE && e.state !== C.TEXT && P(e, "Unexpected end"), j(e), e.c = "", e.closed = !0, N(e, "onend"), i.call(e, e.strict, e.opt), e
					}

					function F(e, t) {
						if ("object" != typeof e || !(e instanceof i)) throw new Error("bad call to strictFail");
						e.strict && P(e, t)
					}

					function x(e) {
						e.strict || (e.tagName = e.tagName[e.looseCase]());
						var t = e.tags[e.tags.length - 1] || e,
							n = e.tag = {
								name: e.tagName,
								attributes: {}
							};
						e.opt.xmlns && (n.ns = t.ns), e.attribList.length = 0, O(e, "onopentagstart", n)
					}

					function U(e, t) {
						var n = e.indexOf(":") < 0 ? ["", e] : e.split(":"),
							r = n[0],
							s = n[1];
						return t && "xmlns" === e && (r = "xmlns", s = ""), {
							prefix: r,
							local: s
						}
					}

					function B(e) {
						if (e.strict || (e.attribName = e.attribName[e.looseCase]()), -1 !== e.attribList.indexOf(e.attribName) || e.tag.attributes.hasOwnProperty(e.attribName)) e.attribName = e.attribValue = "";
						else {
							if (e.opt.xmlns) {
								var t = U(e.attribName, !0),
									n = t.prefix,
									r = t.local;
								if ("xmlns" === n)
									if ("xml" === r && e.attribValue !== g) F(e, "xml: prefix must be bound to " + g + "\nActual: " + e.attribValue);
									else if ("xmlns" === r && e.attribValue !== _) F(e, "xmlns: prefix must be bound to " + _ + "\nActual: " + e.attribValue);
								else {
									var s = e.tag,
										i = e.tags[e.tags.length - 1] || e;
									s.ns === i.ns && (s.ns = Object.create(i.ns)), s.ns[r] = e.attribValue
								}
								e.attribList.push([e.attribName, e.attribValue])
							} else e.tag.attributes[e.attribName] = e.attribValue, O(e, "onattribute", {
								name: e.attribName,
								value: e.attribValue
							});
							e.attribName = e.attribValue = ""
						}
					}

					function k(e, t) {
						if (e.opt.xmlns) {
							var n = e.tag,
								r = U(e.tagName);
							n.prefix = r.prefix, n.local = r.local, n.uri = n.ns[r.prefix] || "", n.prefix && !n.uri && (F(e, "Unbound namespace prefix: " + JSON.stringify(e.tagName)), n.uri = r.prefix);
							var s = e.tags[e.tags.length - 1] || e;
							n.ns && s.ns !== n.ns && Object.keys(n.ns).forEach((function(t) {
								O(e, "onopennamespace", {
									prefix: t,
									uri: n.ns[t]
								})
							}));
							for (var i = 0, a = e.attribList.length; i < a; i++) {
								var o = e.attribList[i],
									u = o[0],
									l = o[1],
									d = U(u, !0),
									c = d.prefix,
									f = d.local,
									h = "" === c ? "" : n.ns[c] || "",
									m = {
										name: u,
										value: l,
										prefix: c,
										local: f,
										uri: h
									};
								c && "xmlns" !== c && !h && (F(e, "Unbound namespace prefix: " + JSON.stringify(c)), m.uri = c), e.tag.attributes[u] = m, O(e, "onattribute", m)
							}
							e.attribList.length = 0
						}
						e.tag.isSelfClosing = !!t, e.sawRoot = !0, e.tags.push(e.tag), O(e, "onopentag", e.tag), t || (e.noscript || "script" !== e.tagName.toLowerCase() ? e.state = C.TEXT : e.state = C.SCRIPT, e.tag = null, e.tagName = ""), e.attribName = e.attribValue = "", e.attribList.length = 0
					}

					function G(e) {
						if (!e.tagName) return F(e, "Weird empty close tag."), e.textNode += "</>", void(e.state = C.TEXT);
						if (e.script) {
							if ("script" !== e.tagName) return e.script += "</" + e.tagName + ">", e.tagName = "", void(e.state = C.SCRIPT);
							O(e, "onscript", e.script), e.script = ""
						}
						var t = e.tags.length,
							n = e.tagName;
						e.strict || (n = n[e.looseCase]());
						for (var r = n; t--;) {
							if (e.tags[t].name === r) break;
							F(e, "Unexpected close tag")
						}
						if (t < 0) return F(e, "Unmatched closing tag: " + e.tagName), e.textNode += "</" + e.tagName + ">", void(e.state = C.TEXT);
						e.tagName = n;
						for (var s = e.tags.length; s-- > t;) {
							var i = e.tag = e.tags.pop();
							e.tagName = e.tag.name, O(e, "onclosetag", e.tagName);
							var a = {};
							for (var o in i.ns) a[o] = i.ns[o];
							var u = e.tags[e.tags.length - 1] || e;
							e.opt.xmlns && i.ns !== u.ns && Object.keys(i.ns).forEach((function(t) {
								var n = i.ns[t];
								O(e, "onclosenamespace", {
									prefix: t,
									uri: n
								})
							}))
						}
						0 === t && (e.closedRoot = !0), e.tagName = e.attribValue = e.attribName = "", e.attribList.length = 0, e.state = C.TEXT
					}

					function q(e) {
						var t, n = e.entity,
							r = n.toLowerCase(),
							s = "";
						return e.ENTITIES[n] ? e.ENTITIES[n] : e.ENTITIES[r] ? e.ENTITIES[r] : ("#" === (n = r).charAt(0) && ("x" === n.charAt(1) ? (n = n.slice(2), s = (t = parseInt(n, 16)).toString(16)) : (n = n.slice(1), s = (t = parseInt(n, 10)).toString(10))), n = n.replace(/^0+/, ""), s.toLowerCase() !== n ? (F(e, "Invalid character entity"), "&" + e.entity + ";") : String.fromCodePoint(t))
					}

					function H(e, t) {
						"<" === t ? (e.state = C.OPEN_WAKA, e.startTagPosition = e.position) : A(u, t) && (F(e, "Non-whitespace before first tag."), e.textNode = t, e.state = C.TEXT)
					}

					function K(e, t) {
						var n = "";
						return t < e.length && (n = e.charAt(t)), n
					}
					C = t.STATE, String.fromCodePoint || (I = String.fromCharCode, R = Math.floor, M = function() {
						var e, t, n = 16384,
							r = [],
							s = -1,
							i = arguments.length;
						if (!i) return "";
						for (var a = ""; ++s < i;) {
							var o = Number(arguments[s]);
							if (!isFinite(o) || o < 0 || o > 1114111 || R(o) !== o) throw RangeError("Invalid code point: " + o);
							o <= 65535 ? r.push(o) : (e = 55296 + ((o -= 65536) >> 10), t = o % 1024 + 56320, r.push(e, t)), (s + 1 === i || r.length > n) && (a += I.apply(null, r), r.length = 0)
						}
						return a
					}, Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
						value: M,
						configurable: !0,
						writable: !0
					}) : String.fromCodePoint = M)
				}(t)
			}).call(this, n("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer)
		},
		"./node_modules/imsc/src/main/js/doc.js": function(e, t, n) {
			! function(e, t, n, r, s) {
				function i(e, t, n, r) {
					var s = r && "seq" === r.timeContainer,
						a = 0;
					r && (a = s && n ? n.end : r.begin), t.begin = t.explicit_begin ? t.explicit_begin + a : a;
					var o = t.begin,
						u = null;
					for (var l in t.sets) i(e, t.sets[l], u, t), o = "seq" === t.timeContainer ? t.sets[l].end : Math.max(o, t.sets[l].end), u = t.sets[l];
					if ("contents" in t)
						for (var d in t.contents) i(e, t.contents[d], u, t), o = "seq" === t.timeContainer ? t.contents[d].end : Math.max(o, t.contents[d].end), u = t.contents[d];
					else o = s ? t.begin : Number.POSITIVE_INFINITY;
					null !== t.explicit_end && null !== t.explicit_dur ? t.end = Math.min(t.begin + t.explicit_dur, a + t.explicit_end) : null === t.explicit_end && null !== t.explicit_dur ? t.end = t.begin + t.explicit_dur : null !== t.explicit_end && null === t.explicit_dur ? t.end = a + t.explicit_end : t.end = o, delete t.explicit_begin, delete t.explicit_dur, delete t.explicit_end, e._registerEvent(t)
				}

				function a(e) {
					this.node = e
				}

				function o() {
					this.events = [], this.head = new u, this.body = null
				}

				function u() {
					this.styling = new l, this.layout = new f
				}

				function l() {
					this.styles = {}, this.initials = {}
				}

				function d() {
					this.id = null, this.styleAttrs = null, this.styleRefs = null
				}

				function c() {
					this.styleAttrs = null
				}

				function f() {
					this.regions = {}
				}

				function h(e, t) {
					m.call(this, "image"), this.src = e, this.type = t
				}

				function m(e) {
					this.kind = e
				}

				function g(e) {
					this.id = e
				}

				function _(e) {
					this.regionID = e
				}

				function p(e) {
					this.styleAttrs = e
				}

				function E(e) {
					this.sets = e
				}

				function v(e) {
					this.contents = e
				}

				function y(e, t, n) {
					this.explicit_begin = e, this.explicit_end = t, this.explicit_dur = n
				}

				function T() {
					m.call(this, "body")
				}

				function b() {
					m.call(this, "div")
				}

				function S() {
					m.call(this, "p")
				}

				function A() {
					m.call(this, "span")
				}

				function I() {
					m.call(this, "span")
				}

				function R() {
					m.call(this, "br")
				}

				function M() {}

				function C() {}

				function D(e) {
					return e && "xml:id" in e.attributes && e.attributes["xml:id"].value || null
				}

				function N(e) {
					return e && "style" in e.attributes ? e.attributes.style.value.split(" ") : []
				}

				function O(e, t) {
					var n = {};
					if (null !== e)
						for (var s in e.attributes) {
							var i = e.attributes[s].uri + " " + e.attributes[s].local,
								a = r.byQName[i];
							if (void 0 !== a) {
								var o = a.parse(e.attributes[s].value);
								null !== o ? (n[i] = o, a === r.byName.zIndex && x(t, "zIndex attribute present but not used by IMSC1 since regions do not overlap")) : U(t, "Cannot parse styling attribute " + i + " --\x3e " + e.attributes[s].value)
							}
						}
					return n
				}

				function j(e, t, n) {
					for (var r in e.attributes)
						if (e.attributes[r].uri === t && e.attributes[r].local === n) return e.attributes[r].value;
					return null
				}

				function w(e, t, n) {
					var r, s = null;
					return null !== (r = /^(\d+(?:\.\d+)?)f$/.exec(n)) ? null !== t && (s = parseFloat(r[1]) / t) : null !== (r = /^(\d+(?:\.\d+)?)t$/.exec(n)) ? null !== e && (s = parseFloat(r[1]) / e) : null !== (r = /^(\d+(?:\.\d+)?)ms$/.exec(n)) ? s = parseFloat(r[1]) / 1e3 : null !== (r = /^(\d+(?:\.\d+)?)s$/.exec(n)) ? s = parseFloat(r[1]) : null !== (r = /^(\d+(?:\.\d+)?)h$/.exec(n)) ? s = 3600 * parseFloat(r[1]) : null !== (r = /^(\d+(?:\.\d+)?)m$/.exec(n)) ? s = 60 * parseFloat(r[1]) : null !== (r = /^(\d{2,}):(\d\d):(\d\d(?:\.\d+)?)$/.exec(n)) ? s = 3600 * parseInt(r[1]) + 60 * parseInt(r[2]) + parseFloat(r[3]) : null !== (r = /^(\d{2,}):(\d\d):(\d\d)\:(\d{2,})$/.exec(n)) && null !== t && (s = 3600 * parseInt(r[1]) + 60 * parseInt(r[2]) + parseInt(r[3]) + (null === r[4] ? 0 : parseInt(r[4]) / t)), s
				}

				function P(e, t, n) {
					for (; t.styleRefs.length > 0;) {
						var r = t.styleRefs.pop();
						r in e.styles ? (P(e, e.styles[r], n), F(e.styles[r].styleAttrs, t.styleAttrs)) : U(n, "Non-existant style id referenced")
					}
				}

				function L(e, t, n, r) {
					for (var s = t.length - 1; s >= 0; s--) {
						var i = t[s];
						i in e.styles ? F(e.styles[i].styleAttrs, n) : U(r, "Non-existant style id referenced")
					}
				}

				function F(e, t) {
					for (var n in e) n in t || (t[n] = e[n])
				}

				function x(e, t) {
					if (e && e.warn && e.warn(t)) throw t
				}

				function U(e, t) {
					if (e && e.error && e.error(t)) throw t
				}

				function B(e, t) {
					throw e && e.fatal && e.fatal(t), t
				}

				function k(e, t) {
					for (var n, r = 0, s = e.length - 1; r <= s;) {
						var i = e[n = Math.floor((r + s) / 2)];
						if (i < t) r = n + 1;
						else {
							if (!(i > t)) return {
								found: !0,
								index: n
							};
							s = n - 1
						}
					}
					return {
						found: !1,
						index: r
					}
				}
				e.fromXML = function(e, s, m) {
					var g = t.parser(!0, {
							xmlns: !0
						}),
						_ = [],
						p = [],
						E = [],
						v = 0,
						y = null;
					g.onclosetag = function(e) {
						if (_[0] instanceof l)
							for (var t in _[0].styles) P(_[0], _[0].styles[t], s);
						else if (_[0] instanceof S || _[0] instanceof A) {
							if (_[0].contents.length > 1) {
								var r, i = [_[0].contents[0]];
								for (r = 1; r < _[0].contents.length; r++) _[0].contents[r] instanceof I && i[i.length - 1] instanceof I ? i[i.length - 1].text += _[0].contents[r].text : i.push(_[0].contents[r]);
								_[0].contents = i
							}
							_[0] instanceof A && 1 === _[0].contents.length && _[0].contents[0] instanceof I && (_[0].text = _[0].contents[0].text, delete _[0].contents)
						} else _[0] instanceof a && (_[0].node.uri === n.ns_tt && "metadata" === _[0].node.local ? v-- : v > 0 && m && "onCloseTag" in m && m.onCloseTag());
						E.shift(), p.shift(), _.shift()
					}, g.ontext = function(e) {
						if (void 0 === _[0]);
						else if (_[0] instanceof A || _[0] instanceof S) {
							if (_[0] instanceof A) {
								var t = _[0].styleAttrs[r.byName.ruby.qname];
								if ("container" === t || "textContainer" === t || "baseContainer" === t) return
							}
							var n = new I;
							n.initFromText(y, _[0], e, E[0], s), _[0].contents.push(n)
						} else _[0] instanceof a && v > 0 && m && "onText" in m && m.onText(e)
					}, g.onopentag = function(e) {
						var t = e.attributes["xml:space"];
						t ? E.unshift(t.value) : 0 === E.length ? E.unshift("default") : E.unshift(E[0]);
						var i = e.attributes["xml:lang"];
						if (i ? p.unshift(i.value) : 0 === p.length ? p.unshift("") : p.unshift(p[0]), e.uri === n.ns_tt)
							if ("tt" === e.local) null !== y && B(s, "Two <tt> elements at (" + this.line + "," + this.column + ")"), (y = new o).initFromNode(e, s), _.unshift(y);
							else if ("head" === e.local) _[0] instanceof o || B(s, "Parent of <head> element is not <tt> at (" + this.line + "," + this.column + ")"), _.unshift(y.head);
						else if ("styling" === e.local) _[0] instanceof u || B(s, "Parent of <styling> element is not <head> at (" + this.line + "," + this.column + ")"), _.unshift(y.head.styling);
						else if ("style" === e.local) {
							var g;
							_[0] instanceof l ? ((g = new d).initFromNode(e, s), g.id ? y.head.styling.styles[g.id] = g : U(s, "<style> element missing @id attribute"), _.unshift(g)) : _[0] instanceof M ? ((g = new d).initFromNode(e, s), F(g.styleAttrs, _[0].styleAttrs), _.unshift(g)) : B(s, "Parent of <style> element is not <styling> or <region> at (" + this.line + "," + this.column + ")")
						} else if ("initial" === e.local) {
							var I;
							if (_[0] instanceof l) {
								for (var D in (I = new c).initFromNode(e, s), I.styleAttrs) y.head.styling.initials[D] = I.styleAttrs[D];
								_.unshift(I)
							} else B(s, "Parent of <initial> element is not <styling> at (" + this.line + "," + this.column + ")")
						} else if ("layout" === e.local) _[0] instanceof u || B(s, "Parent of <layout> element is not <head> at " + this.line + "," + this.column + ")"), _.unshift(y.head.layout);
						else if ("region" === e.local) {
							_[0] instanceof f || B(s, "Parent of <region> element is not <layout> at " + this.line + "," + this.column + ")");
							var N = new M;
							N.initFromNode(y, e, s), !N.id || N.id in y.head.layout.regions ? U(s, "Ignoring <region> with duplicate or missing @id at " + this.line + "," + this.column + ")") : y.head.layout.regions[N.id] = N, _.unshift(N)
						} else if ("body" === e.local) {
							_[0] instanceof o || B(s, "Parent of <body> element is not <tt> at " + this.line + "," + this.column + ")"), null !== y.body && B(s, "Second <body> element at " + this.line + "," + this.column + ")");
							var O = new T;
							O.initFromNode(y, e, s), y.body = O, _.unshift(O)
						} else if ("div" === e.local) {
							_[0] instanceof b || _[0] instanceof T || B(s, "Parent of <div> element is not <body> or <div> at " + this.line + "," + this.column + ")");
							var j = new b;
							j.initFromNode(y, _[0], e, s);
							var w = j.styleAttrs[r.byName.backgroundImage.qname];
							w && (j.contents.push(new h(w)), delete j.styleAttrs[r.byName.backgroundImage.qname]), _[0].contents.push(j), _.unshift(j)
						} else if ("image" === e.local) {
							_[0] instanceof b || B(s, "Parent of <image> element is not <div> at " + this.line + "," + this.column + ")");
							var P = new h;
							P.initFromNode(y, _[0], e, s), _[0].contents.push(P), _.unshift(P)
						} else if ("p" === e.local) {
							_[0] instanceof b || B(s, "Parent of <p> element is not <div> at " + this.line + "," + this.column + ")");
							var L = new S;
							L.initFromNode(y, _[0], e, s), _[0].contents.push(L), _.unshift(L)
						} else if ("span" === e.local) {
							_[0] instanceof A || _[0] instanceof S || B(s, "Parent of <span> element is not <span> or <p> at " + this.line + "," + this.column + ")");
							var x = new A;
							x.initFromNode(y, _[0], e, E[0], s), _[0].contents.push(x), _.unshift(x)
						} else if ("br" === e.local) {
							_[0] instanceof A || _[0] instanceof S || B(s, "Parent of <br> element is not <span> or <p> at " + this.line + "," + this.column + ")");
							var k = new R;
							k.initFromNode(y, _[0], e, s), _[0].contents.push(k), _.unshift(k)
						} else if ("set" === e.local) {
							_[0] instanceof A || _[0] instanceof S || _[0] instanceof b || _[0] instanceof T || _[0] instanceof M || _[0] instanceof R || B(s, "Parent of <set> element is not a content element or a region at " + this.line + "," + this.column + ")");
							var G = new C;
							G.initFromNode(y, _[0], e, s), _[0].sets.push(G), _.unshift(G)
						} else _.unshift(new a(e));
						else _.unshift(new a(e));
						if (_[0] instanceof a)
							if (e.uri === n.ns_tt && "metadata" === e.local) v++;
							else if (v > 0 && m && "onOpenTag" in m) {
							var q = [];
							for (var H in e.attributes) q[e.attributes[H].uri + " " + e.attributes[H].local] = {
								uri: e.attributes[H].uri,
								local: e.attributes[H].local,
								value: e.attributes[H].value
							};
							m.onOpenTag(e.uri, e.local, q)
						}
					}, g.write(e).close(), delete y.head.styling.styles;
					var D = !1;
					for (var N in y.head.layout.regions) {
						D = !0;
						break
					}
					if (!D) {
						var O = M.prototype.createDefaultRegion();
						y.head.layout.regions[O.id] = O
					}
					for (var j in y.head.layout.regions) i(y, y.head.layout.regions[j], null, null);
					return y.body && i(y, y.body, null, null), y.body && function e(t) {
						if (!("contents" in t)) return;
						var n = "styleAttrs" in t ? t.styleAttrs[r.byName.ruby.qname] : null;
						var s = "span" === t.kind && ("container" === n || "textContainer" === n || "baseContainer" === n);
						for (var i = t.contents.length - 1; i >= 0; i--) !s || "styleAttrs" in t.contents[i] && r.byName.ruby.qname in t.contents[i].styleAttrs ? e(t.contents[i]) : delete t.contents[i]
					}(y.body), y
				}, o.prototype.initFromNode = function(e, t) {
					var r = function(e, t) {
						var r = j(e, n.ns_ttp, "cellResolution"),
							s = 15,
							i = 32;
						if (null !== r) {
							var a = /(\d+) (\d+)/.exec(r);
							null !== a ? (i = parseInt(a[1]), s = parseInt(a[2])) : x(t, "Malformed cellResolution value (using initial value instead)")
						}
						return {
							w: i,
							h: s
						}
					}(e, t);
					this.cellLength = {
						h: new s.ComputedLength(0, 1 / r.h),
						w: new s.ComputedLength(1 / r.w, 0)
					};
					var i = function(e, t) {
						var r, s = j(e, n.ns_ttp, "frameRate"),
							i = 30;
						if (null !== s) {
							null !== (r = /(\d+)/.exec(s)) ? i = parseInt(r[1]) : x(t, "Malformed frame rate attribute (using initial value instead)")
						}
						var a = j(e, n.ns_ttp, "frameRateMultiplier"),
							o = 1;
						if (null !== a) {
							null !== (r = /(\d+) (\d+)/.exec(a)) ? o = parseInt(r[1]) / parseInt(r[2]) : x(t, "Malformed frame rate multiplier attribute (using initial value instead)")
						}
						var u = o * i,
							l = 1,
							d = j(e, n.ns_ttp, "tickRate");
						if (null === d) null !== s && (l = u);
						else {
							null !== (r = /(\d+)/.exec(d)) ? l = parseInt(r[1]) : x(t, "Malformed tick rate attribute (using initial value instead)")
						}
						return {
							effectiveFrameRate: u,
							tickRate: l
						}
					}(e, t);
					this.effectiveFrameRate = i.effectiveFrameRate, this.tickRate = i.tickRate, this.aspectRatio = function(e, t) {
						var r = j(e, n.ns_ittp, "aspectRatio");
						null === r && (r = j(e, n.ns_ttp, "displayAspectRatio"));
						var s = null;
						if (null !== r) {
							var i = /(\d+)\s+(\d+)/.exec(r);
							if (null !== i) {
								var a = parseInt(i[1]),
									o = parseInt(i[2]);
								0 !== a && 0 !== o ? s = a / o : U(t, "Illegal aspectRatio values (ignoring)")
							} else U(t, "Malformed aspectRatio attribute (ignoring)")
						}
						return s
					}(e, t);
					var a = j(e, n.ns_ttp, "timeBase");
					null !== a && "media" !== a && B(t, "Unsupported time base");
					var o = function(e, t) {
						var r = j(e, n.ns_tts, "extent");
						if (null === r) return null;
						var i = r.split(" ");
						if (2 !== i.length) return x(t, "Malformed extent (ignoring)"), null;
						var a = s.parseLength(i[0]),
							o = s.parseLength(i[1]);
						if (!o || !a) return x(t, "Malformed extent values (ignoring)"), null;
						return {
							h: o,
							w: a
						}
					}(e, t);
					null === o ? this.pxLength = {
						h: null,
						w: null
					} : ("px" === o.h.unit && "px" === o.w.unit || B(t, "Extent on TT must be in px or absent"), this.pxLength = {
						h: new s.ComputedLength(0, 1 / o.h.value),
						w: new s.ComputedLength(1 / o.w.value, 0)
					}), this.dimensions = {
						h: new s.ComputedLength(0, 1),
						w: new s.ComputedLength(1, 0)
					}
				}, o.prototype._registerEvent = function(e) {
					if (!(e.end <= e.begin)) {
						var t = k(this.events, e.begin);
						if (t.found || this.events.splice(t.index, 0, e.begin), e.end !== Number.POSITIVE_INFINITY) {
							var n = k(this.events, e.end);
							n.found || this.events.splice(n.index, 0, e.end)
						}
					}
				}, o.prototype.getMediaTimeRange = function() {
					return [this.events[0], this.events[this.events.length - 1]]
				}, o.prototype.getMediaTimeEvents = function() {
					return this.events
				}, d.prototype.initFromNode = function(e, t) {
					this.id = D(e), this.styleAttrs = O(e, t), this.styleRefs = N(e)
				}, c.prototype.initFromNode = function(e, t) {
					for (var r in this.styleAttrs = {}, e.attributes)
						if (e.attributes[r].uri === n.ns_itts || e.attributes[r].uri === n.ns_ebutts || e.attributes[r].uri === n.ns_tts) {
							var s = e.attributes[r].uri + " " + e.attributes[r].local;
							this.styleAttrs[s] = e.attributes[r].value
						}
				}, h.prototype.initFromNode = function(e, t, n, r) {
					this.src = "src" in n.attributes ? n.attributes.src.value : null, this.src || U(r, "Invalid image@src attribute"), this.type = "type" in n.attributes ? n.attributes.type.value : null, this.type || U(r, "Invalid image@type attribute"), p.prototype.initFromNode.call(this, e, t, n, r), y.prototype.initFromNode.call(this, e, t, n, r), E.prototype.initFromNode.call(this, e, t, n, r), _.prototype.initFromNode.call(this, e, t, n, r)
				}, g.prototype.initFromNode = function(e, t, n, r) {
					this.id = D(n)
				}, _.prototype.initFromNode = function(e, t, n, r) {
					this.regionID = function(e) {
						return e && "region" in e.attributes ? e.attributes.region.value : ""
					}(n)
				}, p.prototype.initFromNode = function(e, t, n, r) {
					this.styleAttrs = O(n, r), null !== e.head && null !== e.head.styling && L(e.head.styling, N(n), this.styleAttrs, r)
				}, E.prototype.initFromNode = function(e, t, n, r) {
					this.sets = []
				}, v.prototype.initFromNode = function(e, t, n, r) {
					this.contents = []
				}, y.prototype.initFromNode = function(e, t, n, r) {
					var s = function(e, t, n, r) {
						var s = null;
						n && "begin" in n.attributes && null === (s = w(e.tickRate, e.effectiveFrameRate, n.attributes.begin.value)) && x(r, "Malformed begin value " + n.attributes.begin.value + " (using 0)");
						var i = null;
						n && "dur" in n.attributes && null === (i = w(e.tickRate, e.effectiveFrameRate, n.attributes.dur.value)) && x(r, "Malformed dur value " + n.attributes.dur.value + " (ignoring)");
						var a = null;
						n && "end" in n.attributes && null === (a = w(e.tickRate, e.effectiveFrameRate, n.attributes.end.value)) && x(r, "Malformed end value (ignoring)");
						return {
							explicit_begin: s,
							explicit_end: a,
							explicit_dur: i
						}
					}(e, 0, n, r);
					this.explicit_begin = s.explicit_begin, this.explicit_end = s.explicit_end, this.explicit_dur = s.explicit_dur, this.timeContainer = function(e, t) {
						var n = e && "timeContainer" in e.attributes ? e.attributes.timeContainer.value : null;
						return n && "par" !== n ? "seq" === n ? "seq" : (U(t, "Illegal value of timeContainer (assuming 'par')"), "par") : "par"
					}(n, r)
				}, T.prototype.initFromNode = function(e, t, n) {
					p.prototype.initFromNode.call(this, e, null, t, n), y.prototype.initFromNode.call(this, e, null, t, n), E.prototype.initFromNode.call(this, e, null, t, n), _.prototype.initFromNode.call(this, e, null, t, n), v.prototype.initFromNode.call(this, e, null, t, n)
				}, b.prototype.initFromNode = function(e, t, n, r) {
					p.prototype.initFromNode.call(this, e, t, n, r), y.prototype.initFromNode.call(this, e, t, n, r), E.prototype.initFromNode.call(this, e, t, n, r), _.prototype.initFromNode.call(this, e, t, n, r), v.prototype.initFromNode.call(this, e, t, n, r)
				}, S.prototype.initFromNode = function(e, t, n, r) {
					p.prototype.initFromNode.call(this, e, t, n, r), y.prototype.initFromNode.call(this, e, t, n, r), E.prototype.initFromNode.call(this, e, t, n, r), _.prototype.initFromNode.call(this, e, t, n, r), v.prototype.initFromNode.call(this, e, t, n, r)
				}, A.prototype.initFromNode = function(e, t, n, r, s) {
					p.prototype.initFromNode.call(this, e, t, n, s), y.prototype.initFromNode.call(this, e, t, n, s), E.prototype.initFromNode.call(this, e, t, n, s), _.prototype.initFromNode.call(this, e, t, n, s), v.prototype.initFromNode.call(this, e, t, n, s), this.space = r
				}, I.prototype.initFromText = function(e, t, n, r, s) {
					y.prototype.initFromNode.call(this, e, t, null, s), this.text = n, this.space = r
				}, R.prototype.initFromNode = function(e, t, n, r) {
					_.prototype.initFromNode.call(this, e, t, n, r), y.prototype.initFromNode.call(this, e, t, n, r)
				}, M.prototype.createDefaultRegion = function() {
					var e = new M;
					return g.call(e, ""), p.call(e, {}), E.call(e, []), y.call(e, 0, Number.POSITIVE_INFINITY, null), e
				}, M.prototype.initFromNode = function(e, t, n) {
					g.prototype.initFromNode.call(this, e, null, t, n), p.prototype.initFromNode.call(this, e, null, t, n), y.prototype.initFromNode.call(this, e, null, t, n), E.prototype.initFromNode.call(this, e, null, t, n), null !== e.head && null !== e.head.styling && L(e.head.styling, N(t), this.styleAttrs, n)
				}, C.prototype.initFromNode = function(e, t, n, r) {
					y.prototype.initFromNode.call(this, e, t, n, r);
					var s = O(n, r);
					for (var i in this.qname = null, this.value = null, s) {
						if (this.qname) {
							U(r, "More than one style specified on set");
							break
						}
						this.qname = i, this.value = s[i]
					}
				}
			}(t, "undefined" == typeof sax ? n("./node_modules/imsc/node_modules/sax/lib/sax.js") : sax, "undefined" == typeof imscNames ? n("./node_modules/imsc/src/main/js/names.js") : imscNames, "undefined" == typeof imscStyles ? n("./node_modules/imsc/src/main/js/styles.js") : imscStyles, "undefined" == typeof imscUtils ? n("./node_modules/imsc/src/main/js/utils.js") : imscUtils)
		},
		"./node_modules/imsc/src/main/js/html.js": function(e, t, n) {
			! function(e, t, n) {
				function r(e, t, o) {
					var l;
					if ("region" === o.kind)(l = document.createElement("div")).style.position = "absolute";
					else if ("body" === o.kind) l = document.createElement("div");
					else if ("div" === o.kind) l = document.createElement("div");
					else if ("image" === o.kind) {
						if (l = document.createElement("img"), null !== e.imgResolver && null !== o.src) {
							var d = e.imgResolver(o.src, l);
							d && (l.src = d), l.height = e.regionH, l.width = e.regionW
						}
					} else if ("p" === o.kind) l = document.createElement("p");
					else if ("span" === o.kind) {
						if ("container" === o.styleAttrs[n.byName.ruby.qname]) l = document.createElement("ruby"), e.ruby = !0;
						else if ("base" === o.styleAttrs[n.byName.ruby.qname]) l = document.createElement("rb");
						else if ("text" === o.styleAttrs[n.byName.ruby.qname]) l = document.createElement("rt");
						else if ("baseContainer" === o.styleAttrs[n.byName.ruby.qname]) l = document.createElement("rbc");
						else if ("textContainer" === o.styleAttrs[n.byName.ruby.qname]) l = document.createElement("rtc");
						else {
							if ("delimiter" === o.styleAttrs[n.byName.ruby.qname]) return;
							l = document.createElement("span")
						}
						var c = o.styleAttrs[n.byName.textEmphasis.qname];
						c && "none" !== c.style && (e.textEmphasis = !0)
					} else "br" === o.kind && (l = document.createElement("br"));
					if (l) {
						for (var f in t.appendChild(l), l.style.margin = "0", u) {
							var h = u[f],
								m = o.styleAttrs[h.qname];
							void 0 !== m && null !== h.map && h.map(e, l, o, m)
						}
						var g = l;
						if ("region" === o.kind) {
							var _ = o.styleAttrs[n.byName.writingMode.qname];
							"lrtb" === _ || "lr" === _ ? (e.ipd = "lr", e.bpd = "tb") : "rltb" === _ || "rl" === _ ? (e.ipd = "rl", e.bpd = "tb") : "tblr" === _ ? (e.ipd = "tb", e.bpd = "lr") : "tbrl" !== _ && "tb" !== _ || (e.ipd = "tb", e.bpd = "rl")
						}
						var p = o.styleAttrs[n.byName.linePadding.qname];
						if (p && !p.isZero()) {
							var E = p.toUsedLength(e.w, e.h);
							if (E > 0) {
								var v = Math.ceil(E) + "px";
								"tb" === e.bpd ? (g.style.paddingLeft = v, g.style.paddingRight = v) : (g.style.paddingTop = v, g.style.paddingBottom = v), e.lp = p
							}
						}
						var y = o.styleAttrs[n.byName.multiRowAlign.qname];
						if (y && "auto" !== y) {
							var T = document.createElement("span");
							T.style.display = "inline-block", T.style.textAlign = y, l.appendChild(T), g = T, e.mra = y
						}
						var b = o.styleAttrs[n.byName.rubyReserve.qname];
						if (b && "none" !== b[0] && (e.rubyReserve = b), o.styleAttrs[n.byName.fillLineGap.qname] && (e.flg = !0), "span" === o.kind && o.text)
							if (n.byName.textCombine.qname in o.styleAttrs && "all" === o.styleAttrs[n.byName.textCombine.qname][0]) l.textContent = o.text;
							else
								for (var S = "", A = 0; A < o.text.length; A++) {
									S += o.text.charAt(A);
									var I = o.text.charCodeAt(A);
									if (I < 55296 || I > 56319 || A === o.text.length) {
										var R = document.createElement("span");
										R.textContent = S, l.appendChild(R), S = ""
									}
								}
						for (var M in o.contents) r(e, g, o.contents[M]);
						var C = [];
						if ((e.lp || e.mra || e.flg || e.ruby || e.textEmphasis || e.rubyReserve) && "p" === o.kind && (a(e, g, C, null), e.rubyReserve && (! function(e, t) {
								for (var n = 0; n < e.length; n++) {
									var r, s, i = document.createElement("ruby"),
										a = document.createElement("rb");
									a.textContent = "​", i.appendChild(a);
									var o = t.rubyReserve[1].toUsedLength(t.w, t.h) + "px";
									"both" === t.rubyReserve[0] ? ((r = document.createElement("rtc")).style.rubyPosition = "under", r.textContent = "​", r.style.fontSize = o, (s = document.createElement("rtc")).style.rubyPosition = "over", s.textContent = "​", s.style.fontSize = o, i.appendChild(r), i.appendChild(s)) : ((r = document.createElement("rtc")).textContent = "​", r.style.fontSize = o, "after" === t.rubyReserve[0] || "outside" === t.rubyReserve[0] && n > 0 ? r.style.rubyPosition = "tb" === t.bpd || "rl" === t.bpd ? "under" : "over" : r.style.rubyPosition = "tb" === t.bpd || "rl" === t.bpd ? "over" : "under", i.appendChild(r));
									e[n].elements[0].node.parentElement.insertBefore(i, e[n].elements[0].node)
								}
							}(C, e), e.rubyReserve = null), (e.ruby || e.rubyReserve) && (! function(e, t) {
								for (var n = 0; n < e.length; n++)
									for (var r = 0; r < e[n].rbc.length; r++) {
										var s;
										if (!e[n].rbc[r].style.rubyPosition) s = "tb" === t.bpd ? 0 === n ? "over" : "under" : "rl" === t.bpd ? 0 === n ? "over" : "under" : 0 === n ? "under" : "over", e[n].rbc[r].style.rubyPosition = s
									}
							}(C, e), e.ruby = null), e.textEmphasis && (! function(e, t) {
								for (var n = 0; n < e.length; n++)
									for (var r = 0; r < e[n].te.length; r++) {
										var s;
										if (!e[n].te[r].style.textEmphasisPosition || "none" === e[n].te[r].style.textEmphasisPosition) s = "tb" === t.bpd ? 0 === n ? "left over" : "left under" : "rl" === t.bpd ? 0 === n ? "right under" : "left under" : 0 === n ? "left under" : "right under", e[n].te[r].style.textEmphasisPosition = s
									}
							}(C, e), e.textEmphasis = null), e.mra && (! function(e) {
								for (var t = 0; t < e.length - 1; t++) {
									var n = e[t].elements.length;
									if (0 !== n && !1 === e[t].br) {
										var r = document.createElement("br"),
											s = e[t].elements[n - 1].node;
										s.parentElement.insertBefore(r, s.nextSibling)
									}
								}
							}(C), e.mra = null), e.lp && (! function(e, t, n) {
								for (var r in e) {
									var s = e[r].elements.length,
										i = e[r].elements[e[r].start_elem],
										a = e[r].elements[e[r].end_elem],
										o = Math.ceil(t) + "px",
										u = "-" + Math.ceil(t) + "px";
									0 !== s && ("lr" === n.ipd ? (i.node.style.borderLeftColor = i.bgcolor || "#00000000", i.node.style.borderLeftStyle = "solid", i.node.style.borderLeftWidth = o, i.node.style.marginLeft = u) : "rl" === n.ipd ? (i.node.style.borderRightColor = i.bgcolor || "#00000000", i.node.style.borderRightStyle = "solid", i.node.style.borderRightWidth = o, i.node.style.marginRight = u) : "tb" === n.ipd && (i.node.style.borderTopColor = i.bgcolor || "#00000000", i.node.style.borderTopStyle = "solid", i.node.style.borderTopWidth = o, i.node.style.marginTop = u), "lr" === n.ipd ? (a.node.style.borderRightColor = a.bgcolor || "#00000000", a.node.style.borderRightStyle = "solid", a.node.style.borderRightWidth = o, a.node.style.marginRight = u) : "rl" === n.ipd ? (a.node.style.borderLeftColor = a.bgcolor || "#00000000", a.node.style.borderLeftStyle = "solid", a.node.style.borderLeftWidth = o, a.node.style.marginLeft = u) : "tb" === n.ipd && (a.node.style.borderBottomColor = a.bgcolor || "#00000000", a.node.style.borderBottomStyle = "solid", a.node.style.borderBottomWidth = o, a.node.style.marginBottom = u))
								}
							}(C, e.lp.toUsedLength(e.w, e.h), e), e.lp = null), e.flg)) {
							var D = i(g.getBoundingClientRect(), e);
							! function(e, t, n, r) {
								for (var s = Math.sign(n - t), i = 0; i <= e.length; i++) {
									var a, o, u;
									if (a = 0 === i ? t : i === e.length ? n : (e[i].before + e[i - 1].after) / 2, i > 0)
										for (var l = 0; l < e[i - 1].elements.length; l++) null !== e[i - 1].elements[l].bgcolor && (u = e[i - 1].elements[l], s * (u.after - a) < 0 && (o = Math.ceil(Math.abs(a - u.after)) + "px", u.node.style.backgroundColor = u.bgcolor, "lr" === r.bpd ? u.node.style.paddingRight = o : "rl" === r.bpd ? u.node.style.paddingLeft = o : "tb" === r.bpd && (u.node.style.paddingBottom = o)));
									if (i < e.length)
										for (var d = 0; d < e[i].elements.length; d++) null !== (u = e[i].elements[d]).bgcolor && s * (u.before - a) > 0 && (o = Math.ceil(Math.abs(u.before - a)) + "px", u.node.style.backgroundColor = u.bgcolor, "lr" === r.bpd ? u.node.style.paddingLeft = o : "rl" === r.bpd ? u.node.style.paddingRight = o : "tb" === r.bpd && (u.node.style.paddingTop = o))
								}
							}(C, D.before, D.after, e), e.flg = null
						}
						if ("region" === o.kind && (a(e, g, C), "tb" === e.bpd && e.enableRollUp && o.contents.length > 0 && "after" === o.styleAttrs[n.byName.displayAlign.qname])) {
							var N = new s("" === o.id ? "_" : o.id, C);
							if (e.currentISDState[N.id] = N, e.previousISDState && N.id in e.previousISDState && e.previousISDState[N.id].plist.length > 0 && N.plist.length > 1 && N.plist[N.plist.length - 2].text === e.previousISDState[N.id].plist[e.previousISDState[N.id].plist.length - 1].text) {
								var O = l.firstElementChild,
									j = N.plist[N.plist.length - 1].after - N.plist[N.plist.length - 1].before;
								O.style.bottom = "-" + j + "px", O.style.transition = "transform 0.4s", O.style.position = "relative", O.style.transform = "translateY(-" + j + "px)"
							}
						}
					} else ! function(e, t) {
						if (e && e.error && e.error(t)) throw t
					}(e.errorHandler, "Error processing ISD element kind: " + o.kind)
				}

				function s(e, t) {
					this.id = e, this.plist = t
				}

				function i(e, t) {
					var n = {
						before: null,
						after: null,
						start: null,
						end: null
					};
					return "tb" === t.bpd ? (n.before = e.top, n.after = e.bottom, "lr" === t.ipd ? (n.start = e.left, n.end = e.right) : (n.start = e.right, n.end = e.left)) : "lr" === t.bpd ? (n.before = e.left, n.after = e.right, n.start = e.top, n.end = e.bottom) : "rl" === t.bpd && (n.before = e.right, n.after = e.left, n.start = e.top, n.end = e.bottom), n
				}

				function a(e, t, n, r) {
					if ("rt" !== t.localName && "rtc" !== t.localName) {
						var s, o, u, l, d = t.style.backgroundColor || r;
						if (0 === t.childElementCount)
							if ("span" === t.localName || "rb" === t.localName) {
								var c = t.getBoundingClientRect();
								if (0 === c.height || 0 === c.width) return;
								var f = i(c, e);
								if (0 !== n.length && (s = f.before, o = f.after, u = n[n.length - 1].before, l = n[n.length - 1].after, o < l && s > u || l <= o && u >= s)) {
									var h = Math.sign(f.after - f.before),
										m = Math.sign(f.end - f.start);
									h * (f.before - n[n.length - 1].before) < 0 && (n[n.length - 1].before = f.before), h * (f.after - n[n.length - 1].after) > 0 && (n[n.length - 1].after = f.after), m * (f.start - n[n.length - 1].start) < 0 && (n[n.length - 1].start = f.start, n[n.length - 1].start_elem = n[n.length - 1].elements.length), m * (f.end - n[n.length - 1].end) > 0 && (n[n.length - 1].end = f.end, n[n.length - 1].end_elem = n[n.length - 1].elements.length)
								} else n.push({
									before: f.before,
									after: f.after,
									start: f.start,
									end: f.end,
									start_elem: 0,
									end_elem: 0,
									elements: [],
									rbc: [],
									te: [],
									text: "",
									br: !1
								});
								n[n.length - 1].text += t.textContent, n[n.length - 1].elements.push({
									node: t,
									bgcolor: d,
									before: f.before,
									after: f.after
								})
							} else "br" === t.localName && 0 !== n.length && (n[n.length - 1].br = !0);
						else
							for (var g = t.firstChild; g;) g.nodeType === Node.ELEMENT_NODE && (a(e, g, n, d), "ruby" === g.localName || "rtc" === g.localName ? n.length > 0 && n[n.length - 1].rbc.push(g) : "span" === g.localName && g.style.textEmphasisStyle && "none" !== g.style.textEmphasisStyle && n.length > 0 && n[n.length - 1].te.push(g)), g = g.nextSibling
					}
				}

				function o(e, t) {
					this.qname = e, this.map = t
				}
				e.render = function(e, t, n, s, i, a, o, u, l) {
					var d = s || t.clientHeight,
						c = i || t.clientWidth;
					if (null !== e.aspectRatio) {
						var f = d * e.aspectRatio;
						f > c ? d = Math.round(c / e.aspectRatio) : c = f
					}
					var h = document.createElement("div");
					h.style.position = "relative", h.style.width = c + "px", h.style.height = d + "px", h.style.margin = "auto", h.style.top = 0, h.style.bottom = 0, h.style.left = 0, h.style.right = 0, h.style.zIndex = 0;
					var m = {
						h: d,
						w: c,
						regionH: null,
						regionW: null,
						imgResolver: n,
						displayForcedOnlyMode: a || !1,
						isd: e,
						errorHandler: o,
						previousISDState: u,
						enableRollUp: l || !1,
						currentISDState: {},
						flg: null,
						lp: null,
						mra: null,
						ipd: null,
						bpd: null,
						ruby: null,
						textEmphasis: null,
						rubyReserve: null
					};
					for (var g in t.appendChild(h), e.contents) r(m, h, e.contents[g]);
					return m.currentISDState
				};
				var u = [new o("http://www.w3.org/ns/ttml#styling backgroundColor", (function(e, t, n, r) {
						0 !== r[3] && (t.style.backgroundColor = "rgba(" + r[0].toString() + "," + r[1].toString() + "," + r[2].toString() + "," + (r[3] / 255).toString() + ")")
					})), new o("http://www.w3.org/ns/ttml#styling color", (function(e, t, n, r) {
						t.style.color = "rgba(" + r[0].toString() + "," + r[1].toString() + "," + r[2].toString() + "," + (r[3] / 255).toString() + ")"
					})), new o("http://www.w3.org/ns/ttml#styling direction", (function(e, t, n, r) {
						t.style.direction = r
					})), new o("http://www.w3.org/ns/ttml#styling display", (function(e, t, n, r) {})), new o("http://www.w3.org/ns/ttml#styling displayAlign", (function(e, t, n, r) {
						t.style.display = "flex", t.style.flexDirection = "column", "before" === r ? t.style.justifyContent = "flex-start" : "center" === r ? t.style.justifyContent = "center" : "after" === r && (t.style.justifyContent = "flex-end")
					})), new o("http://www.w3.org/ns/ttml#styling extent", (function(e, t, n, r) {
						e.regionH = r.h.toUsedLength(e.w, e.h), e.regionW = r.w.toUsedLength(e.w, e.h);
						var s = 0,
							i = 0,
							a = n.styleAttrs["http://www.w3.org/ns/ttml#styling padding"];
						a && (s = a[0].toUsedLength(e.w, e.h) + a[2].toUsedLength(e.w, e.h), i = a[1].toUsedLength(e.w, e.h) + a[3].toUsedLength(e.w, e.h)), t.style.height = e.regionH - s + "px", t.style.width = e.regionW - i + "px"
					})), new o("http://www.w3.org/ns/ttml#styling fontFamily", (function(e, t, n, r) {
						var s = [];
						for (var i in r) "monospaceSerif" === r[i] ? (s.push("Courier New"), s.push('"Liberation Mono"'), s.push("Courier"), s.push("monospace")) : "proportionalSansSerif" === r[i] ? (s.push("Arial"), s.push("Helvetica"), s.push('"Liberation Sans"'), s.push("sans-serif")) : "monospace" === r[i] ? s.push("monospace") : "sansSerif" === r[i] ? s.push("sans-serif") : "serif" === r[i] ? s.push("serif") : "monospaceSansSerif" === r[i] ? (s.push("Consolas"), s.push("monospace")) : "proportionalSerif" === r[i] ? s.push("serif") : s.push(r[i]);
						t.style.fontFamily = s.join(",")
					})), new o("http://www.w3.org/ns/ttml#styling shear", (function(e, t, n, r) {
						if (0 !== r) {
							var s = -.9 * r;
							"tb" === e.bpd ? t.style.transform = "skewX(" + s + "deg)" : t.style.transform = "skewY(" + s + "deg)"
						}
					})), new o("http://www.w3.org/ns/ttml#styling fontSize", (function(e, t, n, r) {
						t.style.fontSize = r.toUsedLength(e.w, e.h) + "px"
					})), new o("http://www.w3.org/ns/ttml#styling fontStyle", (function(e, t, n, r) {
						t.style.fontStyle = r
					})), new o("http://www.w3.org/ns/ttml#styling fontWeight", (function(e, t, n, r) {
						t.style.fontWeight = r
					})), new o("http://www.w3.org/ns/ttml#styling lineHeight", (function(e, t, n, r) {
						t.style.lineHeight = "normal" === r ? "normal" : r.toUsedLength(e.w, e.h) + "px"
					})), new o("http://www.w3.org/ns/ttml#styling opacity", (function(e, t, n, r) {
						t.style.opacity = r
					})), new o("http://www.w3.org/ns/ttml#styling origin", (function(e, t, n, r) {
						t.style.top = r.h.toUsedLength(e.w, e.h) + "px", t.style.left = r.w.toUsedLength(e.w, e.h) + "px"
					})), new o("http://www.w3.org/ns/ttml#styling overflow", (function(e, t, n, r) {
						t.style.overflow = r
					})), new o("http://www.w3.org/ns/ttml#styling padding", (function(e, t, n, r) {
						var s = [];
						s[0] = r[0].toUsedLength(e.w, e.h) + "px", s[1] = r[3].toUsedLength(e.w, e.h) + "px", s[2] = r[2].toUsedLength(e.w, e.h) + "px", s[3] = r[1].toUsedLength(e.w, e.h) + "px", t.style.padding = s.join(" ")
					})), new o("http://www.w3.org/ns/ttml#styling position", (function(e, t, n, r) {
						t.style.top = r.h.toUsedLength(e.w, e.h) + "px", t.style.left = r.w.toUsedLength(e.w, e.h) + "px"
					})), new o("http://www.w3.org/ns/ttml#styling rubyAlign", (function(e, t, n, r) {
						t.style.rubyAlign = r
					})), new o("http://www.w3.org/ns/ttml#styling rubyPosition", (function(e, t, n, r) {
						var s;
						"before" !== r && "after" !== r || (s = "tb" === e.bpd ? "before" === r ? "over" : "under" : "rl" === e.bpd ? "before" === r ? "over" : "under" : "before" === r ? "under" : "over", t.parentElement.style.rubyPosition = s)
					})), new o("http://www.w3.org/ns/ttml#styling showBackground", null), new o("http://www.w3.org/ns/ttml#styling textAlign", (function(e, t, r, s) {
						var i, a = r.styleAttrs[n.byName.direction.qname];
						i = "start" === s ? "rtl" === a ? "right" : "left" : "end" === s ? "rtl" === a ? "left" : "right" : s, t.style.textAlign = i
					})), new o("http://www.w3.org/ns/ttml#styling textDecoration", (function(e, t, n, r) {
						t.style.textDecoration = r.join(" ").replace("lineThrough", "line-through")
					})), new o("http://www.w3.org/ns/ttml#styling textOutline", (function(e, t, n, r) {})), new o("http://www.w3.org/ns/ttml#styling textShadow", (function(e, t, r, s) {
						var i = r.styleAttrs[n.byName.textOutline.qname];
						if ("none" === s && "none" === i) t.style.textShadow = "";
						else {
							var a = [];
							if ("none" !== i && a.push("rgba(" + i.color[0].toString() + "," + i.color[1].toString() + "," + i.color[2].toString() + "," + (i.color[3] / 255).toString() + ") 0px 0px " + i.thickness.toUsedLength(e.w, e.h) + "px"), "none" !== s)
								for (var o in s) a.push(s[o].x_off.toUsedLength(e.w, e.h) + "px " + s[o].y_off.toUsedLength(e.w, e.h) + "px " + s[o].b_radius.toUsedLength(e.w, e.h) + "px rgba(" + s[o].color[0].toString() + "," + s[o].color[1].toString() + "," + s[o].color[2].toString() + "," + (s[o].color[3] / 255).toString() + ")");
							t.style.textShadow = a.join(",")
						}
					})), new o("http://www.w3.org/ns/ttml#styling textCombine", (function(e, t, n, r) {
						t.style.textCombineUpright = r.join(" ")
					})), new o("http://www.w3.org/ns/ttml#styling textEmphasis", (function(e, t, n, r) {
						var s;
						"none" !== r.style ? ("auto" === r.style ? t.style.textEmphasisStyle = "filled" : t.style.textEmphasisStyle = r.style + " " + r.symbol, ("before" === r.position || "after" === r.position) && (s = "tb" === e.bpd ? "before" === r.position ? "left over" : "left under" : "rl" === e.bpd ? "before" === r.position ? "right under" : "left under" : "before" === r.position ? "left under" : "right under", t.style.textEmphasisPosition = s)) : t.style.textEmphasisStyle = "none"
					})), new o("http://www.w3.org/ns/ttml#styling unicodeBidi", (function(e, t, n, r) {
						var s;
						s = "bidiOverride" === r ? "bidi-override" : r, t.style.unicodeBidi = s
					})), new o("http://www.w3.org/ns/ttml#styling visibility", (function(e, t, n, r) {
						t.style.visibility = r
					})), new o("http://www.w3.org/ns/ttml#styling wrapOption", (function(e, t, n, r) {
						"wrap" === r ? "preserve" === n.space ? t.style.whiteSpace = "pre-wrap" : t.style.whiteSpace = "normal" : "preserve" === n.space ? t.style.whiteSpace = "pre" : t.style.whiteSpace = "noWrap"
					})), new o("http://www.w3.org/ns/ttml#styling writingMode", (function(e, t, n, r) {
						"lrtb" === r || "lr" === r ? e.writingMode = "horizontal-tb" : "rltb" === r || "rl" === r ? e.writingMode = "horizontal-tb" : "tblr" === r ? e.writingMode = "vertical-lr" : "tbrl" !== r && "tb" !== r || (e.writingMode = "vertical-rl"), t.style.writingMode = e.writingMode
					})), new o("http://www.w3.org/ns/ttml#styling zIndex", (function(e, t, n, r) {
						t.style.zIndex = r
					})), new o("http://www.w3.org/ns/ttml/profile/imsc1#styling forcedDisplay", (function(e, t, n, r) {
						e.displayForcedOnlyMode && !1 === r && (t.style.visibility = "hidden")
					}))],
					l = {};
				for (var d in u) l[u[d].qname] = u[d]
			}(t, "undefined" == typeof imscNames ? n("./node_modules/imsc/src/main/js/names.js") : imscNames, "undefined" == typeof imscStyles ? n("./node_modules/imsc/src/main/js/styles.js") : imscStyles, "undefined" == typeof imscUtils ? n("./node_modules/imsc/src/main/js/utils.js") : imscUtils)
		},
		"./node_modules/imsc/src/main/js/isd.js": function(e, t, n) {
			! function(e, t, n, r) {
				e.generateISD = function(e, t, n) {
					var r = new a(e),
						s = {};
					for (var o in e.head.layout.regions) {
						var u = i(e, t, e.head.layout.regions[o], e.body, null, "", e.head.layout.regions[o], n, s);
						null !== u && r.contents.push(u.element)
					}
					return r
				};
				var s = [n.byName.color.qname, n.byName.textCombine.qname, n.byName.textDecoration.qname, n.byName.textEmphasis.qname, n.byName.textOutline.qname, n.byName.textShadow.qname];

				function i(e, t, a, l, d, c, f, h, m) {
					if (t < f.begin || t >= f.end) return null;
					var g = "regionID" in f && "" !== f.regionID ? f.regionID : c;
					if (null !== d && g !== a.id && (!("contents" in f) || "contents" in f && 0 === f.contents.length || "" !== g)) return null;
					var _ = new o(f);
					for (var p in f.sets) t < f.sets[p].begin || t >= f.sets[p].end || (_.styleAttrs[f.sets[p].qname] = f.sets[p].value);
					var E, v = {};
					for (var y in _.styleAttrs)
						if (v[y] = !0, y === n.byName.writingMode.qname && !(n.byName.direction.qname in _.styleAttrs)) {
							var T = _.styleAttrs[y];
							"lrtb" === T || "lr" === T ? _.styleAttrs[n.byName.direction.qname] = "ltr" : "rltb" !== T && "rl" !== T || (_.styleAttrs[n.byName.direction.qname] = "rtl")
						} if (null !== d)
						for (var b in n.all) {
							var S = n.all[b];
							if (S.qname === n.byName.textDecoration.qname) {
								var A = d.styleAttrs[S.qname],
									I = _.styleAttrs[S.qname],
									R = [];
								void 0 === I ? R = A : -1 === I.indexOf("none") ? ((-1 === I.indexOf("noUnderline") && -1 !== A.indexOf("underline") || -1 !== I.indexOf("underline")) && R.push("underline"), (-1 === I.indexOf("noLineThrough") && -1 !== A.indexOf("lineThrough") || -1 !== I.indexOf("lineThrough")) && R.push("lineThrough"), (-1 === I.indexOf("noOverline") && -1 !== A.indexOf("overline") || -1 !== I.indexOf("overline")) && R.push("overline")) : R.push("none"), _.styleAttrs[S.qname] = R
							} else if (S.qname !== n.byName.fontSize.qname || S.qname in _.styleAttrs || "span" !== _.kind || "textContainer" !== _.styleAttrs[n.byName.ruby.qname])
								if (S.qname !== n.byName.fontSize.qname || S.qname in _.styleAttrs || "span" !== _.kind || "text" !== _.styleAttrs[n.byName.ruby.qname]) S.inherit && S.qname in d.styleAttrs && !(S.qname in _.styleAttrs) && (_.styleAttrs[S.qname] = d.styleAttrs[S.qname]);
								else {
									var M = d.styleAttrs[n.byName.fontSize.qname];
									"textContainer" === d.styleAttrs[n.byName.ruby.qname] ? _.styleAttrs[S.qname] = M : _.styleAttrs[S.qname] = new r.ComputedLength(.5 * M.rw, .5 * M.rh)
								}
							else {
								var C = d.styleAttrs[n.byName.fontSize.qname];
								_.styleAttrs[S.qname] = new r.ComputedLength(.5 * C.rw, .5 * C.rh)
							}
						}
					for (var D in n.all) {
						var N = n.all[D];
						if (!(N.qname in _.styleAttrs) && !(N.qname === n.byName.position.qname && n.byName.origin.qname in _.styleAttrs || N.qname === n.byName.origin.qname && n.byName.position.qname in _.styleAttrs)) {
							var O = e.head.styling.initials[N.qname] || N.initial;
							("region" === _.kind || !1 === N.inherit && null !== O) && (_.styleAttrs[N.qname] = N.parse(O), v[N.qname] = !0)
						}
					}
					for (var j in n.all) {
						var w = n.all[j];
						if (w.qname in v && null !== w.compute) {
							var P = w.compute(e, d, _, _.styleAttrs[w.qname], m);
							null !== P ? _.styleAttrs[w.qname] = P : (_.styleAttrs[w.qname] = w.compute(e, d, _, w.parse(w.initial), m), u(h, "Style '" + w.qname + "' on element '" + _.kind + "' cannot be computed"))
						}
					}
					if ("none" === _.styleAttrs[n.byName.display.qname]) return null;
					for (var L in null === d ? E = null === l ? [] : [l] : "contents" in f && (E = f.contents), E) {
						var F = i(e, t, a, l, _, g, E[L], h, m);
						null !== F && _.contents.push(F.element)
					}
					for (var x in _.styleAttrs) {
						var U = !1;
						if ("span" === _.kind) {
							var B = _.styleAttrs[n.byName.ruby.qname];
							(U = ("container" === B || "textContainer" === B || "baseContainer" === B) && -1 !== s.indexOf(x)) || (U = "container" !== B && x === n.byName.rubyAlign.qname), U || (U = !("textContainer" === B || "text" === B) && x === n.byName.rubyPosition.qname)
						}
						if (!U) U = -1 === n.byQName[x].applies.indexOf(_.kind);
						U && delete _.styleAttrs[x]
					}
					if ("span" === _.kind && _.text && "default" === _.space) {
						var k = _.text.replace(/[\t\r\n ]+/g, " ");
						_.text = k
					}
					if ("p" === _.kind) {
						var G = [];
						! function e(t, n) {
							if ("contents" in t)
								for (var r in t.contents) e(t.contents[r], n);
							else "span" !== t.kind && "br" !== t.kind || n.push(t)
						}(_, G);
						for (var q = 0, H = "after_br", K = 0;;)
							if ("after_br" === H) q >= G.length || "br" === G[q].kind ? (H = "before_br", K = q, q--) : ("preserve" !== G[q].space && (G[q].text = G[q].text.replace(/^[\t\r\n ]+/g, "")), G[q].text.length > 0 ? (H = "looking_br", q++) : G.splice(q, 1));
							else if ("before_br" === H)
							if (q < 0 || "br" === G[q].kind) {
								if (H = "after_br", (q = K + 1) >= G.length) break
							} else if ("preserve" !== G[q].space && (G[q].text = G[q].text.replace(/[\t\r\n ]+$/g, "")), G[q].text.length > 0) {
							if (H = "after_br", (q = K + 1) >= G.length) break
						} else G.splice(q, 1), q--;
						else q >= G.length || "br" === G[q].kind ? (H = "before_br", K = q, q--) : q++;
						! function e(t) {
							if ("br" === t.kind) return !1;
							if ("text" in t) return 0 === t.text.length;
							if ("contents" in t) {
								for (var n = t.contents.length; n--;) e(t.contents[n]) && t.contents.splice(n, 1);
								return 0 === t.contents.length
							}
						}(_)
					}
					return "div" === _.kind && n.byName.backgroundImage.qname in _.styleAttrs || "br" === _.kind || "image" === _.kind || "contents" in _ && _.contents.length > 0 || "span" === _.kind && null !== _.text || "region" === _.kind && "always" === _.styleAttrs[n.byName.showBackground.qname] ? {
						region_id: g,
						element: _
					} : null
				}

				function a(e) {
					this.contents = [], this.aspectRatio = e.aspectRatio
				}

				function o(e) {
					for (var t in this.kind = e.kind || "region", e.id && (this.id = e.id), this.styleAttrs = {}, e.styleAttrs) this.styleAttrs[t] = e.styleAttrs[t];
					"src" in e && (this.src = e.src), "type" in e && (this.type = e.type), "text" in e ? this.text = e.text : ("region" === this.kind || "contents" in e) && (this.contents = []), "space" in e && (this.space = e.space)
				}

				function u(e, t) {
					if (e && e.error && e.error(t)) throw t
				}
			}(t, "undefined" == typeof imscNames ? n("./node_modules/imsc/src/main/js/names.js") : imscNames, "undefined" == typeof imscStyles ? n("./node_modules/imsc/src/main/js/styles.js") : imscStyles, "undefined" == typeof imscUtils ? n("./node_modules/imsc/src/main/js/utils.js") : imscUtils)
		},
		"./node_modules/imsc/src/main/js/main.js": function(e, t, n) {
			t.generateISD = n("./node_modules/imsc/src/main/js/isd.js").generateISD, t.fromXML = n("./node_modules/imsc/src/main/js/doc.js").fromXML, t.renderHTML = n("./node_modules/imsc/src/main/js/html.js").render
		},
		"./node_modules/imsc/src/main/js/names.js": function(e, t, n) {
			! function(e) {
				e.ns_tt = "http://www.w3.org/ns/ttml", e.ns_tts = "http://www.w3.org/ns/ttml#styling", e.ns_ttp = "http://www.w3.org/ns/ttml#parameter", e.ns_xml = "http://www.w3.org/XML/1998/namespace", e.ns_itts = "http://www.w3.org/ns/ttml/profile/imsc1#styling", e.ns_ittp = "http://www.w3.org/ns/ttml/profile/imsc1#parameter", e.ns_smpte = "http://www.smpte-ra.org/schemas/2052-1/2010/smpte-tt", e.ns_ebutts = "urn:ebu:tt:style"
			}(t)
		},
		"./node_modules/imsc/src/main/js/styles.js": function(e, t, n) {
			! function(e, t, n) {
				function r(e, t, n, r, s, i, a, o) {
					this.name = t, this.ns = e, this.qname = e + " " + t, this.inherit = s, this.animatable = i, this.initial = n, this.applies = r, this.parse = a, this.compute = o
				}
				for (var s in e.all = [new r(t.ns_tts, "backgroundColor", "transparent", ["body", "div", "p", "region", "span"], !1, !0, n.parseColor, null), new r(t.ns_tts, "color", "white", ["span"], !0, !0, n.parseColor, null), new r(t.ns_tts, "direction", "ltr", ["p", "span"], !0, !0, (function(e) {
						return e
					}), null), new r(t.ns_tts, "display", "auto", ["body", "div", "p", "region", "span"], !1, !0, (function(e) {
						return e
					}), null), new r(t.ns_tts, "displayAlign", "before", ["region"], !1, !0, (function(e) {
						return e
					}), null), new r(t.ns_tts, "extent", "auto", ["tt", "region"], !1, !0, (function(e) {
						if ("auto" === e) return e;
						var t = e.split(" ");
						if (2 !== t.length) return null;
						var r = n.parseLength(t[0]),
							s = n.parseLength(t[1]);
						return s && r ? {
							h: s,
							w: r
						} : null
					}), (function(e, t, r, s, i) {
						var a, o;
						if ("auto" === s) a = new n.ComputedLength(0, 1);
						else if (null === (a = n.toComputedLength(s.h.value, s.h.unit, null, e.dimensions.h, null, e.pxLength.h))) return null;
						if ("auto" === s) o = new n.ComputedLength(1, 0);
						else if (null === (o = n.toComputedLength(s.w.value, s.w.unit, null, e.dimensions.w, null, e.pxLength.w))) return null;
						return {
							h: a,
							w: o
						}
					})), new r(t.ns_tts, "fontFamily", "default", ["span"], !0, !0, (function(e) {
						var t = e.split(","),
							n = [];
						for (var r in t) "'" !== t[r].charAt(0) && '"' !== t[r].charAt(0) && "default" === t[r] ? n.push("monospaceSerif") : n.push(t[r]);
						return n
					}), null), new r(t.ns_tts, "shear", "0%", ["p"], !0, !0, n.parseLength, (function(e, t, n, r) {
						return "%" !== r.unit ? null : Math.abs(r.value) > 100 ? 100 * Math.sign(r.value) : r.value
					})), new r(t.ns_tts, "fontSize", "1c", ["span"], !0, !0, n.parseLength, (function(t, r, s, i, a) {
						return n.toComputedLength(i.value, i.unit, null !== r ? r.styleAttrs[e.byName.fontSize.qname] : t.cellLength.h, null !== r ? r.styleAttrs[e.byName.fontSize.qname] : t.cellLength.h, t.cellLength.h, t.pxLength.h)
					})), new r(t.ns_tts, "fontStyle", "normal", ["span"], !0, !0, (function(e) {
						return e
					}), null), new r(t.ns_tts, "fontWeight", "normal", ["span"], !0, !0, (function(e) {
						return e
					}), null), new r(t.ns_tts, "lineHeight", "normal", ["p"], !0, !0, (function(e) {
						return "normal" === e ? e : n.parseLength(e)
					}), (function(t, r, s, i, a) {
						var o;
						if ("normal" === i) o = i;
						else if (null === (o = n.toComputedLength(i.value, i.unit, s.styleAttrs[e.byName.fontSize.qname], s.styleAttrs[e.byName.fontSize.qname], t.cellLength.h, t.pxLength.h))) return null;
						return o
					})), new r(t.ns_tts, "opacity", 1, ["region"], !1, !0, parseFloat, null), new r(t.ns_tts, "origin", "auto", ["region"], !1, !0, (function(e) {
						if ("auto" === e) return e;
						var t = e.split(" ");
						if (2 !== t.length) return null;
						var r = n.parseLength(t[0]),
							s = n.parseLength(t[1]);
						return s && r ? {
							h: s,
							w: r
						} : null
					}), (function(e, t, r, s, i) {
						var a, o;
						if ("auto" === s) a = new n.ComputedLength(0, 0);
						else if (null === (a = n.toComputedLength(s.h.value, s.h.unit, null, e.dimensions.h, null, e.pxLength.h))) return null;
						if ("auto" === s) o = new n.ComputedLength(0, 0);
						else if (null === (o = n.toComputedLength(s.w.value, s.w.unit, null, e.dimensions.w, null, e.pxLength.w))) return null;
						return {
							h: a,
							w: o
						}
					})), new r(t.ns_tts, "overflow", "hidden", ["region"], !1, !0, (function(e) {
						return e
					}), null), new r(t.ns_tts, "padding", "0px", ["region"], !1, !0, (function(e) {
						var t = e.split(" ");
						if (t.length > 4) return null;
						var r = [];
						for (var s in t) {
							var i = n.parseLength(t[s]);
							if (!i) return null;
							r.push(i)
						}
						return r
					}), (function(t, r, s, i, a) {
						var o;
						if (1 === i.length) o = [i[0], i[0], i[0], i[0]];
						else if (2 === i.length) o = [i[0], i[1], i[0], i[1]];
						else if (3 === i.length) o = [i[0], i[1], i[2], i[1]];
						else {
							if (4 !== i.length) return null;
							o = [i[0], i[1], i[2], i[3]]
						}
						var u = s.styleAttrs[e.byName.writingMode.qname];
						if ("lrtb" === u || "lr" === u) o = [o[0], o[3], o[2], o[1]];
						else if ("rltb" === u || "rl" === u) o = [o[0], o[1], o[2], o[3]];
						else if ("tblr" === u) o = [o[3], o[0], o[1], o[2]];
						else {
							if ("tbrl" !== u && "tb" !== u) return null;
							o = [o[3], o[2], o[1], o[0]]
						}
						var l = [];
						for (var d in o)
							if (0 === o[d].value) l[d] = new n.ComputedLength(0, 0);
							else if (l[d] = n.toComputedLength(o[d].value, o[d].unit, s.styleAttrs[e.byName.fontSize.qname], "0" === d || "2" === d ? s.styleAttrs[e.byName.extent.qname].h : s.styleAttrs[e.byName.extent.qname].w, "0" === d || "2" === d ? t.cellLength.h : t.cellLength.w, "0" === d || "2" === d ? t.pxLength.h : t.pxLength.w), null === l[d]) return null;
						return l
					})), new r(t.ns_tts, "position", "top left", ["region"], !1, !0, (function(e) {
						return n.parsePosition(e)
					}), (function(t, r, s, i) {
						var a, o;
						return null === (a = n.toComputedLength(i.v.offset.value, i.v.offset.unit, null, new n.ComputedLength(-s.styleAttrs[e.byName.extent.qname].h.rw, t.dimensions.h.rh - s.styleAttrs[e.byName.extent.qname].h.rh), null, t.pxLength.h)) ? null : ("bottom" === i.v.edge && (a = new n.ComputedLength(-a.rw - s.styleAttrs[e.byName.extent.qname].h.rw, t.dimensions.h.rh - a.rh - s.styleAttrs[e.byName.extent.qname].h.rh)), o = n.toComputedLength(i.h.offset.value, i.h.offset.unit, null, new n.ComputedLength(t.dimensions.w.rw - s.styleAttrs[e.byName.extent.qname].w.rw, -s.styleAttrs[e.byName.extent.qname].w.rh), null, t.pxLength.w), null === a ? null : ("right" === i.h.edge && (o = new n.ComputedLength(t.dimensions.w.rw - o.rw - s.styleAttrs[e.byName.extent.qname].w.rw, -o.rh - s.styleAttrs[e.byName.extent.qname].w.rh)), {
							h: a,
							w: o
						}))
					})), new r(t.ns_tts, "ruby", "none", ["span"], !1, !0, (function(e) {
						return e
					}), null), new r(t.ns_tts, "rubyAlign", "center", ["span"], !0, !0, (function(e) {
						return "center" !== e && "spaceAround" !== e ? null : e
					}), null), new r(t.ns_tts, "rubyPosition", "outside", ["span"], !0, !0, (function(e) {
						return e
					}), null), new r(t.ns_tts, "rubyReserve", "none", ["p"], !0, !0, (function(e) {
						var t = e.split(" "),
							r = [null, null];
						if (0 === t.length || t.length > 2) return null;
						if ("none" !== t[0] && "both" !== t[0] && "after" !== t[0] && "before" !== t[0] && "outside" !== t[0]) return null;
						if (r[0] = t[0], 2 === t.length && "none" !== t[0]) {
							var s = n.parseLength(t[1]);
							if (!s) return null;
							r[1] = s
						}
						return r
					}), (function(t, r, s, i, a) {
						if ("none" === i[0]) return i;
						var o = null;
						return null === (o = null === i[1] ? new n.ComputedLength(.5 * s.styleAttrs[e.byName.fontSize.qname].rw, .5 * s.styleAttrs[e.byName.fontSize.qname].rh) : n.toComputedLength(i[1].value, i[1].unit, s.styleAttrs[e.byName.fontSize.qname], s.styleAttrs[e.byName.fontSize.qname], t.cellLength.h, t.pxLength.h)) ? null : [i[0], o]
					})), new r(t.ns_tts, "showBackground", "always", ["region"], !1, !0, (function(e) {
						return e
					}), null), new r(t.ns_tts, "textAlign", "start", ["p"], !0, !0, (function(e) {
						return e
					}), (function(e, t, n, r, s) {
						return "left" === r ? "start" : "right" === r ? "end" : r
					})), new r(t.ns_tts, "textCombine", "none", ["span"], !0, !0, (function(e) {
						var t = e.split(" ");
						return 1 !== t.length || "none" !== t[0] && "all" !== t[0] ? null : [t[0]]
					}), null), new r(t.ns_tts, "textDecoration", "none", ["span"], !0, !0, (function(e) {
						return e.split(" ")
					}), null), new r(t.ns_tts, "textEmphasis", "none", ["span"], !0, !0, (function(e) {
						var t = e.split(" "),
							r = {
								style: null,
								symbol: null,
								color: null,
								position: null
							};
						for (var s in t)
							if ("none" === t[s] || "auto" === t[s]) r.style = t[s];
							else if ("filled" === t[s] || "open" === t[s]) r.style = t[s];
						else if ("circle" === t[s] || "dot" === t[s] || "sesame" === t[s]) r.symbol = t[s];
						else if ("current" === t[s]) r.color = t[s];
						else if ("outside" === t[s] || "before" === t[s] || "after" === t[s]) r.position = t[s];
						else if (r.color = n.parseColor(t[s]), null === r.color) return null;
						return null == r.style && null == r.symbol ? r.style = "auto" : (r.symbol = r.symbol || "circle", r.style = r.style || "filled"), r.position = r.position || "outside", r.color = r.color || "current", r
					}), null), new r(t.ns_tts, "textOutline", "none", ["span"], !0, !0, (function(e) {
						if ("none" === e) return e;
						var t = {},
							r = e.split(" ");
						if (0 === r.length || r.length > 2) return null;
						var s = n.parseColor(r[0]);
						if (t.color = s, null !== s && r.shift(), 1 !== r.length) return null;
						var i = n.parseLength(r[0]);
						return i ? (t.thickness = i, t) : null
					}), (function(t, r, s, i, a) {
						if ("none" === i) return i;
						var o = {};
						return null === i.color ? o.color = s.styleAttrs[e.byName.color.qname] : o.color = i.color, o.thickness = n.toComputedLength(i.thickness.value, i.thickness.unit, s.styleAttrs[e.byName.fontSize.qname], s.styleAttrs[e.byName.fontSize.qname], t.cellLength.h, t.pxLength.h), null === o.thickness ? null : o
					})), new r(t.ns_tts, "textShadow", "none", ["span"], !0, !0, n.parseTextShadow, (function(t, r, s, i) {
						if ("none" === i) return i;
						var a = [];
						for (var o in i) {
							var u = {};
							if (u.x_off = n.toComputedLength(i[o][0].value, i[o][0].unit, null, s.styleAttrs[e.byName.fontSize.qname], null, t.pxLength.w), null === u.x_off) return null;
							if (u.y_off = n.toComputedLength(i[o][1].value, i[o][1].unit, null, s.styleAttrs[e.byName.fontSize.qname], null, t.pxLength.h), null === u.y_off) return null;
							if (null === i[o][2]) u.b_radius = 0;
							else if (u.b_radius = n.toComputedLength(i[o][2].value, i[o][2].unit, null, s.styleAttrs[e.byName.fontSize.qname], null, t.pxLength.h), null === u.b_radius) return null;
							null === i[o][3] ? u.color = s.styleAttrs[e.byName.color.qname] : u.color = i[o][3], a.push(u)
						}
						return a
					})), new r(t.ns_tts, "unicodeBidi", "normal", ["span", "p"], !1, !0, (function(e) {
						return e
					}), null), new r(t.ns_tts, "visibility", "visible", ["body", "div", "p", "region", "span"], !0, !0, (function(e) {
						return e
					}), null), new r(t.ns_tts, "wrapOption", "wrap", ["span"], !0, !0, (function(e) {
						return e
					}), null), new r(t.ns_tts, "writingMode", "lrtb", ["region"], !1, !0, (function(e) {
						return e
					}), null), new r(t.ns_tts, "zIndex", "auto", ["region"], !1, !0, (function(e) {
						var t;
						return "auto" === e ? t = e : (t = parseInt(e), isNaN(t) && (t = null)), t
					}), null), new r(t.ns_ebutts, "linePadding", "0c", ["p"], !0, !1, n.parseLength, (function(e, t, r, s, i) {
						return n.toComputedLength(s.value, s.unit, null, null, e.cellLength.w, null)
					})), new r(t.ns_ebutts, "multiRowAlign", "auto", ["p"], !0, !1, (function(e) {
						return e
					}), null), new r(t.ns_smpte, "backgroundImage", null, ["div"], !1, !1, (function(e) {
						return e
					}), null), new r(t.ns_itts, "forcedDisplay", "false", ["body", "div", "p", "region", "span"], !0, !0, (function(e) {
						return "true" === e
					}), null), new r(t.ns_itts, "fillLineGap", "false", ["p"], !0, !0, (function(e) {
						return "true" === e
					}), null)], e.byQName = {}, e.all) e.byQName[e.all[s].qname] = e.all[s];
				for (var i in e.byName = {}, e.all) e.byName[e.all[i].name] = e.all[i]
			}(t, "undefined" == typeof imscNames ? n("./node_modules/imsc/src/main/js/names.js") : imscNames, "undefined" == typeof imscUtils ? n("./node_modules/imsc/src/main/js/utils.js") : imscUtils)
		},
		"./node_modules/imsc/src/main/js/utils.js": function(e, t, n) {
			! function(e) {
				var t = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})?/,
					n = /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/,
					r = /rgba\(\s*(\d+),\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/,
					s = {
						transparent: [0, 0, 0, 0],
						black: [0, 0, 0, 255],
						silver: [192, 192, 192, 255],
						gray: [128, 128, 128, 255],
						white: [255, 255, 255, 255],
						maroon: [128, 0, 0, 255],
						red: [255, 0, 0, 255],
						purple: [128, 0, 128, 255],
						fuchsia: [255, 0, 255, 255],
						magenta: [255, 0, 255, 255],
						green: [0, 128, 0, 255],
						lime: [0, 255, 0, 255],
						olive: [128, 128, 0, 255],
						yellow: [255, 255, 0, 255],
						navy: [0, 0, 128, 255],
						blue: [0, 0, 255, 255],
						teal: [0, 128, 128, 255],
						aqua: [0, 255, 255, 255],
						cyan: [0, 255, 255, 255]
					};
				e.parseColor = function(e) {
					var i, a = null,
						o = s[e.toLowerCase()];
					return void 0 !== o ? a = o : null !== (i = t.exec(e)) ? a = [parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16), void 0 !== i[4] ? parseInt(i[4], 16) : 255] : null !== (i = n.exec(e)) ? a = [parseInt(i[1]), parseInt(i[2]), parseInt(i[3]), 255] : null !== (i = r.exec(e)) && (a = [parseInt(i[1]), parseInt(i[2]), parseInt(i[3]), parseInt(i[4])]), a
				};
				var i = /^((?:\+|\-)?\d*(?:\.\d+)?)(px|em|c|%|rh|rw)$/;
				e.parseLength = function(e) {
					var t, n = null;
					return null !== (t = i.exec(e)) && (n = {
						value: parseFloat(t[1]),
						unit: t[2]
					}), n
				}, e.parseTextShadow = function(t) {
					var n = t.split(","),
						r = [];
					for (var s in n) {
						var i = n[s].split(" ");
						if (1 === i.length && "none" === i[0]) return "none";
						if (i.length > 1 && i.length < 5) {
							var a = [null, null, null, null],
								o = e.parseLength(i.shift());
							if (null === o) return null;
							if (a[0] = o, null === (o = e.parseLength(i.shift()))) return null;
							if (a[1] = o, 0 === i.length) {
								r.push(a);
								continue
							}
							if (null !== (o = e.parseLength(i[0])) && (a[2] = o, i.shift()), 0 === i.length) {
								r.push(a);
								continue
							}
							var u = e.parseColor(i[0]);
							if (null === u) return null;
							a[3] = u, r.push(a)
						}
					}
					return r
				}, e.parsePosition = function(t) {
					var n = t.split(" "),
						r = function(e) {
							return "center" === e || "left" === e || "top" === e || "bottom" === e || "right" === e
						};
					if (n.length > 4) return null;
					for (var s in n)
						if (!r(n[s])) {
							var i = e.parseLength(n[s]);
							if (null === i) return null;
							n[s] = i
						} for (var a = {
							h: {
								edge: "left",
								offset: {
									value: 50,
									unit: "%"
								}
							},
							v: {
								edge: "top",
								offset: {
									value: 50,
									unit: "%"
								}
							}
						}, o = 0; o < n.length;) {
						var u = n[o++];
						if (r(u)) {
							var l = {
								value: 0,
								unit: "%"
							};
							2 !== n.length && o < n.length && !r(n[o]) && (l = n[o++]), "right" === u ? (a.h.edge = u, a.h.offset = l) : "bottom" === u ? (a.v.edge = u, a.v.offset = l) : "left" === u ? a.h.offset = l : "top" === u && (a.v.offset = l)
						} else {
							if (1 !== n.length && 2 !== n.length) return null;
							1 === o ? a.h.offset = u : a.v.offset = u
						}
					}
					return a
				}, e.ComputedLength = function(e, t) {
					this.rw = e, this.rh = t
				}, e.ComputedLength.prototype.toUsedLength = function(e, t) {
					return e * this.rw + t * this.rh
				}, e.ComputedLength.prototype.isZero = function() {
					return 0 === this.rw && 0 === this.rh
				}, e.toComputedLength = function(t, n, r, s, i, a) {
					return "%" === n && s ? new e.ComputedLength(s.rw * t / 100, s.rh * t / 100) : "em" === n && r ? new e.ComputedLength(r.rw * t, r.rh * t) : "c" === n && i ? new e.ComputedLength(t * i.rw, t * i.rh) : "px" === n && a ? new e.ComputedLength(t * a.rw, t * a.rh) : "rh" === n ? new e.ComputedLength(0, t / 100) : "rw" === n ? new e.ComputedLength(t / 100, 0) : null
				}
			}(t)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~dashjs.536210f860c89db757de.js.map
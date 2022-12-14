// https://www.redditstatic.com/desktop2x/ChatMessageInput.f3db0d4fdb9f036d459a.js
// Retrieved at 12/13/2022, 7:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatMessageInput"], {
		"./node_modules/lodash/flatMap.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseFlatten.js"),
				a = s("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return n(a(e, t), 1)
			}
		},
		"./src/chat/helpers/dom.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			}));
			const n = e => t => {
					if (t.preventDefault(), e && "function" == typeof e) return e(t)
				},
				a = e => t => {
					if (t.preventDefault(), t.stopPropagation(), e && "function" == typeof e) return e(t)
				}
		},
		"./src/reddit/actions/chat/liveChatTooltipShowState.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./src/lib/cache/index.ts"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/constants/chat.ts"),
				i = s("./src/reddit/selectors/chat.ts");
			const c = "CHAT__SET_LIVECHAT_TOOLTIP_SHOW_STATE",
				d = e => Object(n.c)(a.r.CHAT, a.A.CHAT_LIVECHAT_ANNOUNCEMENT_TOOLTIP_SHOW_STATE, e),
				l = Object(r.a)(c),
				m = (e, t) => async (s, a) => {
					const r = a(),
						c = Object(i.b)(r);
					if (!o.a[c].includes(e)) return;
					const m = d(t);
					Object(n.d)(m, e, n.a), s(l(e))
				}, u = e => async t => {
					const s = d(e),
						a = Object(n.b)(s);
					a && t(l(a))
				}
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return r
			}));
			const n = "ECONOMICS__ME__ME_DATA_SUCCESS",
				a = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				r = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return u
			})), s.d(t, "a", (function() {
				return h
			}));
			var n = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/makeRequest/index.ts"),
				r = s("./src/config.ts"),
				o = s("./src/reddit/endpoints/governance/requester.ts");
			var i = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/reddit/actions/economics/me/constants.ts");
			const d = Object(i.a)(c.a),
				l = Object(i.a)(c.b),
				m = Object(i.a)(c.c),
				u = e => async (t, s, n) => {
					let {
						apiContext: a
					} = n;
					const i = e && e.includeMemberships || !1,
						c = e && e.forceFetch || !1,
						l = s();
					if (!l.economics.me.fetched || i && !l.economics.me.data.specialMemberships || c) {
						const e = await
						function(e, t) {
							return Object(o.a)(e, {
								method: "get",
								endpoint: `${r.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(a(), i);
						if (e.ok) {
							const s = e.body;
							i && !s.specialMemberships && (s.specialMemberships = {}), t(d(s))
						}
					}
				}, h = () => async (e, t) => {
					const s = t(),
						r = s.economics.me.data;
					if (!r) throw new Error("me data required for copy to be fetched");
					if (!s.economics.pointsCopy.fetched) {
						e(l());
						const t = `https://${r.pointsDocsBaseUrl}v1.json?web`,
							s = await Object(a.b)({
								endpoint: t,
								method: n.ob.GET
							});
						s.ok && s.body && e(m(s.body))
					}
				}
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/reddit/helpers/governanceErrorText/index.ts"),
				r = s("./src/reddit/models/Toast/index.ts");

			function o(e, t) {
				e(Object(n.f)({
					duration: 5e3,
					kind: r.b.Error,
					text: Object(a.a)(t)
				}))
			}
		},
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return A
			})), s.d(t, "b", (function() {
				return P
			})), s.d(t, "a", (function() {
				return U
			})), s.d(t, "c", (function() {
				return F
			})), s.d(t, "e", (function() {
				return R
			})), s.d(t, "d", (function() {
				return H
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/formatApiError/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/actions/upload.ts"),
				l = s("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				m = s("./src/lib/makeApiRequest/index.ts"),
				u = s("./src/lib/makeGqlRequest/index.ts"),
				h = s("./src/lib/omitHeaders/index.ts"),
				p = s("./src/reddit/constants/headers.ts"),
				b = s("./src/redditGQL/operations/CreateMediaUploadLease.json");
			var f = s("./src/reddit/helpers/correlationIdTracker.ts"),
				C = s("./src/reddit/helpers/imagePreview/index.ts"),
				g = s("./src/reddit/helpers/media/index.ts"),
				_ = s("./src/reddit/models/Upload/index.ts"),
				v = s("./src/reddit/selectors/telemetry.ts"),
				E = s("./src/telemetry/index.ts");
			const x = e => ({
				...v.o(e),
				screen: v.cb(e),
				profile: v.T(e),
				subreddit: v.lb(e)
			});
			var O = s("./src/reddit/helpers/trackers/postComposer.ts"),
				j = s("./src/reddit/models/PostCreationForm/index.ts"),
				y = s("./src/reddit/models/Toast/index.ts"),
				I = s("./src/reddit/selectors/postCreations.ts"),
				T = s("./src/reddit/helpers/graphql/normalizeUploadLeaseFromGql/index.ts"),
				S = s("./src/reddit/actions/postCreation/constants.ts"),
				L = s("./src/reddit/actions/postCreation/general.ts");
			const w = Object(i.a)(S.u),
				D = Object(i.a)(S.v),
				N = Object(i.a)(S.t),
				A = e => async (t, s) => {
					t(w());
					const n = e.map(e => {
						let {
							url: s,
							uploadKey: n
						} = e;
						const a = Object(g.b)(Object(g.d)(s), "poster.png");
						return t(M(a, n, !0))
					});
					await Promise.all(n);
					const a = s().uploads,
						r = e.map(e => {
							let {
								uploadKey: t
							} = e;
							return a[t]
						}).find(e => e.status !== _.a.SUCCESS);
					t(r ? N(r.error) : D())
				}, k = (e, t) => ({
					error: t ? {
						type: e,
						fields: [{
							field: "",
							msg: t
						}]
					} : {
						type: e
					}
				});
			const P = "RTE",
				U = "GALLERY",
				M = (e, t, s, a, o, i, l) => async (j, S, L) => {
					let {
						apiContext: w,
						gqlContext: D
					} = L;
					const N = Object(I.h)(S()),
						A = Date.now();
					let P = null,
						U = !1,
						M = !1,
						F = !1;
					const R = e => {
						if (!F && a && U) {
							F = !0;
							const s = S(),
								n = Date.now() - A,
								r = Object(f.c)(f.a.PostComposer);
							M ? (async e => {
								let {
									state: t,
									uploadKey: s,
									assetId: n,
									isCanceled: a,
									fileSource: r,
									uploadDuration: o,
									correlationId: i
								} = e;
								const c = t.uploads[s],
									d = a || c.status === _.a.CANCELED,
									{
										file: l,
										url: m,
										metadata: u,
										error: h
									} = c,
									p = u.mimetype || l.type,
									b = p.startsWith("video/"),
									f = c.status === _.a.SUCCESS;
								let C = "";
								h ? C = JSON.stringify(h) : d && (C = "canceled");
								const g = {
									width: u.width,
									height: u.height,
									duration: u.videoDuration && Math.round(1e3 * u.videoDuration)
								};
								Object(E.a)({
									source: "post_composer",
									action: "upload",
									correlationId: i,
									noun: b ? "video" : "image",
									...x(t),
									actionInfo: {
										...v.d(t),
										success: f,
										...C ? {
											reason: C
										} : {}
									},
									media: {
										mimetype: p,
										uploadDuration: o,
										source: r,
										fileName: l.name,
										size: l.size,
										type: b ? "video" : "image",
										...n ? {
											id: n
										} : {},
										...m ? {
											url: m
										} : {},
										...g
									}
								})
							})({
								state: s,
								uploadKey: t,
								assetId: P,
								isCanceled: e,
								fileSource: a,
								uploadDuration: n,
								correlationId: r
							}) : O.D(s, t)
						}
					};
					return await j(Object(d.l)(e, t, async f => {
						var _, v, E, x;
						U = !0, Object(d.k)(f.id, () => {
							R(!0)
						});
						const {
							error: O,
							metadata: I
						} = await async function(e, t, s, a) {
							const o = s && s.allowedPostTypes,
								i = s && s.name,
								c = await Object(g.h)(e) || e.type,
								d = Object(g.c)(e) || void 0;
							if (!d) return k("UNSUPPORTED_BROWSER");
							const l = {
								localUrl: d,
								mimetype: c,
								size: e.size
							};
							if (!c || !Object(g.k)(c)) return {
								error: {
									type: r.Y
								}
							};
							if (c.startsWith("image/")) {
								if (t && o && !o.images) {
									const e = n.fbt._("Images are not allowed in r/{subredditName}", [n.fbt._param("subredditName", i)], {
										hk: "3C2E7Q"
									});
									return k(r.Y, e)
								}
								if ("image/gif" === c) {
									if (e.size > r.eb) return k(r.O)
								} else if (e.size > r.gb) return k(r.W);
								const s = await Object(C.a)(d);
								if (a && (s.width < a || s.height < a)) {
									const e = n.fbt._("Image must be {min_image_width}x{min_image_height} pixels or larger.", [n.fbt._param("min_image_width", a.toString()), n.fbt._param("min_image_height", a.toString())], {
										hk: "2WFKgs"
									});
									return k(r.V, e)
								}
								l.width = s.width, l.height = s.height
							} else if (c.startsWith("video/")) {
								if (e.size > r.kb) return k(r.vc);
								let t;
								try {
									t = await Object(g.j)(d, !0)
								} catch (m) {
									return k(r.Y)
								}
								if (o) {
									const {
										videos: e,
										images: s
									} = o;
									if (s && !e && t.duration > r.lb) {
										const e = n.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [n.fbt._param("subredditName", i)], {
											hk: "46ULiz"
										});
										return k(r.Y, e)
									}
									if (!s && !e) {
										const e = n.fbt._("Videos are not allowed in r/{subredditName}", [n.fbt._param("subredditName", i)], {
											hk: "4uTUZb"
										});
										return k(r.Y, e)
									}
								}
								if (t.duration > r.jb) {
									const e = n.fbt._("Video is too long. Maximum video length is {duration} minutes.", [n.fbt._param("duration", (r.jb / 60).toString())], {
										hk: "20nB6Q"
									});
									return k(r.Y, e)
								}
								if (t.duration < r.rb) {
									const e = n.fbt._("Video is too short. Minimum video length is {duration} seconds.", [n.fbt._param("duration", r.rb.toString())], {
										hk: "49PSW8"
									});
									return k(r.Y, e)
								}
								if (0 === t.height || 0 === t.width) {
									const e = n.fbt._("Your browser does not support the video codec used for this video. Please try using a different video codec.", null, {
										hk: "1AC0mg"
									});
									return k(r.Y, e)
								}
								if (t.height < r.sb || t.width < r.tb) {
									const e = n.fbt._("Videos must be {min_video_width}x{min_video_height} pixels or larger.", [n.fbt._param("min_video_width", r.tb.toString()), n.fbt._param("min_video_height", r.sb.toString())], {
										hk: "2HSUGl"
									});
									return k(r.Y, e)
								}
								if (e.size / t.duration < r.qb) {
									const e = n.fbt._("Videos must have a bitrate of {min_bitrate}KB/s or larger.", [n.fbt._param("min_bitrate", (r.qb / r.Z).toString())], {
										hk: "1ehgDE"
									});
									return k(r.Y, e)
								}
								l.height = t.height, l.width = t.width, l.videoDuration = t.duration, l.videoFirstFrameUrl = t.firstFrame.dataUrl
							}
							return {
								metadata: l
							}
						}(e, s, N, l);
						if (O || !I) return {
							error: O
						};
						if (j(Object(d.m)({
								key: t,
								metadata: {
									fileSource: a,
									...I
								}
							})), M = !0, o && o(), i) {
							const e = I.mimetype,
								t = e && r.T[e];
							if (e && t) {
								const e = await (async (e, t) => {
									return await Object(u.a)(e, {
										...b,
										variables: {
											input: {
												mimetype: t
											}
										}
									})
								})(D(), t);
								if (e.ok) {
									const t = e.body,
										s = (null === (_ = t.data.createMediaUploadLease) || void 0 === _ ? void 0 : _.uploadLease.uploadLeaseUrl) || "",
										n = Object(T.a)({
											uploadLeaseUrl: s,
											uploadLeaseHeaders: null === (v = t.data.createMediaUploadLease) || void 0 === v ? void 0 : v.uploadLease.uploadLeaseHeaders
										});
									return P = (null === (E = t.data.createMediaUploadLease) || void 0 === E ? void 0 : E.mediaId) || null, {
										uploadLease: n
									}
								} {
									const t = null === (x = e.body.data.createMediaUploadLease) || void 0 === x ? void 0 : x.errors;
									let s = null;
									return t && (s = {
										fields: [{
											field: t[0].__typename || "",
											msg: t[0].message
										}],
										type: t[0].__typename || ""
									}), {
										error: s || void 0
									}
								}
							}
							return j(Object(c.f)({
								kind: y.b.Error,
								text: n.fbt._("Only .jpeg and .png image types are are allowed", null, {
									hk: "30Ms4V"
								}),
								duration: 6e3
							})), {
								error: void 0
							}
						}
						const S = e.name,
							L = await (async (e, t, s) => Object(m.a)(Object(h.a)(e, [p.a]), {
								endpoint: `${e.apiUrl}/api/media/asset.json`,
								method: r.ob.POST,
								data: {
									filepath: t,
									mimetype: s
								}
							}))(w(), S, I.mimetype);
						return L.ok ? (P = L.body.asset.asset_id, {
							uploadLease: L.body.args
						}) : {
							error: L.error || void 0
						}
					}, !0)), R(!1), S().uploads[t] || null
				}, F = (e, t) => async (s, n) => {
					const a = n().uploads[e];
					a && !Object(_.c)(a) && await s(M(a.file, a.key, t, a.metadata.fileSource, void 0))
				}, R = (e, t, s, r, i, d) => async (l, m) => {
					const u = e.map((e, n) => new Promise(async n => {
							const o = Object(_.d)(s, Object(a.a)().slice(-6));
							await l(M(e, o, r, t, () => n({
								uploadKey: o,
								isValid: !0
							}), i, d)), n({
								uploadKey: o,
								isValid: !1
							})
						})),
						h = await Promise.all(u),
						p = h.map(e => e.uploadKey);
					return l(function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
						return async (s, a) => {
							const {
								uploads: r
							} = a(), i = e.map(e => r[e]).filter(e => e.status === _.a.FAILED && !e.metadata.mimetype).map(e => e.error), d = i.length > t ? t - 1 : i.length, l = i.length - d;
							i.slice(0, d).forEach(e => s(Object(c.f)({
								duration: c.a,
								kind: y.b.Error,
								text: Object(o.a)(e)
							}))), l > 0 && s(Object(c.f)({
								duration: c.a,
								kind: y.b.Error,
								text: n.fbt._({
									"*": "Couldn't add {number} more files",
									_1: "Couldn't add 1 more file"
								}, [n.fbt._plural(l, "number")], {
									hk: "2fQwvl"
								})
							}))
						}
					}(p)), h.filter(e => e.isValid).map(e => e.uploadKey)
				}, H = (e, t) => async (s, a) => {
					const r = a(),
						o = Object(I.X)(r),
						{
							items: i
						} = o,
						m = !i.length && 1 === e.length,
						u = Object(I.O)(r) && !m;
					let h = !1,
						p = e;
					if (u) {
						if (Object(j.x)(o)) return void s(Object(c.f)({
							kind: y.b.Error,
							text: n.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						p.some(e => Object(g.n)(e.type)) && s(Object(c.f)({
							duration: c.a,
							kind: y.b.Error,
							text: n.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), p = p.filter(e => Object(g.m)(e.type));
						const e = Math.max(0, l.b - i.length);
						p.length > e && (s(Object(c.f)({
							kind: y.b.Error,
							text: n.fbt._("You have hit the limit of {images_limit} images", [n.fbt._param("images_limit", `${l.b}`)], {
								hk: "6M4kX"
							})
						})), p = p.slice(0, e))
					} else p = p.slice(0, 1), h = !0, s(Object(d.j)(U, !0));
					const b = await s(R(p, t, U, !0));
					if (!b.length) return;
					const f = b.map(e => ({
							uploadKey: e,
							caption: "",
							url: ""
						})),
						C = 0 === i.length;
					s(Object(L.d)({
						...o,
						items: h ? f : [...i, ...f],
						selectedKey: C ? b[0] : b[b.length - 1]
					}))
				}
		},
		"./src/reddit/actions/subredditAutocomplete/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			}));
			const n = "SUBREDDIT_AUTOCOMPLETE__PENDING",
				a = "SUBREDDIT_AUTOCOMPLETE__LOADED",
				r = "SUBREDDIT_AUTOCOMPLETE__FAILED"
		},
		"./src/reddit/actions/upload.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return d
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "m", (function() {
				return _
			})), s.d(t, "k", (function() {
				return I
			})), s.d(t, "l", (function() {
				return S
			})), s.d(t, "i", (function() {
				return L
			})), s.d(t, "j", (function() {
				return w
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/get.js"),
				a = s.n(n),
				r = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/uploadToS3/index.ts"),
				c = s("./src/reddit/models/Upload/index.ts");
			const d = "UPLOAD_PENDING",
				l = "UPLOAD_UPLOADING",
				m = "UPLOAD_METADATA_CHANGED",
				u = "UPLOAD_PROGRESS",
				h = "UPLOAD_SUCCESS",
				p = "UPLOAD_FAILED",
				b = "UPLOAD_CANCELED",
				f = "UPLOAD_REMOVED",
				C = Object(o.a)(d),
				g = Object(o.a)(l),
				_ = Object(o.a)(m),
				v = Object(o.a)(u),
				E = Object(o.a)(h),
				x = Object(o.a)(p),
				O = Object(o.a)(b),
				j = Object(o.a)(f),
				y = new Map,
				I = (e, t) => {
					const s = y.get(e) || [];
					s.push(t), y.set(e, s)
				},
				T = (e, t) => {
					const s = y.get(e);
					s && s.forEach(s => s(e, t)), y.delete(e)
				},
				S = function(e, t, s) {
					let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return async (o, d) => {
						const l = t;
						if (d().uploads[l] && Object(c.c)(d().uploads[l])) return;
						const m = Object(r.a)(),
							u = () => {
								const e = d().uploads[l];
								return !e || e.id !== m || e.status === c.a.CANCELED
							};
						o(C({
							key: l,
							id: m,
							file: e
						}));
						const {
							uploadLease: h,
							error: p
						} = await s(d().uploads[l]);
						if (u()) return;
						if (p || !h) return void o(x({
							key: l,
							error: p
						}));
						let b;
						I(m, () => {
							b && b.abort()
						}), o(g({
							key: l
						}));
						const f = await Object(i.a)(e, h, e => (b = e, n && e.on("progress", e => {
							if (!u() && "upload" === e.direction) {
								const t = {
									percent: e.percent,
									total: e.total,
									uploaded: e.loaded
								};
								o(v({
									key: l,
									progress: t
								}))
							}
						}), e));
						if (b = null, !u())
							if (f.ok) {
								const e = decodeURIComponent(f.body.PostResponse.Location);
								o(E({
									key: l,
									url: e
								}))
							} else {
								const e = a()(f, "body.Error.Message.0"),
									t = {
										type: "ERROR",
										...e ? {
											fields: [{
												field: "0",
												msg: e
											}]
										} : {}
									};
								o(x({
									key: l,
									error: t
								}))
							}
					}
				},
				L = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (s, n) => {
						const a = n().uploads[e];
						a && (T(a.id, t), s(t ? j({
							key: e
						}) : O({
							key: e
						})))
					}
				},
				w = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (s, n) => {
						Object.keys(n().uploads).forEach(n => {
							n.startsWith(e) && s(L(n, t))
						})
					}
				}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3SwKz63oDhqTWK_aG-xnXF",
				Userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				roundedIcon: "qzfpAikXRAwHLMGlL6_5m",
				NewUserpic: "_2Zwmb9SDpYPNT8z3bJMLCX",
				newUserpic: "_2Zwmb9SDpYPNT8z3bJMLCX",
				TrashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				trashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				ProfileIcon: "_2OVsvDCTt2OzgIct4dAykk",
				profileIcon: "_2OVsvDCTt2OzgIct4dAykk"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/config.ts"),
				d = s("./node_modules/lodash/memoize.js"),
				l = s.n(d),
				m = s("./src/lib/constants/index.ts"),
				u = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				h = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				p = s.n(h);
			const b = i.a.div("Userpic", p.a);
			var f = l()(e => {
					let {
						defaultImage: t,
						userId: s
					} = e;
					const {
						processingAvatarImageUrl: n
					} = c.a, r = (e => e.replace(m.Nb.Account + "_", ""))(s), {
						avatar: o,
						color: i
					} = (e => {
						const t = u.length,
							s = parseInt(e, 36),
							n = s % 20 + 1,
							a = Math.floor(s / 20) % t;
						return {
							avatar: ("0" + n).slice(-2),
							color: u[a]
						}
					})(r), d = `${n}/avatar_default_${o}_${i}.png`;
					return a.a.createElement(b, {
						"data-testid": "old-default-icon",
						style: {
							backgroundImage: `url(${d})`,
							backgroundColor: `#${i}`
						}
					})
				}),
				C = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				g = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				_ = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				v = s("./src/reddit/icons/svgs/Remove/index.tsx");
			const E = Object(o.c)({
					account: e => e.user.account
				}),
				x = Object(r.b)(E);
			t.a = i.a.wrapped(x(e => {
				let {
					account: t,
					className: s,
					height: n,
					icon: r,
					isNSFW: o,
					trash: i,
					userId: c,
					width: d
				} = e;
				const l = c || `${null==t?void 0:t.id}`,
					m = {
						height: n || 20,
						width: d || 20,
						minWidth: d || 20
					};
				if (i) return a.a.createElement("div", {
					className: s,
					style: m
				}, a.a.createElement(v.a, {
					className: p.a.TrashIcon
				}));
				const u = t && t.id === c ? t.accountIcon : o ? g.a : null != r ? r : void 0;
				return Object(_.a)(u) ? a.a.createElement("div", {
					className: s,
					style: m
				}, a.a.createElement(C.a, {
					headshot: u
				})) : a.a.createElement("div", {
					className: s,
					style: m
				}, a.a.createElement(f, {
					userId: l,
					defaultImage: u
				}))
			}), "ChatIcon", p.a)
		},
		"./src/reddit/components/CommentsChat/Comment/DeletedComment/index.m.less": function(e, t, s) {
			e.exports = {
				ChatIcon: "Y4elHycQm7QR_6fCrvjzq",
				chatIcon: "Y4elHycQm7QR_6fCrvjzq",
				TrashIcon: "_29fCuEaNwXf3oWvxop579Y",
				trashIcon: "_29fCuEaNwXf3oWvxop579Y",
				DeleteText: "_2Fg7fot2bTwH4aeQhehkz9",
				deleteText: "_2Fg7fot2bTwH4aeQhehkz9",
				isV2Enabled: "_2XcjXctAHWpWD1W3AQ80Ar",
				icon: "TLIhUcY9wWx-TMYDK9qQi",
				label: "_1T1Bs-9BGk1V30l9Xxj6zh"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/DeletedComment/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				c = s("./src/reddit/icons/svgs/Trash3/index.tsx"),
				d = s("./src/reddit/components/CommentsChat/Comment/DeletedComment/index.m.less"),
				l = s.n(d);
			const m = e => {
					let {
						className: t,
						isV2Enabled: s
					} = e;
					return r.a.createElement("div", {
						className: t
					}, s ? r.a.createElement(c.a, {
						className: l.a.TrashIcon
					}) : r.a.createElement(i.a, {
						className: l.a.ChatIcon,
						trash: !0
					}), r.a.createElement("span", {
						className: Object(o.a)(l.a.DeleteText, {
							[l.a.isV2Enabled]: s
						})
					}, n.fbt._("deleted", null, {
						hk: "3NxJy9"
					})))
				},
				u = () => r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: l.a.icon
				}, r.a.createElement(c.a, null)), r.a.createElement("span", {
					className: l.a.label
				}, n.fbt._("This message was deleted", null, {
					hk: "23fI7b"
				})))
		},
		"./src/reddit/components/CommentsChat/Comment/Reply/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2j45BC7mJt89dJHJgKedOn",
				isDeleted: "_3a9maZzcpVpY-ObbePJy1c",
				userIcon: "flM3MSxMp9wK1LunC6g04",
				closeIcon: "p6gNeYY8JA6w2d-pJHmPf",
				author: "_2gJ_h34BkafTE6g1uvPgED",
				commentBody: "_3fPHqFYSkWC7g1-Sps2hXc",
				messageComposer: "bboHgGXDhe78fy-QMNllC"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Reply/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return T
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/chat/helpers/dom.ts"),
				d = s("./src/reddit/components/CommentsChat/Comment/DeletedComment/index.tsx"),
				l = s("./src/reddit/components/RichTextJson/index.tsx"),
				m = s("./src/reddit/components/RichTextJson/elements.tsx"),
				u = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				h = s("./src/reddit/models/RichTextJson/index.ts");
			const p = e => r.a.createElement(m.f, null, e),
				b = e => {
					const t = [],
						s = e.c || [],
						n = s.length;
					for (let a = 0; a < n; a++) {
						const e = s[a];
						t.push(e.e === h.x ? e.t : Object(u.e)(e, {}, a))
					}
					return r.a.createElement(r.a.Fragment, null, t)
				},
				f = e => e.c && e.c.length ? r.a.createElement(r.a.Fragment, null, Object(u.i)(e.c, null, {})) : r.a.createElement("br", null);
			var C = s("./src/reddit/constants/elementClassNames.ts");
			const g = {
				[h.a]: "<animated image>",
				[h.b]: "<quote>",
				[h.c]: "<code block>",
				[h.h]: "<embed>",
				[h.m]: "<image>",
				[h.p]: "<list>",
				[h.A]: "<table>",
				[h.E]: "<video>"
			};
			var _ = e => {
					let {
						className: t,
						content: s
					} = e;
					const n = s.document,
						a = [],
						o = Object(l.c)(n),
						c = Object(l.d)(n);
					if (-1 !== o)
						for (let r = o; r <= c; r++) {
							const e = n[r],
								t = e && g[e.e];
							switch (e.e) {
								case h.l:
									break;
								case h.b:
								case h.c:
								case h.p:
								case h.A:
								case h.m:
								case h.a:
								case h.E:
								case h.h:
									a.push(p(t));
									break;
								case h.k:
									a.push(b(e));
									break;
								case h.v:
									a.push(f(e))
							}
						}
					return r.a.createElement("div", {
						className: Object(i.a)(C.j, t)
					}, a)
				},
				v = s("./src/reddit/components/UserIcon/index.tsx"),
				E = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				x = s("./src/reddit/icons/svgs/CloseV2/index.tsx"),
				O = s("./src/reddit/selectors/comments.ts"),
				j = s("./src/reddit/selectors/commentSelector.ts"),
				y = s("./src/reddit/components/CommentsChat/Comment/Reply/index.m.less"),
				I = s.n(y);
			const T = e => {
				let {
					commentId: t,
					className: s,
					isV2Enabled: a = !1,
					isMessageComposer: l = !1,
					onReplyClick: m
				} = e;
				const u = Object(o.e)(e => Object(j.c)(e, {
						commentId: t
					})),
					h = Object(o.e)(e => Object(O.m)(e, {
						commentId: t
					}));
				return u ? u.isDeleted ? r.a.createElement("div", {
					className: Object(i.a)(I.a.container, I.a.isDeleted, s)
				}, r.a.createElement(d.b, {
					isV2Enabled: a
				})) : r.a.createElement("a", {
					className: Object(i.a)(I.a.container, s, {
						[I.a.messageComposer]: l
					}),
					href: h,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: Object(c.a)(() => m(u.id))
				}, r.a.createElement(v.a, {
					className: Object(i.a)(I.a.userIcon),
					iconUrl: u.profileImage || u.authorIconImage,
					userName: u.author,
					isNSFW: Boolean(u.profileOver18 || u.authorIconIsNSFW)
				}), r.a.createElement("span", {
					className: I.a.author
				}, l ? n.fbt._("Replying to u/{username}:", [n.fbt._param("username", u.author)], {
					hk: "15ByZb"
				}) : u.author), r.a.createElement(_, {
					className: I.a.commentBody,
					content: Object(E.a)(u)
				}), l && r.a.createElement(x.a, {
					className: I.a.closeIcon
				})) : null
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/index.m.less": function(e, t, s) {
			e.exports = {
				v2: "_1wX7EkMv0Avw75sEfz3Qyx",
				FormWrapper: "mfKS0B5uqUX6PXcuSjTop",
				formWrapper: "mfKS0B5uqUX6PXcuSjTop",
				V2ChatPost: "_2gIG6JZYU1cqtNUDcj9p1x",
				v2ChatPost: "_2gIG6JZYU1cqtNUDcj9p1x",
				Form: "_76oPIY5CZD4GaQnn-06zO",
				form: "_76oPIY5CZD4GaQnn-06zO",
				RichTextEditor: "_2Zrjn5GTHiDwHULWCseamI",
				richTextEditor: "_2Zrjn5GTHiDwHULWCseamI",
				inputLine: "_2rpcmnaHqKJnQeHI6-RZU8",
				submitButton: "_1CLqZSQ6jz0CFFB9he7ZtW",
				spamTimeout: "_3IH6D8ThGGGzPY0gTh7ctb",
				Editing: "CA5bQ-3lhJvw_xfOAOs4K",
				editing: "CA5bQ-3lhJvw_xfOAOs4K",
				SmallChatUserIcon: "_1qnAOkiRLjELVt-lGR1N2O",
				smallChatUserIcon: "_1qnAOkiRLjELVt-lGR1N2O",
				ChatButton: "BtTZ62LYQAh6Ezp2xw_4R",
				chatButton: "BtTZ62LYQAh6Ezp2xw_4R",
				leftPad: "_2nnsSXE8H28qTe0cmiHlbb",
				v2ChatPostButton: "_23u5-3OLMKFq7xMrqNY9Wk",
				isV2ChatPost: "_1Hzb3asSDcxQPD8y3wsKaY",
				V2ChatPostFocusableContent: "_1s9IEAwL1pv1FFcX8Qtbzd",
				v2ChatPostFocusableContent: "_1s9IEAwL1pv1FFcX8Qtbzd",
				RichTextJson: "_2i9z4_kONlAq_kaKny5o8A",
				richTextJson: "_2i9z4_kONlAq_kaKny5o8A",
				isEmbeddedLiveChat: "_2oPecgenjFelRYg0_W7b9R"
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/lodash/noop.js"),
				r = s.n(a),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/models/PostDraft/index.ts"),
				u = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/loadWithRetries/index.ts")),
				h = s("./src/reddit/actions/chat/init.ts");
			const p = () => Object(u.a)(() => Promise.all([s.e("vendors~Chat~RedesignChat"), s.e("Chat~RedesignChat"), s.e("RedesignChat")]).then(s.bind(null, "./src/chat/actions/liveChat/index.ts"))).then(e => e.fetchLiveChats);
			var b = s("./src/reddit/actions/chat/liveChatTooltipShowState.ts"),
				f = s("./src/reddit/actions/comment/authoring.ts"),
				C = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				g = s("./src/reddit/components/CommentsChat/Comment/Reply/index.tsx");
			const _ = e => {
				let {
					durationSec: t,
					onTimeout: s
				} = e;
				const [n, a] = Object(o.useState)(t);
				Object(o.useEffect)(() => {
					if (n <= 0) return void s();
					const e = setTimeout(() => a(n - 1), 1e3);
					return () => clearTimeout(e)
				}, [n, s]);
				const r = Math.floor(n / 60),
					c = n - 60 * r;
				return i.a.createElement("span", {
					"data-testid": "inline-timer-text"
				}, r, ":", c > 9 ? c : `0${c}`)
			};
			var v = s("./src/reddit/components/RichTextEditor/index.tsx"),
				E = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				x = s("./src/reddit/constants/chat.ts"),
				O = s("./src/reddit/controls/Button/index.tsx"),
				j = s("./src/reddit/helpers/richTextEditor/index.ts"),
				y = s("./src/reddit/icons/fonts/Clock/index.tsx"),
				I = s("./src/reddit/icons/svgs/Close/index.tsx"),
				T = s("./src/reddit/icons/svgs/Send/index.tsx"),
				S = s("./src/reddit/icons/svgs/Send2/index.tsx"),
				L = s("./src/reddit/models/Post/index.ts"),
				w = s("./src/reddit/models/PostCreationForm/index.ts"),
				D = s("./src/reddit/selectors/chatPost.ts"),
				N = s("./src/reddit/selectors/comments.ts"),
				A = s("./src/reddit/selectors/posts.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				P = s("./src/lib/constants/index.ts"),
				U = s("./src/lib/makeGqlRequest/index.ts"),
				M = s("./src/redditGQL/operations/CreateLiveChatAssociation.json");
			var F = s("./src/reddit/components/CommentsChat/MessageInput/index.m.less"),
				R = s.n(F),
				H = s("./src/reddit/contexts/PageLayer/index.tsx"),
				B = s("./src/reddit/helpers/chat/isEmbeddedLiveChat.ts"),
				K = s("./src/reddit/helpers/trackers/commentsChat.ts"),
				V = s("./src/reddit/selectors/experiments/chat.ts"),
				W = s("./src/redditGQL/types.ts");
			const q = "chat_submission_from_rte",
				Y = 15,
				G = 15e3,
				z = Object(H.v)(),
				$ = Object(c.b)(() => Object(d.c)({
					draft: N.i,
					errorMsgs: N.M,
					errorType: N.N,
					hasError: N.v,
					isChatPost: D.d,
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					post: A.G,
					isLiveChatInChatTabEnabled: V.b,
					currentUserId: k.k,
					isTalkPost: Object(d.a)(A.G, e => Object(L.x)(e)),
					isLiveChatThreadingEnabled: V.d
				}), (e, t) => {
					let {
						isEditing: s,
						comment: n,
						commentsPageKey: a,
						draftKey: r,
						postId: o,
						replyComment: i,
						scrollToBottom: c
					} = t;
					return {
						dispatchSubmit: async (t, i, d, l) => {
							s && n ? await e(Object(f.j)({
								id: n.id,
								commentsPageKey: a,
								draftKey: r,
								formData: t
							})) : d ? e(Object(f.o)({
								commentsPageKey: a,
								draftKey: r,
								parentCommentDepth: d.depth,
								parentCommentId: d.id,
								formData: t,
								editorMode: i
							})) : await e(Object(f.q)({
								postId: o,
								commentsPageKey: a,
								draftKey: r,
								formData: t,
								editorMode: i,
								disableAutofocus: !0
							})), c && c()
						},
						onCancelEdit: () => n && e(Object(f.d)({
							commentId: n.id,
							commentsPageKey: a
						})),
						closeReply: () => i && e(Object(f.b)({
							parentCommentId: i.id,
							commentsPageKey: a
						})),
						clearSubmitError: t => e(Object(f.a)({
							draftKey: t
						})),
						createChatTabAssociation: t => e((e => (t, s, n) => {
							let {
								gqlContext: a
							} = n;
							return Object(U.a)(a(), {
								...M,
								variables: {
									input: e
								}
							})
						})(t)),
						setLiveChatTooltipShowState: (t, s) => e(Object(b.c)(t, s)),
						fetchLiveChatPosts: () => e((() => async (e, t) => {
							const [{
								chatStore: s
							}, n] = await Promise.all([Object(h.c)(e, t), p()]);
							s.dispatch(n())
						})())
					}
				});
			class Z extends i.a.Component {
				constructor(e) {
					super(e), this.showLiveChatTooltipIfCreatedAssociation = () => {
						this.props.currentUserId && this.state.hasCreatedLiveChatAssociation && this.props.setLiveChatTooltipShowState(x.b.IS_SHOWING, this.props.currentUserId)
					}, this.focusOnForm = () => this.editor && this.editor.focus(), this.setRTEComponentRef = e => this.editor = e, this.handleCancel = e => {
						e.preventDefault(), this.props.onCancelEdit && this.props.onCancelEdit()
					}, this.handleChange = (e, t) => {
						this.state.hasChanged && (t = this.state.hasChanged), t && e.isBound && (t = Boolean(t && e.editorState.getCurrentContent().getPlainText().trim())), this.setState(() => ({
							rteState: e,
							hasChanged: t
						}))
					}, this.handleFocus = () => {
						this.props.onFocusMessageInput && this.props.onFocusMessageInput()
					}, this.handleSubmit = e => {
						e.preventDefault(), this.onSubmit()
					}, this.onSubmit = () => {
						const {
							replyComment: e,
							isLiveChatThreadingEnabled: t,
							dispatchSubmit: s,
							sendEvent: n
						} = this.props;
						if (this.canSubmit()) {
							const n = {
								commentMode: w.i.RICH_TEXT,
								draftType: m.c.replyToComment,
								rteState: this.state.rteState,
								hasFocus: !0,
								text: ""
							};
							this.cleanInputForm(), s(n, w.i.RICH_TEXT, e, t), setTimeout(() => this.focusOnForm(), 50), this.isAllowedToCreateLiveChatAssociation() && this.associationTimerId && !this.state.messageSent && (this.props.createChatTabAssociation({
								postId: this.props.postId,
								engagementType: W.q.Participated
							}), clearTimeout(this.associationTimerId), this.setState({
								messageSent: !0,
								hasCreatedLiveChatAssociation: !0
							}), !this.isEmbeddedLiveChat() && this.props.fetchLiveChatPosts())
						}
						e && (n(Object(K.d)(e.id)), t && n(Object(K.j)(e.id)))
					}, this.canSubmit = () => Boolean(!this.props.pending && this.state.hasChanged && !this.state.showError && !this.state.spamTimeoutDraftKey), this.state = {
						hasChanged: !1,
						showError: e.hasError,
						rteState: e.isEditing && e.comment ? E.a.createInitial(e.comment.media.richtextContent) : E.a.createInitial(),
						spamTimeoutDraftKey: null,
						messageSent: !1,
						hasCreatedLiveChatAssociation: !1
					}
				}
				isReplyCommentChanged(e) {
					const {
						replyComment: t
					} = this.props;
					return (e.replyComment && e.replyComment.id) !== (t && t.id)
				}
				shouldComponentUpdate(e, t) {
					return t.rteState.editorKey !== this.state.rteState.editorKey || t.spamTimeoutDraftKey !== this.state.spamTimeoutDraftKey || t.hasChanged !== this.state.hasChanged || t.showError !== this.state.showError || e.pending !== this.props.pending || e.postId !== this.props.postId || this.isReplyCommentChanged(e)
				}
				componentDidMount() {
					this.isAllowedToCreateLiveChatAssociation() && (this.associationTimerId = setTimeout(() => {
						this.props.createChatTabAssociation({
							postId: this.props.postId,
							engagementType: W.q.Previewed
						}), this.setState({
							hasCreatedLiveChatAssociation: !0
						}), !this.isEmbeddedLiveChat() && this.props.fetchLiveChatPosts()
					}, G), window.addEventListener("beforeunload", this.showLiveChatTooltipIfCreatedAssociation))
				}
				UNSAFE_componentWillReceiveProps(e) {
					!this.props.isEditing && this.props.draft && this.props.draft.rteState && e.draft && null === e.draft.rteState && this.cleanInputForm(), this.isReplyCommentChanged(e) && e.replyComment && this.focusOnForm(), e.hasError !== this.props.hasError && this.setState({
						showError: e.hasError
					})
				}
				componentDidUpdate(e) {
					e.pending && !this.props.pending && this.focusOnForm(), this.props.isChatPost && this.props.errorType === P.L.RATELIMIT && e.errorType !== this.props.errorType && (this.props.sendEvent(Object(K.e)(this.props.postId)), this.setState({
						spamTimeoutDraftKey: this.props.draftKey
					}))
				}
				componentWillUnmount() {
					this.state.spamTimeoutDraftKey && this.props.sendEvent(Object(K.a)(this.props.postId)), this.isAllowedToCreateLiveChatAssociation() && (this.showLiveChatTooltipIfCreatedAssociation(), this.associationTimerId && clearTimeout(this.associationTimerId), window.removeEventListener("beforeunload", this.showLiveChatTooltipIfCreatedAssociation))
				}
				isAllowedToCreateLiveChatAssociation() {
					return this.props.isLiveChatInChatTabEnabled && !this.props.isTalkPost
				}
				isEmbeddedLiveChat() {
					return this.props.pageLayer && Object(B.b)(this.props.pageLayer)
				}
				cleanInputForm() {
					this.setState({
						rteState: E.a.createInitial()
					})
				}
				render() {
					var e;
					const {
						isV2: t,
						closeReply: s,
						errorMsgs: a,
						errorType: o,
						isEditing: c,
						pending: d,
						replyComment: m,
						isEmbeddedLiveChat: u,
						isLiveChatThreadingEnabled: h
					} = this.props, p = n.fbt._("Send a message (use the Enter key)", null, {
						hk: "3yojgj"
					}), b = o === P.L.RATELIMIT && parseInt(null === (e = null == a ? void 0 : a[0]) || void 0 === e ? void 0 : e.replace(/\D/g, "")) || Y;
					return h && (null == m ? void 0 : m.isDeleted) ? null : i.a.createElement("div", {
						className: Object(l.a)(R.a.FormWrapper, {
							[R.a.v2]: t,
							[R.a.V2ChatPost]: t && !c
						})
					}, !!this.state.spamTimeoutDraftKey && i.a.createElement("p", {
						className: R.a.spamTimeout
					}, n.fbt._("Time until you can message", null, {
						hk: "3mkJ7J"
					}), " ", i.a.createElement(_, {
						durationSec: b,
						onTimeout: () => {
							this.props.clearSubmitError(this.state.spamTimeoutDraftKey), this.setState({
								spamTimeoutDraftKey: null
							})
						}
					}), i.a.createElement(y.a, null)), !c && m && !h && i.a.createElement(g.a, {
						commentId: m.id,
						isMessageComposer: !0,
						onReplyClick: s
					}), i.a.createElement("div", {
						className: R.a.inputLine
					}, i.a.createElement("form", {
						className: Object(l.a)(R.a.Form, {
							[R.a.Editing]: c
						}),
						onSubmit: this.handleSubmit,
						onReset: this.handleCancel
					}, !t && i.a.createElement(Q, {
						isEditing: !!c
					}), i.a.createElement(v.a, {
						className: Object(l.a)(R.a.RichTextEditor, {
							[R.a.Editing]: c,
							[R.a.isV2ChatPost]: t,
							[R.a.isEmbeddedLiveChat]: u
						}),
						focusableContentRTEClassName: Object(l.a)({
							[R.a.V2ChatPostFocusableContent]: t
						}),
						dataTestId: q,
						editorType: j.a.Comment,
						initialMinHeight: 20,
						initialHeight: void 0,
						rteState: this.state.rteState,
						rteRef: this.setRTEComponentRef,
						onChange: this.handleChange,
						onFocus: this.handleFocus,
						onSubmit: this.onSubmit,
						placeholderText: p,
						readOnly: d,
						showSubmitButton: !1,
						submitButtonClassName: Object(l.a)(R.a.insetSubmitButton, R.a.submitButton),
						submitOnEnter: !0,
						trackToolbarClick: r.a,
						hideToolbar: !0,
						noBorder: !0,
						isChatPost: !0
					}), c && i.a.createElement(O.e, {
						className: Object(l.a)(R.a.ChatButton),
						type: "reset"
					}, i.a.createElement(I.a, null)), i.a.createElement(O.e, {
						className: Object(l.a)(R.a.ChatButton, {
							[R.a.v2ChatPostButton]: !c && t
						}),
						type: "submit",
						disabled: !this.canSubmit(),
						"aria-label": n.fbt._("send a message", null, {
							hk: "4bL65Y"
						})
					}, t ? i.a.createElement(S.a, null) : i.a.createElement(T.a, null)))))
				}
			}
			const Q = e => {
				let {
					isEditing: t
				} = e;
				return t ? i.a.createElement(C.a, {
					className: R.a.SmallChatUserIcon,
					height: 20,
					width: 20
				}) : i.a.createElement(C.a, {
					height: 25,
					width: 25
				})
			};
			t.default = z($(Z))
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return a
			}));
			const n = 20,
				a = 180
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				d = s("./src/reddit/selectors/user.ts"),
				l = s("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				m = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				u = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				h = s("./src/reddit/components/UserIcon/UserIcon.m.less"),
				p = s.n(h);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const f = Object(i.c)({
					currentUser: d.m,
					isNightMode: d.fb,
					isPresenceUserPrefEnabled: d.X,
					shouldHideNSFW: d.H
				}),
				C = Object(o.b)(f);
			t.a = C(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: s,
					isPresenceUserPrefEnabled: a,
					wrapperClassName: o,
					...i
				} = e, d = Object(c.a)(null == t ? void 0 : t.accountIcon);
				return r.a.createElement("div", {
					className: Object(n.a)(p.a.currentUserIconWrapper, o)
				}, d ? r.a.createElement(m.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : r.a.createElement(u.b, b({}, i, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), s && r.a.createElement(l.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/constants/chat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			}));
			var n;
			! function(e) {
				e.None = "none", e.Compact = "compact", e.Full = "full_screen"
			}(n || (n = {}));
			var a, r;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(a || (a = {})),
			function(e) {
				e.NEVER_SHOWN = "never_shown", e.IS_SHOWING = "is_showing", e.DISMISSED = "dismissed"
			}(r || (r = {}));
			const o = {
				[r.NEVER_SHOWN]: [r.IS_SHOWING, r.DISMISSED],
				[r.IS_SHOWING]: [r.DISMISSED],
				[r.DISMISSED]: []
			}
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/config.ts"),
				a = s("./src/reddit/endpoints/governance/requester.ts");
			async function r(e, t, s) {
				const r = Object(a.a)(e, {
						headers: {
							"X-HTTP-Method-Override": "GET"
						},
						method: "post",
						endpoint: `${n.a.metaUrl}/badges/${t}`,
						data: {
							selected: !0,
							users: s
						}
					}),
					o = await r;
				if (o.ok) {
					const e = {},
						t = {},
						s = o.body;
					return Object.keys(s).forEach(n => {
						const a = s[n];
						t[n] = a, e[a.userId] || (e[a.userId] = []), e[a.userId].push(a.id)
					}), {
						...o,
						body: {
							badges: t,
							usersAppliedBadges: e
						}
					}
				}
				return o
			}
			async function o(e, t, s) {
				const r = await Object(a.a)(e, {
					method: "get",
					endpoint: `${n.a.metaUrl}/badges/${t}?users=${s}`
				});
				if (r.ok) {
					const e = {},
						t = [],
						s = r.body;
					return Object.keys(s).forEach(n => {
						const a = s[n];
						e[n] = a, t.push(a.id)
					}), {
						...r,
						body: {
							badges: e,
							userOwnedBadges: t
						}
					}
				}
				return r
			}

			function i(e, t, s) {
				let r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
				return Object(a.a)(e, {
					method: "patch",
					endpoint: `${n.a.metaUrl}/badges/${t}/${s}`,
					data: {
						selected: r
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return c
			}));
			var n = s("./src/config.ts"),
				a = s("./src/reddit/endpoints/governance/requester.ts");

			function r(e, t) {
				return Object(a.a)(e, {
					method: "get",
					endpoint: `${n.a.metaUrl}/products/${t}?types=badge`
				})
			}

			function o(e, t) {
				return Object(a.a)(e, {
					method: "get",
					endpoint: `${n.a.metaUrl}/products/${t}?types=badge,membership`
				})
			}

			function i(e, t) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: `${n.a.metaUrl}/orders`,
					data: t
				})
			}

			function c(e, t) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: `${n.a.metaUrl}/orders`,
					data: {
						currency: "usd",
						price: t.price,
						products: t.products,
						providerArgs: {
							paymentNonce: t.nonce
						},
						providerName: "braintree",
						subredditId: t.subredditId
					}
				})
			}
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js");

			function a(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function r(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(a).join(" ") : n.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function o(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/icons/fonts/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => a.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("history", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/svgs/CloseV2/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", r({
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("path", {
				d: "M11.065 1.46521L10.5346 0.934814L5.99977 5.46961L1.46497 0.934814L0.93457 1.46521L5.46937 6.00001L0.93457 10.5348L1.46497 11.0652L5.99977 6.53041L10.5346 11.0652L11.065 10.5348L6.53017 6.00001L11.065 1.46521Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement("g", null, a.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/Send2/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 24 24",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M22.6559 10.8L2.39994 0.660011C2.15389 0.5293 1.87278 0.479801 1.59687 0.5186C1.32096 0.557399 1.06441 0.682508 0.863944 0.876011C0.656797 1.06387 0.51403 1.31216 0.455877 1.5857C0.397725 1.85923 0.427136 2.14413 0.539944 2.40001L4.58394 12L0.539944 21.6C0.429918 21.8544 0.401998 22.1368 0.460075 22.4078C0.518153 22.6789 0.659334 22.925 0.863944 23.112C1.10992 23.347 1.43582 23.4799 1.77594 23.484C1.99315 23.4934 2.20883 23.4437 2.39994 23.34L22.6559 13.2C22.8781 13.088 23.0648 12.9165 23.1952 12.7046C23.3256 12.4927 23.3947 12.2488 23.3947 12C23.3947 11.7512 23.3256 11.5073 23.1952 11.2954C23.0648 11.0836 22.8781 10.9121 22.6559 10.8Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Trash3/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return a.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 16"
				}, a.a.createElement("g", null, a.a.createElement("path", {
					d: "M12.6004 4.84721L13.5996 4.91361L12.9908 14.0664C12.9841 14.5896 12.7788 15.0907 12.4165 15.4683C12.0543 15.8458 11.5621 16.0716 11.0396 16.1H4.95961C4.43817 16.0715 3.94695 15.8462 3.58511 15.4697C3.22327 15.0932 3.01774 14.5934 3.01001 14.0712L2.39961 4.91361L3.39801 4.84721L4.00681 14C4.00283 14.2684 4.09775 14.5288 4.27347 14.7317C4.44919 14.9345 4.69343 15.0657 4.95961 15.1H11.0396C11.3064 15.0651 11.551 14.9331 11.7267 14.7293C11.9025 14.5256 11.997 14.2642 11.9924 13.9952L12.6004 4.84721ZM14.3996 2.40001V3.40001H1.59961V2.40001H4.79961V2.10001C4.82803 1.51721 5.08582 0.969319 5.51672 0.575891C5.94762 0.182464 6.51664 -0.0245568 7.09961 7.87831e-06H8.89961C9.48258 -0.0245568 10.0516 0.182464 10.4825 0.575891C10.9134 0.969319 11.1712 1.51721 11.1996 2.10001V2.40001H14.3996ZM5.79961 2.40001H10.1996V2.10001C10.1705 1.78279 10.0179 1.48972 9.77473 1.28396C9.53155 1.0782 9.21727 0.976221 8.89961 1.00001H7.09961C6.78195 0.976221 6.46767 1.0782 6.22449 1.28396C5.98132 1.48972 5.82873 1.78279 5.79961 2.10001V2.40001Z",
					fill: "inherit"
				})))
			}
		},
		"./src/reddit/selectors/chat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/reselect/es/index.js");
			const a = e => !(e.chat.isInited || e.chat.unread.api.pending),
				r = e => e.chat.liveChatTooltipShowState,
				o = Object(n.a)((e, t) => t, e => e.chat.activeUserCountByLiveChatId, (e, t) => t[e])
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatMessageInput.f3db0d4fdb9f036d459a.js.map
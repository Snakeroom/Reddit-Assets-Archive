// https://www.redditstatic.com/desktop2x/ChatMessageInput.bd4e192b9f83964bdbe3.js
// Retrieved at 5/25/2023, 12:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatMessageInput"], {
		"./node_modules/draft-js/dist/Draft.css": function(e, t, s) {},
		"./node_modules/lodash/_arrayReduceRight.js": function(e, t) {
			e.exports = function(e, t, s, n) {
				var o = null == e ? 0 : e.length;
				for (n && o && (s = e[--o]); o--;) s = t(s, e[o], o, e);
				return s
			}
		},
		"./node_modules/lodash/_baseEachRight.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseForOwnRight.js"),
				o = s("./node_modules/lodash/_createBaseEach.js")(n, !0);
			e.exports = o
		},
		"./node_modules/lodash/_baseExtremum.js": function(e, t, s) {
			var n = s("./node_modules/lodash/isSymbol.js");
			e.exports = function(e, t, s) {
				for (var o = -1, a = e.length; ++o < a;) {
					var r = e[o],
						i = t(r);
					if (null != i && (void 0 === d ? i == i && !n(i) : s(i, d))) var d = i,
						c = r
				}
				return c
			}
		},
		"./node_modules/lodash/_baseFilter.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var s = [];
				return n(e, (function(e, n, o) {
					t(e, n, o) && s.push(e)
				})), s
			}
		},
		"./node_modules/lodash/_baseForOwnRight.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseForRight.js"),
				o = s("./node_modules/lodash/keys.js");
			e.exports = function(e, t) {
				return e && n(e, t, o)
			}
		},
		"./node_modules/lodash/_baseForRight.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_createBaseFor.js")(!0);
			e.exports = n
		},
		"./node_modules/lodash/_baseGt.js": function(e, t) {
			e.exports = function(e, t) {
				return e > t
			}
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var s = Math.ceil,
				n = Math.max;
			e.exports = function(e, t, o, a) {
				for (var r = -1, i = n(s((t - e) / (o || 1)), 0), d = Array(i); i--;) d[a ? i : ++r] = e, e += o;
				return d
			}
		},
		"./node_modules/lodash/_baseWhile.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseSlice.js");
			e.exports = function(e, t, s, o) {
				for (var a = e.length, r = o ? a : -1;
					(o ? r-- : ++r < a) && t(e[r], r, e););
				return s ? n(e, o ? 0 : r, o ? r + 1 : a) : n(e, o ? r + 1 : 0, o ? a : r)
			}
		},
		"./node_modules/lodash/_charsEndIndex.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseIndexOf.js");
			e.exports = function(e, t) {
				for (var s = e.length; s-- && n(t, e[s], 0) > -1;);
				return s
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseRange.js"),
				o = s("./node_modules/lodash/_isIterateeCall.js"),
				a = s("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, s, r) {
					return r && "number" != typeof r && o(t, s, r) && (s = r = void 0), t = a(t), void 0 === s ? (s = t, t = 0) : s = a(s), r = void 0 === r ? t < s ? 1 : -1 : a(r), n(t, s, r, e)
				}
			}
		},
		"./node_modules/lodash/_escapeHtmlChar.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_basePropertyOf.js")({
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;"
			});
			e.exports = n
		},
		"./node_modules/lodash/chunk.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseSlice.js"),
				o = s("./node_modules/lodash/_isIterateeCall.js"),
				a = s("./node_modules/lodash/toInteger.js"),
				r = Math.ceil,
				i = Math.max;
			e.exports = function(e, t, s) {
				t = (s ? o(e, t, s) : void 0 === t) ? 1 : i(a(t), 0);
				var d = null == e ? 0 : e.length;
				if (!d || t < 1) return [];
				for (var c = 0, l = 0, u = Array(r(d / t)); c < d;) u[l++] = n(e, c, c += t);
				return u
			}
		},
		"./node_modules/lodash/dropRightWhile.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseIteratee.js"),
				o = s("./node_modules/lodash/_baseWhile.js");
			e.exports = function(e, t) {
				return e && e.length ? o(e, n(t, 3), !0, !0) : []
			}
		},
		"./node_modules/lodash/escape.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_escapeHtmlChar.js"),
				o = s("./node_modules/lodash/toString.js"),
				a = /[&<>"']/g,
				r = RegExp(a.source);
			e.exports = function(e) {
				return (e = o(e)) && r.test(e) ? e.replace(a, n) : e
			}
		},
		"./node_modules/lodash/filter.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayFilter.js"),
				o = s("./node_modules/lodash/_baseFilter.js"),
				a = s("./node_modules/lodash/_baseIteratee.js"),
				r = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (r(e) ? n : o)(e, a(t, 3))
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseFlatten.js"),
				o = s("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return n(o(e, t), 1)
			}
		},
		"./node_modules/lodash/includes.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseIndexOf.js"),
				o = s("./node_modules/lodash/isArrayLike.js"),
				a = s("./node_modules/lodash/isString.js"),
				r = s("./node_modules/lodash/toInteger.js"),
				i = s("./node_modules/lodash/values.js"),
				d = Math.max;
			e.exports = function(e, t, s, c) {
				e = o(e) ? e : i(e), s = s && !c ? r(s) : 0;
				var l = e.length;
				return s < 0 && (s = d(l + s, 0)), a(e) ? s <= l && e.indexOf(t, s) > -1 : !!l && n(e, t, s) > -1
			}
		},
		"./node_modules/lodash/maxBy.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseExtremum.js"),
				o = s("./node_modules/lodash/_baseGt.js"),
				a = s("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return e && e.length ? n(e, a(t, 2), o) : void 0
			}
		},
		"./node_modules/lodash/range.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_createRange.js")();
			e.exports = n
		},
		"./node_modules/lodash/reduceRight.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduceRight.js"),
				o = s("./node_modules/lodash/_baseEachRight.js"),
				a = s("./node_modules/lodash/_baseIteratee.js"),
				r = s("./node_modules/lodash/_baseReduce.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var d = i(e) ? n : r,
					c = arguments.length < 3;
				return d(e, a(t, 4), s, c, o)
			}
		},
		"./node_modules/lodash/takeWhile.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseIteratee.js"),
				o = s("./node_modules/lodash/_baseWhile.js");
			e.exports = function(e, t) {
				return e && e.length ? o(e, n(t, 3)) : []
			}
		},
		"./node_modules/lodash/trimEnd.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseToString.js"),
				o = s("./node_modules/lodash/_castSlice.js"),
				a = s("./node_modules/lodash/_charsEndIndex.js"),
				r = s("./node_modules/lodash/_stringToArray.js"),
				i = s("./node_modules/lodash/toString.js"),
				d = s("./node_modules/lodash/_trimmedEndIndex.js");
			e.exports = function(e, t, s) {
				if ((e = i(e)) && (s || void 0 === t)) return e.slice(0, d(e) + 1);
				if (!e || !(t = n(t))) return e;
				var c = r(e),
					l = a(c, r(t)) + 1;
				return o(c, 0, l).join("")
			}
		},
		"./src/chat/helpers/dom.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			}));
			const n = e => t => {
					if (t.preventDefault(), e && "function" == typeof e) return e(t)
				},
				o = e => t => {
					if (t.preventDefault(), t.stopPropagation(), e && "function" == typeof e) return e(t)
				}
		},
		"./src/reddit/actions/chat/liveChatTooltipShowState.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			}));
			var n = s("./src/lib/cache/index.ts"),
				o = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/constants/chat.ts"),
				i = s("./src/reddit/selectors/chat.ts");
			const d = "CHAT__SET_LIVECHAT_TOOLTIP_SHOW_STATE",
				c = e => Object(n.c)(o.r.CHAT, o.A.CHAT_LIVECHAT_ANNOUNCEMENT_TOOLTIP_SHOW_STATE, e),
				l = Object(a.a)(d),
				u = (e, t) => async (s, o) => {
					const a = o(),
						d = Object(i.b)(a);
					if (!r.a[d].includes(e)) return;
					const u = c(t);
					Object(n.d)(u, e, n.a), s(l(e))
				}, m = e => async t => {
					const s = c(e),
						o = Object(n.b)(s);
					o && t(l(o))
				}
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			}));
			const n = "ECONOMICS__ME__ME_DATA_SUCCESS",
				o = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				a = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return m
			})), s.d(t, "a", (function() {
				return h
			}));
			var n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeRequest/index.ts"),
				a = s("./src/config.ts"),
				r = s("./src/reddit/endpoints/governance/requester.ts");
			var i = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/reddit/actions/economics/me/constants.ts");
			const c = Object(i.a)(d.a),
				l = Object(i.a)(d.b),
				u = Object(i.a)(d.c),
				m = e => async (t, s, n) => {
					let {
						apiContext: o
					} = n;
					const i = e && e.includeMemberships || !1,
						d = e && e.forceFetch || !1,
						l = s();
					if (!l.economics.me.fetched || i && !l.economics.me.data.specialMemberships || d) {
						const e = await
						function(e, t) {
							return Object(r.a)(e, {
								method: "get",
								endpoint: `${a.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(o(), i);
						if (e.ok) {
							const s = e.body;
							i && !s.specialMemberships && (s.specialMemberships = {}), t(c(s))
						}
					}
				}, h = () => async (e, t) => {
					const s = t(),
						a = s.economics.me.data;
					if (!a) throw new Error("me data required for copy to be fetched");
					if (!s.economics.pointsCopy.fetched) {
						e(l());
						const t = `https://${a.pointsDocsBaseUrl}v1.json?web`,
							s = await Object(o.b)({
								endpoint: t,
								method: n.pb.GET
							});
						s.ok && s.body && e(u(s.body))
					}
				}
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/actions/toaster.ts"),
				o = s("./src/reddit/helpers/governanceErrorText/index.ts"),
				a = s("./src/reddit/models/Toast/index.ts");

			function r(e, t) {
				e(Object(n.f)({
					duration: 5e3,
					kind: a.b.Error,
					text: Object(o.a)(t)
				}))
			}
		},
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return N
			})), s.d(t, "b", (function() {
				return P
			})), s.d(t, "a", (function() {
				return U
			})), s.d(t, "c", (function() {
				return F
			})), s.d(t, "e", (function() {
				return M
			})), s.d(t, "d", (function() {
				return H
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/formatApiError/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/actions/upload.ts"),
				l = s("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				u = s("./src/lib/makeApiRequest/index.ts"),
				m = s("./src/lib/makeGqlRequest/index.ts"),
				h = s("./src/lib/omitHeaders/index.ts"),
				p = s("./src/reddit/constants/headers.ts"),
				b = s("./src/redditGQL/operations/CreateMediaUploadLease.json");
			var f = s("./src/reddit/helpers/correlationIdTracker.ts"),
				_ = s("./src/reddit/helpers/imagePreview/index.ts"),
				C = s("./src/reddit/helpers/media/index.ts"),
				g = s("./src/reddit/models/Upload/index.ts"),
				v = s("./src/reddit/selectors/telemetry.ts"),
				j = s("./src/telemetry/index.ts");
			const x = e => ({
				...v.o(e),
				screen: v.cb(e),
				profile: v.T(e),
				subreddit: v.lb(e)
			});
			var E = s("./src/reddit/helpers/trackers/postComposer.ts"),
				O = s("./src/reddit/models/PostCreationForm/index.ts"),
				y = s("./src/reddit/models/Toast/index.ts"),
				I = s("./src/reddit/selectors/postCreations.ts"),
				S = s("./src/reddit/helpers/graphql/normalizeUploadLeaseFromGql/index.ts"),
				T = s("./src/reddit/actions/postCreation/constants.ts"),
				L = s("./src/reddit/actions/postCreation/general.ts");
			const w = Object(i.a)(T.u),
				D = Object(i.a)(T.v),
				A = Object(i.a)(T.t),
				N = e => async (t, s) => {
					t(w());
					const n = e.map(e => {
						let {
							url: s,
							uploadKey: n
						} = e;
						const o = Object(C.b)(Object(C.d)(s), "poster.png");
						return t(R(o, n, !0, !1))
					});
					await Promise.all(n);
					const o = s().uploads,
						a = e.map(e => {
							let {
								uploadKey: t
							} = e;
							return o[t]
						}).find(e => e.status !== g.a.SUCCESS);
					t(a ? A(a.error) : D())
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
				R = (e, t, s, o, r, i, l, O) => async (T, L, w) => {
					let {
						apiContext: D,
						gqlContext: A
					} = w;
					const N = Object(I.h)(L()),
						P = Date.now();
					let U = null,
						R = !1,
						F = !1,
						M = !1;
					const H = e => {
						if (!M && r && R) {
							M = !0;
							const s = L(),
								n = Date.now() - P,
								o = Object(f.c)(f.a.PostComposer);
							F ? (async e => {
								let {
									state: t,
									uploadKey: s,
									assetId: n,
									isCanceled: o,
									fileSource: a,
									uploadDuration: r,
									correlationId: i
								} = e;
								const d = t.uploads[s],
									c = o || d.status === g.a.CANCELED,
									{
										file: l,
										url: u,
										metadata: m,
										error: h
									} = d,
									p = m.mimetype || l.type,
									b = p.startsWith("video/"),
									f = d.status === g.a.SUCCESS;
								let _ = "";
								h ? _ = JSON.stringify(h) : c && (_ = "canceled");
								const C = {
									width: m.width,
									height: m.height,
									duration: m.videoDuration && Math.round(1e3 * m.videoDuration)
								};
								Object(j.a)({
									source: "post_composer",
									action: "upload",
									correlationId: i,
									noun: b ? "video" : "image",
									...x(t),
									actionInfo: {
										...v.d(t),
										success: f,
										..._ ? {
											reason: _
										} : {}
									},
									media: {
										mimetype: p,
										uploadDuration: r,
										source: a,
										fileName: l.name,
										size: l.size,
										type: b ? "video" : "image",
										...n ? {
											id: n
										} : {},
										...u ? {
											url: u
										} : {},
										...C
									}
								})
							})({
								state: s,
								uploadKey: t,
								assetId: U,
								isCanceled: e,
								fileSource: r,
								uploadDuration: n,
								correlationId: o
							}) : E.E(s, t)
						}
					};
					return await T(Object(c.l)(e, t, async f => {
						var g, v, j, x;
						R = !0, Object(c.k)(f.id, () => {
							H(!0)
						});
						const {
							error: E,
							metadata: I
						} = await async function(e, t, s, o, r) {
							const i = o && o.allowedPostTypes,
								d = o && o.name,
								c = await Object(C.h)(e) || e.type,
								l = Object(C.c)(e) || void 0;
							if (!l) return k("UNSUPPORTED_BROWSER");
							const u = {
								localUrl: l,
								mimetype: c,
								size: e.size
							};
							if (!c || !Object(C.k)(c)) return {
								error: {
									type: a.Z
								}
							};
							if (c.startsWith("image/")) {
								if (t && s && i && !i.images) {
									const e = n.fbt._("Images are not allowed in r/{subredditName}", [n.fbt._param("subredditName", d)], {
										hk: "3C2E7Q"
									});
									return k(a.Z, e)
								}
								if ("image/gif" === c) {
									if (e.size > a.fb) return k(a.O)
								} else if (e.size > a.hb) return k(a.X);
								const o = await Object(_.a)(l);
								if (r && (o.width < r || o.height < r)) {
									const e = n.fbt._("Image must be {min_image_width}x{min_image_height} pixels or larger.", [n.fbt._param("min_image_width", r.toString()), n.fbt._param("min_image_height", r.toString())], {
										hk: "2WFKgs"
									});
									return k(a.W, e)
								}
								u.width = o.width, u.height = o.height
							} else if (c.startsWith("video/")) {
								if (e.size > a.lb) return k(a.vc);
								let t;
								try {
									t = await Object(C.j)(l, !0)
								} catch (m) {
									return k(a.Z)
								}
								if (i) {
									const {
										videos: e,
										images: s
									} = i;
									if (s && !e && t.duration > a.mb) {
										const e = n.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [n.fbt._param("subredditName", d)], {
											hk: "46ULiz"
										});
										return k(a.Z, e)
									}
									if (!s && !e) {
										const e = n.fbt._("Videos are not allowed in r/{subredditName}", [n.fbt._param("subredditName", d)], {
											hk: "4uTUZb"
										});
										return k(a.Z, e)
									}
								}
								if (t.duration > a.kb) {
									const e = n.fbt._("Video is too long. Maximum video length is {duration} minutes.", [n.fbt._param("duration", (a.kb / 60).toString())], {
										hk: "20nB6Q"
									});
									return k(a.Z, e)
								}
								if (t.duration < a.sb) {
									const e = n.fbt._("Video is too short. Minimum video length is {duration} seconds.", [n.fbt._param("duration", a.sb.toString())], {
										hk: "49PSW8"
									});
									return k(a.Z, e)
								}
								if (0 === t.height || 0 === t.width) {
									const e = n.fbt._("Your browser does not support the video codec used for this video. Please try using a different video codec.", null, {
										hk: "1AC0mg"
									});
									return k(a.Z, e)
								}
								if (t.height < a.tb || t.width < a.ub) {
									const e = n.fbt._("Videos must be {min_video_width}x{min_video_height} pixels or larger.", [n.fbt._param("min_video_width", a.ub.toString()), n.fbt._param("min_video_height", a.tb.toString())], {
										hk: "2HSUGl"
									});
									return k(a.Z, e)
								}
								if (e.size / t.duration < a.rb) {
									const e = n.fbt._("Videos must have a bitrate of {min_bitrate}KB/s or larger.", [n.fbt._param("min_bitrate", (a.rb / a.ab).toString())], {
										hk: "1ehgDE"
									});
									return k(a.Z, e)
								}
								u.height = t.height, u.width = t.width, u.videoDuration = t.duration, u.videoFirstFrameUrl = t.firstFrame.dataUrl
							}
							return {
								metadata: u
							}
						}(e, s, o, N, O);
						if (E || !I) return {
							error: E
						};
						if (T(Object(c.m)({
								key: t,
								metadata: {
									fileSource: r,
									...I
								}
							})), F = !0, i && i(), l) {
							const e = I.mimetype,
								t = e && a.U[e];
							if (e && t) {
								const e = await (async (e, t) => {
									return await Object(m.a)(e, {
										...b,
										variables: {
											input: {
												mimetype: t
											}
										}
									})
								})(A(), t);
								if (e.ok) {
									const t = e.body,
										s = (null === (g = t.data.createMediaUploadLease) || void 0 === g ? void 0 : g.uploadLease.uploadLeaseUrl) || "",
										n = Object(S.a)({
											uploadLeaseUrl: s,
											uploadLeaseHeaders: null === (v = t.data.createMediaUploadLease) || void 0 === v ? void 0 : v.uploadLease.uploadLeaseHeaders
										});
									return U = (null === (j = t.data.createMediaUploadLease) || void 0 === j ? void 0 : j.mediaId) || null, {
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
							return T(Object(d.f)({
								kind: y.b.Error,
								text: n.fbt._("Only .jpeg and .png image types are are allowed", null, {
									hk: "30Ms4V"
								}),
								duration: 6e3
							})), {
								error: void 0
							}
						}
						const L = e.name,
							w = await (async (e, t, s) => Object(u.a)(Object(h.a)(e, [p.a]), {
								endpoint: `${e.apiUrl}/api/media/asset.json`,
								method: a.pb.POST,
								data: {
									filepath: t,
									mimetype: s
								}
							}))(D(), L, I.mimetype);
						return w.ok ? (U = w.body.asset.asset_id, {
							uploadLease: w.body.args
						}) : {
							error: w.error || void 0
						}
					}, !0)), H(!1), L().uploads[t] || null
				}, F = (e, t) => async (s, n) => {
					const o = n().uploads[e];
					o && !Object(g.c)(o) && await s(R(o.file, o.key, t, !1, o.metadata.fileSource, void 0))
				}, M = (e, t, s, a, i, c) => async (l, u) => {
					const m = e.map((e, n) => new Promise(async n => {
							const r = Object(g.d)(s, Object(o.a)().slice(-6));
							await l(R(e, r, a, !0, t, () => n({
								uploadKey: r,
								isValid: !0
							}), i, c)), n({
								uploadKey: r,
								isValid: !1
							})
						})),
						h = await Promise.all(m),
						p = h.map(e => e.uploadKey);
					return l(function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
						return async (s, o) => {
							const {
								uploads: a
							} = o(), i = e.map(e => a[e]).filter(e => e.status === g.a.FAILED && !e.metadata.mimetype).map(e => e.error), c = i.length > t ? t - 1 : i.length, l = i.length - c;
							i.slice(0, c).forEach(e => s(Object(d.f)({
								duration: d.a,
								kind: y.b.Error,
								text: Object(r.a)(e)
							}))), l > 0 && s(Object(d.f)({
								duration: d.a,
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
				}, H = (e, t) => async (s, o) => {
					const a = o(),
						r = Object(I.Z)(a),
						{
							items: i
						} = r,
						u = !i.length && 1 === e.length,
						m = Object(I.P)(a) && !u;
					let h = !1,
						p = e;
					if (m) {
						if (Object(O.x)(r)) return void s(Object(d.f)({
							kind: y.b.Error,
							text: n.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						p.some(e => Object(C.n)(e.type)) && s(Object(d.f)({
							duration: d.a,
							kind: y.b.Error,
							text: n.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), p = p.filter(e => Object(C.m)(e.type));
						const e = Math.max(0, l.b - i.length);
						p.length > e && (s(Object(d.f)({
							kind: y.b.Error,
							text: n.fbt._("You have hit the limit of {images_limit} images", [n.fbt._param("images_limit", `${l.b}`)], {
								hk: "6M4kX"
							})
						})), p = p.slice(0, e))
					} else p = p.slice(0, 1), h = !0, s(Object(c.j)(U, !0));
					const b = await s(M(p, t, U, !0));
					if (!b.length) return;
					const f = b.map(e => ({
							uploadKey: e,
							caption: "",
							url: ""
						})),
						_ = 0 === i.length;
					s(Object(L.d)({
						...r,
						items: h ? f : [...i, ...f],
						selectedKey: _ ? b[0] : b[b.length - 1]
					}))
				}
		},
		"./src/reddit/actions/subredditAutocomplete/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return a
			}));
			const n = "SUBREDDIT_AUTOCOMPLETE__PENDING",
				o = "SUBREDDIT_AUTOCOMPLETE__LOADED",
				a = "SUBREDDIT_AUTOCOMPLETE__FAILED"
		},
		"./src/reddit/actions/upload.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return c
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "m", (function() {
				return g
			})), s.d(t, "k", (function() {
				return I
			})), s.d(t, "l", (function() {
				return T
			})), s.d(t, "i", (function() {
				return L
			})), s.d(t, "j", (function() {
				return w
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/get.js"),
				o = s.n(n),
				a = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/uploadToS3/index.ts"),
				d = s("./src/reddit/models/Upload/index.ts");
			const c = "UPLOAD_PENDING",
				l = "UPLOAD_UPLOADING",
				u = "UPLOAD_METADATA_CHANGED",
				m = "UPLOAD_PROGRESS",
				h = "UPLOAD_SUCCESS",
				p = "UPLOAD_FAILED",
				b = "UPLOAD_CANCELED",
				f = "UPLOAD_REMOVED",
				_ = Object(r.a)(c),
				C = Object(r.a)(l),
				g = Object(r.a)(u),
				v = Object(r.a)(m),
				j = Object(r.a)(h),
				x = Object(r.a)(p),
				E = Object(r.a)(b),
				O = Object(r.a)(f),
				y = new Map,
				I = (e, t) => {
					const s = y.get(e) || [];
					s.push(t), y.set(e, s)
				},
				S = (e, t) => {
					const s = y.get(e);
					s && s.forEach(s => s(e, t)), y.delete(e)
				},
				T = function(e, t, s) {
					let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return async (r, c) => {
						const l = t;
						if (c().uploads[l] && Object(d.c)(c().uploads[l])) return;
						const u = Object(a.a)(),
							m = () => {
								const e = c().uploads[l];
								return !e || e.id !== u || e.status === d.a.CANCELED
							};
						r(_({
							key: l,
							id: u,
							file: e
						}));
						const {
							uploadLease: h,
							error: p
						} = await s(c().uploads[l]);
						if (m()) return;
						if (p || !h) return void r(x({
							key: l,
							error: p
						}));
						let b;
						I(u, () => {
							b && b.abort()
						}), r(C({
							key: l
						}));
						const f = await Object(i.a)(e, h, e => (b = e, n && e.on("progress", e => {
							if (!m() && "upload" === e.direction) {
								const t = {
									percent: e.percent,
									total: e.total,
									uploaded: e.loaded
								};
								r(v({
									key: l,
									progress: t
								}))
							}
						}), e));
						if (b = null, !m())
							if (f.ok) {
								const e = decodeURIComponent(f.body.PostResponse.Location);
								r(j({
									key: l,
									url: e
								}))
							} else {
								const e = o()(f, "body.Error.Message.0"),
									t = {
										type: "ERROR",
										...e ? {
											fields: [{
												field: "0",
												msg: e
											}]
										} : {}
									};
								r(x({
									key: l,
									error: t
								}))
							}
					}
				},
				L = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (s, n) => {
						const o = n().uploads[e];
						o && (S(o.id, t), s(t ? O({
							key: e
						}) : E({
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
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/lessComponent.tsx"),
				d = s("./src/config.ts"),
				c = s("./node_modules/lodash/memoize.js"),
				l = s.n(c),
				u = s("./src/lib/constants/index.ts"),
				m = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
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
					} = d.a, a = (e => e.replace(u.Ob.Account + "_", ""))(s), {
						avatar: r,
						color: i
					} = (e => {
						const t = m.length,
							s = parseInt(e, 36),
							n = s % 20 + 1,
							o = Math.floor(s / 20) % t;
						return {
							avatar: ("0" + n).slice(-2),
							color: m[o]
						}
					})(a), c = `${n}/avatar_default_${r}_${i}.png`;
					return o.a.createElement(b, {
						"data-testid": "old-default-icon",
						style: {
							backgroundImage: `url(${c})`,
							backgroundColor: `#${i}`
						}
					})
				}),
				_ = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				C = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				g = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				v = s("./src/reddit/icons/svgs/Remove/index.tsx");
			const j = Object(r.c)({
					account: e => e.user.account
				}),
				x = Object(a.b)(j);
			t.a = i.a.wrapped(x(e => {
				let {
					account: t,
					className: s,
					height: n,
					icon: a,
					isNSFW: r,
					trash: i,
					userId: d,
					width: c
				} = e;
				const l = d || `${null==t?void 0:t.id}`,
					u = {
						height: n || 20,
						width: c || 20,
						minWidth: c || 20
					};
				if (i) return o.a.createElement("div", {
					className: s,
					style: u
				}, o.a.createElement(v.a, {
					className: p.a.TrashIcon
				}));
				const m = t && t.id === d ? t.accountIcon : r ? C.a : null != a ? a : void 0;
				return Object(g.a)(m) ? o.a.createElement("div", {
					className: s,
					style: u
				}, o.a.createElement(_.a, {
					headshot: m
				})) : o.a.createElement("div", {
					className: s,
					style: u
				}, o.a.createElement(f, {
					userId: l,
					defaultImage: m
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
				return u
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				d = s("./src/reddit/icons/svgs/Trash3/index.tsx"),
				c = s("./src/reddit/components/CommentsChat/Comment/DeletedComment/index.m.less"),
				l = s.n(c);
			const u = e => {
					let {
						className: t,
						isV2Enabled: s
					} = e;
					return a.a.createElement("div", {
						className: t
					}, s ? a.a.createElement(d.a, {
						className: l.a.TrashIcon
					}) : a.a.createElement(i.a, {
						className: l.a.ChatIcon,
						trash: !0
					}), a.a.createElement("span", {
						className: Object(r.a)(l.a.DeleteText, {
							[l.a.isV2Enabled]: s
						})
					}, n.fbt._("deleted", null, {
						hk: "3NxJy9"
					})))
				},
				m = () => a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: l.a.icon
				}, a.a.createElement(d.a, null)), a.a.createElement("span", {
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
				return S
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/chat/helpers/dom.ts"),
				c = s("./src/reddit/components/CommentsChat/Comment/DeletedComment/index.tsx"),
				l = s("./src/reddit/components/RichTextJson/index.tsx"),
				u = s("./src/reddit/components/RichTextJson/elements.tsx"),
				m = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				h = s("./src/reddit/models/RichTextJson/index.ts");
			const p = e => a.a.createElement(u.f, null, e),
				b = e => {
					const t = [],
						s = e.c || [],
						n = s.length;
					for (let o = 0; o < n; o++) {
						const e = s[o];
						t.push(e.e === h.x ? e.t : Object(m.e)(e, {}, o))
					}
					return a.a.createElement(a.a.Fragment, null, t)
				},
				f = e => e.c && e.c.length ? a.a.createElement(a.a.Fragment, null, Object(m.i)(e.c, null, {})) : a.a.createElement("br", null);
			var _ = s("./src/reddit/constants/elementClassNames.ts");
			const C = {
				[h.a]: "<animated image>",
				[h.b]: "<quote>",
				[h.c]: "<code block>",
				[h.h]: "<embed>",
				[h.m]: "<image>",
				[h.p]: "<list>",
				[h.A]: "<table>",
				[h.E]: "<video>"
			};
			var g = e => {
					let {
						className: t,
						content: s
					} = e;
					const n = s.document,
						o = [],
						r = Object(l.c)(n),
						d = Object(l.d)(n);
					if (-1 !== r)
						for (let a = r; a <= d; a++) {
							const e = n[a],
								t = e && C[e.e];
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
									o.push(p(t));
									break;
								case h.k:
									o.push(b(e));
									break;
								case h.v:
									o.push(f(e))
							}
						}
					return a.a.createElement("div", {
						className: Object(i.a)(_.j, t)
					}, o)
				},
				v = s("./src/reddit/components/UserIcon/index.tsx"),
				j = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				x = s("./src/reddit/icons/svgs/CloseV2/index.tsx"),
				E = s("./src/reddit/selectors/comments.ts"),
				O = s("./src/reddit/selectors/commentSelector.ts"),
				y = s("./src/reddit/components/CommentsChat/Comment/Reply/index.m.less"),
				I = s.n(y);
			const S = e => {
				let {
					commentId: t,
					className: s,
					isV2Enabled: o = !1,
					isMessageComposer: l = !1,
					onReplyClick: u
				} = e;
				const m = Object(r.e)(e => Object(O.c)(e, {
						commentId: t
					})),
					h = Object(r.e)(e => Object(E.m)(e, {
						commentId: t
					}));
				return m ? m.isDeleted ? a.a.createElement("div", {
					className: Object(i.a)(I.a.container, I.a.isDeleted, s)
				}, a.a.createElement(c.b, {
					isV2Enabled: o
				})) : a.a.createElement("a", {
					className: Object(i.a)(I.a.container, s, {
						[I.a.messageComposer]: l
					}),
					href: h,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: Object(d.a)(() => u(m.id))
				}, a.a.createElement(v.a, {
					className: Object(i.a)(I.a.userIcon),
					iconUrl: m.profileImage || m.authorIconImage,
					userName: m.author,
					isNSFW: Boolean(m.profileOver18 || m.authorIconIsNSFW)
				}), a.a.createElement("span", {
					className: I.a.author
				}, l ? n.fbt._("Replying to u/{username}:", [n.fbt._param("username", m.author)], {
					hk: "15ByZb"
				}) : m.author), a.a.createElement(g, {
					className: I.a.commentBody,
					content: Object(j.a)(m)
				}), l && a.a.createElement(x.a, {
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
				o = s("./node_modules/lodash/noop.js"),
				a = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/models/PostDraft/index.ts"),
				m = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/loadWithRetries/index.ts")),
				h = s("./src/reddit/actions/chat/init.ts");
			const p = () => Object(m.a)(() => Promise.all([s.e("vendors~Chat~RedesignChat"), s.e("Chat~RedesignChat"), s.e("RedesignChat")]).then(s.bind(null, "./src/chat/actions/liveChat/index.ts"))).then(e => e.fetchLiveChats);
			var b = s("./src/reddit/actions/chat/liveChatTooltipShowState.ts"),
				f = s("./src/reddit/actions/comment/authoring.ts"),
				_ = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				C = s("./src/reddit/components/CommentsChat/Comment/Reply/index.tsx");
			const g = e => {
				let {
					durationSec: t,
					onTimeout: s
				} = e;
				const [n, o] = Object(r.useState)(t);
				Object(r.useEffect)(() => {
					if (n <= 0) return void s();
					const e = setTimeout(() => o(n - 1), 1e3);
					return () => clearTimeout(e)
				}, [n, s]);
				const a = Math.floor(n / 60),
					d = n - 60 * a;
				return i.a.createElement("span", {
					"data-testid": "inline-timer-text"
				}, a, ":", d > 9 ? d : `0${d}`)
			};
			var v = s("./src/reddit/components/RichTextEditor/index.tsx"),
				j = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				x = s("./src/reddit/constants/chat.ts"),
				E = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/helpers/richTextEditor/index.ts"),
				y = s("./src/reddit/icons/fonts/Clock/index.tsx"),
				I = s("./src/reddit/icons/svgs/Close/index.tsx"),
				S = s("./src/reddit/icons/svgs/Send/index.tsx"),
				T = s("./src/reddit/icons/svgs/Send2/index.tsx"),
				L = s("./src/reddit/models/Post/index.ts"),
				w = s("./src/reddit/models/PostCreationForm/index.ts"),
				D = s("./src/reddit/selectors/chatPost.ts"),
				A = s("./src/reddit/selectors/comments.ts"),
				N = s("./src/reddit/selectors/posts.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				P = s("./src/lib/constants/index.ts"),
				U = s("./src/lib/makeGqlRequest/index.ts"),
				R = s("./src/redditGQL/operations/CreateLiveChatAssociation.json");
			var F = s("./src/reddit/components/CommentsChat/MessageInput/index.m.less"),
				M = s.n(F),
				H = s("./src/reddit/contexts/PageLayer/index.tsx"),
				B = s("./src/reddit/helpers/chat/isEmbeddedLiveChat.ts"),
				K = s("./src/reddit/helpers/trackers/commentsChat.ts"),
				W = s("./src/reddit/selectors/experiments/chat.ts"),
				V = s("./src/redditGQL/types.ts");
			const G = "chat_submission_from_rte",
				Z = 15,
				q = 15e3,
				z = Object(H.v)(),
				Y = Object(d.b)(() => Object(c.c)({
					draft: A.i,
					errorMsgs: A.M,
					errorType: A.N,
					hasError: A.v,
					isChatPost: D.d,
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					post: N.F,
					isLiveChatInChatTabEnabled: W.b,
					currentUserId: k.k,
					isTalkPost: Object(c.a)(N.F, e => Object(L.x)(e)),
					isLiveChatThreadingEnabled: W.d
				}), (e, t) => {
					let {
						isEditing: s,
						comment: n,
						commentsPageKey: o,
						draftKey: a,
						postId: r,
						replyComment: i,
						scrollToBottom: d
					} = t;
					return {
						dispatchSubmit: async (t, i, c, l) => {
							s && n ? await e(Object(f.j)({
								id: n.id,
								commentsPageKey: o,
								draftKey: a,
								formData: t
							})) : c ? e(Object(f.o)({
								commentsPageKey: o,
								draftKey: a,
								parentCommentDepth: c.depth,
								parentCommentId: c.id,
								formData: t,
								editorMode: i
							})) : await e(Object(f.q)({
								postId: r,
								commentsPageKey: o,
								draftKey: a,
								formData: t,
								editorMode: i,
								disableAutofocus: !0
							})), d && d()
						},
						onCancelEdit: () => n && e(Object(f.d)({
							commentId: n.id,
							commentsPageKey: o
						})),
						closeReply: () => i && e(Object(f.b)({
							parentCommentId: i.id,
							commentsPageKey: o
						})),
						clearSubmitError: t => e(Object(f.a)({
							draftKey: t
						})),
						createChatTabAssociation: t => e((e => (t, s, n) => {
							let {
								gqlContext: o
							} = n;
							return Object(U.a)(o(), {
								...R,
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
			class $ extends i.a.Component {
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
								draftType: u.c.replyToComment,
								rteState: this.state.rteState,
								hasFocus: !0,
								text: ""
							};
							this.cleanInputForm(), s(n, w.i.RICH_TEXT, e, t), setTimeout(() => this.focusOnForm(), 50), this.isAllowedToCreateLiveChatAssociation() && this.associationTimerId && !this.state.messageSent && (this.props.createChatTabAssociation({
								postId: this.props.postId,
								engagementType: V.p.Participated
							}), clearTimeout(this.associationTimerId), this.setState({
								messageSent: !0,
								hasCreatedLiveChatAssociation: !0
							}), !this.isEmbeddedLiveChat() && this.props.fetchLiveChatPosts())
						}
						e && (n(Object(K.d)(e.id)), t && n(Object(K.j)(e.id)))
					}, this.canSubmit = () => Boolean(!this.props.pending && this.state.hasChanged && !this.state.showError && !this.state.spamTimeoutDraftKey), this.state = {
						hasChanged: !1,
						showError: e.hasError,
						rteState: e.isEditing && e.comment ? j.a.createInitial(e.comment.media.richtextContent) : j.a.createInitial(),
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
							engagementType: V.p.Previewed
						}), this.setState({
							hasCreatedLiveChatAssociation: !0
						}), !this.isEmbeddedLiveChat() && this.props.fetchLiveChatPosts()
					}, q), window.addEventListener("beforeunload", this.showLiveChatTooltipIfCreatedAssociation))
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
						rteState: j.a.createInitial()
					})
				}
				render() {
					var e;
					const {
						isV2: t,
						closeReply: s,
						errorMsgs: o,
						errorType: r,
						isEditing: d,
						pending: c,
						replyComment: u,
						isEmbeddedLiveChat: m,
						isLiveChatThreadingEnabled: h
					} = this.props, p = n.fbt._("Send a message (use the Enter key)", null, {
						hk: "3yojgj"
					}), b = r === P.L.RATELIMIT && parseInt(null === (e = null == o ? void 0 : o[0]) || void 0 === e ? void 0 : e.replace(/\D/g, "")) || Z;
					return h && (null == u ? void 0 : u.isDeleted) ? null : i.a.createElement("div", {
						className: Object(l.a)(M.a.FormWrapper, {
							[M.a.v2]: t,
							[M.a.V2ChatPost]: t && !d
						})
					}, !!this.state.spamTimeoutDraftKey && i.a.createElement("p", {
						className: M.a.spamTimeout
					}, n.fbt._("Time until you can message", null, {
						hk: "3mkJ7J"
					}), " ", i.a.createElement(g, {
						durationSec: b,
						onTimeout: () => {
							this.props.clearSubmitError(this.state.spamTimeoutDraftKey), this.setState({
								spamTimeoutDraftKey: null
							})
						}
					}), i.a.createElement(y.a, null)), !d && u && !h && i.a.createElement(C.a, {
						commentId: u.id,
						isMessageComposer: !0,
						onReplyClick: s
					}), i.a.createElement("div", {
						className: M.a.inputLine
					}, i.a.createElement("form", {
						className: Object(l.a)(M.a.Form, {
							[M.a.Editing]: d
						}),
						onSubmit: this.handleSubmit,
						onReset: this.handleCancel
					}, !t && i.a.createElement(Q, {
						isEditing: !!d
					}), i.a.createElement(v.a, {
						className: Object(l.a)(M.a.RichTextEditor, {
							[M.a.Editing]: d,
							[M.a.isV2ChatPost]: t,
							[M.a.isEmbeddedLiveChat]: m
						}),
						focusableContentRTEClassName: Object(l.a)({
							[M.a.V2ChatPostFocusableContent]: t
						}),
						dataTestId: G,
						editorType: O.a.Comment,
						initialMinHeight: 20,
						initialHeight: void 0,
						rteState: this.state.rteState,
						rteRef: this.setRTEComponentRef,
						onChange: this.handleChange,
						onFocus: this.handleFocus,
						onSubmit: this.onSubmit,
						placeholderText: p,
						readOnly: c,
						showSubmitButton: !1,
						submitButtonClassName: Object(l.a)(M.a.insetSubmitButton, M.a.submitButton),
						submitOnEnter: !0,
						trackToolbarClick: a.a,
						hideToolbar: !0,
						noBorder: !0,
						isChatPost: !0
					}), d && i.a.createElement(E.e, {
						className: Object(l.a)(M.a.ChatButton),
						type: "reset"
					}, i.a.createElement(I.a, null)), i.a.createElement(E.e, {
						className: Object(l.a)(M.a.ChatButton, {
							[M.a.v2ChatPostButton]: !d && t
						}),
						type: "submit",
						disabled: !this.canSubmit(),
						"aria-label": n.fbt._("send a message", null, {
							hk: "4bL65Y"
						})
					}, t ? i.a.createElement(T.a, null) : i.a.createElement(S.a, null)))))
				}
			}
			const Q = e => {
				let {
					isEditing: t
				} = e;
				return t ? i.a.createElement(_.a, {
					className: M.a.SmallChatUserIcon,
					height: 20,
					width: 20
				}) : i.a.createElement(_.a, {
					height: 25,
					width: 25
				})
			};
			t.default = z(Y($))
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			}));
			const n = 20,
				o = 180
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				l = s("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				m = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
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
					currentUser: c.m,
					isNightMode: c.fb,
					isPresenceUserPrefEnabled: c.X,
					shouldHideNSFW: c.H
				}),
				_ = Object(r.b)(f);
			t.a = _(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: s,
					isPresenceUserPrefEnabled: o,
					wrapperClassName: r,
					...i
				} = e, c = Object(d.a)(null == t ? void 0 : t.accountIcon);
				return a.a.createElement("div", {
					className: Object(n.a)(p.a.currentUserIconWrapper, r)
				}, c ? a.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : a.a.createElement(m.b, b({}, i, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), s && a.a.createElement(l.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/constants/chat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			}));
			var n;
			! function(e) {
				e.None = "none", e.Compact = "compact", e.Full = "full_screen"
			}(n || (n = {}));
			var o, a;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(o || (o = {})),
			function(e) {
				e.NEVER_SHOWN = "never_shown", e.IS_SHOWING = "is_showing", e.DISMISSED = "dismissed"
			}(a || (a = {}));
			const r = {
				[a.NEVER_SHOWN]: [a.IS_SHOWING, a.DISMISSED],
				[a.IS_SHOWING]: [a.DISMISSED],
				[a.DISMISSED]: []
			}
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/config.ts"),
				o = s("./src/reddit/endpoints/governance/requester.ts");
			async function a(e, t, s) {
				const a = Object(o.a)(e, {
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
					r = await a;
				if (r.ok) {
					const e = {},
						t = {},
						s = r.body;
					return Object.keys(s).forEach(n => {
						const o = s[n];
						t[n] = o, e[o.userId] || (e[o.userId] = []), e[o.userId].push(o.id)
					}), {
						...r,
						body: {
							badges: t,
							usersAppliedBadges: e
						}
					}
				}
				return r
			}
			async function r(e, t, s) {
				const a = await Object(o.a)(e, {
					method: "get",
					endpoint: `${n.a.metaUrl}/badges/${t}?users=${s}`
				});
				if (a.ok) {
					const e = {},
						t = [],
						s = a.body;
					return Object.keys(s).forEach(n => {
						const o = s[n];
						e[n] = o, t.push(o.id)
					}), {
						...a,
						body: {
							badges: e,
							userOwnedBadges: t
						}
					}
				}
				return a
			}

			function i(e, t, s) {
				let a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
				return Object(o.a)(e, {
					method: "patch",
					endpoint: `${n.a.metaUrl}/badges/${t}/${s}`,
					data: {
						selected: a
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return d
			}));
			var n = s("./src/config.ts"),
				o = s("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(o.a)(e, {
					method: "get",
					endpoint: `${n.a.metaUrl}/products/${t}?types=badge`
				})
			}

			function r(e, t) {
				return Object(o.a)(e, {
					method: "get",
					endpoint: `${n.a.metaUrl}/products/${t}?types=badge,membership`
				})
			}

			function i(e, t) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: `${n.a.metaUrl}/orders`,
					data: t
				})
			}

			function d(e, t) {
				return Object(o.a)(e, {
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
				return a
			})), s.d(t, "b", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js");

			function o(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function a(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(o).join(" ") : n.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function r(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/icons/fonts/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("history", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/svgs/CloseV2/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", a({
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M11.065 1.46521L10.5346 0.934814L5.99977 5.46961L1.46497 0.934814L0.93457 1.46521L5.46937 6.00001L0.93457 10.5348L1.46497 11.0652L5.99977 6.53041L10.5346 11.0652L11.065 10.5348L6.53017 6.00001L11.065 1.46521Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/Send2/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 24 24",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M22.6559 10.8L2.39994 0.660011C2.15389 0.5293 1.87278 0.479801 1.59687 0.5186C1.32096 0.557399 1.06441 0.682508 0.863944 0.876011C0.656797 1.06387 0.51403 1.31216 0.455877 1.5857C0.397725 1.85923 0.427136 2.14413 0.539944 2.40001L4.58394 12L0.539944 21.6C0.429918 21.8544 0.401998 22.1368 0.460075 22.4078C0.518153 22.6789 0.659334 22.925 0.863944 23.112C1.10992 23.347 1.43582 23.4799 1.77594 23.484C1.99315 23.4934 2.20883 23.4437 2.39994 23.34L22.6559 13.2C22.8781 13.088 23.0648 12.9165 23.1952 12.7046C23.3256 12.4927 23.3947 12.2488 23.3947 12C23.3947 11.7512 23.3256 11.5073 23.1952 11.2954C23.0648 11.0836 22.8781 10.9121 22.6559 10.8Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Trash3/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 16"
				}, o.a.createElement("g", null, o.a.createElement("path", {
					d: "M12.6004 4.84721L13.5996 4.91361L12.9908 14.0664C12.9841 14.5896 12.7788 15.0907 12.4165 15.4683C12.0543 15.8458 11.5621 16.0716 11.0396 16.1H4.95961C4.43817 16.0715 3.94695 15.8462 3.58511 15.4697C3.22327 15.0932 3.01774 14.5934 3.01001 14.0712L2.39961 4.91361L3.39801 4.84721L4.00681 14C4.00283 14.2684 4.09775 14.5288 4.27347 14.7317C4.44919 14.9345 4.69343 15.0657 4.95961 15.1H11.0396C11.3064 15.0651 11.551 14.9331 11.7267 14.7293C11.9025 14.5256 11.997 14.2642 11.9924 13.9952L12.6004 4.84721ZM14.3996 2.40001V3.40001H1.59961V2.40001H4.79961V2.10001C4.82803 1.51721 5.08582 0.969319 5.51672 0.575891C5.94762 0.182464 6.51664 -0.0245568 7.09961 7.87831e-06H8.89961C9.48258 -0.0245568 10.0516 0.182464 10.4825 0.575891C10.9134 0.969319 11.1712 1.51721 11.1996 2.10001V2.40001H14.3996ZM5.79961 2.40001H10.1996V2.10001C10.1705 1.78279 10.0179 1.48972 9.77473 1.28396C9.53155 1.0782 9.21727 0.976221 8.89961 1.00001H7.09961C6.78195 0.976221 6.46767 1.0782 6.22449 1.28396C5.98132 1.48972 5.82873 1.78279 5.79961 2.10001V2.40001Z",
					fill: "inherit"
				})))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatMessageInput.bd4e192b9f83964bdbe3.js.map
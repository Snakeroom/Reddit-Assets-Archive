// https://www.redditstatic.com/desktop2x/ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor.4f8ea958aa7e135b3ecb.js
// Retrieved at 3/29/2021, 6:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"], {
		"./src/graphql/operations/SubredditTypeaheadSearch.json": function(t) {
			t.exports = JSON.parse('{"id":"20edc5ee12df"}')
		},
		"./src/lib/forEachGroup/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			}));
			const o = t => t;

			function s(t, e, n) {
				const [s, r] = Array.isArray(t) ? [t.length, e => t[e]] : [t.size, e => t.get(e)], {
					keyFn: i = o
				} = e || {};
				let {
					start: c = 0,
					end: a = s
				} = e || {};
				if ((c = c < 0 ? 0 : c) >= (a = a > s ? s : a)) return;
				let l = r(c),
					d = i(l, c),
					u = c;
				for (let o = c + 1; o < a; o++) {
					const t = r(o),
						e = i(t, o);
					if (e !== d) {
						if (!1 === n(l, d, u, o)) return;
						d = e, u = o, l = t
					}
				}
				n(l, d, u, a)
			}
		},
		"./src/lib/linkMatchers/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "f", (function() {
				return h
			})), n.d(e, "e", (function() {
				return m
			})), n.d(e, "g", (function() {
				return g
			})), n.d(e, "j", (function() {
				return f
			})), n.d(e, "a", (function() {
				return b
			})), n.d(e, "b", (function() {
				return y
			})), n.d(e, "c", (function() {
				return x
			})), n.d(e, "d", (function() {
				return S
			})), n.d(e, "h", (function() {
				return C
			})), n.d(e, "i", (function() {
				return O
			}));
			var o = n("./node_modules/linkify-it/index.js"),
				s = n.n(o),
				r = n("./node_modules/tlds/index.js"),
				i = n.n(r),
				c = n("./src/lib/linkMatchers/customLinks.ts"),
				a = n("./node_modules/lodash/values.js"),
				l = n.n(a);
			const d = t => l()(c.b).includes(t.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				p = t => ((t, e) => (e.forEach(e => t.add(e, null)), t))(t, u),
				h = s()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				m = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(c.g.mention.prefix, c.g.mention.config),
				g = p(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(c.g.subreddit.prefix, c.g.subreddit.config).add(c.g.subredditFull.prefix, c.g.subreddit.config),
				f = p(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(c.g.profile.prefix, c.g.profile.config).add(c.g.profileFull.prefix, c.g.profile.config),
				b = s()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(c.g.subreddit.prefix, c.g.subreddit.config).add(c.g.subredditFull.prefix, c.g.subreddit.config).add(c.g.profile.prefix, c.g.profile.config).add(c.g.profileFull.prefix, c.g.profile.config).add(c.g.mention.prefix, c.g.mention.config),
				y = s()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(c.g.subreddit.prefix, c.g.subredditFullUrl.config).add(c.g.subredditFull.prefix, c.g.subredditFullUrl.config),
				E = h.normalize;
			h.normalize = t => {
				E.call(h, t), !t.schema && t.url.startsWith("http:") && (t.url = `https:${t.url.slice(5)}`)
			};
			const x = (t, e) => {
					return (b.match(t) || []).filter(t => {
						const n = d(t.text);
						return !n || n && e
					})
				},
				S = t => {
					return [...f.match(t) || [], ...m.match(t) || []].map(t => !d(t.text) && t.text.replace(c.a, "")).filter(t => t)
				},
				C = (t, e) => {
					const n = t.match(e);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === e.length) return n[0]
				},
				O = t => {
					const e = h.match(t);
					if (e && 1 === e.length && 0 === e[0].index) {
						const n = e[0];
						return n.lastIndex === t.length ? n : ((t, e) => {
							const n = t.substring(e.lastIndex);
							if (/.*\/\/.*\/.*/.test(e.url) && /^(\?|\!)+$/.test(n)) return e.lastIndex += n.length, e.url += n, e
						})(t, n)
					}
				}
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return O
			})), n.d(e, "g", (function() {
				return k
			})), n.d(e, "b", (function() {
				return T
			})), n.d(e, "d", (function() {
				return v
			})), n.d(e, "e", (function() {
				return j
			})), n.d(e, "c", (function() {
				return w
			})), n.d(e, "f", (function() {
				return R
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/forOwn.js"),
				s = n.n(o),
				r = n("./src/reddit/actions/governance/errorToast.ts"),
				i = n("./src/reddit/endpoints/economics/emojis.ts"),
				c = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				a = n("./src/reddit/endpoints/economics/subredditPremium.ts"),
				l = n("./src/reddit/endpoints/governance/badges.ts"),
				d = n("./src/config.ts"),
				u = n("./src/reddit/endpoints/governance/requester.ts");

			function p(t, e, n) {
				return Object(u.a)(t, {
					method: "get",
					endpoint: `${d.a.metaUrl}/products/${e}?owners=${n}` + "&types=emotes_pack,giphy"
				})
			}
			var h = n("./src/reddit/models/Badge/index.ts"),
				m = n("./src/reddit/models/Badge/managementPage.ts"),
				g = n("./src/reddit/models/Product/index.ts"),
				f = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				b = n("./src/reddit/selectors/economics.ts"),
				y = n("./src/reddit/selectors/products.ts"),
				E = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				x = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function S(t) {
				return !!t && "removeBadge" === t.type
			}

			function C(t) {
				if (!S(t)) return t
			}
			const O = () => async (t, e, {
				apiContext: n
			}) => {
				if (!e().user.account) return;
				await t(Object(E.b)({
					includeMemberships: !0
				}));
				const o = e().economics.me.data.specialMemberships || {},
					s = Object.keys(o);
				if (s.length) {
					const e = await Object(c.e)(n(), s);
					e.ok && t(Object(x.g)(e.body))
				}
			}, k = (t, e) => async (n, o, {
				apiContext: s
			}) => {
				const r = o().user.account,
					i = o().economics.subredditPremium[t],
					c = !i || i.status !== f.a.Fetched || e;
				if (r && c) {
					const e = await Object(a.a)(s(), t, r.id);
					n(Object(x.i)(e))
				}
			}, T = t => async (e, n, {
				apiContext: o
			}) => {
				const s = n(),
					i = s.user.account,
					c = Object(b.f)(s, t.subredditId),
					a = Object.keys(c).map(t => c[t]).filter(Boolean);
				if (i && t.badge) {
					let n, s;
					n = t.placement === h.a.First ? c[m.a.Loyalty] : t.placement === h.a.Second ? c[m.a.Achievement] : c[m.a.Cosmetic], e(Object(x.a)({
						...t,
						badge: C(t.badge),
						currentAppliedBadges: a,
						userId: i.id
					})), S(t.badge) && n ? s = await Object(l.a)(o(), t.subredditId, n.id, !1) : S(t.badge) || (s = await Object(l.a)(o(), t.subredditId, t.badge.id)), s && !s.ok && (e(Object(x.a)({
						...t,
						badge: n,
						currentAppliedBadges: a,
						userId: i.id
					})), Object(r.a)(e, s.error))
				}
			}, v = (t, e) => async (n, o, {
				apiContext: s
			}) => {
				await n(k(t, !0));
				const r = o().economics.subredditPremium[t];
				if (r && r.status === f.a.Fetched) {
					const o = r.data.userOwnedBadges.find(t => t.type === e.id);
					o && (n(T({
						badge: o,
						subredditId: t,
						placement: o.placement
					})), n(Object(x.d)(m.c.MyBadges)))
				}
			}, j = t => async (e, n, {
				apiContext: o
			}) => {
				const c = n().user.account,
					a = !n().economics.emotes[t],
					l = !n().economics.gifs[t];
				if (c && (a || l)) {
					const [n, a] = await Promise.all([Object(i.b)(o(), t), p(o(), t, c.id)]);
					if (!a.ok) return void Object(r.a)(e, a.error);
					const l = {
						emotes: [],
						emoteCollections: n.ok ? n.body : {},
						giphy: []
					};
					s()(a.body, t => {
						t.type === g.a.EmotesPack ? l.emotes.push(t) : t.type === g.a.Giphy && l.giphy.push(t)
					}), e(Object(x.e)({
						subredditId: t,
						products: l
					}))
				}
			}, w = (t, e, n) => async (o, s, {
				apiContext: r
			}) => {
				if (await o(k(t, !0)), n && e) {
					const n = s(),
						r = Object(b.f)(n, t),
						i = Object(y.a)(n, e);
					if (!r[Object(m.d)(i.placement)] && i) {
						const e = Object(b.l)(n, {
							subredditId: t,
							badge: i
						});
						e && await o(T({
							badge: e,
							subredditId: t
						}))
					}
					o(Object(x.c)({
						subredditId: t,
						initialView: m.c.MyBadges
					}))
				}
			}, R = t => async (e, n, {
				apiContext: o
			}) => {
				const {
					wallet: s
				} = await Object(c.c)(o(), t);
				e(Object(x.f)({
					wallet: s
				})), await e(k(t.subredditId, !0))
			}
		},
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(t, e, n) {
			"use strict";
			n.d(e, "f", (function() {
				return A
			})), n.d(e, "b", (function() {
				return M
			})), n.d(e, "a", (function() {
				return L
			})), n.d(e, "c", (function() {
				return D
			})), n.d(e, "e", (function() {
				return N
			})), n.d(e, "d", (function() {
				return P
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/uuid/v4.js"),
				r = n.n(s),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/formatApiError/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/actions/upload.ts"),
				u = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				h = n("./src/lib/omitHeaders/index.ts"),
				m = n("./src/reddit/constants/headers.ts");
			var g = n("./src/reddit/helpers/correlationIdTracker.ts"),
				f = n("./src/reddit/helpers/imagePreview/index.ts"),
				b = n("./src/reddit/helpers/media/index.ts"),
				y = n("./src/reddit/models/Upload/index.ts"),
				E = n("./src/reddit/selectors/telemetry.ts"),
				x = n("./src/telemetry/index.ts");
			const S = t => ({
				...E.defaults(t),
				screen: E.screen(t),
				profile: E.profile(t),
				subreddit: E.subreddit(t)
			});
			var C = n("./src/reddit/helpers/trackers/postComposer.ts"),
				O = n("./src/reddit/models/Gold/Powerups/index.ts"),
				k = n("./src/reddit/models/PostCreationForm/index.ts"),
				T = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/selectors/gold/powerups.ts"),
				j = n("./src/reddit/selectors/postCreations.ts"),
				w = n("./src/reddit/actions/postCreation/constants.ts"),
				R = n("./src/reddit/actions/postCreation/general.ts");
			const _ = Object(a.a)(w.u),
				B = Object(a.a)(w.v),
				I = Object(a.a)(w.t),
				A = t => async (e, n) => {
					e(_());
					const o = t.map(({
						url: t,
						uploadKey: n
					}) => {
						const o = Object(b.a)(Object(b.c)(t), "poster.png");
						return e(F(o, n))
					});
					await Promise.all(o);
					const s = n().uploads,
						r = t.map(({
							uploadKey: t
						}) => s[t]).find(t => t.status !== y.a.SUCCESS);
					e(r ? I(r.error) : B())
				}, K = (t, e) => ({
					error: e ? {
						type: t,
						fields: [{
							field: "",
							msg: e
						}]
					} : {
						type: t
					}
				});
			const M = "RTE",
				L = "GALLERY",
				F = (t, e, n, s) => async (r, c, {
					apiContext: a
				}) => {
					const l = Object(j.h)(c()),
						u = Date.now();
					let k = null,
						T = !1,
						w = !1,
						R = !1;
					const _ = t => {
						if (!R && n && T) {
							R = !0;
							const o = c(),
								s = Date.now() - u,
								r = Object(g.c)(g.a.PostComposer);
							w ? (async ({
								state: t,
								uploadKey: e,
								assetId: n,
								isCanceled: o,
								fileSource: s,
								uploadDuration: r,
								correlationId: i
							}) => {
								const c = t.uploads[e],
									a = o || c.status === y.a.CANCELED,
									{
										file: l,
										url: d,
										metadata: u,
										error: p
									} = c,
									h = u.mimetype || l.type,
									m = h.startsWith("video/"),
									g = c.status === y.a.SUCCESS;
								let f = "";
								p ? f = JSON.stringify(p) : a && (f = "canceled");
								const b = {
									width: u.width,
									height: u.height,
									duration: u.videoDuration && Math.round(1e3 * u.videoDuration)
								};
								Object(x.a)({
									source: m ? "videoupload" : "imageupload",
									action: "upload",
									correlationId: i,
									noun: m ? "video" : "image",
									...S(t),
									actionInfo: {
										...E.actionInfo(t),
										success: g,
										...f ? {
											reason: f
										} : {}
									},
									media: {
										mimetype: h,
										uploadDuration: r,
										source: s,
										fileName: l.name,
										size: l.size,
										type: m ? "video" : "image",
										...n ? {
											id: n
										} : {},
										...d ? {
											url: d
										} : {},
										...b
									}
								})
							})({
								state: o,
								uploadKey: e,
								assetId: k,
								isCanceled: t,
								fileSource: n,
								uploadDuration: s,
								correlationId: r
							}) : C.t(o, e)
						}
					};
					return await r(Object(d.l)(t, e, async u => {
						T = !0, Object(d.k)(u.id, () => {
							_(!0)
						});
						const {
							error: g,
							metadata: y
						} = await async function(t, e, n) {
							const s = n && n.allowedPostTypes,
								r = n && n.name,
								c = await Object(b.g)(e) || e.type,
								a = Object(b.b)(e) || void 0;
							if (!a) return K("UNSUPPORTED_BROWSER");
							const l = {
								localUrl: a,
								mimetype: c
							};
							if (!c || !Object(b.i)(c)) return {
								error: {
									type: i.M
								}
							};
							if (c.startsWith("image/")) {
								if (s && !s.images) {
									const t = o.fbt._("Images are not allowed in r/{subredditName}", [o.fbt._param("subredditName", r)], {
										hk: "3C2E7Q"
									});
									return K(i.M, t)
								}
								if ("image/gif" === c) {
									if (e.size > i.S) return K(i.H)
								} else if (e.size > i.U) return K(i.K);
								const t = await Object(f.a)(a);
								l.width = t.width, l.height = t.height
							} else if (c.startsWith("video/")) {
								const c = !(null == n || !n.id) && Object(v.m)(t, {
										subredditId: n.id,
										benefit: O.a.HdVideo
									}),
									u = c ? 2 * i.Y : i.Y;
								if (e.size > u) return K(i.ac);
								let p;
								try {
									p = await Object(b.h)(a, !0)
								} catch (d) {
									return K(i.M)
								}
								if (s) {
									const {
										videos: t,
										images: e
									} = s;
									if (e && !t && p.duration > i.Z) {
										const t = o.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [o.fbt._param("subredditName", r)], {
											hk: "46ULiz"
										});
										return K(i.M, t)
									}
									if (!e && !t) {
										const t = o.fbt._("Videos are not allowed in r/{subredditName}", [o.fbt._param("subredditName", r)], {
											hk: "4uTUZb"
										});
										return K(i.M, t)
									}
								}
								const h = c ? 2 * i.X : i.X;
								if (p.duration > h) {
									const t = o.fbt._("Video is too long. Maximum video length is {duration} minutes.", [o.fbt._param("duration", (h / 60).toString())], {
										hk: "20nB6Q"
									});
									return K(i.M, t)
								}
								if (p.height < i.fb || p.width < i.gb) {
									const t = o.fbt._("Videos must be {min_video_width}x{min_video_height} pixels or larger.", [o.fbt._param("min_video_width", i.gb.toString()), o.fbt._param("min_video_height", i.fb.toString())], {
										hk: "2HSUGl"
									});
									return K(i.M, t)
								}
								if (e.size / p.duration < i.eb) {
									const t = o.fbt._("Videos must have a bitrate of {min_bitrate}KB/s or larger.", [o.fbt._param("min_bitrate", (i.eb / i.N).toString())], {
										hk: "1ehgDE"
									});
									return K(i.M, t)
								}
								l.height = p.height, l.width = p.width, l.videoDuration = p.duration, l.videoFirstFrameUrl = p.firstFrame.dataUrl
							}
							return {
								metadata: l
							}
						}(c(), t, l);
						if (g || !y) return {
							error: g
						};
						r(Object(d.m)({
							key: e,
							metadata: {
								fileSource: n,
								...y
							}
						})), w = !0, s && s();
						const E = t.name,
							x = await (async (t, e, n) => Object(p.a)(Object(h.a)(t, [m.a]), {
								endpoint: `${t.apiUrl}/api/media/asset.json`,
								method: i.cb.POST,
								data: {
									filepath: e,
									mimetype: n
								}
							}))(a(), E, y.mimetype);
						return x.ok ? (k = x.body.asset.asset_id, {
							uploadLease: x.body.args
						}) : {
							error: x.error || void 0
						}
					}, !0)), _(!1), c().uploads[e] || null
				}, D = t => async (e, n, {
					apiContext: o
				}) => {
					const s = n().uploads[t];
					s && !Object(y.c)(s) && await e(F(s.file, s.key, s.metadata.fileSource, void 0))
				}, N = (t, e, n) => async (s, i) => {
					const a = t.map((t, o) => new Promise(async o => {
							const i = Object(y.d)(n, r()().slice(-6));
							await s(F(t, i, e, () => o({
								uploadKey: i,
								isValid: !0
							}))), o({
								uploadKey: i,
								isValid: !1
							})
						})),
						d = await Promise.all(a),
						u = d.map(t => t.uploadKey);
					return s(((t, e = 3) => async (n, s) => {
						const {
							uploads: r
						} = s(), i = t.map(t => r[t]).filter(t => t.status === y.a.FAILED && !t.metadata.mimetype).map(t => t.error), a = i.length > e ? e - 1 : i.length, d = i.length - a;
						i.slice(0, a).forEach(t => n(Object(l.f)({
							duration: l.a,
							kind: T.b.Error,
							text: Object(c.a)(t)
						}))), d > 0 && n(Object(l.f)({
							duration: l.a,
							kind: T.b.Error,
							text: o.fbt._({
								"*": "Couldn't add {number} more files",
								_1: "Couldn't add 1 more file"
							}, [o.fbt._plural(d, "number")], {
								hk: "2fQwvl"
							})
						}))
					})(u)), d.filter(t => t.isValid).map(t => t.uploadKey)
				}, P = (t, e) => async (n, s) => {
					const r = s(),
						i = Object(j.U)(r),
						{
							items: c
						} = i,
						a = !c.length && 1 === t.length,
						p = Object(j.L)(r) && !a;
					let h = !1,
						m = t;
					if (p) {
						if (Object(k.v)(i)) return void n(Object(l.f)({
							kind: T.b.Error,
							text: o.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						m.some(t => Object(b.l)(t.type)) && n(Object(l.f)({
							kind: T.b.Error,
							text: o.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), m = m.filter(t => Object(b.k)(t.type));
						const t = Math.max(0, u.b - c.length);
						m.length > t && (n(Object(l.f)({
							kind: T.b.Error,
							text: o.fbt._("You have hit the limit of {images_limit} images", [o.fbt._param("images_limit", `${u.b}`)], {
								hk: "6M4kX"
							})
						})), m = m.slice(0, t))
					} else m = m.slice(0, 1), h = !0, n(Object(d.j)(L, !0));
					const g = await n(N(m, e, L));
					if (!g.length) return;
					const f = g.map(t => ({
							uploadKey: t,
							caption: "",
							url: ""
						})),
						y = 0 === c.length;
					n(Object(R.d)({
						...i,
						items: h ? f : [...c, ...f],
						selectedKey: y ? g[0] : g[g.length - 1]
					}))
				}
		},
		"./src/reddit/actions/subredditAutocomplete/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return h
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/graphql/operations/SubredditTypeaheadSearch.json"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/reddit/helpers/graphql/normalizeAllowedPostTypesFromGql/index.ts"),
				c = n("./src/reddit/helpers/name/index.ts"),
				a = n("./src/reddit/selectors/subredditAutocomplete.ts"),
				l = n("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const d = Object(o.a)(l.c),
				u = Object(o.a)(l.b),
				p = Object(o.a)(l.a),
				h = (t, e = !1) => async (n, o, {
					gqlContext: l
				}) => {
					const h = Object(c.g)(t);
					if (!h) return;
					const m = o(),
						g = m.subredditAutocomplete;
					if (g.api.pending[h] || g.models[h]) return;
					if (Object(a.b)(m, {
							substring: h
						})) return;
					n(d({
						key: h
					}));
					const f = await ((t, e) => Object(r.a)(t, {
						...s,
						variables: e
					}))(l(), {
						query: h,
						includeNsfw: e
					});
					if (f.ok) {
						const t = f.body.data.subredditTypeahead.subreddits.edges.map(t => (({
							allowedPostTypes: t,
							id: e,
							isCrosspostDestination: n,
							isNsfw: o,
							name: s,
							styles: r,
							subscribersCount: c
						}) => ({
							allowedPostTypes: Object(i.a)(t),
							communityIcon: r && r.icon || "",
							icon: r && r.legacyIcon && r.legacyIcon.url || "",
							id: e,
							isCrosspostDestination: n,
							isNsfw: o,
							name: s,
							primaryColor: r && r.primaryColor || "",
							subscribers: c
						}))(t.node));
						n(u({
							key: h,
							subreddits: t
						}))
					} else n(p({
						key: h,
						error: f.error
					}))
				}
		},
		"./src/reddit/components/MakeGifToggle/index.m.less": function(t, e, n) {
			t.exports = {
				container: "_1iRy5EPCLqSx8I0k9OT0wW",
				content: "NfjQg3srQXRhyOxLBwXrS",
				toggleSwitch: "_1fUmirx6e9tUDs04TQq6A1",
				mCompactSwitch: "_3Cx_YBpXo1s1iy7oA-4s6R",
				mDisabled: "_1M5N6DrrQQCQJs3JctDSu8",
				hoverTooltip: "_9qS60cx9uxyt1k4eZF_0w",
				tooltipContentClass: "_21DP8j-B-UkVKGJONbrTmX"
			}
		},
		"./src/reddit/components/MakeGifToggle/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				a = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/MakeGifToggle/index.m.less"),
				u = n.n(d);
			e.a = t => r.a.createElement(l.a, {
				className: Object(i.a)(u.a.container, t.disabled ? u.a.mDisabled : null, t.isCompact ? u.a.mCompactSwitch : null),
				onMouseDown: t => t.preventDefault(),
				onClick: e => {
					e.stopPropagation(), !t.disabled && t.onClick()
				}
			}, r.a.createElement(l.a, {
				className: u.a.content
			}, r.a.createElement(a.a, {
				className: u.a.toggleSwitch,
				on: t.on
			}), r.a.createElement("label", null, o.fbt._("Make GIF", null, {
				hk: "2ig2GG"
			}))), t.tooltip ? r.a.createElement(c.a, {
				className: u.a.hoverTooltip,
				tooltipContentClass: u.a.tooltipContentClass,
				text: t.tooltip
			}) : null)
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return o
			})), n.d(e, "a", (function() {
				return s
			}));
			const o = 20,
				s = 180
		},
		"./src/reddit/components/ProgressBar/index.m.less": function(t, e, n) {
			t.exports = {
				innerBar: "Db3WJFTcyAR-IM0cIkpDG",
				outerBar: "i8kQtxHYBB8Sb3bPI4M_e"
			}
		},
		"./src/reddit/components/ProgressBar/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/ProgressBar/index.m.less"),
				c = n.n(i);
			e.a = ({
				className: t,
				innerBarClassName: e,
				percent: n
			}) => s.a.createElement("div", {
				className: Object(r.a)(c.a.outerBar, t)
			}, s.a.createElement("div", {
				className: Object(r.a)(c.a.innerBar, e),
				style: {
					width: `${n.toFixed(2)}%`
				}
			}))
		},
		"./src/reddit/components/RichTextEditor/Blockquote/index.m.less": function(t, e, n) {
			t.exports = {
				BlockQuoteWrapper: "_3bqfSxMWo3yWv7j4N8hQy6",
				blockQuoteWrapper: "_3bqfSxMWo3yWv7j4N8hQy6"
			}
		},
		"./src/reddit/components/RichTextEditor/CodeBlock/index.m.less": function(t, e, n) {
			t.exports = {
				CodeBlockWrapper: "_2YrwxhRxsXvszOhYWDUhMh",
				codeBlockWrapper: "_2YrwxhRxsXvszOhYWDUhMh"
			}
		},
		"./src/reddit/components/RichTextEditor/DragController/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return h
			})), n.d(e, "c", (function() {
				return m
			})), n.d(e, "a", (function() {
				return g
			}));
			var o = n("./node_modules/lodash/includes.js"),
				s = n.n(o);
			var r = n("./src/reddit/helpers/dom/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const c = t => t.className.indexOf("public-DraftEditor-content") >= 0,
				a = t => !!t.parentElement && !!t.parentElement.parentElement && c(t.parentElement.parentElement),
				l = t => !(!t.dataset.block || !t.dataset.offsetKey),
				d = t => {
					const {
						offsetKey: e
					} = t.dataset;
					return e ? (t => t.split("-")[0])(e) : ""
				},
				u = (t, e) => {
					return ((t, e) => {
						const n = function(t, e) {
							let n = 0,
								o = t.length - 1;
							for (; n <= o;) {
								const s = o + n >> 1,
									r = e(t[s]);
								if (r > 0) n = s + 1;
								else {
									if (!(r < 0)) return s;
									o = s - 1
								}
							}
							return n
						}(t, t => {
							const n = t.getBoundingClientRect();
							return e < n.top ? -1 : e > n.bottom ? 1 : 0
						});
						return t[Math.min(n, t.length - 1)]
					})(t.querySelectorAll("[data-block][data-offset-key]"), e)
				},
				p = (t, e) => {
					const n = Object(r.b)(t, l, c);
					return n || u(t, e)
				},
				h = (t, e) => {
					const n = (t => {
						const e = t.target;
						if (!(e instanceof HTMLElement)) return;
						const n = Object(r.b)(e, c);
						if (!n) return;
						const o = p(e, t.clientY);
						if (!o) return;
						const s = Object(r.b)(o, a);
						return s ? {
							editorContentElement: n,
							topLevelElement: s,
							blockElement: o
						} : void 0
					})(e);
					if (!n) return;
					const {
						topLevelElement: o,
						blockElement: s
					} = n, l = d(s), u = t.getCurrentContent(), h = u.getBlockForKey(l);
					if (!h) return;
					const {
						upperElement: m,
						lowerElement: g
					} = ((t, e, n, o) => {
						let s = n,
							r = n;
						if (t.getType() === i.b.UNSTYLED) s = r = e;
						else if (Object(i.o)(t.getType())) {
							s = r = e;
							const c = o.getBlockAfter(t.getKey());
							c && Object(i.u)(c.getType()) && (r = n.nextElementSibling)
						} else Object(i.u)(t.getType()) && (s = n.previousElementSibling, r = e);
						return {
							upperElement: s,
							lowerElement: r
						}
					})(h, s, o, u), {
						clientY: f,
						isBefore: b
					} = ((t, e, n) => {
						const o = t.getBoundingClientRect(),
							s = e.getBoundingClientRect();
						let i, a;
						if (n > (o.top + s.bottom) / 2) {
							i = s.bottom, a = !1;
							const t = Object(r.b)(e, t => !!t.nextElementSibling, c);
							if (t) {
								i = (t.nextElementSibling.getBoundingClientRect().top + s.bottom) / 2
							}
						} else {
							i = o.top, a = !0;
							const e = Object(r.b)(t, t => !!t.previousElementSibling, c);
							if (e) {
								i = (e.previousElementSibling.getBoundingClientRect().bottom + o.top) / 2
							}
						}
						return {
							clientY: i,
							isBefore: a
						}
					})(m, g, e.clientY);
					let y = l;
					if (h.getType() !== i.b.UNSTYLED) {
						const t = p(b ? m : g, f);
						t && (y = d(t))
					}
					return {
						clientY: f,
						isBefore: b,
						blockKey: y
					}
				},
				m = t => t.items ? !!Array.from(t.items).find(t => "file" === t.kind) : !(!t.files || !t.files.length) || s()(t.types, "Files"),
				g = t => t.items ? Array.from(t.items).map(t => "file" === t.kind ? t.getAsFile() : null).filter(Boolean) : t.files ? Array.from(t.files) : []
		},
		"./src/reddit/components/RichTextEditor/DragController/index.m.less": function(t, e, n) {
			t.exports = {
				container: "_13Sj3UMDKkCCJTq88berCB",
				hideCaret: "_2BqK1CuzH2oWi2F9_cuFPQ",
				DropLine: "z5iuD3MVYcfS7tTihbvof",
				dropLine: "z5iuD3MVYcfS7tTihbvof",
				Tooltip: "_1z9S1KmnM79xn-UA0FnbP6",
				tooltip: "_1z9S1KmnM79xn-UA0FnbP6"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less": function(t, e, n) {
			t.exports = {
				tooltip: "ki2VbfBhU-qxg1S6VyET6",
				above: "_8fNGSBGvr1Ds8PbrsUGzN",
				below: "_38gWvHp3NJkR5r5ftUfbFG",
				HoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2",
				hoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				a = n.n(c);

			function l() {
				return (l = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			e.a = i.a.wrapped(t => {
				const {
					children: e,
					className: n,
					renderBelow: o,
					text: i,
					tooltipContentClass: c,
					...d
				} = t;
				return s.a.createElement("div", l({}, d, {
					className: Object(r.a)(a.a.container, n)
				}), i ? s.a.createElement("div", {
					className: Object(r.a)(a.a.tooltip, c, o ? a.a.below : a.a.above)
				}, i) : null, e)
			}, "HoverTooltip", a.a)
		},
		"./src/reddit/components/RichTextEditor/LinksController/LinkDetailsPopup/index.m.less": function(t, e, n) {
			t.exports = {
				LinkDetailsBox: "_2F28OVOVlGo6WCT2l8lHzO",
				linkDetailsBox: "_2F28OVOVlGo6WCT2l8lHzO",
				Link: "_3vJCj_aXdDc-UXA9fDK-z-",
				link: "_3vJCj_aXdDc-UXA9fDK-z-",
				LinkButton: "_1NtBcR7JgjxkWLJrk3ddD3",
				linkButton: "_1NtBcR7JgjxkWLJrk3ddD3"
			}
		},
		"./src/reddit/components/RichTextEditor/LinksController/LinkEditorPopup/index.m.less": function(t, e, n) {
			t.exports = {
				EditForm: "_1iFkUjPC4J8jzWrDthDpcv",
				editForm: "_1iFkUjPC4J8jzWrDthDpcv",
				LinkEditorBox: "_3HMg7pEvqliZhuStFZ241S",
				linkEditorBox: "_3HMg7pEvqliZhuStFZ241S",
				Input: "_2rXi0UvEKRcI3WdI52LAx1",
				input: "_2rXi0UvEKRcI3WdI52LAx1",
				Label: "_2olni9Ucr8-t8W62nTkY_",
				label: "_2olni9Ucr8-t8W62nTkY_",
				HintAndButtonRow: "_2qiAR3ZyDGPSr9zmqhP_5Z",
				hintAndButtonRow: "_2qiAR3ZyDGPSr9zmqhP_5Z",
				InvalidUrlHint: "pKrgYGkHvjHPFkWO-Gnko",
				invalidUrlHint: "pKrgYGkHvjHPFkWO-Gnko",
				SubmitButton: "_8a_rf-Al8VNnUQ42WlvF",
				submitButton: "_8a_rf-Al8VNnUQ42WlvF"
			}
		},
		"./src/reddit/components/RichTextEditor/OrderedList/index.m.less": function(t, e, n) {
			t.exports = {
				OrderedListWrapper: "_1QXegNe8bOemD558m-vc9t",
				orderedListWrapper: "_1QXegNe8bOemD558m-vc9t"
			}
		},
		"./src/reddit/components/RichTextEditor/Paragraph/index.m.less": function(t, e, n) {
			t.exports = {
				ParagraphWrapper: "_3LuG0YVLLHE2azRNVaKz7O",
				paragraphWrapper: "_3LuG0YVLLHE2azRNVaKz7O"
			}
		},
		"./src/reddit/components/RichTextEditor/TextRendering/index.m.less": function(t, e, n) {
			t.exports = {
				H1: "_15ThA3NFuzpQTnPu0I3QKj",
				h1: "_15ThA3NFuzpQTnPu0I3QKj",
				H2: "_3R5icAd6cRzwpq-yhvQUoW",
				h2: "_3R5icAd6cRzwpq-yhvQUoW",
				H3: "_3UxnA7bFPnKoS0rKMO1UYe",
				h3: "_3UxnA7bFPnKoS0rKMO1UYe",
				H4: "_10CFPbxVR0HQhyRBkeExmO",
				h4: "_10CFPbxVR0HQhyRBkeExmO",
				H5: "_3bidJE2WceaRjyBA8LLfp3",
				h5: "_3bidJE2WceaRjyBA8LLfp3",
				H6: "_27N6aQ0-d-ntRM1JkDwGg7",
				h6: "_27N6aQ0-d-ntRM1JkDwGg7"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.m.less": function(t, e, n) {
			t.exports = {
				button: "_2lAJkFZXhr5kbH7YF-sYFf",
				enabled: "_1H0LLEwUP5ys6cgxr9KhMa",
				active: "_32EiQr-Px2GJvCfigwwmuK"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				l = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.m.less"),
				d = n.n(l);

			function u() {
				return (u = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const p = t => {
				t.preventDefault(), t.stopPropagation()
			};
			e.a = i.a.wrapped(t => {
				const {
					active: e,
					className: n,
					disabledTooltip: o,
					enabled: i = !0,
					tooltip: l,
					Icon: h,
					onClick: m,
					tooltipBelow: g,
					children: f
				} = t, b = {
					"aria-label": l,
					"aria-selected": e,
					className: Object(r.a)(d.a.button, n, {
						[d.a.active]: !!e,
						[d.a.enabled]: i
					}),
					onMouseDown: p,
					onClick: t => {
						p(t), i && m && m(t)
					},
					role: "button",
					tabIndex: -1
				};
				return s.a.createElement(c.q, u({}, b, {
					size: c.c.S,
					priority: c.b.Plain,
					isSquare: !0,
					Icon: h
				}), s.a.createElement(a.a, {
					text: (i ? l : o) || "",
					tooltipContentClass: t.tooltipContentClass,
					renderBelow: g
				}), f)
			}, "FormatterButton", d.a)
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.m.less": function(t, e, n) {
			t.exports = {
				LoadingIcon: "jOFrSZE7wRk_lVAP2pBvY",
				loadingIcon: "jOFrSZE7wRk_lVAP2pBvY",
				Text: "EVdFfF5K7kZFMaYpSHbLe",
				text: "EVdFfF5K7kZFMaYpSHbLe",
				Button: "_1Mg8ZhclDuQlkzEqVU21qu",
				button: "_1Mg8ZhclDuQlkzEqVU21qu"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = n("./src/reddit/selectors/editorContent.ts"),
				p = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				h = n("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.m.less"),
				m = n.n(h);
			const g = a.a.wrapped(d.a, "LoadingIcon", m.a),
				f = Object(c.c)({
					isConverting: (t, e) => Object(u.a)(t, e.draftKey)
				}),
				b = Object(i.b)(f);
			e.a = r.a.memo(b(t => r.a.createElement(l.q, {
				priority: l.b.Plain,
				size: l.c.XS,
				text: r.a.createElement(r.a.Fragment, null, t.isConverting && r.a.createElement(g, {
					sizePx: 12
				}), o.fbt._("Markdown Mode", null, {
					hk: "1DXoXV"
				})),
				"aria-label": o.fbt._("Switch to markdown", null, {
					hk: "OxsM0"
				}),
				tabIndex: -1,
				className: t.className,
				onClick: t.onClick
			}, !t.shouldHideTooltip && r.a.createElement(p.a, {
				text: o.fbt._("Switch to markdown", null, {
					hk: "4mWw83"
				})
			}))))
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.m.less": function(t, e, n) {
			t.exports = {
				ImageIcon: "_1jv-IJjyjDSSVuYe6CzeHv",
				imageIcon: "_1jv-IJjyjDSSVuYe6CzeHv",
				VideoIcon: "uo_2BSPFse-IQNQbclyKb",
				videoIcon: "uo_2BSPFse-IQNQbclyKb",
				HiddenInput: "_2keaDnXIlu9Yq2y-cC8zgu",
				hiddenInput: "_2keaDnXIlu9Yq2y-cC8zgu"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.m.less": function(t, e, n) {
			t.exports = {
				Icon: "_3UAl61hrkRAXX5JQ6m_q8R",
				icon: "_3UAl61hrkRAXX5JQ6m_q8R"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "f", (function() {
				return C
			})), n.d(e, "b", (function() {
				return K
			})), n.d(e, "e", (function() {
				return M
			})), n.d(e, "j", (function() {
				return L
			})), n.d(e, "g", (function() {
				return F
			})), n.d(e, "i", (function() {
				return D
			})), n.d(e, "k", (function() {
				return N
			})), n.d(e, "d", (function() {
				return P
			})), n.d(e, "l", (function() {
				return U
			})), n.d(e, "h", (function() {
				return H
			})), n.d(e, "a", (function() {
				return z
			})), n.d(e, "c", (function() {
				return V
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/icons/svgs/FormattingBlockQuotes/index.tsx"),
				a = n("./src/reddit/icons/svgs/FormattingBold/index.tsx"),
				l = n("./src/reddit/icons/svgs/FormattingCodeBlock/index.tsx"),
				d = n("./src/reddit/icons/svgs/FormattingHeading/index.tsx"),
				u = n("./src/reddit/icons/svgs/FormattingItalics/index.tsx"),
				p = n("./src/reddit/icons/svgs/FormattingMonospace/index.tsx"),
				h = n("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				m = n("./src/reddit/icons/svgs/FormattingSpoiler/index.tsx"),
				g = n("./src/reddit/icons/svgs/FormattingStrikethrough/index.tsx"),
				f = n("./src/reddit/icons/svgs/FormattingSuperscript/index.tsx"),
				b = n("./src/reddit/icons/svgs/FormattingUnorderedList/index.tsx"),
				y = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				E = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.m.less"),
				x = n.n(E);

			function S() {
				return (S = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const C = (t, e = 0) => n => {
					const o = (t => i.a.wrapped(t, "Icon", x.a))(t);
					return r.a.createElement(o, S({}, n, {
						style: {
							padding: e
						}
					}))
				},
				O = C(c.a),
				k = C(a.a),
				T = C(l.a),
				v = C(d.a),
				j = C(u.a),
				w = C(p.a),
				R = C(h.a),
				_ = C(m.a, 1),
				B = C(g.a),
				I = C(f.a),
				A = C(b.a),
				K = {
					type: "style",
					name: "bold",
					Icon: k,
					style: y.k.BOLD,
					tooltipTranslation: () => o.fbt._("Bold", null, {
						hk: "16qNLn"
					})
				},
				M = {
					type: "style",
					name: "italics",
					Icon: j,
					style: y.k.ITALIC,
					tooltipTranslation: () => o.fbt._("Italics", null, {
						hk: "3hxpiB"
					})
				},
				L = {
					type: "style",
					name: "strikethrough",
					Icon: B,
					style: y.k.STRIKETHROUGH,
					tooltipTranslation: () => o.fbt._("Strikethrough", null, {
						hk: "U4hXC"
					})
				},
				F = {
					type: "style",
					name: "inline_code",
					Icon: w,
					style: y.k.MONOSPACE,
					tooltipTranslation: () => o.fbt._("Inline Code", null, {
						hk: "1eNxEt"
					})
				},
				D = {
					type: "style",
					name: "spoiler",
					Icon: _,
					style: y.k.SPOILER,
					tooltipTranslation: () => o.fbt._("Spoiler", null, {
						hk: "1tb6Ht"
					})
				},
				N = {
					type: "style",
					name: "superscript",
					Icon: I,
					style: y.k.SUPERSCRIPT,
					tooltipTranslation: () => o.fbt._("Superscript", null, {
						hk: "sqKFn"
					})
				},
				P = {
					type: "block",
					name: "heading",
					Icon: v,
					block: y.b.H1,
					tooltipTranslation: () => o.fbt._("Heading", null, {
						hk: "4jnBPs"
					})
				},
				U = {
					type: "block",
					name: "unordered_list",
					Icon: A,
					block: y.i.UNORDERED,
					tooltipTranslation: () => o.fbt._("Bulleted List", null, {
						hk: "21Yx7R"
					})
				},
				H = {
					type: "block",
					name: "ordered_list",
					Icon: R,
					block: y.i.ORDERED,
					tooltipTranslation: () => o.fbt._("Numbered List", null, {
						hk: "4BmF1X"
					})
				},
				z = {
					type: "block",
					name: "block_quote",
					Icon: O,
					block: y.e,
					tooltipTranslation: () => o.fbt._("Quote Block", null, {
						hk: "1xUsGm"
					})
				},
				V = {
					type: "block",
					name: "code_block",
					Icon: T,
					block: y.f,
					tooltipTranslation: () => o.fbt._("Code Block", null, {
						hk: "2y19DH"
					})
				}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/index.m.less": function(t, e, n) {
			t.exports = {
				toolbarContent: "_2vR2-7URvDAFSwQjhcvJ7m",
				isSticky: "r7zyyy152ZTdiHhea0cIj",
				tooltip: "dMXy0l6Saub8-fPDkQvGC",
				SectionSpacer: "_2voJAi1L0g2QbtAFDHSOCK",
				sectionSpacer: "_2voJAi1L0g2QbtAFDHSOCK",
				Spacer: "uoedn0efWwCxoQUIxsJY3",
				spacer: "uoedn0efWwCxoQUIxsJY3"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/index.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return D
			})), n.d(e, "g", (function() {
				return U
			})), n.d(e, "f", (function() {
				return H
			})), n.d(e, "h", (function() {
				return z
			})), n.d(e, "e", (function() {
				return V
			})), n.d(e, "a", (function() {
				return W
			})), n.d(e, "d", (function() {
				return q
			})), n.d(e, "b", (function() {
				return G
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				d = n("./src/reddit/icons/svgs/FormattingTable/index.tsx"),
				u = n("./src/reddit/components/RichTextEditor/editorStateTransforms.ts"),
				p = n("./src/reddit/components/RichTextEditor/helpers/controlsState.ts"),
				h = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				m = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				g = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				f = n("./src/reddit/components/RichTextEditor/table/helpers.ts");
			var b = (t, e, n) => {
					if (Object(h.v)(o.RichUtils.getCurrentBlockType(t))) return t;
					const s = t.getCurrentContent(),
						r = t.getSelection().getEndKey(),
						i = Object(f.l)(e, n),
						c = Object(g.f)(s, r, i, g.a.after, !0),
						a = o.EditorState.push(t, c, m.e);
					return o.EditorState.forceSelection(a, o.SelectionState.createEmpty(i[0].getKey()))
				},
				y = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				E = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx"),
				x = n("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx"),
				S = n("./src/lib/constants/index.ts"),
				C = n("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				O = n("./src/reddit/icons/svgs/Video/index.tsx"),
				k = n("./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.m.less"),
				T = n.n(k);
			const v = a.a.wrapped(C.a, "ImageIcon", T.a),
				j = ({
					isFilled: t,
					...e
				}) => i.a.createElement(v, e),
				w = a.a.wrapped(O.a, "VideoIcon", T.a),
				R = ({
					isFilled: t,
					...e
				}) => i.a.createElement(w, e),
				_ = a.a.input("HiddenInput", T.a);
			class B extends r.Component {
				constructor() {
					super(...arguments), this.hiddenInputEl = null, this.onFileInputChange = t => {
						t.stopPropagation();
						const e = this.hiddenInputEl;
						e.files && e.files.length && (this.props.onFilesInput(Array.from(e.files)), e.value = "")
					}, this.onButtonClick = () => {
						this.hiddenInputEl && this.hiddenInputEl.click(), this.props.onClick()
					}, this.onHiddenInputClick = t => t.stopPropagation()
				}
				render() {
					const {
						controlsState: t,
						destSubreddit: e,
						type: n
					} = this.props, o = "image" === n, r = t.blocks[h.a];
					let c = !0;
					if (e && e.allowedPostTypes) {
						const {
							images: t,
							videos: n
						} = e.allowedPostTypes;
						c = o ? t : n
					}
					return i.a.createElement(y.a, {
						Icon: o ? j : R,
						active: r.isActive,
						enabled: r.isEnabled && c,
						tooltip: o ? s.fbt._("Add an image", null, {
							hk: "4bqU7J"
						}) : s.fbt._("Add a video", null, {
							hk: "2dn6oZ"
						}),
						onClick: this.onButtonClick
					}, i.a.createElement(_, {
						multiple: !0,
						innerRef: t => this.hiddenInputEl = t,
						onChange: this.onFileInputChange,
						onClick: this.onHiddenInputClick,
						type: "file",
						accept: Array.from(o ? S.a : S.b).join()
					}))
				}
			}
			var I = n("./src/reddit/components/RichTextEditor/Toolbar/index.m.less"),
				A = n.n(I);

			function K() {
				return (K = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const M = Object(E.f)(l.a),
				L = Object(E.f)(d.a),
				F = t => i.a.createElement(y.a, K({}, t, {
					tooltipContentClass: A.a.tooltip
				})),
				D = a.a.div("SectionSpacer", A.a),
				N = a.a.div("Spacer", A.a),
				P = (t, e, n, s, r) => {
					const {
						name: c,
						Icon: a,
						tooltipTranslation: l
					} = t, d = l();
					if ("style" === t.type) {
						const {
							style: o
						} = t;
						return i.a.createElement(F, {
							Icon: a,
							active: e.styles[o].isActive,
							enabled: e.styles[o].isEnabled,
							key: c,
							tooltip: d,
							onClick: () => {
								const t = Object(u.c)(o, n);
								s(t), r(c, ((t, e) => t.getCurrentInlineStyle().contains(e))(t, o))
							}
						})
					} {
						const {
							block: l
						} = t;
						return i.a.createElement(F, {
							Icon: a,
							active: e.blocks[l].isActive,
							enabled: e.blocks[l].isEnabled,
							key: c,
							tooltip: d,
							onClick: () => {
								const t = Object(u.i)(l, n);
								s(t), r(c, ((t, e) => o.RichUtils.getCurrentBlockType(t) === e)(t, l))
							}
						})
					}
				},
				U = (t, e, n, o, s) => t.map(t => P(t, e, n, o, s)),
				H = [E.b, E.e],
				z = [E.j, E.g, E.k, E.i],
				V = [E.d, E.l, E.h, E.a, E.c],
				W = t => i.a.createElement(F, {
					Icon: M,
					active: t.controlsState.link.isActive,
					enabled: t.controlsState.link.isEnabled,
					tooltip: s.fbt._("Link", null, {
						hk: "e4PGW"
					}),
					onClick: () => {
						t.onLinkButtonClick(), t.trackOnClick("link", !0)
					}
				}),
				q = t => i.a.createElement(F, {
					Icon: L,
					active: t.controlsState.blocks[h.l].isActive,
					enabled: t.controlsState.blocks[h.l].isEnabled,
					tooltip: s.fbt._("Table", null, {
						hk: "3cHfLT"
					}),
					onClick: () => {
						t.onChange(b(t.editorState, 3, 2)), t.trackOnClick("table", !0)
					}
				}),
				G = t => {
					const {
						className: e,
						allowMediaUploads: n = !1,
						destSubreddit: o,
						editorState: s,
						isOverlay: r,
						onChange: a,
						onFilesSelect: l,
						readOnly: d,
						trackOnClick: u,
						onLinkButtonClick: h,
						onMarkdownButtonClick: m
					} = t, g = Object(p.a)(s);
					return d && Object(p.b)(g), i.a.createElement("div", {
						className: Object(c.a)(A.a.toolbarContent, e, {
							[A.a.isSticky]: !r
						})
					}, U(H, g, s, a, u), i.a.createElement(W, {
						controlsState: g,
						trackOnClick: u,
						onLinkButtonClick: h
					}), U(z, g, s, a, u), i.a.createElement(D, null), U(V, g, s, a, u), i.a.createElement(D, null), i.a.createElement(q, {
						controlsState: g,
						editorState: s,
						trackOnClick: u,
						onChange: a
					}), n && i.a.createElement(B, {
						destSubreddit: o,
						controlsState: g,
						onClick: () => u("image_upload"),
						onFilesInput: l,
						type: "image"
					}), n && i.a.createElement(B, {
						destSubreddit: o,
						controlsState: g,
						onClick: () => u("video_upload"),
						onFilesInput: l,
						type: "video"
					}), i.a.createElement(N, null), i.a.createElement(x.a, {
						onClick: m
					}))
				}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function s() {
				const t = window.getSelection();
				if (!t.rangeCount) return null;
				const e = Object(o.getVisibleSelectionRect)(window);
				return e || (!e && t.focusNode && t.focusNode === t.anchorNode ? t.focusNode.getBoundingClientRect() : null)
			}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/index.m.less": function(t, e, n) {
			t.exports = {
				tooltipBox: "tVQ1dB4n0mAWdcQNxFq-K",
				dropdown: "_1akkpO3lymdoWGIc5tjIpm",
				triangle: "_2O2U-Vhc1mg9O7DOwp50Aa",
				triangleBack: "_3IfYYXUMUzn2OvoiMUNcaQ",
				triangleFront: "_3CtwSTtkmKXvzDo3TmCp9C",
				triangleBelow: "_1churYJpAwcb-tf0k1c46F"
			}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/index.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return h
			})), n.d(e, "b", (function() {
				return g
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/index.tsx"),
				c = n("./src/reddit/helpers/dom/index.ts"),
				a = n("./src/reddit/components/RichTextEditor/Tooltip/index.m.less"),
				l = n.n(a);
			const d = 8,
				u = 16,
				p = 15 + u / 2;
			var h;
			! function(t) {
				t[t.None = 0] = "None", t[t.Above = 1] = "Above", t[t.Below = 2] = "Below"
			}(h || (h = {}));
			const m = ({
				isBelow: t = !1,
				style: e
			}) => s.a.createElement("div", {
				className: Object(r.a)(l.a.triangle, {
					[l.a.triangleBelow]: t
				}),
				style: e
			}, s.a.createElement("div", {
				className: l.a.triangleBack
			}), s.a.createElement("div", {
				className: l.a.triangleFront
			}));
			class g extends o.Component {
				constructor(t) {
					super(t), this.containerRef = null, this.updateContainerRef = t => this.containerRef = t, this.setTargetPosition = t => {
						t ? this.updatePositioning(t) : this.setState({
							positioning: null
						})
					}, this.state = {
						positioning: null
					}
				}
				updatePositioning(t) {
					if (!this.containerRef) return;
					const e = this.containerRef.getBoundingClientRect(),
						n = Math.round(e.width),
						o = Math.round(e.height),
						s = this.state.positioning;
					if (!t) {
						if (!s) return;
						if (s.tooltipWidth === n && s.tooltipHeight === o) return
					}
					const r = t ? t.bottom : s.target.bottom,
						i = t ? t.top : s.target.top,
						a = t ? t.left : s.target.left,
						l = Object(c.e)(this.containerRef);
					let d, u, p;
					if (l) {
						const t = l.getBoundingClientRect();
						d = t.bottom - (r || 0), u = a - t.left + l.scrollLeft, p = i - t.top + l.scrollTop
					} else {
						const t = document.documentElement,
							e = window.pageYOffset || t.scrollTop;
						u = a + (window.pageXOffset || t.scrollLeft), p = i + e
					}
					const h = {
						target: {
							top: i,
							left: a
						},
						tooltipWidth: n,
						tooltipHeight: o,
						tooltip: {
							top: p,
							left: u,
							bottom: d
						}
					};
					this.adjustPositionForTriangle(h, l), this.setState({
						positioning: h
					})
				}
				adjustPositionForTriangle(t, e) {
					const {
						trianglePlacement: n
					} = this.props;
					if (!n) return;
					const o = e ? e.offsetWidth : document.documentElement.offsetWidth,
						s = o ? Math.max(t.tooltip.left + t.tooltipWidth - o, 0) : 0;
					t.tooltip.left -= s + p;
					const r = s + p - u / 2;
					let i;
					n === h.Above ? (t.tooltip.top += d, i = -d) : (t.tooltip.top -= t.tooltipHeight + d, i = t.tooltipHeight), t.triangle = {
						top: i,
						left: r
					}
				}
				componentDidUpdate(t, e) {
					t.targetPosition !== this.props.targetPosition ? this.setTargetPosition(this.props.targetPosition || null) : this.updatePositioning()
				}
				componentDidMount() {
					this.setTargetPosition(this.props.targetPosition || null), this.props.onSetPositionUpdater && this.props.onSetPositionUpdater(this.setTargetPosition)
				}
				componentWillUnmount() {
					this.props.onSetPositionUpdater && this.props.onSetPositionUpdater(null)
				}
				render() {
					const {
						aboveParent: t,
						dropdown: e,
						trianglePlacement: n
					} = this.props, {
						positioning: o
					} = this.state, c = o && void 0 !== o.triangle && s.a.createElement(m, {
						isBelow: n === h.Below,
						style: {
							top: o.triangle.top + "px",
							left: o.triangle.left + "px"
						}
					});
					let a = s.a.createElement("div", {
						className: Object(r.a)(l.a.tooltipBox, this.props.className, {
							[l.a.dropdown]: e
						}),
						style: o ? {
							left: o.tooltip.left,
							...t ? {
								bottom: o.tooltip.bottom
							} : {
								top: o.tooltip.top
							}
						} : {},
						ref: this.updateContainerRef
					}, o && this.props.children && s.a.createElement(s.a.Fragment, null, c, this.props.children));
					return this.props.usePortal && (a = Object(i.d)(a, this.props.portalContainer || document.body)), a
				}
			}
		},
		"./src/reddit/components/RichTextEditor/UnorderedList/index.m.less": function(t, e, n) {
			t.exports = {
				UnorderedListWrapper: "vXDC2CysyRNVq3lFirKDs",
				unorderedListWrapper: "vXDC2CysyRNVq3lFirKDs"
			}
		},
		"./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return o
			})), n.d(e, "e", (function() {
				return s
			})), n.d(e, "g", (function() {
				return r
			})), n.d(e, "h", (function() {
				return i
			})), n.d(e, "b", (function() {
				return c
			})), n.d(e, "d", (function() {
				return a
			})), n.d(e, "f", (function() {
				return l
			})), n.d(e, "a", (function() {
				return d
			}));
			const o = "bold",
				s = "italic",
				r = "underline",
				i = "undo",
				c = "backspace",
				a = "delete",
				l = "split-block",
				d = "adjust-depth"
		},
		"./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "e", (function() {
				return s
			})), n.d(e, "d", (function() {
				return r
			})), n.d(e, "b", (function() {
				return i
			})), n.d(e, "c", (function() {
				return c
			})), n.d(e, "f", (function() {
				return a
			}));
			const o = "backspace-character",
				s = "insert-fragment",
				r = "insert-characters",
				i = "change-block-data",
				c = "change-block-type",
				a = "remove-range"
		},
		"./src/reddit/components/RichTextEditor/editorStateTransforms.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return u
			})), n.d(e, "i", (function() {
				return p
			})), n.d(e, "b", (function() {
				return g
			})), n.d(e, "f", (function() {
				return f
			})), n.d(e, "h", (function() {
				return b
			})), n.d(e, "g", (function() {
				return y
			})), n.d(e, "d", (function() {
				return E
			})), n.d(e, "e", (function() {
				return x
			})), n.d(e, "a", (function() {
				return S
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				r = n("./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts"),
				i = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				a = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/styles.ts"),
				d = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const u = (t, e) => {
					return e.getSelection().isCollapsed() ? Object(l.a)(t, e) : Object(l.b)(t, e)
				},
				p = (t, e) => {
					const n = e.getCurrentContent(),
						s = e.getSelection(),
						r = s.getEndKey(),
						a = o.RichUtils.getCurrentBlockType(e) === t ? d.n : t;
					let u = e,
						p = o.Modifier.setBlockType(n, s, a);
					const h = n.getBlockForKey(r).getLength();
					if (Object(d.r)(a) || Object(d.q)(a)) {
						const t = o.SelectionState.createEmpty(s.getStartKey()).merge({
							focusKey: s.getEndKey(),
							focusOffset: h
						});
						u = Object(l.c)(u), p = ((t, e) => {
							const n = Object.keys(d.k).reduce((t, n) => o.Modifier.removeInlineStyle(t, e, d.k[n]), t);
							return Object(c.h)(n, e)
						})(p, t)
					}
					if (Object(d.q)(a) || Object(d.p)(a)) {
						const t = p.getBlockAfter(r);
						if (!t || t.getType() !== a && t.getType() !== d.n) {
							const t = o.SelectionState.createEmpty(r).merge({
								anchorOffset: h,
								focusOffset: h
							});
							p = o.Modifier.splitBlock(p, t), p = o.Modifier.setBlockType(p, p.getSelectionAfter(), d.n)
						}
					}
					return p = p.merge({
						selectionAfter: s
					}), o.EditorState.push(u, p, i.c)
				},
				h = (t, e) => {
					const n = o.Modifier.setBlockType(t, e, d.n);
					return o.Modifier.replaceText(n, e, "", Object(s.OrderedSet)([]))
				},
				m = (t, e) => o.EditorState.forceSelection(t, o.SelectionState.createEmpty(e)),
				g = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						r = a.d(e, n),
						c = r.getBlockAfter(n.getEndKey()),
						l = o.SelectionState.createEmpty(c.getKey()),
						u = o.Modifier.replaceText(o.Modifier.setBlockType(r, l, d.n), l, "", Object(s.OrderedSet)([])),
						p = o.EditorState.push(t, u, i.d);
					return m(p, c.getKey())
				},
				f = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						s = e.getBlockForKey(n.getEndKey()),
						i = s.set("depth", Math.max(s.getDepth() - 1, 0)),
						c = e.merge({
							blockMap: e.getBlockMap().merge({
								[s.getKey()]: i
							})
						});
					return o.EditorState.push(t, c, r.a)
				},
				b = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						s = e.getBlockForKey(n.getEndKey()).getKey(),
						r = o.EditorState.push(t, h(e, n), i.c);
					return m(r, s)
				},
				y = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						s = e.getBlockForKey(n.getEndKey()),
						r = s.getKey(),
						c = e.getBlockBefore(r).getKey(),
						a = o.SelectionState.createEmpty(r).merge({
							focusOffset: s.getText().length
						}),
						l = o.EditorState.push(t, h(((t, e) => {
							const n = t.getBlockMap().remove(e);
							return t.merge({
								blockMap: n
							})
						})(e, c), a), i.c);
					return m(l, r)
				},
				E = t => {
					const e = a.d(t.getCurrentContent(), t.getSelection());
					return o.EditorState.push(t, e, r.f)
				},
				x = t => {
					const e = a.a(t.getCurrentContent(), t.getSelection(), "\n");
					return o.EditorState.push(t, e, i.d)
				},
				S = t => {
					const e = t.getSelection(),
						n = a.a(t.getCurrentContent(), e, " ");
					return o.EditorState.push(t, n, i.d)
				}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/tooltipAsync.ts": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			e.a = Object(o.a)({
				resolved: {},
				chunkName: () => "PowerupsEmotesTooltip",
				isReady(t) {
					const e = this.resolve(t);
					return !1 !== this.resolved[e] && !!n.m[e]
				},
				importAsync: () => n.e("PowerupsEmotesTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/emotes/Powerups/Tooltip.tsx")),
				requireAsync(t) {
					const e = this.resolve(t);
					return this.resolved[e] = !1, this.importAsync(t).then(t => (this.resolved[e] = !0, t))
				},
				requireSync(t) {
					const e = this.resolve(t);
					return n(e)
				},
				resolve() {
					return "./src/reddit/components/RichTextEditor/emotes/Powerups/Tooltip.tsx"
				}
			})
		},
		"./src/reddit/components/RichTextEditor/emotes/decorator.m.less": function(t, e, n) {
			t.exports = {
				emote: "Q7hqnjoPSXm7QyvW8qf57",
				sticker: "_1WD0TSe2_gY29FXmFjPCza"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return p
			})), n.d(e, "c", (function() {
				return h
			})), n.d(e, "g", (function() {
				return m
			})), n.d(e, "b", (function() {
				return g
			})), n.d(e, "h", (function() {
				return f
			})), n.d(e, "f", (function() {
				return b
			})), n.d(e, "e", (function() {
				return y
			})), n.d(e, "i", (function() {
				return E
			})), n.d(e, "d", (function() {
				return x
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				r = n("./src/lib/memoizeByReference/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				d = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				u = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const p = "⬛";

			function h(t, e) {
				return t.createEntity(c.a.EMOTE, "IMMUTABLE", e)
			}

			function m(t, e) {
				let n = e.getCurrentContent();
				const s = (n = h(n, t)).getLastCreatedEntityKey();
				n = Object(d.b)(n, e.getSelection(), p, void 0, s);
				const r = o.EditorState.push(e, n, i.d);
				return o.EditorState.forceSelection(r, r.getSelection())
			}

			function g(t, e) {
				if (e.getStartKey() !== e.getEndKey()) return !1;
				const n = t.getBlockForKey(e.getEndKey()).getType();
				return !(Object(u.q)(n) || Object(u.r)(n) || Object(u.t)(n))
			}

			function f(t, e) {
				const n = Object(a.a)(t, e, e => {
					const n = e.getEntity();
					return !!n && t.getEntity(n).getType() === c.a.EMOTE
				});
				let s;
				for (; s = n.pop();) {
					const e = o.SelectionState.createEmpty(s.blockKey).merge({
						anchorOffset: s.start,
						focusOffset: s.end
					});
					t = o.Modifier.removeRange(t, e, "backward")
				}
				return t
			}

			function b(t) {
				const e = t.getSelection();
				if (!e.isCollapsed()) return null;
				const n = t.getCurrentContent().getBlockForKey(e.getFocusKey()),
					o = n.getText(),
					s = n.getCharacterList();
				let r = e.getFocusOffset() - 1;
				const i = [];
				for (; r >= 0;) {
					const t = o[r],
						e = s.get(r),
						n = e && e.getEntity();
					if (!t.trim().length || n) return null;
					if (":" === t && i.length > 0) break;
					i.unshift(t), r--
				}
				return r >= 0 && i.length ? i.join("").toLowerCase() : null
			}

			function y(t, e, n) {
				t.findEntityRanges(t => {
					const e = t.getEntity();
					return !!e && n.getEntity(e).getType() === c.a.EMOTE
				}, e)
			}
			const E = Object(r.a)(t => {
				if (t.getBlockMap().size > 1) return !1;
				const e = t.getFirstBlock();
				let n = 0;
				return y(e, () => n++, t), n <= 3 && n === e.getLength()
			});

			function x(t, e) {
				if (E(t.getCurrentContent()) === E(e.getCurrentContent())) return t;
				const n = t.getCurrentContent(),
					r = n.getFirstBlock();
				return o.EditorState.set(t, {
					currentContent: o.Modifier.mergeBlockData(n, Object(l.b)(r), Object(s.Map)({
						_emote_modified: new Date
					}))
				})
			}
		},
		"./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function s(t, e, n, s) {
				let r = t.getCharacterList();
				return r = r.withMutations(t => {
					for (let r = e; r < n; r++) t.set(r, o.CharacterMetadata.applyEntity(t.get(r), s))
				}), t.set("characterList", r)
			}
		},
		"./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			})), n.d(e, "b", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts");

			function s(t, e, n, s, r) {
				const i = t.createEntity(n.getType(), n.getMutability(), n.getData()),
					c = t.getLastCreatedEntityKey();
				return [i, Object(o.a)(e, s, r, c)]
			}

			function r(t, e, n = !1) {
				const o = new Map;
				let r = e,
					i = t;
				return e.forEach((t, e) => {
					t && e && t.findEntityRanges(t => !!t.getEntity(), (n, s) => {
						const r = t.getEntityAt(n),
							i = o.get(r) || [];
						i.push({
							start: n,
							end: s,
							blockKey: e
						}), o.set(r, i)
					})
				}), o.forEach((e, o) => {
					const c = t.getEntity(o);
					(n ? e.slice(1) : e).forEach(({
						start: t,
						end: e,
						blockKey: n
					}) => {
						const o = r.get(n),
							[a, l] = s(i, o, c, t, e);
						i = a, r = r.set(n, l)
					})
				}), [i, r]
			}
		},
		"./src/reddit/components/RichTextEditor/entity/entityTypes.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "b", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const o = {
					COMMENT_LINK: "COMMENT_LINK",
					EMOTE: "EMOTE",
					LINK: "LINK",
					POST_LINK: "POST_LINK",
					SUBREDDIT_LINK: "SUBREDDIT_LINK",
					USER_LINK: "USER_LINK",
					USER_MENTION: "USER_MENTION"
				},
				s = new Set([o.COMMENT_LINK, o.LINK, o.POST_LINK, o.SUBREDDIT_LINK, o.USER_LINK, o.USER_MENTION]),
				r = (t, e) => {
					const n = t && e.getEntity(t);
					return !!n && (t => s.has(t))(n.getType())
				}
		},
		"./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			}));
			var o = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts");

			function s(t, e, n) {
				const s = [];
				return Object(o.a)(t, e, (t, o) => {
					const r = e.getStartKey() === o ? e.getStartOffset() : 0,
						i = e.getEndKey() === o ? e.getEndOffset() : t.getLength();
					t.findEntityRanges(n, (e, n) => {
						r <= n && i >= e && s.push({
							blockKey: o,
							entityKey: t.getEntityAt(e),
							start: e,
							end: n
						})
					})
				}), s
			}
		},
		"./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function s(t, e) {
				const n = e.getFocusKey();
				if (n !== e.getAnchorKey()) return;
				const s = t.getBlockForKey(n),
					r = e.getStartOffset(),
					i = e.getEndOffset(),
					c = s.getEntityAt(i) || (i > 0 ? s.getEntityAt(i - 1) : null);
				if (!c) return;
				let a, l;
				if (s.findEntityRanges(t => t.getEntity() === c, (t, e) => {
						t <= r && i <= e && (a = t, l = e)
					}), "number" != typeof a || "number" != typeof l) return;
				const d = s.getText().slice(a, l);
				return {
					entitySelection: o.SelectionState.createEmpty(n).merge({
						anchorOffset: a,
						focusOffset: l
					}),
					entityKey: c,
					entityText: d
				}
			}
		},
		"./src/reddit/components/RichTextEditor/entity/link/decorator.m.less": function(t, e, n) {
			t.exports = {
				RegularLink: "_1FRfMxEAy__7c8vezYv9qP",
				regularLink: "_1FRfMxEAy__7c8vezYv9qP"
			}
		},
		"./src/reddit/components/RichTextEditor/entity/link/helpers.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return m
			})), n.d(e, "d", (function() {
				return f
			})), n.d(e, "f", (function() {
				return b
			})), n.d(e, "c", (function() {
				return y
			})), n.d(e, "b", (function() {
				return E
			})), n.d(e, "h", (function() {
				return x
			})), n.d(e, "g", (function() {
				return S
			})), n.d(e, "e", (function() {
				return C
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./src/lib/linkMatchers/index.ts"),
				r = n("./src/lib/linkMatchers/customLinks.ts"),
				i = n("./src/lib/memoizeByReference/index.ts"),
				c = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts"),
				l = n("./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts"),
				d = n("./src/reddit/components/RichTextEditor/spoiler/helpers.ts"),
				u = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const p = [c.a.SUBREDDIT_LINK, c.a.USER_LINK, c.a.USER_MENTION],
				h = [...p, c.a.LINK];

			function m(t, e, n) {
				t.findEntityRanges(t => {
					const e = t.getEntity();
					return !!e && h.includes(n.getEntity(e).getType())
				}, e)
			}
			const g = t => {
					const e = s.a.match(t);
					if (e && e.length && e[0]) {
						const {
							schema: t,
							url: n
						} = e[0];
						return {
							linkPrefix: t,
							url: n
						}
					}
					return {
						linkPrefix: "",
						url: ""
					}
				},
				f = Object(i.a)((function(t) {
					const e = t.getCurrentContent(),
						n = t.getSelection();
					if (!n.isCollapsed()) return;
					if (Object(u.q)(e.getBlockForKey(n.getStartKey()).getType())) return;
					const r = n.getFocusKey(),
						i = e.getBlockForKey(r),
						c = n.getFocusOffset(),
						a = i.getText(),
						l = a.lastIndexOf(" ", c - 1) + 1,
						p = a.slice(l, c);
					if (!p) return;
					const h = s.f.match(p);
					if (!h) return;
					const m = h[h.length - 1],
						g = l + m.index,
						f = l + m.lastIndex;
					let b = -1;
					if (i.findEntityRanges(t => !!t.getEntity(), (t, e) => {
							t < c && (b = e)
						}), b >= g) return;
					return i.getCharacterList().slice(g, f).find(d.b) ? void 0 : {
						selection: o.SelectionState.createEmpty(r).merge({
							anchorOffset: g,
							focusOffset: f
						}),
						url: m.url
					}
				}));

			function b(t, e, n) {
				const s = t.getSelection();
				let r = t.getCurrentContent();
				const i = (r = r.createEntity(c.a.LINK, "MUTABLE", {
					url: n
				})).getLastCreatedEntityKey();
				return r = (r = o.Modifier.applyEntity(r, e, i)).merge({
					selectionAfter: s
				}), o.EditorState.push(t, r, "apply-entity")
			}
			const y = Object(i.a)((function(t) {
				const e = t.getCurrentContent(),
					n = Object(l.a)(e, t.getSelection());
				if (!n) return;
				const o = e.getEntity(n.entityKey);
				if (o.getType() !== c.a.LINK) return;
				const {
					url: s
				} = o.getData();
				return {
					url: s,
					...n
				}
			}));
			const E = Object(i.a)((function(t) {
				const e = t.getCurrentContent(),
					n = t.getSelection(),
					o = Object(l.a)(e, n);
				if (!o) return;
				const s = n.getFocusOffset(),
					r = e.getEntity(o.entityKey),
					{
						linkPrefix: i
					} = g(o.entityText);
				return !p.includes(r.getType()) || !o.entityText.startsWith(i) || s - o.entitySelection.getStartOffset() < i.length ? void 0 : {
					internalName: o.entityText.slice(i.length),
					...o
				}
			}));

			function x(t, e, n, s) {
				let r = "apply-entity",
					i = t.getCurrentContent(),
					a = t;
				const d = Object(l.a)(i, e);
				if (n)
					if (d) {
						const t = i.getEntity(d.entityKey),
							{
								url: e
							} = t.getData();
						e !== n && (i = i.mergeEntityData(d.entityKey, {
							url: n
						})), void 0 !== s && d.entityText !== s && (i = o.Modifier.replaceText(i, d.entitySelection, s, void 0, d.entityKey), r = "insert-characters")
					} else {
						if (void 0 === s) throw new Error("New link display text must be provided!");
						const t = (i = i.createEntity(c.a.LINK, "MUTABLE", {
							url: n
						})).getLastCreatedEntityKey();
						i = o.Modifier.replaceText(i, e, s, void 0, t), r = "insert-characters"
					}
				else i = (i = o.Modifier.applyEntity(i, e, "")).merge({
					selectionAfter: t.getSelection()
				});
				return i === t.getCurrentContent() ? t : a = o.EditorState.push(a, i, r)
			}

			function S(t, e) {
				const n = E(t);
				if (!n) return t;
				const {
					linkPrefix: s,
					url: i
				} = g(n.entityText), c = `${s===r.d.mention?r.d.profile:s}${e}`, a = n.entitySelection.getStartOffset() + c.length;
				let l = x(t, n.entitySelection, i, c);
				return l = o.EditorState.forceSelection(l, n.entitySelection.merge({
					anchorOffset: a,
					focusOffset: a
				}))
			}

			function C(t, e) {
				if (e.getStartKey() !== e.getEndKey()) return !1;
				const n = t.getBlockForKey(e.getEndKey()).getType();
				return !Object(u.q)(n) && !Object(u.t)(n) && !Object(a.a)(t, e, e => {
					const n = e.getEntity();
					return !!n && t.getEntity(n).getType() !== c.a.LINK
				}).length
			}
		},
		"./src/reddit/components/RichTextEditor/helpers/common.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "h", (function() {
				return c
			})), n.d(e, "e", (function() {
				return a
			})), n.d(e, "c", (function() {
				return l
			})), n.d(e, "f", (function() {
				return d
			})), n.d(e, "b", (function() {
				return u
			})), n.d(e, "i", (function() {
				return p
			})), n.d(e, "d", (function() {
				return h
			})), n.d(e, "g", (function() {
				return m
			}));
			var o, s = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				i = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			! function(t) {
				t.before = "before", t.after = "after"
			}(o || (o = {}));
			const c = (t, e) => new s.ContentBlock({
					key: t || Object(s.genKey)(),
					...e ? {
						text: e,
						characterList: Object(r.List)(Object(r.Repeat)(s.CharacterMetadata.create(), e.length))
					} : {}
				}),
				a = t => t.props.children,
				l = t => a(t).props.block,
				d = (t, e, n, r = o.after, a = !1, l = !1) => {
					const d = [];
					let p = -1;
					if (t.getBlockMap().forEach((t, s) => {
							r === o.after && d.push(t), s === e && (d.push(...n), p = d.length - 1), r === o.before && d.push(t)
						}), p >= 0) {
						if (a) {
							const t = d[p + 1];
							t && t.getType() === i.n || d.splice(p + 1, 0, c())
						}
						if (l) {
							const t = p - n.length,
								e = d[t];
							e && e.getType() === i.n || d.splice(t + 1, 0, c())
						}
					}
					return t.merge({
						blockMap: s.BlockMapBuilder.createFromArray(d),
						selectionAfter: u(n[n.length - 1], !1, !0)
					})
				},
				u = (t, e = !1, n = !1) => {
					let o = s.SelectionState.createEmpty(t.getKey()).merge({
						hasFocus: n
					});
					return e && (o = o.merge({
						anchorOffset: t.getLength(),
						focusOffset: t.getLength()
					})), o
				},
				p = (t, e) => {
					let n = t.getBlockBefore(e),
						o = t.getBlockMap();
					return o.get(e) ? (o = o.size > 1 ? o.remove(e) : o.set(e, c(e)), n = n || o.first(), t.merge({
						blockMap: o,
						selectionAfter: u(n, !0)
					})) : t
				},
				h = (t, e) => e.querySelector(`[data-block][data-offset-key="${t}-0-0"]`),
				m = t => t.getType() === i.n && !t.getText()
		},
		"./src/reddit/components/RichTextEditor/helpers/controlsState.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return f
			})), n.d(e, "b", (function() {
				return b
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/forEach.js"),
				s = n.n(o),
				r = n("./src/lib/forEachGroup/index.ts"),
				i = n("./src/lib/memoizeByReference/index.ts"),
				c = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				a = n("./src/reddit/components/RichTextEditor/entity/link/helpers.tsx"),
				l = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				d = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				u = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				p = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts"),
				h = n("./src/reddit/components/RichTextEditor/helpers/styles.ts");
			const m = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						o = {};
					s()(d.k, t => o[t] = {
						isActive: !1,
						isEnabled: !1
					});
					const i = new Set(Object.keys(o));
					if (i.delete(d.k.HIGHLIGHT), n.isCollapsed()) {
						const s = e.getBlockForKey(n.getEndKey()),
							r = s.getType();
						Object(d.q)(r) || Object(d.r)(r) || Object(d.t)(r) || i.forEach(t => o[t].isEnabled = !0), t.getCurrentInlineStyle().forEach(t => {
							t && o[t] && (o[t].isActive = !0)
						}), Object(u.i)(s) && (o[d.k.BOLD] = {
							isEnabled: !1,
							isActive: !1
						})
					} else {
						Object(h.e)(e, n).forEach(t => {
							i.delete(t), o[t] && (o[t].isActive = !0, o[t].isEnabled = !0)
						}), Object(p.a)(e, n, (t, s) => {
							if (!i.size) return !1;
							const c = n.getStartKey() === s ? n.getStartOffset() : 0,
								a = n.getEndKey() === s ? n.getEndOffset() : t.getLength(),
								l = t.getType(),
								u = t.getCharacterList();
							Object(d.q)(l) || Object(d.r)(l) || Object(d.t)(l) || Object(r.a)(u, {
								start: c,
								end: a
							}, (n, s, r, c) => {
								const a = n.getStyle(),
									l = n.getEntity(),
									d = l ? e.getEntity(l) : null;
								if (i.forEach(e => {
										const n = !o[e].isActive,
											s = Object(h.f)(a, t, d, e, n);
										s && s !== a && (o[e].isEnabled = !0, i.delete(e))
									}), !i.size) return !1
							})
						})
					}
					return o
				},
				g = t => {
					const e = {};
					return s()(d.b, n => e[n] = {
						isActive: !1,
						isEnabled: t
					}), e
				},
				f = Object(i.a)(t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						o = (t => {
							const e = t.getCurrentContent(),
								n = t.getSelection();
							let o = g(!0),
								r = null;
							if (n.isCollapsed()) r = e.getBlockForKey(n.getEndKey()).getType();
							else {
								let t = null;
								Object(p.a)(e, n, (e, n) => {
									const s = e.getType();
									return Object(d.t)(s) ? (o = g(!1), !1) : (null === t && (t = s), t !== s ? (t = null, !1) : void 0)
								}), r = t
							}
							return null !== r && ((Object(d.v)(r) || Object(d.t)(r)) && s()(o, t => {
								t.isEnabled = !1
							}), o[r].isActive = !0), o
						})(t);
					return {
						giphy: {
							isActive: !1,
							isEnabled: o[d.a].isEnabled && !Object(l.j)(e)
						},
						emote: {
							isActive: !1,
							isEnabled: Object(c.b)(e, n)
						},
						link: {
							isActive: !1,
							isEnabled: Object(a.e)(e, n)
						},
						blocks: o,
						styles: m(t)
					}
				}),
				b = t => {
					s()(t.blocks, t => {
						t.isEnabled = !1
					}), s()(t.styles, t => {
						t.isEnabled = !1
					}), t.link.isEnabled = !1
				}
		},
		"./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts": function(t, e, n) {
			"use strict";

			function o(t, e, n) {
				const o = e.getStartKey(),
					s = e.getEndKey();
				if (o === s) return void n(t.getBlockForKey(o), o);
				let r = !1;
				t.getBlockMap().forEach((t, e) => {
					if (e === o && (r = !0), !r || !t || !e) return;
					const i = n(t, e);
					return e !== s && i
				})
			}
			n.d(e, "a", (function() {
				return o
			}))
		},
		"./src/reddit/components/RichTextEditor/helpers/modifiers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return i
			})), n.d(e, "b", (function() {
				return c
			})), n.d(e, "a", (function() {
				return a
			})), n.d(e, "d", (function() {
				return l
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts");

			function r(t, e) {
				const n = e.getStartKey();
				if (n !== e.getEndKey()) return;
				const o = t.getBlockForKey(n),
					r = e.getStartOffset(),
					i = e.getEndOffset(),
					c = r > 0 ? o.getEntityAt(r - 1) : null,
					a = o.getEntityAt(i);
				if (!c || !a || c !== a) return;
				const l = t.getEntity(a),
					d = o.getCharacterList().toSeq().skip(i).takeWhile(t => !!t && t.getEntity() === a).count(),
					[u, p] = Object(s.a)(t, o, l, i, i + d);
				return u.merge({
					blockMap: u.getBlockMap().set(o.getKey(), p)
				})
			}

			function i(t, e, n) {
				const s = r(t, e) || t;
				return o.Modifier.replaceWithFragment(s, e, n)
			}

			function c(t, e, n, s, i) {
				let c = t;
				return -1 !== n.indexOf("\n") && (c = r(t, e) || c), o.Modifier.replaceText(c, e, n, s, i)
			}

			function a(t, e, n, s, i) {
				let c = t;
				return -1 !== n.indexOf("\n") && (c = r(t, e) || c), o.Modifier.insertText(c, e, n, s, i)
			}

			function l(t, e) {
				const n = r(t, e) || t;
				return o.Modifier.splitBlock(n, e)
			}
		},
		"./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/lodash/forEach.js"),
				s = n.n(o);
			e.a = (t, e) => {
				const n = t.getBlocksAsArray(),
					o = e.getKey(),
					r = e.getType();
				let i = null,
					c = null,
					a = !1;
				if (s()(n, (t, e) => {
						if (a || t.getKey() !== o || (a = !0), t.getType() === r) null === i && (i = e), c = e;
						else {
							if (a) return !1;
							i = null, c = null
						}
					}), a) return c = c || 0, {
					start: i = i || 0,
					blocks: n.slice(i, c + 1)
				}
			}
		},
		"./src/reddit/components/RichTextEditor/helpers/styles.ts": function(t, e, n) {
			"use strict";
			n.d(e, "f", (function() {
				return u
			})), n.d(e, "e", (function() {
				return p
			})), n.d(e, "b", (function() {
				return h
			})), n.d(e, "a", (function() {
				return m
			})), n.d(e, "c", (function() {
				return g
			})), n.d(e, "d", (function() {
				return f
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				r = n("./src/lib/forEachGroup/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts");
			const d = Object(s.OrderedSet)([]),
				u = (t, e, n, o, r = !0) => {
					const l = e.getType();
					if (Object(c.q)(l) || Object(c.r)(l) || Object(c.t)(l)) return;
					if (o === c.k.BOLD && Object(a.i)(e)) return;
					const u = n ? n.getType() : null;
					return (u === i.a.SUBREDDIT_LINK || u === i.a.USER_LINK) && o !== c.k.SPOILER && o !== c.k.MONOSPACE || u === i.a.EMOTE ? void 0 : o === c.k.MONOSPACE || o === c.k.SPOILER ? r ? Object(s.OrderedSet)([o]) : d : (t.has(c.k.MONOSPACE) || t.has(c.k.SPOILER)) && r ? Object(s.OrderedSet)([o]) : !r || o !== c.k.SUPERSCRIPT && o !== c.k.SUBSCRIPT ? r ? t.add(o) : t.has(o) ? t.delete(o) : void 0 : t.delete(c.k.SUBSCRIPT).delete(c.k.SUPERSCRIPT).add(o)
				},
				p = (t, e) => {
					let n = null,
						o = !0;
					return Object(l.a)(t, e, (s, l) => {
						const d = s.getType(),
							u = Object(a.i)(s);
						if (u || (o = !1), Object(c.q)(d) || Object(c.r)(d) || Object(c.t)(d)) return !1;
						const p = e.getStartKey() === l ? e.getStartOffset() : 0,
							h = e.getEndKey() === l ? e.getEndOffset() : s.getLength(),
							m = s.getCharacterList();
						Object(r.a)(m, {
							start: p,
							end: h
						}, e => {
							const o = e.getEntity();
							if (o && t.getEntity(o).getType() === i.a.SUBREDDIT_LINK) return;
							let s = e.getStyle();
							return u && (s = s.add(c.k.BOLD)), null === n ? n = s.asMutable() : n.intersect(s), !(n && !n.size) && void 0
						})
					}), null === n ? [] : (o && n.delete(c.k.BOLD), n.toJS())
				},
				h = (t, e) => {
					const n = e.getCurrentContent(),
						s = e.getSelection();
					let i = n.getBlockMap();
					const a = -1 === p(n, s).indexOf(t);
					Object(l.a)(n, s, (e, l) => {
						if (!e || !l) return !1;
						const d = s.getStartKey() === l ? s.getStartOffset() : 0,
							p = s.getEndKey() === l ? s.getEndOffset() : e.getLength(),
							h = e.getCharacterList(),
							m = h.withMutations(s => {
								Object(r.a)(h, {
									start: d,
									end: p
								}, (r, i, l, d) => {
									const p = r.getStyle(),
										h = r.getEntity(),
										m = h ? n.getEntity(h) : null,
										g = u(p, e, m, t, a);
									if (g) {
										const t = ((t, e) => o.CharacterMetadata.create({
											style: e,
											entity: e.has(c.k.SPOILER) ? null : t.getEntity()
										}))(r, g);
										for (let e = l; e < d; e++) s.set(e, t)
									}
								})
							});
						if (m !== h) {
							const t = e.set("characterList", m);
							i = i.set(l, t)
						}
					});
					const d = n.merge({
						blockMap: i,
						selectionAfter: s
					});
					return o.EditorState.push(e, d, "change-inline-style")
				},
				m = (t, e) => {
					const n = e.getCurrentContent(),
						s = e.getSelection(),
						r = n.getBlockForKey(s.getStartKey()),
						i = r.getEntityAt(s.getStartOffset()),
						c = i ? n.getEntity(i) : null,
						a = e.getCurrentInlineStyle(),
						l = u(a, r, c, t, !a.has(t));
					let d = e;
					return l && (d = o.EditorState.setInlineStyleOverride(d, l)), d
				},
				g = t => o.EditorState.setInlineStyleOverride(t, d),
				f = (t, e) => {
					const n = t.getSelection(),
						o = e.getSelection();
					return n.getStartOffset() > 0 || n.getFocusKey() === o.getFocusKey() || t.getCurrentInlineStyle().isEmpty() ? t : g(t)
				}
		},
		"./src/reddit/components/RichTextEditor/index.m.less": function(t, e, n) {
			t.exports = {
				Container: "_3YZ-jFfccqhepgq1dDuLEv",
				container: "_3YZ-jFfccqhepgq1dDuLEv",
				FocusableContent: "_3wl1bRnSzxHkKJfvqakrNI",
				focusableContent: "_3wl1bRnSzxHkKJfvqakrNI",
				showSubmitButton: "_3Imp2y02BMA96sEJAe9M3M",
				mRedesign: "_2sl29I15jbNPrKiiB9kfVf",
				editorWrapper: "_2baJGEALPiEMZpWB2iWQs7",
				mExpanded: "_1UhKfcyzvaWRtDdXZmzg6D",
				userIcon: "_1wS6Q6S9RvAbzxaselfK2i",
				CurrentUserIcon: "_1RdaOAYbtM4Zwt3M_YE8kp",
				currentUserIcon: "_1RdaOAYbtM4Zwt3M_YE8kp",
				hasInitialHeight: "_35E-zXyMmfsLI7nv_sBvFL",
				hasInitialMinHeight: "_18GfdTZmF2EPjYSkBDE0WI",
				noBorder: "HXDWn-rmYOwqGcGtz9AKm",
				insetSubmitButton: "_3b2mbY1nb1R-z21ihISt7z",
				emptyContent: "_3cP1eCSI5AeGc6__VQ1axu",
				focusedContent: "_2O6bpyGivXLGxZ0LErKCzW"
			}
		},
		"./src/reddit/components/RichTextEditor/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = (n("./node_modules/draft-js/dist/Draft.css"), n("./node_modules/fbt/lib/FbtPublic.js")),
				r = n("./node_modules/lodash/filter.js"),
				i = n.n(r),
				c = n("./node_modules/react/index.js"),
				a = n.n(c),
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				u = n("./node_modules/shallowequal/index.js"),
				p = n.n(u),
				h = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/fastdom/index.ts"),
				g = n("./src/lib/lessComponent.tsx"),
				f = n("./src/lib/linkMatchers/customLinks.ts"),
				b = n("./src/lib/logs/console.ts"),
				y = n("./src/telemetry/models/Media.ts"),
				E = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				x = n("./src/reddit/actions/postCreation/mediaUpload.ts"),
				S = n("./src/reddit/featureFlags/index.ts"),
				C = n("./src/reddit/helpers/trackers/postComposer.ts"),
				O = n("./src/reddit/models/PostCreationForm/index.ts"),
				k = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const T = {
				BREAK_HEADER_ENTITY: "BREAK_HEADER_ENTITY",
				CONVERT_TO_LIST_ON_SPACE: "CONVERT_TO_LIST_ON_SPACE",
				EXEC_TABLE_ON_ENTER_HANDLER: "EXEC_TABLE_ON_ENTER_HANDLER",
				INSERT_LINE_BREAK: "INSERT_LINE_BREAK",
				LINKIFY_ON_ENTER: "LINKIFY_ON_ENTER",
				LINKIFY_ON_SPACE: "LINKIFY_ON_SPACE",
				MAKE_PLAIN_BLOCK: "MAKE_PLAIN_BLOCK",
				OPEN_LINK_TOOLTIP: "OPEN_LINK_TOOLTIP",
				REDUCE_LIST_INDENT: "REDUCE_LIST_INDENT",
				REMOVE_EXTRA_LIST_ITEM: "REMOVE_EXTRA_LIST_ITEM",
				RESET_CURRENT_AND_PREVIOUS_BLOCKS: "RESET_CURRENT_AND_PREVIOUS_BLOCKS",
				SUBMIT: "SUBMIT"
			};
			const v = t => {
					const e = t.getCurrentContent().getBlockMap();
					if (e.size > 2 || (t => !!t.reduce((t = 0, e) => t + e.getLength(), 0))(e) || (t => !!t.find(t => Object(k.o)(t.getType())))(e)) return null; {
						const n = t.getSelection();
						if (n.isCollapsed() && n.getFocusKey() === e.first().getKey()) return n.getFocusKey()
					}
				},
				j = t => {
					const e = t.getCharacterList().map(t => o.CharacterMetadata.create({
						entity: t.getEntity()
					}));
					return t.set("characterList", e)
				};
			var w = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				R = n("./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts"),
				_ = n("./node_modules/lodash/escape.js"),
				B = n.n(_),
				I = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				A = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				K = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				M = n("./node_modules/immutable/dist/immutable.js"),
				L = n("./src/reddit/helpers/dom/index.ts"),
				F = n("./node_modules/lodash/chunk.js"),
				D = n.n(F),
				N = n("./node_modules/lodash/flatten.js"),
				P = n.n(N),
				U = n("./node_modules/lodash/takeWhile.js"),
				H = n.n(U),
				z = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				V = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				W = n("./node_modules/lodash/last.js"),
				q = n.n(W),
				G = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				Y = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts"),
				Q = n("./node_modules/lodash/find.js"),
				Z = n.n(Q);
			var J = (t, e) => {
				const n = t.getSelection(),
					s = t.getCurrentContent(),
					r = s.getBlockForKey(n.getAnchorKey()),
					i = s.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(V.e)(s, r, i);
				if (!c || c !== a) return t;
				const l = Object(V.g)(r),
					d = Object(V.g)(i),
					{
						blocks: u,
						start: p
					} = c,
					{
						colCount: h
					} = d,
					m = u.length / h,
					{
						minCol: g,
						minRow: f,
						maxCol: b,
						maxRow: y
					} = Object(V.f)(l, d),
					E = u.filter(t => {
						const {
							rowIndex: n,
							colIndex: o
						} = Object(V.g)(t);
						return "rows" === e ? !(f <= n && n <= y) : !(g <= o && o <= b)
					});
				E.sort(V.b);
				const x = "rows" === e ? h : E.length / m,
					S = P()(Object(V.d)(D()(E, x))),
					C = s.getBlocksAsArray(),
					O = [...C.slice(0, p), ...S, ...C.slice(p + u.length)],
					k = s.merge({
						blockMap: o.BlockMapBuilder.createFromArray(O)
					}),
					T = {
						colIndex: g,
						rowIndex: f
					};
				let v = Z()(S, t => Object(V.h)(T, Object(V.g)(t)));
				v || (v = S.length ? S[S.length - 1] : C[p > 0 ? p - 1 : 0]);
				const j = o.SelectionState.createEmpty(v.getKey()).merge({
					focusOffset: v.getLength(),
					anchorOffset: v.getLength()
				});
				let w = o.EditorState.push(t, k, G.e);
				return w = o.EditorState.forceSelection(w, j)
			};
			var X = (t, e = !1) => {
				const n = t.getSelection();
				if (n.isCollapsed()) return;
				if (n.getStartKey() === n.getEndKey() && !e) return;
				const s = t.getCurrentContent(),
					r = s.getBlockForKey(n.getAnchorKey()),
					i = s.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(V.e)(s, r, i);
				if (!c || c !== a) return;
				const l = {};
				let d = n;
				if (r === i) {
					const t = Object(V.n)(i, 0, n.getStartOffset()),
						e = Object(V.n)(i, n.getEndOffset());
					l[i.getKey()] = Object(V.j)(i, [t, e]), d = n
				} else {
					if (c.blocks[0].getKey() === n.getStartKey() && q()(c.blocks).getKey() === n.getEndKey()) return J(t, "rows");
					Object(Y.a)(s, n, (t, e) => {
						l[e] = Object(V.n)(t, 0, 0)
					}), d = n.merge({
						anchorOffset: 0,
						focusOffset: 0
					})
				}
				const u = s.merge({
					blockMap: s.getBlockMap().merge(l),
					selectionAfter: d
				});
				return o.EditorState.push(t, u, G.f)
			};
			const $ = (t, e, n, o) => {
					const {
						htmlParts: s
					} = e;
					t.forEach((t, r) => {
						s.push(`<${n} ${o[r]} style="margin: 0px; padding: 4px 9px; border: 1px solid rgb(229, 227, 218);">`), ft(t, e), s.push(`</${n}>`)
					})
				},
				tt = t => {
					const e = t[0],
						n = t[t.length - 1],
						o = [...t].sort(V.b),
						{
							minCol: s,
							maxCol: r
						} = Object(V.f)(Object(V.g)(e), Object(V.g)(n)),
						i = r - s + 1;
					return Object(V.d)(D()(o, i))
				},
				et = (t, e, n) => {
					n ? ft(t[0], e) : ((t, e) => {
						const {
							editor: n,
							htmlParts: o
						} = e, s = n.getEditorKey(), r = t[0].map(t => {
							const {
								alignment: e
							} = Object(V.g)(t);
							return e ? `align="${V.a[e]}"` : ""
						}), [i, ...c] = t;
						o.push(`\n    <table data-editor="${s}">\n      <thead>\n        <tr>`), $(i, e, "th", r), o.push("\n        </tr>\n      </thead>\n      <tbody>"), c.forEach(t => {
							o.push("\n        <tr>"), $(t, e, "td", r), o.push("\n        </tr>")
						}), o.push("\n      </tbody>\n    </table>")
					})(tt(t), e)
				},
				nt = (t, e, n) => {
					n ? e.textParts.push(Et(t[0], e)) : ((t, e) => {
						const {
							textParts: n
						} = e;
						t.forEach(t => {
							n.push(t.map(t => Et(t, e)).join(" "))
						})
					})(tt(t), e)
				},
				ot = t => {
					const {
						processed: e,
						remaining: n
					} = t, o = [];
					for (; n.length;) {
						const t = n[0];
						if (!Object(k.v)(t.getType())) break;
						o.push(n.shift())
					}
					const s = !n.length && !e.length,
						r = 1 === o.length && s;
					et(o, t, r), nt(o, t, r), ((t, e, n, o) => {
						if (n)
							if (o) {
								const n = t[0].merge({
									data: Object(M.Map)(),
									type: k.n
								});
								e.blocksParts = [n]
							} else e.blocksParts = P()(tt(t))
					})(o, t, s, r), e.push(...o)
				},
				st = t => X(t, !0),
				rt = (t, e, n) => {
					const s = Object(k.v)(n.first().getType()),
						r = Object(k.v)(n.last().getType()),
						i = t.getBlockForKey(e.getAnchorKey()),
						c = t.getBlockForKey(e.getFocusKey()),
						[a, l] = Object(V.e)(t, i, c);
					return a && a === l ? ((t, e, n, s) => {
						const r = Object(k.v)(s.first().getType()),
							i = t.getBlockForKey(e.getAnchorKey()),
							c = t.getBlockForKey(e.getFocusKey()),
							{
								blocks: a,
								start: l
							} = n;
						a.sort(V.b);
						const d = Object(V.g)(a[0]);
						let {
							colCount: u
						} = d;
						const p = D()(a, u);
						let h = p.length;
						const {
							minRow: m,
							minCol: g
						} = Object(V.f)(Object(V.g)(i), Object(V.g)(c)), f = s.toArray();
						if (r) {
							const n = H()(f, t => Object(k.v)(t.getType()));
							n.sort(V.b);
							const s = Object(V.g)(n[0]).colCount,
								r = D()(n, s),
								i = r.length,
								c = m + i - 1,
								d = g + s - 1;
							if (n.length !== i * s) throw new Error("Invalid table fragment!");
							if (d >= u && p.forEach(t => {
									t.push(...Object(V.l)(d - u + 1, 1))
								}), u = p[0].length, c >= h) {
								const t = D()(Object(V.l)(u, c - h + 1), u);
								p.push(...t)
							}
							h = p.length;
							for (let t = 0; t < i; t++)
								for (let e = 0; e < s; e++) {
									const n = m + t,
										o = g + e,
										s = r[t][e];
									p[n][o] = s.set("key", p[n][o].getKey())
								}
							const b = Object(V.d)(p),
								y = P()(b),
								E = t.getBlocksAsArray(),
								x = [...E.slice(0, l), ...y, ...E.slice(l + a.length)],
								S = Object(V.o)(e, p[m][g], p[c][d]);
							return t.merge({
								blockMap: o.BlockMapBuilder.createFromArray(x),
								selectionAfter: S
							})
						} {
							const n = p[m][g],
								s = Object(V.j)(n, f, " ");
							let r = e;
							return e.getStartKey() !== e.getEndKey() && (r = Object(V.o)(e, n, n)), z.c(t, r, o.BlockMapBuilder.createFromArray([s]))
						}
					})(t, e, a, n) : a || l || !s && !r ? void 0 : ((t, e, n) => {
						const s = Object(k.v)(n.first().getType()),
							r = Object(k.v)(n.last().getType()),
							i = n.toArray();
						s && i.unshift(Object(A.h)()), r && i.push(Object(A.h)());
						const c = o.BlockMapBuilder.createFromArray(i);
						return z.c(t, e, c)
					})(t, e, n)
				};
			var it = n("./node_modules/draft-js/lib/removeEntitiesAtEdges.js"),
				ct = n.n(it);
			var at = (t, e) => {
				const n = e.getStartKey(),
					o = e.getStartOffset(),
					s = e.getEndKey(),
					r = e.getEndOffset(),
					i = ct()(t, e).getBlockMap(),
					c = i.keySeq(),
					a = c.indexOf(n),
					l = c.indexOf(s) + 1;
				return i.slice(a, l).map((t, e) => {
					const i = t.getText(),
						c = t.getCharacterList();
					return n === s ? t.merge({
						text: i.slice(o, r),
						characterList: c.slice(o, r)
					}) : e === n ? t.merge({
						text: i.slice(o),
						characterList: c.slice(o)
					}) : e === s ? t.merge({
						text: i.slice(0, r),
						characterList: c.slice(0, r)
					}) : t
				})
			};
			const lt = (t, e) => {
					const n = {
							children: [],
							parentItem: e,
							type: t.getType()
						},
						o = {
							block: t,
							parentList: n
						};
					return n.children.push(o), e && (e.childrenLists = e.childrenLists || [], e.childrenLists.push(n)), {
						list: n,
						item: o
					}
				},
				dt = (t, e) => {
					const {
						type: n,
						children: o
					} = t, {
						htmlParts: s
					} = e, r = n === k.b.ORDERED_LIST ? "ol" : "ul";
					s.push(`<${r}>`), o.forEach(t => ((t, e) => {
						const {
							block: n,
							childrenLists: o
						} = t, {
							htmlParts: s
						} = e;
						s.push("<li>"), ft(n, e, !0), o && o.forEach(t => dt(t, e)), s.push("</li>")
					})(t, e)), s.push(`</${r}>`)
				},
				ut = (t, e) => {
					const {
						children: n
					} = t;
					n.forEach((t, n) => pt(t, n, e))
				},
				pt = (t, e, n) => {
					const {
						block: o,
						childrenLists: s
					} = t, {
						textParts: r
					} = n, i = " ".repeat(o.getDepth()), c = o.getType() === k.b.ORDERED_LIST ? `${e+1}.` : "-", a = Et(o, n);
					r.push(`${i}${c} ${a}`), s && s.forEach(t => ut(t, n))
				},
				ht = t => {
					const {
						remaining: e
					} = t, n = e.shift(), o = n.getType(), s = [n];
					for (; e.length;) {
						const t = e[0],
							n = t.getType();
						if (!Object(k.s)(n)) break;
						if (t.getDepth() > 0 || n === k.b.UNORDERED_LIST) s.push(e.shift());
						else {
							if (n !== o) break;
							if (s.some(t => t.getType() !== k.b.ORDERED_LIST)) break;
							s.push(e.shift())
						}
					}
					const r = (t => {
						const e = t[0],
							n = {
								type: e.getType(),
								children: []
							};
						let o, s = n,
							r = e.getDepth();
						return t.forEach(t => {
							const e = t.getType(),
								n = t.getDepth();
							if (n > r) {
								const e = lt(t, o);
								s = e.list, o = e.item, r = n
							} else {
								for (; r !== n;) s = s.parentItem ? s.parentItem.parentList : s, r--;
								if (e === s.type) o = {
									block: t,
									parentList: s
								}, s.children.push(o);
								else {
									const e = lt(t, s.parentItem);
									s = e.list, o = e.item
								}
							}
						}), n
					})(s);
					dt(r, t), ut(r, t), t.processed.push(...s)
				};
			var mt = (t, e) => {
				const n = t.toArray().filter(t => !Object(k.t)(t.getType()));
				if (1 === n.length) {
					n[0].getType() !== k.n && n.push(new o.ContentBlock({
						key: Object(o.genKey)(),
						type: k.n
					}))
				}
				const s = o.ContentState.createFromBlockArray(n),
					r = JSON.stringify(Object(o.convertToRaw)(s));
				return `<div data-reddit-rtjson="${B()(r)}">${e}</div>`
			};
			const gt = () => !!window.clipboardData,
				ft = (t, e, n = !1) => {
					const {
						htmlParts: o
					} = e, s = bt(t, e);
					s && s.forEach(t => o.push(n ? t.innerHTML : t.outerHTML))
				},
				bt = (t, e) => {
					const {
						selection: n,
						editor: o
					} = e, s = n.getStartKey(), r = n.getEndKey(), i = t.getKey(), c = o.refs.editor, a = Object(A.d)(i, c);
					return a ? i === s || i === r ? Object(L.c)(a) : [a] : null
				};
			var yt = (t, e, n) => {
				const s = t.getCurrentContent(),
					r = t.getSelection(),
					i = Tt(t) || at(s, r);
				if (!i || !i.count()) return;
				const c = i.toArray(),
					a = {
						editor: e,
						editorState: t,
						selection: r,
						remaining: c,
						processed: [],
						htmlParts: [],
						textParts: [],
						blocksParts: [...c]
					};
				for (; a.remaining.length;) {
					const t = a.remaining[0].getType();
					switch (!0) {
						case Object(k.t)(t):
							kt(a);
							break;
						case Object(k.s)(t):
							ht(a);
							break;
						case Object(k.v)(t):
							ot(a);
							break;
						default:
							xt(a)
					}
				}
				const l = a.textParts.join("\n"),
					d = (t => Object(M.OrderedMap)(t.map(t => {
						const e = Object(o.genKey)();
						return [e, t.set("key", e)]
					})))(a.blocksParts);
				return ((t, {
					html: e,
					text: n
				}) => {
					gt() ? window.clipboardData.setData("text", n) : (e && t.clipboardData.setData("text/html", e), t.clipboardData.setData("text/plain", n))
				})(n, {
					html: mt(d, a.htmlParts.join("")),
					text: l
				}), n.stopPropagation(), n.preventDefault(), e.setClipboard(d), d
			};
			const Et = (t, e) => {
					const n = t.getText(),
						o = e.editorState.getCurrentContent(),
						s = [];
					let r = -1;
					return t.getCharacterList().forEach((t, e) => {
						const i = t && t.getEntity();
						if (i && void 0 !== e) {
							const t = o.getEntity(i);
							t.getType() === K.a.EMOTE && (s.push(n.substring(r + 1, e)), s.push(`:${t.getData().id}:`), r = e)
						}
					}), s.push(n.substring(r + 1, n.length)), s.join("")
				},
				xt = t => {
					const e = t.remaining.shift();
					((t, e) => ft(t, e))(e, t), ((t, e) => {
						e.textParts.push(Et(t, e))
					})(e, t), t.processed.push(e)
				},
				St = (t, e) => {
					const n = t.first(),
						s = t.last();
					let r = t;
					if (Object(k.u)(n.getType()) ? r = r.set(r.keySeq().first(), n.merge({
							type: k.n
						})) : Object(k.o)(n.getType()) && (r = o.BlockMapBuilder.createFromArray([Object(A.h)(), ...r.toArray()])), Object(k.u)(s.getType()) || !Object(I.q)(e)) {
						const t = Object(A.h)();
						r = r.set(t.getKey(), t)
					} else if (Object(k.o)(s.getType())) {
						const t = Object(A.h)().merge({
							type: k.j
						});
						r = r.set(t.getKey(), t)
					}
					return r
				},
				Ct = (t, e, n) => {
					const o = t.getBlockForKey(e.getStartKey());
					if (Object(k.u)(o.getType())) {
						const o = n.first(),
							s = n.set(n.keySeq().first(), Object(A.h)(o.getKey(), o.getText()).merge({
								type: k.j
							}));
						return z.c(t, e, s)
					}
				},
				Ot = (t, e, n) => {
					const o = ((t, e, n) => {
						const o = e ? e.getText() : "";
						return `<span data-editor="${n}">${B()(o)}</span>`
					})(0, e, n.editor.getEditorKey());
					n.htmlParts.push(o)
				},
				kt = t => {
					const {
						remaining: e
					} = t, n = e.shift(), o = e[0] && Object(k.u)(e[0].getType()) ? e.shift() : void 0;
					Ot(0, o, t), ((t, e) => {
						const n = t ? Et(t, e) : "";
						e.textParts.push(n)
					})(o, t), t.processed.push(n), o && t.processed.push(o)
				},
				Tt = t => {
					const e = t.getSelection(),
						n = e.getFocusKey();
					if (n !== e.getAnchorKey()) return;
					const s = t.getCurrentContent(),
						r = s.getBlockForKey(n);
					if (Object(k.o)(r.getType())) {
						const t = [r],
							e = s.getBlockAfter(r.getKey());
						return e && Object(k.u)(e.getType()) && t.push(e), o.ContentState.createFromBlockArray(t).getBlockMap()
					}
				},
				vt = t => {
					const e = Tt(t);
					if (e) return Object(I.d)(t, e.first().getKey())
				},
				jt = t => {
					const e = t.getSelection();
					let n = t.getCurrentContent();
					const s = n.getBlockForKey(e.getStartKey()),
						r = n.getBlockForKey(e.getEndKey());
					if (Object(k.t)(s.getType()) || Object(k.t)(r.getType())) {
						if (e.isCollapsed())
							if (Object(k.u)(s.getType())) n = z.d(n, e), n = o.Modifier.setBlockType(n, n.getSelectionAfter(), k.n);
							else if (Object(k.o)(s.getType())) {
							let s = n.getBlockAfter(e.getStartKey());
							return s || (s = (t = Object(I.b)(t, e.getStartKey(), A.a.after)).getCurrentContent().getBlockAfter(e.getStartKey())), o.EditorState.forceSelection(t, Object(A.b)(s, !0))
						}
						return o.EditorState.push(t, n, "split-block")
					}
				},
				wt = (t, e) => {
					const n = t.getSelection(),
						s = t.getCurrentContent(),
						r = "up" === e ? n.getStartKey() : n.getEndKey(),
						i = s.getBlockForKey(r);
					if (!Object(k.o)(i.getType())) return;
					const c = "up" === e ? s.getBlockBefore(r) : s.getBlockAfter(r);
					return c ? o.EditorState.forceSelection(t, Object(A.b)(c, !0)) : Object(I.b)(t, r, "up" === e ? A.a.before : A.a.after)
				},
				Rt = (t, e) => {
					if (t.shiftKey) return;
					const n = wt(e, "up");
					return n && t.preventDefault(), n
				},
				_t = (t, e) => {
					if (t.shiftKey) return;
					const n = wt(e, "down");
					return n && t.preventDefault(), n
				},
				Bt = (t, e) => {
					const n = t.getSelection();
					return n.isCollapsed() && 0 === n.getStartOffset() && Object(k.o)(t.getCurrentContent().getBlockForKey(n.getStartKey()).getType())
				};
			var It = (t, e) => {
					if (!Object(I.q)(e)) return t;
					const n = t.getSelection(),
						o = t.getCurrentContent(),
						s = o.getBlockForKey(n.getStartKey());
					if (Object(k.o)(s.getType())) {
						const e = o.getBlockAfter(s.getKey());
						if (!e || !Object(k.u)(e.getType())) return Object(I.d)(t, s.getKey(), !1)
					}
					return t
				},
				At = n("./src/reddit/actions/modal.ts"),
				Kt = n("./src/reddit/actions/upload.ts"),
				Mt = n("./src/reddit/components/ThumbnailSelector/index.tsx"),
				Lt = t => null,
				Ft = n("./src/reddit/helpers/media/index.ts"),
				Dt = n("./src/reddit/helpers/richTextEditor/index.ts"),
				Nt = n("./src/reddit/selectors/activeModalId.ts");
			const Pt = "application/x-reddit-rte-block";
			var Ut = n("./src/reddit/models/Upload/index.ts"),
				Ht = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/ImagePreview/index.m.less"),
				zt = n.n(Ht);
			const Vt = g.a.img("Img", zt.a);
			var Wt = g.a.wrapped(t => {
					const {
						className: e,
						url: n
					} = t;
					return a.a.createElement("div", {
						className: e
					}, a.a.createElement(Vt, {
						draggable: !1,
						src: n
					}))
				}, "Component", zt.a),
				qt = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/Placeholder/index.m.less"),
				Gt = n.n(qt);
			const Yt = g.a.div("Message", Gt.a);
			var Qt = g.a.wrapped(t => {
					const {
						className: e,
						isImage: n
					} = t;
					return a.a.createElement("div", {
						className: e
					}, a.a.createElement(Yt, null, n ? s.fbt._("Processing video...", null, {
						hk: "3g3QoU"
					}) : s.fbt._("Processing image...", null, {
						hk: "1xoNB3"
					})))
				}, "Component", Gt.a),
				Zt = n("./src/lib/formatApiError/index.ts"),
				Jt = n("./src/reddit/components/ProgressBar/index.tsx"),
				Xt = n("./src/reddit/controls/Button/index.tsx"),
				$t = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/StatusBar/index.m.less"),
				te = n.n($t);
			const ee = g.a.div("ControlRow", te.a),
				ne = g.a.wrapped(Xt.o, "Button", te.a),
				oe = g.a.wrapped(Xt.o, "ErrButton", te.a),
				se = g.a.div("Status", te.a),
				re = g.a.wrapped(Jt.a, "ProgressBar", te.a),
				ie = g.a.div("ErrorLine", te.a),
				ce = t => e => {
					e.stopPropagation(), t(e)
				};
			var ae = g.a.wrapped(t => {
					const {
						upload: e
					} = t, n = ce(t.onCancel), o = ce(t.onRetry), r = ce(t.onRemove), {
						status: i,
						progress: c
					} = e, l = c && c.percent || 0, d = i === Ut.a.FAILED || i === Ut.a.CANCELED, u = (t => {
						const {
							status: e,
							progress: n
						} = t;
						return e === Ut.a.CANCELED ? s.fbt._("Upload was canceled", null, {
							hk: "71azQ"
						}) : e === Ut.a.FAILED ? s.fbt._("Upload failed: {errorText}", [s.fbt._param("errorText", Object(Zt.a)(t.error))], {
							hk: "3NGGzE"
						}) : 100 === (n && n.percent || 0) ? s.fbt._("Success!", null, {
							hk: "3622uh"
						}) : s.fbt._("Uploading: {fileName}", [s.fbt._param("fileName", t.file.name)], {
							hk: "H7qzO"
						})
					})(e);
					return a.a.createElement("div", {
						className: t.className
					}, d ? a.a.createElement(ie, null) : a.a.createElement(re, {
						innerBarClassName: te.a.ProgressBarInner,
						percent: l
					}), a.a.createElement(ee, null, a.a.createElement(se, {
						className: d ? te.a.hasError : void 0,
						title: d ? u : void 0
					}, u), a.a.createElement("div", null, d ? [a.a.createElement(oe, {
						key: "remove",
						onClick: r
					}, s.fbt._("Remove", null, {
						hk: "3LUKPE"
					})), a.a.createElement(oe, {
						key: "retry",
						onClick: o
					}, s.fbt._("Retry", null, {
						hk: "3sO2HB"
					}))] : a.a.createElement(ne, {
						disabled: 100 === l,
						onClick: n
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})))))
				}, "Component", te.a),
				le = n("./node_modules/react-motion/lib/react-motion.js"),
				de = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				ue = n("./src/reddit/components/PlayButton/index.tsx"),
				pe = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/VideoPreview/index.m.less"),
				he = n.n(pe);
			const me = {
					stiffness: 60,
					damping: 20
				},
				ge = [{
					key: "video",
					style: {
						opacity: Object(le.spring)(1, me)
					}
				}],
				fe = g.a.wrapped(t => {
					const {
						autoPlay: e = !1,
						className: n,
						showControls: o,
						shouldPause: s,
						style: r,
						dashUrl: i,
						hlsUrl: c,
						otherUrl: l
					} = t;
					return a.a.createElement("div", {
						className: n,
						style: r
					}, a.a.createElement(de.b, {
						autoPlay: e,
						shouldIgnoreAutoplayPref: !0,
						shouldLoad: !1,
						shouldPause: s,
						isGif: !1,
						hlsSource: c,
						mpegDashSource: i,
						otherSource: l,
						showSettingsIcon: !1,
						showControlBar: o,
						playerClickPlay: !1,
						hideUntilLoaded: !0
					}))
				}, "VideoPlayer", he.a),
				be = g.a.img("PosterImg", he.a),
				ye = g.a.wrapped(t => {
					const {
						className: e,
						onPlayButtonClick: n,
						url: o,
						showPlayButton: s
					} = t;
					return a.a.createElement("div", {
						className: e
					}, a.a.createElement(be, {
						draggable: !1,
						src: o
					}), s && a.a.createElement(ue.a, {
						className: he.a.playButton,
						onClick: n
					}))
				}, "Poster", he.a);
			class Ee extends a.a.Component {
				constructor(t) {
					super(t), this.onPlayButtonClick = () => {
						this.setState({
							showVideo: !0
						})
					}, this.willEnter = () => ({
						opacity: 0
					}), this.willLeave = () => ({
						opacity: Object(le.spring)(0, me)
					}), this.didLeave = () => {
						this.setState({
							showVideo: !1
						})
					}, this.state = {
						showVideo: !1
					}
				}
				renderVideo() {
					const {
						props: t
					} = this;
					return a.a.createElement("div", {
						className: t.className
					}, a.a.createElement(fe, {
						dashUrl: t.dashUrl,
						hlsUrl: t.hlsUrl,
						showControls: t.isUploaded && t.isSelected,
						shouldPause: !t.isSelected || void 0
					}))
				}
				render() {
					const {
						className: t,
						isSelected: e,
						posterUrl: n,
						dashUrl: o,
						hlsUrl: s,
						otherUrl: r
					} = this.props;
					if (!n) return this.renderVideo();
					const {
						showVideo: i
					} = this.state, c = !!(o || s || r);
					return a.a.createElement(le.TransitionMotion, {
						defaultStyles: [],
						styles: e && i && c ? ge : [],
						willEnter: this.willEnter,
						willLeave: this.willLeave,
						didLeave: this.didLeave
					}, c => a.a.createElement("div", {
						className: t
					}, c.map(t => a.a.createElement(fe, {
						key: t.key,
						autoPlay: !0,
						style: t.style,
						otherUrl: r,
						dashUrl: o,
						hlsUrl: s,
						showControls: !0,
						shouldPause: !e || void 0
					})), a.a.createElement(ye, {
						url: n,
						showPlayButton: !i || !e,
						onPlayButtonClick: this.onPlayButtonClick
					})))
				}
			}
			var xe = g.a.wrapped(Ee, "Component", he.a),
				Se = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/index.m.less"),
				Ce = n.n(Se);

			function Oe() {
				return (Oe = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			var ke = t => {
					const {
						alignCenter: e,
						isSelected: n,
						onCancel: o,
						onRetry: s,
						onRemove: r,
						upload: i,
						mediaAsset: c,
						thumbnail: l,
						...d
					} = t;
					let u = !1;
					if (i) u = "image" === Object(Ft.f)(i.metadata.mimetype);
					else {
						if (!c) return null;
						u = c.type === I.a.Image || c.type === I.a.AnimatedImage
					}
					const p = i ? i.metadata.height : c.height,
						m = !i || i.status === Ut.a.SUCCESS,
						g = u && !!p && p < 104,
						f = !p;
					return a.a.createElement("div", Oe({
						className: Object(h.a)(Ce.a.container, {
							[Ce.a.alignCenter]: e,
							[Ce.a.isCompact]: g,
							[Ce.a.isUploaded]: m,
							[Ce.a.isSelected]: n
						})
					}, d), f ? a.a.createElement(Qt, {
						className: Ce.a.placeholder,
						isImage: u
					}) : u ? a.a.createElement(Wt, {
						className: Ce.a.imagePreview,
						url: i ? i.metadata.localUrl : c.imageUrl
					}) : a.a.createElement(xe, {
						className: Ce.a.videoPreview,
						dashUrl: c ? c.dashUrl : void 0,
						hlsUrl: c ? c.hlsUrl : void 0,
						isSelected: n,
						isUploaded: m,
						otherUrl: i ? i.metadata.localUrl : void 0,
						posterUrl: l ? l.url : c.posterUrl
					}), i && a.a.createElement(ae, {
						className: Ce.a.statusBar,
						onCancel: o,
						onRemove: r,
						onRetry: s,
						upload: i
					}))
				},
				Te = n("./src/reddit/components/RichTextEditor/media/MediaBlock/SelectionHook/index.m.less"),
				ve = n.n(Te);

			function je() {
				return (je = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const we = g.a.div("HiddenDiv", ve.a);
			var Re = ({
					elementRef: t,
					...e
				}) => a.a.createElement(we, je({}, e, {
					innerRef: t
				}), a.a.createElement("br", null)),
				_e = n("./src/reddit/components/MakeGifToggle/index.tsx"),
				Be = n("./src/reddit/icons/svgs/ThumbnailSelect/index.tsx"),
				Ie = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Ae = n("./src/reddit/layout/row/Inline/index.tsx"),
				Ke = n("./src/reddit/components/RichTextEditor/Toolbar/index.tsx"),
				Me = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				Le = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx"),
				Fe = n("./src/reddit/components/RichTextEditor/media/MediaBlock/Toolbar/index.m.less"),
				De = n.n(Fe);
			const Ne = g.a.wrapped(Me.a, "FormatterButton", De.a),
				Pe = Object(Le.f)(Ie.b),
				Ue = Object(Le.f)(Be.a),
				He = g.a.wrapped(Ae.a, "ToolbarContent", De.a);
			var ze = t => {
					const {
						alignCenter: e,
						block: n,
						editorState: o,
						onChange: r,
						showVideoControls: i
					} = t, c = n.getKey(), {
						makeGif: l = !1
					} = Object(I.h)(n) || {};
					return a.a.createElement("div", {
						className: Object(h.a)(De.a.container, {
							[De.a.alignCenter]: e
						})
					}, a.a.createElement(He, {
						className: De.a.content
					}, i && a.a.createElement(_e.a, {
						isCompact: !0,
						key: "make-gif",
						on: l,
						onClick: () => r(Object(I.r)(o, c, {
							makeGif: !l
						}))
					}), i && t.showThumbnailButton && a.a.createElement(Ne, {
						Icon: Ue,
						onClick: t.onThumbnailButtonClick,
						tooltip: s.fbt._("Choose thumbnail", null, {
							hk: "2gKwDF"
						}),
						tooltipBelow: !0
					}), i && a.a.createElement(Ke.c, null), a.a.createElement(Ne, {
						Icon: Pe,
						onClick: () => r(Object(I.d)(o, c)),
						tooltip: s.fbt._("Remove", null, {
							hk: "2aF1Zw"
						}),
						tooltipBelow: !0
					})))
				},
				Ve = n("./src/reddit/components/RichTextEditor/media/MediaBlock/index.m.less"),
				We = n.n(Ve);
			const qe = t => `RTE_VIDEO_THUMBNAIL_SELECTOR_${t.getKey()}`,
				Ge = Object(d.a)(t => t.uploads, (t, e) => {
					const n = Object(I.h)(e.block);
					return n && n.uploadInfo && n.uploadInfo.uploadKey
				}, (t, e) => e ? t[e] : void 0),
				Ye = Object(l.b)((t, e) => ({
					upload: Ge(t, e),
					isThumbnailSelectorOpen: Object(Nt.a)(t) === qe(e.block),
					isRteVideoPosterEnabled: S.d.rteVideoPoster(t)
				}), (t, e) => ({
					onCancelUpload: e => t(Kt.i(e, !1)),
					toggleVideoThumbnailsSelector: () => t(Object(At.i)(qe(e.block)))
				})),
				Qe = g.a.div("MediaContainer", We.a),
				Ze = g.a.div("Container", We.a);
			class Je extends a.a.Component {
				constructor(t) {
					super(t), this.onNativeSelectionChange = () => {
						const t = window.getSelection();
						if (0 === t.rangeCount) return;
						const e = t.getRangeAt(0),
							{
								commonAncestorContainer: n
							} = e;
						this.state.active ? this.rootContainer.contains(n) || this.setState({
							active: !1
						}) : this.rootContainer && this.rootContainer.contains(n) && this.selectBlock(), this.setState({
							isInSelection: Object(L.i)(e, this.rootContainer)
						})
					}, this.selectBlock = () => {
						const t = document.createRange();
						t.selectNodeContents(this.rootContainer);
						const e = window.getSelection();
						e.removeAllRanges(), e.addRange(t), this.setState({
							active: !0
						})
					}, this.isSelected = () => {
						const t = this.props.blockProps.getEditorState().getSelection(),
							e = this.props.block.getKey();
						return this.state.active && Object(I.n)(t, e)
					}, this.onRetryUpload = () => {
						const {
							upload: t
						} = this.props;
						t && this.props.blockProps.onRetryUpload(t.key)
					}, this.onMediaViewClickCapture = t => {
						this.state.active || this.selectBlock()
					}, this.onDragStart = t => {
						t.dataTransfer.effectAllowed = "move", t.dataTransfer.setData(Pt, this.props.block.getKey())
					}, this.onRemove = () => {
						const t = this.props.blockProps.getEditorState();
						this.props.blockProps.onChange(Object(I.d)(t, this.props.block.getKey()))
					}, this.onCancelUpload = async () => {
						this.props.upload && (await this.props.onCancelUpload(this.props.upload.key), this.selectBlock())
					}, this.onToolbarStateChange = t => {
						this.props.blockProps.onChange(t)
					}, this.toggleVideoThumbnailsSelector = () => {
						this.props.toggleVideoThumbnailsSelector()
					}, this.onThumbnailSelect = t => {
						const e = this.props.blockProps.getEditorState(),
							n = this.props.block.getKey();
						let o = Object(I.r)(e, this.props.block.getKey(), {
							thumbnail: t
						});
						o = Object(I.p)(o, n), this.props.blockProps.onChange(o), this.toggleVideoThumbnailsSelector()
					}, this.state = {
						active: !1,
						isInSelection: !1
					}
				}
				shouldComponentUpdate(t, e) {
					return e.active !== this.state.active || e.isInSelection !== this.state.isInSelection || t.block !== this.props.block || t.upload !== this.props.upload || Object(I.n)(t.selection, t.block.getKey())
				}
				componentDidMount() {
					document.addEventListener("selectionchange", this.onNativeSelectionChange);
					const {
						selection: t
					} = this.props;
					t.getHasFocus() && Object(I.n)(t, this.props.block.getKey()) && this.selectBlock(), this.overlayContainer = Lt(!0)
				}
				componentWillUnmount() {
					document.removeEventListener("selectionchange", this.onNativeSelectionChange)
				}
				componentWillReceiveProps(t) {
					const e = t.block.getKey(),
						n = this.props.blockProps.getEditorState(),
						o = n;
					n !== o && this.props.blockProps.onChange(o), !this.state.active && t.selection !== this.props.selection && t.selection.getHasFocus() && Object(I.n)(t.selection, e) && this.selectBlock()
				}
				getToolbarOffset() {
					if (!this.props.blockProps.rteFocusableContentRef || !this.rootContainer) return 0;
					const {
						top: t
					} = this.rootContainer.getBoundingClientRect(), {
						top: e
					} = this.props.blockProps.rteFocusableContentRef.getBoundingClientRect();
					return t - e - 30 - 10
				}
				render() {
					const {
						block: t,
						blockProps: e,
						isRteVideoPosterEnabled: n,
						offsetKey: o,
						upload: s
					} = this.props, r = Object(I.h)(t), i = r ? r.thumbnail : void 0, c = !!s && Object(Ft.l)(s.metadata.mimetype || ""), {
						active: l,
						isInSelection: d
					} = this.state, u = e.editorType === Dt.a.Comment;
					return a.a.createElement(Ze, {
						innerRef: t => this.rootContainer = t
					}, l && a.a.createElement(ze, {
						block: t,
						editorState: e.getEditorState(),
						onChange: this.onToolbarStateChange,
						onThumbnailButtonClick: this.toggleVideoThumbnailsSelector,
						showThumbnailButton: n,
						showVideoControls: c,
						alignCenter: !u
					}), a.a.createElement(Re, null), a.a.createElement("div", {
						contentEditable: !1,
						"data-offset-key": o
					}, a.a.createElement(Qe, {
						draggable: !0,
						onDragStart: this.onDragStart,
						innerRef: t => this.mediaContainer = t
					}, a.a.createElement(ke, {
						isSelected: d || l,
						thumbnail: i,
						onCancel: this.onCancelUpload,
						onClickCapture: this.onMediaViewClickCapture,
						onRetry: this.onRetryUpload,
						onRemove: this.onRemove,
						upload: s,
						mediaAsset: r.mediaAsset,
						alignCenter: !u
					})), s && c && a.a.createElement(Mt.a, {
						onSelect: this.onThumbnailSelect,
						onToggleModal: this.toggleVideoThumbnailsSelector,
						videoSource: s.metadata.localUrl,
						videoDuration: s.metadata.videoDuration,
						selected: i,
						isOpen: this.props.isThumbnailSelectorOpen
					})), a.a.createElement(Re, null))
				}
			}
			var Xe = Ye(Je),
				$e = n("./src/reddit/components/RichTextEditor/media/MediaCaption/index.m.less"),
				tn = n.n($e);
			class en extends a.a.PureComponent {
				constructor(t) {
					super(t);
					const {
						contentState: e,
						block: n
					} = Object(A.e)(t.children[0]).props;
					this.mediaBlockKey = e.getBlockBefore(n.getKey()).getKey()
				}
				render() {
					const t = this.props.children[0],
						e = Object(A.e)(t),
						{
							block: n,
							contentState: o
						} = e.props,
						r = o.getBlockForKey(this.mediaBlockKey),
						i = Object(I.h)(r);
					if (!i || !(i.mediaAsset || i.uploadInfo && i.uploadInfo.mediaType)) return null;
					const c = !n.getLength();
					return a.a.createElement("div", {
						className: tn.a.wrapper,
						style: {
							"--media-caption-placeholder-text": c ? `'${s.fbt._("Add caption",null,{hk:"3zI8El"})}'` : ""
						}
					}, t)
				}
			}
			const nn = Object(M.Map)({
				[k.j]: {
					element: "div",
					wrapper: a.a.createElement(en, null)
				}
			});
			var on = (t, e, n) => {
					const s = t.getSelection(),
						r = t.getCurrentContent(),
						i = r.getBlockForKey(s.getAnchorKey()),
						c = r.getBlockForKey(s.getFocusKey()),
						[a, l] = Object(V.e)(r, i, c);
					if (!a || a !== l) return t;
					const {
						blocks: d,
						start: u
					} = a, p = Object(V.g)(i), h = Object(V.g)(c), {
						colCount: m
					} = h;
					d.sort(V.b);
					const g = D()(d, m),
						{
							minCol: f,
							minRow: b,
							maxCol: y,
							maxRow: E
						} = Object(V.f)(p, h),
						x = {
							rowIndex: 0,
							colIndex: 0
						};
					if ("rows" === e) {
						const t = "before" === n ? b : E + 1,
							e = D()(Object(V.l)(m, E - b + 1), m);
						g.splice(t, 0, ...e), x.rowIndex = t
					} else {
						const t = "before" === n ? f : y + 1;
						g.forEach(e => {
							e.splice(t, 0, ...Object(V.l)(y - f + 1, 1))
						}), x.colIndex = t
					}
					const S = Object(V.d)(g),
						C = r.getBlocksAsArray(),
						O = P()(S),
						k = [...C.slice(0, u), ...O, ...C.slice(u + d.length)],
						T = r.merge({
							blockMap: o.BlockMapBuilder.createFromArray(k)
						}),
						v = Z()(O, t => Object(V.h)(x, Object(V.g)(t))),
						j = Object(V.o)(s, v, v);
					let w = o.EditorState.push(t, T, G.e);
					return w = o.EditorState.forceSelection(w, j)
				},
				sn = n("./node_modules/lodash/clamp.js"),
				rn = n.n(sn),
				cn = n("./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts");
			var an = (t, e, n = "preserve") => {
				const s = t.getSelection(),
					r = t.getCurrentContent(),
					i = "up" === e || "left" === e ? s.getStartKey() : s.getEndKey(),
					c = r.getBlockForKey(i);
				if (!Object(k.v)(c.getType())) return;
				const a = Object(V.g)(c),
					{
						colCount: l,
						colIndex: d,
						rowIndex: u
					} = a,
					p = r.getBlocksAsArray(),
					h = Object(cn.a)(r, c);
				if (!h) return;
				let m = u,
					g = d;
				switch (e) {
					case "up":
						m--;
						break;
					case "down":
						m++;
						break;
					case "left":
						--g < 0 && (m--, g = l - 1);
						break;
					case "right":
						++g >= l && (m++, g = 0)
				}
				const f = {
					rowIndex: m,
					colIndex: g
				};
				let b = i;
				const y = Z()(h.blocks, t => Object(V.h)(Object(V.g)(t), f));
				if (y) b = y.getKey();
				else {
					const t = Object(V.c)(f, a) < 0 ? h.start - 1 : h.start + h.blocks.length;
					0 <= t && t < p.length && (b = p[t].getKey())
				}
				const E = r.getBlockForKey(b);
				let x = 0;
				"preserve" === n ? x = rn()(s.getFocusOffset(), 0, E.getLength()) : "end" === n && (x = E.getLength());
				const S = s.merge({
					anchorKey: b,
					focusKey: b,
					focusOffset: x,
					anchorOffset: x
				});
				return s !== S ? o.EditorState.forceSelection(t, S) : void 0
			};
			const ln = (t, e) => {
					const n = e.getCurrentContent(),
						o = e.getSelection(),
						s = n.getBlockForKey(o.getFocusKey()),
						[r] = Object(V.e)(n, s, s);
					if (!r) return;
					const i = Object(V.g)(s);
					let c;
					return (c = i.colIndex === i.colCount - 1 && i.rowIndex === r.blocks.length / i.colCount - 1 && !t.shiftKey && o.getFocusKey() === o.getAnchorKey() ? on(e, "rows", "after") : an(e, t.shiftKey ? "left" : "right", "end")) ? (t.preventDefault(), c) : void 0
				},
				dn = (t, e) => {
					if (t.shiftKey) return;
					const n = an(e, "up");
					return n && t.preventDefault(), n
				},
				un = (t, e) => {
					if (t.shiftKey) return;
					const n = an(e, "down");
					return n && t.preventDefault(), n
				};
			class pn {
				constructor() {
					this.lastRowInsertionState = null
				}
				undoRowInsertion(t) {
					const e = o.EditorState.undo(t);
					return an(e, "down", "end") || e
				}
				isSelectionInLastRow(t) {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						o = e.getBlockForKey(n.getFocusKey()),
						[s] = Object(V.e)(e, o, o);
					if (!s) return !1;
					const r = Object(V.g)(s.blocks[0]).colCount,
						i = s.blocks.length / r;
					return Object(V.g)(o).rowIndex === i - 1
				}
				insertNewRow(t) {
					const e = t.getSelection();
					let n = on(t, "rows", "after");
					return n = o.EditorState.forceSelection(n, e), n = an(n, "down") || n, this.lastRowInsertionState = n, n
				}
				handle(t) {
					return t.getSelection().isCollapsed() ? t === this.lastRowInsertionState ? this.undoRowInsertion(t) : this.isSelectionInLastRow(t) ? this.insertNewRow(t) : an(t, "down") || t : t
				}
			}
			const hn = (t, e) => {
				const n = t.getSelection();
				if (n.isCollapsed() || n.getStartKey() === n.getEndKey()) return;
				const s = t.getCurrentContent(),
					r = s.getBlockForKey(n.getAnchorKey()),
					i = s.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(V.e)(s, r, i);
				if (c && c === a) {
					const r = Object(V.o)(n, i, i, !1),
						c = z.b(s, r, e);
					return o.EditorState.push(t, c, G.d)
				}
			};
			var mn = n("./node_modules/lodash/forEach.js"),
				gn = n.n(mn);
			const fn = (t, e) => e ? t[0] : t[t.length - 1];
			var bn = (t, e) => {
					return t.getSelection().isCollapsed() ? ((t, e) => {
						const n = t.getSelection(),
							s = e.getSelection();
						if (!n.isCollapsed() || s.isCollapsed() || 0 !== s.getStartOffset() || s.getStartKey() !== n.getStartKey()) return t;
						const r = t.getCurrentContent(),
							i = e.getCurrentContent(),
							c = r.getBlockForKey(n.getAnchorKey());
						if (!Object(k.v)(c.getType())) return t;
						const {
							rowIndex: a,
							colIndex: l
						} = Object(V.g)(c);
						if (0 !== a || 0 !== l) return t;
						const d = r.getBlockMap(),
							u = i.getBlockMap();
						if (d.size >= u.size) return t;
						const p = r.getBlockAfter(n.getAnchorKey()),
							h = i.getBlockAfter(s.getEndKey());
						if (p && p !== h) return t;
						const m = c.merge({
								type: k.n,
								data: Object(M.Map)({})
							}),
							g = r.merge({
								blockMap: d.set(c.getKey(), m)
							});
						return o.EditorState.set(t, {
							currentContent: g
						})
					})(t, e) : ((t, e) => {
						const n = t.getSelection();
						if (n.isCollapsed()) return t;
						if (e.getSelection() === n) return t;
						if (n.getFocusKey() === n.getAnchorKey()) return t;
						const s = t.getCurrentContent(),
							r = s.getBlockForKey(n.getAnchorKey()),
							i = s.getBlockForKey(n.getFocusKey()),
							[c, a] = Object(V.e)(s, r, i);
						if (!c && !a) return t;
						let l = t;
						if (c !== a) {
							const e = n.getIsBackward(),
								s = Object(V.o)(n, c ? fn(c.blocks, !e) : null, a ? fn(a.blocks, e) : null, e);
							n !== s && (l = o.EditorState.forceSelection(t, s))
						} else if (c && a && c === a) {
							const e = Object(V.g)(r),
								c = Object(V.g)(i),
								d = s.getBlocksAsArray(),
								{
									start: u,
									blocks: p
								} = a,
								h = p[0],
								m = Object(V.g)(h);
							if (0 !== m.colIndex || 0 !== m.rowIndex) throw new Error("First table block must always has [0, 0] coordinate!");
							const g = Object(V.b)(i, r) < 0,
								f = Object(V.k)(e, c),
								b = [],
								y = [];
							gn()(p, t => {
								const e = Object(V.g)(t);
								f(e.rowIndex, e.colIndex) ? b.push(t) : t !== h && y.push(t)
							});
							const E = b[0] === h;
							b.sort(V.b);
							const x = [...d.slice(0, u), ...E ? [] : [h], ...b, ...y, ...d.slice(u + p.length)],
								S = fn(b, !g),
								C = fn(b, g),
								O = Object(V.o)(n, S, C, g),
								k = s.merge({
									blockMap: o.BlockMapBuilder.createFromArray(x),
									selectionAfter: O
								});
							l = o.EditorState.set(t, {
								currentContent: k
							}), O !== n && (l = o.EditorState.forceSelection(l, O))
						}
						return l
					})(t, e)
				},
				yn = n("./src/reddit/components/RichTextEditor/table/Renderer/index.m.less"),
				En = n.n(yn);
			const xn = g.a.div("Cell", En.a),
				Sn = g.a.div("Row", En.a),
				Cn = g.a.div("Table", En.a),
				On = (t, e) => {
					if (!e || !t.contains(e)) return;
					let n = e;
					for (; n && n !== t;) {
						if (n instanceof HTMLElement && n.hasAttribute("data-row")) return n;
						n.parentElement && (n = n.parentElement)
					}
				},
				kn = (t, e = 10) => {
					let n = t,
						o = e;
					for (; n && o > 0;) {
						if (n instanceof HTMLElement && n.dataset.table) return n;
						n.parentElement && (n = n.parentElement), o--
					}
				},
				Tn = t => {
					const {
						dataset: e
					} = t;
					if ("string" == typeof e.row && "string" == typeof e.col) return {
						rowIndex: +e.row,
						colIndex: +e.col
					}
				},
				vn = t => {
					const e = window.getSelection(),
						{
							focusNode: n,
							anchorNode: o,
							rangeCount: s
						} = e;
					if (n !== o && s && t) {
						const n = e.getRangeAt(0);
						return Object(L.i)(n, t) && !t.contains(n.commonAncestorContainer)
					}
					return !1
				},
				jn = t => {
					const e = a.a.Children.toArray(t),
						n = Object(A.e)(e[0]),
						{
							selection: o,
							contentState: s,
							block: r
						} = n.props,
						{
							colCount: i
						} = Object(V.g)(r);
					e.sort((t, e) => Object(V.b)(Object(A.c)(t), Object(A.c)(e)));
					const c = D()(e, i);
					let l, d, u = !1;
					if (o.getAnchorKey() !== o.getFocusKey()) {
						const t = s.getBlocksAsArray(),
							n = s.getBlockForKey(o.getStartKey()),
							i = s.getBlockForKey(o.getEndKey()),
							c = t.indexOf(n),
							a = t.indexOf(i),
							p = t.indexOf(r),
							h = p + e.length - 1;
						c < p && p < a || c < h && h < a ? u = !0 : p <= c && a <= h && (d = Object(V.g)(o.getIsBackward() ? i : n), l = Object(V.g)(o.getIsBackward() ? n : i))
					}
					return {
						rows: c,
						anchorCell: d,
						focusCell: l,
						isSelectWholeTable: u
					}
				};
			class wn extends a.a.Component {
				constructor(t) {
					super(t), this.tableElem = null, this.onMouseDown = t => {
						if (!this.tableElem || t.nativeEvent.detail < 2) return;
						const e = window.getSelection(),
							n = e.rangeCount ? e.getRangeAt(0) : null,
							o = On(this.tableElem, e.focusNode);
						if (n && o)
							if (2 === t.nativeEvent.detail && e.isCollapsed) {
								const s = n.cloneRange();
								s.setEndAfter(o), s.toString() || (t.preventDefault(), e.selectAllChildren(o))
							} else t.nativeEvent.detail >= 3 && (e.selectAllChildren(o), t.preventDefault())
					}, this.onNativeSelectionChange = () => {
						const t = this.tableElem;
						if (!t) return;
						const e = window.getSelection();
						if (e.anchorNode === e.focusNode) return void this.resetSelection();
						const n = On(t, e.anchorNode),
							o = On(t, e.focusNode);
						n && n === o ? this.resetSelection() : n && o ? this.setCellsRange(n, o) : n || o ? this.selectWholeTable() : vn(t) ? this.selectWholeTable() : this.resetSelection()
					}, this.resetSelection = () => {
						(this.state.anchorCell || this.state.focusCell || this.state.isSelectWholeTable) && this.setState({
							isSelectWholeTable: !1,
							focusCell: void 0,
							anchorCell: void 0
						})
					}, this.setCellsRange = (t, e) => {
						const n = Tn(e),
							o = Tn(t);
						Object(V.h)(n, this.state.focusCell) && Object(V.h)(o, this.state.anchorCell) && !this.state.isSelectWholeTable || this.setState({
							focusCell: n,
							anchorCell: o,
							isSelectWholeTable: !1
						})
					}, this.selectWholeTable = () => {
						!this.state.focusCell && this.state.isSelectWholeTable || this.setState({
							focusCell: void 0,
							isSelectWholeTable: !0
						})
					}, this.state = jn(t.children)
				}
				componentDidMount() {
					document.addEventListener("selectionchange", this.onNativeSelectionChange)
				}
				componentWillUnmount() {
					document.removeEventListener("selectionchange", this.onNativeSelectionChange)
				}
				UNSAFE_componentWillReceiveProps(t) {
					t.children !== this.props.children && this.setState(jn(t.children))
				}
				render() {
					const {
						rows: t,
						anchorCell: e,
						focusCell: n,
						isSelectWholeTable: o
					} = this.state;
					let s;
					o ? s = (t, e) => !0 : e && n && !Object(V.h)(e, n) && (s = Object(V.k)(e, n));
					const r = t[0].map(t => Object(V.g)(Object(A.e)(t).props.block).alignment),
						i = t.map((t, e) => a.a.createElement(Sn, {
							key: e
						}, t.map((t, n) => a.a.createElement(xn, {
							"data-row": e,
							"data-col": n,
							"data-selected": !!s && s(e, n),
							key: n,
							style: {
								"--cell-text-alignment": r[n] ? V.a[r[n]] : void 0
							}
						}, t))));
					return a.a.createElement(Cn, {
						className: s ? En.a.isFakeSelectionActive : void 0,
						innerRef: t => this.tableElem = t,
						onMouseDown: this.onMouseDown,
						"data-table": !0
					}, i)
				}
			}
			const Rn = Object(M.Map)({
				[k.l]: {
					element: "div",
					wrapper: a.a.createElement(wn, null)
				}
			});
			var _n = n("./node_modules/lodash/isEqual.js"),
				Bn = n.n(_n),
				In = n("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				An = n("./src/reddit/icons/svgs/FormattingAlignCenter/index.tsx"),
				Kn = n("./src/reddit/icons/svgs/FormattingAlignLeft/index.tsx"),
				Mn = n("./src/reddit/icons/svgs/FormattingAlignRight/index.tsx"),
				Ln = n("./src/reddit/icons/svgs/FormattingDeleteRow/index.tsx"),
				Fn = n("./src/reddit/icons/svgs/FormattingInsertRow/index.tsx"),
				Dn = n("./src/reddit/models/RichTextJson/index.ts");
			var Nn = (t, e = !1) => {
				const n = t.getSelection(),
					s = t.getCurrentContent(),
					r = s.getBlockForKey(n.getAnchorKey()),
					i = s.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(V.e)(s, r, i);
				if (c && c === a) {
					const {
						blocks: e
					} = c;
					e.sort(V.b);
					const s = Object(V.o)(n, e[0], q()(e));
					return J(o.EditorState.set(t, {
						selection: s
					}), "rows")
				}
			};
			var Pn = (t, e) => {
					const n = t.getSelection(),
						s = t.getCurrentContent(),
						r = s.getBlockForKey(n.getAnchorKey()),
						i = s.getBlockForKey(n.getFocusKey()),
						[c, a] = Object(V.e)(s, r, i);
					if (!c || c !== a) return t;
					const l = Object(V.g)(r),
						d = Object(V.g)(i),
						{
							minCol: u,
							maxCol: p
						} = Object(V.f)(l, d),
						h = c.blocks.map(t => {
							const {
								colIndex: n
							} = Object(V.g)(t);
							return u <= n && n <= p ? Object(V.m)(t, {
								alignment: e
							}) : t
						}),
						m = s.getBlockMap(),
						g = s.merge({
							blockMap: m.merge(o.BlockMapBuilder.createFromArray(h)),
							selectionAfter: n,
							selectionBefore: n
						});
					return o.EditorState.push(t, g, G.b)
				},
				Un = n("./src/reddit/components/RichTextEditor/table/Toolbar/index.m.less"),
				Hn = n.n(Un);

			function zn() {
				return (zn = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const Vn = (t, e) => n => a.a.createElement(t, zn({}, e, n)),
				Wn = Object(Le.f)(Fn.a),
				qn = Vn(Wn, {
					orientation: "up"
				}),
				Gn = Vn(Wn, {
					orientation: "right"
				}),
				Yn = Vn(Wn, {
					orientation: "left"
				}),
				Qn = Object(Le.f)(Ln.a),
				Zn = Vn(Qn, {
					orientation: "vertical"
				}),
				Jn = Object(Le.f)(An.a),
				Xn = Object(Le.f)(Kn.a),
				$n = Object(Le.f)(Mn.a),
				to = Object(Le.f)(Ie.b),
				eo = g.a.wrapped(Ae.a, "ToolbarContent", Hn.a),
				no = t => a.a.createElement(Me.a, zn({}, t, {
					className: Object(h.a)(Hn.a.formatterButton, t.className),
					tooltipContentClass: Hn.a.tooltip
				}));
			var oo = t => {
					const {
						editorState: e,
						onChange: n
					} = t;
					return a.a.createElement(eo, null, a.a.createElement(no, {
						Icon: Xn,
						onClick: () => n(Pn(e, Dn.e)),
						tooltip: s.fbt._("Left align", null, {
							hk: "45eAc"
						})
					}), a.a.createElement(no, {
						Icon: Jn,
						onClick: () => n(Pn(e, Dn.d)),
						tooltip: s.fbt._("Center align", null, {
							hk: "4aAfyf"
						})
					}), a.a.createElement(no, {
						Icon: $n,
						onClick: () => n(Pn(e, Dn.f)),
						tooltip: s.fbt._("Right align", null, {
							hk: "3oHuXw"
						})
					}), a.a.createElement(Ke.c, null), a.a.createElement(no, {
						Icon: Yn,
						onClick: () => n(on(e, "columns", "before")),
						tooltip: s.fbt._("Insert column before", null, {
							hk: "11EB6Q"
						})
					}), a.a.createElement(no, {
						Icon: Gn,
						onClick: () => n(on(e, "columns", "after")),
						tooltip: s.fbt._("Insert column after", null, {
							hk: "Ddlpl"
						})
					}), a.a.createElement(no, {
						Icon: Zn,
						onClick: () => n(J(e, "columns")),
						tooltip: s.fbt._("Delete column", null, {
							hk: "3HaQQD"
						})
					}), a.a.createElement(Ke.c, null), a.a.createElement(no, {
						Icon: qn,
						onClick: () => n(on(e, "rows", "before")),
						tooltip: s.fbt._("Insert row above", null, {
							hk: "1HIgn"
						})
					}), a.a.createElement(no, {
						Icon: Wn,
						onClick: () => n(on(e, "rows", "after")),
						tooltip: s.fbt._("Insert row below", null, {
							hk: "3t7ZU"
						})
					}), a.a.createElement(no, {
						Icon: Qn,
						onClick: () => n(J(e, "rows")),
						tooltip: s.fbt._("Delete row", null, {
							hk: "3yJYqS"
						})
					}), a.a.createElement(Ke.c, null), a.a.createElement(no, {
						Icon: to,
						onClick: () => n(Nn(e) || e),
						tooltip: s.fbt._("Delete table", null, {
							hk: "1fK0KA"
						})
					}))
				},
				so = n("./src/reddit/components/RichTextEditor/table/ToolbarController/index.m.less"),
				ro = n.n(so);
			const io = 20,
				co = g.a.div("ActionButton", ro.a),
				ao = g.a.div("ToolbarWrapper", ro.a),
				lo = t => {
					const e = {};
					if (!t || !document.documentElement) return e;
					const n = t.left - 154.5,
						o = t.left + 154.5 - document.documentElement.clientWidth;
					return n < 0 ? e.left = -n + io + 2 : o > 0 && (e.left = -o + io - 2), e
				},
				uo = t => {
					t.preventDefault(), t.stopPropagation()
				};
			class po extends c.Component {
				constructor(t) {
					super(t), this.containerElem = null, this.setContainerRef = t => this.containerElem = t, this.onResize = t => {
						this.hideToolbar(), this.state.tooltipPosition && this.updateForCurrentSelection()
					}, this.onDocumentClick = t => {
						this.state.isToolbarActive && this.containerElem && (this.containerElem.contains(t.target) || this.hideToolbar())
					}, this.onNativeSelectionChange = () => {
						this.updateForCurrentSelection()
					}, this.updateForCurrentSelection = () => {
						const t = window.getSelection();
						if (!t.rangeCount) return void this.hideActionButton();
						const e = t.getRangeAt(0).commonAncestorContainer,
							{
								rteDomRef: n
							} = this.props;
						if (!n.contains(e)) return void this.hideActionButton();
						const o = kn(e);
						if (!o) return void this.hideActionButton();
						const s = On(o, t.anchorNode);
						if (!s) return void this.hideActionButton();
						const r = On(o, t.focusNode);
						r ? this.updateActionButtonPosition(s, r) : this.hideActionButton()
					}, this.updateActionButtonPosition = (t, e) => {
						const n = t.getBoundingClientRect(),
							o = e.getBoundingClientRect(),
							s = {
								top: Math.min(n.top, o.top),
								left: Math.max(n.right, o.right) - io
							};
						Bn()(this.state.tooltipPosition, s) || this.setState({
							tooltipPosition: s
						}), this.hideToolbar()
					}, this.hideActionButton = () => {
						this.hideToolbar(), this.state.tooltipPosition && this.setState({
							tooltipPosition: null
						})
					}, this.hideToolbar = () => {
						this.state.isToolbarActive && this.setState({
							isToolbarActive: !1
						})
					}, this.onActionButtonClick = t => {
						this.setState(t => ({
							isToolbarActive: !t.isToolbarActive
						})), uo(t)
					}, this.state = {
						isToolbarActive: !1,
						tooltipPosition: null
					}, this.api = {
						hideActionButton: this.hideActionButton
					}
				}
				componentDidMount() {
					const {
						onSetApi: t
					} = this.props;
					document.addEventListener("selectionchange", this.onNativeSelectionChange), document.addEventListener("click", this.onDocumentClick), window.addEventListener("resize", this.onResize), t && t(this.api)
				}
				componentWillUnmount() {
					const {
						onSetApi: t
					} = this.props;
					document.removeEventListener("selectionchange", this.onNativeSelectionChange), document.removeEventListener("click", this.onDocumentClick), window.removeEventListener("resize", this.onResize), t && t(null)
				}
				UNSAFE_componentWillReceiveProps(t) {
					const e = t.editorState.getSelection(),
						n = this.props.editorState.getSelection();
					e.getHasFocus() && Object(k.v)(o.RichUtils.getCurrentBlockType(t.editorState)) ? e !== n && this.hideToolbar() : this.hideActionButton()
				}
				render() {
					const t = !this.props.readOnly && this.state.isToolbarActive,
						{
							tooltipPosition: e
						} = this.state;
					return a.a.createElement("div", {
						ref: this.setContainerRef
					}, a.a.createElement(In.b, {
						targetPosition: e
					}, a.a.createElement(co, {
						className: t ? ro.a.isPressed : void 0,
						onClick: this.onActionButtonClick,
						onMouseDown: uo,
						onMouseMove: uo
					}, t ? a.a.createElement(ao, {
						style: lo(e)
					}, a.a.createElement(oo, {
						onChange: this.props.onChange,
						editorState: this.props.editorState
					})) : null)))
				}
			}
			var ho = n("./src/reddit/components/RichTextEditor/editorStateTransforms.ts");
			n("./node_modules/core-js/modules/web.dom.iterable.js");

			function mo() {
				return (mo = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}

			function go() {
				return new Map
			}
			const fo = a.a.createContext(go());

			function bo(t) {
				class e extends a.a.Component {
					constructor() {
						super(...arguments), this.elementRef = null, this.updateElementRef = t => {
							const {
								registry: e
							} = this.props;
							this.elementRef = t, t ? e.set(this.props.entityKey, t) : e.delete(this.props.entityKey)
						}
					}
					componentWillReceiveProps(t) {
						const {
							registry: e
						} = this.props;
						this.props.entityKey !== t.entityKey && this.elementRef && (e.get(this.props.entityKey) === this.elementRef && e.delete(this.props.entityKey), e.set(t.entityKey, this.elementRef))
					}
					render() {
						return a.a.createElement("span", {
							ref: this.updateElementRef
						}, a.a.createElement(t, this.props))
					}
				}
				return t => a.a.createElement(fo.Consumer, null, n => a.a.createElement(e, mo({}, t, {
					registry: n
				})))
			}
			var yo = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				Eo = n("./src/reddit/components/RichTextEditor/emotes/decorator.m.less"),
				xo = n.n(Eo);
			const So = {
					strategy: yo.e,
					component: bo(t => {
						const {
							contentState: e
						} = t, n = Object(yo.i)(e), o = e.getEntity(t.entityKey), {
							id: s,
							emoji: r,
							sticker: i
						} = o.getData(), c = n ? i : r;
						return a.a.createElement("span", {
							className: Object(h.a)(xo.a.emote, {
								[xo.a.sticker]: n
							}),
							title: `:${s}:`,
							style: {
								backgroundImage: `url(${c.path})`,
								width: c.x
							}
						}, t.children)
					})
				},
				Co = () => So;
			var Oo = n("./src/reddit/selectors/experiments/econ/customEmojis.ts"),
				ko = n("./src/reddit/selectors/gold/enabledFeatures.ts"),
				To = n("./src/reddit/selectors/gold/powerups.ts"),
				vo = n("./src/reddit/components/RichTextEditor/emotes/Powerups/tooltipAsync.ts"),
				jo = n("./src/higherOrderComponents/makeAsync.tsx"),
				wo = Object(jo.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("SpecialMembershipsEmotesTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/emotes/SpecialMemberships/tooltip.tsx")).then(t => t.default)
				});

			function Ro() {
				return (Ro = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			var _o = t => {
				const {
					subreddit: e
				} = t, n = e.id, o = Object(l.e)(S.d.spEmotes), s = Object(l.e)(t => Object(ko.b)(t, {
					subredditId: n
				})), r = Object(l.e)(Oo.a);
				return Object(l.e)(t => Object(To.f)(t, {
					subredditId: n
				})) && r ? a.a.createElement(vo.a, t) : a.a.createElement(a.a.Fragment, null, s && a.a.createElement(wo, Ro({}, t, {
					shouldHideAddEmote: !o
				})))
			};
			const Bo = new Set([K.a.LINK]);
			var Io = n("./src/reddit/components/RichTextEditor/entity/link/helpers.tsx"),
				Ao = n("./src/reddit/components/RichTextEditor/entity/link/decorator.m.less"),
				Ko = n.n(Ao);
			const Mo = g.a.a("RegularLink", Ko.a),
				Lo = {
					strategy: Io.a,
					component: bo(t => {
						const e = t.contentState.getEntity(t.entityKey),
							{
								url: n
							} = e.getData();
						return a.a.createElement(Mo, {
							href: n
						}, t.children)
					})
				},
				Fo = () => Lo;
			var Do = n("./src/lib/linkMatchers/index.ts");
			const No = (t, e) => {
					if (e.getType() === k.f) return [];
					return (t.match(e.getText()) || []).filter(t => ((t, {
						index: e,
						lastIndex: n
					}) => {
						for (let o = e; o < n; o++) {
							if (t.getInlineStyleAt(o).contains(k.k.MONOSPACE)) return !1
						}
						return !0
					})(e, t))
				},
				Po = (t, e, n, s, r, i) => {
					const c = t.getBlockForKey(e),
						a = o.SelectionState.createEmpty(e),
						l = [],
						d = new Set;
					let u = t;
					const p = n === K.a.USER_MENTION ? K.a.USER_LINK : n,
						h = (t, e, o) => {
							let s = null;
							for (let r = t; r < e; r++) {
								const t = c.getEntityAt(r),
									e = t && u.getEntity(t);
								if (e) {
									if (e.getType() !== n) return;
									s || d.has(t) || (s = t)
								}
							}
							if (s) {
								u.getEntity(s).getData().url !== o && (u = u.mergeEntityData(s, {
									url: o
								}))
							}
							return s || (t => (u = u.createEntity(p, "MUTABLE", {
								url: t
							})).getLastCreatedEntityKey())(o)
						},
						m = (t, e, n) => {
							const s = a.merge({
								anchorOffset: t,
								focusOffset: e
							});
							u = o.Modifier.applyEntity(u, s, n)
						},
						g = (t, e) => m(t, e, null),
						b = u.getBlockForKey(e);
					No(s, b).forEach(({
						index: t,
						lastIndex: s,
						url: c
					}, p) => {
						const g = h(t, s, c);
						g && (n === K.a.USER_MENTION ? (((t, n, s) => {
							const c = u && u.getBlockForKey(e),
								l = c && c.getText().substr(t, n);
							if (l && l.replace(f.d.mention, "") && l.startsWith(f.d.mention) && f.c.test(l.replace(f.d.mention, ""))) {
								const e = a.merge({
										anchorOffset: t,
										focusOffset: t + f.d.mention.length
									}),
									c = a.merge({
										anchorOffset: t,
										focusOffset: n + f.d.mention.length
									}),
									l = a.merge({
										anchorOffset: n + f.d.mention.length,
										focusOffset: n + f.d.mention.length
									});
								u = Object(z.b)(u, e, f.d.profile), u = o.Modifier.applyEntity(u, c, s), r && i && i(o.EditorState.forceSelection(r, l))
							}
						})(t + p, s + p, g), l.push([t + p, s + p + 1])) : (m(t, s, g), l.push([t, s])), d.add(g))
					});
					let y = 0;
					return b.findEntityRanges(t => {
						const e = t.getEntity();
						return !!e && u.getEntity(e).getType() === n
					}, (t, e) => {
						if (y >= l.length) return void g(t, e);
						const [n, o] = l[y];
						e <= n ? g(t, e) : (t < n && g(t, n - 1), e > o && g(o, e), y++)
					}), u
				},
				Uo = (t, e) => {
					const n = t.getCurrentContent(),
						s = e.getCurrentContent();
					if (n === s) return t;
					const r = n.getBlockMap(),
						i = s.getBlockMap();
					let c = n;
					return r.forEach((e, n) => {
						if (n) {
							if (e === i.get(n)) return;
							c = Po(c, n, K.a.SUBREDDIT_LINK, Do.g), c = Po(c, n, K.a.USER_LINK, Do.j), c = Po(c, n, K.a.USER_MENTION, Do.e, t, e => t = e)
						}
					}), t.getCurrentContent() === c ? t : (c = c.merge({
						selectionAfter: t.getCurrentContent().getSelectionAfter(),
						selectionBefore: t.getCurrentContent().getSelectionBefore()
					}), o.EditorState.set(t, {
						currentContent: c
					}))
				};
			var Ho = t => {
				return !!t.getCurrentContent().getBlockMap().filter(t => !!t && t.getType() === k.a).size
			};
			const zo = " ".repeat(4),
				Vo = new RegExp("^ {1,4}|\\t"),
				Wo = new Set([k.b.CODE_BLOCK]),
				qo = (t, e) => {
					const n = e.getCurrentContent(),
						s = e.getSelection(),
						r = t.shiftKey;
					let i = n,
						c = s.getAnchorOffset(),
						a = s.getFocusOffset();
					if (Object(Y.a)(n, s, (t, e) => {
							const n = t.getType();
							if ("paragraph" === n || !Wo.has(n)) return !1;
							let l = null;
							const d = t.getText(),
								u = o.SelectionState.createEmpty(e);
							if (r) {
								const t = d.match(Vo);
								if (t) {
									const e = t[0].length;
									i = z.b(i, u.merge({
										focusOffset: e
									}), ""), l = -e
								}
							} else i = z.a(i, s.isCollapsed() ? s : u, zo), l = 4;
							null !== l && (e === s.getAnchorKey() && (c += l), e === s.getFocusKey() && (a += l))
						}), i !== n) return i = i.merge({
						selectionAfter: s.merge({
							anchorOffset: c,
							focusOffset: a
						})
					}), t.preventDefault(), o.EditorState.push(e, i, r ? "remove-range" : "insert-characters")
				},
				Go = (t, e) => (t => {
					const e = t.getSelection(),
						n = t.getCurrentContent();
					if (!e.isCollapsed()) return X(t);
					if (0 === e.getStartOffset()) {
						const o = n.getBlockForKey(e.getEndKey());
						if (Object(k.v)(o.getType())) return t; {
							const e = n.getBlockBefore(o.getKey());
							if (e && Object(k.v)(e.getType())) return t
						}
					}
				})(t) || ((t, e) => {
					const n = t.getSelection(),
						s = t.getCurrentContent();
					if (n.isCollapsed() && 0 === n.getStartOffset()) {
						const r = s.getBlockForKey(n.getEndKey());
						if (Object(k.o)(r.getType())) return Object(I.d)(t, r.getKey());
						if (Object(k.u)(r.getType())) {
							const e = s.getBlockBefore(r.getKey());
							return o.EditorState.forceSelection(t, Object(A.b)(e))
						}
						if (!Object(I.q)(e) && Object(A.g)(r)) {
							const e = s.getBlockBefore(r.getKey());
							if (e && Object(k.o)(e.getType())) return t = o.EditorState.push(t, Object(A.i)(s, r.getKey()), G.f), o.EditorState.forceSelection(t, Object(A.b)(e))
						}
					}
				})(t, e),
				Yo = (t, e) => (t => {
					const e = t.getSelection(),
						n = t.getCurrentContent();
					if (!e.isCollapsed()) return X(t); {
						const o = n.getBlockForKey(e.getEndKey());
						if (e.getEndOffset() === o.getLength()) {
							if (Object(k.v)(o.getType())) return t; {
								const e = n.getBlockAfter(o.getKey());
								if (e && Object(k.v)(e.getType())) return t
							}
						}
					}
				})(t) || ((t, e) => {
					const n = t.getSelection(),
						s = t.getCurrentContent();
					if (!n.isCollapsed()) return;
					const r = s.getBlockForKey(n.getEndKey());
					if (n.getEndOffset() === r.getLength()) {
						if (Object(k.o)(r.getType())) return Object(I.d)(t, r.getKey()); {
							const i = s.getBlockAfter(n.getEndKey());
							if (i && Object(k.o)(i.getType())) {
								if (Object(I.q)(e)) return Object(I.d)(t, i.getKey());
								if (Object(A.g)(r)) return t = o.EditorState.push(t, Object(A.i)(s, r.getKey()), G.f), o.EditorState.forceSelection(t, Object(A.b)(i))
							}
						}
					}
				})(t, e),
				Qo = t => {
					const e = t.getSelection();
					if (!e.isCollapsed()) return !1;
					const n = o.RichUtils.getCurrentBlockType(t);
					if (!k.c.includes(n)) return !1;
					if (e.getFocusOffset() > 0) {
						if ("\n" === t.getCurrentContent().getBlockForKey(e.getFocusKey()).getText()[e.getFocusOffset() - 1]) return !1
					}
					return !0
				};
			var Zo = n("./src/lib/memoizeByReference/index.ts");
			const Jo = Object(Zo.a)(t => {
					const e = t.getSelection();
					if (!e.isCollapsed()) return;
					const n = e.getStartOffset(),
						o = t.getCurrentContent(),
						s = o.getBlockForKey(e.getFocusKey());
					if (s.getType() !== k.n) return;
					const r = s.getText();
					if (r.startsWith("1.") && 2 === n) return k.i.ORDERED;
					if (r.startsWith("*") && 1 === n) {
						const t = o.getBlockBefore(s.getKey());
						if (t && t.getType() === k.n && t.getText().startsWith("* ")) return;
						return k.i.UNORDERED
					}
				}),
				Xo = t => {
					const e = Jo(t);
					if (!e) return t;
					const n = Object(ho.a)(t);
					let s = o.Modifier.replaceText(n.getCurrentContent(), n.getSelection().merge({
						anchorOffset: 0
					}), "");
					return s = o.Modifier.setBlockType(s, s.getSelectionAfter(), e), o.EditorState.push(n, s, G.c)
				};
			var $o = n("./src/reddit/components/RichTextEditor/helpers/styles.ts");
			const ts = Object(jo.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GifTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/media/GifTooltip/index.tsx")).then(t => t.default)
			});

			function es(t) {
				return a.a.createElement(ts, t)
			}
			var ns = n("./src/reddit/components/RichTextEditor/spoiler/helpers.ts"),
				os = n("./src/reddit/components/RichTextEditor/spoiler/decorator.m.less"),
				ss = n.n(os);
			const rs = t => a.a.createElement("span", {
					className: ss.a.spoiler
				}, a.a.createElement("span", null), t.children, a.a.createElement("span", null)),
				is = () => ({
					strategy: ns.a,
					component: rs
				});
			var cs = n("./src/reddit/components/FocusableContent/index.tsx"),
				as = n("./src/reddit/components/RichTextEditor/Blockquote/index.m.less"),
				ls = n.n(as);
			const ds = g.a.div("BlockQuoteWrapper", ls.a),
				us = Object(M.Map)({
					[k.e]: {
						element: "blockquote",
						wrapper: a.a.createElement(ds, null)
					}
				});
			var ps = n("./src/reddit/components/RichTextEditor/CodeBlock/index.m.less"),
				hs = n.n(ps);
			const ms = g.a.div("CodeBlockWrapper", hs.a),
				gs = Object(M.Map)({
					[k.f]: {
						element: "code",
						wrapper: a.a.createElement(ms, null)
					}
				});
			var fs = n("./node_modules/bowser/src/bowser.js"),
				bs = n.n(fs),
				ys = n("./node_modules/lodash/includes.js"),
				Es = n.n(ys),
				xs = n("./src/reddit/components/RichTextEditor/DragController/helpers.ts"),
				Ss = n("./src/reddit/components/RichTextEditor/DragController/index.m.less"),
				Cs = n.n(Ss);
			const Os = g.a.div("DropLine", Cs.a),
				ks = g.a.wrapped(In.b, "Tooltip", Cs.a);
			class Ts extends c.Component {
				constructor(t) {
					super(t), this.dragCount = 0, this.setContainerRef = t => this.containerRef = t, this.preventDocumentDrop = t => {
						!! function t(e) {
							return e.draggable ? e : e.parentElement ? t(e.parentElement) : null
						}(t.target) || (t.preventDefault(), t.stopPropagation())
					}, this.onDragOver = t => {
						const e = Es()(t.dataTransfer.types, Pt);
						if (!e) {
							if (!Object(xs.c)(t.dataTransfer) || !this.props.allowMediaUploads) return
						}
						if (!e && !Object(xs.c)(t.dataTransfer)) return;
						t.preventDefault();
						try {
							t.dataTransfer.dropEffect = e ? "move" : "copy"
						} catch (r) {}
						const {
							editorState: n
						} = this.props;
						let o = null;
						const s = Object(xs.b)(n, t);
						if (s) {
							const t = this.containerRef.getBoundingClientRect().left;
							o = {
								top: s.clientY,
								left: t
							}
						}
						Bn()(o, this.state.point) || this.setState({
							point: o
						})
					}, this.onDragEnter = t => {
						this.dragCount++
					}, this.onDragLeave = t => {
						this.dragCount--, 0 === this.dragCount && this.state.point && this.setState({
							point: null
						})
					}, this.onDrop = t => {
						const e = () => {
								this.dragCount = 0, this.setState({
									point: null
								})
							},
							n = bs.a.msie ? null : t.dataTransfer.getData(Pt),
							o = Object(xs.a)(t.dataTransfer);
						if (!(n || o.length && this.props.allowMediaUploads)) return void e();
						const {
							editorState: s
						} = this.props, r = Object(xs.b)(s, t);
						if (!r) return void e();
						t.preventDefault(), t.stopPropagation();
						const i = r.isBefore ? A.a.before : A.a.after;
						n ? this.props.onBlockMove(n, r.blockKey, i) : setTimeout(() => {
							this.props.onFilesDrop(o, r.blockKey, i)
						}), e()
					}, this.state = {
						point: null
					}
				}
				componentDidMount() {
					document.addEventListener("drop", this.preventDocumentDrop), document.addEventListener("dragover", this.preventDocumentDrop)
				}
				componentWillUnmount() {
					document.removeEventListener("drop", this.preventDocumentDrop), document.removeEventListener("dragover", this.preventDocumentDrop)
				}
				render() {
					const {
						children: t
					} = this.props, {
						point: e
					} = this.state, n = a.a.Children.only(t);
					return a.a.createElement("div", {
						className: Object(h.a)(Cs.a.container, {
							[Cs.a.hideCaret]: !!e
						}),
						onDragEnter: this.onDragEnter,
						onDragLeave: this.onDragLeave,
						onDragOver: this.onDragOver,
						onDrop: this.onDrop,
						ref: this.setContainerRef
					}, a.a.createElement("div", null, n), a.a.createElement(ks, {
						targetPosition: e
					}, a.a.createElement(Os, null)))
				}
			}
			var vs = n("./node_modules/draft-js/lib/DraftPasteProcessor.js"),
				js = n.n(vs),
				ws = n("./node_modules/draft-js/lib/getEntityKeyForSelection.js"),
				Rs = n.n(ws),
				_s = n("./node_modules/draft-js/lib/splitTextIntoTextBlocks.js"),
				Bs = n.n(_s),
				Is = n("./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts"),
				As = n("./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts");

			function Ks(t, e, n) {
				const s = Object(o.convertFromHTML)(e, void 0, n);
				if (s) {
					const {
						contentBlocks: e,
						entityMap: n
					} = s;
					if (e) {
						const s = o.BlockMapBuilder.createFromArray(function(t) {
							return t.map(t => Object(k.r)(t.getType()) ? j(t) : t)
						}(e));
						return [t.set("entityMap", n), s]
					}
				}
				return [t, null]
			}

			function Ms(t, e, n) {
				const s = Bs()(e),
					r = n && 1 === s.length ? n : o.CharacterMetadata.create(),
					i = js.a.processText(s, r).map(t => t.merge({
						type: k.n
					}));
				return o.BlockMapBuilder.createFromArray(i)
			}
			const Ls = t => {
					if (!t) return null;
					const e = (new DOMParser).parseFromString(t, "text/html").querySelector("[data-reddit-rtjson]");
					return e && e.getAttribute("data-reddit-rtjson")
				},
				Fs = t => {
					if (gt()) return {
						text: window.clipboardData.getData("text"),
						html: null
					}; {
						const e = t.clipboardData.getData("text/html");
						return {
							text: t.clipboardData.getData("text/plain"),
							html: e
						}
					}
				};

			function Ds(t, e, n, s) {
				const {
					text: r,
					html: i
				} = Fs(n), c = function(t, e, n, o) {
					const s = {
							text: e,
							html: n,
							rtjson: o,
							fragment: null
						},
						r = t.getClipboard();
					return r && n && function(t, e, n, o) {
						return -1 !== e.indexOf(o) || 1 === t.size && t.first().getText() === n
					}(r, n, e, t.getEditorKey()) && (s.fragment = r), s
				}(e, r, i, i && Ls(i));
				e.getClipboard() && !c.fragment && e.setClipboard(null);
				const a = t.getCurrentContent(),
					l = t.getSelection(),
					d = t.getCurrentInlineStyle(),
					u = e.props.blockRenderMap;
				let p = null,
					h = a;
				if (!(p = function(t, e, n) {
						const o = t.getBlockForKey(e.getStartKey()),
							s = t.getBlockForKey(e.getEndKey());
						if (o.getType() === k.f || s.getType() === k.f) return Ms(0, n).map(t => t.merge({
							type: k.f,
							depth: 0
						}))
					}(h, l, c.text)) && c.fragment && (p = c.fragment, [h, p] = Object(Is.b)(h, p), p = St(p, s)), !p && c.rtjson && (p = function(t) {
						const e = JSON.parse(t);
						return Object(o.convertFromRaw)(e).getBlockMap()
					}(c.rtjson)), !p && c.html && ([h, p] = Ks(h, c.html, u)), !p && c.text) {
					const t = function(t, e, n) {
						return o.CharacterMetadata.create({
							style: n,
							entity: Rs()(t, e)
						})
					}(h, l, d);
					p = Ms(0, c.text, t), [h, p] = function(t, e) {
						let n = t,
							o = e;
						return e.forEach(t => {
							const e = t.getText(),
								s = Do.f.match(e);
							if (!s) return;
							let r = t;
							s.forEach(({
								index: t,
								lastIndex: e,
								url: s
							}) => {
								const i = (n = n.createEntity(K.a.LINK, "MUTABLE", {
									url: s
								})).getLastCreatedEntityKey();
								r = Object(As.a)(r, t, e, i), o = o.set(r.getKey(), r)
							})
						}), [n, o]
					}(h, p)
				}
				if (p) return h = function(t, e, n) {
					if (n.isEmpty()) return t;
					let o = rt(t, e, n) || Ct(t, e, n);
					return o || (o = z.c(t, e, n))
				}(h, l, p), o.EditorState.push(t, h, G.e)
			}
			var Ns = n("./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts"),
				Ps = n("./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts"),
				Us = n("./src/reddit/components/RichTextEditor/LinksController/LinkDetailsPopup/index.m.less"),
				Hs = n.n(Us);
			const zs = g.a.div("LinkDetailsBox", Hs.a),
				Vs = g.a.a("Link", Hs.a),
				Ws = g.a.a("LinkButton", Hs.a);
			var qs = t => a.a.createElement("div", null, a.a.createElement(zs, {
					onMouseDown: t => t.preventDefault()
				}, a.a.createElement(Vs, {
					href: t.url,
					target: "_blank"
				}, t.url), a.a.createElement("span", null, " – "), a.a.createElement(Ws, {
					onClick: () => t.onStartEdit(),
					role: "button"
				}, s.fbt._("Change", null, {
					hk: "3aOmcP"
				})), a.a.createElement("span", null, " | "), a.a.createElement(Ws, {
					onClick: () => t.onRemove(),
					role: "button"
				}, s.fbt._("Remove", null, {
					hk: "3nPt5D"
				})))),
				Gs = n("./src/reddit/controls/Input/index.tsx"),
				Ys = n("./src/reddit/components/RichTextEditor/LinksController/LinkEditorPopup/index.m.less"),
				Qs = n.n(Ys);
			const Zs = g.a.form("EditForm", Qs.a),
				Js = g.a.wrapped(t => a.a.createElement("div", t, t.children), "LinkEditorBox", Qs.a),
				Xs = g.a.wrapped(Gs.a, "Input", Qs.a),
				$s = g.a.label("Label", Qs.a),
				tr = g.a.div("HintAndButtonRow", Qs.a),
				er = g.a.span("InvalidUrlHint", Qs.a),
				nr = g.a.wrapped(Xt.i, "SubmitButton", Qs.a),
				or = t => {
					t && (t.focus(), t.select())
				},
				sr = / /g,
				rr = t => t.replace(sr, "%20");
			class ir extends c.Component {
				constructor(t) {
					super(t), this.focused = !1, this.focusLostTimer = 0, this.textInputElementRef = null, this.urlInputElementRef = null, this.onEdited = () => {
						const t = this.state.url.trim(),
							e = rr(t),
							n = Object(Do.i)(e);
						if (!n) return this.setState({
							isInvalidUrl: !0
						}), void(this.urlInputElementRef && this.urlInputElementRef.focus());
						const o = n.url;
						this.props.onEdited(o, this.state.displayText.trim() || t)
					}, this.onFocus = () => {
						this.focused = !0
					}, this.onBlur = () => {
						this.focused = !1, this.focusLostTimer = window.setTimeout(() => {
							this.focused || this.props.onFocusLost()
						}, 0)
					}, this.onClick = t => {
						t.stopPropagation()
					}, this.handleUrlChange = t => {
						const e = t.target.value;
						let {
							isInvalidUrl: n
						} = this.state;
						n && Object(Do.h)(Do.f, e) && (n = !1), this.setState({
							url: e,
							isInvalidUrl: n
						})
					}, this.handleDisplayTextChange = t => {
						this.setState({
							displayText: t.target.value
						})
					}, this.handleSubmit = t => {
						this.onEdited(), t.preventDefault()
					}, this.state = {
						url: t.url,
						displayText: t.displayText,
						isInvalidUrl: !1
					}
				}
				componentDidMount() {
					Object(Do.h)(Do.f, this.state.displayText) ? or(this.textInputElementRef) : or(this.urlInputElementRef)
				}
				componentWillUnmount() {
					this.focusLostTimer && clearTimeout(this.focusLostTimer)
				}
				render() {
					const {
						isInsertMode: t
					} = this.props;
					return a.a.createElement(Js, {
						tabIndex: 0,
						onClick: this.onClick,
						onBlur: this.onBlur,
						onFocus: this.onFocus
					}, a.a.createElement(Zs, {
						onSubmit: this.handleSubmit
					}, a.a.createElement($s, null, s.fbt._("Text", null, {
						hk: "1oock0"
					}), ":", a.a.createElement(Xs, {
						innerRef: t => this.textInputElementRef = t,
						type: "text",
						placeholder: s.fbt._("Title of link (optional)", null, {
							hk: "17GvI"
						}),
						value: this.state.displayText,
						onChange: this.handleDisplayTextChange
					})), a.a.createElement($s, null, s.fbt._("Link", null, {
						hk: "1Cfzw7"
					}), a.a.createElement(Xs, {
						innerRef: t => this.urlInputElementRef = t,
						type: "text",
						placeholder: s.fbt._("Paste or type a link", null, {
							hk: "3QWoAf"
						}),
						value: this.state.url,
						onChange: this.handleUrlChange
					})), a.a.createElement(tr, null, a.a.createElement(nr, {
						type: "submit",
						disabled: this.state.isInvalidUrl
					}, t ? s.fbt._("Insert", null, {
						hk: "3H7yaS"
					}) : s.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), this.state.isInvalidUrl ? a.a.createElement(er, null, s.fbt._("Link doesn't look right", null, {
						hk: "1BHfKz"
					})) : null)))
				}
			}

			function cr(t, e, n) {
				const o = t.getCurrentContent(),
					s = {
						text: "",
						url: ""
					};
				if (e.isCollapsed()) return s;
				if (n) s.text = n.entityText, s.url = o.getEntity(n.entityKey).getData().url;
				else {
					s.text = function(t, e) {
						if (t.getStartKey() !== t.getEndKey()) throw new Error("Selection must be in a single block");
						return t.isCollapsed() ? "" : e.getBlockForKey(t.getStartKey()).getText().slice(t.getStartOffset(), t.getEndOffset())
					}(e, t.getCurrentContent());
					const n = Object(Do.h)(Do.f, s.text);
					n && (s.url = n.url)
				}
				return s
			}

			function ar(t, e) {
				return o.EditorState.set(t, {
					currentContent: o.Modifier.removeInlineStyle(t.getCurrentContent(), e, k.k.HIGHLIGHT)
				})
			}
			class lr extends c.Component {
				constructor(t) {
					super(t), this.api = null, this.updateTooltipPosition = null, this.lastEditorSelectionClientRect = null, this.editLinkInSelection = t => {
						const {
							editorState: e
						} = this.props;
						let n = t,
							s = e;
						const r = e.getCurrentContent();
						if (!Object(Io.e)(r, t)) return !1;
						const i = Object(Ns.a)(r, t);
						if (i) {
							if (r.getEntity(i.entityKey).getType() !== K.a.LINK) return !1;
							n = i.entitySelection
						} else this.isEditorFocused() && (this.lastEditorSelectionClientRect = Object(Ps.a)());
						return this.state.linkSelection && (s = ar(e, this.state.linkSelection)), s = function(t, e) {
							return o.EditorState.set(t, {
								currentContent: o.Modifier.applyInlineStyle(t.getCurrentContent(), e, k.k.HIGHLIGHT)
							})
						}(e, n), this.props.onChange(s, () => {
							this.setState({
								linkSelection: n,
								linkEntity: i
							})
						}), !0
					}, this.hidePopup = () => {
						this.interruptLinkEditing(), this.hideDetailsPopup()
					}, this.showDetailsPopup = () => {
						this.state.isDetailsPopupActive || this.setState({
							isDetailsPopupActive: !0
						})
					}, this.hideDetailsPopup = () => {
						this.state.isDetailsPopupActive && this.setState({
							isDetailsPopupActive: !1
						})
					}, this.updatePosition = () => {
						if (!this.updateTooltipPosition) return;
						const {
							editorState: t
						} = this.props, e = t.getCurrentContent();
						let n;
						if (this.state.linkSelection) {
							const t = Object(Ns.a)(e, this.state.linkSelection);
							if (t) {
								const e = this.props.entityElementRegistry.get(t.entityKey);
								n = e && e.getBoundingClientRect()
							} else this.lastEditorSelectionClientRect && (n = this.lastEditorSelectionClientRect)
						} else {
							const e = Object(Io.c)(t);
							if (e) {
								const t = this.props.entityElementRegistry.get(e.entityKey);
								n = t && t.getBoundingClientRect()
							}
						}
						n && (this.updateTooltipPosition({
							left: n.left,
							top: n.bottom
						}), this.lastEditorSelectionClientRect = null)
					}, this.handleLink = (t, e) => {
						const {
							linkSelection: n
						} = this.state, {
							editorState: s
						} = this.props;
						let r = s;
						n && (n.isCollapsed() || (r = ar(s, n)), void 0 !== t && (r = Object(Io.h)(r, n, t, e)), this.setState({
							linkSelection: null,
							linkEntity: null
						}), r !== s && (r = o.EditorState.forceSelection(r, r.getSelection()), this.props.onChange(r)))
					}, this.onLinkEdited = (t, e) => {
						this.handleLink(t, e)
					}, this.interruptLinkEditing = () => this.handleLink(), this.isEditorFocused = () => this.props.editorState.getSelection().getHasFocus(), this.onStartEditFocusedLink = () => {
						const {
							editorState: t
						} = this.props, e = Object(Io.c)(t);
						e && this.editLinkInSelection(e.entitySelection)
					}, this.onRemoveFocusedLink = () => {
						const {
							editorState: t
						} = this.props, e = Object(Io.c)(t);
						e && this.props.onChange(Object(Io.h)(t, e.entitySelection, ""))
					}, this.renderEditorPopup = () => {
						const {
							linkSelection: t,
							linkEntity: e
						} = this.state, {
							editorState: n
						} = this.props;
						if (!t) return null;
						const {
							text: o,
							url: s
						} = cr(n, t, e);
						return a.a.createElement(ir, {
							url: s,
							displayText: o,
							isInsertMode: !e,
							onEdited: this.onLinkEdited,
							onFocusLost: this.interruptLinkEditing
						})
					}, this.renderDetailsPopup = () => {
						const t = Object(Io.c)(this.props.editorState);
						return t && this.isEditorFocused() && this.state.isDetailsPopupActive ? a.a.createElement(qs, {
							url: t.url,
							onStartEdit: this.onStartEditFocusedLink,
							onRemove: this.onRemoveFocusedLink
						}) : null
					}, this.state = {
						isDetailsPopupActive: !1,
						linkSelection: null,
						linkEntity: null
					}, this.api = {
						editLinkInSelection: this.editLinkInSelection,
						hidePopup: this.hidePopup
					}
				}
				componentDidMount() {
					const {
						onSetApi: t
					} = this.props;
					this.api && t && t(this.api)
				}
				componentWillUnmount() {
					this.props.onSetApi && this.props.onSetApi(null)
				}
				componentDidUpdate(t, e) {
					e.linkSelection === this.state.linkSelection && t.editorState === this.props.editorState || (this.showDetailsPopup(), this.updatePosition())
				}
				render() {
					return a.a.createElement(In.b, {
						onSetPositionUpdater: t => this.updateTooltipPosition = t,
						trianglePlacement: In.a.Above
					}, this.renderEditorPopup() || this.renderDetailsPopup())
				}
			}
			var dr = n("./src/reddit/components/RichTextEditor/OrderedList/index.m.less"),
				ur = n.n(dr);
			const pr = g.a.ol("OrderedListWrapper", ur.a),
				hr = Object(M.Map)({
					[k.i.ORDERED]: {
						element: "li",
						aliasedElements: ["li"],
						wrapper: a.a.createElement(pr, null)
					}
				});
			var mr = n("./src/reddit/components/RichTextEditor/Paragraph/index.m.less"),
				gr = n.n(mr);
			const fr = g.a.div("ParagraphWrapper", gr.a),
				br = Object(M.Map)({
					[k.n]: {
						element: "div",
						aliasedElements: ["p"],
						wrapper: a.a.createElement(fr, null)
					}
				});
			var yr = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx");
			var Er = n("./src/reddit/components/RichTextEditor/TextRendering/index.m.less"),
				xr = n.n(Er);
			const Sr = Object(Zo.a)(() => ({
					[k.k.SUPERSCRIPT]: {
						position: "relative",
						top: "-0.4em",
						fontSize: "0.7em",
						lineHeight: "0.7em"
					},
					[k.k.HIGHLIGHT]: {
						backgroundColor: "#b8e0f9"
					},
					[k.k.UNDERLINE]: {
						textDecoration: "none"
					},
					[k.k.MONOSPACE]: {
						backgroundColor: "var(--newRedditTheme-field)",
						caretColor: "#000",
						color: "var(--newRedditTheme-monospaceColor)",
						fontFamily: "Noto Mono, Menlo, Monaco, Consolas, monospace",
						padding: "0.1em 0.2em",
						fontSize: "0.8em",
						borderRadius: "3px"
					}
				})),
				Cr = g.a.div("H1", xr.a),
				Or = g.a.div("H2", xr.a),
				kr = g.a.div("H3", xr.a),
				Tr = g.a.div("H4", xr.a),
				vr = g.a.div("H5", xr.a),
				jr = g.a.div("H6", xr.a),
				wr = t => ({
					component: e => a.a.createElement(t, null, a.a.createElement(o.EditorBlock, e)),
					editable: !0
				}),
				Rr = {
					[k.g.H1]: wr(Cr),
					[k.g.H2]: wr(Or),
					[k.g.H3]: wr(kr),
					[k.g.H4]: wr(Tr),
					[k.g.H5]: wr(vr),
					[k.g.H6]: wr(jr)
				},
				_r = ["italic normal 1em 'Noto Sans'", "italic bold 1em 'Noto Sans'", "normal bold 1em 'Noto Sans'"],
				Br = () => {
					const t = document.fonts;
					t && t.load && _r.forEach(e => t.load(e))
				};
			var Ir = n("./src/reddit/components/RichTextEditor/UnorderedList/index.m.less"),
				Ar = n.n(Ir);
			const Kr = g.a.ul("UnorderedListWrapper", Ar.a),
				Mr = Object(M.Map)({
					[k.i.UNORDERED]: {
						element: "li",
						aliasedElements: ["li"],
						wrapper: a.a.createElement(Kr, null)
					}
				});
			var Lr = n("./src/reddit/contexts/InsideOverlay.tsx"),
				Fr = n("./node_modules/lodash/debounce.js"),
				Dr = n.n(Fr),
				Nr = n("./src/reddit/actions/subredditAutocomplete/index.ts"),
				Pr = n("./src/reddit/controls/SubredditDropdown/index.m.less"),
				Ur = n.n(Pr);

			function Hr() {
				return (Hr = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const zr = ({
				isFocused: t,
				...e
			}) => a.a.createElement("div", Hr({
				className: Object(h.a)(Ur.a.entry, {
					[Ur.a.mIsFocused]: t
				})
			}, e));
			class Vr extends c.Component {
				constructor(t) {
					super(t), this.mouseDown = !1, this.onMouseUp = () => {
						this.mouseDown && (this.props.onEntrySelect(this.props.entry), this.mouseDown = !1)
					}, this.onMouseDown = t => {
						this.mouseDown = !0, t.preventDefault()
					}, this.onMouseOver = () => {
						this.props.onEntryFocus(this.props.entry)
					}, this.mouseDown = !1
				}
				componentDidUpdate() {
					this.mouseDown = !1
				}
				render() {
					return a.a.createElement(zr, {
						isFocused: this.props.isFocused,
						onMouseDown: this.onMouseDown,
						onMouseUp: this.onMouseUp,
						onMouseOver: this.onMouseOver
					}, this.props.children)
				}
			}
			var Wr = n("./src/reddit/helpers/name/index.ts"),
				qr = n("./src/reddit/selectors/subredditAutocomplete.ts");
			const Gr = Object(d.c)({
				subredditSuggestions: (t, e) => {
					const n = Object(qr.d)(t, e);
					return n ? n.subreddits : []
				}
			});
			class Yr extends c.Component {
				constructor(t) {
					super(t), this.api = null, this.onEntrySelect = t => {
						this.props.onSelect(this.props.subredditSuggestions[t].name)
					}, this.onEntryFocus = t => {
						this.setState({
							selectedSuggestionIndex: t
						})
					}, this.moveUp = () => {
						if (this.props.subredditSuggestions.length > 1) {
							let t = this.state.selectedSuggestionIndex - 1;
							return t = t < 0 ? this.props.subredditSuggestions.length - 1 : t, this.setState({
								selectedSuggestionIndex: t
							}), !0
						}
						return !1
					}, this.moveDown = () => {
						if (this.props.subredditSuggestions.length > 1) {
							const t = (this.state.selectedSuggestionIndex + 1) % this.props.subredditSuggestions.length;
							return this.setState({
								selectedSuggestionIndex: t
							}), !0
						}
						return !1
					}, this.selectCurrent = () => {
						if (this.props.subredditSuggestions.length) {
							const t = this.props.subredditSuggestions[this.state.selectedSuggestionIndex];
							return t && this.props.onSelect(t.name), !0
						}
						return !1
					}, this.state = {
						selectedSuggestionIndex: 0
					}, this.requestSubredditAutocomplete = Dr()(this.requestSubredditAutocomplete.bind(this), 200, {
						maxWait: 200
					}), this.api = {
						moveUp: this.moveUp,
						moveDown: this.moveDown,
						selectCurrent: this.selectCurrent
					}
				}
				componentDidMount() {
					this.requestSubredditAutocomplete(this.props.substring), this.props.onDropdownApi(this.api)
				}
				componentWillUnmount() {
					this.props.onDropdownApi(null)
				}
				componentWillReceiveProps(t) {
					t.substring !== this.props.substring && (this.requestSubredditAutocomplete(t.substring), this.setState({
						selectedSuggestionIndex: 0
					}))
				}
				requestSubredditAutocomplete(t) {
					this.props.onGetSubredditAutocomplete(t)
				}
				render() {
					return this.props.subredditSuggestions.length ? a.a.createElement("div", {
						className: Object(h.a)(Ur.a.list, this.props.className)
					}, this.props.subredditSuggestions.map((t, e) => a.a.createElement(Vr, {
						entry: e,
						isFocused: e === this.state.selectedSuggestionIndex,
						key: t.name,
						onEntrySelect: this.onEntrySelect,
						onEntryFocus: this.onEntryFocus
					}, Object(Wr.c)(t.name)))) : null
				}
			}
			var Qr = Object(l.b)(Gr, (t, e) => ({
					onGetSubredditAutocomplete: e => {
						t(Nr.a(e))
					}
				}))(Yr),
				Zr = n("./src/reddit/selectors/comments.ts");
			const Jr = Object(d.c)({
				commentAuthors: Zr.h
			});
			class Xr extends c.Component {
				constructor(t) {
					super(t), this.api = null, this.onEntrySelect = t => {
						this.props.onSelect(this.state.userSuggestions[t])
					}, this.onEntryFocus = t => {
						this.setState({
							selectedSuggestionIndex: t
						})
					}, this.moveUp = () => {
						if (this.state.userSuggestions.length > 1) {
							let t = this.state.selectedSuggestionIndex - 1;
							return t = t < 0 ? this.state.userSuggestions.length - 1 : t, this.setState({
								selectedSuggestionIndex: t
							}), !0
						}
						return !1
					}, this.moveDown = () => {
						if (this.state.userSuggestions.length > 1) {
							const t = (this.state.selectedSuggestionIndex + 1) % this.state.userSuggestions.length;
							return this.setState({
								selectedSuggestionIndex: t
							}), !0
						}
						return !1
					}, this.selectCurrent = () => {
						if (this.state.userSuggestions.length) {
							const t = this.state.userSuggestions[this.state.selectedSuggestionIndex];
							return t && this.props.onSelect(t), !0
						}
						return !1
					}, this.state = {
						userSuggestions: [],
						selectedSuggestionIndex: 0
					}, this.api = {
						moveUp: this.moveUp,
						moveDown: this.moveDown,
						selectCurrent: this.selectCurrent
					}
				}
				componentDidMount() {
					this.props.onDropdownApi(this.api), this.setState({
						userSuggestions: this.filterUsers(this.props.substring)
					})
				}
				componentWillUnmount() {
					this.props.onDropdownApi(null)
				}
				componentWillReceiveProps(t) {
					t.substring !== this.props.substring && this.setState({
						selectedSuggestionIndex: 0,
						userSuggestions: this.filterUsers(t.substring)
					})
				}
				filterUsers(t) {
					const {
						commentAuthors: e
					} = this.props;
					return e.filter(e => e.toLowerCase().startsWith(t.toLowerCase()))
				}
				render() {
					return this.state.userSuggestions.length ? a.a.createElement("div", {
						className: Object(h.a)(Ur.a.list, this.props.className)
					}, this.state.userSuggestions.map((t, e) => a.a.createElement(Vr, {
						key: e,
						entry: e,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect,
						isFocused: e === this.state.selectedSuggestionIndex
					}, Object(Wr.d)(t)))) : null
				}
			}
			var $r = Object(l.b)(Jr)(Xr),
				ti = n("./node_modules/lodash/dropRightWhile.js"),
				ei = n.n(ti),
				ni = n("./node_modules/lodash/flatMap.js"),
				oi = n.n(ni),
				si = n("./node_modules/lodash/reduceRight.js"),
				ri = n.n(si),
				ii = n("./node_modules/lodash/trimEnd.js"),
				ci = n.n(ii),
				ai = n("./node_modules/lodash/trimStart.js"),
				li = n.n(ai),
				di = n("./src/lib/forEachGroup/index.ts");

			function ui(t, e) {
				const n = [],
					o = t.withMutations(t => {
						for (; t.size && e(t.first());) n.push(t.first()), t.shift()
					});
				return {
					popped: n,
					stack: o
				}
			}
			var pi = n("./src/lib/unicodeUtils/index.ts"),
				hi = n("./src/reddit/helpers/richTextJson/index.ts"),
				mi = n("./src/reddit/models/RichTextJson/nodeMakers.ts");
			const gi = {
				BOLD: Dn.j.bold,
				ITALIC: Dn.j.italic,
				MONOSPACE: Dn.j.monospace,
				STRIKETHROUGH: Dn.j.strikethrough,
				SUBSCRIPT: Dn.j.subscript,
				SUPERSCRIPT: Dn.j.superscript,
				UNDERLINE: Dn.j.underline
			};
			var fi = (t, e) => bi(t.getBlockMap(), t, e);
			const bi = (t, e, n) => {
					const o = [];
					let s = t.toStack();
					for (; s.size;) {
						const t = s.first(),
							r = t.getType();
						switch (s = s.shift(), r) {
							case k.g.H1:
							case k.g.H2:
							case k.g.H3:
							case k.g.H4:
							case k.g.H5:
							case k.g.H6:
								o.push(Oi(t, e));
								break;
							case k.e: {
								const {
									popped: n,
									stack: r
								} = ui(s, t => t.getType() === k.e);
								s = r, o.push(ki([t, ...n], e));
								break
							}
							case k.f: {
								const {
									popped: e,
									stack: n
								} = ui(s, t => t.getType() === k.f);
								s = n, o.push(Ti([t, ...e]));
								break
							}
							case k.i.ORDERED:
							case k.i.UNORDERED: {
								const {
									popped: n,
									stack: i
								} = ui(s, t => t.getType() === r);
								s = i, o.push(vi([t, ...n], e));
								break
							}
							case k.l: {
								const {
									popped: n,
									stack: r
								} = ui(s, t => Object(k.v)(t.getType()));
								s = r, o.push(ji([t, ...n], e));
								break
							}
							case k.a: {
								let e = s.first();
								e && Object(k.u)(e.getType()) ? s = s.shift() : e = void 0, o.push(wi(t, e, n));
								break
							}
							case k.n:
							default:
								o.push(Si(t, e))
						}
					}
					return o
				},
				yi = t => t.reduce((t, e) => e === k.k.UNDERLINE || e === k.k.SUBSCRIPT ? t : t | (gi[e] || 0) | 0, 0),
				Ei = (t, e) => {
					const n = [],
						o = Object(pi.b)(t);
					return Object(di.a)(e, {
						keyFn: t => t.getStyle()
					}, (e, s, r, i) => {
						if (s.isEmpty()) return;
						const c = t.slice(r, i),
							a = r + (c.length - li()(c).length),
							l = i - (c.length - ci()(c).length),
							d = l - a,
							u = o[a],
							p = o[l] - u;
						d > 0 && n.push([yi(s), u, p])
					}), n.length ? n : null
				},
				xi = (t, e) => {
					const n = t.getText(),
						o = t.getCharacterList(),
						s = [],
						r = k.d.includes(t.getType()),
						i = k.c.includes(t.getType());
					let c = 0;
					return Object(di.a)(o, {
						keyFn: (t, o) => {
							const s = t.getEntity();
							return r && t.getStyle().contains(k.k.SPOILER) ? "spoiler" : Object(K.b)(s, e) ? `link-${t.getEntity()}` : "\n" === n[o] ? i ? "linebreak" : "skip" : s && e.getEntity(s).getType() === K.a.EMOTE ? `emote-${c++}` : "text"
						}
					}, (t, r, i, c) => {
						const a = n.slice(i, c),
							l = o.slice(i, c).toList();
						if ("text" === r) {
							const t = Ei(a, l);
							s.push(Object(mi.s)(a, t))
						} else if ("spoiler" === r) s.push(Object(mi.n)(a));
						else if (r.startsWith("link-")) {
							const n = e.getEntity(t.getEntity());
							s.push(((t, e, n) => {
								const o = t.getType(),
									s = [K.a.USER_LINK, K.a.USER_MENTION],
									{
										url: r
									} = t.getData(),
									i = e.startsWith("/");
								if (o === K.a.SUBREDDIT_LINK) {
									const t = e.replace(f.e, "");
									return Object(mi.o)(t, i)
								}
								if (s.includes(o)) {
									const t = e.replace(f.a, "");
									return Object(mi.t)(t, i)
								}
								const c = Ei(e, n);
								return Object(mi.i)(e, r, c)
							})(n, a, l))
						} else if ("linebreak" === r) s.push(Object(mi.h)());
						else if (r.startsWith("emote-")) {
							const n = e.getEntity(t.getEntity()).getData();
							s.push(Object(mi.e)(n.fullId, n.imageType))
						}
					}), s
				},
				Si = (t, e) => Object(mi.l)(xi(t, e)),
				Ci = t => "text" === t.e ? Object(mi.m)(t.t) : "link" === t.e ? Object(mi.i)(t.t, t.u, null) : t.e === Dn.x ? t.c.map(Ci) : t.e === Dn.n ? Object(mi.m)("") : t,
				Oi = (t, e) => Object(mi.f)(k.m[t.getType()], ((t, e) => ri()(oi()(xi(t, e), Ci), ([t, ...e], n) => {
					if (!t) return [n];
					const o = e.length ? e : [];
					return t && "raw" === n.e && "raw" === t.e ? [Object(mi.m)(n.t + t.t), ...o] : [n, t, ...o]
				}, []))(t, e)),
				ki = (t, e) => Object(mi.c)(ei()(t.map(t => ((t, e) => t.getText().trim().length ? Si(t, e) : mi.a)(t, e)), t => t === mi.a)),
				Ti = t => Object(mi.d)(t.map(t => Object(mi.m)(t.getText()))),
				vi = (t, e) => {
					if (!t.length) return Object(mi.k)([], !1);
					const n = t[0].getDepth();
					let o = null;
					const s = [];
					let r = [];
					const i = () => null !== o || r.length,
						c = () => {
							const t = [];
							null !== o && (t.push(o), o = null), r.length && (t.push(vi(r, e)), r = []), s.push(Object(mi.j)(t))
						};
					return t.forEach(t => {
						t.getDepth() > n ? r.push(t) : (i() && c(), o = Object(mi.l)(xi(t, e)))
					}), i() && c(), Object(mi.k)(s, t[0].getType() === k.i.ORDERED)
				},
				ji = (t, e) => {
					const n = [...t].sort(V.b),
						o = n[0],
						{
							colCount: s
						} = Object(V.g)(o),
						r = D()(n, s),
						i = r[0].map(t => {
							const {
								alignment: n
							} = Object(V.g)(t);
							return Object(mi.q)(xi(t, e), n)
						}),
						c = r.slice(1).map(t => t.map(t => Object(mi.p)(xi(t, e))));
					return Object(mi.r)(i, c)
				},
				wi = (t, e, n) => {
					const o = Object(I.h)(t);
					if (!o) throw new Error("Invalid atomic block!");
					const {
						uploadInfo: s,
						mediaAsset: r,
						makeGif: i
					} = o, c = e ? e.getText() : "";
					if (s && n) {
						const t = n[s.uploadKey],
							e = t && t.metadata.mimetype || "",
							{
								assetId: r,
								thumbnailAssetId: a
							} = Object(I.f)(o, n);
						return Object(Ft.j)(e) ? Object(mi.b)(r, c) : Object(Ft.k)(e) ? Object(mi.g)(r, c) : Object(mi.u)(r, c, a, i)
					} {
						const {
							assetId: t,
							type: e
						} = r;
						let n;
						switch (e) {
							case I.a.AnimatedImage:
								n = Object(mi.b)(t, c);
								break;
							case I.a.Image:
								n = Object(mi.g)(t, c);
								break;
							case I.a.Video:
								n = Object(mi.u)(t, c);
								break;
							default:
								throw new Error("Invalid media type")
						}
						return Object(hi.f)(t) ? Object(mi.l)([n]) : n
					}
				};
			var Ri, _i = n("./src/reddit/constants/componentSizes.ts"),
				Bi = n("./src/reddit/constants/elementIds.ts");
			! function(t) {
				t.Up = "up", t.Down = "down"
			}(Ri || (Ri = {}));
			var Ii = t => {
					const e = window.getSelection().focusNode;
					if (!e || !e.parentElement) return;
					const n = document.getElementById(Bi.d),
						o = n || document.documentElement;
					if (!o) return;
					const s = window.innerHeight,
						{
							bottom: r,
							top: i
						} = e.parentElement.getBoundingClientRect(),
						c = n ? 0 : _i.f + _i.p;
					t === Ri.Up && i < c ? o.scrollBy(0, i - c) : t === Ri.Down && r > s && o.scrollBy(0, r - s)
				},
				Ai = n("./src/reddit/models/Product/index.ts"),
				Ki = (t, e, n) => {
					const o = {
						url: n
					};
					return t.createEntity(e, "MUTABLE", o)
				},
				Mi = n("./node_modules/lodash/maxBy.js"),
				Li = n.n(Mi);
			const Fi = (t, e) => {
				if (!e) return (t => {
					const e = t.id;
					switch (t.e) {
						case Dn.m:
							return {
								assetId: e, type: I.a.Image
							};
						case Dn.a:
							return {
								assetId: e, type: I.a.AnimatedImage
							};
						case Dn.D:
							return {
								assetId: e, type: I.a.Video
							}
					}
				})(t);
				const n = e.id;
				switch (e.e) {
					case Dn.s: {
						const {
							s: t
						} = e;
						return {
							assetId: n,
							type: I.a.Image,
							imageUrl: t.u,
							width: t.x,
							height: t.y
						}
					}
					case Dn.r: {
						const {
							s: t
						} = e;
						return {
							assetId: n,
							type: I.a.AnimatedImage,
							imageUrl: t.gif,
							posterUrl: t.p,
							dashUrl: t.mp4,
							width: t.x,
							height: t.y
						}
					}
					case Dn.t: {
						const {
							isGif: t,
							dashUrl: o,
							hlsUrl: s,
							p: r,
							x: i,
							y: c
						} = e;
						let a;
						if (r) {
							a = Li()(r, t => t.x).u
						}
						return {
							assetId: n,
							type: I.a.Video,
							isGif: t,
							dashUrl: o,
							hlsUrl: s,
							posterUrl: a,
							width: i,
							height: c
						}
					}
				}
			};

			function Di(t, e, n) {
				const s = t.id,
					r = t.c,
					i = Dn.E(e, s),
					c = Fi(t, i),
					a = [new o.ContentBlock({
						key: Object(o.genKey)(),
						type: k.a,
						data: Object(M.Map)({
							mediaAsset: c
						})
					})];
				if (n) {
					const t = Object(A.h)(Object(o.genKey)(), r).merge({
						type: k.j
					});
					a.push(t)
				}
				return a
			}
			const Ni = Object.keys(gi),
				Pi = (t, e, n) => {
					switch (e.e) {
						case Dn.u:
							return qi(t, e.c, k.b.UNSTYLED, n);
						case Dn.k:
							const o = k.h[e.l];
							return qi(t, e.c || [], o, n);
						case Dn.p:
							return zi(t, e, n);
						case Dn.b:
							return Ui(t, e, n);
						case Dn.c:
							return void e.c.forEach(e => qi(t, [e], k.b.CODE_BLOCK, n));
						case Dn.z:
							return Hi(t, e, n);
						case Dn.m:
						case Dn.a:
						case Dn.D:
							return void t.blocks.push(...Di(e, n.mediaMetadataMap, Object(I.q)(n.editorType)))
					}
				},
				Ui = (t, e, n) => {
					e && e.c && e.c.length && e.c.forEach(e => e.e === Dn.u ? qi(t, e.c, k.b.BLOCK_QUOTE, n) : Pi(t, e, n))
				},
				Hi = (t, e, n) => {
					const {
						h: o,
						c: s
					} = e, r = o.length;
					[o, ...s].forEach((e, s) => e.forEach((e, i) => {
						const {
							c = []
						} = e, {
							a
						} = o[i], l = {
							alignment: a,
							colCount: r,
							colIndex: i,
							rowIndex: s
						};
						qi(t, c, k.b.TABLE_CELL, n, l)
					}))
				},
				zi = (t, e, n, o = 0) => {
					const s = e.o ? k.b.ORDERED_LIST : k.b.UNORDERED_LIST;
					e.c.forEach(e => {
						const r = e.c;
						if (!r || !r.length) return;
						const [i, c] = r, a = i.e === Dn.u ? i.c : [];
						qi(t, a, s, n, void 0, o), c && c.e === Dn.p && zi(t, c, n, o + 1)
					})
				},
				Vi = {
					[Dn.y]: ["r/", "/r/"],
					[Dn.B]: ["u/", "/user/"],
					[Dn.C]: ["u/", "/user/"],
					[Dn.v]: ["p/", ""],
					[Dn.g]: ["c/", ""]
				},
				Wi = {
					[Dn.y]: K.a.SUBREDDIT_LINK,
					[Dn.B]: K.a.USER_LINK,
					[Dn.C]: K.a.USER_MENTION,
					[Dn.v]: K.a.POST_LINK,
					[Dn.g]: K.a.COMMENT_LINK
				},
				qi = (t, e, n, s, r = {}, i, c = !1) => {
					const a = t.content;
					if (1 === e.length && (e[0].e === Dn.m || e[0].e === Dn.a)) {
						const n = e[0];
						if (Object(hi.f)(n.id)) return void t.blocks.push(...Di(n, s.mediaMetadataMap, Object(I.q)(s.editorType)))
					}
					const {
						charList: l,
						text: d,
						updatedContent: u
					} = Gi(e, a, s), p = new o.ContentBlock({
						key: Object(o.genKey)(),
						characterList: Object(M.List)(l),
						data: Object(M.fromJS)(r),
						depth: i,
						text: d,
						type: n
					});
					t.content = u || a, c ? t.blocks.unshift(p) : t.blocks.push(p)
				},
				Gi = (t, e, n) => {
					let o = e,
						s = "";
					const r = [];
					if (t.forEach(t => {
							const e = Yi(t, o, n);
							o = e.updatedContent || o, s += e.text, r.push(...e.charList)
						}), s.length !== r.length) throw new Error("Characters length mismatch!");
					return {
						charList: r,
						text: s,
						updatedContent: o !== e ? o : void 0
					}
				},
				Yi = (t, e, n) => {
					switch (t.e) {
						case Dn.A: {
							const {
								t: e,
								f: n
							} = t;
							return {
								charList: Qi(e, n),
								text: e
							}
						}
						case Dn.x: {
							const {
								c: s
							} = t, r = Gi(s, e, n);
							return r.charList = r.charList.map(t => (t => o.CharacterMetadata.create({
								style: t.getStyle().add(k.k.SPOILER),
								entity: t.getEntity()
							}))(t)), r
						}
						case Dn.v:
						case Dn.g:
						case Dn.w: {
							const {
								t: e
							} = t;
							return {
								charList: Qi(e),
								text: e
							}
						}
						case Dn.y:
						case Dn.B:
						case Dn.C: {
							const [n, o] = Vi[t.e], s = (t.l ? "/" : "") + n + t.t, r = o + t.t, i = Ki(e, Wi[t.e], r), c = i.getLastCreatedEntityKey();
							return {
								charList: Qi(s, void 0, c),
								text: s,
								updatedContent: i
							}
						}
						case Dn.o: {
							const {
								t: n,
								u: o,
								f: s
							} = t, r = Ki(e, K.a.LINK, o), i = r.getLastCreatedEntityKey();
							return {
								charList: Qi(n, s, i),
								text: n,
								updatedContent: r
							}
						}
						case Dn.m:
						case Dn.a:
							const {
								id: s
							} = t;
							if (s.startsWith("emote|")) {
								const t = Object(Ai.b)(s),
									o = n.activeEmotes && n.activeEmotes[t];
								if (o) {
									const t = Object(yo.c)(e, o),
										n = t.getLastCreatedEntityKey(),
										s = yo.a;
									return {
										charList: Qi(s, void 0, n),
										text: s,
										updatedContent: t
									}
								}
								const r = `:${t}:`;
								return {
									charList: Qi(r),
									text: r
								}
							}
							return {
								text: "", charList: Qi("")
							};
						default:
							return {
								text: "", charList: Qi("")
							}
					}
				},
				Qi = (t, e, n = null) => {
					const s = o.CharacterMetadata.create({
							entity: n
						}),
						r = Array(t.length).fill(s),
						i = Object(pi.a)(t);
					return e && e.forEach(t => {
						const [e, s, c] = t, a = (t => {
							const e = Ni.filter(e => !!(gi[e] & t));
							return Object(M.OrderedSet)(e)
						})(e), l = s + c, d = o.CharacterMetadata.create({
							entity: n,
							style: a
						});
						r.fill(d, i[s], i[l])
					}), r
				},
				Zi = (t, e) => {
					t.blocks.length && (t.blocks[0].getType() === k.b.TABLE_CELL && qi(t, [], k.b.UNSTYLED, e, void 0, void 0, !0), t.blocks[t.blocks.length - 1].getType() === k.b.TABLE_CELL && qi(t, [], k.b.UNSTYLED, e))
				};
			var Ji = (t, e, n, s) => {
					const r = "string" == typeof t ? JSON.parse(t) : t;
					if (!r || !r.document || !r.document.length) return null;
					const i = {
							editorType: e,
							mediaMetadataMap: n,
							activeEmotes: s ? s.reduce((t, e) => ({
								...t,
								...e.emotes
							}), {}) : void 0
						},
						c = {
							blocks: [],
							content: o.ContentState.createFromText("")
						};
					r.document.forEach(t => {
						Pi(c, t, i)
					}), 0 === c.blocks.length && qi(c, [], k.b.UNSTYLED, i), Zi(c, i);
					const a = o.BlockMapBuilder.createFromArray(c.blocks),
						l = o.SelectionState.createEmpty(a.first().getKey());
					return c.content.merge({
						blockMap: a,
						selectionBefore: l,
						selectionAfter: l
					})
				},
				Xi = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				$i = n("./src/reddit/constants/elementClassNames.ts"),
				tc = n("./src/reddit/constants/keycodes.ts"),
				ec = n("./src/reddit/icons/svgs/Send/index.tsx"),
				nc = n("./src/reddit/selectors/economics.ts"),
				oc = n("./src/reddit/components/RichTextEditor/index.m.less"),
				sc = n.n(oc);

			function rc() {
				return (rc = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			Object(yr.b)({
				draftToRTFJson: fi,
				getMediaCount: I.g,
				getPendingThumbnailUploads: I.i,
				isAllMediaUploaded: I.m
			});
			const ic = "handled",
				cc = "not-handled",
				ac = /^\s*$/,
				lc = 20,
				dc = g.a.wrapped(cs.a, "FocusableContent", sc.a),
				uc = g.a.div("Container", sc.a),
				pc = g.a.wrapped(Xi.a, "CurrentUserIcon", sc.a),
				hc = t => `${x.b}-${t}`,
				mc = Object(l.b)(() => {
					const t = (() => Object(d.a)(t => t.uploads, (t, e) => e.rteState.editorKey, (t, e) => i()(t, t => t.key.startsWith(hc(e)))))();
					return Object(d.c)({
						editorUploads: t,
						emotesSpecialMembershipEnabled: S.d.spEmotes,
						giphySpecialMembershipEnabled: S.d.spGiphy,
						activeEmotes: (t, e) => {
							var n;
							return Object(nc.b)(t, {
								subredditId: null === (n = e.destSubreddit) || void 0 === n ? void 0 : n.id
							})
						},
						shouldShowCommentGifsTooltip: (t, e) => {
							var n;
							return Object(ko.c)(t, {
								subredditId: null === (n = e.destSubreddit) || void 0 === n ? void 0 : n.id
							})
						}
					})
				}, t => ({
					onFetchEditorProducts: e => t(Object(E.e)(e)),
					onTrackMediaDrop: e => t((t, n) => C.o(n(), e)),
					retryUpload: e => t(x.c(e)),
					startUploads: (e, n, o) => t(x.e(e, n, hc(o)))
				}));
			class gc extends c.Component {
				constructor(t) {
					super(t), this.blockRenderMap = o.DefaultDraftBlockRenderMap.merge(us, gs, Rn, hr, br, Mr, nn), this.editorHeight = null, this.editorRef = null, this.editorRootStyleMutationObserver = null, this.linksControllerApi = null, this.suggestionDropdownApi = null, this.tableToolbarControllerApi = null, this.emotesTooltipApi = null, this.gifTooltipApi = null, this.updateSuggestionDropdownPosition = null, this.isJustAutocompleteSelected = !1, this.isJustLinkified = !1, this.isMouseDown = !1, this.isJustConvertedToList = !1, this.needSyncScroll = null, this.transforms = {
						[T.BREAK_HEADER_ENTITY]: ho.b,
						[T.INSERT_LINE_BREAK]: ho.e,
						[T.REDUCE_LIST_INDENT]: ho.f,
						[T.RESET_CURRENT_AND_PREVIOUS_BLOCKS]: ho.g,
						[T.REMOVE_EXTRA_LIST_ITEM]: ho.h,
						[R.d]: t => Yo(t, this.props.editorType),
						[R.b]: t => Go(t, this.props.editorType),
						[R.f]: ho.d,
						[R.c]: t => Object(ho.c)(k.k.BOLD, t),
						[R.e]: t => Object(ho.c)(k.k.ITALIC, t),
						[R.g]: t => Object(ho.c)(k.k.UNDERLINE, t)
					}, this.setContainerRef = t => {
						const {
							domRef: e
						} = this.props;
						e && e(t), this.setState({
							containerRef: t
						})
					}, this.setFocusableContentRef = t => this.setState({
						focusableContentRef: t
					}), this.rteStateChanged = (t, e) => {
						const n = {
							...this.props.rteState,
							isBound: !0,
							editorState: t
						};
						this.props.onChange(n, e)
					}, this.hideTooltips = () => {
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), this.tableToolbarControllerApi && this.tableToolbarControllerApi.hideActionButton(), this.linksControllerApi && this.linksControllerApi.hidePopup(), this.suppressAutocompleteForFocusedLink()
					}, this.onEditorStyleChanged = () => {
						if (!this.editorRef) return;
						const t = this.editorRef.refs.editor,
							e = t.style.height ? Number.parseInt(t.style.height) : null;
						this.editorHeight !== e && (this.hideTooltips(), this.editorHeight = e, e && this.props.onEditorResize && this.props.onEditorResize(e))
					}, this.insertValidatedMedia = () => {
						const {
							editorUploads: t
						} = this.props, {
							editorState: e,
							mediaToInsert: n
						} = this.state;
						if (!n) return;
						const {
							files: o,
							blockKey: s,
							insertionMode: r
						} = n, i = o.map(e => t.find(t => t.file === e)).filter(Boolean);
						this.setState({
							mediaToInsert: null
						});
						const c = i.filter(t => !!t.metadata.mimetype);
						c.length && this.onChange(Object(I.l)(e, c, s, r))
					}, this.focus = () => this.editorRef && this.editorRef.focus(), this.blur = () => this.editorRef && this.editorRef.blur(), this.isFocused = () => this.state.editorState.getSelection().getHasFocus(), this.isEmpty = () => !this.state.editorState.getCurrentContent().hasText(), this.setEditorRef = t => this.editorRef = t, this.setSuggestionDropdownApi = t => this.suggestionDropdownApi = t, this.setLinksControllerApi = t => this.linksControllerApi = t, this.setTableToolbarControllerApi = t => this.tableToolbarControllerApi = t, this.setEmotesTooltipApi = t => this.emotesTooltipApi = t, this.setGifTooltipApi = t => this.gifTooltipApi = t, this.setSuggestionDropdownPositionUpdater = t => this.updateSuggestionDropdownPosition = t, this.getEditorState = () => this.state.editorState, this.setEditorState = (t, e) => {
						const n = this.state.editorState.getCurrentContent() !== t.getCurrentContent();
						n && this.props.readOnly || (this.setState({
							editorState: t
						}, e), this.rteStateChanged(t, n))
					}, this.toolbarSetState = t => {
						const e = t.getInlineStyleOverride();
						let n = t;
						n.getSelection().getHasFocus() || (n = o.EditorState.forceSelection(n, n.getSelection()), e && (n = o.EditorState.setInlineStyleOverride(n, e))), this.onChange(n)
					}, this.onChange = (t, e) => {
						let n = t;
						n = bn(n, this.state.editorState), n = It(n, this.props.editorType), this.emotesTooltipApi && (n = Object(yo.d)(n, this.state.editorState)), n = Uo(n, this.state.editorState), n = Object($o.d)(n, this.state.editorState), this.setEditorState(n, e);
						let {
							suppressAutocompleteForLink: o
						} = this.state;
						if (o) {
							const e = Object(Io.b)(t);
							e && e.entityKey === o || (o = null)
						}
						this.setState({
							suppressAutocompleteForLink: o
						}), this.isJustAutocompleteSelected = !1, this.isJustLinkified = !1, this.isMouseDown = !1, this.isJustConvertedToList = !1
					}, this.onFocus = () => {
						const {
							onFocus: t
						} = this.props;
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), t && t()
					}, this.handleBeforeInput = t => {
						const {
							editorState: e
						} = this.state;
						if (this.isMouseDown) return ic;
						if (Bt(e, t)) return ic;
						let n = function(t, e) {
							const n = t.getSelection(),
								s = n.getFocusOffset();
							if (!n.isCollapsed() || 0 === s) return;
							const r = n.getFocusKey(),
								i = t.getCurrentContent(),
								c = i.getBlockForKey(r),
								a = c.getEntityAt(s - 1),
								l = c.getEntityAt(s);
							if (!(a && (!l || l !== a))) return;
							const d = i.getEntity(a),
								u = Bo.has(d.getType());
							if ("MUTABLE" === d.getMutability() && u) {
								const s = o.Modifier.insertText(i, n, e, t.getCurrentInlineStyle());
								return o.EditorState.push(t, s, "insert-characters")
							}
						}(e, t) || e;
						return (n = hn(n, t) || n) !== e ? (this.onChange(n), ic) : cc
					}, this.keyBindingFN = t => {
						const {
							editorState: e
						} = this.state, {
							submitOnEnter: n
						} = this.props, s = e.getSelection();
						if (t.metaKey && t.keyCode === tc.a.K) return T.OPEN_LINK_TOOLTIP;
						if (t.keyCode === tc.a.Space) {
							if (Jo(e)) return T.CONVERT_TO_LIST_ON_SPACE;
							if (Object(Io.d)(e)) return T.LINKIFY_ON_SPACE
						} else if (t.keyCode === tc.a.Enter) {
							if (t.ctrlKey || t.metaKey || n && !t.shiftKey) return T.SUBMIT;
							if (t.shiftKey && Qo(e)) return T.INSERT_LINE_BREAK; {
								const t = this.enterKeyBinding(e);
								if (t) return t
							}
						} else if (t.keyCode === tc.a.Backspace) {
							if (this.isJustLinkified || this.isJustConvertedToList) return R.h;
							if (s.isCollapsed()) {
								const t = e.getCurrentContent(),
									n = s.getEndKey(),
									o = s.getStartOffset(),
									r = t.getBlockForKey(n),
									i = r.getType();
								if ((Object(k.s)(i) || Object(k.q)(i) || Object(k.p)(i)) && 0 === o && r.getLength() > 0) {
									const e = t.getBlockBefore(n);
									if (!e || e.getType() !== i) return T.MAKE_PLAIN_BLOCK
								}
							}
						}
						return Object(o.getDefaultKeyBinding)(t)
					}, this.handleKeyCommand = t => {
						const {
							editorState: e
						} = this.state;
						let n = t,
							s = null;
						const r = t => {
							let e = t;
							if (s) {
								const {
									selection: t,
									url: n
								} = s;
								e = Object(Io.f)(e, t, n)
							}
							return this.onChange(e), this.isJustLinkified = !!s, ic
						};
						if (n === T.SUBMIT) this.props.onSubmit();
						else {
							if (n === T.CONVERT_TO_LIST_ON_SPACE) {
								const t = r(Xo(e));
								return this.isJustConvertedToList = !0, t
							}
							if (n === T.LINKIFY_ON_SPACE) return s = Object(Io.d)(e), r(Object(ho.a)(e));
							if (n === T.LINKIFY_ON_ENTER && (s = Object(Io.d)(e), !(n = this.enterKeyBinding(e, !1)))) return r(Object(ho.d)(e))
						}
						if (n === T.OPEN_LINK_TOOLTIP) return this.onToolbarLinkButtonClick(), ic;
						if (n === T.MAKE_PLAIN_BLOCK) {
							return r(Object(ho.i)(k.n, e))
						}
						if (n === T.EXEC_TABLE_ON_ENTER_HANDLER) return r(this.tableOnEnterHandler.handle(e));
						const i = this.transforms[n];
						if (i) {
							const t = i(e);
							if (t) return r(t)
						}
						const c = o.RichUtils.handleKeyCommand(e, n);
						return c ? r(c) : cc
					}, this.handleOnTab = t => {
						if (this.emotesTooltipApi && this.emotesTooltipApi.handleTabInEditor() || this.suggestionDropdownApi && this.suggestionDropdownApi.selectCurrent()) return void t.preventDefault();
						const {
							editorState: e
						} = this.state;
						let n = ln(t, e);
						if (n = n || qo(t, e)) return void this.onChange(n);
						const s = o.RichUtils.onTab(t, e, 2);
						this.onChange(s)
					}, this.handleOnUpArrow = t => {
						if (this.emotesTooltipApi && this.emotesTooltipApi.handleUpArrowInEditor() || this.suggestionDropdownApi && this.suggestionDropdownApi.moveUp()) return void t.preventDefault();
						const e = dn(t, this.state.editorState) || Rt(t, this.state.editorState);
						e && this.onChange(e), this.needSyncScroll = Ri.Up
					}, this.handleOnDownArrow = t => {
						if (this.suggestionDropdownApi && this.suggestionDropdownApi.moveDown()) return void t.preventDefault();
						const e = un(t, this.state.editorState) || _t(t, this.state.editorState);
						e && this.onChange(e), this.needSyncScroll = Ri.Down
					}, this.handleReturn = t => {
						const e = jt(this.state.editorState);
						return e ? (this.onChange(e), t.preventDefault(), ic) : this.suggestionDropdownApi && this.suggestionDropdownApi.selectCurrent() ? (t.preventDefault(), ic) : cc
					}, this.suppressAutocompleteForFocusedLink = () => {
						const t = Object(Io.b)(this.state.editorState);
						t && this.state.suppressAutocompleteForLink !== t.entityKey && this.setState({
							suppressAutocompleteForLink: t.entityKey
						})
					}, this.handleEscape = t => {
						this.emotesTooltipApi && this.emotesTooltipApi.handleEscapeKeyInEditor(), this.suppressAutocompleteForFocusedLink()
					}, this.handleOnCopy = t => {
						this.editorRef && yt(this.state.editorState, this.editorRef, t)
					}, this.handleOnCut = t => {
						const {
							editorState: e
						} = this.state;
						if (!this.editorRef) return;
						if (!yt(e, this.editorRef, t)) return;
						const n = st(e) || vt(e) || Object(I.e)(e);
						n && this.onChange(n)
					}, this.handleOnPaste = t => {
						const {
							editorState: e
						} = this.state;
						if (!this.editorRef) return;
						if (this.handleFilesPaste(t, e), t.isPropagationStopped()) return;
						const n = Ds(e, this.editorRef, t, this.props.editorType);
						n && this.onChange(n)
					}, this.handleFilesPaste = (t, e) => {
						const n = t.clipboardData.files;
						if (n && n.length) {
							const o = Array.from(n),
								s = e.getSelection().getEndKey();
							this.insertMediaFiles({
								files: o,
								blockKey: s,
								insertionMode: A.a.after,
								filesSource: y.FileSource.Clipboard
							}), t.stopPropagation()
						}
					}, this.handleOnMouseDown = t => {
						this.isMouseDown = !0
					}, this.handleOnMouseUp = t => {
						this.isMouseDown = !1
					}, this.handleDroppedFiles = (t, e) => ic, this.handleDrop = (t, e, n) => ic, this.handleBlur = () => {
						this.props.onBlur && this.props.onBlur()
					}, this.handlePastedText = (t, e) => ic, this.onInternalSuggestionSelected = t => {
						this.onChange(Object(Io.g)(this.state.editorState, t)), this.isJustAutocompleteSelected = !0
					}, this.onToolbarEmoteButtonClick = t => {
						this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), this.emotesTooltipApi && this.emotesTooltipApi.toggleTooltip(t)
					}, this.onToolbarGifButtonClick = t => {
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.toggleTooltip(t)
					}, this.onToolbarLinkButtonClick = () => {
						if (!this.linksControllerApi) return;
						const {
							editorState: t
						} = this.state;
						this.linksControllerApi.editLinkInSelection(t.getSelection()) || Object(b.b)(void 0, "Current selection cannot be edited by link editor!")
					}, this.handleSwitchToMarkdownMode = () => {
						const {
							editorState: t
						} = this.state, {
							onSwitchEditorMode: e
						} = this.props, n = yr.a.toRichTextJSON({
							...this.props.rteState,
							isBound: !0,
							editorState: Object(I.c)(t)
						});
						e && e(O.h.MARKDOWN, n), this.state.confirmModalOpen && this.toggleConfirmModal()
					}, this.onToolbarMarkdownSwitchClick = () => {
						const {
							editorState: t
						} = this.state;
						t && Ho(t) ? this.setState({
							confirmModalOpen: !0
						}) : this.handleSwitchToMarkdownMode()
					}, this.toggleConfirmModal = () => {
						this.setState({
							confirmModalOpen: !this.state.confirmModalOpen
						})
					}, this.insertMediaFiles = async t => {
						this.setState({
							mediaToInsert: t
						});
						const {
							files: e,
							filesSource: n
						} = t, o = e.slice(0, lc);
						await this.props.startUploads(o, n, this.props.rteState.editorKey), this.insertValidatedMedia()
					}, this.onRetryUpload = t => {
						this.props.retryUpload(t)
					}, this.onFilesSelect = t => {
						const {
							editorState: e
						} = this.state, n = e.getSelection().getEndKey();
						this.insertMediaFiles({
							files: t,
							blockKey: n,
							insertionMode: A.a.after,
							filesSource: y.FileSource.FileSelector
						})
					}, this.onFilesDrop = (t, e, n) => {
						this.props.onTrackMediaDrop(t), this.insertMediaFiles({
							files: t,
							blockKey: e,
							insertionMode: n,
							filesSource: y.FileSource.DragAndDrop
						})
					}, this.onBlockMove = (t, e, n) => {
						const {
							editorState: o
						} = this.state, s = Object(I.o)(o, t, e, n);
						s && this.onChange(s)
					}, this.getAtomicBlocksRenderConfig = () => ({
						component: Xe,
						props: {
							getEditorState: this.getEditorState,
							onChange: this.onChange,
							onRetryUpload: this.onRetryUpload,
							rteFocusableContentRef: this.state.focusableContentRef,
							editorType: this.props.editorType
						}
					}), this.blockRendererFn = t => {
						const e = t.getType();
						return e === k.a ? this.getAtomicBlocksRenderConfig() : e in Rr ? Rr[e] : void 0
					}, this.renderToolbar = t => a.a.createElement(Ke.b, t), this.entityElementRegistry = go(), this.tableOnEnterHandler = new pn;
					const {
						activeEmotes: e,
						editorType: n,
						noBorder: s,
						initialHeight: r,
						initialMinHeight: i,
						rteState: c
					} = t;
					let l;
					c.isBound ? l = c.editorState : Object(Dn.G)(c.initialRTJSON) ? l = this.createInitialState(c.editorKey) : (l = o.EditorState.createWithContent(Ji(c.initialRTJSON, n, c.mediaMetadataMap, e), this.editorDecorators()), l = this.moveSelectionToEnd(l)), this.state = {
						noBorder: s,
						containerRef: null,
						confirmModalOpen: !1,
						editorState: l,
						focusableContentRef: null,
						inited: !1,
						initialHeight: r,
						initialMinHeight: i,
						mediaToInsert: null,
						suppressAutocompleteForLink: null
					}
				}
				editorDecorators() {
					return new o.CompositeDecorator([Co(), is(), Fo()])
				}
				moveSelectionToEnd(t) {
					const e = t.getCurrentContent().getBlockMap(),
						n = e.last().getKey(),
						s = e.last().getLength(),
						r = new o.SelectionState({
							anchorKey: n,
							anchorOffset: s,
							focusKey: n,
							focusOffset: s
						});
					return o.EditorState.acceptSelection(t, r)
				}
				createInitialState(t) {
					return o.EditorState.createWithContent(o.ContentState.createFromBlockArray([new o.ContentBlock({
						key: `${t}_initial`
					})]), this.editorDecorators())
				}
				componentDidMount() {
					if (this.props.rteRef && this.props.rteRef(this), m.a.write(Br), this.rteStateChanged(this.state.editorState, !1), this.editorRef) {
						const t = this.editorRef.refs.editor;
						t.addEventListener("scroll", this.hideTooltips), this.editorRootStyleMutationObserver = new MutationObserver(this.onEditorStyleChanged), this.editorRootStyleMutationObserver.observe(t, {
							attributes: !0,
							attributeFilter: ["style"]
						})
					}
					const {
						destSubreddit: t,
						emotesSpecialMembershipEnabled: e,
						giphySpecialMembershipEnabled: n
					} = this.props;
					t && t.id && (e || n) && this.props.onFetchEditorProducts(t.id)
				}
				componentDidUpdate(t, e) {
					const n = this.getLinkForAutocomplete();
					if (n && this.updateSuggestionDropdownPosition) {
						const t = this.entityElementRegistry.get(n.entityKey);
						if (t) {
							const {
								left: e,
								bottom: n,
								height: o
							} = t.getBoundingClientRect();
							this.updateSuggestionDropdownPosition({
								left: e,
								top: n,
								bottom: n - o
							})
						}
					}
					this.needSyncScroll && (Ii(this.needSyncScroll), this.needSyncScroll = null)
				}
				componentWillUnmount() {
					if (this.props.rteRef && this.props.rteRef(null), this.insertValidatedMedia = () => {}, this.editorRef) {
						this.editorRef.refs.editor.removeEventListener("scroll", this.hideTooltips)
					}
					this.editorRootStyleMutationObserver && (this.editorRootStyleMutationObserver.disconnect(), this.editorRootStyleMutationObserver = null)
				}
				UNSAFE_componentWillReceiveProps(t) {
					t.rteState !== this.props.rteState && t.rteState.isBound && t.rteState.editorState !== this.state.editorState && this.setState({
						editorState: t.rteState.editorState
					})
				}
				shouldComponentUpdate(t, e) {
					if (e !== this.state) return !0;
					if (!(t.rteState.isBound && t.rteState.editorState === this.state.editorState)) return !0;
					return !p()(t, this.props, (t, e, n) => "rteState" === n || void 0)
				}
				enterKeyBinding(t, e = !0) {
					const n = t.getCurrentContent(),
						o = t.getSelection(),
						s = o.getStartKey(),
						r = o.getEndKey(),
						i = o.getEndOffset(),
						c = n.getBlockForKey(s).getType(),
						a = n.getBlockForKey(r),
						l = a.getType(),
						d = i === a.getText().length;
					if (c === k.l || l === k.l) return T.EXEC_TABLE_ON_ENTER_HANDLER;
					if (o.isCollapsed()) {
						if (e && Object(Io.d)(t)) return T.LINKIFY_ON_ENTER;
						if (Object(k.r)(l) && d) return T.BREAK_HEADER_ENTITY;
						if (Object(k.s)(l)) {
							if (ac.test(a.getText())) return a.getDepth() > 0 ? T.REDUCE_LIST_INDENT : T.REMOVE_EXTRA_LIST_ITEM
						} else if (l === k.e) {
							const t = n.getBlockBefore(r);
							if (t && t.getType() === k.e && ac.test(t.getText()) && ac.test(a.getText())) return T.RESET_CURRENT_AND_PREVIOUS_BLOCKS
						} else if (l === k.f) {
							const t = n.getBlockBefore(r),
								e = n.getBlockAfter(r);
							if (!a.getText() && t && t.getType() === k.f && !t.getText() && (!e || e.getType() !== k.f)) return T.RESET_CURRENT_AND_PREVIOUS_BLOCKS
						}
					}
				}
				getLinkForAutocomplete() {
					const {
						editorState: t,
						suppressAutocompleteForLink: e
					} = this.state;
					if (!this.isJustAutocompleteSelected && t.getSelection().getHasFocus()) {
						const n = Object(Io.b)(t);
						if (n && n.entityKey !== e) return n
					}
				}
				renderInternalLinkSuggestionDropdown() {
					const {
						isChatPost: t
					} = this.props, e = this.getLinkForAutocomplete();
					return e ? a.a.createElement(In.b, {
						aboveParent: t,
						dropdown: !0,
						onSetPositionUpdater: this.setSuggestionDropdownPositionUpdater
					}, e.entityText.startsWith(f.f) && a.a.createElement(Qr, {
						onDropdownApi: this.setSuggestionDropdownApi,
						onSelect: this.onInternalSuggestionSelected,
						substring: e.internalName
					}), f.a.test(e.entityText) && a.a.createElement($r, {
						onDropdownApi: this.setSuggestionDropdownApi,
						onSelect: this.onInternalSuggestionSelected,
						substring: e.internalName
					})) : null
				}
				render() {
					const {
						className: t,
						userCanUseGifs: e,
						allowMediaUploads: n = !1,
						dataTestId: r,
						destSubreddit: i,
						editorType: c,
						focusableContentRTEClassName: l,
						hideToolbar: d,
						rteState: u,
						isExpanded: p,
						isOverlay: m,
						isCommentBoxDesignEnabled: g,
						onSubmit: f,
						placeholderText: b,
						shouldShowCommentGifsTooltip: y,
						showSubmitButton: E = !1,
						submitButtonClassName: x,
						toolbarPosition: S = "top",
						renderToolbar: C = this.renderToolbar
					} = this.props, {
						editorKey: O
					} = u, {
						containerRef: k,
						editorState: T,
						mediaToInsert: j,
						confirmModalOpen: R
					} = this.state, _ = this.props.readOnly || !!j, B = v(T), I = this.isEmpty(), A = C({
						allowMediaUploads: n,
						destSubreddit: i,
						editorKey: O,
						editorState: T,
						isOverlay: !!m,
						onChange: this.toolbarSetState,
						onFilesSelect: this.onFilesSelect,
						trackOnClick: this.props.trackToolbarClick,
						readOnly: _,
						onEmoteButtonClick: this.onToolbarEmoteButtonClick,
						onGifButtonClick: this.onToolbarGifButtonClick,
						onLinkButtonClick: this.onToolbarLinkButtonClick,
						onMarkdownButtonClick: this.onToolbarMarkdownSwitchClick,
						userCanUseGifs: !!e
					}), K = !d && (!g || p);
					return a.a.createElement(uc, {
						className: t,
						innerRef: this.setContainerRef
					}, g && a.a.createElement("div", {
						className: sc.a.userIcon
					}, a.a.createElement(pc, null)), a.a.createElement(dc, {
						className: Object(h.a)(l, {
							[sc.a.showSubmitButton]: E,
							[sc.a.mExpanded]: p,
							[sc.a.mRedesign]: g
						}),
						noBorder: this.props.noBorder,
						isFocused: this.isFocused(),
						ref: this.setFocusableContentRef
					}, K && "top" === S && A, k && a.a.createElement(po, {
						editorState: T,
						readOnly: _,
						onChange: this.onChange,
						onSetApi: this.setTableToolbarControllerApi,
						rteDomRef: k
					}), a.a.createElement("div", {
						className: Object(h.a)(sc.a.editorWrapper, {
							[sc.a.hasInitialHeight]: !!this.props.initialHeight,
							[sc.a.hasInitialMinHeight]: !!this.props.initialMinHeight,
							[sc.a.noBorder]: !!this.props.noBorder
						}),
						style: {
							"--rte-initial-height": this.props.initialHeight ? `${this.props.initialHeight}px` : void 0,
							"--rte-initial-min-height": this.props.initialMinHeight ? `${this.props.initialMinHeight}px` : void 0
						},
						"data-test-id": r,
						onCopyCapture: this.handleOnCopy,
						onCutCapture: this.handleOnCut,
						onPasteCapture: this.handleOnPaste,
						onMouseDown: this.handleOnMouseDown,
						onMouseUp: this.handleOnMouseUp
					}, a.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n                .${$i.b}[${$i.d}="${B}-0-0"]::after {\n                  bottom: 0;\n                  color: var(--newCommunityTheme-actionIcon);\n                  content: '${b}';\n                  cursor: text;\n                  left: 0;\n                  position: absolute;\n                  top: 0;\n                }\n              `
						}
					}), a.a.createElement(Ts, {
						allowMediaUploads: n && !_,
						onBlockMove: this.onBlockMove,
						onFilesDrop: this.onFilesDrop,
						editorState: T,
						onChange: this.onChange
					}, a.a.createElement(fo.Provider, {
						value: this.entityElementRegistry
					}, a.a.createElement(o.Editor, {
						readOnly: _,
						ref: this.setEditorRef,
						blockRendererFn: this.blockRendererFn,
						blockRenderMap: this.blockRenderMap,
						editorKey: O,
						editorState: T,
						keyBindingFn: this.keyBindingFN,
						handleBeforeInput: this.handleBeforeInput,
						handleKeyCommand: this.handleKeyCommand,
						handlePastedText: this.handlePastedText,
						handleDroppedFiles: this.handleDroppedFiles,
						handleDrop: this.handleDrop,
						onBlur: this.handleBlur,
						onChange: this.onChange,
						onFocus: this.onFocus,
						onTab: this.handleOnTab,
						onUpArrow: this.handleOnUpArrow,
						onDownArrow: this.handleOnDownArrow,
						onEscape: this.handleEscape,
						spellCheck: !0,
						handleReturn: this.handleReturn,
						customStyleMap: Sr()
					})))), K && "bottom" === S && A, a.a.createElement(lr, {
						editorState: T,
						entityElementRegistry: this.entityElementRegistry,
						onSetApi: this.setLinksControllerApi,
						onChange: this.onChange
					}), c === Dt.a.Comment && i && a.a.createElement(_o, {
						editorState: T,
						onChange: this.onChange,
						onSetApi: this.setEmotesTooltipApi,
						subreddit: i
					}), (y || e) && i && a.a.createElement(es, {
						editorState: T,
						onChange: this.onChange,
						onSetApi: this.setGifTooltipApi,
						subreddit: i,
						userCanUseGifs: !!e
					}), this.renderInternalLinkSuggestionDropdown(), E && a.a.createElement(Xt.d, {
						"aria-label": s.fbt._("submit", null, {
							hk: "12XoZ8"
						}),
						className: Object(h.a)(x, sc.a.insetSubmitButton, {
							[sc.a.emptyContent]: I,
							[sc.a.focusedContent]: this.isFocused()
						}),
						disabled: I,
						onClick: f,
						tabIndex: -1,
						type: "submit"
					}, a.a.createElement(ec.a, null))), R && a.a.createElement(w.a, {
						toggleModal: this.toggleConfirmModal,
						onConfirm: this.handleSwitchToMarkdownMode,
						actionText: s.fbt._("Continue", null, {
							hk: "3aoEeD"
						}),
						cancelActionText: s.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						headerText: s.fbt._("Switch to Markdown", null, {
							hk: "3zGkKa"
						}),
						modalText: s.fbt._("Switching to markdown will remove any images, gifs or videos from your post.", null, {
							hk: "3rlwkB"
						}),
						trackClick: () => {}
					}))
				}
			}
			e.a = mc(Object(Lr.b)(t => a.a.createElement(gc, rc({
				key: t.rteState.editorKey
			}, t))))
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/ImagePreview/index.m.less": function(t, e, n) {
			t.exports = {
				Img: "_1gJwMe53cjYITkMu0Ve8j-",
				img: "_1gJwMe53cjYITkMu0Ve8j-",
				Component: "_3VYFd7PKhTJ-0i22YsgFPv",
				component: "_3VYFd7PKhTJ-0i22YsgFPv"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/Placeholder/index.m.less": function(t, e, n) {
			t.exports = {
				Message: "_3cyJHYsdZdz4RWdmrzyYx-",
				message: "_3cyJHYsdZdz4RWdmrzyYx-",
				Component: "_3JSUHg1gLhxUj4PB_Pgw8a",
				component: "_3JSUHg1gLhxUj4PB_Pgw8a"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/StatusBar/index.m.less": function(t, e, n) {
			t.exports = {
				buttonBaseStyles: "_3R1ajPuzbs2MdbXedj3YXU",
				ControlRow: "_1rrSEjTxZcLOZTDNZlj5N4",
				controlRow: "_1rrSEjTxZcLOZTDNZlj5N4",
				Button: "_2rIEdliEXr7qNb-COL-zuO",
				button: "_2rIEdliEXr7qNb-COL-zuO",
				ErrButton: "_3CUr1530H3uD-ts9tKd9RA",
				errButton: "_3CUr1530H3uD-ts9tKd9RA",
				Status: "jXuqxr-x0kyU3BSfugjwM",
				status: "jXuqxr-x0kyU3BSfugjwM",
				hasError: "_4XwI6tILia1pR9HTda4wv",
				ProgressBar: "_1NvtB5J5UfhiHd0ix7TZgb",
				progressBar: "_1NvtB5J5UfhiHd0ix7TZgb",
				ProgressBarInner: "_29o2WRRYmrLU47NaFzQzxq",
				progressBarInner: "_29o2WRRYmrLU47NaFzQzxq",
				ErrorLine: "_3M-thbkBHHvsWjDt8edbhz",
				errorLine: "_3M-thbkBHHvsWjDt8edbhz",
				Component: "_1CqupI5I-zzAInIdLwphQg",
				component: "_1CqupI5I-zzAInIdLwphQg"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/VideoPreview/index.m.less": function(t, e, n) {
			t.exports = {
				VideoPlayer: "_3gstD1_YUjNWZqjtwdgU9t",
				videoPlayer: "_3gstD1_YUjNWZqjtwdgU9t",
				PosterImg: "_2C2yx7Rf_BKPOyll-aq_hI",
				posterImg: "_2C2yx7Rf_BKPOyll-aq_hI",
				Poster: "_1UCJLqzcYXck8Ahv0PlvVw",
				poster: "_1UCJLqzcYXck8Ahv0PlvVw",
				Component: "wSihDBKVJH6iP2jdDjRQ6",
				component: "wSihDBKVJH6iP2jdDjRQ6",
				playButton: "il4HPAfKcVtq-WQY-if85"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/index.m.less": function(t, e, n) {
			t.exports = {
				statusBar: "_33CSkXq7gXeXCM2zSal9BN",
				container: "_1FMEfWD94pPZ_HdEN_e7Xy",
				isCompact: "_3-T8BPflZuKw_F2VRPDbcX",
				isUploaded: "_3Lj2c902Oeb7yL_jYu9v5L",
				isSelected: "Eaps2a9y_jwhKHth8v14G",
				imagePreview: "_2nlrFrYbO0bIKFeZ3HMbn_",
				placeholder: "_1-LSy7nvfNGWVhRWwwQu6A",
				videoPreview: "_2MumquPHY8gruoy6114twC",
				alignCenter: "_3U9f0TNBM1K2bggm3KMHTk"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/SelectionHook/index.m.less": function(t, e, n) {
			t.exports = {
				HiddenDiv: "_13RYjdyxMuKrkV_EtlOjhg",
				hiddenDiv: "_13RYjdyxMuKrkV_EtlOjhg"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/Toolbar/index.m.less": function(t, e, n) {
			t.exports = {
				container: "_3hDtN0e5U4EpahGe25ye-b",
				alignCenter: "Vh7FGvkGyl5SeyJP4J1GG",
				content: "_3wXzBVn-uBvRcixZwQWkNX",
				FormatterButton: "_6DRydZXlG3Ko7_4xxYUhW",
				formatterButton: "_6DRydZXlG3Ko7_4xxYUhW",
				ToolbarContent: "_3qUkCQkbZvTB6uBQEQQfSZ",
				toolbarContent: "_3qUkCQkbZvTB6uBQEQQfSZ"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/index.m.less": function(t, e, n) {
			t.exports = {
				MediaContainer: "_12ZUhulrgf1BAChnRZHmZt",
				mediaContainer: "_12ZUhulrgf1BAChnRZHmZt",
				Container: "DK9d46mm9FgC8mFWPGlG_",
				container: "DK9d46mm9FgC8mFWPGlG_"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaCaption/index.m.less": function(t, e, n) {
			t.exports = {
				wrapper: "_2eZK2IABgFqGZLMYPxwoNY"
			}
		},
		"./src/reddit/components/RichTextEditor/media/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "q", (function() {
				return b
			})), n.d(e, "h", (function() {
				return y
			})), n.d(e, "r", (function() {
				return E
			})), n.d(e, "l", (function() {
				return x
			})), n.d(e, "k", (function() {
				return S
			})), n.d(e, "n", (function() {
				return C
			})), n.d(e, "p", (function() {
				return O
			})), n.d(e, "d", (function() {
				return T
			})), n.d(e, "c", (function() {
				return v
			})), n.d(e, "e", (function() {
				return j
			})), n.d(e, "m", (function() {
				return R
			})), n.d(e, "g", (function() {
				return _
			})), n.d(e, "j", (function() {
				return B
			})), n.d(e, "i", (function() {
				return I
			})), n.d(e, "o", (function() {
				return A
			})), n.d(e, "b", (function() {
				return K
			})), n.d(e, "f", (function() {
				return L
			}));
			var o, s = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				i = n("./node_modules/lodash/flatten.js"),
				c = n.n(i),
				a = n("./node_modules/lodash/last.js"),
				l = n.n(a),
				d = n("./src/reddit/helpers/media/index.ts"),
				u = n("./src/reddit/helpers/richTextEditor/index.ts"),
				p = n("./src/reddit/helpers/richTextJson/index.ts"),
				h = n("./src/reddit/models/Upload/index.ts"),
				m = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				g = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				f = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			! function(t) {
				t[t.Image = 0] = "Image", t[t.AnimatedImage = 1] = "AnimatedImage", t[t.Video = 2] = "Video"
			}(o || (o = {}));
			const b = t => t !== u.a.Comment,
				y = t => {
					if (!Object(f.o)(t.getType())) return;
					const e = t.getData(),
						n = e.get("mediaAsset"),
						o = e.get("uploadInfo");
					if (!n && !o) return;
					const s = e.get("thumbnail");
					return {
						makeGif: e.get("makeGif"),
						thumbnail: s,
						uploadInfo: o,
						mediaAsset: n
					}
				},
				E = (t, e, n) => {
					let o = t.getCurrentContent();
					const i = o.getBlockForKey(e),
						c = y(i),
						a = c && c.uploadInfo;
					if (!a) throw new Error("Block must contain `uploadInfo` data");
					if (n.makeGif === c.makeGif && n.thumbnail === c.thumbnail) return t;
					const l = Object(r.Map)(n),
						d = o.getBlockMap().toKeyedSeq().filter(t => {
							const e = y(t);
							return !!e && !!e.uploadInfo && e.uploadInfo.uploadKey === a.uploadKey
						}).map(t => t.mergeIn(["data"], l));
					return o = (o = o.mergeIn(["blockMap"], d)).merge({
						selectionAfter: t.getSelection()
					}), s.EditorState.push(t, o, m.b)
				},
				x = (t, e, n, o) => {
					let i = t.getCurrentContent();
					const a = c()(e.map(t => {
						const e = Object(d.f)(t.metadata.mimetype),
							n = (t => {
								if (t && t.metadata.videoFirstFrameUrl) {
									return {
										url: t.metadata.videoFirstFrameUrl,
										time: 0
									}
								}
							})(t);
						return [new s.ContentBlock({
							key: Object(s.genKey)(),
							type: f.a,
							data: Object(r.Map)({
								uploadInfo: {
									mediaType: e,
									uploadKey: t.key
								},
								thumbnail: n
							})
						}), new s.ContentBlock({
							key: Object(s.genKey)(),
							type: f.j
						})]
					}));
					i = Object(g.f)(i, n, a, o);
					const u = s.EditorState.push(t, i, m.e),
						p = l()(a);
					return s.EditorState.forceSelection(u, Object(g.b)(p, !0))
				},
				S = (t, e, n, i, c, a, l, d) => {
					const u = new s.ContentBlock({
							key: Object(s.genKey)(),
							type: f.a,
							data: Object(r.Map)({
								mediaAsset: {
									type: o.AnimatedImage,
									assetId: Object(p.b)(e, i),
									imageUrl: n,
									width: c,
									height: a
								}
							})
						}),
						h = Object(g.f)(t.getCurrentContent(), l, [u], d);
					let b = s.EditorState.push(t, h, m.e);
					b = s.EditorState.forceSelection(b, Object(g.b)(u, !0));
					const y = u.getKey();
					return b.getCurrentContent().getBlockAfter(y) || (b = K(b, y)), b
				};

			function C(t, e) {
				return t.isCollapsed() && t.getStartKey() === e && 0 === t.getStartOffset() && 0 === t.getEndOffset()
			}

			function O(t, e) {
				const n = t.getCurrentContent().getBlockAfter(e);
				return s.EditorState.forceSelection(t, Object(g.b)(n, !0))
			}
			const k = (t, e) => {
					const n = t.getBlockAfter(e);
					return t = Object(g.i)(t, e), n && Object(f.u)(n.getType()) && (t = Object(g.i)(t, n.getKey())), t
				},
				T = (t, e, n = !0) => {
					let o = t.getCurrentContent();
					o = k(o, e);
					let r = n ? s.EditorState.push(t, o, m.f) : s.EditorState.set(t, {
						currentContent: o
					});
					return r = s.EditorState.forceSelection(r, o.getSelectionAfter())
				},
				v = t => {
					let e = t.getCurrentContent();
					w(e).forEach(t => {
						e = k(e, t.getKey())
					});
					const n = s.EditorState.push(t, e, m.f);
					return s.EditorState.forceSelection(n, e.getSelectionAfter())
				},
				j = t => {
					let e = t.getCurrentContent();
					const n = t.getSelection();
					e = s.Modifier.removeRange(e, n, "forward");
					let o = s.EditorState.push(t, e, m.f);
					return o = s.EditorState.forceSelection(o, e.getSelectionAfter())
				},
				w = t => t.getBlockMap().toSeq().filter(t => !!t && !!y(t)),
				R = (t, e) => t.getBlockMap().toSeq().filter(t => {
					const n = y(t),
						o = n && n.uploadInfo && n.uploadInfo.uploadKey;
					return !(!o || e[o] && e[o].url)
				}).isEmpty(),
				_ = t => {
					const e = w(t),
						n = {
							gifvideo: 0,
							image: 0,
							video: 0,
							total: 0
						};
					return e.forEach(t => {
						const e = y(t);
						let s;
						s = e.makeGif ? "gifvideo" : e.uploadInfo && "video" === e.uploadInfo.mediaType || e.mediaAsset && e.mediaAsset.type === o.Video ? "video" : "image", n[s]++, n.total++
					}), n
				},
				B = t => !w(t).isEmpty(),
				I = (t, e) => {
					const n = w(t).map(t => {
						const n = y(t),
							{
								uploadInfo: o,
								thumbnail: s
							} = n;
						if (!o || !s) return;
						const r = M(n),
							i = e[r];
						return i && i.url ? void 0 : {
							...s,
							uploadKey: r
						}
					}).filter(Boolean).toArray();
					return n.length ? n : void 0
				},
				A = (t, e, n, o) => {
					let r = t.getCurrentContent();
					const i = r.getBlockForKey(e),
						c = r.getBlockAfter(e),
						a = [i];
					if (c && Object(f.u)(c.getType()) && a.push(c), a.find(t => t.getKey() === n)) return;
					const d = a.reduce((t, e) => t.remove(e.getKey()), r.getBlockMap());
					r = r.set("blockMap", d), r = Object(g.f)(r, n, a, o);
					const u = s.EditorState.push(t, r, m.e);
					return s.EditorState.forceSelection(u, Object(g.b)(l()(a), !0))
				},
				K = (t, e, n = g.a.after) => {
					const o = Object(g.h)(),
						r = Object(g.f)(t.getCurrentContent(), e, [o], n),
						i = s.EditorState.push(t, r, m.e);
					return s.EditorState.forceSelection(i, s.SelectionState.createEmpty(o.getKey()))
				},
				M = t => t.thumbnail && t.uploadInfo ? `${t.uploadInfo.uploadKey}-thumbnail-${t.thumbnail.time}` : "",
				L = (t, e) => {
					let n = "",
						o = "";
					if (t.uploadInfo) {
						const {
							uploadKey: s
						} = t.uploadInfo, r = e[s];
						r && r.url && (n = Object(h.b)(r.url));
						const i = e[M(t)];
						i && i.url && (o = Object(h.b)(i.url))
					}
					return {
						assetId: n,
						thumbnailAssetId: o
					}
				}
		},
		"./src/reddit/components/RichTextEditor/spoiler/decorator.m.less": function(t, e, n) {
			t.exports = {
				spoiler: "_1AlhnBqYYVTQbTr33YViyK"
			}
		},
		"./src/reddit/components/RichTextEditor/spoiler/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return r
			})), n.d(e, "a", (function() {
				return i
			}));
			var o = n("./src/lib/forEachGroup/index.ts"),
				s = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const r = t => t.getStyle().has(s.k.SPOILER);

			function i(t, e, n) {
				const s = t.getCharacterList();
				Object(o.a)(s, {
					keyFn: r
				}, (t, n, o, s) => {
					n && e(o, s)
				})
			}
		},
		"./src/reddit/components/RichTextEditor/table/Renderer/index.m.less": function(t, e, n) {
			t.exports = {
				Cell: "_1J5sneEp0XXo0pFsMN7Kjs",
				cell: "_1J5sneEp0XXo0pFsMN7Kjs",
				Row: "_2Hd-Rc7z9gTKIz6JUGhbcl",
				row: "_2Hd-Rc7z9gTKIz6JUGhbcl",
				Table: "_9QFGu47IyMX1ID1xQid-8",
				table: "_9QFGu47IyMX1ID1xQid-8",
				isFakeSelectionActive: "_1QXaG0_iXh-LFDkah9HqP3"
			}
		},
		"./src/reddit/components/RichTextEditor/table/Toolbar/index.m.less": function(t, e, n) {
			t.exports = {
				formatterButton: "_1dNavKEU0lSO4mo9fYWTPm",
				ToolbarContent: "_1yPmb5QUbyAQX1wIs4FYQI",
				toolbarContent: "_1yPmb5QUbyAQX1wIs4FYQI",
				tooltip: "_3fnB5glctifL-mkYhH6aA1"
			}
		},
		"./src/reddit/components/RichTextEditor/table/ToolbarController/index.m.less": function(t, e, n) {
			t.exports = {
				ActionButton: "_2g2bsszGVtKe_XRKcRrpQi",
				actionButton: "_2g2bsszGVtKe_XRKcRrpQi",
				isPressed: "_2WwwYG59S_TJRq7FSdTVKK",
				ToolbarWrapper: "_3rXrpMuvoGNBbLE7TQQCB9",
				toolbarWrapper: "_3rXrpMuvoGNBbLE7TQQCB9"
			}
		},
		"./src/reddit/components/RichTextEditor/table/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return a
			})), n.d(e, "g", (function() {
				return l
			})), n.d(e, "m", (function() {
				return u
			})), n.d(e, "n", (function() {
				return p
			})), n.d(e, "j", (function() {
				return h
			})), n.d(e, "l", (function() {
				return m
			})), n.d(e, "f", (function() {
				return g
			})), n.d(e, "k", (function() {
				return f
			})), n.d(e, "c", (function() {
				return b
			})), n.d(e, "h", (function() {
				return y
			})), n.d(e, "b", (function() {
				return E
			})), n.d(e, "i", (function() {
				return x
			})), n.d(e, "e", (function() {
				return S
			})), n.d(e, "o", (function() {
				return C
			})), n.d(e, "d", (function() {
				return O
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				r = n("./src/reddit/models/RichTextJson/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts"),
				c = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const a = {
					[r.e]: "left",
					[r.f]: "right",
					[r.d]: "center"
				},
				l = t => {
					const e = t.getData();
					return {
						colIndex: e.get("colIndex"),
						rowIndex: e.get("rowIndex"),
						colCount: e.get("colCount"),
						alignment: e.get("alignment")
					}
				},
				d = ["data"],
				u = (t, e) => t.mergeIn(d, e),
				p = (t, e, n) => t.merge({
					text: t.getText().slice(e, n),
					characterList: t.getCharacterList().slice(e, n)
				}),
				h = (t, e, n = "", s) => {
					const r = e.map(t => t.getText()).join(n),
						i = n ? s || o.CharacterMetadata.create() : null,
						c = [];
					return e.forEach(t => {
						c.push(...t.getCharacterList().toArray()), i && e.length > 1 && c.push(i)
					}), t.merge({
						text: r,
						characterList: c
					})
				},
				m = (t, e) => {
					const n = [];
					for (let r = 0; r < e; r++)
						for (let e = 0; e < t; e++) n.push(new o.ContentBlock({
							key: Object(o.genKey)(),
							type: c.l,
							data: Object(s.Map)({
								colCount: t,
								colIndex: e,
								rowIndex: r
							})
						}));
					return n
				},
				g = (t, e) => ({
					minCol: Math.min(t.colIndex, e.colIndex),
					minRow: Math.min(t.rowIndex, e.rowIndex),
					maxCol: Math.max(t.colIndex, e.colIndex),
					maxRow: Math.max(t.rowIndex, e.rowIndex)
				}),
				f = (t, e) => {
					const {
						minCol: n,
						minRow: o,
						maxCol: s,
						maxRow: r
					} = g(t, e);
					return (t, e) => o <= t && t <= r && n <= e && e <= s
				},
				b = (t, e) => t.rowIndex < e.rowIndex ? -1 : t.rowIndex > e.rowIndex ? 1 : t.colIndex - e.colIndex,
				y = (t, e) => t === e || !(!t || !e) && 0 === b(t, e),
				E = (t, e) => b(l(t), l(e)),
				x = t => {
					if (Object(c.v)(t.getType())) {
						return 0 === l(t).rowIndex
					}
					return !1
				},
				S = (t, e, n) => {
					const o = (e, n) => {
						if (e) {
							const o = Object(i.a)(t, e);
							return o && n && -1 !== o.blocks.indexOf(n) ? [o, o] : [o, n ? Object(i.a)(t, n) : null]
						}
						return n ? o(n, null).reverse() : [null, null]
					};
					return o(Object(c.v)(e.getType()) ? e : null, Object(c.v)(n.getType()) ? n : null)
				},
				C = (t, e, n, o = !1) => {
					const s = {
						isBackward: o
					};
					return e && (s.anchorKey = e.getKey(), s.anchorOffset = o ? e.getLength() : 0), n && (s.focusKey = n.getKey(), s.focusOffset = o ? 0 : n.getLength()), t.merge(s)
				},
				O = t => {
					if (!t.length) return [];
					const e = t[0].length;
					return t.map((t, n) => t.map((t, o) => u(t, {
						rowIndex: n,
						colIndex: o,
						colCount: e
					})))
				}
		},
		"./src/reddit/components/ThumbnailSelector/index.m.less": function(t, e, n) {
			t.exports = {
				Component: "uqOt5KqJAqw5pe-WNxa0a",
				component: "uqOt5KqJAqw5pe-WNxa0a",
				TitleRow: "HEiFtUR3s93dQ2jUWWnxr",
				titleRow: "HEiFtUR3s93dQ2jUWWnxr",
				Close: "_3RlS_q06rJ_8dy_UNp3Ev7",
				close: "_3RlS_q06rJ_8dy_UNp3Ev7",
				CloseWrapper: "_3lFQIq1yN1kLxjZb5AvHjL",
				closeWrapper: "_3lFQIq1yN1kLxjZb5AvHjL",
				ThumbnailsContainer: "_2sw7c1Sfzp0uz-RIcglCo",
				thumbnailsContainer: "_2sw7c1Sfzp0uz-RIcglCo",
				Image: "_2H32szY9NZ1aKr6j4Ced7u",
				image: "_2H32szY9NZ1aKr6j4Ced7u",
				thumbnail: "_2Ks8P6YD1-8_Ju3IrYpPJf",
				isSelected: "_3oA67AGI49fKcqDP970t4U",
				ButtonRow: "_2Bo7ys2El8ABMVNqYUdrA5",
				buttonRow: "_2Bo7ys2El8ABMVNqYUdrA5",
				CancelButton: "mBq3crGX9-xOOg-b-1V85",
				cancelButton: "mBq3crGX9-xOOg-b-1V85"
			}
		},
		"./src/reddit/components/ThumbnailSelector/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/debounce.js"),
				r = n.n(s),
				i = n("./node_modules/lodash/range.js"),
				c = n.n(i),
				a = n("./node_modules/react/index.js"),
				l = n.n(a),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				p = n("./src/higherOrderComponents/asModal/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/media/index.ts"),
				g = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				f = n("./src/reddit/icons/svgs/Close/index.tsx"),
				b = n("./src/reddit/layout/row/Inline/index.tsx"),
				y = n("./src/reddit/components/ThumbnailSelector/index.m.less"),
				E = n.n(y);
			const x = 10,
				S = Object(p.a)(u.a.div("Component", E.a)),
				C = u.a.wrapped(b.a, "TitleRow", E.a),
				O = u.a.wrapped(f.a, "Close", E.a),
				k = u.a.div("CloseWrapper", E.a),
				T = u.a.div("ThumbnailsContainer", E.a),
				v = u.a.img("Image", E.a),
				j = t => l.a.createElement("div", {
					className: Object(d.a)(E.a.thumbnail, Object(g.a)({
						isLoading: t.isLoading
					}), {
						[E.a.isSelected]: t.isSelected
					}),
					onClick: t.onClick,
					ref: t.elementRef
				}, t.thumbnail.url && l.a.createElement(v, {
					src: t.thumbnail.url
				})),
				w = u.a.wrapped(b.a, "ButtonRow", E.a),
				R = h.i,
				_ = u.a.wrapped(h.l, "CancelButton", E.a),
				B = (t, e) => {
					if (1 === t) return [0];
					const n = c()(0, e, e / (t - 1));
					return n.push(e), n.map(t => +t.toFixed(2))
				};
			class I extends l.a.Component {
				constructor(t) {
					super(t), this.isThumbnailsAreGenerating = !1, this.setSelectedElementRef = t => this.selectedElement = t, this.setThumbnails = r()(t => this.setState({
						thumbnails: t
					}), 100), this.scrollIntoView = () => {
						this.selectedElement && this.selectedElement.scrollIntoView({})
					}, this.setSelected = t => {
						this.setState({
							selectedIndex: t
						})
					}, this.onSelectButton = () => {
						const {
							selectedIndex: t
						} = this.state, e = this.state.thumbnails[t];
						this.props.onSelect({
							time: e.time,
							url: e.url
						})
					};
					const {
						thumbnailsCount: e = x,
						selected: n,
						videoDuration: o
					} = this.props, s = B(e, o).map(t => ({
						time: t,
						url: n && n.time === t ? n.url : void 0
					})), i = n ? s.findIndex(t => n.time === t.time) : -1;
					this.state = {
						thumbnails: s,
						selectedIndex: i
					}
				}
				componentDidMount() {
					this.scrollIntoView(), this.props.isOpen && this.generateVideoThumbnails()
				}
				componentDidUpdate(t) {
					this.props.isOpen && !t.isOpen && (this.scrollIntoView(), this.generateVideoThumbnails())
				}
				async generateVideoThumbnails() {
					const {
						thumbnails: t
					} = this.state;
					if (this.isThumbnailsAreGenerating || !t.find(t => !t.url)) return;
					this.isThumbnailsAreGenerating = !0;
					const e = document.createElement("video"),
						n = document.createElement("canvas");
					await Object(m.n)(e, this.props.videoSource);
					let o = 0;
					e.currentTime = t[o].time, await Object(m.d)(e, n, e => (t[o].url = e.dataUrl, o++, this.setThumbnails(t), o < t.length ? t[o].time : null)), this.setState({
						thumbnails: t
					}), this.isThumbnailsAreGenerating = !1
				}
				render() {
					if (!this.props.isOpen) return null;
					const {
						selectedIndex: t,
						thumbnails: e
					} = this.state;
					return l.a.createElement(S, {
						withOverlay: !0
					}, l.a.createElement(C, null, o.fbt._("Choose thumbnail", null, {
						hk: "XlI0H"
					}), l.a.createElement(k, {
						onClick: this.props.onToggleModal
					}, l.a.createElement(O, null))), l.a.createElement(T, null, e.map((e, n) => l.a.createElement(j, {
						key: n,
						elementRef: n === t ? this.setSelectedElementRef : void 0,
						isLoading: !e.url,
						onClick: () => this.setSelected(n),
						isSelected: n === t,
						thumbnail: e
					}))), l.a.createElement(w, null, l.a.createElement(_, {
						onClick: this.props.onToggleModal
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), l.a.createElement(R, {
						onClick: this.onSelectButton
					}, o.fbt._("Select", null, {
						hk: "3s53WD"
					}))))
				}
			}
			e.a = I
		},
		"./src/reddit/controls/SubredditDropdown/index.m.less": function(t, e, n) {
			t.exports = {
				entry: "BR2J4z5ndMj6r3-QW2hHI",
				mIsFocused: "_2KXTnIrbZ1Fr5F4nZyXeKS",
				list: "_17g61LC45mhwjs-g79qbZK"
			}
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			})), n.d(e, "b", (function() {
				return i
			}));
			var o = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");
			const r = (t, e) => Object(s.a)(t, {
					method: "post",
					endpoint: `${o.a.metaUrl}/orders`,
					data: {
						price: "0",
						currency: "usd",
						products: [{
							productId: e.productId,
							quantity: "1"
						}],
						subredditId: e.subredditId
					}
				}),
				i = (t, e) => Object(s.a)(t, {
					method: "get",
					endpoint: `${o.a.metaUrl}/product-collections/${e}?types=emotes_pack`
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return l
			})), n.d(e, "b", (function() {
				return d
			})), n.d(e, "d", (function() {
				return u
			})), n.d(e, "e", (function() {
				return p
			})), n.d(e, "c", (function() {
				return h
			}));
			var o = n("./src/config.ts"),
				s = n("./src/lib/omitHeaders/index.ts"),
				r = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/endpoints/governance/requester.ts"),
				c = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				a = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function l(t, e) {
				return Object(i.a)(t, {
					endpoint: `${o.a.metaUrl}/communities/${e.subredditId}/me`,
					method: "patch",
					data: {
						specialMemberships: {
							settings: {
								renew: !1
							}
						}
					}
				})
			}

			function d(t, e) {
				return Object(i.a)(t, {
					endpoint: `${o.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: e && e.username
					}
				})
			}

			function u(t, e) {
				return Object(i.a)(t, {
					endpoint: `${o.a.metaUrl}/orders`,
					method: "post",
					data: {
						currency: "usd",
						orderTarget: "special_membership",
						price: e.trial ? "0" : e.price,
						products: [{
							productId: e.productId,
							quantity: "1"
						}],
						providerArgs: {
							paymentNonce: e.nonce,
							savePaymentMethod: !0
						},
						providerName: "braintree",
						subredditId: e.subredditId,
						targetArgs: {
							renew: !0,
							receiverName: e.username
						}
					}
				})
			}

			function p(t, e) {
				return Object(i.a)(Object(s.a)(t, [r.a]), {
					endpoint: `${t.apiUrl}/api/info?id=${e.join(",")}`,
					method: "get"
				}).then(t => {
					if (t.ok) {
						const e = t.body.data.children.map(({
							data: t
						}) => Object(a.a)(t)).reduce((t, e) => (t[e.id] = e, t), {});
						return {
							...t,
							body: e
						}
					}
					return t
				})
			}
			async function h(t, e) {
				const n = await Object(i.a)(t, {
					endpoint: `${o.a.metaUrl}/orders`,
					method: "post",
					data: {
						...e,
						currency: "points",
						orderTarget: "special_membership",
						products: [{
							productId: "provisional_membership",
							quantity: "1"
						}],
						targetArgs: {
							renew: !1
						}
					}
				});
				if (!n.ok) throw new Error(`Error fetching provisional membership: ${Object(c.b)(n.error)}`);
				return n.body
			}
		},
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return d
			})), n.d(e, "b", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/merge.js"),
				s = n.n(o),
				r = n("./src/config.ts"),
				i = n("./src/reddit/endpoints/governance/badges.ts"),
				c = n("./src/reddit/endpoints/governance/community.ts"),
				a = n("./src/reddit/endpoints/governance/products/badges.ts"),
				l = n("./src/reddit/endpoints/governance/requester.ts");
			async function d(t, e, n) {
				const o = {
						subredditId: e,
						badges: {},
						errors: {},
						collections: {},
						products: {},
						subscription: void 0,
						userOwnedBadges: []
					},
					d = function(t, e) {
						return Object(l.a)(t, {
							method: "get",
							endpoint: `${r.a.metaUrl}/product-collections/${e}?types=badge`
						})
					}(t, e),
					u = Object(c.a)(t, {
						subredditId: e
					}),
					p = Object(a.b)(t, e),
					h = Object(i.c)(t, e, n),
					[m, g, f, b] = await Promise.all([d, u, p, h]);
				if (m.ok ? o.collections = m.body : o.errors.collections = m.error, g.ok) {
					const t = g.body;
					o.subscription = t.specialMemberships, o.communityRaw = t
				}
				return f.ok ? o.products = f.body : o.errors.products = f.error, b.ok ? (s()(o.badges, b.body.badges), o.userOwnedBadges = b.body.userOwnedBadges) : o.errors.userBadges = b.error, o
			}
			const u = (t, e) => Object(l.a)(t, {
				endpoint: `${r.a.metaUrl}/products/${e}?types=badge,membership`,
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/community.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return i
			}));
			var o = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function i(t, e) {
				return Object(r.a)(t, {
					endpoint: `${o.a.metaUrl}/communities/${e.subredditId}/me`,
					method: s.cb.GET
				})
			}
		},
		"./src/reddit/helpers/richTextEditor/index.ts": function(t, e, n) {
			"use strict";
			var o;
			n.d(e, "a", (function() {
					return o
				})),
				function(t) {
					t[t.Post = 0] = "Post", t[t.Comment = 1] = "Comment"
				}(o || (o = {}))
		},
		"./src/reddit/icons/svgs/FormattingAlignCenter/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_1ZVHRoTDdo57082D2GcC80"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignCenter/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingAlignCenter/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, s.a.createElement("path", {
				d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM7.42 16h5.08c.55 0 1-.45 1-1s-.45-1-1-1H7.42c-.56 0-1 .45-1 1s.44 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingAlignLeft/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_33vXt91MK_ualpifvvw_3v"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignLeft/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingAlignLeft/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, s.a.createElement("path", {
				d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 16h5.4c.54 0 1-.45 1-1s-.46-1-1-1H3.5c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingAlignRight/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_34rYEsgbWk8eOQx_bs7fTV"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignRight/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingAlignRight/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, s.a.createElement("path", {
				d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM11.5 16h5c.55 0 1-.45 1-1s-.45-1-1-1h-5c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingBlockQuotes/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_32TQMV98QwoweVXtMHpwr2"
			}
		},
		"./src/reddit/icons/svgs/FormattingBlockQuotes/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingBlockQuotes/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				style: t.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("polygon", {
				points: "8.63 4 5.36 4 2 9.8 2 16 9.2 16 9.2 9.24 6.75 9.24 8.63 4"
			}), s.a.createElement("polygon", {
				points: "15.56 9.24 17.39 4 14.16 4 10.8 9.8 10.8 16 18 16 18 9.24 15.56 9.24"
			}))
		},
		"./src/reddit/icons/svgs/FormattingBold/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_1329vPT9OSGZyEvo6Fqss"
			}
		},
		"./src/reddit/icons/svgs/FormattingBold/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingBold/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				style: t.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M12.44,9.72v0a3.07,3.07,0,0,0,2.67-3.22c0-2.84-2.42-3.46-5-3.46H4.51V17H10.4c2.61,0,5.09-1,5.09-3.86C15.49,10.91,14.14,10,12.44,9.72ZM7.54,5.38H9.85c1.65,0,2.31.61,2.31,1.7s-.74,1.68-2.35,1.68H7.54ZM10,14.65H7.54V10.95H9.89c1.7,0,2.59.61,2.59,1.83S11.72,14.65,10,14.65Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingCodeBlock/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "F0bObcodUF6At5SPF9bIr"
			}
		},
		"./src/reddit/icons/svgs/FormattingCodeBlock/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingCodeBlock/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				style: t.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M15,2H13a1,1,0,0,0,0,2h2a1,1,0,0,1,1,1V15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a1,1,0,0,0-2,0v2a3,3,0,0,0,3,3H15a3,3,0,0,0,3-3V5A3,3,0,0,0,15,2Z"
			}), s.a.createElement("path", {
				d: "M2.79,5a.71.71,0,0,0,.53-.2.74.74,0,0,0,.19-.54V4.08l0-.48H5.07V8.4H4.9a1,1,0,0,0-.69.18A.79.79,0,0,0,4,9.2a.79.79,0,0,0,.21.61A1,1,0,0,0,4.9,10H7.1a1,1,0,0,0,.69-.19A.79.79,0,0,0,8,9.2a.78.78,0,0,0-.21-.61A1,1,0,0,0,7.1,8.4H6.93V3.6H8.44l0,.48a1.19,1.19,0,0,0,.18.72.7.7,0,0,0,.56.2.75.75,0,0,0,.59-.2A1,1,0,0,0,10,4.14V4.08L9.93,2.9q0-.64-.18-.77A1.06,1.06,0,0,0,9.11,2H2.89a1.06,1.06,0,0,0-.63.13q-.16.13-.18.77L2,4.08v.06a.94.94,0,0,0,.19.65A.78.78,0,0,0,2.79,5Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingDeleteRow/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_8Y1-XP7A1OOfoU_mUqKcg"
			}
		},
		"./src/reddit/icons/svgs/FormattingDeleteRow/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingDeleteRow/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero",
				transform: "vertical" === t.orientation ? "rotate(90, 10, 10)" : ""
			}, s.a.createElement("path", {
				d: "M3 3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3zM2 3v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2z"
			}), s.a.createElement("path", {
				d: "M2 15h16v1H2M2 4h16v1H2M7.17 11.4l4.24-4.23c.4-.4 1.04-.4 1.43 0 .4.4.4 1.03 0 1.42L8.6 12.82c-.4.4-1.04.4-1.43 0-.4-.4-.4-1.03 0-1.42z"
			}), s.a.createElement("path", {
				d: "M8.6 7.17l4.23 4.24c.4.4.4 1.04 0 1.43-.4.4-1.03.4-1.42 0L7.18 8.6c-.4-.4-.4-1.04 0-1.43.4-.4 1.03-.4 1.42 0z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingHeading/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_2C-VR7luDjfFqzNiJQEpk0"
			}
		},
		"./src/reddit/icons/svgs/FormattingHeading/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingHeading/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				style: t.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("polygon", {
				points: "6.57 3 6.57 5.57 10.73 5.57 10.73 17 13.82 17 13.82 5.57 18 5.57 18 3 6.57 3"
			}), s.a.createElement("polygon", {
				points: "2 9.65 4.68 9.65 4.68 17 6.66 17 6.66 9.65 9.35 9.65 9.35 8 2 8 2 9.65"
			}))
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_2-0pxD6-cM6bWeb73TNNhJ"
			}
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingHyperlink/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M17.15,2.86a6.33,6.33,0,1,0-9,9A1,1,0,0,0,9.6,10.4a4.39,4.39,0,1,1,4.92.83,7.41,7.41,0,0,1,.14,1.44c0,.23,0,.46,0,.68a6.33,6.33,0,0,0,2.51-10.5Z"
			}), s.a.createElement("path", {
				d: "M10.4,8.19a1,1,0,0,0,0,1.41,4.39,4.39,0,1,1-4.92-.83,7.41,7.41,0,0,1-.14-1.44c0-.23,0-.46,0-.68a6.33,6.33,0,1,0,6.44,1.54A1,1,0,0,0,10.4,8.19Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingInsertRow/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_1PNKgIKbpvIWTVU3LO0PJQ"
			}
		},
		"./src/reddit/icons/svgs/FormattingInsertRow/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingInsertRow/index.m.less"),
				c = n.n(i);
			const a = {
				up: "rotate(180 10 10)",
				down: "",
				left: "rotate(90 10 10)",
				right: "rotate(-90 10 10)"
			};
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero",
				transform: a[t.orientation || "down"]
			}, s.a.createElement("path", {
				d: "M17 17c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v14zm1 0V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2z"
			}), s.a.createElement("path", {
				d: "M18 6H2V5h16M13 13H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1z"
			}), s.a.createElement("path", {
				d: "M9 15V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingItalics/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_32WqBD1jOzjyQPJdFZ8Rrt"
			}
		},
		"./src/reddit/icons/svgs/FormattingItalics/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingItalics/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				style: t.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("polygon", {
				points: "7.24 17 10.3 17 12.1 6.85 9.05 6.85 7.24 17"
			}), s.a.createElement("polygon", {
				points: "9.7 3 9.28 5.46 12.34 5.46 12.76 3 9.7 3"
			}))
		},
		"./src/reddit/icons/svgs/FormattingMonospace/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_1cI-FoGkiT7RNcT2BsWaRU"
			}
		},
		"./src/reddit/icons/svgs/FormattingMonospace/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingMonospace/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				style: t.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M18.8,9.4l-3-4a1,1,0,1,0-1.6,1.2L16.75,10,14.2,13.4a1,1,0,1,0,1.6,1.2l3-4A1,1,0,0,0,18.8,9.4Z"
			}), s.a.createElement("path", {
				d: "M5.6,5.2a1,1,0,0,0-1.4.2l-3,4a1,1,0,0,0,0,1.2l3,4a1,1,0,0,0,1.6-1.2L3.25,10,5.8,6.6A1,1,0,0,0,5.6,5.2Z"
			}), s.a.createElement("path", {
				d: "M12.24,1A1,1,0,0,0,11,1.76l-4,16A1,1,0,1,0,9,18.24l4-16A1,1,0,0,0,12.24,1Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingSpoiler/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_1KIFUYxvtUxuRVhS-FGTns"
			}
		},
		"./src/reddit/icons/svgs/FormattingSpoiler/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingSpoiler/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				style: t.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M10,1.5A8.5,8.5,0,1,0,18.5,10,8.51,8.51,0,0,0,10,1.5Zm.71,13-.15.12-.18.1-.18.05a.73.73,0,0,1-.2,0,1,1,0,0,1-.71-.29,1,1,0,0,1-.21-.32A1,1,0,0,1,9,13.83a1,1,0,0,1,.08-.38,1,1,0,0,1,.21-.32,1,1,0,0,1,.91-.28l.18.06.18.09.15.13a1,1,0,0,1,.29.7A1,1,0,0,1,10.71,14.54Zm-.22-3.6a.5.5,0,0,1-1,0l-1-4.67A.5.5,0,0,1,9,5.67h2a.5.5,0,0,1,.49.6Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingStrikethrough/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_3C1w798INaJPgFxfklr4an"
			}
		},
		"./src/reddit/icons/svgs/FormattingStrikethrough/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingStrikethrough/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				style: t.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M11.86,12a1.36,1.36,0,0,1,.7,1.19c0,1.07-1,1.59-2.42,1.59a4.12,4.12,0,0,1-3.75-2.36L4.08,13.79A6.21,6.21,0,0,0,10,17.2c3.86,0,5.55-2,5.55-4.22a4,4,0,0,0-.12-1Z"
			}), s.a.createElement("path", {
				d: "M17,9H11.61l-1.09-.31c-1.82-.51-2.85-.9-2.85-2,0-.82.71-1.39,2-1.39a4.13,4.13,0,0,1,3.41,2L15.2,5.65A6.23,6.23,0,0,0,9.69,2.8c-3,0-5,1.56-5,4.14A3.31,3.31,0,0,0,5.31,9H3a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingSuperscript/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_1DvEfZosXHE4A0gHsGOjEU"
			}
		},
		"./src/reddit/icons/svgs/FormattingSuperscript/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingSuperscript/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				style: t.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M6.94,3,2,17H4.83L5.9,13.89h4.75l1,3.11h3.11L9.86,3Zm-.28,8.67L8.29,6.92h0l1.6,4.75Z"
			}), s.a.createElement("path", {
				d: "M16.06,3H14.92L13,8.49h1.11l.42-1.22h1.86l.41,1.22H18ZM14.81,6.4l.64-1.86h0l.63,1.86Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingTable/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_12fGjUaA4qUfdUrX7rnmTK"
			}
		},
		"./src/reddit/icons/svgs/FormattingTable/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingTable/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M17,2H3A1,1,0,0,0,2,3V17a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V3A1,1,0,0,0,17,2ZM4,6H9V9.8H4Zm7,0h5V9.8H11ZM4,11.8H9V16H4ZM11,16V11.8h5V16Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingUnorderedList/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "LfxAZX1Sm9aiJZiizUSZO"
			}
		},
		"./src/reddit/icons/svgs/FormattingUnorderedList/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingUnorderedList/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				style: t.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M17,9H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), s.a.createElement("path", {
				d: "M17,15H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), s.a.createElement("path", {
				d: "M8,5h9a1,1,0,0,0,0-2H8A1,1,0,0,0,8,5Z"
			}), s.a.createElement("path", {
				d: "M4.88,9.43a1.29,1.29,0,0,0-.13-.26,2.17,2.17,0,0,0-.19-.23,1.55,1.55,0,0,0-2.12,0,2.16,2.16,0,0,0-.19.23,2.2,2.2,0,0,0-.14.26A2.3,2.3,0,0,0,2,9.71,1.32,1.32,0,0,0,2,10a1.5,1.5,0,0,0,1.5,1.5,1.55,1.55,0,0,0,.57-.11A1.52,1.52,0,0,0,5,10a1.32,1.32,0,0,0,0-.29A1.27,1.27,0,0,0,4.88,9.43Z"
			}), s.a.createElement("path", {
				d: "M4.33,14.75l-.26-.14-.28-.08a1.42,1.42,0,0,0-.58,0l-.28.08-.26.14a2.16,2.16,0,0,0-.23.19A1.52,1.52,0,0,0,2,16a1.47,1.47,0,0,0,.44,1.06,1.52,1.52,0,0,0,.49.33,1.53,1.53,0,0,0,1.14,0,1.61,1.61,0,0,0,.49-.33A1.52,1.52,0,0,0,5,16a1.5,1.5,0,0,0-.44-1.06A2.06,2.06,0,0,0,4.33,14.75Z"
			}), s.a.createElement("path", {
				d: "M2.44,2.94A1.52,1.52,0,0,0,2,4a1.47,1.47,0,0,0,.44,1.06,1.59,1.59,0,0,0,.48.33,1.65,1.65,0,0,0,.58.11,1.55,1.55,0,0,0,.57-.11,1.5,1.5,0,0,0,.49-.33,1.5,1.5,0,0,0,0-2.12A1.55,1.55,0,0,0,2.44,2.94Z"
			}))
		},
		"./src/reddit/icons/svgs/ImagePost/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_1pAYDrDlDFEJk994qhxbYj"
			}
		},
		"./src/reddit/icons/svgs/ImagePost/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/ImagePost/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2Zm0,14H10.14a.49.49,0,0,1,.05-.48l3.15-4.26a.5.5,0,0,1,.38-.2.53.53,0,0,1,.4.17L16,13.35ZM4,13.51,7.26,8.82a.54.54,0,0,1,.42-.21.5.5,0,0,1,.41.23l2.85,4.34L8.84,16H4Zm10.4-7.1a1.7,1.7,0,1,1-1.7-1.7A1.7,1.7,0,0,1,14.4,6.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Send/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			e.a = t => s.a.createElement("svg", {
				className: t.className,
				id: t.id,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M17.98 8.87c-.012-.093-.03-.182-.062-.27-.017-.043-.034-.085-.055-.126-.013-.026-.02-.057-.034-.082l-.07-.1c-.018-.02-.04-.03-.055-.046-.073-.083-.158-.145-.252-.204-.032-.02-.053-.055-.088-.072L3.88 1.12c-.35-.176-.764-.158-1.096.05-.332.208-.534.576-.534.973V5c0 .507.33.954.81 1.097L9 7.857H3.375c-.175 0-.347.04-.503.12L.622 9.12c-.48.243-.724.8-.582 1.325.135.5.582.84 1.085.84.027 0 .054 0 .08-.003l1.045-.075v4.65c0 .396.202.764.534.972.18.112.386.17.59.17.173 0 .346-.04.505-.12l13.483-6.85c.08-.044.134-.075.184-.113.05-.038.092-.085.136-.13.012-.013.026-.022.037-.036.092-.107.147-.21.19-.32.013-.03.02-.06.03-.09.013-.045.033-.086.042-.132.008-.046.013-.09.017-.138 0-.023-.008-.043-.008-.063 0-.017.008-.03.008-.048 0-.032-.017-.058-.02-.09z"
			})))
		},
		"./src/reddit/icons/svgs/ThumbnailSelect/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_3QNLLzw_kUPhkWkxg22tT9"
			}
		},
		"./src/reddit/icons/svgs/ThumbnailSelect/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/ThumbnailSelect/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("path", {
				d: "M0 0h20v20H0z"
			}), s.a.createElement("path", {
				fill: "#A5A4A4",
				d: "M6 3h8c1.1046 0 2 .8954 2 2v10c0 1.1046-.8954 2-2 2H6c-1.1046 0-2-.8954-2-2V5c0-1.1046.8954-2 2-2zm11 1c1.1046 0 2 .8954 2 2v8c0 1.1046-.8954 2-2 2V4zM3 4v12h-.6667C1.597 16 1 15.1734 1 14.1538V5.8462C1 4.8266 1.597 4 2.3333 4H3z"
			})))
		},
		"./src/reddit/icons/svgs/Video/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			e.a = t => s.a.createElement("svg", {
				className: t.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("g", {
				transform: "translate(3, 4)"
			}, s.a.createElement("path", {
				d: "M15.4927,2.1514 C15.1797,1.9734 14.7947,1.9784 14.4857,2.1644 L11.9997,3.6554 L11.9997,2.0004 C11.9997,0.8974 11.1027,0.0004 9.9997,0.0004 L1.9997,0.0004 C0.8967,0.0004 -0.0003,0.8974 -0.0003,2.0004 L-0.0003,10.0004 C-0.0003,11.1034 0.8967,12.0004 1.9997,12.0004 L9.9997,12.0004 C11.1027,12.0004 11.9997,11.1034 11.9997,10.0004 L11.9997,8.3664 L14.4907,9.8394 C14.6477,9.9324 14.8237,9.9784 14.9997,9.9784 C15.1707,9.9784 15.3417,9.9344 15.4957,9.8474 C15.8077,9.6694 15.9997,9.3384 15.9997,8.9784 L15.9997,3.0214 C15.9997,2.6614 15.8057,2.3284 15.4927,2.1514"
			})))
		},
		"./src/reddit/selectors/editorContent.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			}));
			var o = n("./src/reddit/actions/postCreation/constants.ts");
			const s = (t, e) => t.creations.api.editor.converting.pending[e || o.k]
		},
		"./src/reddit/selectors/experiments/econ/customEmojis.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const r = Object(s.a)(o.ub)
		},
		"./src/reddit/selectors/gold/enabledFeatures.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return a
			})), n.d(e, "a", (function() {
				return l
			})), n.d(e, "c", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/featureFlags/index.ts"),
				r = n("./src/reddit/selectors/economics.ts"),
				i = n("./src/reddit/selectors/experiments/econ/customEmojis.ts"),
				c = n("./src/reddit/selectors/gold/powerups.ts");
			const a = Object(o.a)(s.d.spEmotes, c.n, r.b, c.f, (t, {
					subredditId: e
				}) => {
					var n;
					return e && (null === (n = t.subreddits.about[e]) || void 0 === n ? void 0 : n.userIsSubscriber) || !1
				}, i.a, (t, e, n, o, s, r) => {
					if (o && s && r) return !0;
					if (e) return !0;
					const i = !(!n || !Object.keys(n).length);
					return t && i
				}),
				l = Object(o.a)(r.b, c.g, c.h, c.f, i.a, (t, e, n, o, s) => {
					if (s && o) return [...e, ...n].slice(0, 3);
					let r = [];
					for (const i of t || [])
						if ((r = [...r, ...Object.values(i.emotes)]).length > 3) break;
					return r.slice(0, 3)
				}),
				d = Object(o.a)(s.d.spGiphy, c.o, (t, e) => t || e)
		},
		"./src/reddit/selectors/products.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			})), n.d(e, "b", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/models/Product/index.ts");
			const s = (t, e) => {
					const n = t.products.models[e];
					if (n && n.type === o.a.Badge) return n
				},
				r = (t, {
					productId: e
				}) => {
					const n = t.products.models[e];
					if (n) {
						const o = n.subredditId,
							s = Object.keys(t.user.ownedBadges[o] || {}),
							r = t.badges.models,
							i = Date.now();
						let c = !1;
						return s.forEach(t => {
							const n = r[t];
							n && n.type === e && n.endsAt > i && (c = !0)
						}), c
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor.4f8ea958aa7e135b3ecb.js.map
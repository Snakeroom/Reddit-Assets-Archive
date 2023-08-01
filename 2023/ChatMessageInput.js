// https://www.redditstatic.com/desktop2x/ChatMessageInput.dff65504c8394fa4a99f.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatMessageInput"], {
		"./node_modules/lodash/_arrayReduceRight.js": function(e, t) {
			e.exports = function(e, t, s, o) {
				var n = null == e ? 0 : e.length;
				for (o && n && (s = e[--n]); n--;) s = t(s, e[n], n, e);
				return s
			}
		},
		"./node_modules/lodash/_baseEachRight.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseForOwnRight.js"),
				n = s("./node_modules/lodash/_createBaseEach.js")(o, !0);
			e.exports = n
		},
		"./node_modules/lodash/_baseExtremum.js": function(e, t, s) {
			var o = s("./node_modules/lodash/isSymbol.js");
			e.exports = function(e, t, s) {
				for (var n = -1, a = e.length; ++n < a;) {
					var r = e[n],
						i = t(r);
					if (null != i && (void 0 === d ? i == i && !o(i) : s(i, d))) var d = i,
						c = r
				}
				return c
			}
		},
		"./node_modules/lodash/_baseFilter.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var s = [];
				return o(e, (function(e, o, n) {
					t(e, o, n) && s.push(e)
				})), s
			}
		},
		"./node_modules/lodash/_baseForOwnRight.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseForRight.js"),
				n = s("./node_modules/lodash/keys.js");
			e.exports = function(e, t) {
				return e && o(e, t, n)
			}
		},
		"./node_modules/lodash/_baseForRight.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_createBaseFor.js")(!0);
			e.exports = o
		},
		"./node_modules/lodash/_baseGt.js": function(e, t) {
			e.exports = function(e, t) {
				return e > t
			}
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var s = Math.ceil,
				o = Math.max;
			e.exports = function(e, t, n, a) {
				for (var r = -1, i = o(s((t - e) / (n || 1)), 0), d = Array(i); i--;) d[a ? i : ++r] = e, e += n;
				return d
			}
		},
		"./node_modules/lodash/_baseWhile.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseSlice.js");
			e.exports = function(e, t, s, n) {
				for (var a = e.length, r = n ? a : -1;
					(n ? r-- : ++r < a) && t(e[r], r, e););
				return s ? o(e, n ? 0 : r, n ? r + 1 : a) : o(e, n ? r + 1 : 0, n ? a : r)
			}
		},
		"./node_modules/lodash/_charsEndIndex.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseIndexOf.js");
			e.exports = function(e, t) {
				for (var s = e.length; s-- && o(t, e[s], 0) > -1;);
				return s
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseRange.js"),
				n = s("./node_modules/lodash/_isIterateeCall.js"),
				a = s("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, s, r) {
					return r && "number" != typeof r && n(t, s, r) && (s = r = void 0), t = a(t), void 0 === s ? (s = t, t = 0) : s = a(s), r = void 0 === r ? t < s ? 1 : -1 : a(r), o(t, s, r, e)
				}
			}
		},
		"./node_modules/lodash/_escapeHtmlChar.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_basePropertyOf.js")({
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;"
			});
			e.exports = o
		},
		"./node_modules/lodash/chunk.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseSlice.js"),
				n = s("./node_modules/lodash/_isIterateeCall.js"),
				a = s("./node_modules/lodash/toInteger.js"),
				r = Math.ceil,
				i = Math.max;
			e.exports = function(e, t, s) {
				t = (s ? n(e, t, s) : void 0 === t) ? 1 : i(a(t), 0);
				var d = null == e ? 0 : e.length;
				if (!d || t < 1) return [];
				for (var c = 0, l = 0, m = Array(r(d / t)); c < d;) m[l++] = o(e, c, c += t);
				return m
			}
		},
		"./node_modules/lodash/dropRightWhile.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseIteratee.js"),
				n = s("./node_modules/lodash/_baseWhile.js");
			e.exports = function(e, t) {
				return e && e.length ? n(e, o(t, 3), !0, !0) : []
			}
		},
		"./node_modules/lodash/escape.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_escapeHtmlChar.js"),
				n = s("./node_modules/lodash/toString.js"),
				a = /[&<>"']/g,
				r = RegExp(a.source);
			e.exports = function(e) {
				return (e = n(e)) && r.test(e) ? e.replace(a, o) : e
			}
		},
		"./node_modules/lodash/filter.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_arrayFilter.js"),
				n = s("./node_modules/lodash/_baseFilter.js"),
				a = s("./node_modules/lodash/_baseIteratee.js"),
				r = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (r(e) ? o : n)(e, a(t, 3))
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseFlatten.js"),
				n = s("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return o(n(e, t), 1)
			}
		},
		"./node_modules/lodash/includes.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseIndexOf.js"),
				n = s("./node_modules/lodash/isArrayLike.js"),
				a = s("./node_modules/lodash/isString.js"),
				r = s("./node_modules/lodash/toInteger.js"),
				i = s("./node_modules/lodash/values.js"),
				d = Math.max;
			e.exports = function(e, t, s, c) {
				e = n(e) ? e : i(e), s = s && !c ? r(s) : 0;
				var l = e.length;
				return s < 0 && (s = d(l + s, 0)), a(e) ? s <= l && e.indexOf(t, s) > -1 : !!l && o(e, t, s) > -1
			}
		},
		"./node_modules/lodash/maxBy.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseExtremum.js"),
				n = s("./node_modules/lodash/_baseGt.js"),
				a = s("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return e && e.length ? o(e, a(t, 2), n) : void 0
			}
		},
		"./node_modules/lodash/range.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_createRange.js")();
			e.exports = o
		},
		"./node_modules/lodash/reduceRight.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_arrayReduceRight.js"),
				n = s("./node_modules/lodash/_baseEachRight.js"),
				a = s("./node_modules/lodash/_baseIteratee.js"),
				r = s("./node_modules/lodash/_baseReduce.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var d = i(e) ? o : r,
					c = arguments.length < 3;
				return d(e, a(t, 4), s, c, n)
			}
		},
		"./node_modules/lodash/takeWhile.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseIteratee.js"),
				n = s("./node_modules/lodash/_baseWhile.js");
			e.exports = function(e, t) {
				return e && e.length ? n(e, o(t, 3)) : []
			}
		},
		"./node_modules/lodash/trimEnd.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseToString.js"),
				n = s("./node_modules/lodash/_castSlice.js"),
				a = s("./node_modules/lodash/_charsEndIndex.js"),
				r = s("./node_modules/lodash/_stringToArray.js"),
				i = s("./node_modules/lodash/toString.js"),
				d = s("./node_modules/lodash/_trimmedEndIndex.js");
			e.exports = function(e, t, s) {
				if ((e = i(e)) && (s || void 0 === t)) return e.slice(0, d(e) + 1);
				if (!e || !(t = o(t))) return e;
				var c = r(e),
					l = a(c, r(t)) + 1;
				return n(c, 0, l).join("")
			}
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return u
			}));
			var o = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeRequest/index.ts"),
				a = s("./src/config.ts"),
				r = s("./src/reddit/endpoints/governance/requester.ts");
			var i = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/reddit/actions/economics/me/constants.ts");
			const c = Object(i.a)(d.a),
				l = Object(i.a)(d.b),
				m = Object(i.a)(d.c),
				h = e => async (t, s, o) => {
					let {
						apiContext: n
					} = o;
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
						}(n(), i);
						if (e.ok) {
							const s = e.body;
							i && !s.specialMemberships && (s.specialMemberships = {}), t(c(s))
						}
					}
				}, u = () => async (e, t) => {
					const s = t(),
						a = s.economics.me.data;
					if (!a) throw new Error("me data required for copy to be fetched");
					if (!s.economics.pointsCopy.fetched) {
						e(l());
						const t = `https://${a.pointsDocsBaseUrl}v1.json?web`,
							s = await Object(n.b)({
								endpoint: t,
								method: o.nb.GET
							});
						s.ok && s.body && e(m(s.body))
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/lessComponent.tsx"),
				d = s("./src/config.ts"),
				c = s("./node_modules/lodash/memoize.js"),
				l = s.n(c),
				m = s("./src/lib/constants/index.ts"),
				h = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				u = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				p = s.n(u);
			const C = i.a.div("Userpic", p.a);
			var b = l()(e => {
					let {
						defaultImage: t,
						userId: s
					} = e;
					const {
						processingAvatarImageUrl: o
					} = d.a, a = (e => e.replace(m.Nb.Account + "_", ""))(s), {
						avatar: r,
						color: i
					} = (e => {
						const t = h.length,
							s = parseInt(e, 36),
							o = s % 20 + 1,
							n = Math.floor(s / 20) % t;
						return {
							avatar: ("0" + o).slice(-2),
							color: h[n]
						}
					})(a), c = `${o}/avatar_default_${r}_${i}.png`;
					return n.a.createElement(C, {
						"data-testid": "old-default-icon",
						style: {
							backgroundImage: `url(${c})`,
							backgroundColor: `#${i}`
						}
					})
				}),
				_ = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				f = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				x = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				g = s("./src/reddit/icons/svgs/Remove/index.tsx");
			const v = Object(r.c)({
					account: e => e.user.account
				}),
				j = Object(a.b)(v);
			t.a = i.a.wrapped(j(e => {
				let {
					account: t,
					className: s,
					height: o,
					icon: a,
					isNSFW: r,
					trash: i,
					userId: d,
					width: c
				} = e;
				const l = d || `${null==t?void 0:t.id}`,
					m = {
						height: o || 20,
						width: c || 20,
						minWidth: c || 20
					};
				if (i) return n.a.createElement("div", {
					className: s,
					style: m
				}, n.a.createElement(g.a, {
					className: p.a.TrashIcon
				}));
				const h = t && t.id === d ? t.accountIcon : r ? f.a : null != a ? a : void 0;
				return Object(x.a)(h) ? n.a.createElement("div", {
					className: s,
					style: m
				}, n.a.createElement(_.a, {
					headshot: h
				})) : n.a.createElement("div", {
					className: s,
					style: m
				}, n.a.createElement(b, {
					userId: l,
					defaultImage: h
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
				return h
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				d = s("./src/reddit/icons/svgs/Trash3/index.tsx"),
				c = s("./src/reddit/components/CommentsChat/Comment/DeletedComment/index.m.less"),
				l = s.n(c);
			const m = e => {
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
					}, o.fbt._("deleted", null, {
						hk: "3NxJy9"
					})))
				},
				h = () => a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: l.a.icon
				}, a.a.createElement(d.a, null)), a.a.createElement("span", {
					className: l.a.label
				}, o.fbt._("This message was deleted", null, {
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
				return L
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/CommentsChat/Comment/DeletedComment/index.tsx"),
				c = s("./src/reddit/components/RichTextJson/index.tsx"),
				l = s("./src/reddit/components/RichTextJson/elements.tsx"),
				m = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				h = s("./src/reddit/models/RichTextJson/index.ts");
			const u = e => a.a.createElement(l.f, null, e),
				p = e => {
					const t = [],
						s = e.c || [],
						o = s.length;
					for (let n = 0; n < o; n++) {
						const e = s[n];
						t.push(e.e === h.y ? e.t : Object(m.e)(e, {}, n))
					}
					return a.a.createElement(a.a.Fragment, null, t)
				},
				C = e => e.c && e.c.length ? a.a.createElement(a.a.Fragment, null, Object(m.i)({
					nodes: e.c,
					mediaMetadata: null,
					rtJsonElementProps: {}
				})) : a.a.createElement("br", null);
			var b = s("./src/reddit/constants/elementClassNames.ts");
			const _ = {
				[h.a]: "<animated image>",
				[h.b]: "<quote>",
				[h.c]: "<code block>",
				[h.i]: "<embed>",
				[h.n]: "<image>",
				[h.q]: "<list>",
				[h.B]: "<table>",
				[h.F]: "<video>"
			};
			var f = e => {
					let {
						className: t,
						content: s
					} = e;
					const o = s.document,
						n = [],
						r = Object(c.c)(o),
						d = Object(c.d)(o);
					if (-1 !== r)
						for (let a = r; a <= d; a++) {
							const e = o[a],
								t = e && _[e.e];
							switch (e.e) {
								case h.m:
									break;
								case h.b:
								case h.c:
								case h.q:
								case h.B:
								case h.n:
								case h.a:
								case h.F:
								case h.i:
									n.push(u(t));
									break;
								case h.l:
									n.push(p(e));
									break;
								case h.w:
									n.push(C(e))
							}
						}
					return a.a.createElement("div", {
						className: Object(i.a)(b.j, t)
					}, n)
				},
				x = s("./src/reddit/components/UserIcon/index.tsx"),
				g = s("./src/reddit/helpers/dom/index.ts"),
				v = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				j = s("./src/reddit/icons/svgs/CloseV2/index.tsx"),
				E = s("./src/reddit/selectors/comments.ts"),
				I = s("./src/reddit/selectors/commentSelector.ts"),
				T = s("./src/reddit/components/CommentsChat/Comment/Reply/index.m.less"),
				y = s.n(T);
			const L = e => {
				let {
					commentId: t,
					className: s,
					isV2Enabled: n = !1,
					isMessageComposer: c = !1,
					onReplyClick: l
				} = e;
				const m = Object(r.e)(e => Object(I.c)(e, {
						commentId: t
					})),
					h = Object(r.e)(e => Object(E.m)(e, {
						commentId: t
					}));
				return m ? m.isDeleted ? a.a.createElement("div", {
					className: Object(i.a)(y.a.container, y.a.isDeleted, s)
				}, a.a.createElement(d.b, {
					isV2Enabled: n
				})) : a.a.createElement("a", {
					className: Object(i.a)(y.a.container, s, {
						[y.a.messageComposer]: c
					}),
					href: h,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: Object(g.g)(() => l(m.id))
				}, a.a.createElement(x.a, {
					className: Object(i.a)(y.a.userIcon),
					iconUrl: m.profileImage || m.authorIconImage,
					userName: m.author,
					isNSFW: Boolean(m.profileOver18 || m.authorIconIsNSFW)
				}), a.a.createElement("span", {
					className: y.a.author
				}, c ? o.fbt._("Replying to u/{username}:", [o.fbt._param("username", m.author)], {
					hk: "15ByZb"
				}) : m.author), a.a.createElement(f, {
					className: y.a.commentBody,
					content: Object(v.a)(m)
				}), c && a.a.createElement(j.a, {
					className: y.a.closeIcon
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/noop.js"),
				a = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/models/PostDraft/index.ts"),
				h = s("./src/reddit/actions/chat/liveChatTooltipShowState.ts"),
				u = s("./src/reddit/actions/comment/authoring.ts"),
				p = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				C = s("./src/reddit/components/CommentsChat/Comment/Reply/index.tsx");
			const b = e => {
				let {
					durationSec: t,
					onTimeout: s
				} = e;
				const [o, n] = Object(r.useState)(t);
				Object(r.useEffect)(() => {
					if (o <= 0) return void s();
					const e = setTimeout(() => n(o - 1), 1e3);
					return () => clearTimeout(e)
				}, [o, s]);
				const a = Math.floor(o / 60),
					d = o - 60 * a;
				return i.a.createElement("span", {
					"data-testid": "inline-timer-text"
				}, a, ":", d > 9 ? d : `0${d}`)
			};
			var _ = s("./src/reddit/components/RichTextEditor/index.tsx"),
				f = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				x = s("./src/reddit/constants/chat.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/helpers/richTextEditor/index.ts"),
				j = s("./src/reddit/icons/fonts/Clock/index.tsx"),
				E = s("./src/reddit/icons/svgs/Close/index.tsx"),
				I = s("./src/reddit/icons/svgs/Send/index.tsx"),
				T = s("./src/reddit/icons/svgs/Send2/index.tsx"),
				y = s("./src/reddit/models/Post/index.ts"),
				L = s("./src/reddit/models/PostCreationForm/index.ts"),
				O = s("./src/reddit/selectors/chatPost.ts"),
				w = s("./src/reddit/selectors/comments.ts"),
				S = s("./src/reddit/selectors/posts.ts"),
				N = s("./src/reddit/selectors/user.ts"),
				F = s("./src/lib/constants/index.ts"),
				A = s("./src/lib/makeGqlRequest/index.ts"),
				D = s("./src/redditGQL/operations/CreateLiveChatAssociation.json");
			var R = s("./src/reddit/components/CommentsChat/MessageInput/index.m.less"),
				M = s.n(R),
				P = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/helpers/chat/isEmbeddedLiveChat.ts"),
				B = s("./src/reddit/helpers/trackers/commentsChat.ts"),
				U = s("./src/reddit/selectors/experiments/chat.ts"),
				H = s("./src/redditGQL/types.ts");
			const K = "chat_submission_from_rte",
				q = 15,
				W = 15e3,
				V = Object(P.v)(),
				z = Object(d.b)(() => Object(c.c)({
					draft: w.i,
					errorMsgs: w.M,
					errorType: w.N,
					hasError: w.v,
					isChatPost: O.d,
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					post: S.F,
					isLiveChatInChatTabEnabled: U.b,
					currentUserId: N.k,
					isTalkPost: Object(c.a)(S.F, e => Object(y.x)(e)),
					isLiveChatThreadingEnabled: U.d
				}), (e, t) => {
					let {
						isEditing: s,
						comment: o,
						commentsPageKey: n,
						draftKey: a,
						postId: r,
						replyComment: i,
						scrollToBottom: d
					} = t;
					return {
						dispatchSubmit: async (t, i, c, l) => {
							s && o ? await e(Object(u.j)({
								id: o.id,
								commentsPageKey: n,
								draftKey: a,
								formData: t
							})) : c ? e(Object(u.o)({
								commentsPageKey: n,
								draftKey: a,
								parentCommentDepth: c.depth,
								parentCommentId: c.id,
								formData: t,
								editorMode: i
							})) : await e(Object(u.q)({
								postId: r,
								commentsPageKey: n,
								draftKey: a,
								formData: t,
								editorMode: i,
								disableAutofocus: !0
							})), d && d()
						},
						onCancelEdit: () => o && e(Object(u.d)({
							commentId: o.id,
							commentsPageKey: n
						})),
						closeReply: () => i && e(Object(u.b)({
							parentCommentId: i.id,
							commentsPageKey: n
						})),
						clearSubmitError: t => e(Object(u.a)({
							draftKey: t
						})),
						createChatTabAssociation: t => e((e => (t, s, o) => {
							let {
								gqlContext: n
							} = o;
							return Object(A.a)(n(), {
								...D,
								variables: {
									input: e
								}
							})
						})(t)),
						setLiveChatTooltipShowState: (t, s) => e(Object(h.b)(t, s))
					}
				});
			class Z extends i.a.Component {
				constructor(e) {
					super(e), this.showLiveChatTooltipIfCreatedAssociation = () => {
						this.props.currentUserId && this.state.hasCreatedLiveChatAssociation && this.props.setLiveChatTooltipShowState(x.c.IS_SHOWING, this.props.currentUserId)
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
							sendEvent: o
						} = this.props;
						if (this.canSubmit()) {
							const o = {
								commentMode: L.i.RICH_TEXT,
								draftType: m.c.replyToComment,
								rteState: this.state.rteState,
								hasFocus: !0,
								text: ""
							};
							this.cleanInputForm(), s(o, L.i.RICH_TEXT, e, t), setTimeout(() => this.focusOnForm(), 50), this.isAllowedToCreateLiveChatAssociation() && this.associationTimerId && !this.state.messageSent && (this.props.createChatTabAssociation({
								postId: this.props.postId,
								engagementType: H.q.Participated
							}), clearTimeout(this.associationTimerId), this.setState({
								messageSent: !0,
								hasCreatedLiveChatAssociation: !0
							}))
						}
						e && (o(Object(B.d)(e.id)), t && o(Object(B.j)(e.id)))
					}, this.canSubmit = () => Boolean(!this.props.pending && this.state.hasChanged && !this.state.showError && !this.state.spamTimeoutDraftKey), this.state = {
						hasChanged: !1,
						showError: e.hasError,
						rteState: e.isEditing && e.comment ? f.a.createInitial(e.comment.media.richtextContent) : f.a.createInitial(),
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
							engagementType: H.q.Previewed
						}), this.setState({
							hasCreatedLiveChatAssociation: !0
						})
					}, W), window.addEventListener("beforeunload", this.showLiveChatTooltipIfCreatedAssociation))
				}
				UNSAFE_componentWillReceiveProps(e) {
					!this.props.isEditing && this.props.draft && this.props.draft.rteState && e.draft && null === e.draft.rteState && this.cleanInputForm(), this.isReplyCommentChanged(e) && e.replyComment && this.focusOnForm(), e.hasError !== this.props.hasError && this.setState({
						showError: e.hasError
					})
				}
				componentDidUpdate(e) {
					e.pending && !this.props.pending && this.focusOnForm(), this.props.isChatPost && this.props.errorType === F.J.RATELIMIT && e.errorType !== this.props.errorType && (this.props.sendEvent(Object(B.e)(this.props.postId)), this.setState({
						spamTimeoutDraftKey: this.props.draftKey
					}))
				}
				componentWillUnmount() {
					this.state.spamTimeoutDraftKey && this.props.sendEvent(Object(B.a)(this.props.postId)), this.isAllowedToCreateLiveChatAssociation() && (this.showLiveChatTooltipIfCreatedAssociation(), this.associationTimerId && clearTimeout(this.associationTimerId), window.removeEventListener("beforeunload", this.showLiveChatTooltipIfCreatedAssociation))
				}
				isAllowedToCreateLiveChatAssociation() {
					return this.props.isLiveChatInChatTabEnabled && !this.props.isTalkPost
				}
				isEmbeddedLiveChat() {
					return this.props.pageLayer && Object(k.b)(this.props.pageLayer)
				}
				cleanInputForm() {
					this.setState({
						rteState: f.a.createInitial()
					})
				}
				render() {
					var e;
					const {
						isV2: t,
						closeReply: s,
						errorMsgs: n,
						errorType: r,
						isEditing: d,
						pending: c,
						replyComment: m,
						isEmbeddedLiveChat: h,
						isLiveChatThreadingEnabled: u
					} = this.props, p = o.fbt._("Send a message (use the Enter key)", null, {
						hk: "3yojgj"
					}), f = r === F.J.RATELIMIT && parseInt(null === (e = null == n ? void 0 : n[0]) || void 0 === e ? void 0 : e.replace(/\D/g, "")) || q;
					return u && (null == m ? void 0 : m.isDeleted) ? null : i.a.createElement("div", {
						className: Object(l.a)(M.a.FormWrapper, {
							[M.a.v2]: t,
							[M.a.V2ChatPost]: t && !d
						})
					}, !!this.state.spamTimeoutDraftKey && i.a.createElement("p", {
						className: M.a.spamTimeout
					}, o.fbt._("Time until you can message", null, {
						hk: "3mkJ7J"
					}), " ", i.a.createElement(b, {
						durationSec: f,
						onTimeout: () => {
							this.props.clearSubmitError(this.state.spamTimeoutDraftKey), this.setState({
								spamTimeoutDraftKey: null
							})
						}
					}), i.a.createElement(j.a, null)), !d && m && !u && i.a.createElement(C.a, {
						commentId: m.id,
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
					}, !t && i.a.createElement(J, {
						isEditing: !!d
					}), i.a.createElement(_.a, {
						className: Object(l.a)(M.a.RichTextEditor, {
							[M.a.Editing]: d,
							[M.a.isV2ChatPost]: t,
							[M.a.isEmbeddedLiveChat]: h
						}),
						focusableContentRTEClassName: Object(l.a)({
							[M.a.V2ChatPostFocusableContent]: t
						}),
						dataTestId: K,
						editorType: v.a.Comment,
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
					}), d && i.a.createElement(g.e, {
						className: Object(l.a)(M.a.ChatButton),
						type: "reset"
					}, i.a.createElement(E.a, null)), i.a.createElement(g.e, {
						className: Object(l.a)(M.a.ChatButton, {
							[M.a.v2ChatPostButton]: !d && t
						}),
						type: "submit",
						disabled: !this.canSubmit(),
						"aria-label": o.fbt._("send a message", null, {
							hk: "4bL65Y"
						})
					}, t ? i.a.createElement(T.a, null) : i.a.createElement(I.a, null)))))
				}
			}
			const J = e => {
				let {
					isEditing: t
				} = e;
				return t ? i.a.createElement(p.a, {
					className: M.a.SmallChatUserIcon,
					height: 20,
					width: 20
				}) : i.a.createElement(p.a, {
					height: 25,
					width: 25
				})
			};
			t.default = V(z(Z))
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				l = s("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				m = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				h = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				u = s("./src/reddit/components/UserIcon/UserIcon.m.less"),
				p = s.n(u);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const b = Object(i.c)({
					currentUser: c.m,
					isNightMode: c.fb,
					isPresenceUserPrefEnabled: c.X,
					shouldHideNSFW: c.H
				}),
				_ = Object(r.b)(b);
			t.a = _(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: s,
					isPresenceUserPrefEnabled: n,
					wrapperClassName: r,
					...i
				} = e, c = Object(d.a)(null == t ? void 0 : t.accountIcon);
				return a.a.createElement("div", {
					className: Object(o.a)(p.a.currentUserIconWrapper, r)
				}, c ? a.a.createElement(m.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : a.a.createElement(h.b, C({}, i, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), s && a.a.createElement(l.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/icons/fonts/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("history", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/svgs/CloseV2/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", a({
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M11.065 1.46521L10.5346 0.934814L5.99977 5.46961L1.46497 0.934814L0.93457 1.46521L5.46937 6.00001L0.93457 10.5348L1.46497 11.0652L5.99977 6.53041L10.5346 11.0652L11.065 10.5348L6.53017 6.00001L11.065 1.46521Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/Send2/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 24 24",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M22.6559 10.8L2.39994 0.660011C2.15389 0.5293 1.87278 0.479801 1.59687 0.5186C1.32096 0.557399 1.06441 0.682508 0.863944 0.876011C0.656797 1.06387 0.51403 1.31216 0.455877 1.5857C0.397725 1.85923 0.427136 2.14413 0.539944 2.40001L4.58394 12L0.539944 21.6C0.429918 21.8544 0.401998 22.1368 0.460075 22.4078C0.518153 22.6789 0.659334 22.925 0.863944 23.112C1.10992 23.347 1.43582 23.4799 1.77594 23.484C1.99315 23.4934 2.20883 23.4437 2.39994 23.34L22.6559 13.2C22.8781 13.088 23.0648 12.9165 23.1952 12.7046C23.3256 12.4927 23.3947 12.2488 23.3947 12C23.3947 11.7512 23.3256 11.5073 23.1952 11.2954C23.0648 11.0836 22.8781 10.9121 22.6559 10.8Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Trash3/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => {
				let {
					className: t
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 16"
				}, n.a.createElement("g", null, n.a.createElement("path", {
					d: "M12.6004 4.84721L13.5996 4.91361L12.9908 14.0664C12.9841 14.5896 12.7788 15.0907 12.4165 15.4683C12.0543 15.8458 11.5621 16.0716 11.0396 16.1H4.95961C4.43817 16.0715 3.94695 15.8462 3.58511 15.4697C3.22327 15.0932 3.01774 14.5934 3.01001 14.0712L2.39961 4.91361L3.39801 4.84721L4.00681 14C4.00283 14.2684 4.09775 14.5288 4.27347 14.7317C4.44919 14.9345 4.69343 15.0657 4.95961 15.1H11.0396C11.3064 15.0651 11.551 14.9331 11.7267 14.7293C11.9025 14.5256 11.997 14.2642 11.9924 13.9952L12.6004 4.84721ZM14.3996 2.40001V3.40001H1.59961V2.40001H4.79961V2.10001C4.82803 1.51721 5.08582 0.969319 5.51672 0.575891C5.94762 0.182464 6.51664 -0.0245568 7.09961 7.87831e-06H8.89961C9.48258 -0.0245568 10.0516 0.182464 10.4825 0.575891C10.9134 0.969319 11.1712 1.51721 11.1996 2.10001V2.40001H14.3996ZM5.79961 2.40001H10.1996V2.10001C10.1705 1.78279 10.0179 1.48972 9.77473 1.28396C9.53155 1.0782 9.21727 0.976221 8.89961 1.00001H7.09961C6.78195 0.976221 6.46767 1.0782 6.22449 1.28396C5.98132 1.48972 5.82873 1.78279 5.79961 2.10001V2.40001Z",
					fill: "inherit"
				})))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatMessageInput.dff65504c8394fa4a99f.js.map